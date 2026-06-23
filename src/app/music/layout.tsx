export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h2>Inter Items</h2>
            <body className="min-h-full flex flex-col">{children}</body>
        </>
    );
}
