function attachHorizontalScrollListeners() {
    var boardContainer = $('#board-container');
    let isDown = false;
    let startX;
    let scrollLeftPixels;

    boardContainer.on('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - boardContainer.offset().left;
        scrollLeftPixels = boardContainer.scrollLeft();
    });

    boardContainer.on('mouseleave', (e) => {
        isDown = false;
    });

    boardContainer.on('mouseup', (e) => {
        isDown = false;
    });

    boardContainer.on('mousemove', (e) => {
        console.log("mousemove");
        if (!isDown) return;
        // This is a draggable card, we don't want to also drag the background while
        // dragging a card.
        if ($(e.target).parents('div.task-board.draggable-item').length != 0) return;
        e.preventDefault();
        const x = e.pageX - boardContainer.offset().left;
        const walk = (x - startX) * 2; // Scroll speed
        boardContainer.scrollLeft(scrollLeftPixels - walk);
    });
}

// Only attach if we're on a page that shows the board
if (KB.exists('#board-container')) {
    KB.on('dom.ready', function () {
        attachHorizontalScrollListeners();
    });
}

// #board-container disappears after an AJAX drag/drop event, so
// we have to reattach the listeners
$(document).ajaxStop(function(){
    if (KB.exists('#board-container')) {
        attachHorizontalScrollListeners();
    }
});

