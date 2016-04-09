<template>
  <div>
    <ul class="list-group">
      <item
        :content="item.content"
        :complete="item.complete"
        :id="id"

        v-on:item-remove="remove"
        v-on:item-toggle="toggleItem"

        v-for="(id, item) in items"></item>
        <li class="list-group-item">
          <input type="text" v-on:keyup.enter="add" class="new-todo-input" placeholder="Add new todo" v-model="new_content">
        </li>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'
  import { ItemsStore } from '../Store'

  export default {
    components: {
      Item
    },
    data () {
      return {
        items: {},
        new_content: ''
      }
    },
    methods: {
      add (event) {
        // this.items.push({
        //   content: this.new_content,
        //   complete: false
        // })
        ItemsStore.push({
          content: this.new_content,
          complete: false
        })
        this.new_content = ''
      },
      remove (id) {
        ItemsStore.child(id).remove()
      },
      toggleItem (id) {
        let item = this.items[id]
        ItemsStore.child(id).update({'complete': !item.complete})
      }
    },
    created () {
      ItemsStore.on('value', (snapshot) => {
        this.items = snapshot.val()
      })
    }
  }
</script>

<style>
  .new-todo-input {
    width: 100%;
    border: none;
    padding: 0;
  }
  .new-todo-input:focus {
    outline: none;
  }
</style>
