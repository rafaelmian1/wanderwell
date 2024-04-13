export async function resolvedComponent(
    Component: Function,
    props?: any,
): Promise<() => JSX.Element> {
    const ComponentResolved = await Component(props)
    return () => ComponentResolved
}
