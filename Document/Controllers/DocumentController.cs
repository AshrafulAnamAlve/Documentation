using Document.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Document.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private DocDbContext Context;
        public DocumentController(DocDbContext dbContext)
        {
            this.Context = dbContext;
        }
        [HttpGet("GetAllDocument")]
        public List<DocumentModel> GetAllDocument()
        {
            var doc = Context.Documents.ToList();
            return doc;
        }

        [HttpGet("GetAllType")]
        public List<DocumentType> GetAllType()
        {
            var doc = Context.DocumentTypes.ToList();
            return doc;
        }

        [HttpGet("GetAllState")]
        public List<DocumentState> GetAllState()
        {
            var doc = Context.DocumentStates.ToList();
            return doc;
        }
        [HttpPost("PostDocumnet")]
        public DocumentModel PostDocumnet(DocumentModel doc)
        {
            doc.CreateDate = DateTime.Now;
            Context.Documents.Add(doc);
            Context.SaveChanges();
            return doc;
        }
        [HttpPut("UpdateDocument")]
        public IActionResult UpdateDocument(DocumentModel doc)
        {
            var record = Context.Documents.SingleOrDefault(m=>m.documentId == doc.documentId);
            if(record == null)
            {
                return NotFound("Document Not found");
            }
            record.coustomerName = doc.coustomerName;
            record.resulation = doc.resulation;
            record.mobileNo = doc.mobileNo;
            record.email = doc.email;
            record.message = doc.message;
            record.documentStateId = doc.documentStateId;
            record.documentTypeId = doc.documentTypeId;

            Context.SaveChanges();
            return Ok();
        }
        [HttpDelete("deleteDocument/{id}")]
        public bool DeleteDocument(int id)
        {
            var record = Context.Documents.SingleOrDefault(m=>m.documentId ==id);
            if(record != null)
            {
                Context.Documents.Remove(record);
                Context.SaveChanges();
                return true;
            }
            return false;
        }

    }
}
