using Microsoft.AspNetCore.Mvc;
using TiendaJuguetesBackend.Entidades;
using TiendaJuguetesBackend.Repositorio;

namespace TiendaJuguetesBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JuguetesController : ControllerBase
    {
        private readonly IRepository repositorio;

        public JuguetesController(IRepository repositorio)
        {
            this.repositorio = repositorio;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerTodos()
        {
            var juguetes = await repositorio.ObtenerTodos();
            return Ok(juguetes);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> ObtenerPorId(int id)
        {
            var juguete = await repositorio.ObtenerPorId(id);
            return Ok(juguete);
        }

        [HttpPost("agregar")]
        public async Task<IActionResult> Create(Juguete juguete)
        {
            await repositorio.Insertar(juguete);
            return Created(string.Empty, juguete.Id);
        }

        [HttpPut("actualizar")]
        public async Task<IActionResult> Update([FromBody] Juguete juguete)
        {
            await repositorio.Actualizar(juguete);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await repositorio.Borrar(id);
            return NoContent();
        }
    }
}
