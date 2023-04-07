using Microsoft.AspNetCore.Mvc;

namespace siscm_data_management.Controllers;

[ApiController]
[Route("[controller]")]
public class DataManagementController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<DataManagementController> _logger;

    public DataManagementController(ILogger<DataManagementController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetDataManagement")]
    public IEnumerable<DataManagement> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new DataManagement
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
