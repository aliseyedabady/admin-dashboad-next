"use client";

import { useState } from "react";
import { Button } from "./button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for TSX/JSX
  const highlightCode = (code: string) => {
    return code
      // Comments
      .replace(/(\/\/.*$)/gm, '<span class="text-green-400">$1</span>')
      // Strings
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-yellow-300">$1</span>')
      // Keywords
      .replace(
        /\b(import|from|const|let|var|function|return|if|else|export|default|interface|type)\b/g,
        '<span class="text-purple-400">$1</span>'
      )
      // JSX tags
      .replace(/(&lt;\/?\w+)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>')
      // Props/attributes
      .replace(/(\w+)=/g, '<span class="text-cyan-300">$1</span>=')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>')
      // Braces
      .replace(/([{}[\]()])/g, '<span class="text-gray-300">$1</span>');
  };

  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return (
    <div className={cn("relative rounded-lg border bg-slate-950", className)}>
      {/* Header with Copy Button */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <span className="text-xs font-mono text-slate-400">{language}</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="h-7 gap-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span className="text-xs">کپی شد!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span className="text-xs">کپی کد</span>
            </>
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm">
          <code
            className="font-mono text-slate-50"
            dangerouslySetInnerHTML={{
              __html: highlightCode(escapeHtml(code)),
            }}
          />
        </pre>
      </div>
    </div>
  );
}

