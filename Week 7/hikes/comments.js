class Comment {
    constructor() {
        this.comments = [];
    }

    addComment(hikeName, comment) { 
        newComment = {
        name: hikeName,
        date: new Date(),
        content: comment
      };
      this.comments.push(newComment);
    }

    retrieveComment() {
        let comment = document.getElementById("comment").value;
        
    }


}