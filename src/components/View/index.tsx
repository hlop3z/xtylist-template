const $NAME = "__xhcb2ef9dpa8gj4lm4dqgltk__View";

import "./style.scss";

import viteLogo from "/vite.svg";

const { Grid, Button } = xtylist;
const { useSignal } = preact;

export default function View(props: any) {
    const count = useSignal(0);
    console.log("NAME:", $NAME);
    console.log("PROPS:", props);
    return (
        <Grid row gap-x="2" gap-y="2" class="eh-100p">
            <Grid cols="12" class="bd-a eh-100p ta-c dx-ce">
                <div style="text-align: center;">
                    <img
                        src={viteLogo}
                        class="logo"
                        alt="Vite logo"
                        width="120px"
                    />
                </div>
                <h2 class="my-4">Vite + Bun</h2>
                <div>
                    <Button
                        stack
                        on-click={() => count.value++}
                        variant={"outlined"}
                        size="lg"
                        color={null}
                        dark={false}
                    >
                        Count : {count}
                    </Button>
                </div>
                <h2 class="my-6">
                    <a href="https://hlop3z.github.io/xtyle/" target="_blank">
                        Xtyle (JS)
                    </a>
                    <span class="mx-2">|</span>
                    <a
                        href="https://hlop3z.github.io/xtyle-css/"
                        target="_blank"
                    >
                        Xtyle (CSS)
                    </a>
                    <span class="mx-2">|</span>
                    <a href="https://hlop3z.github.io/xtylist/" target="_blank">
                        Xtylist
                    </a>
                </h2>
            </Grid>
        </Grid>
    );
}
