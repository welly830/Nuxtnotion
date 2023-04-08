<template >
  <div>
    Olá
    <br>
    {{ imagens }}
  </div>
  <main>
    <div v-for="(image, index) in imagens" :key="index" >
    <img :src="image" />
 
  
  </div>
  </main>
</template>
<script setup>

const imagens = ref([])

const res = await fetch('http://localhost:3000/api/gallery');
res.json().then((images) => {
  console.log(images);
  imagens.value = images
  

})

</script>
<style >

body {
  padding: 0;
  margin: 0;
  font-family: monospace;
  color: rgb(197, 32, 32);
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius:  8px;
  cursor: pointer;
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

img:hover {
  transform: scale(1,1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
main {
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgb(245, 245, 245), #FFFFFF);
}

  
</style>
