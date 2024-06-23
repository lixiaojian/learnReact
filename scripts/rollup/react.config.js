import generatePackageJson from 'rollup-plugin-generate-package-json';
import {
	getBaseRollupPlugin,
	getPackageJSON,
	resolvePackagePath
} from './utils';

/**
 * Created by 872458899@qq.com on 2024/6/22.
 */
const { name, module } = getPackageJSON('react');
const pkgPath = resolvePackagePath(name);
const distPkgPath = resolvePackagePath(name, true);

export default [
	// react
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${distPkgPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getBaseRollupPlugin({}),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: distPkgPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	// jsx-runtime
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			{
				file: `${distPkgPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			},
			{
				file: `${distPkgPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd'
			}
		],
		plugins: getBaseRollupPlugin({})
	}
];
