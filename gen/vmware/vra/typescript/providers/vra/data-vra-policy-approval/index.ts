// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/policy_approval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVraPolicyApprovalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/policy_approval#id DataVraPolicyApproval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search criteria to narrow down the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/policy_approval#search DataVraPolicyApproval#search}
  */
  readonly search?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/policy_approval vra_policy_approval}
*/
export class DataVraPolicyApproval extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_policy_approval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVraPolicyApproval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVraPolicyApproval to import
  * @param importFromId The id of the existing DataVraPolicyApproval that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/policy_approval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVraPolicyApproval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_policy_approval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/policy_approval vra_policy_approval} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVraPolicyApprovalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVraPolicyApprovalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vra_policy_approval',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }

  // approval_level - computed: true, optional: false, required: false
  public get approvalLevel() {
    return this.getNumberAttribute('approval_level');
  }

  // approval_mode - computed: true, optional: false, required: false
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }

  // approval_type - computed: true, optional: false, required: false
  public get approvalType() {
    return this.getStringAttribute('approval_type');
  }

  // approvers - computed: true, optional: false, required: false
  public get approvers() {
    return cdktf.Fn.tolist(this.getListAttribute('approvers'));
  }

  // auto_approval_decision - computed: true, optional: false, required: false
  public get autoApprovalDecision() {
    return this.getStringAttribute('auto_approval_decision');
  }

  // auto_approval_expiry - computed: true, optional: false, required: false
  public get autoApprovalExpiry() {
    return this.getNumberAttribute('auto_approval_expiry');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new cdktf.StringMapList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enforcement_type - computed: true, optional: false, required: false
  public get enforcementType() {
    return this.getStringAttribute('enforcement_type');
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_criteria - computed: true, optional: false, required: false
  private _projectCriteria = new cdktf.StringMapList(this, "project_criteria", true);
  public get projectCriteria() {
    return this._projectCriteria;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      search: cdktf.stringToTerraform(this._search),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
