using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using EShop.Models;

namespace server.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        private static readonly List<Product> Products = new List<Product>
        {
            new Product 
            {
                Id = 1,
                Name = "P1",
                Price = 100.0M
            }
        };

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/products")]
        public IEnumerable<Product> GetAllProducts()
        {
            return Products;
        }
    }
}
