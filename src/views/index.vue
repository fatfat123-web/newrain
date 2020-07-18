<template>
    <div id="gameScreen">
        <audio id="audioCountDown" src='../assets/audio/countdown.mp3'></audio>
        <audio id="audioOpen" src='../assets/audio/open-redpacket.mp3'></audio>
    </div>
</template>

<script>
    import main from '../js/main.js'
    import p2 from '../js/p2.js'
    import phaserSplit from '../js/phaser-split.js'
    import pixi from '../js/pixi.js'
    export default {
        name: "index"
    }
</script>

<style scoped>
.body{
    padding: 0;
    margin: 0;
}
</style>