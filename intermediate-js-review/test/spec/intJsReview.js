describe('review', function () {
    describe('Answer 1', function () {
		it('should equal the value of rules as seen by thePowerlessFigurehead function',
    function () {
      var theAnswer = 'love me plz';
			expect(ans1).toEqual(theAnswer);
		});
	});

  describe('Answer 2', function () {
    it('should equal the value of rules as seen by theJudge function', function () {
      expect(ans2).toEqual('cry all day');
    });
  });

	describe('Answer 3', function () {
		it('should equal the value of job as seen by the Overlord function', function () {
			expect(ans3).toBe(undefined);
		});
	});

  describe('Answer 4', function () {
    it('should equal the value of job as seen by thePowerlessFigurehead function', function () {
      expect(ans4).toBe(undefined);
    });
  });

  describe('Answer 5', function () {
    it('should equal the value of money as seen by theTragicHumanitarian function', function () {
      expect(ans5).toEqual('belongs to the overlord');
    });
  });

  describe('iPromise', function () {
    it('should exist', function () {
      expect(iPromise).toEqual(jasmine.any(Function));
    })
    it('should return a promise', function () {
      expect(iPromise().then).toEqual(jasmine.any(Function))
    })
    it('should resolve the promise', function (done) {
      iPromise().then(function (response) {
        expect(response).toEqual(39088169)
        done();
      })
    })
  })

  describe('contextIt', function () {
    it('should invoke a function in the context with the parameters', function () {
      var theContext = {fruit: 4, snakes: 2}
      var theFunction = function (a, b) {
        return this[a] - this[b];
      }
      expect(contextIt(theFunction, theContext, 'fruit', 'snakes')).toEqual(2);
    })
  })

  describe('contextIt2', function () {
    it('should invoke a function in the context with the array passed in as parameters',
    function () {
      var theContext = {fruit: 4, snakes: 2}
      var theFunction = function (a, b) {
        return this[a] - this[b];
      }
      expect(contextIt2(theFunction, theContext, ['fruit', 'snakes'])).toEqual(2);
    })

  })

  describe('contextIt3', function () {
    var getNum = function() {
    return Math.floor(Math.random() * 100);
    }
    var theContext = {num: getNum()};
    var theFunction = function (a, b) {
      return this.num;
    }

    it('should return a function', function () {
      expect(contextIt3(theFunction, theContext)).toEqual(jasmine.any(Function));
    })
    it('should correctly assign context', function () {
      expect(contextIt3(theFunction, theContext)()).toEqual(theContext.num);
    })
  })

	describe('Unicorn', function () {
    var mcGlitterson = new Unicorn('blue', 'good', 100, true);
		it('should exist', function () {
			expect(Unicorn).toEqual(jasmine.any(Function));
		});
		it('should be a constructor function', function () {
      expect(new Unicorn()).toEqual(jasmine.any(Object));
    })
    it('should make a magical unicorn', function () {
      expect(mcGlitterson.hornColor).toEqual('blue');
      expect(mcGlitterson.magicType).toEqual('good');
      expect(mcGlitterson.mana).toBeDefined();
      expect(mcGlitterson.canFly).toEqual(true);
    })
    it('should have a method called castBubbleWrapSpell', function () {
      expect(mcGlitterson.castBubbleWrapSpell).toEqual(jasmine.any(Function));
    })
    it('should have a method called castBubbleWrapSpell on the prototype', function () {
      expect(mcGlitterson.hasOwnProperty('castBubbleWrapSpell')).toBe(false)
    })
    it('should cast bubbles and take away mana', function () {
      bubbles = 0;
      mcGlitterson.castBubbleWrapSpell()
      expect(bubbles).toEqual(100);
      expect(mcGlitterson.mana).toEqual(85);
    })
	});


	describe('greetingMaker', function () {
		it('should exist and be a function', function () {
			expect(greetingMaker).toEqual(jasmine.any(Function));
		});

    it('should return a function', function () {
      expect(greetingMaker('Donald')).toEqual(jasmine.any(Function));
    })

		it('should return a function that takes in a greeting and returns the name plus the greeting',
    function () {
      expect(greetingMaker('Donald')(' I greet thee')).toEqual('Donald I greet thee');
		});

	});


	describe('countdownMaker', function () {
		it('should exist', function () {
			expect(countdownMaker).toEqual(jasmine.any(Function));
		});
		it('should return a function', function () {
      expect(countdownMaker('birthday', 2)).toEqual(jasmine.any(Function))
		});
    it('should return a function with a countdown', function () {
      var myBirthdayCountdown = countdownMaker('birthday', 2);
      expect(myBirthdayCountdown()).toEqual({event: 'birthday', daysLeft: 1})
      expect(myBirthdayCountdown()).toEqual({event: 'birthday', daysLeft: 0})
    })
	});

	describe('notMyType', function () {
		it('should exist', function () {
			expect(notMyType).toEqual(jasmine.any(Function));
		});
		it('should return data type', function () {
      expect(notMyType(2)).toEqual(typeof 2);
      expect(notMyType('I love nighttime')).toEqual(typeof 'this');
      expect(notMyType(true)).toEqual(typeof false);
      expect(notMyType(function () {
        return
      })).toEqual(typeof console.log);
		});
	});

});
