<template>
  <div class="sample">
    <qf-row>
      <qf-col :span="12" :offset="4">
        <div class="col"></div>
      </qf-col>
    </qf-row>

    <qf-row>
      <qf-col :span="6" :offset="4">
        <div class="col"></div>
      </qf-col>

      <qf-col :span="6" :offset="4">
        <div class="col"></div>
      </qf-col>
    </qf-row>
  </div>
</template>
<style scoped>
.sample {
  .qf-row {
    margin-bottom: 20px;
  }
  .col {
    width: 100%;
    height: 26px;
    border-radius: 4px;
    background-color: var(--primary-color);
  }
}
</style>
