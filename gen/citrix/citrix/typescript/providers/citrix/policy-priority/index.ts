// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_priority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyPriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ordered list of policy IDs. 
  * 
  * -> **Note** The order of policy IDs in the list determines the priority of the policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_priority#policy_priority PolicyPriority#policy_priority}
  */
  readonly policyPriority: string[];
  /**
  * GUID identifier of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_priority#policy_set_id PolicyPriority#policy_set_id}
  */
  readonly policySetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_priority citrix_policy_priority}
*/
export class PolicyPriority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_policy_priority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyPriority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyPriority to import
  * @param importFromId The id of the existing PolicyPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_priority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyPriority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_policy_priority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/policy_priority citrix_policy_priority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyPriorityConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyPriorityConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_policy_priority',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policyPriority = config.policyPriority;
    this._policySetId = config.policySetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policy_names - computed: true, optional: false, required: false
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }

  // policy_priority - computed: false, optional: false, required: true
  private _policyPriority?: string[]; 
  public get policyPriority() {
    return this.getListAttribute('policy_priority');
  }
  public set policyPriority(value: string[]) {
    this._policyPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPriorityInput() {
    return this._policyPriority;
  }

  // policy_set_id - computed: false, optional: false, required: true
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // policy_set_name - computed: true, optional: false, required: false
  public get policySetName() {
    return this.getStringAttribute('policy_set_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyPriority),
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_priority: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyPriority),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policy_set_id: {
        value: cdktf.stringToHclTerraform(this._policySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
