import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {

    kit: {
        target: '#svelte',
        adapter: adapter()    // edge fix
    }
};

export default config; 
