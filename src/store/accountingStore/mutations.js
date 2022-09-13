export default {
  setInvoices(state, payload) {
    state.invoices = payload;
  },
  setPayments(state, payload) {
    state.payments = payload;
  },
  setSuppliers(state, payload) {
    state.supplier = payload;
  },
  setInventory(state, payload) {
    state.inventory = payload;
  },
  setJournalEntries(state, payload) {
    state.journal = payload;
  },
};
