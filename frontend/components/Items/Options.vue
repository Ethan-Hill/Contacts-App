<template>
  <div class="flex justify-around flex-1 w-full mt-4 lg:mt-0">
    <div
      class="inline-flex transition-all bg-white rounded-md shadow hover:bg-yellow-500"
    >
      <button
        class="px-6 py-2 font-bold text-gray-700 hover:text-white"
        @click="editContact($event, contact.id)"
      >
        Edit
      </button>
    </div>
    <div
      class="relative inline-flex transition-all bg-white rounded-md shadow hover:bg-red-500"
    >
      <button
        class="px-6 py-2 font-bold text-gray-700 hover:text-white"
        @click="deleteContact($event, contact.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['deleteContact', 'editContact', 'contact'],
}
</script>

<style lang="scss" scoped></style>
