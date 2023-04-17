using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace siscm_data_management.Models.Especificacoes;

public class Veiculos
{
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Fabricante")]
    public string Fabricante { get; set; } = string.Empty;

    [BsonElement("Modelo")]
    public string Modelo { get; set; } = string.Empty;

    [BsonElement("Ano")]
    public int Ano { get; set; }
}