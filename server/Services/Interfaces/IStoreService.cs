using System.Collections.Generic;
using System.Threading.Tasks;
using EShop.Models;

namespace EShop.Interfaces
{
    public interface IStoreService
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
    }
}