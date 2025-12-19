// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable level for commands accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#commands Accounting#commands}
  */
  readonly commands?: number;
  /**
  * Specify the debug level for accounting (Debug level for command accounting. bitwise OR of the following: 1(common), 2(packet),4(packet detail), 8(md5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#debug Accounting#debug}
  */
  readonly debug?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#id Accounting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Record stop when service terminates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#stop_only Accounting#stop_only}
  */
  readonly stopOnly?: number;
  /**
  * Use TACACS+ servers for accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#tacplus Accounting#tacplus}
  */
  readonly tacplus?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#uuid Accounting#uuid}
  */
  readonly uuid?: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#exec Accounting#exec}
  */
  readonly exec?: AccountingExec;
}
export interface AccountingExec {
  /**
  * 'tacplus': Use TACACS+ servers for accounting; 'radius': Use radius servers for accounting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#accounting_exec_method Accounting#accounting_exec_method}
  */
  readonly accountingExecMethod?: string;
  /**
  * 'start-stop': Record start and stop without waiting; 'stop-only': Record stop when service terminates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#accounting_exec_type Accounting#accounting_exec_type}
  */
  readonly accountingExecType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#uuid Accounting#uuid}
  */
  readonly uuid?: string;
}

export function accountingExecToTerraform(struct?: AccountingExecOutputReference | AccountingExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_exec_method: cdktf.stringToTerraform(struct!.accountingExecMethod),
    accounting_exec_type: cdktf.stringToTerraform(struct!.accountingExecType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function accountingExecToHclTerraform(struct?: AccountingExecOutputReference | AccountingExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_exec_method: {
      value: cdktf.stringToHclTerraform(struct!.accountingExecMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accounting_exec_type: {
      value: cdktf.stringToHclTerraform(struct!.accountingExecType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountingExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountingExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingExecMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingExecMethod = this._accountingExecMethod;
    }
    if (this._accountingExecType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingExecType = this._accountingExecType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountingExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountingExecMethod = undefined;
      this._accountingExecType = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountingExecMethod = value.accountingExecMethod;
      this._accountingExecType = value.accountingExecType;
      this._uuid = value.uuid;
    }
  }

  // accounting_exec_method - computed: false, optional: true, required: false
  private _accountingExecMethod?: string; 
  public get accountingExecMethod() {
    return this.getStringAttribute('accounting_exec_method');
  }
  public set accountingExecMethod(value: string) {
    this._accountingExecMethod = value;
  }
  public resetAccountingExecMethod() {
    this._accountingExecMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingExecMethodInput() {
    return this._accountingExecMethod;
  }

  // accounting_exec_type - computed: false, optional: true, required: false
  private _accountingExecType?: string; 
  public get accountingExecType() {
    return this.getStringAttribute('accounting_exec_type');
  }
  public set accountingExecType(value: string) {
    this._accountingExecType = value;
  }
  public resetAccountingExecType() {
    this._accountingExecType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingExecTypeInput() {
    return this._accountingExecType;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting thunder_accounting}
*/
export class Accounting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_accounting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Accounting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Accounting to import
  * @param importFromId The id of the existing Accounting that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Accounting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_accounting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting thunder_accounting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_accounting',
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
    this._commands = config.commands;
    this._debug = config.debug;
    this._id = config.id;
    this._stopOnly = config.stopOnly;
    this._tacplus = config.tacplus;
    this._uuid = config.uuid;
    this._exec.internalValue = config.exec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: false, optional: true, required: false
  private _commands?: number; 
  public get commands() {
    return this.getNumberAttribute('commands');
  }
  public set commands(value: number) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: number; 
  public get debug() {
    return this.getNumberAttribute('debug');
  }
  public set debug(value: number) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // stop_only - computed: false, optional: true, required: false
  private _stopOnly?: number; 
  public get stopOnly() {
    return this.getNumberAttribute('stop_only');
  }
  public set stopOnly(value: number) {
    this._stopOnly = value;
  }
  public resetStopOnly() {
    this._stopOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyInput() {
    return this._stopOnly;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus?: number; 
  public get tacplus() {
    return this.getNumberAttribute('tacplus');
  }
  public set tacplus(value: number) {
    this._tacplus = value;
  }
  public resetTacplus() {
    this._tacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus;
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

  // exec - computed: false, optional: true, required: false
  private _exec = new AccountingExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: AccountingExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commands: cdktf.numberToTerraform(this._commands),
      debug: cdktf.numberToTerraform(this._debug),
      id: cdktf.stringToTerraform(this._id),
      stop_only: cdktf.numberToTerraform(this._stopOnly),
      tacplus: cdktf.numberToTerraform(this._tacplus),
      uuid: cdktf.stringToTerraform(this._uuid),
      exec: accountingExecToTerraform(this._exec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commands: {
        value: cdktf.numberToHclTerraform(this._commands),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug: {
        value: cdktf.numberToHclTerraform(this._debug),
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
      stop_only: {
        value: cdktf.numberToHclTerraform(this._stopOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacplus: {
        value: cdktf.numberToHclTerraform(this._tacplus),
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
      exec: {
        value: accountingExecToHclTerraform(this._exec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountingExecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
