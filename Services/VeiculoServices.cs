using Microsoft.Extensions.Options;
using MongoDB.Driver;
using siscm_data_management.Database;
using siscm_data_management.Models.Especificacoes;

namespace siscm_data_management.Services;

public class VeiculoServices
{
    private readonly IMongoCollection<Veiculos> _veiculosCollection;

    public VeiculoServices(IOptions<DatabaseSettings> veiculoServices)
    {
        var mongoClient = new MongoClient(veiculoServices.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(veiculoServices.Value.DatabaseName);
        _veiculosCollection = mongoDatabase.GetCollection<Veiculos>(veiculoServices.Value.CollectionName);
    }
    
    // Operations
    public async Task<List<Veiculos>> GetAsync() =>
        await _veiculosCollection.Find(eletricos => true).ToListAsync();

    public async Task<Veiculos> GetAsync(string id) =>
        await _veiculosCollection.Find(eletricos => eletricos.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Veiculos veiculos) => 
        await _veiculosCollection.InsertOneAsync(veiculos);

    public async Task UpdateAsync(string id, Veiculos veiculos) =>
        await _veiculosCollection.ReplaceOneAsync(eletricos => eletricos.Id == id, veiculos);

    public async Task RemoveAsync(string id) => 
        await _veiculosCollection.DeleteOneAsync(eletricos => eletricos.Id == id);
}