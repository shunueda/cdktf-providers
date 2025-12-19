// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TerminalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable terminal length and width automatically (not work if width or length set to 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#auto_size Terminal#auto_size}
  */
  readonly autoSize?: number;
  /**
  * Enable command line editing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#editing Terminal#editing}
  */
  readonly editing?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#id Terminal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set interval for closing connection when there is no input detected (Timeout in minutes, 0 means never timeout, default is 15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#idle_timeout Terminal#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Set number of lines on a screen(0 for no pausing) (Number of lines on screen, 0 for no pausing, default is 24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#length Terminal#length}
  */
  readonly length?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#uuid Terminal#uuid}
  */
  readonly uuid?: string;
  /**
  * Set width of the display terminal (Number of characters on a screen line, 0 means infinite, default is 80)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#width Terminal#width}
  */
  readonly width?: number;
  /**
  * gslb_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#gslb_cfg Terminal#gslb_cfg}
  */
  readonly gslbCfg?: TerminalGslbCfg;
  /**
  * history_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#history_cfg Terminal#history_cfg}
  */
  readonly historyCfg?: TerminalHistoryCfg;
  /**
  * prompt_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#prompt_cfg Terminal#prompt_cfg}
  */
  readonly promptCfg?: TerminalPromptCfg;
}
export interface TerminalGslbCfg {
  /**
  * Group status show disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#disable Terminal#disable}
  */
  readonly disable?: number;
  /**
  * Show GSLB group role on CLI prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#group_role Terminal#group_role}
  */
  readonly groupRole?: number;
  /**
  * The gslb status prompt function set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#gslb_prompt Terminal#gslb_prompt}
  */
  readonly gslbPrompt?: number;
  /**
  * Show "gslb" symbol on CLI prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#symbol Terminal#symbol}
  */
  readonly symbol?: number;
}

export function terminalGslbCfgToTerraform(struct?: TerminalGslbCfgOutputReference | TerminalGslbCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    group_role: cdktf.numberToTerraform(struct!.groupRole),
    gslb_prompt: cdktf.numberToTerraform(struct!.gslbPrompt),
    symbol: cdktf.numberToTerraform(struct!.symbol),
  }
}


