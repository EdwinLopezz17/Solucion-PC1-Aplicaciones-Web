<script setup>
  import TheFooter from "@/components/TheFooter.vue";
  import images from "@/components/images.vue";
  import TheToolBar from "@/components/TheToolBar.vue";
  import ThePeru from "@/components/ThePeru.vue";

</script>

<template>
    <div class="container">
        <header>
            <h2>This is the header</h2>
        </header>
        <main class="main-container">
            <the-tool-bar></the-tool-bar>
            <br>
            <images></images>
            <br>
            <the-peru></the-peru>
        </main>

        <TheFooter></TheFooter>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>



