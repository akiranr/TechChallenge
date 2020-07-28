using System.Collections.Generic;
using System.Threading.Tasks;
using EShop.Models;

namespace EShop.Interfaces
{
    public interface IOrderService
    {
        Task<decimal> CalculateShippingCostAsync(IList<OrderItem> orderItems);
        Task<int> PlaceOrderAsync(IList<OrderItem> orderItems);
    }
}