#version 420

// required by GLSL spec Sect 4.5.3 (though nvidia does not, amd does)
precision highp float;


// >>> @task 3.4

//inform that the shader will use a texture that is connected to texture unit 0
//'binding' specifies which tecture unit to sample from
layout(binding = 0) uniform sampler2D colortexture;

layout(location = 0) out vec4 fragmentColor;

in vec3 outColor;
in vec3 texCoord;

void main()
{
	// >>> @task 3.5
	
	//perform a texture fetch
	fragmentColor = texture2D(colortexture, texCoord.xy);
	
	//fragmentColor = vec4(texCoord.x, texCoord.y, 0.0, 0.0);
}