using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Document.Model
{
    public class DocumentType
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int typeId {  get; set; }
        [Required]
        public string typeName {  get; set; }=string.Empty;
    }
}
