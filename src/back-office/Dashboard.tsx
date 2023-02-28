import { useEffect, useState } from "react"
import moment from 'moment';
import { getCommands, updateCommand } from "../api/firebase";
import { Command } from "../models/Commands";
import Status from "../components/static/Status";

function DashboardAdmin () {
    const [commands, setCommands] = useState([] as Array<Command>);
    const [command, setCommand] = useState({} as Command);
    const [editor, setEditor] = useState('show');

    useEffect(() => {
        (async () => {
            let data = await getCommands();
            setCommands(data);
        })()
    }, [])

    const _modifyCommand = (command: Command) => {
        setCommand(command);
        setEditor('modify');
    }

    async function _updateCommand (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Modifie la commande sur firebase
        await updateCommand(command);
        let tempCommands = [...commands];
        let indexCommands = tempCommands.findIndex(find => find._id === command._id);
        if(indexCommands >= 0) tempCommands[indexCommands] = command;
        setCommands(tempCommands);
        setEditor('show');
    }

    return (
        <div>
            <h1>Dashboard</h1>
        
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold">Commandes</h1>
                </div>
            </div>
            {editor === 'show' ?
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-center text-gray-900 sm:pl-6">Client</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900">Articles</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900">Prix</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900">Statut</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-center text-gray-900">Date</th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {commands.length > 0 ?
                                        commands.map((command, index) => 
                                            <tr key={index}>
                                                <td className="whitespace py-4 pl-4 pr-3">
                                                    <div className="text-sm font-medium text-gray-900 sm:pl-6">{command.client}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{command.articles}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{command.prix + ' €'}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{command.status}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{moment(command.date.toDate()).format('DD/MM/yyyy')}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <button type='button' onClick={() => _modifyCommand(command)} className="text-indigo-600 hover:text-indigo-900">Modifier</button>
                                                </td>
                                            </tr>
                                        )
                                    : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            : editor === 'modify' ?                
                <form onSubmit={(e) => _updateCommand(e)}>
                    <div className="relative mt-4 rounded-md shadow-sm">
                        <label htmlFor="text" className="flex flex-start block text-sm font-medium text-gray-700">
                            Client
                        </label>
                        <input 
                            id='text' 
                            type="text"
                            value={command.client} 
                            onChange={(e) => setCommand({ ...command, client: e.target.value})} 
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="relative mt-3 rounded-md shadow-sm">
                        <label htmlFor="articles" className="flex flex-start block text-sm font-medium text-gray-700">
                            Articles
                        </label>
                        <input 
                            disabled
                            id='articles'
                            type='string'
                            value={command.articles} 
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="relative mt-3 rounded-md shadow-sm">
                        <label htmlFor="prix" className="flex flex-start block text-sm font-medium text-gray-700">
                            Prix
                        </label>
                        <input 
                            disabled
                            id='prix'
                            type='string'
                            value={command.prix.toString() + ' €'} 
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="relative mt-3 rounded-md shadow-sm">
                        <label htmlFor="status" className="flex flex-start block text-sm font-medium text-gray-700">
                            Statut
                        </label>
                        <select className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="status" data-te-select-init required value={command.status} onChange={(e) => setCommand({ ...command, status: e.target.value})}>
                            {Status.ALL_STATUS.map((status, index) => 
                                <option key={index} value={status}>{status}</option>
                            )}
                        </select>
                    </div>
                    <div className="relative mt-3 rounded-md shadow-sm">
                        <label htmlFor="date" className="flex flex-start block text-sm font-medium text-gray-700">
                            Date de la commande
                        </label>
                        <input 
                            disabled
                            id='date'
                            type='string'
                            value={moment(command.date.toDate()).format('DD/MM/yyyy à HH:mm')} 
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-4 flex justify-evenly">
                        <button type="button" onClick={() => setEditor('show')}>
                            Annuler
                        </button>
                        <button type="submit">
                            Modifier
                        </button>
                    </div>
                </form>
            : null}
        </div>
    )
}

export default DashboardAdmin