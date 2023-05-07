using Microsoft.EntityFrameworkCore;
using siscm_data_management.Models.Especificacoes;

namespace siscm_data_management.Database;

public class DatabaseSettings : DbContext
{
    public DatabaseSettings(DbContextOptions opcoes) : base(opcoes)
    {
        
    }
    
    public DbSet<Veiculos> veiculos { get; set; }
}