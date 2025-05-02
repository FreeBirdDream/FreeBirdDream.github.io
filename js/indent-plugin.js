<script type="text/javascript">
$('p:contains("ooNoIndent00")').each(function() {
    var text = $(this).html();
    $(this).css('text-indent', '0em');
    $(this).html(text.replace('ooNoIndent00', '')); 

});
</script>