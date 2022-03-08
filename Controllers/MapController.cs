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
        
        public MapController(IMapRepository mapRepository)
        {            
            _mapRepository = mapRepository;
        }

        // POST: MapController/Create
        [HttpPost]
        [Route("save-map")]        
        public async Task<ActionResult> SaveMapData([FromBody] Map cells, CancellationToken token)
        {            
            await _mapRepository.SaveMapAsync(cells, token);

            return Ok();
        }

        [HttpGet]
        [Route("load-map")]
        public async Task<ActionResult<Map>> LoadMapData(CancellationToken token)
        {
            var map = await _mapRepository.LoadMapAsync(token);            

            return Ok(map);
        }
    }
}
