// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPolicyFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter#allowed UserPolicyFilter#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Indicate whether the filter is being enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter#enabled UserPolicyFilter#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Id of the policy to which the filter belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter#policy_id UserPolicyFilter#policy_id}
  */
  readonly policyId: string;
  /**
  * SID of the user or user group to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter#sid UserPolicyFilter#sid}
  */
  readonly sid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter citrix_user_policy_filter}
*/
export class UserPolicyFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_user_policy_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPolicyFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPolicyFilter to import
  * @param importFromId The id of the existing UserPolicyFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPolicyFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_user_policy_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/user_policy_filter citrix_user_policy_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPolicyFilterConfig
  */
  public constructor(scope: Construct, id: string, config: UserPolicyFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_user_policy_filter',
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
    this._enabled = config.enabled;
    this._policyId = config.policyId;
    this._sid = config.sid;
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

  // sid - computed: false, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed: cdktf.booleanToTerraform(this._allowed),
      enabled: cdktf.booleanToTerraform(this._enabled),
      policy_id: cdktf.stringToTerraform(this._policyId),
      sid: cdktf.stringToTerraform(this._sid),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
