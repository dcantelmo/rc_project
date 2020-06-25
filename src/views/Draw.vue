<template>
    <div class="row page">
        <div class="user-col"></div>
        <div class="canvas-col">
            <div class="canvas-container">
                <VueCanvas width="400" height="400" :key="canvasMode" :mode="canvasMode" />
            </div>
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
            socket: null,
            canvasMode: "offline"
        };
    },
    mounted() {
        this.socket = io("http://localhost:4000");
    },
    methods: {}
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
</style>
