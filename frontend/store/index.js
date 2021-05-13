export const state = () => ({
  contacts: [],
})

export const mutations = {
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  },
}

export const actions = {
  setContacts({ commit }, payload) {
    commit('SET_CONTACTS', payload)
  },
  async getContacts({ commit }) {
    const contacts = await this.$axios.$get(`/contacts/`)
    commit('SET_CONTACTS', contacts)
  },
}

export const getters = () => ({
  contacts: (state) => {
    return state.contacts
  },
})
