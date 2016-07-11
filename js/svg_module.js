var SVG_MODULE = SVG_MODULE || function() {

  this.render_dot = function( dot, svg_element_id ) {
    //var g = graphlibDot.read( dot );
    var g = graphlibDot.read("digraph { 1; 2; 1 -> 2 [label=\"label\"] }");
    g.nodes().forEach(function(v) {
      var node = g.node(v);
      node.shape = "ellipse";
    });
    g.edges().forEach(function(v) {
      var node = g.edge(v);
      node.lineInterpolate = "basis";
    });
    var render = new dagreD3.render();
    var svg = d3.select( '#svg_graph' ),
        svgGroup = svg.append( 'g' );
    render( d3.select( svg_element_id ), g );
    // Set up zoom support
    var zoom = d3.behavior.zoom().on("zoom", function() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")" +"scale(" + d3.event.scale + ")");
    });
    svg.call(zoom);
    // Center the graph
    // var x_center_offset = ( svg.property( 'clientWidth' ) - g.graph().width ) / 2;
    // svgGroup.attr( 'transform', 'translate(' + x_center_offset + ', 20)' );
    //svg.attr( 'height', g.graph().height + 40 );
    var initialScale = 0.4;
    zoom.translate( [ (svg.property( 'clientWidth' ) - g.graph().width * initialScale ) / 2, 20 ] )
      .scale(initialScale)
      .event(svg);
    //svg.attr('height', g.graph().height * initialScale + 40);
  }

} // END OF MODULE
