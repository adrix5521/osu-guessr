import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUND_TIME, BASE_POINTS, SKIP_PENALTY, STREAK_BONUS, TIME_BONUS_MULTIPLIER } from "../../config";

interface PreGameMenuProps {
    onStart: () => void;
}

export default function PreGameMenu({ onStart }: PreGameMenuProps) {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto">
                <div className="bg-card rounded-xl p-8 border border-border/50">
                    <h1 className="text-3xl font-bold mb-6">Background Guessr</h1>

                    <div className="space-y-6 mb-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-3">How to Play</h2>
                            <ul className="space-y-2 text-foreground/70">
                                <li>• You{"'"}ll be shown beatmap backgrounds from osu!</li>
                                <li>• Try to guess the song title within {ROUND_TIME} seconds</li>
                                <li>• Earn points based on speed and accuracy</li>
                                <li>• Build a streak for bonus points</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Scoring</h2>
                            <ul className="space-y-2 text-foreground/70">
                                <li>• Base Points: {BASE_POINTS}</li>
                                <li>• Time Bonus: {TIME_BONUS_MULTIPLIER} points per second remaining</li>
                                <li>• Streak Bonus: {STREAK_BONUS} points per streak level</li>
                                <li>• Skip Penalty: {SKIP_PENALTY} points</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={onStart} className="flex-1">
                            Start Game
                        </Button>
                        <Link href="/" className="flex-1">
                            <Button variant="outline" className="w-full">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
