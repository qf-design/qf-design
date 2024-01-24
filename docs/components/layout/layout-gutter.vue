<template>
  <div class="sample">
    <qf-row :gutter="20">
      <qf-col :span="6">
        <div class="col"></div>
      </qf-col>
      <qf-col :span="6">
        <div class="col"></div>
      </qf-col>
      <qf-col :span="6">
        <div class="col"></div>
      </qf-col>
      <qf-col :span="6">
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
