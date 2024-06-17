using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class ParticipantsController : ControllerBase
{
    private static List<Participant> participants = new List<Participant>();
    private static int nextId = 1;

    [HttpGet]
    public IActionResult GetParticipants()
    {
        return Ok(participants);
    }

    [HttpPost]
    public IActionResult AddParticipant(Participant participant)
    {
        participant.Id = nextId++;
        participants.Add(participant);
        return Ok(participant);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteParticipant(int id)
    {
        var participant = participants.FirstOrDefault(p => p.Id == id);
        if (participant == null)
        {
            return NotFound();
        }
        participants.Remove(participant);
        return NoContent();
    }
}
