// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskPublishIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#enabled WorkflowTaskPublishIncident#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#id WorkflowTaskPublishIncident#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#name WorkflowTaskPublishIncident#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#position WorkflowTaskPublishIncident#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#skip_on_failure WorkflowTaskPublishIncident#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#workflow_id WorkflowTaskPublishIncident#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#task_params WorkflowTaskPublishIncident#task_params}
  */
  readonly taskParams: WorkflowTaskPublishIncidentTaskParams;
}
export interface WorkflowTaskPublishIncidentTaskParams {
  /**
  * Incident event description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#event WorkflowTaskPublishIncident#event}
  */
  readonly event?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#incident WorkflowTaskPublishIncident#incident}
  */
  readonly incident: { [key: string]: string };
  /**
  * Additional API Payload you can pass to statuspage.io for example. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#integration_payload WorkflowTaskPublishIncident#integration_payload}
  */
  readonly integrationPayload?: string;
  /**
  * When true notifies subscribers of the status page by email/text. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#notify_subscribers WorkflowTaskPublishIncident#notify_subscribers}
  */
  readonly notifySubscribers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#public_title WorkflowTaskPublishIncident#public_title}
  */
  readonly publicTitle: string;
  /**
  * For Statuspage.io integrated pages auto publishes a tweet for your update. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#should_tweet WorkflowTaskPublishIncident#should_tweet}
  */
  readonly shouldTweet?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of `investigating`, `identified`, `monitoring`, `resolved`, `scheduled`, `in_progress`, `completed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#status WorkflowTaskPublishIncident#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#status_page_id WorkflowTaskPublishIncident#status_page_id}
  */
  readonly statusPageId: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#status_page_template WorkflowTaskPublishIncident#status_page_template}
  */
  readonly statusPageTemplate?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#task_type WorkflowTaskPublishIncident#task_type}
  */
  readonly taskType?: string;
}

export function workflowTaskPublishIncidentTaskParamsToTerraform(struct?: WorkflowTaskPublishIncidentTaskParamsOutputReference | WorkflowTaskPublishIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    incident: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.incident),
    integration_payload: cdktf.stringToTerraform(struct!.integrationPayload),
    notify_subscribers: cdktf.booleanToTerraform(struct!.notifySubscribers),
    public_title: cdktf.stringToTerraform(struct!.publicTitle),
    should_tweet: cdktf.booleanToTerraform(struct!.shouldTweet),
    status: cdktf.stringToTerraform(struct!.status),
    status_page_id: cdktf.stringToTerraform(struct!.statusPageId),
    status_page_template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.statusPageTemplate),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function workflowTaskPublishIncidentTaskParamsToHclTerraform(struct?: WorkflowTaskPublishIncidentTaskParamsOutputReference | WorkflowTaskPublishIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.incident),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    integration_payload: {
      value: cdktf.stringToHclTerraform(struct!.integrationPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_subscribers: {
      value: cdktf.booleanToHclTerraform(struct!.notifySubscribers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_title: {
      value: cdktf.stringToHclTerraform(struct!.publicTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_tweet: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTweet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_page_id: {
      value: cdktf.stringToHclTerraform(struct!.statusPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_page_template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.statusPageTemplate),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskPublishIncidentTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskPublishIncidentTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._incident !== undefined) {
      hasAnyValues = true;
      internalValueResult.incident = this._incident;
    }
    if (this._integrationPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationPayload = this._integrationPayload;
    }
    if (this._notifySubscribers !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySubscribers = this._notifySubscribers;
    }
    if (this._publicTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicTitle = this._publicTitle;
    }
    if (this._shouldTweet !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTweet = this._shouldTweet;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusPageId = this._statusPageId;
    }
    if (this._statusPageTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusPageTemplate = this._statusPageTemplate;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskPublishIncidentTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._event = undefined;
      this._incident = undefined;
      this._integrationPayload = undefined;
      this._notifySubscribers = undefined;
      this._publicTitle = undefined;
      this._shouldTweet = undefined;
      this._status = undefined;
      this._statusPageId = undefined;
      this._statusPageTemplate = undefined;
      this._taskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._event = value.event;
      this._incident = value.incident;
      this._integrationPayload = value.integrationPayload;
      this._notifySubscribers = value.notifySubscribers;
      this._publicTitle = value.publicTitle;
      this._shouldTweet = value.shouldTweet;
      this._status = value.status;
      this._statusPageId = value.statusPageId;
      this._statusPageTemplate = value.statusPageTemplate;
      this._taskType = value.taskType;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // incident - computed: false, optional: false, required: true
  private _incident?: { [key: string]: string }; 
  public get incident() {
    return this.getStringMapAttribute('incident');
  }
  public set incident(value: { [key: string]: string }) {
    this._incident = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentInput() {
    return this._incident;
  }

  // integration_payload - computed: false, optional: true, required: false
  private _integrationPayload?: string; 
  public get integrationPayload() {
    return this.getStringAttribute('integration_payload');
  }
  public set integrationPayload(value: string) {
    this._integrationPayload = value;
  }
  public resetIntegrationPayload() {
    this._integrationPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationPayloadInput() {
    return this._integrationPayload;
  }

  // notify_subscribers - computed: false, optional: true, required: false
  private _notifySubscribers?: boolean | cdktf.IResolvable; 
  public get notifySubscribers() {
    return this.getBooleanAttribute('notify_subscribers');
  }
  public set notifySubscribers(value: boolean | cdktf.IResolvable) {
    this._notifySubscribers = value;
  }
  public resetNotifySubscribers() {
    this._notifySubscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySubscribersInput() {
    return this._notifySubscribers;
  }

  // public_title - computed: false, optional: false, required: true
  private _publicTitle?: string; 
  public get publicTitle() {
    return this.getStringAttribute('public_title');
  }
  public set publicTitle(value: string) {
    this._publicTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicTitleInput() {
    return this._publicTitle;
  }

  // should_tweet - computed: false, optional: true, required: false
  private _shouldTweet?: boolean | cdktf.IResolvable; 
  public get shouldTweet() {
    return this.getBooleanAttribute('should_tweet');
  }
  public set shouldTweet(value: boolean | cdktf.IResolvable) {
    this._shouldTweet = value;
  }
  public resetShouldTweet() {
    this._shouldTweet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTweetInput() {
    return this._shouldTweet;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_page_id - computed: false, optional: false, required: true
  private _statusPageId?: string; 
  public get statusPageId() {
    return this.getStringAttribute('status_page_id');
  }
  public set statusPageId(value: string) {
    this._statusPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageIdInput() {
    return this._statusPageId;
  }

  // status_page_template - computed: false, optional: true, required: false
  private _statusPageTemplate?: { [key: string]: string }; 
  public get statusPageTemplate() {
    return this.getStringMapAttribute('status_page_template');
  }
  public set statusPageTemplate(value: { [key: string]: string }) {
    this._statusPageTemplate = value;
  }
  public resetStatusPageTemplate() {
    this._statusPageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageTemplateInput() {
    return this._statusPageTemplate;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident rootly_workflow_task_publish_incident}
*/
export class WorkflowTaskPublishIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_publish_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskPublishIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskPublishIncident to import
  * @param importFromId The id of the existing WorkflowTaskPublishIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskPublishIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_publish_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/workflow_task_publish_incident rootly_workflow_task_publish_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskPublishIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskPublishIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_publish_incident',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.13',
        providerVersionConstraint: '4.3.13'
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
  private _taskParams = new WorkflowTaskPublishIncidentTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskPublishIncidentTaskParams) {
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
      task_params: workflowTaskPublishIncidentTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskPublishIncidentTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskPublishIncidentTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
