<template>
    <div class="row page">
        <div class="user-col">
            <button @click="changeMode()">{{canvasMode}}</button>
        </div>
        <div class="canvas-col">
            <div class="canvas-container">
                <VueCanvas v-if="canvasMode == 'offline' || socket" ref="canvas" width="400" height="400" :key="canvasMode" :mode="canvasMode" :socket="socket"/>
            </div>
            <button v-if= "canvasMode == 'drawer'" @click="undo()">UNDO</button>
            <button v-if= "canvasMode =='drawer'" @click="clear()">CLEAR</button>
        </div>
        <div class="chat-col"></div>
    </div>
</template>

<script>
import io from "socket.io-client";
import VueCanvas from "@/components/VueCanvas.vue";
export default {
    components: {
        VueCanvas
    },
    data() {
        return {
            canvasMode: "drawer",
            socket: ''
        };
    },
    mounted() {
      this.socket = io("http://localhost:4000?room=2344");
    },
    methods: {
        changeMode() {
            if(this.canvasMode == 'drawer')
                this.canvasMode = 'watch';
            else
                this.canvasMode = 'drawer';
        },
        undo() {
            return this.$refs.canvas.redraw();
        },
        clear() {
            return this.$refs.canvas.clear();
        }
    }
};
</script>

<style>
.canvas-container {
    border: 2px solid lightcoral;
}

.page {
    display: flex;
    justify-content: center;
}

button {
    width: 120px;
}
</style>
