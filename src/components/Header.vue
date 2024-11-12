<template>
  <header :class="classes.header">
    <img :class="classes.photo" src="../assets/me.jpeg" alt="me" />
    <div :class="classes.info">
      <h2 :class="classes.name">
        Владимир Галынский
      </h2>
      <p :class="classes.about">
        Я фотограф-любитель, буду делится интересными кадрами
      </p>
    </div>
  </header>
</template>

<style module="classes">
.header {
  display: flex;
  align-items: center;
  column-gap: 16px;
}
.photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.info {}
.name {}
.about {}
</style>