BecomeTjunaFish.ApplicationView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
	$('.dropDown').hover(function(){
		$('ul.menuItems').toggle();
		$('.fa-chevron-down').toggle();
		$('.fa-chevron-up').toggle();
	});
    $(".menu-link, #menu ul li").click(function(){
      $("#menu").toggleClass("active");
      $(".contentWrapper").toggleClass("active");
    });
  }
});

BecomeTjunaFish.IndexView = Ember.View.extend({
    willAnimateIn : function () {
        this.$().css("opacity", 0);
    },

    animateIn : function (done) {
        this.$().fadeTo(300, 1, done);
    },

    animateOut : function (done) {
        this.$().fadeTo(300, 0, done);
    },
    didInsertElement : function(){
        $( ".default-btn" ).hover(
          function() {
            $(this).parent('.introCourseColumn').find('.shake').toggleClass("hover");
          });
    }
})

BecomeTjunaFish.CourseView = BecomeTjunaFish.LessonView = BecomeTjunaFish.TopicView = Ember.View.extend({
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

BecomeTjunaFish.ProgresscourseView = Ember.View.extend({
    forceRerender: function(){
        this.rerender();
    }.observes("controller.model"),

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
        // this.get('controller').progressCalc();
		var userProgress = this.get('controller.model.progress');
		console.log(userProgress);
		$("#progressbar").progressbar({
	      value: userProgress
	    });
	}

});

BecomeTjunaFish.AssignmentView = Ember.View.extend({
    didInsertElement: function (){
        this._super();
        $('.custom-upload input[type=file]').change(function(){
            $(this).next().find('input').val($(this).val());
        });
        $('.uploadBtn').on('click', function(){
            $('.assignmentFeedback').addClass("show");
        });
    },
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

BecomeTjunaFish.LessonProgressView = Ember.View.extend({
    didInsertElement: function (){
        this._super();
        var userProgress = this.get('controller.model.progress');
        console.log(userProgress);
        $(".progressbar").each(function(){
            $(this).progressbar();
            $(this).progressbar('option', 'value', parseInt($(this).attr('data-value')));
        })

        
    }

});

BecomeTjunaFish.TopicView = Ember.View.extend({
    forceRerender: function(){
        this.rerender();
    }.observes("controller.model"),

    willAnimateIn : function () {
        this.$().css("opacity", 0);
    },

    animateIn : function (done) {
        this.$().fadeTo(300, 1, done);
    },

    animateOut : function (done) {
        this.$().fadeTo(300, 0, done);
    },

    didInsertElement: function (){
        $('.closePopUp, .nextTopicBtn').on('click', function(){
            $('.popUpReward').removeClass('show');
        });
    }
})



