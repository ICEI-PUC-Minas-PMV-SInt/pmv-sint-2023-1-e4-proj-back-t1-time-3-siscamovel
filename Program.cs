using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using siscm_data_management.Database;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
    {
       c.SwaggerDoc("v1", new OpenApiInfo
       {
           Title = " SISCM Data Management (Only for educational purposes)",
           Description = "API para gerenciamento de dados da plataforma SISCAMOVEL",
           Version = "v1",
           Contact = new OpenApiContact
           {
               Name = "Danilo Santos",
               Url = new Uri("https://artededan.com"),
           }
       });
       var xmlFile = "siscm-data-management.xml";
       var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
       c.IncludeXmlComments(xmlPath);
    });

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