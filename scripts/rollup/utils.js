/**
 * Created by 872458899@qq.com on 2024/6/22.
 */
import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

// packages 目录 的路径
const pkgPath = path.resolve(__dirname, '../../packages');
// 打包后生成文件的路径
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export const resolvePackagePath = (pkgName, isDist) => {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
};

export const getPackageJSON = (pkgName) => {
	const jsonPath = path.join(pkgPath, pkgName, 'package.json');
	return JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8' }));
};

export const getBaseRollupPlugin = ({ typescript = {} }) => {
	return [cjs(), ts(typescript)];
};
