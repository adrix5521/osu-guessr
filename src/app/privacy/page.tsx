import { Metadata } from "next";
import PrivacyPolicy from "./client";

export const metadata: Metadata = {
    title: "Privacy Policy | osu!guessr",
    description: "Learn about how we handle your data and privacy on osu!guessr.",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicy />;
}
