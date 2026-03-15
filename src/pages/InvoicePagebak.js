import React, { useEffect, useState } from "react";
import {getInvoices, createInvoice, deleteInvoice, downloadInvoice} from "../api/invoiceApi";
import "../components/InvoiceTable.css";

function InvoiceTable({ invoices, addInvoice, removeInvoice, downloadInvoicePDF }) {

    return (
        <div className="dashboard">

            <div className="card">

                <div className="card-header">

                    <h2>Invoices</h2>

                    <button className="primary-btn" onClick={addInvoice}>
                        + Add Invoice
                    </button>

                </div>

                <table className="invoice-table">

                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    {invoices.map((inv) => (

                        <tr key={inv.id}>

                            <td>{inv.id}</td>
                            <td>{inv.userId}</td>
                            <td>${inv.amount}</td>

                            <td>
                  <span className={`status ${inv.status}`}>
                    {inv.status}
                  </span>
                            </td>

                            <td>

                                <button
                                    className="download-btn"
                                    onClick={() => downloadInvoicePDF(inv.id)}
                                >
                                    Download
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => removeInvoice(inv.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default InvoiceTable;
/*

function InvoicePage() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        loadInvoices();
    }, []);

    const loadInvoices = async () => {
        const res = await getInvoices();
        setInvoices(res.data);
    };

    const addInvoice = async () => {

        const newInvoice = {
            userId: 1001,
            amount: 30,
            status: "PENDING"
        };

        await createInvoice(newInvoice);
        loadInvoices();
    };

    const removeInvoice = async (id) => {
        await deleteInvoice(id);
        loadInvoices();
    };

    const downloadInvoicePDF = async (id) => {
        await downloadInvoice(id);
        loadInvoices();
    };

    return (
        /!*<div>
            <h2>Invoice List</h2>

            <button onClick={addInvoice}>Add Invoice</button>

            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {invoices.map((inv) => (
                    <tr key={inv.id}>
                        <td>{inv.id}</td>
                        <td>{inv.userId}</td>
                        <td>{inv.amount}</td>
                        <td>{inv.status}</td>
                        <td>
                            <button onClick={() => removeInvoice(inv.id)}>
                                Delete
                            </button>
                        </td>
                        <td>
                            <button onClick={() => downloadInvoicePDF(inv.id)}>
                                Download the PDF invoice
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>

        </div>*!/
        <div className="page-container">

            <h2 className="title">Invoice List</h2>

            <button className="add-btn" onClick={addInvoice}>
                Add Invoice
            </button>

            <table className="invoice-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Download</th>
                </tr>
                </thead>

                <tbody>
                {invoices.map((inv) => (
                    <tr key={inv.id}>
                        <td>{inv.id}</td>
                        <td>{inv.userId}</td>
                        <td>${inv.amount}</td>
                        <td>{inv.status}</td>

                        <td>
                            <button
                                className="delete-btn"
                                onClick={() => removeInvoice(inv.id)}
                            >
                                Delete
                            </button>
                        </td>

                        <td>
                            <button
                                className="download-btn"
                                onClick={() => downloadInvoicePDF(inv.id)}
                            >
                                Download PDF
                            </button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
}

export default InvoicePage;*/
