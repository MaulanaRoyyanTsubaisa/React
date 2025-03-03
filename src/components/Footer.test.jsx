import { describe, expect, it } from "vitest";
import { fireEvent, render, waitFor} from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    it("should render footer", () => {
        const renderFooter = render(<Footer />);
        expect(renderFooter).toBeDefined();
    });
    it("should change message when button clicked",async () => {
        const renderFooter = render(<Footer message="Hello changed" />);
        const stateMessage = await renderFooter.findByTestId("state-message");
        expect(stateMessage).toHaveTextContent("Hello");
        const changeMessageBtn = await renderFooter.findByTestId("change-message-btn");
        fireEvent.click(changeMessageBtn);
        await waitFor(() => expect(stateMessage).toHaveTextContent("Hello World"));
    });
});