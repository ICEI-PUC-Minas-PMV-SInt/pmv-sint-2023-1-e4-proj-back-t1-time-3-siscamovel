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
        
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> ObterTodosOsVeiculosPorId(string id)
        {
            var veiculos = await _veiculoServices.GetByIdAsync(id);
            if (veiculos == null)
            {
                return NotFound();
            }
            return Ok(veiculos);
        }        

        [HttpPost]
        public async Task<Veiculos> AdicionarVeiculos([FromBody] Veiculos veiculosRequest)
        {
            await _veiculoServices.CreateAsync(veiculosRequest);
            return veiculosRequest;
        }

        [HttpPut]
        public async Task<IActionResult> Put(Veiculos veiculosUpdate)
        {
            var au = _veiculoServices.UpdateAsync(veiculosUpdate.Id, veiculosUpdate);
            if (au == null)
            {
                return NotFound();
            }

            await _veiculoServices.UpdateAsync(veiculosUpdate.Id, veiculosUpdate);
            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var ad = _veiculoServices.RemoveAsync(id);
            if (ad == null)
            {
                return NotFound();
            }

            await _veiculoServices.RemoveAsync(id);
            return NoContent();
        }
    }
}