/**
 * Lightweight Markdown → HTML converter.
 *
 * Handles the common Markdown subset: headings, bold, italic, inline code,
 * fenced code blocks, links, images, unordered/ordered lists, blockquotes,
 * horizontal rules, and paragraphs. Pure function, no dependencies — keeps the
 * tool fully client-side and privacy-safe (nothing uploaded).
 *
 * Not a spec-complete CommonMark parser; intentionally minimal for a free
 * browser tool. Escapes HTML in text to avoid injection in the preview.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineFormat(text: string): string {
  let t = escapeHtml(text);
  // Images ![alt](url)
  t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
  // Links [text](url)
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // Bold **text** or __text__
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  // Italic *text* or _text_
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/_([^_]+)_/g, "<em>$1</em>");
  // Inline code `code`
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  return t;
}

export function markdownToHtml(md: string): string {
  if (!md.trim()) return "";

  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let i = 0;
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (/^```/.test(line)) {
      if (inCodeBlock) {
        html.push(`<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        closeList();
        inCodeBlock = true;
      }
      i++;
      continue;
    }
    if (inCodeBlock) {
      codeBuffer.push(line);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(---|\*\*\*|___)\s*$/.test(line)) {
      closeList();
      html.push("<hr />");
      i++;
      continue;
    }

    // Headings
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineFormat(heading[2])}</h${level}>`);
      i++;
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(line)) {
      closeList();
      html.push(`<blockquote>${inlineFormat(line.replace(/^>\s?/, ""))}</blockquote>`);
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(line)) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push(`<li>${inlineFormat(line.replace(/^[-*+]\s+/, ""))}</li>`);
      i++;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push(`<li>${inlineFormat(line.replace(/^\d+\.\s+/, ""))}</li>`);
      i++;
      continue;
    }

    // Blank line
    if (line.trim() === "") {
      closeList();
      i++;
      continue;
    }

    // Paragraph
    closeList();
    html.push(`<p>${inlineFormat(line)}</p>`);
    i++;
  }

  if (inCodeBlock) {
    html.push(`<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
  }
  closeList();

  return html.join("\n");
}
