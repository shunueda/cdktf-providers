// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#allow_simultaneous WorkflowJobTemplate#allow_simultaneous}
  */
  readonly allowSimultaneous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#ask_inventory_on_launch WorkflowJobTemplate#ask_inventory_on_launch}
  */
  readonly askInventoryOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#ask_limit_on_launch WorkflowJobTemplate#ask_limit_on_launch}
  */
  readonly askLimitOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#ask_scm_branch_on_launch WorkflowJobTemplate#ask_scm_branch_on_launch}
  */
  readonly askScmBranchOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#ask_variables_on_launch WorkflowJobTemplate#ask_variables_on_launch}
  */
  readonly askVariablesOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Optional description of this workflow job template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#description WorkflowJobTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#id WorkflowJobTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inventory applied as a prompt, assuming job template prompts for inventory. (id, default=``)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#inventory_id WorkflowJobTemplate#inventory_id}
  */
  readonly inventoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#limit WorkflowJobTemplate#limit}
  */
  readonly limit?: string;
  /**
  * Name of this workflow job template. (string, required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#name WorkflowJobTemplate#name}
  */
  readonly name: string;
  /**
  * The organization used to determine access to this template. (id, default=``)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#organization_id WorkflowJobTemplate#organization_id}
  */
  readonly organizationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#scm_branch WorkflowJobTemplate#scm_branch}
  */
  readonly scmBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#survey_enabled WorkflowJobTemplate#survey_enabled}
  */
  readonly surveyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#variables WorkflowJobTemplate#variables}
  */
  readonly variables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#webhook_credential WorkflowJobTemplate#webhook_credential}
  */
  readonly webhookCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#webhook_service WorkflowJobTemplate#webhook_service}
  */
  readonly webhookService?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template awx_workflow_job_template}
