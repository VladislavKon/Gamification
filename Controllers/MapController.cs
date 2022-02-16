using AutoMapper;
using Gamification.Data.Interfaces;
using Gamification.Models;
using Gamification.Models.DTO.Map;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Controllers
{
    [Route("api/map")]
    [ApiController]
    public class MapController : ControllerBase
    {
        private readonly IMapRepository _mapRepository;
        private readonly IMapper _mapper;

        public MapController(IMapRepository mapRepository, IMapper mapper )
        {
            _mapper = mapper;
            _mapRepository = mapRepository;
        }

        // POST: MapController/Create
        [HttpPost]
        [Route("save-map")]        
        public async Task<ActionResult> SaveMapData([FromBody] MapDto cells, CancellationToken token)
        {
            Map map = _mapper.Map<Map>(cells);
            await _mapRepository.SaveMap(map, token);

            return Ok();
        }
    }
}
