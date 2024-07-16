document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    let likes = 0;
    let isLiked = false;

    likeButton.addEventListener('click', function() {
        if (isLiked) {
            likes--;
            likeButton.classList.remove('liked');
        } else {
            likes++;
            likeButton.classList.add('liked');
        }
        isLiked = !isLiked;
        likeCount.textContent = likes;
    });

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const commentText = document.getElementById('commentText').value;
        if (commentText.trim() !== '') {
            addComment(commentText);
            commentForm.reset();
        }
    });

    function addComment(text) {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        const now = new Date();
        comment.innerHTML = `
            <div class="author">Anonymous User</div>
            <div class="date">${now.toLocaleString()}</div>
            <div class="text">${text}</div>
        `;
        commentsList.prepend(comment);
    }
});