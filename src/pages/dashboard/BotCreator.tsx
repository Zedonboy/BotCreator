//@ts-nocheck
import { memo, useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import TextInput from "../../components/TextInput";
import { Bot } from "../../types/Bot";
import MultiSelect from "../../components/MultiSelect";
import SingleSelect from "../../components/SingleSelect";
import ParamDialog from "../../components/ParaDialog";
import CheckBox from "../../components/CheckBox";
import FileSaver from "file-saver";
import { useRecoilState } from "recoil";
import { APIKeyAtom, SignatureAtom } from "../../utils/state";

const reqInputs = [
  {
    label: "Name",
    inputtype: "string",
    parameter_name: "name",
  },

  {
    label: "Assets Pairs",
    inputtype: "array",
    parameter_name: "name",
  },
  {
    label: "Base Order Volume",
    inputtype: "number",
    parameter_name: "base_order_volume",
  },
  {
    label: "Take Profit",
    inputtype: "number",
    parameter_name: "take_profit",
  },
  {
    label: "Safety Order Volume",
    inputtype: "number",
    parameter_name: "safety_order_volume",
  },
  {
    label: "Martingale Volume Coefficient",
    inputtype: "number",
    parameter_name: "martingale_volume_coefficient",
  },
  {
    label: "Martingale Step Coefficient",
    inputtype: "number",
    parameter_name: "martingale_volume_coefficient",
  },
  {
    label: "Max Safety Orders",
    inputtype: "number",
    parameter_name: "max_safety_orders",
  },
  {
    label: "Active Safety Orders Count",
    inputtype: "number",
    parameter_name: "active_safety_orders_count",
  },
  {
    label: "Take Profit Type",
    inputtype: "enum",
    parameter_name: "take_profit_type",
    value: ["base", "total"],
  },
  {
    label: "Strategy List",
    inputtype: "array",
    parameter_name: "strategy_list",
    property: "strategy",
    value: [
      { strategy: "manual" },
      { strategy: "nonstop" },
      { options: { type: "original", percent: 3 }, strategy: "qfl" },
      {
        options: { time: "5m", type: "buy_or_strong_buy" },
        strategy: "trading_view",
      },
    ],
  },
];
function BotCreator() {
  const [bot, setBot] = useState(new Bot());
  const [openParaDialog, setParamDialog] = useState(false);
  const [selectedOptionalParam, setSelectedOptionalParam] = useState([]);
  const [signature, _] = useRecoilState(SignatureAtom)
  const [apiKey] = useRecoilState(APIKeyAtom)
  const handleInput = (e) => {
    setBot({
      ...bot,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {}, []);
  return (
    <>
      <ParamDialog
        selected={selectedOptionalParam}
        setSelected={setSelectedOptionalParam}
        open={openParaDialog}
        setOpen={setParamDialog}
      />
      <section className="flex justify-end">
        <div className="flex space-x-2">
        <button
            onClick={(e) => {
              fetch("https://api.3commas.io/public/api/ver1/bots/create_bot", {
                method: "POST",
                headers: {
                  "Signature": signature,
                  "APIKEY": apiKey
                }
              }).then(resp => {

              }).catch(err => {
                
              })
            }}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Create Bot
          </button>
          <button
            onClick={(e) => {
              let cloneBot = {};
              for (const key in bot) {
                if (Object.prototype.hasOwnProperty.call(bot, key)) {
                  const element = bot[key];
                  if (element) {
                    cloneBot[key] = element;
                  }
                }
              }

              let editorState = {
                bot: cloneBot,
                opt_param: selectedOptionalParam
              }

              var blob = new Blob([JSON.stringify(editorState)], {
                type: "text/plain;charset=utf-8",
              });
              FileSaver.saveAs(blob, "bot_config.3cb");
            }}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Export
          </button>
          <button
            onClick={(e) => {
              let elm = document.getElementById("fileElem");
              elm?.click();
            }}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Import
          </button>
          <input
            className="hidden"
            onChange={(e) => {
              let elm = e.target;
              let file = elm?.files[0];
              let fr = new FileReader();
              fr.onload = function (e) {
                let editorState = JSON.parse(e.target?.result);
                setBot({ ...bot, ...editorState?.bot });
                setSelectedOptionalParam([...editorState?.opt_param])
              };
              fr.readAsText(file, "utf-8");
            }}
            type="file"
            id="fileElem"
            accept=".3cb"
          ></input>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {reqInputs.map((v) => {
          if (v.inputtype === "string")
            return (
              <TextInput
                value={bot[v.parameter_name]}
                name={v.parameter_name}
                onChange={handleInput}
                label={v.label}
                type="text"
              />
            );
          if (v.inputtype === "number")
            return (
              <TextInput
                value={bot[v.parameter_name]}
                name={v.parameter_name}
                onChange={handleInput}
                label={v.label}
                type="number"
              />
            );
          if (v.inputtype === "enum")
            return (
              <SingleSelect
                value={bot[v.parameter_name]}
                options={v.value}
                label={v.label}
              />
            );
          if (v.inputtype === "array")
            return (
              <MultiSelect
                buttonName="Add+"
                label={v.label}
                data={v.value}
                property={v?.property}
                value={bot[v.parameter_name]}
                domChanged={(s) => {
                  handleInput({ target: { name: v.parameter_name, value: s } });
                }}
              />
            );
        })}
      </section>

      <section className="border border-blue-500 relative rounded-lg p-4 mt-10">
        <div className="px-4 py-2 -mt-8 absolute bg-white rounded-full border border-blue-500 inline text-sm">
          Optional Parameters
        </div>
        <section className="grid mt-8 grid-cols-1 md:grid-cols-3 gap-3">
          {selectedOptionalParam.map((v) => {
            if (v.inputtype === "string")
              return (
                <TextInput
                  value={bot[v.parameter_name]}
                  name={v.parameter_name}
                  onChange={handleInput}
                  label={v.label}
                  type="text"
                />
              );
            if (v.inputtype === "number")
              return (
                <TextInput
                  value={bot[v.parameter_name]}
                  name={v.parameter_name}
                  onChange={handleInput}
                  label={v.label}
                  type="number"
                />
              );
            if (v.inputtype === "enum")
              return (
                <SingleSelect
                  value={bot[v.parameter_name]}
                  name={v.parameter_name}
                  onChange={handleInput}
                  options={v.value}
                  label={v.label}
                />
              );
            if (v.inputtype === "array")
              return (
                <MultiSelect
                  buttonName="Add+"
                  label={v.label}
                  data={v.value}
                  value={bot[v.parameter_name]}
                  property={v?.property}
                  domChanged={(s) => {
                    handleInput({
                      target: { name: v.parameter_name, value: s },
                    });
                  }}
                />
              );
            if (v.inputtype === "boolean")
              return (
                <CheckBox
                  label={v.label}
                  value={bot[v.parameter_name]}
                  name={v.parameter_name}
                  onChange={handleInput}
                />
              );
          })}
        </section>
        <button
          onClick={(e) => {
            setParamDialog(true);
          }}
          type="button"
          className="inline-flex mt-6 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add Bot Parameter
        </button>
      </section>
    </>
  );
}

export default memo(BotCreator);
