using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Data.Interfaces
{
    public interface IMapRepository
    {
        public Task<string> SaveMap(Map newTeam, CancellationToken token);
        public Task<IEnumerable<Cell>> LoadMap();
    }
}
