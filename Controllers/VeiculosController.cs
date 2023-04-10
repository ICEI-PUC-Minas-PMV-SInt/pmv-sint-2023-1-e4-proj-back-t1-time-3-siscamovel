using Microsoft.AspNetCore.Mvc;
using siscm_data_management.Models.Especificacoes;
using siscm_data_management.Services;

namespace siscm_data_management.Controllers
{
    [ApiController]
    [Route("siscm/[controller]")]
    public class VeiculosController : Controller
    {
        private readonly VeiculoServices _veiculoServices;

        public VeiculosController(VeiculoServices veiculoServices)
        {
            _veiculoServices = veiculoServices;
        }

        [HttpGet]
        public async Task<IActionResult> ObterTodosOsVeiculos()
        {
            var veiculos = await _veiculoServices.GetAsync();
            return Ok(veiculos);
        }

        [HttpPost]
        public async Task<Veiculos> AdicionarVeiculos([FromBody] Veiculos veiculosRequest)
        {
            await _veiculoServices.CreateAsync(veiculosRequest);
            return veiculosRequest;
        }
        
    }
}