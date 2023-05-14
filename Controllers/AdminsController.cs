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