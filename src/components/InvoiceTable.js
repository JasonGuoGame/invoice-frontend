import "./InvoiceTable.css";
import React from "react";

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
                        <th>Subscription</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Billing Start Date</th>
                        <th>Billing End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    {invoices.map((inv) => (

                        <tr key={inv.id}>

                            <td>{inv.id}</td>
                            <td>{inv.subscriptionId}</td>
                            <td>{inv.userId}</td>
                            <td>${inv.amount}</td>
                            <th>{inv.billingPeriodStart}</th>
                            <th>{inv.billingPeriodEnd}</th>
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