// test file 2
define('routes', function() {
  	return function(match) {
    	match('', 'input#show');
    	match('all', 'input#showAll',{params : {status : 'all'}});
    	match('active', 'input#showAll',{params : {status : 'active'}});
    	match('complete', 'input#showAll',{params : {status : 'complete'}});
  	};
});
