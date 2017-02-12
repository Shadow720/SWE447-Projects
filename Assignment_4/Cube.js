var initGLSurface = function(gl, canvas)

{
  // set the clearing color here.
  gl.clearColor(0.9, 0.9, 0.9, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  // Clear the color as well as the depth buffer.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // set viewport
  gl.viewport(window.width/2, window.height/2, canvas.width, canvas.height);
}

var init = function()
{
  var canvas = document.getElementById('gl-canvas');
    
  var gl = canvas.getContext('webgl');

  if(!gl){
    alert('WebGL not supprted falling back on experimental');
    gl = canvas.getContext('experimental-webgl');
  }

  if(!gl){
    alert('WebGL not supprted in your browser');
    return;
  }

  initGLSurface(gl, canvas);

  try
  {
    var cube = new Cube(gl, "vertex-shader", "fragment-shader");

    cube.rotateYPoints(0.2);
    cube.rotateXPoints(0.2);
    cube.render();
  }
  catch(e)
  {
    alert("catch" + " " + e.message);
  }

}
