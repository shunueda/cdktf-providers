// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/account_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to perform on the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/account_actions#action AccountActions#action}
  */
  readonly action: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/account_actions#instance_id AccountActions#instance_id}
  */
  readonly instanceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/account_actions cloudamqp_account_actions}
*/
export class AccountActions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_account_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountActions to import
  * @param importFromId The id of the existing AccountActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/account_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_account_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/account_actions cloudamqp_account_actions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountActionsConfig
  */
  public constructor(scope: Construct, id: string, config: AccountActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_account_actions',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      instance_id: cdktf.numberToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
