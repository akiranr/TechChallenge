using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.Interfaces;
using EShop.Models;

namespace EShop.Services
{
    public class OrderService : IOrderService
    {
        private readonly IStoreService _storeService;
        public OrderService(IStoreService storeService)
        {
            _storeService = storeService;
        }

        public async Task<decimal> CalculateShippingCostAsync(IList<OrderItem> orderItems)
        {
            var products = await _storeService.GetAllProductsAsync();

            var totalOrderPrice = (from p in products
                                    join o in orderItems on p.Id equals o.Id
                                    select o.Quantity * p.Price).Sum();

            return totalOrderPrice <= 50 ? 10 : 20;
        }

        public async Task<int> PlaceOrderAsync(IList<OrderItem> orderItems)
        {
            // in an actual scenario
            // - create order entries in the database
            // - pass shipping information to another service
            // - trigger analytics etc

            var orderReferenceNumber = await Task.FromResult(12345); // dummy order number

            return orderReferenceNumber;
        }
    }
}