<script>

</script>

<title>Svelte Materials</title>

<body>
    <div class="cards-container">

        <a href="https://kit.svelte.dev/" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/1000/1*joB4ddC9_-3okvy0r8_CPQ.png); background-color: #ff3c00"></div>
            <div class="card-content">
                <p>Introduction To SvelteKit</p>
            </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png); background-color: #314085"></div>
            <div class="card-content">
                <p>The Box Model</p>
            </div>
        </a>

        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2017/04/flexbox-cssgrid-practical-example.png?fit=666%2C370&quality=100&strip=all&ssl=1); background-color: #7fd2c9"></div>
            <div class="card-content">
                <p>CSS Flexbox Guide</p>
            </div>
        </a>

        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/1400/0*qe5keHwkCPQD8v2U.png); background-color: #282627"></div>
            <div class="card-content">
                <p>CSS Grid Guide</p>
            </div>
        </a>

        <a href="https://materialdesignicons.com/" target="_blank" class="card">
            <div class="card-background" style="background-image: url('https://lh3.googleusercontent.com/64GWPJbpSJKB2hejLK02GLHjflv2B8cCr7SJUQI7cHXO0Qakc28U-ZRw7IRL3WadD8Stugb1HB4GgpqEkRydsEaR9AC4SqrTeRlCDlo=w1064-v0'); background-color: #2196f3; background-size: cover"></div>
            <div class="card-content">
                <p>Svelte Material Icons</p>
            </div>
        </a>

        <a href="https://webflow.com/blog/color-theory" target="_blank" class="card">
            <div class="card-background" style="background-image: url('https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60108d33abf33c3e87e59141_6002086f72b72735a101d204_color-theory.jpeg'); background-color: #ffffff; background-size: cover"></div>
            <div class="card-content">
                <p>Colour Theory</p>
            </div>
        </a>

        <a href="https://material.io/design" target="_blank" class="card">
            <div class="card-background" style="background-image: url('https://material.io/static/assets/result.png'); background-color: #212121; background-size: contain"></div>
            <div class="card-content">
                <p>Material Design</p>
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
        position: relative;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        max-height: 100%;
        max-width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    p {
        color: #fff;
        font-size: 2vw;
        display: flex;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-shadow: 0 0 10px rgba(3, 3, 3, 1);
        position: absolute;
        text-align: center;
        border: 5px solid #fff;
        
    }

    .cards-container:hover>.card:not(:hover) p {
        opacity: 0;
    }

    .card:hover p {
        opacity: 100;
    }

</style>