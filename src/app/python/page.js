import Navbar from "../components/navbar";
import CodeBox from "../components/CodeBox";

export default function Home() {
  const firstProgram = 'if 5 > 2:\n\tprint("Five is greater than two!")';

  return (
    <main className="">
      <Navbar />

      <h1 className="text-center text-[5rem]">Python</h1>

      <div className="text-left h-auto w-fit ml-[35%] mr-auto bg-gray-300 rounded-xl">
        <h2 className="text-[2rem]">1. Install Python</h2>
        <ol class="space-y-1 list-inside dark:text-gray-400 list-disc">
          <li>
            Visit the official Python website:
            <a href="https://www.python.org/" target="_blank">
              <p className="font-semibold text-gray-900 dark:text-white">
                Python.org
              </p>
            </a>
          </li>
          <li>
            Download the latest version of Python (preferably the stable
            version).
          </li>
          <li>Run the installer and follow the instructions.</li>
        </ol>
      </div>

      <div className="bg-gray-300 rounded-xl text-left h-auto w-fit ml-[35%] mr-auto">
        <h2 className=" text-[2rem]">
          2. Integrated Development Environment (IDE)
        </h2>
        <p>
          You can use various tools for Python programming. Some popular choices
          include:
        </p>
        <ol class="space-y-1 list-inside dark:text-gray-400 list-disc">
          <li>PyCharm: A full-featured integrated development environment.</li>
          <li>
            Visual Studio Code: A lightweight editor with extensive features.
          </li>
          <li>
            Jupyter Notebook: An environment for working with notebooks and data
            analysis.
          </li>
        </ol>
      </div>

      <div className="bg-gray-300 rounded-xl text-left h-auto w-fit ml-[35%] mr-auto">
        <h2 className="text-[2rem]">3. Your First Program</h2>
        <p>
          Open your editor, create new python file and write simple "Hello
          World" program!
        </p>
        <CodeBox code={firstProgram} />
      </div>
    </main>
  );
}
