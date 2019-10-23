import codecs
import os
import sys

import github3

MAIN_BRANCH = 'master'
LOCAL_FILE = 'resources/connectors.json'
REMOTE_FILE = '/resources/connectors.json'


def main(args):
    version = args[1]

    token = os.environ['GH_FA_TOKEN']
    repo = os.environ['GITHUB_REPOSITORY']
    commit_msg = \
        'Update resources\n\nUse connectors.json from {0}.'.format(version)

    with codecs.open(LOCAL_FILE, mode='r', encoding='utf-8') as f:
        contents = f.read()

    github = github3.login(token=token)
    repository = github.repository(*repo.split('/'))

    connectors_file = repository.file_contents(
        REMOTE_FILE, ref=MAIN_BRANCH)

    prev_contents = connectors_file.decoded.decode('utf-8')

    if prev_contents != contents:
        pushed_change = connectors_file.update(
            commit_msg, contents.encode('utf-8'), branch=MAIN_BRANCH)

        commit_sha = pushed_change['commit'].sha
        print("Pushed {0} to {1}".format(commit_sha, MAIN_BRANCH))
    else:
        print("No changes to push")

    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
