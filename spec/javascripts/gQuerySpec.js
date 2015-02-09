describe('finding an id', function() {
  it ('finds the first element with a specific id', function() {
    var result = gQuery('#hello');

    expect(result).toEqual('<li id="hello">Blah</li>');
  });
});
