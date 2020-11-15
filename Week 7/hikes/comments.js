class Comment {
    constructor() {
        this.comments = [];
    }

    addComment(hikeId, comment) { 
        newComment = {
        hikeId: hikeId,
        date: new Date(),
        content: comment
      };
      this.comments.push(newComment);
    }

    retrieveComment() {
        let comment = document.getElementById("comment").value;
        
    }


}