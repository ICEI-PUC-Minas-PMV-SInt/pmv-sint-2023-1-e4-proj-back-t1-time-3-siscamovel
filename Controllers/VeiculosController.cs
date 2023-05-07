using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using siscm_data_management.Database;

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
}