export function terminalGslbCfgToHclTerraform(struct?: TerminalGslbCfgOutputReference | TerminalGslbCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_role: {
      value: cdktf.numberToHclTerraform(struct!.groupRole),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_prompt: {
      value: cdktf.numberToHclTerraform(struct!.gslbPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    symbol: {
      value: cdktf.numberToHclTerraform(struct!.symbol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TerminalGslbCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TerminalGslbCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._groupRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRole = this._groupRole;
    }
    if (this._gslbPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPrompt = this._gslbPrompt;
    }
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TerminalGslbCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._groupRole = undefined;
      this._gslbPrompt = undefined;
      this._symbol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._groupRole = value.groupRole;
      this._gslbPrompt = value.gslbPrompt;
      this._symbol = value.symbol;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // group_role - computed: false, optional: true, required: false
  private _groupRole?: number; 
  public get groupRole() {
    return this.getNumberAttribute('group_role');
  }
  public set groupRole(value: number) {
    this._groupRole = value;
  }
  public resetGroupRole() {
    this._groupRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRoleInput() {
    return this._groupRole;
  }

  // gslb_prompt - computed: false, optional: true, required: false
  private _gslbPrompt?: number; 
  public get gslbPrompt() {
    return this.getNumberAttribute('gslb_prompt');
  }
  public set gslbPrompt(value: number) {
    this._gslbPrompt = value;
  }
  public resetGslbPrompt() {
    this._gslbPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPromptInput() {
    return this._gslbPrompt;
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: number; 
  public get symbol() {
    return this.getNumberAttribute('symbol');
  }
  public set symbol(value: number) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
  }
}
export interface TerminalHistoryCfg {
  /**
  * Enable terminal history
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#enable Terminal#enable}
  */
  readonly enable?: number;
  /**
  * Set history buffer size (Size of history buffer, default is 256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#size Terminal#size}
  */
  readonly size?: number;
}

export function terminalHistoryCfgToTerraform(struct?: TerminalHistoryCfgOutputReference | TerminalHistoryCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function terminalHistoryCfgToHclTerraform(struct?: TerminalHistoryCfgOutputReference | TerminalHistoryCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TerminalHistoryCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TerminalHistoryCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TerminalHistoryCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._size = value.size;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface TerminalPromptCfgVcsCfg {
  /**
  * Display VCS status in prompt, eg. vMaster, vBlade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#vcs_status Terminal#vcs_status}
  */
  readonly vcsStatus?: number;
}

export function terminalPromptCfgVcsCfgToTerraform(struct?: TerminalPromptCfgVcsCfgOutputReference | TerminalPromptCfgVcsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vcs_status: cdktf.numberToTerraform(struct!.vcsStatus),
  }
}


export function terminalPromptCfgVcsCfgToHclTerraform(struct?: TerminalPromptCfgVcsCfgOutputReference | TerminalPromptCfgVcsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vcs_status: {
      value: cdktf.numberToHclTerraform(struct!.vcsStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TerminalPromptCfgVcsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TerminalPromptCfgVcsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vcsStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsStatus = this._vcsStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TerminalPromptCfgVcsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vcsStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vcsStatus = value.vcsStatus;
    }
  }

  // vcs_status - computed: false, optional: true, required: false
  private _vcsStatus?: number; 
  public get vcsStatus() {
    return this.getNumberAttribute('vcs_status');
  }
  public set vcsStatus(value: number) {
    this._vcsStatus = value;
  }
  public resetVcsStatus() {
    this._vcsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsStatusInput() {
    return this._vcsStatus;
  }
}
export interface TerminalPromptCfg {
  /**
  * Display HA status in prompt, eg. Active, Standby, ForcedStandby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#ha_status Terminal#ha_status}
  */
  readonly haStatus?: number;
  /**
  * Display hostname in prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#hostname Terminal#hostname}
  */
  readonly hostname?: number;
  /**
  * Configure the normal prompt format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#prompt Terminal#prompt}
  */
  readonly prompt?: number;
  /**
  * vcs_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#vcs_cfg Terminal#vcs_cfg}
  */
  readonly vcsCfg?: TerminalPromptCfgVcsCfg;
}

export function terminalPromptCfgToTerraform(struct?: TerminalPromptCfgOutputReference | TerminalPromptCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_status: cdktf.numberToTerraform(struct!.haStatus),
    hostname: cdktf.numberToTerraform(struct!.hostname),
    prompt: cdktf.numberToTerraform(struct!.prompt),
    vcs_cfg: terminalPromptCfgVcsCfgToTerraform(struct!.vcsCfg),
  }
}


export function terminalPromptCfgToHclTerraform(struct?: TerminalPromptCfgOutputReference | TerminalPromptCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_status: {
      value: cdktf.numberToHclTerraform(struct!.haStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostname: {
      value: cdktf.numberToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prompt: {
      value: cdktf.numberToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcs_cfg: {
      value: terminalPromptCfgVcsCfgToHclTerraform(struct!.vcsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "TerminalPromptCfgVcsCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TerminalPromptCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TerminalPromptCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStatus = this._haStatus;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._vcsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsCfg = this._vcsCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TerminalPromptCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._haStatus = undefined;
      this._hostname = undefined;
      this._prompt = undefined;
      this._vcsCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._haStatus = value.haStatus;
      this._hostname = value.hostname;
      this._prompt = value.prompt;
      this._vcsCfg.internalValue = value.vcsCfg;
    }
  }

  // ha_status - computed: false, optional: true, required: false
  private _haStatus?: number; 
  public get haStatus() {
    return this.getNumberAttribute('ha_status');
  }
  public set haStatus(value: number) {
    this._haStatus = value;
  }
  public resetHaStatus() {
    this._haStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStatusInput() {
    return this._haStatus;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: number; 
  public get hostname() {
    return this.getNumberAttribute('hostname');
  }
  public set hostname(value: number) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: number; 
  public get prompt() {
    return this.getNumberAttribute('prompt');
  }
  public set prompt(value: number) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // vcs_cfg - computed: false, optional: true, required: false
  private _vcsCfg = new TerminalPromptCfgVcsCfgOutputReference(this, "vcs_cfg");
  public get vcsCfg() {
    return this._vcsCfg;
  }
  public putVcsCfg(value: TerminalPromptCfgVcsCfg) {
    this._vcsCfg.internalValue = value;
  }
  public resetVcsCfg() {
    this._vcsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsCfgInput() {
    return this._vcsCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal thunder_terminal}
*/
export class Terminal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_terminal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Terminal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Terminal to import
  * @param importFromId The id of the existing Terminal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Terminal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_terminal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/terminal thunder_terminal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TerminalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TerminalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_terminal',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSize = config.autoSize;
    this._editing = config.editing;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._length = config.length;
    this._uuid = config.uuid;
    this._width = config.width;
    this._gslbCfg.internalValue = config.gslbCfg;
    this._historyCfg.internalValue = config.historyCfg;
    this._promptCfg.internalValue = config.promptCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_size - computed: false, optional: true, required: false
  private _autoSize?: number; 
  public get autoSize() {
    return this.getNumberAttribute('auto_size');
  }
  public set autoSize(value: number) {
    this._autoSize = value;
  }
  public resetAutoSize() {
    this._autoSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSizeInput() {
    return this._autoSize;
  }

  // editing - computed: false, optional: true, required: false
  private _editing?: number; 
  public get editing() {
    return this.getNumberAttribute('editing');
  }
  public set editing(value: number) {
    this._editing = value;
  }
  public resetEditing() {
    this._editing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editingInput() {
    return this._editing;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // gslb_cfg - computed: false, optional: true, required: false
  private _gslbCfg = new TerminalGslbCfgOutputReference(this, "gslb_cfg");
  public get gslbCfg() {
    return this._gslbCfg;
  }
  public putGslbCfg(value: TerminalGslbCfg) {
    this._gslbCfg.internalValue = value;
  }
  public resetGslbCfg() {
    this._gslbCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbCfgInput() {
    return this._gslbCfg.internalValue;
  }

  // history_cfg - computed: false, optional: true, required: false
  private _historyCfg = new TerminalHistoryCfgOutputReference(this, "history_cfg");
  public get historyCfg() {
    return this._historyCfg;
  }
  public putHistoryCfg(value: TerminalHistoryCfg) {
    this._historyCfg.internalValue = value;
  }
  public resetHistoryCfg() {
    this._historyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyCfgInput() {
    return this._historyCfg.internalValue;
  }

  // prompt_cfg - computed: false, optional: true, required: false
  private _promptCfg = new TerminalPromptCfgOutputReference(this, "prompt_cfg");
  public get promptCfg() {
    return this._promptCfg;
  }
  public putPromptCfg(value: TerminalPromptCfg) {
    this._promptCfg.internalValue = value;
  }
  public resetPromptCfg() {
    this._promptCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptCfgInput() {
    return this._promptCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_size: cdktf.numberToTerraform(this._autoSize),
      editing: cdktf.numberToTerraform(this._editing),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      length: cdktf.numberToTerraform(this._length),
      uuid: cdktf.stringToTerraform(this._uuid),
      width: cdktf.numberToTerraform(this._width),
      gslb_cfg: terminalGslbCfgToTerraform(this._gslbCfg.internalValue),
      history_cfg: terminalHistoryCfgToTerraform(this._historyCfg.internalValue),
      prompt_cfg: terminalPromptCfgToTerraform(this._promptCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_size: {
        value: cdktf.numberToHclTerraform(this._autoSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      editing: {
        value: cdktf.numberToHclTerraform(this._editing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_cfg: {
        value: terminalGslbCfgToHclTerraform(this._gslbCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TerminalGslbCfgList",
      },
      history_cfg: {
        value: terminalHistoryCfgToHclTerraform(this._historyCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TerminalHistoryCfgList",
      },
      prompt_cfg: {
        value: terminalPromptCfgToHclTerraform(this._promptCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TerminalPromptCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
