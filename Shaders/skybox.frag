#version 330 core
in vec2 TexCoords;

out vec4 FragColor;


// texture samplers
uniform sampler2D skybox;

void main()
{
	// linearly interpolate between both textures (80% container, 20% awesomeface)
	FragColor = texture(skybox, TexCoords);
}