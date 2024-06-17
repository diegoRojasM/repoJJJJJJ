using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EVENTOS.Data;

namespace Eventos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccountController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
                return BadRequest(new { message = "User with this email already exists" });
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var existingUser = await _context.Users
                .SingleOrDefaultAsync(u => u.Email == user.Email && u.Password == user.Password);

            if (existingUser == null)
            {
                return Unauthorized();
            }

            return Ok(existingUser);
        }
    }
}
