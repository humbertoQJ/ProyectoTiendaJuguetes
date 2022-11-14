using Microsoft.EntityFrameworkCore;
using TiendaJuguetesBackend.Entidades;

namespace TiendaJuguetesBackend.Repositorio
{
    public class JuguetesRepositorio : IRepository
    {
        private readonly AppDbContext context;

        public JuguetesRepositorio(AppDbContext context)
        {
            this.context = context;
        }
        public async Task Actualizar(Juguete juguete)
        {
            context.Juguetes.Update(juguete);
            await context.SaveChangesAsync();
        }

        public async Task Borrar(int id)
        {
            var juguete = new Juguete() { Id = id };
            context.Juguetes.Remove(juguete);
            await context.SaveChangesAsync();
        }

        public async Task Insertar(Juguete juguete)
        {
            context.Juguetes.Add(juguete);
            await context.SaveChangesAsync();
        }

        public Task<Juguete> ObtenerPorId(int id)
        {
            return context.Juguetes.FirstOrDefaultAsync(a => a.Id.Equals(id));
        }

        public async Task<List<Juguete>> ObtenerTodos()
        {
            return await context.Juguetes.ToListAsync();
        }
    }
}
