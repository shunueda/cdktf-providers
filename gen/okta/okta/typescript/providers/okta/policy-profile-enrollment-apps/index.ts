// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyProfileEnrollmentAppsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of app IDs to be added to this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps#apps PolicyProfileEnrollmentApps#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the enrollment policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps#policy_id PolicyProfileEnrollmentApps#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps okta_policy_profile_enrollment_apps}
*/
export class PolicyProfileEnrollmentApps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_profile_enrollment_apps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyProfileEnrollmentApps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyProfileEnrollmentApps to import
  * @param importFromId The id of the existing PolicyProfileEnrollmentApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyProfileEnrollmentApps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_profile_enrollment_apps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_profile_enrollment_apps okta_policy_profile_enrollment_apps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyProfileEnrollmentAppsConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyProfileEnrollmentAppsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_profile_enrollment_apps',
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
    this._apps = config.apps;
    this._id = config.id;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apps - computed: false, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return cdktf.Fn.tolist(this.getListAttribute('apps'));
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // default_policy_id - computed: true, optional: false, required: false
  public get defaultPolicyId() {
    return this.getStringAttribute('default_policy_id');
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
      apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apps),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
