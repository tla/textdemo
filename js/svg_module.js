var SVG_MODULE = SVG_MODULE || function() {

  this.render_dot = function( dot, svg_element_id ) {
    //var g = graphlibDot.read( dot );
    var g = graphlibDot.read("digraph { 1; 2; 1 -> 2 [label=\"label\"] }");
    var render = new dagreD3.render();
    var svg = d3.select( '#svg_graph' ),
        svgGroup = svg.append( 'g' );
    render( d3.select( svg_element_id ), g );
    // Center the graph
    var x_center_offset = ( svg.property( 'clientWidth' ) - g.graph().width ) / 2;
    svgGroup.attr( 'transform', 'translate(' + x_center_offset + ', 20)' );
    //svg.attr( 'height', g.graph().height + 40 );
  }

} // END OF MODULE
