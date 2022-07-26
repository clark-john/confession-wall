<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  // margin: 0.5rem 1.5rem;
  // gap: 15px;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: 30% 30% 30%;
  display: grid;
  margin-top: 1rem;
  // margin-bottom: 2rem;
}

@media screen and (max-width: 430px) {
  div {
    grid-template-columns: 90%;
    margin-top: 2rem;
  }
}
</style>