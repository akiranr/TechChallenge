using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.Interfaces;
using EShop.Models;

namespace EShop.Services
{
    public class StoreService : IStoreService
    {
        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await Task.FromResult(Enumerable.Range(1, 20)
            .Select(i => new Product
            {
                Id = i,
                Name = $"P{i}",
                Price = 100
            }));
        }
    }
}