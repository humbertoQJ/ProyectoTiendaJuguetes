using System.ComponentModel.DataAnnotations;

namespace TiendaJuguetesBackend.Entidades
{
    public class Juguete
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Nombre { get; set; }

        [MaxLength(100)]
        public string Descripcion { get; set; }

        [Range(0, 100)]
        public int RestriccionEdad { get; set; }

        [Required]
        [MaxLength(50)]
        public string Compania { get; set; }

        [Required]
        [Range(1, 1000)]
        public int Precio { get; set; }
    }
}
