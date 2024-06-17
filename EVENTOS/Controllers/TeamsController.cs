using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class TeamsController : ControllerBase
{
    private static List<Team> teams = new List<Team>();
    private static int nextId = 1;

    [HttpGet]
    public IActionResult GetTeams()
    {
        return Ok(teams);
    }

    [HttpPost]
    public IActionResult AddTeam(Team team)
    {
        team.Id = nextId++;
        teams.Add(team);
        return Ok(team);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTeam(int id)
    {
        var team = teams.FirstOrDefault(t => t.Id == id);
        if (team == null)
        {
            return NotFound();
        }
        teams.Remove(team);
        return NoContent();
    }
}
