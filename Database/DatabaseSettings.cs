using Microsoft.EntityFrameworkCore;
namespace siscm_data_management.Database;

public class DatabaseSettings : DbContext
{
    public DatabaseSettings(DbContextOptions opcoes) : base(opcoes)
    {
        
    }
}