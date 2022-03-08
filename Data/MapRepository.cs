using Gamification.Data.Interfaces;
using Gamification.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Data
{
    public class MapRepository: IMapRepository
    {
        private readonly ApplicationContext db;
        public MapRepository(ApplicationContext context)
        {
            db = context;

        }

        public async Task<string> SaveMapAsync(Map map, CancellationToken token)
        {
            string message;
            try
            {
                foreach (var cell in map.Cells)
                {
                    db.Cells.Add(cell);
                }
                
                await db.SaveChangesAsync(token);
                return message = $"Ячейки успешно сохранены в количестве: {db.Cells.Count()}";
            }
            catch (Exception e)
            {
                return message = $"Не удалось сохранить карту: {e.Message}";
            }
            
        }

        public async Task<Map> LoadMapAsync(CancellationToken token)
        {
            var response = await db.Cells
                .Select(c => c)
                .ToListAsync(token);
            Map map = new Map(response);

            return map;
        }        
    }
}
