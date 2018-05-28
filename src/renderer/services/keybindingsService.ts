'use strict';

import {
  QuickOpenAction,
  ShowAllCommandsAction,
} from 'commands/workbenchCommands';

type TKeybinding = {
  label: string;
};

type TKeyBindingsRegistry = Map<string, TKeybinding>;
const workbenchRegistry: TKeyBindingsRegistry = new Map([
  [ShowAllCommandsAction.ID, { label: '⇧⌘P' }],
  [QuickOpenAction.ID, { label: '⌘P' }],
]);

// TODO: make reactive: change keybindings must cause related views to re-render
class KeybindingService {
  private _keybindingsMap: TKeyBindingsRegistry;

  public constructor(keybindingsMap: TKeyBindingsRegistry) {
    this._keybindingsMap = keybindingsMap;
  }

  public getById(commandId: string): TKeybinding | void {
    return this._keybindingsMap.get(commandId);
  }
}

export const keybindingService = new KeybindingService(workbenchRegistry);
