import { noop, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree } from './json';

export function setNXTag(tag: string, options: any): Rule {
    if (tag) {
        return updateJsonInTree(`/nx.json`, json => {
            return {
                ...json,
                projects: {
                    ...json.projects,
                    [options.name]: { tags: tag },
                },
            };
        });
    } else {
        return noop;
    }
}
