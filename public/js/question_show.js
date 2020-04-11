console.log("smthing55");

const $container = $('.js-vote-arrows');
$container.find('a').on('click', function(e) {
    console.log('smthing');
    e.preventDefault();
    debugger;
    var $link = $(e.currentTarget);
    console.log($link);
    $.ajax({
        url: '/comments/10/vote/'+$link.data('direction'),
        method: 'POST'
    }).then(function(data) {
        console.log('bara3');
        $container.find('.js-vote-total').text(data.votes);
        console.log($container);
    });
});

