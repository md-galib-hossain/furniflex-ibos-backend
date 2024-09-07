import { Lucia } from "lucia";

declare global {
    namespace Lucia {
        interface Register {
            Lucia: typeof lucia;
            DatabaseUserAttributes: DatabaseUserAttributes;
        }
    }
}