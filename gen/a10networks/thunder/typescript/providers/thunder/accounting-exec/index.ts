// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountingExecAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'tacplus': Use TACACS+ servers for accounting; 'radius': Use radius servers for accounting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec#accounting_exec_method AccountingExecA#accounting_exec_method}
  */
  readonly accountingExecMethod?: string;
  /**
  * 'start-stop': Record start and stop without waiting; 'stop-only': Record stop when service terminates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec#accounting_exec_type AccountingExecA#accounting_exec_type}
  */
  readonly accountingExecType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec#id AccountingExecA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec#uuid AccountingExecA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec thunder_accounting_exec}
*/
export class AccountingExecA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_accounting_exec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountingExecA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountingExecA to import
  * @param importFromId The id of the existing AccountingExecA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountingExecA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_accounting_exec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/accounting_exec thunder_accounting_exec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountingExecAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountingExecAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_accounting_exec',
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
    this._accountingExecMethod = config.accountingExecMethod;
    this._accountingExecType = config.accountingExecType;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_exec_method: cdktf.stringToTerraform(this._accountingExecMethod),
      accounting_exec_type: cdktf.stringToTerraform(this._accountingExecType),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_exec_method: {
        value: cdktf.stringToHclTerraform(this._accountingExecMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_exec_type: {
        value: cdktf.stringToHclTerraform(this._accountingExecType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
