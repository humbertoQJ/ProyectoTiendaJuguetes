using Microsoft.EntityFrameworkCore;
using TiendaJuguetesBackend.Entidades;

namespace TiendaJuguetesBackend
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Juguete> Juguetes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Juguete>().HasKey(a => a.Id);
        }
    }
}