*/
export class WorkflowJobTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplate to import
  * @param importFromId The id of the existing WorkflowJobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template awx_workflow_job_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSimultaneous = config.allowSimultaneous;
    this._askInventoryOnLaunch = config.askInventoryOnLaunch;
    this._askLimitOnLaunch = config.askLimitOnLaunch;
    this._askScmBranchOnLaunch = config.askScmBranchOnLaunch;
    this._askVariablesOnLaunch = config.askVariablesOnLaunch;
    this._description = config.description;
    this._id = config.id;
    this._inventoryId = config.inventoryId;
    this._limit = config.limit;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._scmBranch = config.scmBranch;
    this._surveyEnabled = config.surveyEnabled;
    this._variables = config.variables;
    this._webhookCredential = config.webhookCredential;
    this._webhookService = config.webhookService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_simultaneous - computed: false, optional: true, required: false
  private _allowSimultaneous?: boolean | cdktf.IResolvable; 
  public get allowSimultaneous() {
    return this.getBooleanAttribute('allow_simultaneous');
  }
  public set allowSimultaneous(value: boolean | cdktf.IResolvable) {
    this._allowSimultaneous = value;
  }
  public resetAllowSimultaneous() {
    this._allowSimultaneous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSimultaneousInput() {
    return this._allowSimultaneous;
  }

  // ask_inventory_on_launch - computed: false, optional: true, required: false
  private _askInventoryOnLaunch?: boolean | cdktf.IResolvable; 
  public get askInventoryOnLaunch() {
    return this.getBooleanAttribute('ask_inventory_on_launch');
  }
  public set askInventoryOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askInventoryOnLaunch = value;
  }
  public resetAskInventoryOnLaunch() {
    this._askInventoryOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askInventoryOnLaunchInput() {
    return this._askInventoryOnLaunch;
  }

  // ask_limit_on_launch - computed: false, optional: true, required: false
  private _askLimitOnLaunch?: boolean | cdktf.IResolvable; 
  public get askLimitOnLaunch() {
    return this.getBooleanAttribute('ask_limit_on_launch');
  }
  public set askLimitOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askLimitOnLaunch = value;
  }
  public resetAskLimitOnLaunch() {
    this._askLimitOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askLimitOnLaunchInput() {
    return this._askLimitOnLaunch;
  }

  // ask_scm_branch_on_launch - computed: false, optional: true, required: false
  private _askScmBranchOnLaunch?: boolean | cdktf.IResolvable; 
  public get askScmBranchOnLaunch() {
    return this.getBooleanAttribute('ask_scm_branch_on_launch');
  }
  public set askScmBranchOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askScmBranchOnLaunch = value;
  }
  public resetAskScmBranchOnLaunch() {
    this._askScmBranchOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askScmBranchOnLaunchInput() {
    return this._askScmBranchOnLaunch;
  }

  // ask_variables_on_launch - computed: false, optional: true, required: false
  private _askVariablesOnLaunch?: boolean | cdktf.IResolvable; 
  public get askVariablesOnLaunch() {
    return this.getBooleanAttribute('ask_variables_on_launch');
  }
  public set askVariablesOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askVariablesOnLaunch = value;
  }
  public resetAskVariablesOnLaunch() {
    this._askVariablesOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askVariablesOnLaunchInput() {
    return this._askVariablesOnLaunch;
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

  // inventory_id - computed: false, optional: true, required: false
  private _inventoryId?: string; 
  public get inventoryId() {
    return this.getStringAttribute('inventory_id');
  }
  public set inventoryId(value: string) {
    this._inventoryId = value;
  }
  public resetInventoryId() {
    this._inventoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
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

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // survey_enabled - computed: false, optional: true, required: false
  private _surveyEnabled?: boolean | cdktf.IResolvable; 
  public get surveyEnabled() {
    return this.getBooleanAttribute('survey_enabled');
  }
  public set surveyEnabled(value: boolean | cdktf.IResolvable) {
    this._surveyEnabled = value;
  }
  public resetSurveyEnabled() {
    this._surveyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyEnabledInput() {
    return this._surveyEnabled;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // webhook_credential - computed: false, optional: true, required: false
  private _webhookCredential?: string; 
  public get webhookCredential() {
    return this.getStringAttribute('webhook_credential');
  }
  public set webhookCredential(value: string) {
    this._webhookCredential = value;
  }
  public resetWebhookCredential() {
    this._webhookCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookCredentialInput() {
    return this._webhookCredential;
  }

  // webhook_service - computed: false, optional: true, required: false
  private _webhookService?: string; 
  public get webhookService() {
    return this.getStringAttribute('webhook_service');
  }
  public set webhookService(value: string) {
    this._webhookService = value;
  }
  public resetWebhookService() {
    this._webhookService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookServiceInput() {
    return this._webhookService;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_simultaneous: cdktf.booleanToTerraform(this._allowSimultaneous),
      ask_inventory_on_launch: cdktf.booleanToTerraform(this._askInventoryOnLaunch),
      ask_limit_on_launch: cdktf.booleanToTerraform(this._askLimitOnLaunch),
      ask_scm_branch_on_launch: cdktf.booleanToTerraform(this._askScmBranchOnLaunch),
      ask_variables_on_launch: cdktf.booleanToTerraform(this._askVariablesOnLaunch),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      inventory_id: cdktf.stringToTerraform(this._inventoryId),
      limit: cdktf.stringToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.numberToTerraform(this._organizationId),
      scm_branch: cdktf.stringToTerraform(this._scmBranch),
      survey_enabled: cdktf.booleanToTerraform(this._surveyEnabled),
      variables: cdktf.stringToTerraform(this._variables),
      webhook_credential: cdktf.stringToTerraform(this._webhookCredential),
      webhook_service: cdktf.stringToTerraform(this._webhookService),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_simultaneous: {
        value: cdktf.booleanToHclTerraform(this._allowSimultaneous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_inventory_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askInventoryOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_limit_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askLimitOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_scm_branch_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askScmBranchOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_variables_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askVariablesOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      inventory_id: {
        value: cdktf.stringToHclTerraform(this._inventoryId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scm_branch: {
        value: cdktf.stringToHclTerraform(this._scmBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      survey_enabled: {
        value: cdktf.booleanToHclTerraform(this._surveyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      variables: {
        value: cdktf.stringToHclTerraform(this._variables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_credential: {
        value: cdktf.stringToHclTerraform(this._webhookCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_service: {
        value: cdktf.stringToHclTerraform(this._webhookService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
