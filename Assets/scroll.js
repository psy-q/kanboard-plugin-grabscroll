KB.on('dom.ready', function () {
	function attachHorizontalScrollListeners() {
		var mainContainer = $('#main');
		let isDown = false;
		let startX;
		let scrollLeftPixels;

		mainContainer.on('mousedown', (e) => {
			isDown = true;
			$('#board-container').addClass('horizontally-dragged');
			startX = e.pageX - $('#board-container').offset().left;
			scrollLeftPixels = $('#board-container').scrollLeft();
		});

		mainContainer.on('mouseleave', () => {
			isDown = false;
			$('#board-container').removeClass('horizontally-dragged');
		});

		mainContainer.on('mouseup', () => {
			isDown = false;
			$('#board-container').removeClass('horizontally-dragged');
		});

		mainContainer.on('mousemove', (e) => {
			if (!isDown) return;
			// This is a draggable card, we don't want to also drag the background while
			// dragging a card. 
			if ($(e.target).parents('div.task-board.draggable-item').length != 0) return;
			e.preventDefault();
			const x = e.pageX - $('#board-container').offset().left;
			const walk = (x - startX) * 2; // Scroll speed
			$('#board-container').scrollLeft(scrollLeftPixels - walk);
		});
	}

	if (KB.exists('#board-container')) {
		attachHorizontalScrollListeners();
	}
});
