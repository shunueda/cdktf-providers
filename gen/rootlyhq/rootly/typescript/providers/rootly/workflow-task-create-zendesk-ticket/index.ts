// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateZendeskTicketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#enabled WorkflowTaskCreateZendeskTicket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#id WorkflowTaskCreateZendeskTicket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#name WorkflowTaskCreateZendeskTicket#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#position WorkflowTaskCreateZendeskTicket#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#skip_on_failure WorkflowTaskCreateZendeskTicket#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#workflow_id WorkflowTaskCreateZendeskTicket#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#task_params WorkflowTaskCreateZendeskTicket#task_params}
  */
  readonly taskParams: WorkflowTaskCreateZendeskTicketTaskParams;
}
export interface WorkflowTaskCreateZendeskTicketTaskParams {
  /**
  * The ticket comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#comment WorkflowTaskCreateZendeskTicket#comment}
  */
  readonly comment?: string;
  /**
  * Map must contain two fields, `id` and `name`. The completion id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#completion WorkflowTaskCreateZendeskTicket#completion}
  */
  readonly completion?: { [key: string]: string };
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#custom_fields_mapping WorkflowTaskCreateZendeskTicket#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * Value must be one of `problem`, `incident`, `question`, `task`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#kind WorkflowTaskCreateZendeskTicket#kind}
  */
  readonly kind: string;
  /**
  * Map must contain two fields, `id` and `name`. The priority id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#priority WorkflowTaskCreateZendeskTicket#priority}
  */
  readonly priority?: { [key: string]: string };
  /**
  * The ticket subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#subject WorkflowTaskCreateZendeskTicket#subject}
  */
  readonly subject: string;
  /**
  * The ticket tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#tags WorkflowTaskCreateZendeskTicket#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#task_type WorkflowTaskCreateZendeskTicket#task_type}
  */
  readonly taskType?: string;
  /**
  * Additional Zendesk ticket attributes. Will be merged into whatever was specified in this tasks current parameters. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#ticket_payload WorkflowTaskCreateZendeskTicket#ticket_payload}
  */
  readonly ticketPayload?: string;
}

export function workflowTaskCreateZendeskTicketTaskParamsToTerraform(struct?: WorkflowTaskCreateZendeskTicketTaskParamsOutputReference | WorkflowTaskCreateZendeskTicketTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    completion: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.completion),
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    kind: cdktf.stringToTerraform(struct!.kind),
    priority: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.priority),
    subject: cdktf.stringToTerraform(struct!.subject),
    tags: cdktf.stringToTerraform(struct!.tags),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    ticket_payload: cdktf.stringToTerraform(struct!.ticketPayload),
  }
}


export function workflowTaskCreateZendeskTicketTaskParamsToHclTerraform(struct?: WorkflowTaskCreateZendeskTicketTaskParamsOutputReference | WorkflowTaskCreateZendeskTicketTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    completion: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.completion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_fields_mapping: {
      value: cdktf.stringToHclTerraform(struct!.customFieldsMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.priority),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
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
    ticket_payload: {
      value: cdktf.stringToHclTerraform(struct!.ticketPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateZendeskTicketTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateZendeskTicketTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._completion !== undefined) {
      hasAnyValues = true;
      internalValueResult.completion = this._completion;
    }
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._ticketPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketPayload = this._ticketPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateZendeskTicketTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._completion = undefined;
      this._customFieldsMapping = undefined;
      this._kind = undefined;
      this._priority = undefined;
      this._subject = undefined;
      this._tags = undefined;
      this._taskType = undefined;
      this._ticketPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._completion = value.completion;
      this._customFieldsMapping = value.customFieldsMapping;
      this._kind = value.kind;
      this._priority = value.priority;
      this._subject = value.subject;
      this._tags = value.tags;
      this._taskType = value.taskType;
      this._ticketPayload = value.ticketPayload;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // completion - computed: false, optional: true, required: false
  private _completion?: { [key: string]: string }; 
  public get completion() {
    return this.getStringMapAttribute('completion');
  }
  public set completion(value: { [key: string]: string }) {
    this._completion = value;
  }
  public resetCompletion() {
    this._completion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionInput() {
    return this._completion;
  }

  // custom_fields_mapping - computed: false, optional: true, required: false
  private _customFieldsMapping?: string; 
  public get customFieldsMapping() {
    return this.getStringAttribute('custom_fields_mapping');
  }
  public set customFieldsMapping(value: string) {
    this._customFieldsMapping = value;
  }
  public resetCustomFieldsMapping() {
    this._customFieldsMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsMappingInput() {
    return this._customFieldsMapping;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: { [key: string]: string }; 
  public get priority() {
    return this.getStringMapAttribute('priority');
  }
  public set priority(value: { [key: string]: string }) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // ticket_payload - computed: false, optional: true, required: false
  private _ticketPayload?: string; 
  public get ticketPayload() {
    return this.getStringAttribute('ticket_payload');
  }
  public set ticketPayload(value: string) {
    this._ticketPayload = value;
  }
  public resetTicketPayload() {
    this._ticketPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketPayloadInput() {
    return this._ticketPayload;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket rootly_workflow_task_create_zendesk_ticket}
*/
export class WorkflowTaskCreateZendeskTicket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_zendesk_ticket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateZendeskTicket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateZendeskTicket to import
  * @param importFromId The id of the existing WorkflowTaskCreateZendeskTicket that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateZendeskTicket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_zendesk_ticket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_zendesk_ticket rootly_workflow_task_create_zendesk_ticket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateZendeskTicketConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateZendeskTicketConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_zendesk_ticket',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
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
  private _taskParams = new WorkflowTaskCreateZendeskTicketTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateZendeskTicketTaskParams) {
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
      task_params: workflowTaskCreateZendeskTicketTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateZendeskTicketTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateZendeskTicketTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
