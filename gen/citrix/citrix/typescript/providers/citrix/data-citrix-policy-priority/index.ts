// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/policy_priority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixPolicyPriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * GUID identifier of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/policy_priority#policy_set_id DataCitrixPolicyPriority#policy_set_id}
  */
  readonly policySetId?: string;
  /**
  * Name of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/policy_priority#policy_set_name DataCitrixPolicyPriority#policy_set_name}
  */
  readonly policySetName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/policy_priority citrix_policy_priority}
*/
export class DataCitrixPolicyPriority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_policy_priority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixPolicyPriority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixPolicyPriority to import
  * @param importFromId The id of the existing DataCitrixPolicyPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/policy_priority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixPolicyPriority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_policy_priority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/policy_priority citrix_policy_priority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixPolicyPriorityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixPolicyPriorityConfig = {}) {
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
    this._policySetId = config.policySetId;
    this._policySetName = config.policySetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policy_names - computed: true, optional: false, required: false
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }

  // policy_priority - computed: true, optional: false, required: false
  public get policyPriority() {
    return this.getListAttribute('policy_priority');
  }

  // policy_set_id - computed: false, optional: true, required: false
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  public resetPolicySetId() {
    this._policySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // policy_set_name - computed: false, optional: true, required: false
  private _policySetName?: string; 
  public get policySetName() {
    return this.getStringAttribute('policy_set_name');
  }
  public set policySetName(value: string) {
    this._policySetName = value;
  }
  public resetPolicySetName() {
    this._policySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetNameInput() {
    return this._policySetName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
      policy_set_name: cdktf.stringToTerraform(this._policySetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_set_id: {
        value: cdktf.stringToHclTerraform(this._policySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_set_name: {
        value: cdktf.stringToHclTerraform(this._policySetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
