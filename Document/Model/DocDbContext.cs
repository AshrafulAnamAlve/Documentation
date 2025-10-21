using Microsoft.EntityFrameworkCore;

namespace Document.Model
{
    public class DocDbContext : DbContext
    {
        public DocDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<DocumentModel> Documents { get; set; }
        public DbSet<DocumentState> DocumentStates { get; set; }
        public DbSet<DocumentType> DocumentTypes { get; set; }
    }
}
