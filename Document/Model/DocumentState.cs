using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Document.Model
{
    public class DocumentState
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StateId {  get; set; }
        [Required]
        public string StateName {  get; set; }=string.Empty;
    }
}
