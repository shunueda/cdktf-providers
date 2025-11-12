// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#all_parents_must_converge WorkflowJobTemplateNode#all_parents_must_converge}
  */
  readonly allParentsMustConverge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#diff_mode WorkflowJobTemplateNode#diff_mode}
  */
  readonly diffMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#extra_data WorkflowJobTemplateNode#extra_data}
  */
  readonly extraData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#id WorkflowJobTemplateNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#identifier WorkflowJobTemplateNode#identifier}
  */
  readonly identifier: string;
  /**
  * Inventory applied as a prompt, assuming job template prompts for inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#inventory_id WorkflowJobTemplateNode#inventory_id}
  */
  readonly inventoryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#job_tags WorkflowJobTemplateNode#job_tags}
  */
  readonly jobTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#job_type WorkflowJobTemplateNode#job_type}
  */
  readonly jobType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#limit WorkflowJobTemplateNode#limit}
  */
  readonly limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#scm_branch WorkflowJobTemplateNode#scm_branch}
  */
  readonly scmBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#skip_tags WorkflowJobTemplateNode#skip_tags}
  */
  readonly skipTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#unified_job_template_id WorkflowJobTemplateNode#unified_job_template_id}
  */
  readonly unifiedJobTemplateId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#verbosity WorkflowJobTemplateNode#verbosity}
  */
  readonly verbosity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#workflow_job_template_id WorkflowJobTemplateNode#workflow_job_template_id}
  */
  readonly workflowJobTemplateId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node awx_workflow_job_template_node}
*/
export class WorkflowJobTemplateNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplateNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplateNode to import
  * @param importFromId The id of the existing WorkflowJobTemplateNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplateNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_node awx_workflow_job_template_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateNodeConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_node',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1',
        providerVersionConstraint: '0.29.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allParentsMustConverge = config.allParentsMustConverge;
    this._diffMode = config.diffMode;
    this._extraData = config.extraData;
    this._id = config.id;
    this._identifier = config.identifier;
    this._inventoryId = config.inventoryId;
    this._jobTags = config.jobTags;
    this._jobType = config.jobType;
    this._limit = config.limit;
    this._scmBranch = config.scmBranch;
    this._skipTags = config.skipTags;
    this._unifiedJobTemplateId = config.unifiedJobTemplateId;
    this._verbosity = config.verbosity;
    this._workflowJobTemplateId = config.workflowJobTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_parents_must_converge - computed: false, optional: true, required: false
  private _allParentsMustConverge?: boolean | cdktf.IResolvable; 
  public get allParentsMustConverge() {
    return this.getBooleanAttribute('all_parents_must_converge');
  }
  public set allParentsMustConverge(value: boolean | cdktf.IResolvable) {
    this._allParentsMustConverge = value;
  }
  public resetAllParentsMustConverge() {
    this._allParentsMustConverge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allParentsMustConvergeInput() {
    return this._allParentsMustConverge;
  }

  // diff_mode - computed: false, optional: true, required: false
  private _diffMode?: boolean | cdktf.IResolvable; 
  public get diffMode() {
    return this.getBooleanAttribute('diff_mode');
  }
  public set diffMode(value: boolean | cdktf.IResolvable) {
    this._diffMode = value;
  }
  public resetDiffMode() {
    this._diffMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffModeInput() {
    return this._diffMode;
  }

  // extra_data - computed: false, optional: true, required: false
  private _extraData?: string; 
  public get extraData() {
    return this.getStringAttribute('extra_data');
  }
  public set extraData(value: string) {
    this._extraData = value;
  }
  public resetExtraData() {
    this._extraData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInput() {
    return this._extraData;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // inventory_id - computed: false, optional: true, required: false
  private _inventoryId?: number; 
  public get inventoryId() {
    return this.getNumberAttribute('inventory_id');
  }
  public set inventoryId(value: number) {
    this._inventoryId = value;
  }
  public resetInventoryId() {
    this._inventoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // job_tags - computed: false, optional: true, required: false
  private _jobTags?: string; 
  public get jobTags() {
    return this.getStringAttribute('job_tags');
  }
  public set jobTags(value: string) {
    this._jobTags = value;
  }
  public resetJobTags() {
    this._jobTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTagsInput() {
    return this._jobTags;
  }

  // job_type - computed: false, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // scm_branch - computed: false, optional: true, required: false
  private _scmBranch?: string; 
  public get scmBranch() {
    return this.getStringAttribute('scm_branch');
  }
  public set scmBranch(value: string) {
    this._scmBranch = value;
  }
  public resetScmBranch() {
    this._scmBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmBranchInput() {
    return this._scmBranch;
  }

  // skip_tags - computed: false, optional: true, required: false
  private _skipTags?: string; 
  public get skipTags() {
    return this.getStringAttribute('skip_tags');
  }
  public set skipTags(value: string) {
    this._skipTags = value;
  }
  public resetSkipTags() {
    this._skipTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTagsInput() {
    return this._skipTags;
  }

  // unified_job_template_id - computed: false, optional: false, required: true
  private _unifiedJobTemplateId?: number; 
  public get unifiedJobTemplateId() {
    return this.getNumberAttribute('unified_job_template_id');
  }
  public set unifiedJobTemplateId(value: number) {
    this._unifiedJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedJobTemplateIdInput() {
    return this._unifiedJobTemplateId;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // workflow_job_template_id - computed: false, optional: false, required: true
  private _workflowJobTemplateId?: number; 
  public get workflowJobTemplateId() {
    return this.getNumberAttribute('workflow_job_template_id');
  }
  public set workflowJobTemplateId(value: number) {
    this._workflowJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobTemplateIdInput() {
    return this._workflowJobTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_parents_must_converge: cdktf.booleanToTerraform(this._allParentsMustConverge),
      diff_mode: cdktf.booleanToTerraform(this._diffMode),
      extra_data: cdktf.stringToTerraform(this._extraData),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      inventory_id: cdktf.numberToTerraform(this._inventoryId),
      job_tags: cdktf.stringToTerraform(this._jobTags),
      job_type: cdktf.stringToTerraform(this._jobType),
      limit: cdktf.stringToTerraform(this._limit),
      scm_branch: cdktf.stringToTerraform(this._scmBranch),
      skip_tags: cdktf.stringToTerraform(this._skipTags),
      unified_job_template_id: cdktf.numberToTerraform(this._unifiedJobTemplateId),
      verbosity: cdktf.numberToTerraform(this._verbosity),
      workflow_job_template_id: cdktf.numberToTerraform(this._workflowJobTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_parents_must_converge: {
        value: cdktf.booleanToHclTerraform(this._allParentsMustConverge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diff_mode: {
        value: cdktf.booleanToHclTerraform(this._diffMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_data: {
        value: cdktf.stringToHclTerraform(this._extraData),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_id: {
        value: cdktf.numberToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_tags: {
        value: cdktf.stringToHclTerraform(this._jobTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scm_branch: {
        value: cdktf.stringToHclTerraform(this._scmBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tags: {
        value: cdktf.stringToHclTerraform(this._skipTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_job_template_id: {
        value: cdktf.numberToHclTerraform(this._unifiedJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verbosity: {
        value: cdktf.numberToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workflow_job_template_id: {
        value: cdktf.numberToHclTerraform(this._workflowJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
