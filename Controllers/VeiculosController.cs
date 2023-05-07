using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using siscm_data_management.Database;
using siscm_data_management.Models.Especificacoes;

namespace siscm_data_management.Controllers;

[ApiController]
[Route("siscm/v1/[controller]")]
public class VeiculosController : Controller
{
    private readonly DatabaseSettings _gerenciar;

    public VeiculosController(DatabaseSettings databaseSettings)
    {
        _gerenciar = databaseSettings;
    }

    [HttpGet]
    public async Task<IActionResult> ObterTodosOsVeiculos()
    {
        var veiculos = await _gerenciar.veiculos.ToListAsync();
        
        if (veiculos == null)
        {
            return NoContent();
        }
        
        return Ok(veiculos);
    }

    [HttpPost]
    public async Task<IActionResult> AdicionarVeiculo([FromBody] Veiculos veiculosRequest)
    {
        veiculosRequest.Id = Guid.NewGuid();

        await _gerenciar.veiculos.AddAsync(veiculosRequest);
        await _gerenciar.SaveChangesAsync();

        if (veiculosRequest == null)
        {
            return NoContent();
        }        
        
        return Ok(veiculosRequest);
    }
}