describe('String', function() {

	describe('#calc', function() {
		it('should return 0 if string is empty', function() {
			expect("".calc()).toEqual(0);	
		});
		it('should return a number if its in string format', function() {
			expect("2".calc()).toEqual(2);	
		});
		it('should return sum of 2 comma separated numbers', function() {
			expect("1,2,3".calc()).toEqual(6);	
		});
		it('should work with line breaks', function() {
			expect("1\n2,3".calc()).toEqual(6);	
		});
		it('should ignore numbers bigger than 1000', function() {
			expect("1,2,1002".calc()).toEqual(3);	
		});
		it('should work with non-comma delimiter', function() {
			expect("//;\n1;2".calc()).toEqual(3);
			expect("//'\n1'2".calc()).toEqual(3);	
		});
	});
});
