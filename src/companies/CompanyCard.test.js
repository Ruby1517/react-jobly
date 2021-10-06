import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", () => {
    const { asFragment } = render (
        <MemoryRouter>
            <CompanyCard
                handle="rithm"
                name="Rithm School"
                description="Become an execptional developer in 16 weeks."
                logo_url="https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
            />    
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", () => {
    const { asFragment } = render (
        <MemoryRouter>
            <CompanyCard
                handle="rithm"
                name="Rithm School"
                description="Become an execptional developer in 160 weeks."                
            />    
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});