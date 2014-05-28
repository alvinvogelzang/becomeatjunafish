BecomeTjunaFish.ApplicationView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
	$('.dropDown').hover(function(){
		$('ul.menuItems').toggle();
		$('.fa-chevron-down').toggle();
		$('.fa-chevron-up').toggle();
	});
	$( ".default-btn" ).hover(
	  function() {
	    $(this).parent('.introCourseColumn').find('.shake').addClass("hover");
	  }, function() {
	    $(this).parent('.introCourseColumn').find('.shake').removeClass("hover");
	  });
  }
});

BecomeTjunaFish.IndexView = BecomeTjunaFish.CourseView = BecomeTjunaFish.LessonView = BecomeTjunaFish.TopicView = BecomeTjunaFish.AssignmentView = Ember.View.extend({
	willAnimateIn : function () {
        this.$().css("opacity", 0);
    },

    animateIn : function (done) {
        this.$().fadeTo(300, 1, done);
    },

    animateOut : function (done) {
        this.$().fadeTo(300, 0, done);
    }
});



BecomeTjunaFish.CourseProgressView = Ember.View.extend({  
  didInsertElement: function () {
  	this._super();
    $(".dial").knob({
    	'min':0,
        'max':100,
        'readOnly': true,
        'width': 120,
        'height': 120,
        'fgColor': '#008c9e',
        'bgColor': 'rgba(255,255,255, .1)',
        'dynamicDraw': true,
        'thickness': 0.1,
        'tickColorizeValues': true
    });
    }
});

BecomeTjunaFish.LessonView = Ember.View.extend({
	didInsertElement: function (){
		this._super();
		var userProgress = this.get('controller.model.progress');
		console.log(userProgress);
		$("#progressbar" ).progressbar({
	      value: userProgress
	    });
	}

});

