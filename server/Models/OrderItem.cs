using System.ComponentModel.DataAnnotations;

namespace EShop.Models
{
    public class OrderItem
    {
        [Required]
        public long Id { get; set; }

        [Required]
        [Range(1, 10)]
        public int Quantity { get; set; }
    }
}