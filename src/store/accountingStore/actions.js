import api from "../../api";
export default {
  fetchInvoices(context) {
    // Fetch Invoices
    api
      .get("accounting/invoices/")
      .then((res) => {
        if (res.status == 200) {
          return res;
        }
      })
      .then((data) => {
        context.commit("setInvoices", data.data);
      });
  },
  fetchInventory() {
    // Fetch Inventory
    api
      .get("accounting/inventory/")
      .then((res) => {
        if (res.status == 200) {
          return res;
        }
      })
      .then((data) => {
        context.commit("setInventory", data.data);
      });
  },
  fetchPayments() {
    // Fetch Payments
    api
      .get("accounting/payments/")
      .then((res) => {
        if (res.status == 200) {
          return res;
        }
      })
      .then((data) => {
        context.commit("setPayments", data.data);
      });
  },
  fetchJournal() {
    // Fetch Journal
    api
      .get("accounting/journal/")
      .then((res) => {
        if (res.status == 200) {
          return res;
        }
      })
      .then((data) => {
        context.commit("setJournalEntries", data.data);
      });
  },
  fetchSuppliers() {
    // Fetch Suppliers
    api
      .get("accounting/suppliers/")
      .then((res) => {
        if (res.status == 200) {
          return res;
        }
      })
      .then((data) => {
        context.commit("setSuppliers", data.data);
      });
  },
};
