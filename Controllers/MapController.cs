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
        private readonly CancellationToken _token;

        public MapController(IMapRepository mapRepository, IMapper mapper, CancellationToken token)
        {
            _mapper = mapper;
            _mapRepository = mapRepository;
            _token = token;
        }

        // POST: MapController/Create
        [HttpPost]
        [Route("save-map")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> SaveMapData(MapDto map)
        {
            //MapDto map = JsonSerializer.Deserialize<MapDto>(mapString);
            var newMap = _mapper.Map<MapDto, Map>(map);
            await _mapRepository.SaveMap(newMap, _token);

            return Ok();
        }
    }
}
