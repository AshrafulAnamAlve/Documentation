using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Document.Model
{
    public class DocumentModel
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int documentId {  get; set; }
        [ForeignKey("DocumentType")]
        public int documentTypeId {  get; set; }
        [ForeignKey("DocumentState")]
        public int documentStateId {  get; set; }

        public string coustomerName {  get; set; }=string.Empty;   
        public string mobileNo {  get; set; }=string.Empty;
        public string email { get; set; } = string.Empty;
        public string message { get; set; } = string.Empty;
        public DateTime CreateDate {  get; set; }
        public string resulation { get; set; } = string.Empty;

        
    }
}
