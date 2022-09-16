import api from "../../api";
export default {
  async fetchInvoices(context) {
    // Fetch Invoices
    let data = await api.get("accounting/invoices/");
    context.commit("setInvoices", data.data);
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
  async uploadNewSupplier(context, payload) {
    let data = await api.post("accounting/suppliers/", payload);
  },
  async updateSupplier(_, payload) {
    await api.put("accounting/suppliers/", {
      data: payload,
    });

    this.fetchSuppliers();
  },
  async deleteSupplier(context, id) {
    let response = await api.delete("accounting/suppliers/", {
      data: { id },
    });

    context.commit(
      "accounting/setSuppliers",
      context.supplier.filter((supplier) => supplier.id !== id)
    );
  },
};
