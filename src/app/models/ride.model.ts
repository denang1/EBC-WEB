import { Pace } from './index';

export interface Ride {
    id: number;
    date: string;
    name: string;
    destination: string;
    numRiders: number;
    distance: number;
    pace: Pace;
    leaderFirstName: string;
    leaderLastName: string;
    sweepFirstName: string;
    sweepLastName: string;
}