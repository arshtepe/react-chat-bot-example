import transitions from "./states";

export default function transition(state, value) {
    if(!transitions.has(state)) {
        throw new Error("Unexpected state");
    }

    return transitions.get(state)(value);
}