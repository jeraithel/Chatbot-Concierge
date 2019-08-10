import axios from "axios";

export default {
  // Gets all submissions
  getSubmissions: function() {
    return axios.get("/api/submissions");
  },
  // Gets the submissions with the given id
  getSubmission: function(id) {
    return axios.get("/api/submissions/" + id);
  },
  // Deletes the book with the given id
  deleteSubmission: function(id) {
    return axios.delete("/api/submissions/" + id);
  },
  // Saves a book to the database
  saveSubmission: function(submissionData) {
    console.log(submissionData)
    return axios.post("/api/submissions", submissionData);

  },
  // Approves a submission to the database
  approveSubmission: function(id) {
    return axios.put("/api/submissions/" + id);
  }
};



