// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateZendeskJiraLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#enabled WorkflowTaskCreateZendeskJiraLink#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#id WorkflowTaskCreateZendeskJiraLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#name WorkflowTaskCreateZendeskJiraLink#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#position WorkflowTaskCreateZendeskJiraLink#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#skip_on_failure WorkflowTaskCreateZendeskJiraLink#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#workflow_id WorkflowTaskCreateZendeskJiraLink#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#task_params WorkflowTaskCreateZendeskJiraLink#task_params}
  */
  readonly taskParams: WorkflowTaskCreateZendeskJiraLinkTaskParams;
}
export interface WorkflowTaskCreateZendeskJiraLinkTaskParams {
  /**
  * Jira Issue Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#jira_issue_id WorkflowTaskCreateZendeskJiraLink#jira_issue_id}
  */
  readonly jiraIssueId: string;
  /**
  * Jira Issue Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#jira_issue_key WorkflowTaskCreateZendeskJiraLink#jira_issue_key}
  */
  readonly jiraIssueKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#task_type WorkflowTaskCreateZendeskJiraLink#task_type}
  */
  readonly taskType?: string;
  /**
  * Zendesk Ticket Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#zendesk_ticket_id WorkflowTaskCreateZendeskJiraLink#zendesk_ticket_id}
  */
  readonly zendeskTicketId: string;
}

export function workflowTaskCreateZendeskJiraLinkTaskParamsToTerraform(struct?: WorkflowTaskCreateZendeskJiraLinkTaskParamsOutputReference | WorkflowTaskCreateZendeskJiraLinkTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jira_issue_id: cdktf.stringToTerraform(struct!.jiraIssueId),
    jira_issue_key: cdktf.stringToTerraform(struct!.jiraIssueKey),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    zendesk_ticket_id: cdktf.stringToTerraform(struct!.zendeskTicketId),
  }
}


export function workflowTaskCreateZendeskJiraLinkTaskParamsToHclTerraform(struct?: WorkflowTaskCreateZendeskJiraLinkTaskParamsOutputReference | WorkflowTaskCreateZendeskJiraLinkTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jira_issue_id: {
      value: cdktf.stringToHclTerraform(struct!.jiraIssueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jira_issue_key: {
      value: cdktf.stringToHclTerraform(struct!.jiraIssueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zendesk_ticket_id: {
      value: cdktf.stringToHclTerraform(struct!.zendeskTicketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateZendeskJiraLinkTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateZendeskJiraLinkTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jiraIssueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraIssueId = this._jiraIssueId;
    }
    if (this._jiraIssueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraIssueKey = this._jiraIssueKey;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._zendeskTicketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendeskTicketId = this._zendeskTicketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateZendeskJiraLinkTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jiraIssueId = undefined;
      this._jiraIssueKey = undefined;
      this._taskType = undefined;
      this._zendeskTicketId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jiraIssueId = value.jiraIssueId;
      this._jiraIssueKey = value.jiraIssueKey;
      this._taskType = value.taskType;
      this._zendeskTicketId = value.zendeskTicketId;
    }
  }

  // jira_issue_id - computed: false, optional: false, required: true
  private _jiraIssueId?: string; 
  public get jiraIssueId() {
    return this.getStringAttribute('jira_issue_id');
  }
  public set jiraIssueId(value: string) {
    this._jiraIssueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueIdInput() {
    return this._jiraIssueId;
  }

  // jira_issue_key - computed: false, optional: false, required: true
  private _jiraIssueKey?: string; 
  public get jiraIssueKey() {
    return this.getStringAttribute('jira_issue_key');
  }
  public set jiraIssueKey(value: string) {
    this._jiraIssueKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueKeyInput() {
    return this._jiraIssueKey;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // zendesk_ticket_id - computed: false, optional: false, required: true
  private _zendeskTicketId?: string; 
  public get zendeskTicketId() {
    return this.getStringAttribute('zendesk_ticket_id');
  }
  public set zendeskTicketId(value: string) {
    this._zendeskTicketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskTicketIdInput() {
    return this._zendeskTicketId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link rootly_workflow_task_create_zendesk_jira_link}
*/
export class WorkflowTaskCreateZendeskJiraLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_zendesk_jira_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateZendeskJiraLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateZendeskJiraLink to import
  * @param importFromId The id of the existing WorkflowTaskCreateZendeskJiraLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateZendeskJiraLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_zendesk_jira_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_create_zendesk_jira_link rootly_workflow_task_create_zendesk_jira_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateZendeskJiraLinkConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateZendeskJiraLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_zendesk_jira_link',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskCreateZendeskJiraLinkTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateZendeskJiraLinkTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskCreateZendeskJiraLinkTaskParamsToTerraform(this._taskParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskCreateZendeskJiraLinkTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateZendeskJiraLinkTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
