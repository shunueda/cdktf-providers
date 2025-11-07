// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/branch_repeater_policy_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchRepeaterPolicyFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate the filtered policy is allowed or denied if the filter condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/branch_repeater_policy_filter#allowed BranchRepeaterPolicyFilter#allowed}
  */
  readonly allowed: boolean | cdktf.IResolvable;
  /**
  * Id of the policy to which the filter belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/branch_repeater_policy_filter#policy_id BranchRepeaterPolicyFilter#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/branch_repeater_policy_filter citrix_branch_repeater_policy_filter}
*/
export class BranchRepeaterPolicyFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_branch_repeater_policy_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchRepeaterPolicyFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchRepeaterPolicyFilter to import
  * @param importFromId The id of the existing BranchRepeaterPolicyFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/branch_repeater_policy_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchRepeaterPolicyFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_branch_repeater_policy_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/branch_repeater_policy_filter citrix_branch_repeater_policy_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchRepeaterPolicyFilterConfig
  */
  public constructor(scope: Construct, id: string, config: BranchRepeaterPolicyFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_branch_repeater_policy_filter',
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
