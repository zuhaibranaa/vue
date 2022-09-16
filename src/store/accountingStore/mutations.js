export default {
  setInvoices(state, payload) {
    console.log(state.invoices);
    state.invoices.all = payload;
    state.invoices.paid = payload.filter((invoice) => {
      return invoice.invoice_status == "paid";
    });
    state.invoices.pending = payload.filter((invoice) => {
      return invoice.invoice_status == "pending";
    });
    state.invoices.overdue = payload.filter((invoice) => {
      return invoice.invoice_status == "overdue";
    });
  },
  setPayments: (state, payload) => (state.payments = payload),
  setSuppliers: (state, payload) => (state.supplier = payload),
  setInventory: (state, payload) => (state.inventory = payload),
  setJournalEntries: (state, payload) => (state.journal = payload),
};
