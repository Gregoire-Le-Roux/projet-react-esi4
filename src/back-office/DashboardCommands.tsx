import { useEffect, useState } from "react"
import moment from 'moment';
import { addCommand, deleteCommand, getCommands, updateCommand } from "../api/commands";
import { Command } from "../models/Commands";
import Status from "../components/static/Status";

function DashboardAdmin () {
    const [loading, setLoading] = useState(false);
    const [commands, setCommands] = useState([] as Array<Command>);
    const [command, setCommand] = useState({} as Command);
    const [editor, setEditor] = useState('show');

    useEffect(() => {
        _fetchData();
    }, [])

    const _fetchData = async () => {
        setLoading(true);
        let data = await getCommands();
        setCommands(data.sort(_sortCommands));
        setLoading(false);
    }

    // Trie les commandes par ordre décroissant selon la date de création
    const _sortCommands = (a: Command, b: Command) => {
        if(moment(a.createdAt.toDate()).format('yyyy-MM-DD') < moment(b.createdAt.toDate()).format('yyyy-MM-DD')) return 1
        else if(moment(a.createdAt.toDate()).format('yyyy-MM-DD') > moment(b.createdAt.toDate()).format('yyyy-MM-DD')) return -1
        return 0; 
    }

    const _formCommand = (command: Command, editor: string) => {
        setCommand(command);
        setEditor(editor);
    }
    
    const _addCommand = async () => {
        await addCommand();
        await _fetchData();
    }

    const _updateCommand = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Modifie la commande sur firebase
        await updateCommand(command);
        await _fetchData();
        setEditor('show');
    }

    const _deleteCommand = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Supprime la commande sur firebase
        await deleteCommand(command);
        await _fetchData();
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
            {!loading ?
                editor === 'show' ?
                <div>
                    <div>
                        <button type='button' onClick={() => _addCommand()} className="hover:border-indigo-600 text-indigo-600 hover:text-indigo-900">Ajout commande</button>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">Client</th>
                                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Articles</th>
                                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Prix</th>
                                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Statut</th>
                                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Date</th>
                                            <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">Actions</th>
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
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{command.price + ' €'}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{command.status}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{moment(command.createdAt.toDate()).format('DD/MM/yyyy')}</td>
                                                        <td className="relative flex justify-evenly whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <button type='button' onClick={() => _formCommand(command, 'modify')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                Modifier
                                                            </button>
                                                            <button type='button' onClick={() => _formCommand(command, 'delete')} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                                                                Supprimer
                                                            </button>
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
                </div>
                : editor === 'modify' ?
                    <div className="center-page flex flex-col">
                        <form onSubmit={(e) => _updateCommand(e)} className="form-card">
                            <p className="font-bold">Modifier l'article</p>
                            <div className="relative mt-4 rounded-md shadow-sm">
                                <label htmlFor="text" className="flex flex-start text-sm font-medium text-gray-700">
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
                                <label htmlFor="articles" className="flex flex-start text-sm font-medium text-gray-700">
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
                                <label htmlFor="price" className="flex flex-start text-sm font-medium text-gray-700">
                                    Prix
                                </label>
                                <input 
                                    disabled
                                    id='price'
                                    type='string'
                                    value={command.price.toString() + ' €'} 
                                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="relative mt-3 rounded-md shadow-sm">
                                <label htmlFor="status" className="flex flex-start text-sm font-medium text-gray-700">
                                    Statut
                                </label>
                                <select className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="status" data-te-select-init required value={command.status} onChange={(e) => setCommand({ ...command, status: e.target.value})}>
                                    {Status.ALL_STATUS.map((status, index) => 
                                        <option key={index} value={status}>{status}</option>
                                    )}
                                </select>
                            </div>
                            <div className="relative mt-3 rounded-md shadow-sm">
                                <label htmlFor="date" className="flex flex-start text-sm font-medium text-gray-700">
                                    Date de la commande
                                </label>
                                <input 
                                    disabled
                                    id='date'
                                    type='string'
                                    value={moment(command.createdAt.toDate()).format('DD/MM/yyyy à HH:mm')} 
                                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button type="button" onClick={() => setEditor('show')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Annuler
                                </button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Modifier
                                </button>
                            </div>
                        </form>
                    </div>
                : editor === 'delete' ?
                    <div className="center-page flex flex-col">
                        <form onSubmit={(e) => _deleteCommand(e)} className="form-card">
                            <p className="font-bold">Commande de {command.client} le {moment(command.createdAt.toDate()).format('DD/MM/yyyy à HH:mm')} pour {command.price.toString()}€.</p>
                            <p>Êtes-vous sûr de vouloir supprimer cette commande ?</p>
                            <div className="mt-4 flex justify-between w-full">
                                <button type="button" onClick={() => setEditor('show')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Annuler
                                </button>
                                <button type="submit" className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                                    Supprimer
                                </button>
                            </div>
                        </form>
                    </div>
                : null
            : 
            <div className="flex justify-center mt-6" role="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            }
        </div>
    )
}

export default DashboardAdmin