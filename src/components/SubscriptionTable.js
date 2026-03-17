import React, { useEffect, useState } from 'react';
import "./SubscriptionTable.css";
import { fetchSubscriptions } from "../api/invoiceApi";

export default function SubscriptionTable() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchSubscriptions()
            .then((data) => {
                setSubscriptions(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || 'Error loading subscriptions');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading subscriptions...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="subscription-table-container">
            <h2 className="subscription-table-title">Subscriptions</h2>

            {subscriptions.length === 0 ? (
                <div className="subscription-table-empty">No subscriptions found.</div>
            ) : (
                <table className="subscription-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Plan</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>Next Billing Date</th>
                        <th>End Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {subscriptions.map((subscription) => (
                        <tr key={subscription.id}>
                            <td>{subscription.id}</td>
                            <td>{subscription.customerName}</td>
                            <td>{subscription.planName}</td>
                            <td>
                                    <span
                                        className={`subscription-status ${subscription.status?.toLowerCase()}`}
                                    >
                                        {subscription.status}
                                    </span>
                            </td>
                            <td>{subscription.startDate}</td>
                            <td>{subscription.nextBillingDate}</td>
                            <td>{subscription.endDate || '-'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
    /*return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
            <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>Next Billing Date</th>
                <th>End Date</th>
            </tr>
            </thead>
            <tbody>
            {subscriptions.map((subscription) => (
                <tr key={subscription.id}>
                    <td>{subscription.id}</td>
                    <td>{subscription.customerName}</td>
                    <td>{subscription.planName}</td>
                    <td>{subscription.status}</td>
                    <td>{subscription.startDate}</td>
                    <td>{subscription.nextBillingDate}</td>
                    <td>{subscription.endDate ?? '-'}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );*/
}