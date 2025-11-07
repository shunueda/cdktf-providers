// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyApprovalConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of actions to trigger approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#actions PolicyApproval#actions}
  */
  readonly actions: string[];
  /**
  * The level defines the order in which the policy is enforced. Level 1 approvals are applied first, followed by level 2 approvals, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#approval_level PolicyApproval#approval_level}
  */
  readonly approvalLevel: number;
  /**
  * Who must approve the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#approval_mode PolicyApproval#approval_mode}
  */
  readonly approvalMode: string;
  /**
  * Approval Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#approval_type PolicyApproval#approval_type}
  */
  readonly approvalType: string;
  /**
  * List of approvers of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#approvers PolicyApproval#approvers}
  */
  readonly approvers: string[];
  /**
  * Automatically approve or reject a request after the number of days specified in the Auto expiry trigger field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#auto_approval_decision PolicyApproval#auto_approval_decision}
  */
  readonly autoApprovalDecision: string;
  /**
  * The number of days the approvers have, to respond before the Auto action is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#auto_approval_expiry PolicyApproval#auto_approval_expiry}
  */
  readonly autoApprovalExpiry: number;
  /**
  * The policy criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#criteria PolicyApproval#criteria}
  */
  readonly criteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * A human-friendly description for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#description PolicyApproval#description}
  */
  readonly description?: string;
  /**
  * The type of enforcement for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#enforcement_type PolicyApproval#enforcement_type}
  */
  readonly enforcementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#id PolicyApproval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-friendly name used as an identifier for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#name PolicyApproval#name}
  */
  readonly name: string;
  /**
  * The project based criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#project_criteria PolicyApproval#project_criteria}
  */
  readonly projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The id of the project this entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#project_id PolicyApproval#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval vra_policy_approval}
*/
export class PolicyApproval extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_policy_approval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyApproval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyApproval to import
  * @param importFromId The id of the existing PolicyApproval that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyApproval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_policy_approval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_approval vra_policy_approval} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyApprovalConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyApprovalConfig) {
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
    this._actions = config.actions;
    this._approvalLevel = config.approvalLevel;
    this._approvalMode = config.approvalMode;
    this._approvalType = config.approvalType;
    this._approvers = config.approvers;
    this._autoApprovalDecision = config.autoApprovalDecision;
    this._autoApprovalExpiry = config.autoApprovalExpiry;
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

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // approval_level - computed: false, optional: false, required: true
  private _approvalLevel?: number; 
  public get approvalLevel() {
    return this.getNumberAttribute('approval_level');
  }
  public set approvalLevel(value: number) {
    this._approvalLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalLevelInput() {
    return this._approvalLevel;
  }

  // approval_mode - computed: false, optional: false, required: true
  private _approvalMode?: string; 
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }
  public set approvalMode(value: string) {
    this._approvalMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModeInput() {
    return this._approvalMode;
  }

  // approval_type - computed: false, optional: false, required: true
  private _approvalType?: string; 
  public get approvalType() {
    return this.getStringAttribute('approval_type');
  }
  public set approvalType(value: string) {
    this._approvalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalTypeInput() {
    return this._approvalType;
  }

  // approvers - computed: false, optional: false, required: true
  private _approvers?: string[]; 
  public get approvers() {
    return cdktf.Fn.tolist(this.getListAttribute('approvers'));
  }
  public set approvers(value: string[]) {
    this._approvers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers;
  }

  // auto_approval_decision - computed: false, optional: false, required: true
  private _autoApprovalDecision?: string; 
  public get autoApprovalDecision() {
    return this.getStringAttribute('auto_approval_decision');
  }
  public set autoApprovalDecision(value: string) {
    this._autoApprovalDecision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalDecisionInput() {
    return this._autoApprovalDecision;
  }

  // auto_approval_expiry - computed: false, optional: false, required: true
  private _autoApprovalExpiry?: number; 
  public get autoApprovalExpiry() {
    return this.getNumberAttribute('auto_approval_expiry');
  }
  public set autoApprovalExpiry(value: number) {
    this._autoApprovalExpiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalExpiryInput() {
    return this._autoApprovalExpiry;
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
      approval_level: cdktf.numberToTerraform(this._approvalLevel),
      approval_mode: cdktf.stringToTerraform(this._approvalMode),
      approval_type: cdktf.stringToTerraform(this._approvalType),
      approvers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvers),
      auto_approval_decision: cdktf.stringToTerraform(this._autoApprovalDecision),
      auto_approval_expiry: cdktf.numberToTerraform(this._autoApprovalExpiry),
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
      approval_level: {
        value: cdktf.numberToHclTerraform(this._approvalLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      approval_mode: {
        value: cdktf.stringToHclTerraform(this._approvalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_type: {
        value: cdktf.stringToHclTerraform(this._approvalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approvers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_approval_decision: {
        value: cdktf.stringToHclTerraform(this._autoApprovalDecision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_approval_expiry: {
        value: cdktf.numberToHclTerraform(this._autoApprovalExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
