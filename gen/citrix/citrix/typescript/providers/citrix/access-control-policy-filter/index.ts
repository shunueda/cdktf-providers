// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessControlPolicyFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#allowed AccessControlPolicyFilter#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Gateway condition for the policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#condition AccessControlPolicyFilter#condition}
  */
  readonly condition: string;
  /**
  * Gateway connection for the policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#connection_type AccessControlPolicyFilter#connection_type}
  */
  readonly connectionType: string;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#enabled AccessControlPolicyFilter#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Gateway for the policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#gateway AccessControlPolicyFilter#gateway}
  */
  readonly gateway: string;
  /**
  * Id of the policy to which the filter belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#policy_id AccessControlPolicyFilter#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter citrix_access_control_policy_filter}
*/
export class AccessControlPolicyFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_access_control_policy_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessControlPolicyFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessControlPolicyFilter to import
  * @param importFromId The id of the existing AccessControlPolicyFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessControlPolicyFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_access_control_policy_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/access_control_policy_filter citrix_access_control_policy_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessControlPolicyFilterConfig
  */
  public constructor(scope: Construct, id: string, config: AccessControlPolicyFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_access_control_policy_filter',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowed = config.allowed;
    this._condition = config.condition;
    this._connectionType = config.connectionType;
    this._enabled = config.enabled;
    this._gateway = config.gateway;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed - computed: false, optional: false, required: true
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed: cdktf.booleanToTerraform(this._allowed),
      condition: cdktf.stringToTerraform(this._condition),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gateway: cdktf.stringToTerraform(this._gateway),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed: {
        value: cdktf.booleanToHclTerraform(this._allowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
