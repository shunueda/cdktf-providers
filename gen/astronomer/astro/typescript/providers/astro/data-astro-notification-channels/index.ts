// https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstroNotificationChannelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#channel_types DataAstroNotificationChannels#channel_types}
  */
  readonly channelTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#deployment_ids DataAstroNotificationChannels#deployment_ids}
  */
  readonly deploymentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#entity_type DataAstroNotificationChannels#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#notification_channel_ids DataAstroNotificationChannels#notification_channel_ids}
  */
  readonly notificationChannelIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#workspace_ids DataAstroNotificationChannels#workspace_ids}
  */
  readonly workspaceIds?: string[];
}
export interface DataAstroNotificationChannelsNotificationChannelsCreatedBy {
}

export function dataAstroNotificationChannelsNotificationChannelsCreatedByToTerraform(struct?: DataAstroNotificationChannelsNotificationChannelsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroNotificationChannelsNotificationChannelsCreatedByToHclTerraform(struct?: DataAstroNotificationChannelsNotificationChannelsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroNotificationChannelsNotificationChannelsCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroNotificationChannelsNotificationChannelsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroNotificationChannelsNotificationChannelsCreatedBy | undefined) {
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
export interface DataAstroNotificationChannelsNotificationChannelsDefinition {
}

export function dataAstroNotificationChannelsNotificationChannelsDefinitionToTerraform(struct?: DataAstroNotificationChannelsNotificationChannelsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroNotificationChannelsNotificationChannelsDefinitionToHclTerraform(struct?: DataAstroNotificationChannelsNotificationChannelsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroNotificationChannelsNotificationChannelsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroNotificationChannelsNotificationChannelsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroNotificationChannelsNotificationChannelsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // dag_id - computed: true, optional: false, required: false
  public get dagId() {
    return this.getStringAttribute('dag_id');
  }

  // deployment_api_token - computed: true, optional: false, required: false
  public get deploymentApiToken() {
    return this.getStringAttribute('deployment_api_token');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // integration_key - computed: true, optional: false, required: false
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}
export interface DataAstroNotificationChannelsNotificationChannelsUpdatedBy {
}

export function dataAstroNotificationChannelsNotificationChannelsUpdatedByToTerraform(struct?: DataAstroNotificationChannelsNotificationChannelsUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroNotificationChannelsNotificationChannelsUpdatedByToHclTerraform(struct?: DataAstroNotificationChannelsNotificationChannelsUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroNotificationChannelsNotificationChannelsUpdatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroNotificationChannelsNotificationChannelsUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroNotificationChannelsNotificationChannelsUpdatedBy | undefined) {
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
export interface DataAstroNotificationChannelsNotificationChannels {
  /**
  * The notification channel's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#id DataAstroNotificationChannels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataAstroNotificationChannelsNotificationChannelsToTerraform(struct?: DataAstroNotificationChannelsNotificationChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataAstroNotificationChannelsNotificationChannelsToHclTerraform(struct?: DataAstroNotificationChannelsNotificationChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAstroNotificationChannelsNotificationChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAstroNotificationChannelsNotificationChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroNotificationChannelsNotificationChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataAstroNotificationChannelsNotificationChannelsCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataAstroNotificationChannelsNotificationChannelsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataAstroNotificationChannelsNotificationChannelsUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataAstroNotificationChannelsNotificationChannelsList extends cdktf.ComplexList {
  public internalValue? : DataAstroNotificationChannelsNotificationChannels[] | cdktf.IResolvable

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
  public get(index: number): DataAstroNotificationChannelsNotificationChannelsOutputReference {
    return new DataAstroNotificationChannelsNotificationChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels astro_notification_channels}
*/
export class DataAstroNotificationChannels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_notification_channels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstroNotificationChannels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstroNotificationChannels to import
  * @param importFromId The id of the existing DataAstroNotificationChannels that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstroNotificationChannels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_notification_channels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/data-sources/notification_channels astro_notification_channels} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstroNotificationChannelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAstroNotificationChannelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'astro_notification_channels',
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
    this._channelTypes = config.channelTypes;
    this._deploymentIds = config.deploymentIds;
    this._entityType = config.entityType;
    this._notificationChannelIds = config.notificationChannelIds;
    this._workspaceIds = config.workspaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_types - computed: false, optional: true, required: false
  private _channelTypes?: string[]; 
  public get channelTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_types'));
  }
  public set channelTypes(value: string[]) {
    this._channelTypes = value;
  }
  public resetChannelTypes() {
    this._channelTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTypesInput() {
    return this._channelTypes;
  }

  // deployment_ids - computed: false, optional: true, required: false
  private _deploymentIds?: string[]; 
  public get deploymentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_ids'));
  }
  public set deploymentIds(value: string[]) {
    this._deploymentIds = value;
  }
  public resetDeploymentIds() {
    this._deploymentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdsInput() {
    return this._deploymentIds;
  }

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // notification_channel_ids - computed: false, optional: true, required: false
  private _notificationChannelIds?: string[]; 
  public get notificationChannelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_channel_ids'));
  }
  public set notificationChannelIds(value: string[]) {
    this._notificationChannelIds = value;
  }
  public resetNotificationChannelIds() {
    this._notificationChannelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelIdsInput() {
    return this._notificationChannelIds;
  }

  // notification_channels - computed: true, optional: false, required: false
  private _notificationChannels = new DataAstroNotificationChannelsNotificationChannelsList(this, "notification_channels", true);
  public get notificationChannels() {
    return this._notificationChannels;
  }

  // workspace_ids - computed: false, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channelTypes),
      deployment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deploymentIds),
      entity_type: cdktf.stringToTerraform(this._entityType),
      notification_channel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationChannelIds),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channelTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deployment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deploymentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_channel_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationChannelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
