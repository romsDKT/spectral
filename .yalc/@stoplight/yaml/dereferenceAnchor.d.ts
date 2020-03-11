import { Kind, YAMLAnchorReference, YAMLMapping } from './types';
export declare const dereferenceAnchor: (
  node:
    | YAMLAnchorReference
    | import('./types').YAMLBaseNode<Kind.INCLUDE_REF>
    | import('./types').YAMLScalar
    | import('./types').YAMLMap
    | YAMLMapping
    | import('./types').YAMLSequence
    | null,
  anchorId: string,
) =>
  | YAMLAnchorReference
  | import('./types').YAMLBaseNode<Kind.INCLUDE_REF>
  | import('./types').YAMLScalar
  | import('./types').YAMLMap
  | YAMLMapping
  | import('./types').YAMLSequence
  | null;
