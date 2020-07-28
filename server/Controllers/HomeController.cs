using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using EShop.Models;
using EShop.Interfaces;

namespace server.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IStoreService _storeService;

        public HomeController(ILogger<HomeController> logger,
                              IStoreService storeService)
        {
            _logger = logger;
            _storeService = storeService;
        }

        [HttpGet]
        [Route("api/products")]
        public async Task<IActionResult> GetAllProducts()
        {
            var data = await _storeService.GetAllProductsAsync();
            return Ok(data);
        }
    }
}
