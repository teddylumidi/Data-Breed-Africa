export default function FAQ() {
    return (
        <>
        <div>
            <h2 className="fw-medium text-center display-4 my-3">Frequently Asked Questions</h2>
            <div className="container shadow-sm accordion accordion-flush mx-auto my-5" id="accordionFlushExample" style={{ width: "38rem"}}>
                <div className="accordion-item">
                    <h2 className="accordion-header my-2">
                        <button className="display-5 fw-medium accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What are the main features of the Data Breed Africa training and certification program for data professionals?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body lead">
                            The training program covers topics such as data analysis, data visualization, data reporting, inventory management, business process optimization, and more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="display-5 fw-medium accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What are the benefits of Data Analytics as a Service offered by Data Breed Africa?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body lead">
                            This service allows organizations to enjoy professional data analysis without the need for their own data experts or infrastructure, saving costs and time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="display-5 fw-medium accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What are the retail data analytics services provided by Data Breed Africa?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="lead accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> Data Breed Africa offers retail data analytics services that help organizations understand sales performance, product performance, store performance, supplier performance, customer performance, and competitor performance.</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}