import React from 'react';

const FrequentlyAskedQuestion = () => {
    return (
        <div className='faq py-10 bg-gray-100 mt-4 rounded-2xl'>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4 px-16">
                    <div className="bg-base-200 collapse">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            What can I donate?
                        </div>
                        <div
                            className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>We accept warm clothes, blankets, and financial contributions.</p>
                        </div>
                    </div>
                    <div className="bg-base-200 collapse">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            Where are the collection points?
                        </div>
                        <div
                            className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>You can find our collection points in all major divisions across Bangladesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestion;