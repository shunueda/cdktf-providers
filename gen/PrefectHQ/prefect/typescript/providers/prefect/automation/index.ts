// https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#account_id Automation#account_id}
  */
  readonly accountId?: string;
  /**
  * List of actions to perform when the automation is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#actions Automation#actions}
  */
  readonly actions?: AutomationActions[] | cdktf.IResolvable;
  /**
  * List of actions to perform when the automation is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#actions_on_resolve Automation#actions_on_resolve}
  */
  readonly actionsOnResolve?: AutomationActionsOnResolve[] | cdktf.IResolvable;
  /**
  * List of actions to perform when the automation is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#actions_on_trigger Automation#actions_on_trigger}
  */
  readonly actionsOnTrigger?: AutomationActionsOnTrigger[] | cdktf.IResolvable;
  /**
  * Description of the automation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#description Automation#description}
  */
  readonly description?: string;
  /**
  * Whether the automation is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#enabled Automation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the automation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name: string;
  /**
  * The criteria for which events this Automation covers and how it will respond
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#trigger Automation#trigger}
  */
  readonly trigger: AutomationTrigger;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#workspace_id Automation#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface AutomationActions {
  /**
  * (Automation) ID of the automation to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#automation_id Automation#automation_id}
  */
  readonly automationId?: string;
  /**
  * (Webhook / Notification) ID of the block to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#block_document_id Automation#block_document_id}
  */
  readonly blockDocumentId?: string;
  /**
  * (Notification) Body of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#body Automation#body}
  */
  readonly body?: string;
  /**
  * (Deployment) ID of the deployment to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#deployment_id Automation#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * (Deployment) (JSON) Job variables to pass to the created flow run. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#job_variables Automation#job_variables}
  */
  readonly jobVariables?: string;
  /**
  * (Flow Run State Change) Message to associate with the state change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#message Automation#message}
  */
  readonly message?: string;
  /**
  * (Flow Run State Change) Name of the state to change the flow run to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name?: string;
  /**
  * (Deployment) (JSON) Parameters to pass to the deployment. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#parameters Automation#parameters}
  */
  readonly parameters?: string;
  /**
  * (Webhook) Payload to send when calling the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#payload Automation#payload}
  */
  readonly payload?: string;
  /**
  * (Deployment / Work Pool / Work Queue / Automation) Whether this action applies to a specific selected resource or to a specific resource by ID - 'selected' or 'inferred'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#source Automation#source}
  */
  readonly source?: string;
  /**
  * (Flow Run State Change) Type of state to change the flow run to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#state Automation#state}
  */
  readonly state?: string;
  /**
  * (Notification) Subject of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#subject Automation#subject}
  */
  readonly subject?: string;
  /**
  * The type of action to perform. Possible values: do-nothing, run-deployment, pause-deployment, resume-deployment, cancel-flow-run, change-flow-run-state, pause-work-queue, resume-work-queue, send-notification, call-webhook, pause-automation, resume-automation, suspend-flow-run, resume-flow-run, declare-incident, pause-work-pool, resume-work-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#type Automation#type}
  */
  readonly type: string;
  /**
  * (Work Pool) ID of the work pool to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#work_pool_id Automation#work_pool_id}
  */
  readonly workPoolId?: string;
  /**
  * (Work Queue) ID of the work queue to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#work_queue_id Automation#work_queue_id}
  */
  readonly workQueueId?: string;
}

export function automationActionsToTerraform(struct?: AutomationActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_id: cdktf.stringToTerraform(struct!.automationId),
    block_document_id: cdktf.stringToTerraform(struct!.blockDocumentId),
    body: cdktf.stringToTerraform(struct!.body),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    job_variables: cdktf.stringToTerraform(struct!.jobVariables),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    payload: cdktf.stringToTerraform(struct!.payload),
    source: cdktf.stringToTerraform(struct!.source),
    state: cdktf.stringToTerraform(struct!.state),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
    work_pool_id: cdktf.stringToTerraform(struct!.workPoolId),
    work_queue_id: cdktf.stringToTerraform(struct!.workQueueId),
  }
}


export function automationActionsToHclTerraform(struct?: AutomationActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_id: {
      value: cdktf.stringToHclTerraform(struct!.automationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_document_id: {
      value: cdktf.stringToHclTerraform(struct!.blockDocumentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_variables: {
      value: cdktf.stringToHclTerraform(struct!.jobVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_queue_id: {
      value: cdktf.stringToHclTerraform(struct!.workQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationId = this._automationId;
    }
    if (this._blockDocumentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDocumentId = this._blockDocumentId;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._jobVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobVariables = this._jobVariables;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workPoolId = this._workPoolId;
    }
    if (this._workQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workQueueId = this._workQueueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automationId = undefined;
      this._blockDocumentId = undefined;
      this._body = undefined;
      this._deploymentId = undefined;
      this._jobVariables = undefined;
      this._message = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._payload = undefined;
      this._source = undefined;
      this._state = undefined;
      this._subject = undefined;
      this._type = undefined;
      this._workPoolId = undefined;
      this._workQueueId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automationId = value.automationId;
      this._blockDocumentId = value.blockDocumentId;
      this._body = value.body;
      this._deploymentId = value.deploymentId;
      this._jobVariables = value.jobVariables;
      this._message = value.message;
      this._name = value.name;
      this._parameters = value.parameters;
      this._payload = value.payload;
      this._source = value.source;
      this._state = value.state;
      this._subject = value.subject;
      this._type = value.type;
      this._workPoolId = value.workPoolId;
      this._workQueueId = value.workQueueId;
    }
  }

  // automation_id - computed: true, optional: true, required: false
  private _automationId?: string; 
  public get automationId() {
    return this.getStringAttribute('automation_id');
  }
  public set automationId(value: string) {
    this._automationId = value;
  }
  public resetAutomationId() {
    this._automationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationIdInput() {
    return this._automationId;
  }

  // block_document_id - computed: true, optional: true, required: false
  private _blockDocumentId?: string; 
  public get blockDocumentId() {
    return this.getStringAttribute('block_document_id');
  }
  public set blockDocumentId(value: string) {
    this._blockDocumentId = value;
  }
  public resetBlockDocumentId() {
    this._blockDocumentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDocumentIdInput() {
    return this._blockDocumentId;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // job_variables - computed: true, optional: true, required: false
  private _jobVariables?: string; 
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }
  public set jobVariables(value: string) {
    this._jobVariables = value;
  }
  public resetJobVariables() {
    this._jobVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobVariablesInput() {
    return this._jobVariables;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // work_pool_id - computed: true, optional: true, required: false
  private _workPoolId?: string; 
  public get workPoolId() {
    return this.getStringAttribute('work_pool_id');
  }
  public set workPoolId(value: string) {
    this._workPoolId = value;
  }
  public resetWorkPoolId() {
    this._workPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolIdInput() {
    return this._workPoolId;
  }

  // work_queue_id - computed: true, optional: true, required: false
  private _workQueueId?: string; 
  public get workQueueId() {
    return this.getStringAttribute('work_queue_id');
  }
  public set workQueueId(value: string) {
    this._workQueueId = value;
  }
  public resetWorkQueueId() {
    this._workQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workQueueIdInput() {
    return this._workQueueId;
  }
}

export class AutomationActionsList extends cdktf.ComplexList {
  public internalValue? : AutomationActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationActionsOutputReference {
    return new AutomationActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationActionsOnResolve {
  /**
  * (Automation) ID of the automation to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#automation_id Automation#automation_id}
  */
  readonly automationId?: string;
  /**
  * (Webhook / Notification) ID of the block to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#block_document_id Automation#block_document_id}
  */
  readonly blockDocumentId?: string;
  /**
  * (Notification) Body of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#body Automation#body}
  */
  readonly body?: string;
  /**
  * (Deployment) ID of the deployment to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#deployment_id Automation#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * (Deployment) (JSON) Job variables to pass to the created flow run. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#job_variables Automation#job_variables}
  */
  readonly jobVariables?: string;
  /**
  * (Flow Run State Change) Message to associate with the state change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#message Automation#message}
  */
  readonly message?: string;
  /**
  * (Flow Run State Change) Name of the state to change the flow run to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name?: string;
  /**
  * (Deployment) (JSON) Parameters to pass to the deployment. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#parameters Automation#parameters}
  */
  readonly parameters?: string;
  /**
  * (Webhook) Payload to send when calling the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#payload Automation#payload}
  */
  readonly payload?: string;
  /**
  * (Deployment / Work Pool / Work Queue / Automation) Whether this action applies to a specific selected resource or to a specific resource by ID - 'selected' or 'inferred'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#source Automation#source}
  */
  readonly source?: string;
  /**
  * (Flow Run State Change) Type of state to change the flow run to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#state Automation#state}
  */
  readonly state?: string;
  /**
  * (Notification) Subject of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#subject Automation#subject}
  */
  readonly subject?: string;
  /**
  * The type of action to perform. Possible values: do-nothing, run-deployment, pause-deployment, resume-deployment, cancel-flow-run, change-flow-run-state, pause-work-queue, resume-work-queue, send-notification, call-webhook, pause-automation, resume-automation, suspend-flow-run, resume-flow-run, declare-incident, pause-work-pool, resume-work-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#type Automation#type}
  */
  readonly type: string;
  /**
  * (Work Pool) ID of the work pool to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#work_pool_id Automation#work_pool_id}
  */
  readonly workPoolId?: string;
  /**
  * (Work Queue) ID of the work queue to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#work_queue_id Automation#work_queue_id}
  */
  readonly workQueueId?: string;
}

export function automationActionsOnResolveToTerraform(struct?: AutomationActionsOnResolve | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_id: cdktf.stringToTerraform(struct!.automationId),
    block_document_id: cdktf.stringToTerraform(struct!.blockDocumentId),
    body: cdktf.stringToTerraform(struct!.body),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    job_variables: cdktf.stringToTerraform(struct!.jobVariables),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    payload: cdktf.stringToTerraform(struct!.payload),
    source: cdktf.stringToTerraform(struct!.source),
    state: cdktf.stringToTerraform(struct!.state),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
    work_pool_id: cdktf.stringToTerraform(struct!.workPoolId),
    work_queue_id: cdktf.stringToTerraform(struct!.workQueueId),
  }
}


export function automationActionsOnResolveToHclTerraform(struct?: AutomationActionsOnResolve | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_id: {
      value: cdktf.stringToHclTerraform(struct!.automationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_document_id: {
      value: cdktf.stringToHclTerraform(struct!.blockDocumentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_variables: {
      value: cdktf.stringToHclTerraform(struct!.jobVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_queue_id: {
      value: cdktf.stringToHclTerraform(struct!.workQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationActionsOnResolveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationActionsOnResolve | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationId = this._automationId;
    }
    if (this._blockDocumentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDocumentId = this._blockDocumentId;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._jobVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobVariables = this._jobVariables;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workPoolId = this._workPoolId;
    }
    if (this._workQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workQueueId = this._workQueueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationActionsOnResolve | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automationId = undefined;
      this._blockDocumentId = undefined;
      this._body = undefined;
      this._deploymentId = undefined;
      this._jobVariables = undefined;
      this._message = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._payload = undefined;
      this._source = undefined;
      this._state = undefined;
      this._subject = undefined;
      this._type = undefined;
      this._workPoolId = undefined;
      this._workQueueId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automationId = value.automationId;
      this._blockDocumentId = value.blockDocumentId;
      this._body = value.body;
      this._deploymentId = value.deploymentId;
      this._jobVariables = value.jobVariables;
      this._message = value.message;
      this._name = value.name;
      this._parameters = value.parameters;
      this._payload = value.payload;
      this._source = value.source;
      this._state = value.state;
      this._subject = value.subject;
      this._type = value.type;
      this._workPoolId = value.workPoolId;
      this._workQueueId = value.workQueueId;
    }
  }

  // automation_id - computed: true, optional: true, required: false
  private _automationId?: string; 
  public get automationId() {
    return this.getStringAttribute('automation_id');
  }
  public set automationId(value: string) {
    this._automationId = value;
  }
  public resetAutomationId() {
    this._automationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationIdInput() {
    return this._automationId;
  }

  // block_document_id - computed: true, optional: true, required: false
  private _blockDocumentId?: string; 
  public get blockDocumentId() {
    return this.getStringAttribute('block_document_id');
  }
  public set blockDocumentId(value: string) {
    this._blockDocumentId = value;
  }
  public resetBlockDocumentId() {
    this._blockDocumentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDocumentIdInput() {
    return this._blockDocumentId;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // job_variables - computed: true, optional: true, required: false
  private _jobVariables?: string; 
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }
  public set jobVariables(value: string) {
    this._jobVariables = value;
  }
  public resetJobVariables() {
    this._jobVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobVariablesInput() {
    return this._jobVariables;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // work_pool_id - computed: true, optional: true, required: false
  private _workPoolId?: string; 
  public get workPoolId() {
    return this.getStringAttribute('work_pool_id');
  }
  public set workPoolId(value: string) {
    this._workPoolId = value;
  }
  public resetWorkPoolId() {
    this._workPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolIdInput() {
    return this._workPoolId;
  }

  // work_queue_id - computed: true, optional: true, required: false
  private _workQueueId?: string; 
  public get workQueueId() {
    return this.getStringAttribute('work_queue_id');
  }
  public set workQueueId(value: string) {
    this._workQueueId = value;
  }
  public resetWorkQueueId() {
    this._workQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workQueueIdInput() {
    return this._workQueueId;
  }
}

export class AutomationActionsOnResolveList extends cdktf.ComplexList {
  public internalValue? : AutomationActionsOnResolve[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationActionsOnResolveOutputReference {
    return new AutomationActionsOnResolveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationActionsOnTrigger {
  /**
  * (Automation) ID of the automation to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#automation_id Automation#automation_id}
  */
  readonly automationId?: string;
  /**
  * (Webhook / Notification) ID of the block to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#block_document_id Automation#block_document_id}
  */
  readonly blockDocumentId?: string;
  /**
  * (Notification) Body of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#body Automation#body}
  */
  readonly body?: string;
  /**
  * (Deployment) ID of the deployment to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#deployment_id Automation#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * (Deployment) (JSON) Job variables to pass to the created flow run. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#job_variables Automation#job_variables}
  */
  readonly jobVariables?: string;
  /**
  * (Flow Run State Change) Message to associate with the state change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#message Automation#message}
  */
  readonly message?: string;
  /**
  * (Flow Run State Change) Name of the state to change the flow run to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name?: string;
  /**
  * (Deployment) (JSON) Parameters to pass to the deployment. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#parameters Automation#parameters}
  */
  readonly parameters?: string;
  /**
  * (Webhook) Payload to send when calling the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#payload Automation#payload}
  */
  readonly payload?: string;
  /**
  * (Deployment / Work Pool / Work Queue / Automation) Whether this action applies to a specific selected resource or to a specific resource by ID - 'selected' or 'inferred'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#source Automation#source}
  */
  readonly source?: string;
  /**
  * (Flow Run State Change) Type of state to change the flow run to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#state Automation#state}
  */
  readonly state?: string;
  /**
  * (Notification) Subject of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#subject Automation#subject}
  */
  readonly subject?: string;
  /**
  * The type of action to perform. Possible values: do-nothing, run-deployment, pause-deployment, resume-deployment, cancel-flow-run, change-flow-run-state, pause-work-queue, resume-work-queue, send-notification, call-webhook, pause-automation, resume-automation, suspend-flow-run, resume-flow-run, declare-incident, pause-work-pool, resume-work-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#type Automation#type}
  */
  readonly type: string;
  /**
  * (Work Pool) ID of the work pool to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#work_pool_id Automation#work_pool_id}
  */
  readonly workPoolId?: string;
  /**
  * (Work Queue) ID of the work queue to apply this action to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#work_queue_id Automation#work_queue_id}
  */
  readonly workQueueId?: string;
}

export function automationActionsOnTriggerToTerraform(struct?: AutomationActionsOnTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_id: cdktf.stringToTerraform(struct!.automationId),
    block_document_id: cdktf.stringToTerraform(struct!.blockDocumentId),
    body: cdktf.stringToTerraform(struct!.body),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    job_variables: cdktf.stringToTerraform(struct!.jobVariables),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    payload: cdktf.stringToTerraform(struct!.payload),
    source: cdktf.stringToTerraform(struct!.source),
    state: cdktf.stringToTerraform(struct!.state),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
    work_pool_id: cdktf.stringToTerraform(struct!.workPoolId),
    work_queue_id: cdktf.stringToTerraform(struct!.workQueueId),
  }
}


export function automationActionsOnTriggerToHclTerraform(struct?: AutomationActionsOnTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_id: {
      value: cdktf.stringToHclTerraform(struct!.automationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_document_id: {
      value: cdktf.stringToHclTerraform(struct!.blockDocumentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_variables: {
      value: cdktf.stringToHclTerraform(struct!.jobVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_queue_id: {
      value: cdktf.stringToHclTerraform(struct!.workQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationActionsOnTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationActionsOnTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationId = this._automationId;
    }
    if (this._blockDocumentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDocumentId = this._blockDocumentId;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._jobVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobVariables = this._jobVariables;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workPoolId = this._workPoolId;
    }
    if (this._workQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workQueueId = this._workQueueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationActionsOnTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automationId = undefined;
      this._blockDocumentId = undefined;
      this._body = undefined;
      this._deploymentId = undefined;
      this._jobVariables = undefined;
      this._message = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._payload = undefined;
      this._source = undefined;
      this._state = undefined;
      this._subject = undefined;
      this._type = undefined;
      this._workPoolId = undefined;
      this._workQueueId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automationId = value.automationId;
      this._blockDocumentId = value.blockDocumentId;
      this._body = value.body;
      this._deploymentId = value.deploymentId;
      this._jobVariables = value.jobVariables;
      this._message = value.message;
      this._name = value.name;
      this._parameters = value.parameters;
      this._payload = value.payload;
      this._source = value.source;
      this._state = value.state;
      this._subject = value.subject;
      this._type = value.type;
      this._workPoolId = value.workPoolId;
      this._workQueueId = value.workQueueId;
    }
  }

  // automation_id - computed: true, optional: true, required: false
  private _automationId?: string; 
  public get automationId() {
    return this.getStringAttribute('automation_id');
  }
  public set automationId(value: string) {
    this._automationId = value;
  }
  public resetAutomationId() {
    this._automationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationIdInput() {
    return this._automationId;
  }

  // block_document_id - computed: true, optional: true, required: false
  private _blockDocumentId?: string; 
  public get blockDocumentId() {
    return this.getStringAttribute('block_document_id');
  }
  public set blockDocumentId(value: string) {
    this._blockDocumentId = value;
  }
  public resetBlockDocumentId() {
    this._blockDocumentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDocumentIdInput() {
    return this._blockDocumentId;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // job_variables - computed: true, optional: true, required: false
  private _jobVariables?: string; 
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }
  public set jobVariables(value: string) {
    this._jobVariables = value;
  }
  public resetJobVariables() {
    this._jobVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobVariablesInput() {
    return this._jobVariables;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // work_pool_id - computed: true, optional: true, required: false
  private _workPoolId?: string; 
  public get workPoolId() {
    return this.getStringAttribute('work_pool_id');
  }
  public set workPoolId(value: string) {
    this._workPoolId = value;
  }
  public resetWorkPoolId() {
    this._workPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolIdInput() {
    return this._workPoolId;
  }

  // work_queue_id - computed: true, optional: true, required: false
  private _workQueueId?: string; 
  public get workQueueId() {
    return this.getStringAttribute('work_queue_id');
  }
  public set workQueueId(value: string) {
    this._workQueueId = value;
  }
  public resetWorkQueueId() {
    this._workQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workQueueIdInput() {
    return this._workQueueId;
  }
}

export class AutomationActionsOnTriggerList extends cdktf.ComplexList {
  public internalValue? : AutomationActionsOnTrigger[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationActionsOnTriggerOutputReference {
    return new AutomationActionsOnTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationTriggerCompoundTriggersEvent {
  /**
  * The event(s) which must first been seen to fire this trigger. If empty, then fire this trigger immediately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#after Automation#after}
  */
  readonly after?: string[];
  /**
  * The event(s) this trigger is expecting to see. If empty, this trigger will match any event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#expect Automation#expect}
  */
  readonly expect?: string[];
  /**
  * Evaluate the trigger separately for each distinct value of these labels on the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#for_each Automation#for_each}
  */
  readonly forEach?: string[];
  /**
  * (JSON) Resource specification labels which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match Automation#match}
  */
  readonly match?: string;
  /**
  * (JSON) Resource specification labels for related resources which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match_related Automation#match_related}
  */
  readonly matchRelated?: string;
  /**
  * The posture of this trigger, either Reactive or Proactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#posture Automation#posture}
  */
  readonly posture: string;
  /**
  * The number of events required for this trigger to fire (Reactive) or expected (Proactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#threshold Automation#threshold}
  */
  readonly threshold?: number;
  /**
  * The time period in seconds over which the events must occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#within Automation#within}
  */
  readonly within?: number;
}

export function automationTriggerCompoundTriggersEventToTerraform(struct?: AutomationTriggerCompoundTriggersEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.after),
    expect: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expect),
    for_each: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forEach),
    match: cdktf.stringToTerraform(struct!.match),
    match_related: cdktf.stringToTerraform(struct!.matchRelated),
    posture: cdktf.stringToTerraform(struct!.posture),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    within: cdktf.numberToTerraform(struct!.within),
  }
}


export function automationTriggerCompoundTriggersEventToHclTerraform(struct?: AutomationTriggerCompoundTriggersEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.after),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expect: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expect),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    for_each: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forEach),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_related: {
      value: cdktf.stringToHclTerraform(struct!.matchRelated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    posture: {
      value: cdktf.stringToHclTerraform(struct!.posture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    within: {
      value: cdktf.numberToHclTerraform(struct!.within),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerCompoundTriggersEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerCompoundTriggersEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after;
    }
    if (this._expect !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect;
    }
    if (this._forEach !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEach = this._forEach;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRelated !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRelated = this._matchRelated;
    }
    if (this._posture !== undefined) {
      hasAnyValues = true;
      internalValueResult.posture = this._posture;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._within !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerCompoundTriggersEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after = undefined;
      this._expect = undefined;
      this._forEach = undefined;
      this._match = undefined;
      this._matchRelated = undefined;
      this._posture = undefined;
      this._threshold = undefined;
      this._within = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after = value.after;
      this._expect = value.expect;
      this._forEach = value.forEach;
      this._match = value.match;
      this._matchRelated = value.matchRelated;
      this._posture = value.posture;
      this._threshold = value.threshold;
      this._within = value.within;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after?: string[]; 
  public get after() {
    return cdktf.Fn.tolist(this.getListAttribute('after'));
  }
  public set after(value: string[]) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // expect - computed: true, optional: true, required: false
  private _expect?: string[]; 
  public get expect() {
    return cdktf.Fn.tolist(this.getListAttribute('expect'));
  }
  public set expect(value: string[]) {
    this._expect = value;
  }
  public resetExpect() {
    this._expect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // for_each - computed: true, optional: true, required: false
  private _forEach?: string[]; 
  public get forEach() {
    return cdktf.Fn.tolist(this.getListAttribute('for_each'));
  }
  public set forEach(value: string[]) {
    this._forEach = value;
  }
  public resetForEach() {
    this._forEach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachInput() {
    return this._forEach;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_related - computed: true, optional: true, required: false
  private _matchRelated?: string; 
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }
  public set matchRelated(value: string) {
    this._matchRelated = value;
  }
  public resetMatchRelated() {
    this._matchRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRelatedInput() {
    return this._matchRelated;
  }

  // posture - computed: false, optional: false, required: true
  private _posture?: string; 
  public get posture() {
    return this.getStringAttribute('posture');
  }
  public set posture(value: string) {
    this._posture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureInput() {
    return this._posture;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // within - computed: false, optional: true, required: false
  private _within?: number; 
  public get within() {
    return this.getNumberAttribute('within');
  }
  public set within(value: number) {
    this._within = value;
  }
  public resetWithin() {
    this._within = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within;
  }
}
export interface AutomationTriggerCompoundTriggersMetricMetric {
  /**
  * The duration (seconds) for which the metric query must breach OR resolve continuously before the state is updated and actions are triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#firing_for Automation#firing_for}
  */
  readonly firingFor: number;
  /**
  * The name of the metric to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name: string;
  /**
  * The comparative operator used to evaluate the query result against the threshold value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#operator Automation#operator}
  */
  readonly operator: string;
  /**
  * The lookback duration (seconds) for a metric query. This duration is used to determine the time range over which the query will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#range Automation#range}
  */
  readonly range: number;
  /**
  * The threshold value against which we'll compare the query results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#threshold Automation#threshold}
  */
  readonly threshold: number;
}

export function automationTriggerCompoundTriggersMetricMetricToTerraform(struct?: AutomationTriggerCompoundTriggersMetricMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firing_for: cdktf.numberToTerraform(struct!.firingFor),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    range: cdktf.numberToTerraform(struct!.range),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function automationTriggerCompoundTriggersMetricMetricToHclTerraform(struct?: AutomationTriggerCompoundTriggersMetricMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firing_for: {
      value: cdktf.numberToHclTerraform(struct!.firingFor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.numberToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerCompoundTriggersMetricMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerCompoundTriggersMetricMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firingFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.firingFor = this._firingFor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerCompoundTriggersMetricMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firingFor = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._range = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firingFor = value.firingFor;
      this._name = value.name;
      this._operator = value.operator;
      this._range = value.range;
      this._threshold = value.threshold;
    }
  }

  // firing_for - computed: false, optional: false, required: true
  private _firingFor?: number; 
  public get firingFor() {
    return this.getNumberAttribute('firing_for');
  }
  public set firingFor(value: number) {
    this._firingFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firingForInput() {
    return this._firingFor;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // range - computed: false, optional: false, required: true
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AutomationTriggerCompoundTriggersMetric {
  /**
  * (JSON) Resource specification labels which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match Automation#match}
  */
  readonly match?: string;
  /**
  * (JSON) Resource specification labels for related resources which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match_related Automation#match_related}
  */
  readonly matchRelated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#metric Automation#metric}
  */
  readonly metric: AutomationTriggerCompoundTriggersMetricMetric;
}

export function automationTriggerCompoundTriggersMetricToTerraform(struct?: AutomationTriggerCompoundTriggersMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    match_related: cdktf.stringToTerraform(struct!.matchRelated),
    metric: automationTriggerCompoundTriggersMetricMetricToTerraform(struct!.metric),
  }
}


export function automationTriggerCompoundTriggersMetricToHclTerraform(struct?: AutomationTriggerCompoundTriggersMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_related: {
      value: cdktf.stringToHclTerraform(struct!.matchRelated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: automationTriggerCompoundTriggersMetricMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerCompoundTriggersMetricMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerCompoundTriggersMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerCompoundTriggersMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRelated !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRelated = this._matchRelated;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerCompoundTriggersMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._matchRelated = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._matchRelated = value.matchRelated;
      this._metric.internalValue = value.metric;
    }
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_related - computed: true, optional: true, required: false
  private _matchRelated?: string; 
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }
  public set matchRelated(value: string) {
    this._matchRelated = value;
  }
  public resetMatchRelated() {
    this._matchRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRelatedInput() {
    return this._matchRelated;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutomationTriggerCompoundTriggersMetricMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutomationTriggerCompoundTriggersMetricMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutomationTriggerCompoundTriggers {
  /**
  * A trigger that fires based on the presence or absence of events within a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#event Automation#event}
  */
  readonly event?: AutomationTriggerCompoundTriggersEvent;
  /**
  * A trigger that fires based on the results of a metric query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#metric Automation#metric}
  */
  readonly metric?: AutomationTriggerCompoundTriggersMetric;
}

export function automationTriggerCompoundTriggersToTerraform(struct?: AutomationTriggerCompoundTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: automationTriggerCompoundTriggersEventToTerraform(struct!.event),
    metric: automationTriggerCompoundTriggersMetricToTerraform(struct!.metric),
  }
}


export function automationTriggerCompoundTriggersToHclTerraform(struct?: AutomationTriggerCompoundTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: automationTriggerCompoundTriggersEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerCompoundTriggersEvent",
    },
    metric: {
      value: automationTriggerCompoundTriggersMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerCompoundTriggersMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerCompoundTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationTriggerCompoundTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerCompoundTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event.internalValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event.internalValue = value.event;
      this._metric.internalValue = value.metric;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event = new AutomationTriggerCompoundTriggersEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AutomationTriggerCompoundTriggersEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new AutomationTriggerCompoundTriggersMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutomationTriggerCompoundTriggersMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class AutomationTriggerCompoundTriggersList extends cdktf.ComplexList {
  public internalValue? : AutomationTriggerCompoundTriggers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationTriggerCompoundTriggersOutputReference {
    return new AutomationTriggerCompoundTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationTriggerCompound {
  /**
  * How many triggers must fire ('any', 'all', or a number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#require Automation#require}
  */
  readonly require: { [key: string]: any };
  /**
  * The ordered list of triggers that must fire in sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#triggers Automation#triggers}
  */
  readonly triggers: AutomationTriggerCompoundTriggers[] | cdktf.IResolvable;
  /**
  * The time period in seconds over which the events must occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#within Automation#within}
  */
  readonly within?: number;
}

export function automationTriggerCompoundToTerraform(struct?: AutomationTriggerCompound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.require),
    triggers: cdktf.listMapper(automationTriggerCompoundTriggersToTerraform, false)(struct!.triggers),
    within: cdktf.numberToTerraform(struct!.within),
  }
}


export function automationTriggerCompoundToHclTerraform(struct?: AutomationTriggerCompound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.require),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    triggers: {
      value: cdktf.listMapperHcl(automationTriggerCompoundTriggersToHclTerraform, false)(struct!.triggers),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationTriggerCompoundTriggersList",
    },
    within: {
      value: cdktf.numberToHclTerraform(struct!.within),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerCompoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerCompound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._require !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require;
    }
    if (this._triggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers?.internalValue;
    }
    if (this._within !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerCompound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._require = undefined;
      this._triggers.internalValue = undefined;
      this._within = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._require = value.require;
      this._triggers.internalValue = value.triggers;
      this._within = value.within;
    }
  }

  // require - computed: false, optional: false, required: true
  private _require?: { [key: string]: any }; 
  public get require() {
    return this.getAnyMapAttribute('require');
  }
  public set require(value: { [key: string]: any }) {
    this._require = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new AutomationTriggerCompoundTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: AutomationTriggerCompoundTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // within - computed: false, optional: true, required: false
  private _within?: number; 
  public get within() {
    return this.getNumberAttribute('within');
  }
  public set within(value: number) {
    this._within = value;
  }
  public resetWithin() {
    this._within = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within;
  }
}
export interface AutomationTriggerEvent {
  /**
  * The event(s) which must first been seen to fire this trigger. If empty, then fire this trigger immediately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#after Automation#after}
  */
  readonly after?: string[];
  /**
  * The event(s) this trigger is expecting to see. If empty, this trigger will match any event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#expect Automation#expect}
  */
  readonly expect?: string[];
  /**
  * Evaluate the trigger separately for each distinct value of these labels on the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#for_each Automation#for_each}
  */
  readonly forEach?: string[];
  /**
  * (JSON) Resource specification labels which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match Automation#match}
  */
  readonly match?: string;
  /**
  * (JSON) Resource specification labels for related resources which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match_related Automation#match_related}
  */
  readonly matchRelated?: string;
  /**
  * The posture of this trigger, either Reactive or Proactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#posture Automation#posture}
  */
  readonly posture: string;
  /**
  * The number of events required for this trigger to fire (Reactive) or expected (Proactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#threshold Automation#threshold}
  */
  readonly threshold?: number;
  /**
  * The time period in seconds over which the events must occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#within Automation#within}
  */
  readonly within?: number;
}

export function automationTriggerEventToTerraform(struct?: AutomationTriggerEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.after),
    expect: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expect),
    for_each: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forEach),
    match: cdktf.stringToTerraform(struct!.match),
    match_related: cdktf.stringToTerraform(struct!.matchRelated),
    posture: cdktf.stringToTerraform(struct!.posture),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    within: cdktf.numberToTerraform(struct!.within),
  }
}


export function automationTriggerEventToHclTerraform(struct?: AutomationTriggerEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.after),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expect: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expect),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    for_each: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forEach),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_related: {
      value: cdktf.stringToHclTerraform(struct!.matchRelated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    posture: {
      value: cdktf.stringToHclTerraform(struct!.posture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    within: {
      value: cdktf.numberToHclTerraform(struct!.within),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after;
    }
    if (this._expect !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect;
    }
    if (this._forEach !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEach = this._forEach;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRelated !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRelated = this._matchRelated;
    }
    if (this._posture !== undefined) {
      hasAnyValues = true;
      internalValueResult.posture = this._posture;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._within !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after = undefined;
      this._expect = undefined;
      this._forEach = undefined;
      this._match = undefined;
      this._matchRelated = undefined;
      this._posture = undefined;
      this._threshold = undefined;
      this._within = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after = value.after;
      this._expect = value.expect;
      this._forEach = value.forEach;
      this._match = value.match;
      this._matchRelated = value.matchRelated;
      this._posture = value.posture;
      this._threshold = value.threshold;
      this._within = value.within;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after?: string[]; 
  public get after() {
    return cdktf.Fn.tolist(this.getListAttribute('after'));
  }
  public set after(value: string[]) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // expect - computed: true, optional: true, required: false
  private _expect?: string[]; 
  public get expect() {
    return cdktf.Fn.tolist(this.getListAttribute('expect'));
  }
  public set expect(value: string[]) {
    this._expect = value;
  }
  public resetExpect() {
    this._expect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // for_each - computed: true, optional: true, required: false
  private _forEach?: string[]; 
  public get forEach() {
    return cdktf.Fn.tolist(this.getListAttribute('for_each'));
  }
  public set forEach(value: string[]) {
    this._forEach = value;
  }
  public resetForEach() {
    this._forEach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachInput() {
    return this._forEach;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_related - computed: true, optional: true, required: false
  private _matchRelated?: string; 
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }
  public set matchRelated(value: string) {
    this._matchRelated = value;
  }
  public resetMatchRelated() {
    this._matchRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRelatedInput() {
    return this._matchRelated;
  }

  // posture - computed: false, optional: false, required: true
  private _posture?: string; 
  public get posture() {
    return this.getStringAttribute('posture');
  }
  public set posture(value: string) {
    this._posture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureInput() {
    return this._posture;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // within - computed: false, optional: true, required: false
  private _within?: number; 
  public get within() {
    return this.getNumberAttribute('within');
  }
  public set within(value: number) {
    this._within = value;
  }
  public resetWithin() {
    this._within = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within;
  }
}
export interface AutomationTriggerMetricMetric {
  /**
  * The duration (seconds) for which the metric query must breach OR resolve continuously before the state is updated and actions are triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#firing_for Automation#firing_for}
  */
  readonly firingFor: number;
  /**
  * The name of the metric to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name: string;
  /**
  * The comparative operator used to evaluate the query result against the threshold value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#operator Automation#operator}
  */
  readonly operator: string;
  /**
  * The lookback duration (seconds) for a metric query. This duration is used to determine the time range over which the query will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#range Automation#range}
  */
  readonly range: number;
  /**
  * The threshold value against which we'll compare the query results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#threshold Automation#threshold}
  */
  readonly threshold: number;
}

export function automationTriggerMetricMetricToTerraform(struct?: AutomationTriggerMetricMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firing_for: cdktf.numberToTerraform(struct!.firingFor),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    range: cdktf.numberToTerraform(struct!.range),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function automationTriggerMetricMetricToHclTerraform(struct?: AutomationTriggerMetricMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firing_for: {
      value: cdktf.numberToHclTerraform(struct!.firingFor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.numberToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerMetricMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerMetricMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firingFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.firingFor = this._firingFor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerMetricMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firingFor = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._range = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firingFor = value.firingFor;
      this._name = value.name;
      this._operator = value.operator;
      this._range = value.range;
      this._threshold = value.threshold;
    }
  }

  // firing_for - computed: false, optional: false, required: true
  private _firingFor?: number; 
  public get firingFor() {
    return this.getNumberAttribute('firing_for');
  }
  public set firingFor(value: number) {
    this._firingFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firingForInput() {
    return this._firingFor;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // range - computed: false, optional: false, required: true
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AutomationTriggerMetric {
  /**
  * (JSON) Resource specification labels which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match Automation#match}
  */
  readonly match?: string;
  /**
  * (JSON) Resource specification labels for related resources which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match_related Automation#match_related}
  */
  readonly matchRelated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#metric Automation#metric}
  */
  readonly metric: AutomationTriggerMetricMetric;
}

export function automationTriggerMetricToTerraform(struct?: AutomationTriggerMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    match_related: cdktf.stringToTerraform(struct!.matchRelated),
    metric: automationTriggerMetricMetricToTerraform(struct!.metric),
  }
}


export function automationTriggerMetricToHclTerraform(struct?: AutomationTriggerMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_related: {
      value: cdktf.stringToHclTerraform(struct!.matchRelated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: automationTriggerMetricMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerMetricMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRelated !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRelated = this._matchRelated;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._matchRelated = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._matchRelated = value.matchRelated;
      this._metric.internalValue = value.metric;
    }
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_related - computed: true, optional: true, required: false
  private _matchRelated?: string; 
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }
  public set matchRelated(value: string) {
    this._matchRelated = value;
  }
  public resetMatchRelated() {
    this._matchRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRelatedInput() {
    return this._matchRelated;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutomationTriggerMetricMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutomationTriggerMetricMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutomationTriggerSequenceTriggersEvent {
  /**
  * The event(s) which must first been seen to fire this trigger. If empty, then fire this trigger immediately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#after Automation#after}
  */
  readonly after?: string[];
  /**
  * The event(s) this trigger is expecting to see. If empty, this trigger will match any event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#expect Automation#expect}
  */
  readonly expect?: string[];
  /**
  * Evaluate the trigger separately for each distinct value of these labels on the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#for_each Automation#for_each}
  */
  readonly forEach?: string[];
  /**
  * (JSON) Resource specification labels which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match Automation#match}
  */
  readonly match?: string;
  /**
  * (JSON) Resource specification labels for related resources which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match_related Automation#match_related}
  */
  readonly matchRelated?: string;
  /**
  * The posture of this trigger, either Reactive or Proactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#posture Automation#posture}
  */
  readonly posture: string;
  /**
  * The number of events required for this trigger to fire (Reactive) or expected (Proactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#threshold Automation#threshold}
  */
  readonly threshold?: number;
  /**
  * The time period in seconds over which the events must occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#within Automation#within}
  */
  readonly within?: number;
}

export function automationTriggerSequenceTriggersEventToTerraform(struct?: AutomationTriggerSequenceTriggersEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.after),
    expect: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expect),
    for_each: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forEach),
    match: cdktf.stringToTerraform(struct!.match),
    match_related: cdktf.stringToTerraform(struct!.matchRelated),
    posture: cdktf.stringToTerraform(struct!.posture),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    within: cdktf.numberToTerraform(struct!.within),
  }
}


export function automationTriggerSequenceTriggersEventToHclTerraform(struct?: AutomationTriggerSequenceTriggersEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.after),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expect: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expect),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    for_each: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forEach),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_related: {
      value: cdktf.stringToHclTerraform(struct!.matchRelated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    posture: {
      value: cdktf.stringToHclTerraform(struct!.posture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    within: {
      value: cdktf.numberToHclTerraform(struct!.within),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerSequenceTriggersEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerSequenceTriggersEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after;
    }
    if (this._expect !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect;
    }
    if (this._forEach !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEach = this._forEach;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRelated !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRelated = this._matchRelated;
    }
    if (this._posture !== undefined) {
      hasAnyValues = true;
      internalValueResult.posture = this._posture;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._within !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerSequenceTriggersEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after = undefined;
      this._expect = undefined;
      this._forEach = undefined;
      this._match = undefined;
      this._matchRelated = undefined;
      this._posture = undefined;
      this._threshold = undefined;
      this._within = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after = value.after;
      this._expect = value.expect;
      this._forEach = value.forEach;
      this._match = value.match;
      this._matchRelated = value.matchRelated;
      this._posture = value.posture;
      this._threshold = value.threshold;
      this._within = value.within;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after?: string[]; 
  public get after() {
    return cdktf.Fn.tolist(this.getListAttribute('after'));
  }
  public set after(value: string[]) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // expect - computed: true, optional: true, required: false
  private _expect?: string[]; 
  public get expect() {
    return cdktf.Fn.tolist(this.getListAttribute('expect'));
  }
  public set expect(value: string[]) {
    this._expect = value;
  }
  public resetExpect() {
    this._expect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // for_each - computed: true, optional: true, required: false
  private _forEach?: string[]; 
  public get forEach() {
    return cdktf.Fn.tolist(this.getListAttribute('for_each'));
  }
  public set forEach(value: string[]) {
    this._forEach = value;
  }
  public resetForEach() {
    this._forEach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachInput() {
    return this._forEach;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_related - computed: true, optional: true, required: false
  private _matchRelated?: string; 
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }
  public set matchRelated(value: string) {
    this._matchRelated = value;
  }
  public resetMatchRelated() {
    this._matchRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRelatedInput() {
    return this._matchRelated;
  }

  // posture - computed: false, optional: false, required: true
  private _posture?: string; 
  public get posture() {
    return this.getStringAttribute('posture');
  }
  public set posture(value: string) {
    this._posture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureInput() {
    return this._posture;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // within - computed: false, optional: true, required: false
  private _within?: number; 
  public get within() {
    return this.getNumberAttribute('within');
  }
  public set within(value: number) {
    this._within = value;
  }
  public resetWithin() {
    this._within = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within;
  }
}
export interface AutomationTriggerSequenceTriggersMetricMetric {
  /**
  * The duration (seconds) for which the metric query must breach OR resolve continuously before the state is updated and actions are triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#firing_for Automation#firing_for}
  */
  readonly firingFor: number;
  /**
  * The name of the metric to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#name Automation#name}
  */
  readonly name: string;
  /**
  * The comparative operator used to evaluate the query result against the threshold value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#operator Automation#operator}
  */
  readonly operator: string;
  /**
  * The lookback duration (seconds) for a metric query. This duration is used to determine the time range over which the query will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#range Automation#range}
  */
  readonly range: number;
  /**
  * The threshold value against which we'll compare the query results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#threshold Automation#threshold}
  */
  readonly threshold: number;
}

export function automationTriggerSequenceTriggersMetricMetricToTerraform(struct?: AutomationTriggerSequenceTriggersMetricMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firing_for: cdktf.numberToTerraform(struct!.firingFor),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    range: cdktf.numberToTerraform(struct!.range),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function automationTriggerSequenceTriggersMetricMetricToHclTerraform(struct?: AutomationTriggerSequenceTriggersMetricMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firing_for: {
      value: cdktf.numberToHclTerraform(struct!.firingFor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.numberToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerSequenceTriggersMetricMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerSequenceTriggersMetricMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firingFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.firingFor = this._firingFor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerSequenceTriggersMetricMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firingFor = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._range = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firingFor = value.firingFor;
      this._name = value.name;
      this._operator = value.operator;
      this._range = value.range;
      this._threshold = value.threshold;
    }
  }

  // firing_for - computed: false, optional: false, required: true
  private _firingFor?: number; 
  public get firingFor() {
    return this.getNumberAttribute('firing_for');
  }
  public set firingFor(value: number) {
    this._firingFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firingForInput() {
    return this._firingFor;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // range - computed: false, optional: false, required: true
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AutomationTriggerSequenceTriggersMetric {
  /**
  * (JSON) Resource specification labels which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match Automation#match}
  */
  readonly match?: string;
  /**
  * (JSON) Resource specification labels for related resources which this trigger will match. Use `jsonencode()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#match_related Automation#match_related}
  */
  readonly matchRelated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#metric Automation#metric}
  */
  readonly metric: AutomationTriggerSequenceTriggersMetricMetric;
}

export function automationTriggerSequenceTriggersMetricToTerraform(struct?: AutomationTriggerSequenceTriggersMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    match_related: cdktf.stringToTerraform(struct!.matchRelated),
    metric: automationTriggerSequenceTriggersMetricMetricToTerraform(struct!.metric),
  }
}


export function automationTriggerSequenceTriggersMetricToHclTerraform(struct?: AutomationTriggerSequenceTriggersMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_related: {
      value: cdktf.stringToHclTerraform(struct!.matchRelated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: automationTriggerSequenceTriggersMetricMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerSequenceTriggersMetricMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerSequenceTriggersMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerSequenceTriggersMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRelated !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRelated = this._matchRelated;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerSequenceTriggersMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._matchRelated = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._matchRelated = value.matchRelated;
      this._metric.internalValue = value.metric;
    }
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_related - computed: true, optional: true, required: false
  private _matchRelated?: string; 
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }
  public set matchRelated(value: string) {
    this._matchRelated = value;
  }
  public resetMatchRelated() {
    this._matchRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRelatedInput() {
    return this._matchRelated;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutomationTriggerSequenceTriggersMetricMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutomationTriggerSequenceTriggersMetricMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutomationTriggerSequenceTriggers {
  /**
  * A trigger that fires based on the presence or absence of events within a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#event Automation#event}
  */
  readonly event?: AutomationTriggerSequenceTriggersEvent;
  /**
  * A trigger that fires based on the results of a metric query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#metric Automation#metric}
  */
  readonly metric?: AutomationTriggerSequenceTriggersMetric;
}

export function automationTriggerSequenceTriggersToTerraform(struct?: AutomationTriggerSequenceTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: automationTriggerSequenceTriggersEventToTerraform(struct!.event),
    metric: automationTriggerSequenceTriggersMetricToTerraform(struct!.metric),
  }
}


export function automationTriggerSequenceTriggersToHclTerraform(struct?: AutomationTriggerSequenceTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: automationTriggerSequenceTriggersEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerSequenceTriggersEvent",
    },
    metric: {
      value: automationTriggerSequenceTriggersMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerSequenceTriggersMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerSequenceTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationTriggerSequenceTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerSequenceTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event.internalValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event.internalValue = value.event;
      this._metric.internalValue = value.metric;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event = new AutomationTriggerSequenceTriggersEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AutomationTriggerSequenceTriggersEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new AutomationTriggerSequenceTriggersMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutomationTriggerSequenceTriggersMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class AutomationTriggerSequenceTriggersList extends cdktf.ComplexList {
  public internalValue? : AutomationTriggerSequenceTriggers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationTriggerSequenceTriggersOutputReference {
    return new AutomationTriggerSequenceTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationTriggerSequence {
  /**
  * The ordered list of triggers that must fire in sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#triggers Automation#triggers}
  */
  readonly triggers: AutomationTriggerSequenceTriggers[] | cdktf.IResolvable;
  /**
  * The time period in seconds over which the events must occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#within Automation#within}
  */
  readonly within?: number;
}

export function automationTriggerSequenceToTerraform(struct?: AutomationTriggerSequence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    triggers: cdktf.listMapper(automationTriggerSequenceTriggersToTerraform, false)(struct!.triggers),
    within: cdktf.numberToTerraform(struct!.within),
  }
}


export function automationTriggerSequenceToHclTerraform(struct?: AutomationTriggerSequence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    triggers: {
      value: cdktf.listMapperHcl(automationTriggerSequenceTriggersToHclTerraform, false)(struct!.triggers),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationTriggerSequenceTriggersList",
    },
    within: {
      value: cdktf.numberToHclTerraform(struct!.within),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerSequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTriggerSequence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers?.internalValue;
    }
    if (this._within !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTriggerSequence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._triggers.internalValue = undefined;
      this._within = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._triggers.internalValue = value.triggers;
      this._within = value.within;
    }
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new AutomationTriggerSequenceTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: AutomationTriggerSequenceTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // within - computed: false, optional: true, required: false
  private _within?: number; 
  public get within() {
    return this.getNumberAttribute('within');
  }
  public set within(value: number) {
    this._within = value;
  }
  public resetWithin() {
    this._within = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within;
  }
}
export interface AutomationTrigger {
  /**
  * A composite trigger that requires some number of triggers to have fired within the given time period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#compound Automation#compound}
  */
  readonly compound?: AutomationTriggerCompound;
  /**
  * A trigger that fires based on the presence or absence of events within a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#event Automation#event}
  */
  readonly event?: AutomationTriggerEvent;
  /**
  * A trigger that fires based on the results of a metric query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#metric Automation#metric}
  */
  readonly metric?: AutomationTriggerMetric;
  /**
  * A composite trigger that requires triggers to fire in a specific order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#sequence Automation#sequence}
  */
  readonly sequence?: AutomationTriggerSequence;
}

export function automationTriggerToTerraform(struct?: AutomationTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compound: automationTriggerCompoundToTerraform(struct!.compound),
    event: automationTriggerEventToTerraform(struct!.event),
    metric: automationTriggerMetricToTerraform(struct!.metric),
    sequence: automationTriggerSequenceToTerraform(struct!.sequence),
  }
}


export function automationTriggerToHclTerraform(struct?: AutomationTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compound: {
      value: automationTriggerCompoundToHclTerraform(struct!.compound),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerCompound",
    },
    event: {
      value: automationTriggerEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerEvent",
    },
    metric: {
      value: automationTriggerMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerMetric",
    },
    sequence: {
      value: automationTriggerSequenceToHclTerraform(struct!.sequence),
      isBlock: true,
      type: "struct",
      storageClassType: "AutomationTriggerSequence",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compound = this._compound?.internalValue;
    }
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._sequence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compound.internalValue = undefined;
      this._event.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._sequence.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compound.internalValue = value.compound;
      this._event.internalValue = value.event;
      this._metric.internalValue = value.metric;
      this._sequence.internalValue = value.sequence;
    }
  }

  // compound - computed: false, optional: true, required: false
  private _compound = new AutomationTriggerCompoundOutputReference(this, "compound");
  public get compound() {
    return this._compound;
  }
  public putCompound(value: AutomationTriggerCompound) {
    this._compound.internalValue = value;
  }
  public resetCompound() {
    this._compound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundInput() {
    return this._compound.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new AutomationTriggerEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AutomationTriggerEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new AutomationTriggerMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutomationTriggerMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence = new AutomationTriggerSequenceOutputReference(this, "sequence");
  public get sequence() {
    return this._sequence;
  }
  public putSequence(value: AutomationTriggerSequence) {
    this._sequence.internalValue = value;
  }
  public resetSequence() {
    this._sequence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation prefect_automation}
*/
export class Automation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Automation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Automation to import
  * @param importFromId The id of the existing Automation that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Automation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/automation prefect_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_automation',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.0',
        providerVersionConstraint: '2.92.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._actions.internalValue = config.actions;
    this._actionsOnResolve.internalValue = config.actionsOnResolve;
    this._actionsOnTrigger.internalValue = config.actionsOnTrigger;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._trigger.internalValue = config.trigger;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new AutomationActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: AutomationActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // actions_on_resolve - computed: true, optional: true, required: false
  private _actionsOnResolve = new AutomationActionsOnResolveList(this, "actions_on_resolve", false);
  public get actionsOnResolve() {
    return this._actionsOnResolve;
  }
  public putActionsOnResolve(value: AutomationActionsOnResolve[] | cdktf.IResolvable) {
    this._actionsOnResolve.internalValue = value;
  }
  public resetActionsOnResolve() {
    this._actionsOnResolve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsOnResolveInput() {
    return this._actionsOnResolve.internalValue;
  }

  // actions_on_trigger - computed: true, optional: true, required: false
  private _actionsOnTrigger = new AutomationActionsOnTriggerList(this, "actions_on_trigger", false);
  public get actionsOnTrigger() {
    return this._actionsOnTrigger;
  }
  public putActionsOnTrigger(value: AutomationActionsOnTrigger[] | cdktf.IResolvable) {
    this._actionsOnTrigger.internalValue = value;
  }
  public resetActionsOnTrigger() {
    this._actionsOnTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsOnTriggerInput() {
    return this._actionsOnTrigger.internalValue;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // trigger - computed: false, optional: false, required: true
  private _trigger = new AutomationTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: AutomationTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      actions: cdktf.listMapper(automationActionsToTerraform, false)(this._actions.internalValue),
      actions_on_resolve: cdktf.listMapper(automationActionsOnResolveToTerraform, false)(this._actionsOnResolve.internalValue),
      actions_on_trigger: cdktf.listMapper(automationActionsOnTriggerToTerraform, false)(this._actionsOnTrigger.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      trigger: automationTriggerToTerraform(this._trigger.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(automationActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationActionsList",
      },
      actions_on_resolve: {
        value: cdktf.listMapperHcl(automationActionsOnResolveToHclTerraform, false)(this._actionsOnResolve.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationActionsOnResolveList",
      },
      actions_on_trigger: {
        value: cdktf.listMapperHcl(automationActionsOnTriggerToHclTerraform, false)(this._actionsOnTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationActionsOnTriggerList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger: {
        value: automationTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationTrigger",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
