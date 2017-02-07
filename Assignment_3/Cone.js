var cone = null;

cone = new Cone( n );

function init() 
{
    var canvas = document.getElementById( "webgl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 0.0, 1.0 );

    cone.render();
};

function Square () 
{
  ...
  this.positions.buffer = gl.createBuffer();   
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positions.buffer);   
    gl.bufferData(gl.ARRAY_BUFFER, this.positions.values, gl.STATIC_DRAW);   
    this.positions.attributeLoc = gl.getAttribLocation(this.program, “vPosition”);   
    gl.enableVertexAttribArray(this.positions.attributeLoc); 
};

function render() 
{
    gl.clear( gl.COLOR_BUFFER_BIT );
    
   this.count = 4;
    
   this.render = function () 
   {
      ... // bind buffers
      var start = 0;       
      var count = this.count;       
      gl.drawArrays(gl.TRIANGLE_STRIP,           
      start, count);    
   }; 
};

var Square = 
    { 
        count : 4, 
        positions : {
            values : new Float32Array
            ([  
                0.0, 0.0,  // Vertex 0  
                1.0, 0.0,  // Vertex 1  
                1.0, 1.0,  // Vertex 2  
                0.0, 1.0   // Vertex 3  
            ]), 
                
            numComponents : 2 
    }, 
        
    colors : 
        { 
         values : new Float32Array([ ... ]), 
         numComponets : 3 
        }
};
                           
window.onload = init;
