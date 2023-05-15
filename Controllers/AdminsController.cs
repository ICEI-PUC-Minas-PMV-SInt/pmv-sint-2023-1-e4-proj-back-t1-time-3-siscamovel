using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using siscm_data_management.Database;
using siscm_data_management.Models.Especificacoes;

namespace siscm_data_management.Controllers;

[ApiController]
[Route("siscm/v1/[controller]")]
public class AdminsController : Controller
{
    private readonly DatabaseSettings _gerenciar;

    public AdminsController(DatabaseSettings databaseSettings)
    {
        _gerenciar = databaseSettings;
    }

    /// <summary>
    /// Obter lista de cadastro de todas as pessoas administradoras do sistema
    /// </summary>
    /// <param name="model">Dados da pessoa</param>    
    [HttpGet]
    public async Task<IActionResult> ObterTodosAdmins()
    {
        var admins = await _gerenciar.admins.ToListAsync();
        
        if (admins == null)
        {
            return NoContent();
        }
        
        return Ok(admins);
    }
    
    /// <summary>
    /// Obter lista de cadastro de administador(a) pelo ID
    /// </summary>
    /// <param name="model">Dados da pessoa</param>   
    [HttpGet]
    [Route("{id:Guid}")]
    public async Task<IActionResult> ObterTodosAdminsPorId(Guid id)
    {
        var adminsPorId = await _gerenciar.admins.FirstOrDefaultAsync(adm => adm.Id == id);
        
        if (adminsPorId == null)
        {
            return NoContent();
        }
        
        return Ok(adminsPorId);
    }    

    /// <summary>
    /// Cadastrar pessoa administradora de sistema
    /// </summary>
    /// <param name="model">Dados da pessoa</param>   
    [HttpPost]
    public async Task<IActionResult> AdicionarAdmin([FromBody] Admins adminsRequest)
    {
        adminsRequest.Id = Guid.NewGuid();

        await _gerenciar.admins.AddAsync(adminsRequest);
        await _gerenciar.SaveChangesAsync();

        if (adminsRequest == null)
        {
            return NoContent();
        }        
        
        return Ok(adminsRequest);
    }

    /// <summary>
    /// Alterar dados de pessoa administradora
    /// </summary>
    /// <param name="model">Dados da pessoa</param>
    [HttpPut]
    [Route("{id:Guid}")]
    public async Task<IActionResult> AlterarDadosAdmin([FromRoute] Guid id, Admins atualizarAdmin)
    {
        var admin = await _gerenciar.admins.FindAsync(id);

        if (admin == null)
        {
            return NotFound();
        }

        admin.Id = atualizarAdmin.Id;
        admin.NomeAdmin = atualizarAdmin.NomeAdmin;
        admin.Siscamail = atualizarAdmin.Siscamail;

        await _gerenciar.SaveChangesAsync();

        return Ok(admin);
    }

    /// <summary>
    /// Remover pessoa administradora da base de dados
    /// </summary>
    /// <param name="model">Dados da pessoa</param>   
    [HttpDelete]
    [Route("{id:Guid}")]
    public async Task<IActionResult> RemoverAdmin([FromRoute] Guid id)
    {
        var removerAdmin = await _gerenciar.admins.FindAsync(id);

        if (removerAdmin == null)
        {
            return NotFound();
        }

        _gerenciar.admins.Remove(removerAdmin);
        await _gerenciar.SaveChangesAsync();

        return Ok();
    }
}