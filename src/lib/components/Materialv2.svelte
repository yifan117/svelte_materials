<script>

</script>

<title>Svelte Materials</title>

<div class="tileWrapper">
    <div class="sveltekit">
        <a href="https://kit.svelte.dev/" target="_blank" style="text-decoration: none;">
        </a>
    </div>

    <div class="box">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" style="text-decoration: none;">
        </a>
    </div>

    <div class="flexbox">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">
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

<style lang="stylus">

.tileWrapper 
    min-width: 90%
    background-color: #A9A9A9;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    flex-wrap: wrap;
    box-shadow: 32px 32px 100px #000;


.tile
    display: flex;
    background-color: #ffffff;
    min-height: 250px;
    min-width: 30%;
    padding: 8px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

.sveltekit:hover,
.flexbox:hover,
.material:hover,
.box:hover,
.grid:hover,
.tile:hover
    opacity: 30%;
    cursor: pointer;
    transform: scale(1.05) translateZ(0);

.tileWrapper:hover>
.sveltekit:not(:hover),
.flexbox:not(:hover),
.material:not(:hover),
.box:not(:hover),
.grid:not(:hover),
.tile:not(:hover)
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);

.sveltekit
    @extends .tile
    background-image: url('https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png');

.flexbox
    @extends .tile
    background-color: #430960;
    background-image: url('https://miro.medium.com/max/1200/1*HGXoBi1rjUFrv7LBtynokQ.jpeg');

.material 
    @extends .tile
    background-color: #2196f3;
    background-image: url('$lib/images/materialicons.png');

.box
    @extends .tile
    background-color: #314085;
    background-image: url('https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png');

.grid
    @extends .tile
    background-color: #282627;
    background-image: url('https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147485209/images/WgUgHhj8Tl64ZsgQfa4G_file.jpg');

.tile
    background-color: #ffffff;

a
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;


</style>