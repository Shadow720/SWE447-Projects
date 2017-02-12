function Cube(gl, vertexShaderId, fragmentShaderId )
{
    this.program = initShaders(gl, vertexShaderId, fragmentShaderId);

    if (!gl.isProgram(this.program) ) {
        alert( "Error: Cube shader pipeline failed to compile.\n\n" +
            "\tvertex shader id:  \t" + vertexShaderId + "\n" +
            "\tfragment shader id:\t" + fragmentShaderId + "\n" );
        return;
    }

    this.positions =
    {
      numComponents : 3,
      values :[
        -0.5, -0.5, 0.5,  // 0
        0.5, -0.5, 0.5,   // 1
        -0.5, 0.5, 0.5,   // 2
        0.5, 0.5, 0.5,    // 3
        -0.5, 0.5, -0.5,  // 4
        0.5, 0.5, -0.5,   // 5
        -0.5, -0.5, -0.5, // 6
        0.5, -0.5, -0.5]  // 7
     };

   this.indices =
   {
     numComponents : 3,
     values : [
       0, 1, 2,
       2, 1, 3,
       4, 7, 6,
       4, 5, 7,
       4, 6, 0,
       4, 0, 2,
       3, 1, 7,
       3, 7, 5,
       4, 2, 3,
       4, 3, 5,
       1, 0, 6,
       1, 6, 7
     ]
   };


    this.positions.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(this.positions.values), gl.DYNAMIC_DRAW );

    this.indices.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer );
    gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices.values), gl.STATIC_DRAW );

    this.positions.attributeLoc = gl.getAttribLocation( this.program, "vPosition" );
    gl.enableVertexAttribArray( this.positions.attributeLoc );

    this.render = function ()
    {
        gl.useProgram( this.program );

        gl.bindBuffer( gl.ARRAY_BUFFER, this.positions.buffer );
        gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(this.positions.values), gl.DYNAMIC_DRAW );
        gl.vertexAttribPointer( this.positions.attributeLoc, this.positions.numComponents,
            gl.FLOAT, gl.FALSE, 0, 0 );


        gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer );
        gl.drawElements( gl.LINE_LOOP, this.indices.values.length, gl.UNSIGNED_SHORT, 0 );
    }

   this.rotateYPoint = function(x, y, z, r)
   {
     z = z*Math.cos(r) - x*Math.sin(r)
     x = z*Math.sin(r) + x*Math.cos(r)
     y = y

     return [x, y, z];
   };

   this.rotateYPoints = function(r)
   {
     for(var i = 0; i < this.positions.values.length; i += 3){
       x = this.positions.values[i];
       y = this.positions.values[i+1];
       z = this.positions.values[i+2];

       xyz = this.rotateYPoint(x, y, z, r);
       this.positions.values[i] = xyz[0];
       this.positions.values[i+1] = xyz[1];
       this.positions.values[i+2] = xyz[2];
     }
   };

   this.rotateXPoint = function(x, y, z, r)
   {
     y = y*Math.cos(r) - z*Math.sin(r)
     z = y*Math.sin(r) + z*Math.cos(r)
     x = x

     return [x, y, z];
   };

   this.rotateXPoints = function(r)
   {
     for(var i = 0; i < this.positions.values.length; i += 3){
       x = this.positions.values[i];
       y = this.positions.values[i+1];
       z = this.positions.values[i+2];

       xyz = this.rotateXPoint(x, y, z, r);
       this.positions.values[i] = xyz[0];
       this.positions.values[i+1] = xyz[1];
       this.positions.values[i+2] = xyz[2];
     }
   };

};
