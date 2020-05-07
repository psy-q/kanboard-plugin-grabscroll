KB.on('dom.ready', function () {
	function attachHorizontalScrollListeners() {
		var boardContainer = $('#board-container');
		let isDown = false;
		let startX;
		let scrollLeftPixels;

		boardContainer.on('mousedown', (e) => {
			isDown = true;
			boardContainer.addClass('horizontally-dragged');
			startX = e.pageX - boardContainer.offset().left;
			scrollLeftPixels = boardContainer.scrollLeft();
		});

		boardContainer.on('mouseleave', () => {
			isDown = false;
			boardContainer.removeClass('horizontally-dragged');
		});

		boardContainer.on('mouseup', () => {
			isDown = false;
			boardContainer.removeClass('horizontally-dragged');
		});

		boardContainer.on('mousemove', (e) => {
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

	if (KB.exists('#board-container')) {
		attachHorizontalScrollListeners();
	}
});
