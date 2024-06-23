import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import { Type, Ref, Key, Props, ReactElementType } from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'myReact'
	};

	return element;
};

export const jsx = function (
	type: ReactElementType,
	config: any,
	...maybeChildren: any
) {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const value = config[prop];
		if (prop === 'key') {
			if (value !== undefined) {
				key = `${value}`;
			}
			continue;
		}
		if (prop === 'ref') {
			if (value !== undefined) {
				ref = value;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength === 1) {
		props.children = maybeChildren[0];
	} else {
		props.children = maybeChildren;
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = function (type: ReactElementType, config: any) {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const value = config[prop];
		if (prop === 'key') {
			if (value !== undefined) {
				key = `${value}`;
			}
			continue;
		}
		if (prop === 'ref') {
			if (value !== undefined) {
				ref = value;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}
	return ReactElement(type, key, ref, props);
};
