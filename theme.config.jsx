import Image from "next/image"

export default {
    docsRepositoryBase: "https://github.com/aeongone/purplewiki",
    useNextSeoProps() {
        return {
            titleTemplate: "%s – PurpleWiki"
        }
    },
    logo: (
        <>
            <Image src="/images/logo.gif" width={24} height={24} />
            <span style={{ marginLeft: ".4em" }} >PurpleWiki</span>
        </>
    ),
    project: {
        link: "https://github.com/aeongone/purplewiki"
    },
    feedback: {
        content: null
    },
    footer: {
        component: null
    }
}