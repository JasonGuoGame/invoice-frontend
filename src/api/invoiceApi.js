import axios from "axios";

const API_URL = "http://localhost:8080/api/invoices";

export const getInvoices = () => axios.get(API_URL);

export const createInvoice = (data) => axios.post(API_URL, data);

export const updateInvoice = (id, data) =>
    axios.put(`${API_URL}/${id}`, data);

export const deleteInvoice = (id) =>
    axios.delete(`${API_URL}/${id}`);

export const downloadInvoice = async (invoiceId) => {

    const response = await fetch(`/api/invoices/${invoiceId}/pdf`);

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${invoiceId}.pdf`;

    document.body.appendChild(a);
    a.click();
    a.remove();
};