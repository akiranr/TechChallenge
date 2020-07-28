using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EShop.Models
{
    public class Cart
    {
        [Required]
        public List<OrderItem> OrderItems { get; set; }
    }
}