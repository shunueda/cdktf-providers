// https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The notification channel's definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#definition NotificationChannel#definition}
  */
  readonly definition: NotificationChannelDefinition;
  /**
  * The entity ID the notification channel is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#entity_id NotificationChannel#entity_id}
  */
  readonly entityId: string;
  /**
  * The type of entity the notification channel is scoped to (e.g., 'DEPLOYMENT')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#entity_type NotificationChannel#entity_type}
  */
  readonly entityType: string;
  /**
  * When entity type is scoped to ORGANIZATION or WORKSPACE, this determines if child entities can access this notification channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#is_shared NotificationChannel#is_shared}
  */
  readonly isShared?: boolean | cdktf.IResolvable;
  /**
  * The notification channel's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#name NotificationChannel#name}
  */
  readonly name: string;
  /**
  * The notification channel's type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#type NotificationChannel#type}
  */
  readonly type: string;
}
export interface NotificationChannelCreatedBy {
}

export function notificationChannelCreatedByToTerraform(struct?: NotificationChannelCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function notificationChannelCreatedByToHclTerraform(struct?: NotificationChannelCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NotificationChannelCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationChannelCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationChannelCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface NotificationChannelDefinition {
  /**
  * The API key for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#api_key NotificationChannel#api_key}
  */
  readonly apiKey?: string;
  /**
  * The DAG ID for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#dag_id NotificationChannel#dag_id}
  */
  readonly dagId?: string;
  /**
  * The deployment API token for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#deployment_api_token NotificationChannel#deployment_api_token}
  */
  readonly deploymentApiToken?: string;
  /**
  * The deployment ID for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#deployment_id NotificationChannel#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * The integration key for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#integration_key NotificationChannel#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * The recipients for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#recipients NotificationChannel#recipients}
  */
  readonly recipients?: string[];
  /**
  * The webhook URL for the notification channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#webhook_url NotificationChannel#webhook_url}
  */
  readonly webhookUrl?: string;
}

export function notificationChannelDefinitionToTerraform(struct?: NotificationChannelDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    dag_id: cdktf.stringToTerraform(struct!.dagId),
    deployment_api_token: cdktf.stringToTerraform(struct!.deploymentApiToken),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function notificationChannelDefinitionToHclTerraform(struct?: NotificationChannelDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dag_id: {
      value: cdktf.stringToHclTerraform(struct!.dagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_api_token: {
      value: cdktf.stringToHclTerraform(struct!.deploymentApiToken),
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
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationChannelDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationChannelDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._dagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dagId = this._dagId;
    }
    if (this._deploymentApiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentApiToken = this._deploymentApiToken;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationChannelDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._dagId = undefined;
      this._deploymentApiToken = undefined;
      this._deploymentId = undefined;
      this._integrationKey = undefined;
      this._recipients = undefined;
      this._webhookUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._dagId = value.dagId;
      this._deploymentApiToken = value.deploymentApiToken;
      this._deploymentId = value.deploymentId;
      this._integrationKey = value.integrationKey;
      this._recipients = value.recipients;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // dag_id - computed: false, optional: true, required: false
  private _dagId?: string; 
  public get dagId() {
    return this.getStringAttribute('dag_id');
  }
  public set dagId(value: string) {
    this._dagId = value;
  }
  public resetDagId() {
    this._dagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagIdInput() {
    return this._dagId;
  }

  // deployment_api_token - computed: false, optional: true, required: false
  private _deploymentApiToken?: string; 
  public get deploymentApiToken() {
    return this.getStringAttribute('deployment_api_token');
  }
  public set deploymentApiToken(value: string) {
    this._deploymentApiToken = value;
  }
  public resetDeploymentApiToken() {
    this._deploymentApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentApiTokenInput() {
    return this._deploymentApiToken;
  }

  // deployment_id - computed: false, optional: true, required: false
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

  // integration_key - computed: false, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // webhook_url - computed: false, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}
export interface NotificationChannelUpdatedBy {
}

export function notificationChannelUpdatedByToTerraform(struct?: NotificationChannelUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function notificationChannelUpdatedByToHclTerraform(struct?: NotificationChannelUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NotificationChannelUpdatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationChannelUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationChannelUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel astro_notification_channel}
*/
export class NotificationChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationChannel to import
  * @param importFromId The id of the existing NotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/notification_channel astro_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'astro_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.10',
        providerVersionConstraint: '1.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definition.internalValue = config.definition;
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._isShared = config.isShared;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new NotificationChannelCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new NotificationChannelDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: NotificationChannelDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_shared - computed: true, optional: true, required: false
  private _isShared?: boolean | cdktf.IResolvable; 
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }
  public set isShared(value: boolean | cdktf.IResolvable) {
    this._isShared = value;
  }
  public resetIsShared() {
    this._isShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedInput() {
    return this._isShared;
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

  // type - computed: false, optional: false, required: true
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new NotificationChannelUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: notificationChannelDefinitionToTerraform(this._definition.internalValue),
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      is_shared: cdktf.booleanToTerraform(this._isShared),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: notificationChannelDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationChannelDefinition",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_shared: {
        value: cdktf.booleanToHclTerraform(this._isShared),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
