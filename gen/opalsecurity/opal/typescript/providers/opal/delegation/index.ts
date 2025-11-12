// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelegationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the user being delegated to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation#delegate_user_id Delegation#delegate_user_id}
  */
  readonly delegateUserId: string;
  /**
  * The ID of the user delegating their access review requests. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation#delegator_user_id Delegation#delegator_user_id}
  */
  readonly delegatorUserId: string;
  /**
  * The end time of the delegation. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation#end_time Delegation#end_time}
  */
  readonly endTime: string;
  /**
  * The reason for the delegation. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation#reason Delegation#reason}
  */
  readonly reason: string;
  /**
  * The start time of the delegation. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation#start_time Delegation#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation opal_delegation}
*/
export class Delegation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_delegation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Delegation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Delegation to import
  * @param importFromId The id of the existing Delegation that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Delegation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_delegation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/delegation opal_delegation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelegationConfig
  */
  public constructor(scope: Construct, id: string, config: DelegationConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_delegation',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateUserId = config.delegateUserId;
    this._delegatorUserId = config.delegatorUserId;
    this._endTime = config.endTime;
    this._reason = config.reason;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delegate_user_id - computed: false, optional: false, required: true
  private _delegateUserId?: string; 
  public get delegateUserId() {
    return this.getStringAttribute('delegate_user_id');
  }
  public set delegateUserId(value: string) {
    this._delegateUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateUserIdInput() {
    return this._delegateUserId;
  }

  // delegator_user_id - computed: false, optional: false, required: true
  private _delegatorUserId?: string; 
  public get delegatorUserId() {
    return this.getStringAttribute('delegator_user_id');
  }
  public set delegatorUserId(value: string) {
    this._delegatorUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatorUserIdInput() {
    return this._delegatorUserId;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_user_id: cdktf.stringToTerraform(this._delegateUserId),
      delegator_user_id: cdktf.stringToTerraform(this._delegatorUserId),
      end_time: cdktf.stringToTerraform(this._endTime),
      reason: cdktf.stringToTerraform(this._reason),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_user_id: {
        value: cdktf.stringToHclTerraform(this._delegateUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegator_user_id: {
        value: cdktf.stringToHclTerraform(this._delegatorUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
