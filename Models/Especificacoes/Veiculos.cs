namespace siscm_data_management.Models.Especificacoes;

public class Veiculos
{
    public Guid Id { get; set; }
    public string Fabricante { get; set; }
    public string Modelo { get; set; }
    public int Ano { get; set; }
    public string Bateria { get; set; }
    public string Carregamento { get; set; }
    public string Potencia { get; set; }
    public string Torque { get; set; }
    public string VelMaxima { get; set; }
    public string Tempo { get; set; }
    public string VolumePortaMalas { get; set; }
    public string PneusRodas { get; set; }
    public string Garantia { get; set; }
    public string Preco { get; set; }
}