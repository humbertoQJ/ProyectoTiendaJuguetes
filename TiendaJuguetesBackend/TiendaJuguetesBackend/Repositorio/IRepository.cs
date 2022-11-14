using TiendaJuguetesBackend.Entidades;

namespace TiendaJuguetesBackend.Repositorio
{
    public interface IRepository
    {
        Task<List<Juguete>> ObtenerTodos();
        Task<Juguete> ObtenerPorId(int id);
        Task Insertar(Juguete juguete);
        Task Borrar(int id);
        Task Actualizar(Juguete juguete);
    }
}
