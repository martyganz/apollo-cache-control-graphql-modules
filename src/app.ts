import { createApplication } from 'graphql-modules';
import { flightModule } from './flight.module';

export const app = createApplication({
    modules: [flightModule],
});