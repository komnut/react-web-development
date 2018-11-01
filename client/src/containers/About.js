import React, { Component } from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";

class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className=" offset-md-3 col-md-6 text-center title text-success">
                            In the “Writing with Purpose” section of the Pattern Based Writing: Quick & Easy Essay program, students learn to apply their new writing strategies to different types (or modes) of writing. The truth is — it’s quite easy to get students writing many different types of paragraphs when they have the right foundation.
                    </div>
                    </div>
                </div>
                <Footer company="Olanlab" email="olan@olanlab.com" />
            </div>
        );
    }
}

export default About;