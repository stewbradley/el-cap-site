import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Link from "next/link";


export default function Card({
  title,
  description,
  demo,
  large,
  
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
  
}) {
  return (
    <div
      // className is a template literal, it lets you use JS inside of CSS. It's a bit like string interpolation in JS. You specify a CSS class name, and then you can use JS to conditionally add other class names.
      className={`px-2 relative col-span-1 h-96 overflow-hidden border border-slate-400 bg-slate hover:bg-gradient-to-bl from-slate-50/25 to-slate-100/25 hover:shadow-lg hover:border-gray-900 ${
        large ? "md:col-span-2" : ""
      }`}
    >
    
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className=" bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
      
    </div>
  );
}
