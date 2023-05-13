using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace siscm_data_management.Migrations
{
    /// <inheritdoc />
    public partial class MigrationMay11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bateria",
                table: "veiculos");

            migrationBuilder.RenameColumn(
                name: "VelMaxima",
                table: "veiculos",
                newName: "VelocidadeMaxima");

            migrationBuilder.RenameColumn(
                name: "Carregamento",
                table: "veiculos",
                newName: "Capacidade");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VelocidadeMaxima",
                table: "veiculos",
                newName: "VelMaxima");

            migrationBuilder.RenameColumn(
                name: "Capacidade",
                table: "veiculos",
                newName: "Carregamento");

            migrationBuilder.AddColumn<string>(
                name: "Bateria",
                table: "veiculos",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
