<template>
    <li class="list-group-item">
      <span v-on:click="toggleItem" class="glyphicon glyphicon-ok button" v-bind:class="{'complete': complete}"></span>&nbsp;
      <span v-if="complete"><del v-text="content"></del></span>
      <span v-else v-text="content"></span>&nbsp;
      <span v-on:click="remove" class="glyphicon glyphicon-remove-circle pull-right button"></span>
    </li>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['content', 'id', 'complete'],
  methods: {
    remove () {
      this.$dispatch('item-remove', this.id)
    },
    toggleItem () {
      this.$dispatch('item-toggle', this.id)
    }
  }
}
</script>

<style>
  .button {
    color: rgba(0, 0, 0, 0.2);
  }
  .complete {
    color: rgba(0, 0, 0, 0.7);
  }
</style>
