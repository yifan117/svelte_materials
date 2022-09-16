<script>

</script>

<!--CODE FOR CARDS-->

<body>
    <div class="cards-container">

        <a href="youtube.com" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png)"></div>
            <div class="card-content">
                <p>Angkor Village</p>
                <h3>Rooms</h3>
            </div>
        </a>

        <a href="youtube.com" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png)"></div>
            <div class="card-content">
                <p>Angkor Village</p>
                <h3>Rooms</h3>
            </div>
        </a>

        <a href="youtube.com" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png)"></div>
            <div class="card-content">
                <p>Angkor Village</p>
                <h3>Rooms</h3>
            </div>
        </a>

        <a href="youtube.com" class="card">
            <div class="card-background" style="background-image: url(https://miro.medium.com/max/875/1*jk1lk3q-vFzT45_ucP75Yg.png)"></div>
            <div class="card-content">
                <p>Angkor Village</p>
                <h3>Rooms</h3>
            </div>
        </a>
    </div>
</body>

<style>
    * {
        border: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        padding: 50px;
        background-color: #131416;
    }

    .cards-container {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 24px;
        max-width: 1200px;
        width: 100%;
    }

    @media(min-width: 540px) {
        .cards-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(min-width: 960px) {
        .cards-container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .card {
        position: relative;
        padding-bottom: 120%;
    }

    .card-background {
        background-size: cover;
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

    .card-content h3 {
        color: rgba(255, 255, 255, .9);
        font-size: 23px;
        text-shadow: 2px 2px 20px rgba(255, 255, 255, .9);
    }
</style>