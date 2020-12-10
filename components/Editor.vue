<template>
    <div class="editor-container">
        <div class="editor">
            <client-only>
                <codemirror
                    class="codemirror-container"
                    v-model="code"
                    :options="cmOption"
                    @cursorActivity="onCmCursorActivity"
                    @ready="onCmReady"
                    @focus="onCmFocus"
                    @blur="onCmBlur"
                />
            </client-only>
        </div>
    </div>
</template>

<script>
import dedent from "dedent";
export default {
    name: "themesystem-editor",
    data() {
        return {
            cmOption: {
                tabSize: 4,
                styleActiveLine: true,
                lineNumbers: true,
                line: true,
                mode: "text/javascript",
                theme: "base16-dark"
            },
            code: "HelloWorld!"
        };
    },
    methods: {
        onCmCursorActivity(codemirror) {
            console.debug("onCmCursorActivity", codemirror);
        },
        onCmReady(codemirror) {
            console.debug("onCmReady", codemirror);
        },
        onCmFocus(codemirror) {
            console.debug("onCmFocus", codemirror);
        },
        onCmBlur(codemirror) {
            console.debug("onCmBlur", codemirror);
        },
    }
};
</script>

<style lang="scss" scoped>
.editor {
    min-height: 600px !important;

    .codemirror-container,
    .pre {
        max-width: 800px;
        height: 700px;
        margin: 0 auto;
        overflow: auto;

        .CodeMirror {
            width: 300px !important;
            height: 600px !important;
        }
    }
    .pre {
        display: block;
        padding: 1rem;
        font-size: small;
        line-height: 1.6;
        word-break: break-all;
        word-wrap: break-word;
    }
}
</style>
