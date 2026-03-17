import React, { useEffect, useState } from "react";
import InvoiceTable from "../components/InvoiceTable";
import { createInvoice,getInvoices } from "../api/invoiceApi";
import SubscriptionTable from "../components/SubscriptionTable";

function InvoicePage() {

    const [invoices, setInvoices] = useState([]);

    // 获取 invoices
    useEffect(() => {
        fetch("http://localhost:8080/api/invoices")
            .then(res => res.json())
            .then(data => setInvoices(data));
    }, []);

    const loadInvoices = async () => {
        const res = await getInvoices();
        setInvoices(res.data);
    };

    // 添加 invoice
    const addInvoice = async () => {

        /*const res = await fetch("http://localhost:8080/api/invoices", {
            method: "POST"
        });*/

        const newInvoice = {
            userId: 1001,
            amount: 30,
            status: "PENDING"
        };

        await createInvoice(newInvoice);
        loadInvoices();
        /*
        const newInvoice = await res.json();

        setInvoices([...invoices, newInvoice]);*/
    };

    // 删除 invoice
    const removeInvoice = async (id) => {

        await fetch(`http://localhost:8080/api/invoices/${id}`, {
            method: "DELETE"
        });

        setInvoices(invoices.filter(i => i.id !== id));
    };

    // 下载 PDF
    const downloadInvoicePDF = async (id) => {

        const response = await fetch(
            `http://localhost:8080/api/invoices/${id}/pdf`
        );

        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${id}.pdf`;

        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (

        <>
            <h2>Invoices</h2>
            <InvoiceTable
                invoices={invoices}
                addInvoice={addInvoice}
                removeInvoice={removeInvoice}
                downloadInvoicePDF={downloadInvoicePDF}
            />

            <h2>Subscriptions</h2>
            <SubscriptionTable />
        </>
    );
}

export default InvoicePage;