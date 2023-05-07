using Microsoft.EntityFrameworkCore;
using siscm_data_management.Database;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddPolicy(name: "SiscmOrigins", 
    policy => 
    { 
        policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
        
    })
);

// DB Connection
string connectionString = builder.Configuration.GetConnectionString("SISCMDatabase");
ServerVersion serverVersion = MariaDbServerVersion.AutoDetect(connectionString);

builder.Services.AddDbContext<DatabaseSettings>
    (opcoes => opcoes.UseMySql(connectionString, serverVersion));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("SiscmOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();