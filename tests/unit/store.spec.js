import { structure } from "@/lib/store";
import { cloneDeep } from "lodash";
import Vuex from 'vuex';

import { collections } from '@/lib/firebase';

jest.mock('@/lib/firebase');

collections.contacts.get.mockResolvedValue([]);
collections.contacts.add.mockImplementation(() =>
    Promise.resolve({ id: 1})
);

function factory(){
    const clone = cloneDeep(structure);
    return new Vuex.Store(clone);
}
describe("mutations", () => {
    test("#addContact", () => {
        const store = factory();
        store.commit("addContact", {
            name: "Phil"
        });
        expect(store.state.contacts.all()).toEqual([
            {
                name: "Phil"
            }
        ]);
    });
});

describe("state", () => {
    test("contacts is an empty collection", () => {
        const store = factory();
        expect(store.state.contacts.all()).toEqual([]);
    });
});

describe("actions", () => {
    const { actions } = structure

    test('addContact', async () => {
        const fakeStore = {
            commit: jest.fn()
        };
        const contact = { name: "Billy" };
        await actions.addContact(fakeStore, contact)
        expect(fakeStore.commit).toHaveBeenCalledWith
        ('addContact', {
            id: 1, name: "Billy"
        });
    });
});