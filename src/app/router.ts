export default {
    before({ commit /*commit, redirect, prev, next*/ }: any) {
        commit();
        // redirect("/login");
    },
    after(
        {
            /* prev, next */
        }
    ) {
        // console.log(next);
    },
};
