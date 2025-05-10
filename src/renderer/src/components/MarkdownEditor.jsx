import { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

export function MarkdownEditor() {
    const [markdownText, setMarkdownText] = useState('')
    const editorRef = useRef(null)

    const handleChange = (event) => {
        setMarkdownText(event.target.value)
    }

    const handleClick = () => {
        if (editorRef.current) {
            editorRef.current.focus()
            // Mover el cursor al final del texto (último renglón)
            editorRef.current.selectionStart = markdownText.length
            editorRef.current.selectionEnd = markdownText.length
        }
    }

    return (
        <div
            style={{
                width: '100%',
                minHeight: '200px',
                padding: '10px',
                fontFamily: 'sans-serif',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap', // Para respetar los saltos de línea
                wordBreak: 'break-word', // Para evitar desbordamiento horizontal
                cursor: 'text', // Indicar que es un área editable
            }}
            onClick={handleClick}
        >
            <ReactMarkdown>{markdownText}</ReactMarkdown>
            <textarea
                ref={editorRef}
                value={markdownText}
                onChange={handleChange}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0, // Hacer el textarea invisible
                    resize: 'none',
                    outline: 'none',
                    fontFamily: 'sans-serif',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                }}
            />
        </div>
    );
}