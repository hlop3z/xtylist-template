import { View } from "./components";

const { Layout } = xtylist;

setTimeout(() => {
    xtyle.action("layout.open", "left");
    xtyle.action("layout.open", "right");
    xtyle.action("layout.open", "left-mini");
    xtyle.action("layout.open", "right-mini");
}, 500);

function Main() {
    return <View />;
}

export default function LiveDemo() {
    return (
        <Layout.App
            theme-color="danger"
            clip-right
            clip-left
            breakpoints={xtyle.global.layoutBreakpoints}
            space-x={xtyle.device.mobile ? 0 : 3}
            space-y={xtyle.device.mobile ? 0 : 3}
            slot-header={
                <Layout.Header theme-color="white" elevation="8">
                    <span></span>
                    Header
                    <span></span>
                </Layout.Header>
            }
            slot-footer={
                <Layout.Footer theme-color="white" elevation="8">
                    <span></span>
                    Footer
                    <span></span>
                </Layout.Footer>
            }
            slot-left={
                <Layout.Left
                    class="ta-r"
                    theme-color="white"
                    elevation="8"
                    clip-top
                    clip-bottom
                >
                    Left
                </Layout.Left>
            }
            slot-right={
                <Layout.Right
                    theme-color="white"
                    elevation="8"
                    clip-top
                    clip-bottom
                >
                    Right
                </Layout.Right>
            }
            slot-left-mini={
                <Layout.LeftMini
                    theme-color="white"
                    elevation="8"
                    clip-top
                    clip-bottom
                >
                    Left Mini
                </Layout.LeftMini>
            }
            slot-right-mini={
                <Layout.RightMini
                    theme-color="white"
                    elevation="8"
                    clip-top
                    clip-bottom
                >
                    Right Mini
                </Layout.RightMini>
            }
        >
            <Layout.Main theme-color="white">
                <Main />
            </Layout.Main>
        </Layout.App>
    );
}
