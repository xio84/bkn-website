import { Outlet } from "react-router-dom";
import { SuspenseWithErrorBoundary } from "~/components/helpers";
import { PendingFallback } from "~/components/helpers/fallback";
import { MenuItem, Navbar } from "./navbar/Navbar";

const MENU_ITEMS: MenuItem[] = [
	{
		path: "/app/dashboard",
		text: "Dashboard",
	},
	// {
	// 	path: "/app/deposit",
	// 	text: "Deposit",
	// },
	{
		path: "/app/history",
		text: "Transaction History",
	},
	// {
	// 	path: "/app/historydeposit",
	// 	text: "Deposit History",
	// },
	{
		path: "/app/profile",
		text: "Profile",
	},
];

export function Layout() {
	return (
		<div className="h-full flex flex-col">
			<Navbar menu={MENU_ITEMS} />
			<main className="flex-1">
				<SuspenseWithErrorBoundary fallbackRender={() => <PendingFallback />}>
					<Outlet />
				</SuspenseWithErrorBoundary>
			</main>
			<footer className="text-center p-8">
				<p className="text-base text-slate-400">
					©2023 All rights reserved by <span className="font-bold text-offblack">PDS</span>
				</p>
			</footer>
		</div>
	);
}
