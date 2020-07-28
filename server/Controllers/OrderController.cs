using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using EShop.Models;
using EShop.Interfaces;
using System.Net;
using Microsoft.AspNetCore.Http;

namespace server.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IOrderService _orderService;

        public OrderController(ILogger<HomeController> logger,
                               IOrderService orderService)
        {
            _logger = logger;
            _orderService = orderService;
        }

        [HttpPost]
        [Route("api/calculate-shipping-cost")]
        public async Task<IActionResult> CalculateShippingCost(Cart cart)
        {
            var cost = await _orderService.CalculateShippingCostAsync(cart.OrderItems);
            return Ok(cost);
        }

        [HttpPost]
        [Route("api/place-order")]
        public async Task<IActionResult> PlaceOrder(Cart cart)
        {
            var orderReferenceNumber = await _orderService.PlaceOrderAsync(cart.OrderItems);

            return new ObjectResult(orderReferenceNumber) { StatusCode = StatusCodes.Status201Created };
        }
    }
}
