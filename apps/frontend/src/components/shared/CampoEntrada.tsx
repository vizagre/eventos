import React from "react";

export interface CampoEntradaProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  value: string | number;
  onChange: (event: any) => void;
  descricao?: string;
  observacao?: string;
  erro?: string;
  outterClassName?: string;
}

export default function CampoEntrada(props: CampoEntradaProps) {
  function propsInput() {
    const propsInput = { ...props };
    delete propsInput.label;
    delete propsInput.descricao;
    delete propsInput.observacao;
    delete propsInput.erro;
    delete propsInput.outterClassName;
    return propsInput;
  }

  return (
    <div className={`flex flex-col gap-2 ${props.outterClassName ?? ""}`}>
      <div className="flex flex-col">
        {props.label && (
          <label className="text-lg font-black text-white">{props.label}</label>
        )}
        {props.descricao && (
          <p className="text-sm font-light text-zinc-400 -mt-1">
            {props.descricao}
          </p>
        )}
      </div>
      <input
        {...propsInput()}
        type={props.type ?? "text"}
        className="w-full px-3 py-2 border border-white/20 focus:border-white/50 rounded-md bg-black/50"
      />
      {props.erro && (
        <span className="pl-2 text-sm text-red-500">{props.erro}</span>
      )}
      {!props.erro && props.observacao && (
        <span className="pl-2 text-xs text-yellow-300">{props.observacao}</span>
      )}
    </div>
  );
}
