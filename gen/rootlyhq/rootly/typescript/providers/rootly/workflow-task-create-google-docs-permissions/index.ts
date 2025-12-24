// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateGoogleDocsPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#enabled WorkflowTaskCreateGoogleDocsPermissions#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#id WorkflowTaskCreateGoogleDocsPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#name WorkflowTaskCreateGoogleDocsPermissions#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#position WorkflowTaskCreateGoogleDocsPermissions#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#skip_on_failure WorkflowTaskCreateGoogleDocsPermissions#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#workflow_id WorkflowTaskCreateGoogleDocsPermissions#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#task_params WorkflowTaskCreateGoogleDocsPermissions#task_params}
  */
  readonly taskParams: WorkflowTaskCreateGoogleDocsPermissionsTaskParams;
}
export interface WorkflowTaskCreateGoogleDocsPermissionsTaskParams {
  /**
  * Email message notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#email_message WorkflowTaskCreateGoogleDocsPermissions#email_message}
  */
  readonly emailMessage?: string;
  /**
  * The Google Doc file ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#file_id WorkflowTaskCreateGoogleDocsPermissions#file_id}
  */
  readonly fileId: string;
  /**
  * Page permissions JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#permissions WorkflowTaskCreateGoogleDocsPermissions#permissions}
  */
  readonly permissions: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#send_notification_email WorkflowTaskCreateGoogleDocsPermissions#send_notification_email}
  */
  readonly sendNotificationEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#task_type WorkflowTaskCreateGoogleDocsPermissions#task_type}
  */
  readonly taskType?: string;
}

export function workflowTaskCreateGoogleDocsPermissionsTaskParamsToTerraform(struct?: WorkflowTaskCreateGoogleDocsPermissionsTaskParamsOutputReference | WorkflowTaskCreateGoogleDocsPermissionsTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    file_id: cdktf.stringToTerraform(struct!.fileId),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    send_notification_email: cdktf.booleanToTerraform(struct!.sendNotificationEmail),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function workflowTaskCreateGoogleDocsPermissionsTaskParamsToHclTerraform(struct?: WorkflowTaskCreateGoogleDocsPermissionsTaskParamsOutputReference | WorkflowTaskCreateGoogleDocsPermissionsTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_message: {
      value: cdktf.stringToHclTerraform(struct!.emailMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_notification_email: {
      value: cdktf.booleanToHclTerraform(struct!.sendNotificationEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WorkflowTaskCreateGoogleDocsPermissionsTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateGoogleDocsPermissionsTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._sendNotificationEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendNotificationEmail = this._sendNotificationEmail;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateGoogleDocsPermissionsTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailMessage = undefined;
      this._fileId = undefined;
      this._permissions = undefined;
      this._sendNotificationEmail = undefined;
      this._taskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailMessage = value.emailMessage;
      this._fileId = value.fileId;
      this._permissions = value.permissions;
      this._sendNotificationEmail = value.sendNotificationEmail;
      this._taskType = value.taskType;
    }
  }

  // email_message - computed: false, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // file_id - computed: false, optional: false, required: true
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // send_notification_email - computed: false, optional: true, required: false
  private _sendNotificationEmail?: boolean | cdktf.IResolvable; 
  public get sendNotificationEmail() {
    return this.getBooleanAttribute('send_notification_email');
  }
  public set sendNotificationEmail(value: boolean | cdktf.IResolvable) {
    this._sendNotificationEmail = value;
  }
  public resetSendNotificationEmail() {
    this._sendNotificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationEmailInput() {
    return this._sendNotificationEmail;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions rootly_workflow_task_create_google_docs_permissions}
*/
export class WorkflowTaskCreateGoogleDocsPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_google_docs_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateGoogleDocsPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateGoogleDocsPermissions to import
  * @param importFromId The id of the existing WorkflowTaskCreateGoogleDocsPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateGoogleDocsPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_google_docs_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_google_docs_permissions rootly_workflow_task_create_google_docs_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateGoogleDocsPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateGoogleDocsPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_google_docs_permissions',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
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
  private _taskParams = new WorkflowTaskCreateGoogleDocsPermissionsTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateGoogleDocsPermissionsTaskParams) {
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
      task_params: workflowTaskCreateGoogleDocsPermissionsTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateGoogleDocsPermissionsTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateGoogleDocsPermissionsTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
