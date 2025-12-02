// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_access_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppAccessPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application ID; this value is immutable and can not be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_access_policy_assignment#app_id AppAccessPolicyAssignment#app_id}
  */
  readonly appId: string;
  /**
  * The access policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_access_policy_assignment#policy_id AppAccessPolicyAssignment#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_access_policy_assignment okta_app_access_policy_assignment}
*/
export class AppAccessPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_access_policy_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppAccessPolicyAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppAccessPolicyAssignment to import
  * @param importFromId The id of the existing AppAccessPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_access_policy_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppAccessPolicyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_access_policy_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_access_policy_assignment okta_app_access_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppAccessPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: AppAccessPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_access_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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
      app_id: cdktf.stringToTerraform(this._appId),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
