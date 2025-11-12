// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDay2ActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of allowed actions for authority/authorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#actions PolicyDay2Action#actions}
  */
  readonly actions?: string[];
  /**
  * List of authorities that will be allowed to perform certain actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#authorities PolicyDay2Action#authorities}
  */
  readonly authorities: string[];
  /**
  * The policy criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#criteria PolicyDay2Action#criteria}
  */
  readonly criteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * A human-friendly description for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#description PolicyDay2Action#description}
  */
  readonly description?: string;
  /**
  * The type of enforcement for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#enforcement_type PolicyDay2Action#enforcement_type}
  */
  readonly enforcementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#id PolicyDay2Action#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-friendly name used as an identifier for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#name PolicyDay2Action#name}
  */
  readonly name: string;
  /**
  * The project based criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#project_criteria PolicyDay2Action#project_criteria}
  */
  readonly projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The id of the project this entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#project_id PolicyDay2Action#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action vra_policy_day2_action}
*/
export class PolicyDay2Action extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_policy_day2_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyDay2Action resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyDay2Action to import
  * @param importFromId The id of the existing PolicyDay2Action that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyDay2Action to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_policy_day2_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_day2_action vra_policy_day2_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDay2ActionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDay2ActionConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_policy_day2_action',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._authorities = config.authorities;
    this._criteria = config.criteria;
    this._description = config.description;
    this._enforcementType = config.enforcementType;
    this._id = config.id;
    this._name = config.name;
    this._projectCriteria = config.projectCriteria;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // authorities - computed: false, optional: false, required: true
  private _authorities?: string[]; 
  public get authorities() {
    return cdktf.Fn.tolist(this.getListAttribute('authorities'));
  }
  public set authorities(value: string[]) {
    this._authorities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritiesInput() {
    return this._authorities;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get criteria() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('criteria')));
  }
  public set criteria(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enforcement_type - computed: false, optional: false, required: true
  private _enforcementType?: string; 
  public get enforcementType() {
    return this.getStringAttribute('enforcement_type');
  }
  public set enforcementType(value: string) {
    this._enforcementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementTypeInput() {
    return this._enforcementType;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_criteria - computed: false, optional: true, required: false
  private _projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get projectCriteria() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('project_criteria')));
  }
  public set projectCriteria(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._projectCriteria = value;
  }
  public resetProjectCriteria() {
    this._projectCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCriteriaInput() {
    return this._projectCriteria;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      authorities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorities),
      criteria: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._criteria),
      description: cdktf.stringToTerraform(this._description),
      enforcement_type: cdktf.stringToTerraform(this._enforcementType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_criteria: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._projectCriteria),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      criteria: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._criteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_type: {
        value: cdktf.stringToHclTerraform(this._enforcementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_criteria: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._projectCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
