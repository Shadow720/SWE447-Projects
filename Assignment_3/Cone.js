var cone = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
    cone = new cone( n );
    
    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 0.0, 1.0 );

    render();
};

function square () {    
   this.count = 4;
   this.positions = 
       {
       values : new Float32Array([          
           0.0, 0.0,  // Vertex 0   
           1.0, 0.0,  // Vertex 1          
           1.0, 1.0,  // Vertex 2          
           0.0, 1.0   // Vertex 3      
       ]), 
       
       numComponents : 2
       };    
    
    this.colors = { 
         values : new Float32Array([ ... ]),       
         numComponets : 3 
                  }; 
                                    
    this.render = function () 
    {        
    var start = 0;     
    var count = this.count; 
    gl.drawArrays(gl.TRIANGLE_STRIP, start, count);    
    };                                
                                    
};


var square = { 
        count : 4, 
        positions : {
            values : new Float32Array
            ([  
                0.0, 0.0,  // Vertex 0  
                1.0, 0.0,  // Vertex 1  
                0.0, 1.0,  // Vertex 3  
                1.0, 1.0   // Vertex 2  
            ]), 
                
            numComponents : 2 
    }, 
        
    colors : 
        { 
         values : new Float32Array([ ... ]), 
         numComponets : 3 
        }
};
                                    
function render() {
 cone.render();
};
                           
window.onload = init;
