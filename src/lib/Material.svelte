<script>
    
</script>

<div class="tileWrapper">
    <div class="sveltekit">
        <a href="https://kit.svelte.dev/" target="_blank" style="text-decoration: none; background-img=">
        </a>
    </div>

    <div class="box">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" style="text-decoration: none;">
        </a>
    </div>

    <div class="flexbox">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" style="text-decoration: none;">
        </a>
    </div>

    <div class="grid">
        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" style="text-decoration: none;">
        </a>
    </div>

    <div class="material">
        <a href="https://materialdesignicons.com/" target="_blank" style="text-decoration: none;">
        </a>
    </div>

    <div class="tile">
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" target="_blank" style="text-decoration: none;">
            Placeholder
        </a>
    </div>
</div>

<style>

.tileWrapper {
    height: 75%;
    width: 90%;
    background-color: #A9A9A9;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    align-content: space-around;
    align-items: center;
    border-radius: 8px;
}

.tileWrapper .sveltekit {
    display: flex;
    background-color: #ffffff;
    height: 250px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
    background-image: url('https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.tileWrapper .sveltekit:hover {
    opacity: 30%;
}

.tileWrapper .flexbox {
    display: flex;
    background-color: #430960;
    height: 250px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
    background-image: url('https://miro.medium.com/max/1200/1*HGXoBi1rjUFrv7LBtynokQ.jpeg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.tileWrapper .flexbox:hover {
    opacity: 30%;
}

.tileWrapper .material {
    display: flex;
    background-color: #2196f3;
    height: 250px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.tileWrapper .material:hover {
    opacity: 30%;
}

.tileWrapper .box {
    display: flex;
    background-color: #314085;
    height: 250px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
    background-image: url('https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.tileWrapper .box:hover {
    opacity: 30%;
}

.tileWrapper .grid {
    display: flex;
    background-color: #2e237f;
    height: 250px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
    background-image: url('https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147485209/images/WgUgHhj8Tl64ZsgQfa4G_file.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.tileWrapper .grid:hover {
    opacity: 30%;
}

.tileWrapper .tile {
    display: flex;
    background-color: #ffffff;
    height: 250px;
    width: 30%;
    padding: 8px;
    border-radius: 8px;
}

.tileWrapper .tile:hover {
    opacity: 30%;
}

a {
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2em;
}

</style>