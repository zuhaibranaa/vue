import api from "../../api";
export default {
  async fetchInvoices(context) {
    // Fetch Invoices
    let data = await api.get("accounting/invoices/");
    context.commit("setInvoices", data.data);
  },
  async createInvoice(context, payload) {
    let data = await api.post("accounting/invoices/", payload);
    console.log(data.data);
  },
  async deleteInvoice(context, id, { dispatch }) {
    let response = await api.delete("accounting/invoices/", {
      data: { id },
    });
    dispatch(this.fetchInvoices);
  },
  async fetchInventory(context) {
    // Fetch Inventory
    let data = api.get("accounting/inventory/");
    context.commit("setInventory", data.data);
  },
  async fetchPayments(context) {
    // Fetch Payments
    let data = await api.get("accounting/payments/");
    context.commit("setPayments", data.data);
  },
  async fetchJournal(context) {
    // Fetch Journal
    let data = await api.get("accounting/journal/");
    context.commit("setJournalEntries", data.data);
  },
  async fetchSuppliers(context) {
    // Fetch Suppliers

    let data = await api.get("accounting/suppliers/");

    context.commit("setSuppliers", data.data);
  },
  async uploadNewSupplier(context, payload, { dispatch }) {
    let data = await api.post("accounting/suppliers/", payload);
    dispatch(this.fetchSuppliers);
  },
  async updateSupplier(context, payload, { dispatch }) {
    await api.put("accounting/suppliers/", {
      data: payload,
    });
    dispatch(this.fetchSuppliers);
  },
  async deleteSupplier(context, id, { dispatch }) {
    let response = await api.delete("accounting/suppliers/", {
      data: { id },
    });
    dispatch(this.fetchSuppliers);
  },
};
