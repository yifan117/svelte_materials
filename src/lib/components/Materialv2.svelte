<script>

</script>

<title>Svelte Materials</title>

<body>
    <div class="cards-container">

        <a href="https://kit.svelte.dev/" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png); background-color: #ffffff"></div>
            <div class="card-content">
                <p></p>
            </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png); background-color: #314085"></div>
            <div class="card-content">
                <p></p>
            </div>
        </a>

        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/1200/1*HGXoBi1rjUFrv7LBtynokQ.jpeg); background-color: #430960"></div>
            <div class="card-content">
                <p></p>
            </div>
        </a>

        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147485209/images/WgUgHhj8Tl64ZsgQfa4G_file.jpg); background-color: #282627"></div>
            <div class="card-content">
                <p></p>
            </div>
        </a>

        <a href="https://materialdesignicons.com/" target="_blank" class="card">
            <div class="card-background" style="background-image: '$lib/images/materialicons.png'; background-color: #2196f3"></div>
            <div class="card-content">
                <p></p>
            </div>
        </a>

        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" target="_blank" class="card">
            <div class="card-background" style="background-image: url('https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60108d33abf33c3e87e59141_6002086f72b72735a101d204_color-theory.jpeg'); background-color: #ffffff; background-size: cover"></div>
            <div class="card-content">
                <p>Colour Theory</p>
            </div>
        </a>

    </div>
</body>

<style>

    body {
        padding: 50px;
        background-color: #131416;
    }

    .cards-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 1200px;
        gap: 10px;
    }

    .card {
        position: relative;
        padding: 10%;
        background-size: contain;
    }

    .card-background {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 24px;
        filter: brightness(0.75) saturate(1.2) contrast(0.85);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        transform-origin: center;
        transition: .2s;
    }

    .card:hover .card-background {
        transform: scale(1.05) translateZ(0);
    }

    .cards-container:hover>.card:not(:hover) .card-background {
        filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
    }

    .card-content {
        padding: 24px;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
    }

    .card-content p {
        color: rgba(255, 255, 255, .9);
        font-size: 12px;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

</style>