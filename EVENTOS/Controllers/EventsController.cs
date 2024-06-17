using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EVENTOS.Data;

[Route("api/[controller]")]
[ApiController]
public class EventsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EventsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetEvents()
    {
        var events = _context.Events.ToList();
        return Ok(events);
    }

    [HttpGet("{id}")]
    public IActionResult GetEvent(int id)
    {
        var eventEntity = _context.Events.Find(id);
        if (eventEntity == null)
        {
            return NotFound();
        }

        return Ok(eventEntity);
    }

    [HttpPost]
    public async Task<IActionResult> CreateEvent([FromBody] Event eventEntity)
    {
        if (eventEntity == null)
        {
            return BadRequest();
        }

        _context.Events.Add(eventEntity);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetEvent), new { id = eventEntity.Id }, eventEntity);
    }

    // Endpoint para registrar participantes pero sin almacenarlos en la base de datos
    [HttpPost("{eventId}/register")]
    public IActionResult RegisterParticipant(int eventId, [FromBody] object participant)
    {
        // Asumimos que el frontend se encarga del almacenamiento local
        return Ok();
    }
}
