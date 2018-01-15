$('.password-toggle').click(function() {

	if($(this).parent().next().attr('type') == 'password')
	{
		$(this).parent().next().attr('type', 'text');
		$(this).children().html('&#xe106;');
	}
	else
	{
		$(this).parent().next().attr('type', 'password');
		$(this).children().html('&#xe105;');
	}

});