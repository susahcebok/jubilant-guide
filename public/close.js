jQuery(document).ready(function($) {
if (window.history && window.history.pushState) {
window.history.pushState('forward', null, './#forward');
$(window).on('popstate', function() {
alert('Back button was pressed.');
});
}
});
