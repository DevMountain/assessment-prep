describe('review', function () {
    describe('color', function () {
		it('should exist, value should be a string', function () {
			expect(color).toEqual(jasmine.any(String));
		});
		it('should equal \'dark blue\'', function () {
			expect(color).toEqual('dark blue');
		});
	});

  describe('myFave', function () {
  it('should exist, value should be a string', function () {
    expect(myFave).toEqual(jasmine.any(String));
  });
  it('should equal \'My favorite color is\'', function () {
    expect(myFave).toEqual('My favorite color is');
  });
});

	describe('myFavoriteColor', function () {
		it('should exist', function () {
			expect(myFavoriteColor).toEqual(jasmine.any(String));
		});
		it('should equal \'My favorite color is dark blue\'', function () {
			expect(myFavoriteColor).toEqual('My favorite color is dark blue');
		});
	});

  describe('aThroughD', function () {
    var check = ['a', 'b', 'c', 'd'];

    it('should exist', function () {
      expect(aThroughD).toEqual(jasmine.any(Array));
    });

    it('should not have a', function () {
      aThroughD = aThroughD.map(function(value) {
        return value.toLowerCase();
      });

      expect(aThroughD.includes('a')).toBe(false);
    });
    it('should have e at the end', function () {
      aThroughD = aThroughD.map(function(value) {
        return value.toLowerCase();
      });
      expect(aThroughD[aThroughD.length-1]).toEqual('e')
    })
    it('should have apple at the beginning', function () {
      aThroughD = aThroughD.map(function(value) {
        return value.toLowerCase();
      });
      expect(aThroughD[0]).toEqual('apple');
    })
    it('should not have c', function () {
      aThroughD = aThroughD.map(function(value) {
        return value.toLowerCase();
      });
      expect(aThroughD.includes('c')).toBe(false)
    })
    it('should include cat', function () {
      aThroughD = aThroughD.map(function(value) {
        return value.toLowerCase();
      });
      expect(aThroughD.includes('cat')).toBe(true)
    })
    it('should have cat where c was', function () {
      aThroughD = aThroughD.map(function(value) {
        return value.toLowerCase();
      });
      expect(aThroughD[2]).toEqual('cat')
    })
  });

  describe('isForApple', function () {
    it('should exist', function () {
      expect(isForApple).toEqual(jasmine.any(String));
    })
    it('should equal a', function () {
      expect(isForApple.toLowerCase()).toEqual('a');
    })
  })
  describe('bestFruit', function () {
    it('should exist', function () {
      expect(bestFruit).toEqual(jasmine.any(String));
    })
    it('should equal apple', function () {
      expect(bestFruit.toLowerCase()).toEqual('apple');
    })
  })

	describe('spaceJam', function () {
		it('should exist', function () {
			expect(spaceJam).toBeDefined();
		});
		it('should be as described', function () {
      expect(spaceJam.title).toEqual(jasmine.any(String))
			expect(spaceJam.title.toLowerCase()).toEqual("space jam");
      expect(spaceJam.release_year).toEqual(jasmine.any(Number));
			expect(spaceJam.release_year == '1996').toBe(true);
			expect(spaceJam.oscarAwardWinner).toEqual(false);
			expect(spaceJam.stars).toContain('Michael Jordan');
			expect(spaceJam.stars).toContain('Bugs Bunny');
			expect(spaceJam.stars).toContain('Bill Murray');
		});
	});

	describe('anakinSkywalker', function () {
		it('should be on the dark side', function () {
			expect(anakinSkywalker.side.toLowerCase()).toEqual('dark');
		});

    it('should have an illegitimate child, Jar Jar', function () {
      expect(anakinSkywalker.children).toContain('Jar Jar');
    })

		it('should be bitter and alone', function () {
      expect(anakinSkywalker.hasOwnProperty('former_significant_other')).toEqual(false);
      expect(anakinSkywalker.hasOwnProperty('former_mother')).toEqual(false);
		});

	});


	describe('numChecker', function () {
		it('should exist', function () {
			expect(numChecker).toBeDefined();
		});
		it('should return true with a number', function () {
      expect(numChecker(1)).toBe(true)
      expect(numChecker(1.4)).toBe(true)
      expect(numChecker('a')).toBe(false)
		});
    it('should return true with a number as a string', function () {
      expect(numChecker('3')).toEqual(true)
      expect(numChecker('23.4')).toEqual(true)
    })
	});

	describe('rightNow', function () {
		it('should exist', function () {
			expect(rightNow).toBeDefined();
		});
		it('should create a date object', function () {

      expect(rightNow()).toEqual(new Date());
		});
	});


	describe('whoAmI', function () {
    var one = {name:'Shauna'}, two = {skills: 'ninja fighting'},
        three = {name: undefined}, four = {name: 'Diego'}
		it('should exist', function () {
			expect(whoAmI).toBeDefined();
		});
    it('should return the name if name defined', function () {
      expect(whoAmI(one)).toEqual('Shauna');
      expect(whoAmI(four)).toEqual('Diego');

    })
		it('should return "has amnesia" if name undefined', function () {
      expect(whoAmI(two)).toEqual('has amnesia');
			expect(whoAmI(three)).toEqual('has amnesia');
		});
	});

	describe('returnMe', function () {
		it('should exist', function () {
			expect(returnMe).toBeDefined();
		});
		it('should run the callback function with the parameter', function () {
      var p1 = "me", f1 = function (a) {return a + a},
          p2 = 2, f2 = function(a) {return a*2};
      expect(returnMe(8, f1)).toEqual(16);
      expect(returnMe(p1, f1)).toEqual("meme");
      expect(returnMe(p2, f2)).toEqual(4);
      expect(returnMe('hello', f2)).toEqual(NaN);
		});
	});

});
