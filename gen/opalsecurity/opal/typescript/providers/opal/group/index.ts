// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the owner of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#admin_owner_id Group#admin_owner_id}
  */
  readonly adminOwnerId?: string;
  /**
  * The ID of the app for the group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#app_id Group#app_id}
  */
  readonly appId: string;
  /**
  * Custom request notification sent upon request approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#custom_request_notification Group#custom_request_notification}
  */
  readonly customRequestNotification?: string;
  /**
  * A description of the remote group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * The duration for which access can be extended (in minutes). Deprecated, set the extension duration in the request_configuration you want it to apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#extensions_duration_in_minutes Group#extensions_duration_in_minutes}
  */
  readonly extensionsDurationInMinutes?: number;
  /**
  * A list of User IDs for the group leaders of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_leader_user_ids Group#group_leader_user_ids}
  */
  readonly groupLeaderUserIds?: string[];
  /**
  * The type of the group. must be one of ["ACTIVE_DIRECTORY_GROUP", "AWS_SSO_GROUP", "DATABRICKS_ACCOUNT_GROUP", "DUO_GROUP", "GIT_HUB_TEAM", "GIT_LAB_GROUP", "GOOGLE_GROUPS_GROUP", "GOOGLE_GROUPS_GKE_GROUP", "LDAP_GROUP", "OKTA_GROUP", "OKTA_GROUP_RULE", "TAILSCALE_GROUP", "OPAL_GROUP", "OPAL_ACCESS_RULE", "AZURE_AD_SECURITY_GROUP", "AZURE_AD_MICROSOFT_365_GROUP", "CONNECTOR_GROUP", "SNOWFLAKE_ROLE", "WORKDAY_USER_SECURITY_GROUP"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_type Group#group_type}
  */
  readonly groupType: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#message_channel_ids Group#message_channel_ids}
  */
  readonly messageChannelIds?: string[];
  /**
  * The name of the remote group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#on_call_schedule_ids Group#on_call_schedule_ids}
  */
  readonly onCallScheduleIds?: string[];
  /**
  * Information that defines the remote group. This replaces the deprecated remote_id and metadata fields. If remote_info is provided, a group will be imported into Opal. For group types that support group creation through Opal, a new group will be created if remote_info is not provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#remote_info Group#remote_info}
  */
  readonly remoteInfo?: GroupRemoteInfo;
  /**
  * The request configuration list of the configuration template. If not provided, the default request configuration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#request_configurations Group#request_configurations}
  */
  readonly requestConfigurations: GroupRequestConfigurations[] | cdktf.IResolvable;
  /**
  * A bool representing whether or not to require MFA for reviewers to approve requests for this group. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#require_mfa_to_approve Group#require_mfa_to_approve}
  */
  readonly requireMfaToApprove?: boolean | cdktf.IResolvable;
  /**
  * Indicates the level of potential impact misuse or unauthorized access may incur. must be one of ["UNKNOWN", "CRITICAL", "HIGH", "MEDIUM", "LOW", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#risk_sensitivity_override Group#risk_sensitivity_override}
  */
  readonly riskSensitivityOverride?: string;
  /**
  * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#visibility Group#visibility}
  */
  readonly visibility: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#visibility_group_ids Group#visibility_group_ids}
  */
  readonly visibilityGroupIds?: string[];
}
export interface GroupLastSuccessfulSync {
}

export function groupLastSuccessfulSyncToTerraform(struct?: GroupLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupLastSuccessfulSyncToHclTerraform(struct?: GroupLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupLastSuccessfulSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupLastSuccessfulSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupLastSuccessfulSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface GroupMessageChannelsChannels {
}

export function groupMessageChannelsChannelsToTerraform(struct?: GroupMessageChannelsChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupMessageChannelsChannelsToHclTerraform(struct?: GroupMessageChannelsChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupMessageChannelsChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMessageChannelsChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMessageChannelsChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // third_party_provider - computed: true, optional: false, required: false
  public get thirdPartyProvider() {
    return this.getStringAttribute('third_party_provider');
  }
}

export class GroupMessageChannelsChannelsList extends cdktf.ComplexList {

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
  public get(index: number): GroupMessageChannelsChannelsOutputReference {
    return new GroupMessageChannelsChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupMessageChannels {
}

export function groupMessageChannelsToTerraform(struct?: GroupMessageChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupMessageChannelsToHclTerraform(struct?: GroupMessageChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupMessageChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMessageChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMessageChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channels - computed: true, optional: false, required: false
  private _channels = new GroupMessageChannelsChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }

  // message_channel_ids - computed: true, optional: false, required: false
  public get messageChannelIds() {
    return this.getListAttribute('message_channel_ids');
  }
}
export interface GroupOnCallSchedulesOnCallSchedules {
}

export function groupOnCallSchedulesOnCallSchedulesToTerraform(struct?: GroupOnCallSchedulesOnCallSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOnCallSchedulesOnCallSchedulesToHclTerraform(struct?: GroupOnCallSchedulesOnCallSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOnCallSchedulesOnCallSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOnCallSchedulesOnCallSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOnCallSchedulesOnCallSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // third_party_provider - computed: true, optional: false, required: false
  public get thirdPartyProvider() {
    return this.getStringAttribute('third_party_provider');
  }
}

export class GroupOnCallSchedulesOnCallSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): GroupOnCallSchedulesOnCallSchedulesOutputReference {
    return new GroupOnCallSchedulesOnCallSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupOnCallSchedules {
}

export function groupOnCallSchedulesToTerraform(struct?: GroupOnCallSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupOnCallSchedulesToHclTerraform(struct?: GroupOnCallSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupOnCallSchedulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupOnCallSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOnCallSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_call_schedule_ids - computed: true, optional: false, required: false
  public get onCallScheduleIds() {
    return this.getListAttribute('on_call_schedule_ids');
  }

  // on_call_schedules - computed: true, optional: false, required: false
  private _onCallSchedules = new GroupOnCallSchedulesOnCallSchedulesList(this, "on_call_schedules", false);
  public get onCallSchedules() {
    return this._onCallSchedules;
  }
}
export interface GroupRemoteInfoActiveDirectoryGroup {
  /**
  * The id of the Google group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoActiveDirectoryGroupToTerraform(struct?: GroupRemoteInfoActiveDirectoryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoActiveDirectoryGroupToHclTerraform(struct?: GroupRemoteInfoActiveDirectoryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoActiveDirectoryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoActiveDirectoryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoActiveDirectoryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoAwsSsoGroup {
  /**
  * The id of the AWS SSO group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoAwsSsoGroupToTerraform(struct?: GroupRemoteInfoAwsSsoGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoAwsSsoGroupToHclTerraform(struct?: GroupRemoteInfoAwsSsoGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoAwsSsoGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoAwsSsoGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoAwsSsoGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoAzureAdMicrosoft365Group {
  /**
  * The id of the Microsoft Entra ID Microsoft 365 group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoAzureAdMicrosoft365GroupToTerraform(struct?: GroupRemoteInfoAzureAdMicrosoft365Group | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoAzureAdMicrosoft365GroupToHclTerraform(struct?: GroupRemoteInfoAzureAdMicrosoft365Group | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoAzureAdMicrosoft365GroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoAzureAdMicrosoft365Group | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoAzureAdMicrosoft365Group | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoAzureAdSecurityGroup {
  /**
  * The id of the Microsoft Entra ID Security group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoAzureAdSecurityGroupToTerraform(struct?: GroupRemoteInfoAzureAdSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoAzureAdSecurityGroupToHclTerraform(struct?: GroupRemoteInfoAzureAdSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoAzureAdSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoAzureAdSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoAzureAdSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoConnectorGroup {
  /**
  * The id of the Connector group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoConnectorGroupToTerraform(struct?: GroupRemoteInfoConnectorGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoConnectorGroupToHclTerraform(struct?: GroupRemoteInfoConnectorGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoConnectorGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoConnectorGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoConnectorGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoDatabricksAccountGroup {
  /**
  * The id of the Databricks account group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoDatabricksAccountGroupToTerraform(struct?: GroupRemoteInfoDatabricksAccountGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoDatabricksAccountGroupToHclTerraform(struct?: GroupRemoteInfoDatabricksAccountGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoDatabricksAccountGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoDatabricksAccountGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoDatabricksAccountGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoDuoGroup {
  /**
  * The id of the Duo Security group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoDuoGroupToTerraform(struct?: GroupRemoteInfoDuoGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoDuoGroupToHclTerraform(struct?: GroupRemoteInfoDuoGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoDuoGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoDuoGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoDuoGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoGithubTeam {
  /**
  * The slug of the GitHub team. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#team_slug Group#team_slug}
  */
  readonly teamSlug?: string;
}

export function groupRemoteInfoGithubTeamToTerraform(struct?: GroupRemoteInfoGithubTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    team_slug: cdktf.stringToTerraform(struct!.teamSlug),
  }
}


export function groupRemoteInfoGithubTeamToHclTerraform(struct?: GroupRemoteInfoGithubTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    team_slug: {
      value: cdktf.stringToHclTerraform(struct!.teamSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoGithubTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoGithubTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._teamSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamSlug = this._teamSlug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoGithubTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._teamSlug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._teamSlug = value.teamSlug;
    }
  }

  // team_slug - computed: true, optional: true, required: false
  private _teamSlug?: string; 
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }
  public resetTeamSlug() {
    this._teamSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSlugInput() {
    return this._teamSlug;
  }
}
export interface GroupRemoteInfoGitlabGroup {
  /**
  * The id of the Gitlab group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoGitlabGroupToTerraform(struct?: GroupRemoteInfoGitlabGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoGitlabGroupToHclTerraform(struct?: GroupRemoteInfoGitlabGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoGitlabGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoGitlabGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoGitlabGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoGoogleGroup {
  /**
  * The id of the Google group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoGoogleGroupToTerraform(struct?: GroupRemoteInfoGoogleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoGoogleGroupToHclTerraform(struct?: GroupRemoteInfoGoogleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoGoogleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoGoogleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoGoogleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoLdapGroup {
  /**
  * The id of the LDAP group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoLdapGroupToTerraform(struct?: GroupRemoteInfoLdapGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoLdapGroupToHclTerraform(struct?: GroupRemoteInfoLdapGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoLdapGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoLdapGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoLdapGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoOktaGroup {
  /**
  * The id of the Okta Directory group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoOktaGroupToTerraform(struct?: GroupRemoteInfoOktaGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoOktaGroupToHclTerraform(struct?: GroupRemoteInfoOktaGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoOktaGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoOktaGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoOktaGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoOktaGroupRule {
  /**
  * The id of the Okta group rule. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#rule_id Group#rule_id}
  */
  readonly ruleId?: string;
}

export function groupRemoteInfoOktaGroupRuleToTerraform(struct?: GroupRemoteInfoOktaGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
  }
}


export function groupRemoteInfoOktaGroupRuleToHclTerraform(struct?: GroupRemoteInfoOktaGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoOktaGroupRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoOktaGroupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoOktaGroupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleId = value.ruleId;
    }
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}
export interface GroupRemoteInfoSnowflakeRole {
  /**
  * The id of the Snowflake role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#role_id Group#role_id}
  */
  readonly roleId?: string;
}

export function groupRemoteInfoSnowflakeRoleToTerraform(struct?: GroupRemoteInfoSnowflakeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function groupRemoteInfoSnowflakeRoleToHclTerraform(struct?: GroupRemoteInfoSnowflakeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoSnowflakeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoSnowflakeRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoSnowflakeRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface GroupRemoteInfoTailscaleGroup {
  /**
  * The id of the Tailscale group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoTailscaleGroupToTerraform(struct?: GroupRemoteInfoTailscaleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoTailscaleGroupToHclTerraform(struct?: GroupRemoteInfoTailscaleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoTailscaleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoTailscaleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoTailscaleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfoWorkdayUserSecurityGroup {
  /**
  * The id of the Workday User Security group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
}

export function groupRemoteInfoWorkdayUserSecurityGroupToTerraform(struct?: GroupRemoteInfoWorkdayUserSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function groupRemoteInfoWorkdayUserSecurityGroupToHclTerraform(struct?: GroupRemoteInfoWorkdayUserSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoWorkdayUserSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfoWorkdayUserSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfoWorkdayUserSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface GroupRemoteInfo {
  /**
  * Remote info for Active Directory group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#active_directory_group Group#active_directory_group}
  */
  readonly activeDirectoryGroup?: GroupRemoteInfoActiveDirectoryGroup;
  /**
  * Remote info for AWS SSO group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#aws_sso_group Group#aws_sso_group}
  */
  readonly awsSsoGroup?: GroupRemoteInfoAwsSsoGroup;
  /**
  * Remote info for Microsoft Entra ID Microsoft 365 group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#azure_ad_microsoft_365_group Group#azure_ad_microsoft_365_group}
  */
  readonly azureAdMicrosoft365Group?: GroupRemoteInfoAzureAdMicrosoft365Group;
  /**
  * Remote info for Microsoft Entra ID Security group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#azure_ad_security_group Group#azure_ad_security_group}
  */
  readonly azureAdSecurityGroup?: GroupRemoteInfoAzureAdSecurityGroup;
  /**
  * Remote info for Connector group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#connector_group Group#connector_group}
  */
  readonly connectorGroup?: GroupRemoteInfoConnectorGroup;
  /**
  * Remote info for Databricks account group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#databricks_account_group Group#databricks_account_group}
  */
  readonly databricksAccountGroup?: GroupRemoteInfoDatabricksAccountGroup;
  /**
  * Remote info for Duo Security group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#duo_group Group#duo_group}
  */
  readonly duoGroup?: GroupRemoteInfoDuoGroup;
  /**
  * Remote info for GitHub team. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#github_team Group#github_team}
  */
  readonly githubTeam?: GroupRemoteInfoGithubTeam;
  /**
  * Remote info for Gitlab group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#gitlab_group Group#gitlab_group}
  */
  readonly gitlabGroup?: GroupRemoteInfoGitlabGroup;
  /**
  * Remote info for Google group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#google_group Group#google_group}
  */
  readonly googleGroup?: GroupRemoteInfoGoogleGroup;
  /**
  * Remote info for LDAP group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#ldap_group Group#ldap_group}
  */
  readonly ldapGroup?: GroupRemoteInfoLdapGroup;
  /**
  * Remote info for Okta Directory group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#okta_group Group#okta_group}
  */
  readonly oktaGroup?: GroupRemoteInfoOktaGroup;
  /**
  * Remote info for Okta Directory group rule. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#okta_group_rule Group#okta_group_rule}
  */
  readonly oktaGroupRule?: GroupRemoteInfoOktaGroupRule;
  /**
  * Remote info for Snowflake role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#snowflake_role Group#snowflake_role}
  */
  readonly snowflakeRole?: GroupRemoteInfoSnowflakeRole;
  /**
  * Remote info for Tailscale group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#tailscale_group Group#tailscale_group}
  */
  readonly tailscaleGroup?: GroupRemoteInfoTailscaleGroup;
  /**
  * Remote info for Workday User Security group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#workday_user_security_group Group#workday_user_security_group}
  */
  readonly workdayUserSecurityGroup?: GroupRemoteInfoWorkdayUserSecurityGroup;
}

export function groupRemoteInfoToTerraform(struct?: GroupRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_group: groupRemoteInfoActiveDirectoryGroupToTerraform(struct!.activeDirectoryGroup),
    aws_sso_group: groupRemoteInfoAwsSsoGroupToTerraform(struct!.awsSsoGroup),
    azure_ad_microsoft_365_group: groupRemoteInfoAzureAdMicrosoft365GroupToTerraform(struct!.azureAdMicrosoft365Group),
    azure_ad_security_group: groupRemoteInfoAzureAdSecurityGroupToTerraform(struct!.azureAdSecurityGroup),
    connector_group: groupRemoteInfoConnectorGroupToTerraform(struct!.connectorGroup),
    databricks_account_group: groupRemoteInfoDatabricksAccountGroupToTerraform(struct!.databricksAccountGroup),
    duo_group: groupRemoteInfoDuoGroupToTerraform(struct!.duoGroup),
    github_team: groupRemoteInfoGithubTeamToTerraform(struct!.githubTeam),
    gitlab_group: groupRemoteInfoGitlabGroupToTerraform(struct!.gitlabGroup),
    google_group: groupRemoteInfoGoogleGroupToTerraform(struct!.googleGroup),
    ldap_group: groupRemoteInfoLdapGroupToTerraform(struct!.ldapGroup),
    okta_group: groupRemoteInfoOktaGroupToTerraform(struct!.oktaGroup),
    okta_group_rule: groupRemoteInfoOktaGroupRuleToTerraform(struct!.oktaGroupRule),
    snowflake_role: groupRemoteInfoSnowflakeRoleToTerraform(struct!.snowflakeRole),
    tailscale_group: groupRemoteInfoTailscaleGroupToTerraform(struct!.tailscaleGroup),
    workday_user_security_group: groupRemoteInfoWorkdayUserSecurityGroupToTerraform(struct!.workdayUserSecurityGroup),
  }
}


export function groupRemoteInfoToHclTerraform(struct?: GroupRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_group: {
      value: groupRemoteInfoActiveDirectoryGroupToHclTerraform(struct!.activeDirectoryGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoActiveDirectoryGroup",
    },
    aws_sso_group: {
      value: groupRemoteInfoAwsSsoGroupToHclTerraform(struct!.awsSsoGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoAwsSsoGroup",
    },
    azure_ad_microsoft_365_group: {
      value: groupRemoteInfoAzureAdMicrosoft365GroupToHclTerraform(struct!.azureAdMicrosoft365Group),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoAzureAdMicrosoft365Group",
    },
    azure_ad_security_group: {
      value: groupRemoteInfoAzureAdSecurityGroupToHclTerraform(struct!.azureAdSecurityGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoAzureAdSecurityGroup",
    },
    connector_group: {
      value: groupRemoteInfoConnectorGroupToHclTerraform(struct!.connectorGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoConnectorGroup",
    },
    databricks_account_group: {
      value: groupRemoteInfoDatabricksAccountGroupToHclTerraform(struct!.databricksAccountGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoDatabricksAccountGroup",
    },
    duo_group: {
      value: groupRemoteInfoDuoGroupToHclTerraform(struct!.duoGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoDuoGroup",
    },
    github_team: {
      value: groupRemoteInfoGithubTeamToHclTerraform(struct!.githubTeam),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoGithubTeam",
    },
    gitlab_group: {
      value: groupRemoteInfoGitlabGroupToHclTerraform(struct!.gitlabGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoGitlabGroup",
    },
    google_group: {
      value: groupRemoteInfoGoogleGroupToHclTerraform(struct!.googleGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoGoogleGroup",
    },
    ldap_group: {
      value: groupRemoteInfoLdapGroupToHclTerraform(struct!.ldapGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoLdapGroup",
    },
    okta_group: {
      value: groupRemoteInfoOktaGroupToHclTerraform(struct!.oktaGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoOktaGroup",
    },
    okta_group_rule: {
      value: groupRemoteInfoOktaGroupRuleToHclTerraform(struct!.oktaGroupRule),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoOktaGroupRule",
    },
    snowflake_role: {
      value: groupRemoteInfoSnowflakeRoleToHclTerraform(struct!.snowflakeRole),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoSnowflakeRole",
    },
    tailscale_group: {
      value: groupRemoteInfoTailscaleGroupToHclTerraform(struct!.tailscaleGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoTailscaleGroup",
    },
    workday_user_security_group: {
      value: groupRemoteInfoWorkdayUserSecurityGroupToHclTerraform(struct!.workdayUserSecurityGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRemoteInfoWorkdayUserSecurityGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRemoteInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRemoteInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryGroup = this._activeDirectoryGroup?.internalValue;
    }
    if (this._awsSsoGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSsoGroup = this._awsSsoGroup?.internalValue;
    }
    if (this._azureAdMicrosoft365Group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdMicrosoft365Group = this._azureAdMicrosoft365Group?.internalValue;
    }
    if (this._azureAdSecurityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAdSecurityGroup = this._azureAdSecurityGroup?.internalValue;
    }
    if (this._connectorGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorGroup = this._connectorGroup?.internalValue;
    }
    if (this._databricksAccountGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksAccountGroup = this._databricksAccountGroup?.internalValue;
    }
    if (this._duoGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duoGroup = this._duoGroup?.internalValue;
    }
    if (this._githubTeam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubTeam = this._githubTeam?.internalValue;
    }
    if (this._gitlabGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabGroup = this._gitlabGroup?.internalValue;
    }
    if (this._googleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleGroup = this._googleGroup?.internalValue;
    }
    if (this._ldapGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapGroup = this._ldapGroup?.internalValue;
    }
    if (this._oktaGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaGroup = this._oktaGroup?.internalValue;
    }
    if (this._oktaGroupRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaGroupRule = this._oktaGroupRule?.internalValue;
    }
    if (this._snowflakeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeRole = this._snowflakeRole?.internalValue;
    }
    if (this._tailscaleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailscaleGroup = this._tailscaleGroup?.internalValue;
    }
    if (this._workdayUserSecurityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdayUserSecurityGroup = this._workdayUserSecurityGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRemoteInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectoryGroup.internalValue = undefined;
      this._awsSsoGroup.internalValue = undefined;
      this._azureAdMicrosoft365Group.internalValue = undefined;
      this._azureAdSecurityGroup.internalValue = undefined;
      this._connectorGroup.internalValue = undefined;
      this._databricksAccountGroup.internalValue = undefined;
      this._duoGroup.internalValue = undefined;
      this._githubTeam.internalValue = undefined;
      this._gitlabGroup.internalValue = undefined;
      this._googleGroup.internalValue = undefined;
      this._ldapGroup.internalValue = undefined;
      this._oktaGroup.internalValue = undefined;
      this._oktaGroupRule.internalValue = undefined;
      this._snowflakeRole.internalValue = undefined;
      this._tailscaleGroup.internalValue = undefined;
      this._workdayUserSecurityGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectoryGroup.internalValue = value.activeDirectoryGroup;
      this._awsSsoGroup.internalValue = value.awsSsoGroup;
      this._azureAdMicrosoft365Group.internalValue = value.azureAdMicrosoft365Group;
      this._azureAdSecurityGroup.internalValue = value.azureAdSecurityGroup;
      this._connectorGroup.internalValue = value.connectorGroup;
      this._databricksAccountGroup.internalValue = value.databricksAccountGroup;
      this._duoGroup.internalValue = value.duoGroup;
      this._githubTeam.internalValue = value.githubTeam;
      this._gitlabGroup.internalValue = value.gitlabGroup;
      this._googleGroup.internalValue = value.googleGroup;
      this._ldapGroup.internalValue = value.ldapGroup;
      this._oktaGroup.internalValue = value.oktaGroup;
      this._oktaGroupRule.internalValue = value.oktaGroupRule;
      this._snowflakeRole.internalValue = value.snowflakeRole;
      this._tailscaleGroup.internalValue = value.tailscaleGroup;
      this._workdayUserSecurityGroup.internalValue = value.workdayUserSecurityGroup;
    }
  }

  // active_directory_group - computed: true, optional: true, required: false
  private _activeDirectoryGroup = new GroupRemoteInfoActiveDirectoryGroupOutputReference(this, "active_directory_group");
  public get activeDirectoryGroup() {
    return this._activeDirectoryGroup;
  }
  public putActiveDirectoryGroup(value: GroupRemoteInfoActiveDirectoryGroup) {
    this._activeDirectoryGroup.internalValue = value;
  }
  public resetActiveDirectoryGroup() {
    this._activeDirectoryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryGroupInput() {
    return this._activeDirectoryGroup.internalValue;
  }

  // aws_sso_group - computed: true, optional: true, required: false
  private _awsSsoGroup = new GroupRemoteInfoAwsSsoGroupOutputReference(this, "aws_sso_group");
  public get awsSsoGroup() {
    return this._awsSsoGroup;
  }
  public putAwsSsoGroup(value: GroupRemoteInfoAwsSsoGroup) {
    this._awsSsoGroup.internalValue = value;
  }
  public resetAwsSsoGroup() {
    this._awsSsoGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSsoGroupInput() {
    return this._awsSsoGroup.internalValue;
  }

  // azure_ad_microsoft_365_group - computed: true, optional: true, required: false
  private _azureAdMicrosoft365Group = new GroupRemoteInfoAzureAdMicrosoft365GroupOutputReference(this, "azure_ad_microsoft_365_group");
  public get azureAdMicrosoft365Group() {
    return this._azureAdMicrosoft365Group;
  }
  public putAzureAdMicrosoft365Group(value: GroupRemoteInfoAzureAdMicrosoft365Group) {
    this._azureAdMicrosoft365Group.internalValue = value;
  }
  public resetAzureAdMicrosoft365Group() {
    this._azureAdMicrosoft365Group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdMicrosoft365GroupInput() {
    return this._azureAdMicrosoft365Group.internalValue;
  }

  // azure_ad_security_group - computed: true, optional: true, required: false
  private _azureAdSecurityGroup = new GroupRemoteInfoAzureAdSecurityGroupOutputReference(this, "azure_ad_security_group");
  public get azureAdSecurityGroup() {
    return this._azureAdSecurityGroup;
  }
  public putAzureAdSecurityGroup(value: GroupRemoteInfoAzureAdSecurityGroup) {
    this._azureAdSecurityGroup.internalValue = value;
  }
  public resetAzureAdSecurityGroup() {
    this._azureAdSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdSecurityGroupInput() {
    return this._azureAdSecurityGroup.internalValue;
  }

  // connector_group - computed: true, optional: true, required: false
  private _connectorGroup = new GroupRemoteInfoConnectorGroupOutputReference(this, "connector_group");
  public get connectorGroup() {
    return this._connectorGroup;
  }
  public putConnectorGroup(value: GroupRemoteInfoConnectorGroup) {
    this._connectorGroup.internalValue = value;
  }
  public resetConnectorGroup() {
    this._connectorGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorGroupInput() {
    return this._connectorGroup.internalValue;
  }

  // databricks_account_group - computed: true, optional: true, required: false
  private _databricksAccountGroup = new GroupRemoteInfoDatabricksAccountGroupOutputReference(this, "databricks_account_group");
  public get databricksAccountGroup() {
    return this._databricksAccountGroup;
  }
  public putDatabricksAccountGroup(value: GroupRemoteInfoDatabricksAccountGroup) {
    this._databricksAccountGroup.internalValue = value;
  }
  public resetDatabricksAccountGroup() {
    this._databricksAccountGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksAccountGroupInput() {
    return this._databricksAccountGroup.internalValue;
  }

  // duo_group - computed: true, optional: true, required: false
  private _duoGroup = new GroupRemoteInfoDuoGroupOutputReference(this, "duo_group");
  public get duoGroup() {
    return this._duoGroup;
  }
  public putDuoGroup(value: GroupRemoteInfoDuoGroup) {
    this._duoGroup.internalValue = value;
  }
  public resetDuoGroup() {
    this._duoGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoGroupInput() {
    return this._duoGroup.internalValue;
  }

  // github_team - computed: true, optional: true, required: false
  private _githubTeam = new GroupRemoteInfoGithubTeamOutputReference(this, "github_team");
  public get githubTeam() {
    return this._githubTeam;
  }
  public putGithubTeam(value: GroupRemoteInfoGithubTeam) {
    this._githubTeam.internalValue = value;
  }
  public resetGithubTeam() {
    this._githubTeam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubTeamInput() {
    return this._githubTeam.internalValue;
  }

  // gitlab_group - computed: true, optional: true, required: false
  private _gitlabGroup = new GroupRemoteInfoGitlabGroupOutputReference(this, "gitlab_group");
  public get gitlabGroup() {
    return this._gitlabGroup;
  }
  public putGitlabGroup(value: GroupRemoteInfoGitlabGroup) {
    this._gitlabGroup.internalValue = value;
  }
  public resetGitlabGroup() {
    this._gitlabGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabGroupInput() {
    return this._gitlabGroup.internalValue;
  }

  // google_group - computed: true, optional: true, required: false
  private _googleGroup = new GroupRemoteInfoGoogleGroupOutputReference(this, "google_group");
  public get googleGroup() {
    return this._googleGroup;
  }
  public putGoogleGroup(value: GroupRemoteInfoGoogleGroup) {
    this._googleGroup.internalValue = value;
  }
  public resetGoogleGroup() {
    this._googleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleGroupInput() {
    return this._googleGroup.internalValue;
  }

  // ldap_group - computed: true, optional: true, required: false
  private _ldapGroup = new GroupRemoteInfoLdapGroupOutputReference(this, "ldap_group");
  public get ldapGroup() {
    return this._ldapGroup;
  }
  public putLdapGroup(value: GroupRemoteInfoLdapGroup) {
    this._ldapGroup.internalValue = value;
  }
  public resetLdapGroup() {
    this._ldapGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupInput() {
    return this._ldapGroup.internalValue;
  }

  // okta_group - computed: true, optional: true, required: false
  private _oktaGroup = new GroupRemoteInfoOktaGroupOutputReference(this, "okta_group");
  public get oktaGroup() {
    return this._oktaGroup;
  }
  public putOktaGroup(value: GroupRemoteInfoOktaGroup) {
    this._oktaGroup.internalValue = value;
  }
  public resetOktaGroup() {
    this._oktaGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaGroupInput() {
    return this._oktaGroup.internalValue;
  }

  // okta_group_rule - computed: true, optional: true, required: false
  private _oktaGroupRule = new GroupRemoteInfoOktaGroupRuleOutputReference(this, "okta_group_rule");
  public get oktaGroupRule() {
    return this._oktaGroupRule;
  }
  public putOktaGroupRule(value: GroupRemoteInfoOktaGroupRule) {
    this._oktaGroupRule.internalValue = value;
  }
  public resetOktaGroupRule() {
    this._oktaGroupRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaGroupRuleInput() {
    return this._oktaGroupRule.internalValue;
  }

  // snowflake_role - computed: true, optional: true, required: false
  private _snowflakeRole = new GroupRemoteInfoSnowflakeRoleOutputReference(this, "snowflake_role");
  public get snowflakeRole() {
    return this._snowflakeRole;
  }
  public putSnowflakeRole(value: GroupRemoteInfoSnowflakeRole) {
    this._snowflakeRole.internalValue = value;
  }
  public resetSnowflakeRole() {
    this._snowflakeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRoleInput() {
    return this._snowflakeRole.internalValue;
  }

  // tailscale_group - computed: true, optional: true, required: false
  private _tailscaleGroup = new GroupRemoteInfoTailscaleGroupOutputReference(this, "tailscale_group");
  public get tailscaleGroup() {
    return this._tailscaleGroup;
  }
  public putTailscaleGroup(value: GroupRemoteInfoTailscaleGroup) {
    this._tailscaleGroup.internalValue = value;
  }
  public resetTailscaleGroup() {
    this._tailscaleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailscaleGroupInput() {
    return this._tailscaleGroup.internalValue;
  }

  // workday_user_security_group - computed: true, optional: true, required: false
  private _workdayUserSecurityGroup = new GroupRemoteInfoWorkdayUserSecurityGroupOutputReference(this, "workday_user_security_group");
  public get workdayUserSecurityGroup() {
    return this._workdayUserSecurityGroup;
  }
  public putWorkdayUserSecurityGroup(value: GroupRemoteInfoWorkdayUserSecurityGroup) {
    this._workdayUserSecurityGroup.internalValue = value;
  }
  public resetWorkdayUserSecurityGroup() {
    this._workdayUserSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdayUserSecurityGroupInput() {
    return this._workdayUserSecurityGroup.internalValue;
  }
}
export interface GroupRequestConfigurationsCondition {
  /**
  * The list of group IDs to match. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#group_ids Group#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * The list of role remote IDs to match. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#role_remote_ids Group#role_remote_ids}
  */
  readonly roleRemoteIds?: string[];
}

export function groupRequestConfigurationsConditionToTerraform(struct?: GroupRequestConfigurationsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    role_remote_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleRemoteIds),
  }
}


export function groupRequestConfigurationsConditionToHclTerraform(struct?: GroupRequestConfigurationsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_remote_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleRemoteIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRequestConfigurationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupRequestConfigurationsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._roleRemoteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRemoteIds = this._roleRemoteIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRequestConfigurationsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIds = undefined;
      this._roleRemoteIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIds = value.groupIds;
      this._roleRemoteIds = value.roleRemoteIds;
    }
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // role_remote_ids - computed: true, optional: true, required: false
  private _roleRemoteIds?: string[]; 
  public get roleRemoteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_remote_ids'));
  }
  public set roleRemoteIds(value: string[]) {
    this._roleRemoteIds = value;
  }
  public resetRoleRemoteIds() {
    this._roleRemoteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRemoteIdsInput() {
    return this._roleRemoteIds;
  }
}
export interface GroupRequestConfigurationsReviewerStages {
  /**
  * The operator of the reviewer stage. Admin and manager approval are also treated as reviewers. Default: "AND"; must be one of ["AND", "OR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#operator Group#operator}
  */
  readonly operator?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#owner_ids Group#owner_ids}
  */
  readonly ownerIds?: string[];
  /**
  * Whether this reviewer stage should require admin approval. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#require_admin_approval Group#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether this reviewer stage should require manager approval. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#require_manager_approval Group#require_manager_approval}
  */
  readonly requireManagerApproval?: boolean | cdktf.IResolvable;
}

export function groupRequestConfigurationsReviewerStagesToTerraform(struct?: GroupRequestConfigurationsReviewerStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    owner_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ownerIds),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_manager_approval: cdktf.booleanToTerraform(struct!.requireManagerApproval),
  }
}


export function groupRequestConfigurationsReviewerStagesToHclTerraform(struct?: GroupRequestConfigurationsReviewerStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ownerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    require_admin_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireAdminApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_manager_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireManagerApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRequestConfigurationsReviewerStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupRequestConfigurationsReviewerStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._ownerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerIds = this._ownerIds;
    }
    if (this._requireAdminApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAdminApproval = this._requireAdminApproval;
    }
    if (this._requireManagerApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireManagerApproval = this._requireManagerApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRequestConfigurationsReviewerStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._ownerIds = undefined;
      this._requireAdminApproval = undefined;
      this._requireManagerApproval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._ownerIds = value.ownerIds;
      this._requireAdminApproval = value.requireAdminApproval;
      this._requireManagerApproval = value.requireManagerApproval;
    }
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // owner_ids - computed: true, optional: true, required: false
  private _ownerIds?: string[]; 
  public get ownerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_ids'));
  }
  public set ownerIds(value: string[]) {
    this._ownerIds = value;
  }
  public resetOwnerIds() {
    this._ownerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdsInput() {
    return this._ownerIds;
  }

  // require_admin_approval - computed: true, optional: true, required: false
  private _requireAdminApproval?: boolean | cdktf.IResolvable; 
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval');
  }
  public set requireAdminApproval(value: boolean | cdktf.IResolvable) {
    this._requireAdminApproval = value;
  }
  public resetRequireAdminApproval() {
    this._requireAdminApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalInput() {
    return this._requireAdminApproval;
  }

  // require_manager_approval - computed: true, optional: true, required: false
  private _requireManagerApproval?: boolean | cdktf.IResolvable; 
  public get requireManagerApproval() {
    return this.getBooleanAttribute('require_manager_approval');
  }
  public set requireManagerApproval(value: boolean | cdktf.IResolvable) {
    this._requireManagerApproval = value;
  }
  public resetRequireManagerApproval() {
    this._requireManagerApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireManagerApprovalInput() {
    return this._requireManagerApproval;
  }
}

export class GroupRequestConfigurationsReviewerStagesList extends cdktf.ComplexList {
  public internalValue? : GroupRequestConfigurationsReviewerStages[] | cdktf.IResolvable

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
  public get(index: number): GroupRequestConfigurationsReviewerStagesOutputReference {
    return new GroupRequestConfigurationsReviewerStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupRequestConfigurations {
  /**
  * A bool representing whether or not to allow requests for this resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#allow_requests Group#allow_requests}
  */
  readonly allowRequests?: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not to automatically approve requests for this resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#auto_approval Group#auto_approval}
  */
  readonly autoApproval?: boolean | cdktf.IResolvable;
  /**
  * The condition for the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#condition Group#condition}
  */
  readonly condition?: GroupRequestConfigurationsCondition;
  /**
  * The duration for which access can be extended (in minutes). Set to 0 to disable extensions. When > 0, extensions are enabled for the specified duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#extensions_duration_in_minutes Group#extensions_duration_in_minutes}
  */
  readonly extensionsDurationInMinutes?: number;
  /**
  * The maximum duration for which the resource can be requested (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#max_duration Group#max_duration}
  */
  readonly maxDuration?: number;
  /**
  * The priority of the request configuration. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#priority Group#priority}
  */
  readonly priority?: number;
  /**
  * The recommended duration for which the resource should be requested (in minutes). -1 represents an indefinite duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#recommended_duration Group#recommended_duration}
  */
  readonly recommendedDuration?: number;
  /**
  * The ID of the associated request template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#request_template_id Group#request_template_id}
  */
  readonly requestTemplateId?: string;
  /**
  * A bool representing whether or not to require MFA for requesting access to this resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#require_mfa_to_request Group#require_mfa_to_request}
  */
  readonly requireMfaToRequest?: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not access requests to the resource require an access ticket. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#require_support_ticket Group#require_support_ticket}
  */
  readonly requireSupportTicket?: boolean | cdktf.IResolvable;
  /**
  * The list of reviewer stages for the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#reviewer_stages Group#reviewer_stages}
  */
  readonly reviewerStages?: GroupRequestConfigurationsReviewerStages[] | cdktf.IResolvable;
}

export function groupRequestConfigurationsToTerraform(struct?: GroupRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_requests: cdktf.booleanToTerraform(struct!.allowRequests),
    auto_approval: cdktf.booleanToTerraform(struct!.autoApproval),
    condition: groupRequestConfigurationsConditionToTerraform(struct!.condition),
    extensions_duration_in_minutes: cdktf.numberToTerraform(struct!.extensionsDurationInMinutes),
    max_duration: cdktf.numberToTerraform(struct!.maxDuration),
    priority: cdktf.numberToTerraform(struct!.priority),
    recommended_duration: cdktf.numberToTerraform(struct!.recommendedDuration),
    request_template_id: cdktf.stringToTerraform(struct!.requestTemplateId),
    require_mfa_to_request: cdktf.booleanToTerraform(struct!.requireMfaToRequest),
    require_support_ticket: cdktf.booleanToTerraform(struct!.requireSupportTicket),
    reviewer_stages: cdktf.listMapper(groupRequestConfigurationsReviewerStagesToTerraform, false)(struct!.reviewerStages),
  }
}


export function groupRequestConfigurationsToHclTerraform(struct?: GroupRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_requests: {
      value: cdktf.booleanToHclTerraform(struct!.allowRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_approval: {
      value: cdktf.booleanToHclTerraform(struct!.autoApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: groupRequestConfigurationsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupRequestConfigurationsCondition",
    },
    extensions_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.extensionsDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recommended_duration: {
      value: cdktf.numberToHclTerraform(struct!.recommendedDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_template_id: {
      value: cdktf.stringToHclTerraform(struct!.requestTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_mfa_to_request: {
      value: cdktf.booleanToHclTerraform(struct!.requireMfaToRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_support_ticket: {
      value: cdktf.booleanToHclTerraform(struct!.requireSupportTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reviewer_stages: {
      value: cdktf.listMapperHcl(groupRequestConfigurationsReviewerStagesToHclTerraform, false)(struct!.reviewerStages),
      isBlock: true,
      type: "list",
      storageClassType: "GroupRequestConfigurationsReviewerStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupRequestConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupRequestConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRequests = this._allowRequests;
    }
    if (this._autoApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproval = this._autoApproval;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._extensionsDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionsDurationInMinutes = this._extensionsDurationInMinutes;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._recommendedDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedDuration = this._recommendedDuration;
    }
    if (this._requestTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplateId = this._requestTemplateId;
    }
    if (this._requireMfaToRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMfaToRequest = this._requireMfaToRequest;
    }
    if (this._requireSupportTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSupportTicket = this._requireSupportTicket;
    }
    if (this._reviewerStages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerStages = this._reviewerStages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupRequestConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRequests = undefined;
      this._autoApproval = undefined;
      this._condition.internalValue = undefined;
      this._extensionsDurationInMinutes = undefined;
      this._maxDuration = undefined;
      this._priority = undefined;
      this._recommendedDuration = undefined;
      this._requestTemplateId = undefined;
      this._requireMfaToRequest = undefined;
      this._requireSupportTicket = undefined;
      this._reviewerStages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRequests = value.allowRequests;
      this._autoApproval = value.autoApproval;
      this._condition.internalValue = value.condition;
      this._extensionsDurationInMinutes = value.extensionsDurationInMinutes;
      this._maxDuration = value.maxDuration;
      this._priority = value.priority;
      this._recommendedDuration = value.recommendedDuration;
      this._requestTemplateId = value.requestTemplateId;
      this._requireMfaToRequest = value.requireMfaToRequest;
      this._requireSupportTicket = value.requireSupportTicket;
      this._reviewerStages.internalValue = value.reviewerStages;
    }
  }

  // allow_requests - computed: true, optional: true, required: false
  private _allowRequests?: boolean | cdktf.IResolvable; 
  public get allowRequests() {
    return this.getBooleanAttribute('allow_requests');
  }
  public set allowRequests(value: boolean | cdktf.IResolvable) {
    this._allowRequests = value;
  }
  public resetAllowRequests() {
    this._allowRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRequestsInput() {
    return this._allowRequests;
  }

  // auto_approval - computed: true, optional: true, required: false
  private _autoApproval?: boolean | cdktf.IResolvable; 
  public get autoApproval() {
    return this.getBooleanAttribute('auto_approval');
  }
  public set autoApproval(value: boolean | cdktf.IResolvable) {
    this._autoApproval = value;
  }
  public resetAutoApproval() {
    this._autoApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalInput() {
    return this._autoApproval;
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new GroupRequestConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GroupRequestConfigurationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // extensions_duration_in_minutes - computed: true, optional: true, required: false
  private _extensionsDurationInMinutes?: number; 
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }
  public set extensionsDurationInMinutes(value: number) {
    this._extensionsDurationInMinutes = value;
  }
  public resetExtensionsDurationInMinutes() {
    this._extensionsDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsDurationInMinutesInput() {
    return this._extensionsDurationInMinutes;
  }

  // max_duration - computed: true, optional: true, required: false
  private _maxDuration?: number; 
  public get maxDuration() {
    return this.getNumberAttribute('max_duration');
  }
  public set maxDuration(value: number) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // recommended_duration - computed: true, optional: true, required: false
  private _recommendedDuration?: number; 
  public get recommendedDuration() {
    return this.getNumberAttribute('recommended_duration');
  }
  public set recommendedDuration(value: number) {
    this._recommendedDuration = value;
  }
  public resetRecommendedDuration() {
    this._recommendedDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedDurationInput() {
    return this._recommendedDuration;
  }

  // request_template_id - computed: true, optional: true, required: false
  private _requestTemplateId?: string; 
  public get requestTemplateId() {
    return this.getStringAttribute('request_template_id');
  }
  public set requestTemplateId(value: string) {
    this._requestTemplateId = value;
  }
  public resetRequestTemplateId() {
    this._requestTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateIdInput() {
    return this._requestTemplateId;
  }

  // require_mfa_to_request - computed: true, optional: true, required: false
  private _requireMfaToRequest?: boolean | cdktf.IResolvable; 
  public get requireMfaToRequest() {
    return this.getBooleanAttribute('require_mfa_to_request');
  }
  public set requireMfaToRequest(value: boolean | cdktf.IResolvable) {
    this._requireMfaToRequest = value;
  }
  public resetRequireMfaToRequest() {
    this._requireMfaToRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToRequestInput() {
    return this._requireMfaToRequest;
  }

  // require_support_ticket - computed: true, optional: true, required: false
  private _requireSupportTicket?: boolean | cdktf.IResolvable; 
  public get requireSupportTicket() {
    return this.getBooleanAttribute('require_support_ticket');
  }
  public set requireSupportTicket(value: boolean | cdktf.IResolvable) {
    this._requireSupportTicket = value;
  }
  public resetRequireSupportTicket() {
    this._requireSupportTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSupportTicketInput() {
    return this._requireSupportTicket;
  }

  // reviewer_stages - computed: true, optional: true, required: false
  private _reviewerStages = new GroupRequestConfigurationsReviewerStagesList(this, "reviewer_stages", false);
  public get reviewerStages() {
    return this._reviewerStages;
  }
  public putReviewerStages(value: GroupRequestConfigurationsReviewerStages[] | cdktf.IResolvable) {
    this._reviewerStages.internalValue = value;
  }
  public resetReviewerStages() {
    this._reviewerStages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerStagesInput() {
    return this._reviewerStages.internalValue;
  }
}

export class GroupRequestConfigurationsList extends cdktf.ComplexList {
  public internalValue? : GroupRequestConfigurations[] | cdktf.IResolvable

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
  public get(index: number): GroupRequestConfigurationsOutputReference {
    return new GroupRequestConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group opal_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/group opal_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminOwnerId = config.adminOwnerId;
    this._appId = config.appId;
    this._customRequestNotification = config.customRequestNotification;
    this._description = config.description;
    this._extensionsDurationInMinutes = config.extensionsDurationInMinutes;
    this._groupLeaderUserIds = config.groupLeaderUserIds;
    this._groupType = config.groupType;
    this._messageChannelIds = config.messageChannelIds;
    this._name = config.name;
    this._onCallScheduleIds = config.onCallScheduleIds;
    this._remoteInfo.internalValue = config.remoteInfo;
    this._requestConfigurations.internalValue = config.requestConfigurations;
    this._requireMfaToApprove = config.requireMfaToApprove;
    this._riskSensitivityOverride = config.riskSensitivityOverride;
    this._visibility = config.visibility;
    this._visibilityGroupIds = config.visibilityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_owner_id - computed: true, optional: true, required: false
  private _adminOwnerId?: string; 
  public get adminOwnerId() {
    return this.getStringAttribute('admin_owner_id');
  }
  public set adminOwnerId(value: string) {
    this._adminOwnerId = value;
  }
  public resetAdminOwnerId() {
    this._adminOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminOwnerIdInput() {
    return this._adminOwnerId;
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // custom_request_notification - computed: true, optional: true, required: false
  private _customRequestNotification?: string; 
  public get customRequestNotification() {
    return this.getStringAttribute('custom_request_notification');
  }
  public set customRequestNotification(value: string) {
    this._customRequestNotification = value;
  }
  public resetCustomRequestNotification() {
    this._customRequestNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestNotificationInput() {
    return this._customRequestNotification;
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

  // extensions_duration_in_minutes - computed: true, optional: true, required: false
  private _extensionsDurationInMinutes?: number; 
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }
  public set extensionsDurationInMinutes(value: number) {
    this._extensionsDurationInMinutes = value;
  }
  public resetExtensionsDurationInMinutes() {
    this._extensionsDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsDurationInMinutesInput() {
    return this._extensionsDurationInMinutes;
  }

  // group_binding_id - computed: true, optional: false, required: false
  public get groupBindingId() {
    return this.getStringAttribute('group_binding_id');
  }

  // group_leader_user_ids - computed: true, optional: true, required: false
  private _groupLeaderUserIds?: string[]; 
  public get groupLeaderUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_leader_user_ids'));
  }
  public set groupLeaderUserIds(value: string[]) {
    this._groupLeaderUserIds = value;
  }
  public resetGroupLeaderUserIds() {
    this._groupLeaderUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLeaderUserIdsInput() {
    return this._groupLeaderUserIds;
  }

  // group_type - computed: false, optional: false, required: true
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_successful_sync - computed: true, optional: false, required: false
  private _lastSuccessfulSync = new GroupLastSuccessfulSyncOutputReference(this, "last_successful_sync");
  public get lastSuccessfulSync() {
    return this._lastSuccessfulSync;
  }

  // message_channel_ids - computed: true, optional: true, required: false
  private _messageChannelIds?: string[]; 
  public get messageChannelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('message_channel_ids'));
  }
  public set messageChannelIds(value: string[]) {
    this._messageChannelIds = value;
  }
  public resetMessageChannelIds() {
    this._messageChannelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageChannelIdsInput() {
    return this._messageChannelIds;
  }

  // message_channels - computed: true, optional: false, required: false
  private _messageChannels = new GroupMessageChannelsOutputReference(this, "message_channels");
  public get messageChannels() {
    return this._messageChannels;
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

  // on_call_schedule_ids - computed: true, optional: true, required: false
  private _onCallScheduleIds?: string[]; 
  public get onCallScheduleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('on_call_schedule_ids'));
  }
  public set onCallScheduleIds(value: string[]) {
    this._onCallScheduleIds = value;
  }
  public resetOnCallScheduleIds() {
    this._onCallScheduleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallScheduleIdsInput() {
    return this._onCallScheduleIds;
  }

  // on_call_schedules - computed: true, optional: false, required: false
  private _onCallSchedules = new GroupOnCallSchedulesOutputReference(this, "on_call_schedules");
  public get onCallSchedules() {
    return this._onCallSchedules;
  }

  // remote_info - computed: true, optional: true, required: false
  private _remoteInfo = new GroupRemoteInfoOutputReference(this, "remote_info");
  public get remoteInfo() {
    return this._remoteInfo;
  }
  public putRemoteInfo(value: GroupRemoteInfo) {
    this._remoteInfo.internalValue = value;
  }
  public resetRemoteInfo() {
    this._remoteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInfoInput() {
    return this._remoteInfo.internalValue;
  }

  // remote_name - computed: true, optional: false, required: false
  public get remoteName() {
    return this.getStringAttribute('remote_name');
  }

  // request_configurations - computed: false, optional: false, required: true
  private _requestConfigurations = new GroupRequestConfigurationsList(this, "request_configurations", false);
  public get requestConfigurations() {
    return this._requestConfigurations;
  }
  public putRequestConfigurations(value: GroupRequestConfigurations[] | cdktf.IResolvable) {
    this._requestConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationsInput() {
    return this._requestConfigurations.internalValue;
  }

  // require_mfa_to_approve - computed: true, optional: true, required: false
  private _requireMfaToApprove?: boolean | cdktf.IResolvable; 
  public get requireMfaToApprove() {
    return this.getBooleanAttribute('require_mfa_to_approve');
  }
  public set requireMfaToApprove(value: boolean | cdktf.IResolvable) {
    this._requireMfaToApprove = value;
  }
  public resetRequireMfaToApprove() {
    this._requireMfaToApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToApproveInput() {
    return this._requireMfaToApprove;
  }

  // risk_sensitivity - computed: true, optional: false, required: false
  public get riskSensitivity() {
    return this.getStringAttribute('risk_sensitivity');
  }

  // risk_sensitivity_override - computed: true, optional: true, required: false
  private _riskSensitivityOverride?: string; 
  public get riskSensitivityOverride() {
    return this.getStringAttribute('risk_sensitivity_override');
  }
  public set riskSensitivityOverride(value: string) {
    this._riskSensitivityOverride = value;
  }
  public resetRiskSensitivityOverride() {
    this._riskSensitivityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskSensitivityOverrideInput() {
    return this._riskSensitivityOverride;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // visibility_group_ids - computed: true, optional: true, required: false
  private _visibilityGroupIds?: string[]; 
  public get visibilityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility_group_ids'));
  }
  public set visibilityGroupIds(value: string[]) {
    this._visibilityGroupIds = value;
  }
  public resetVisibilityGroupIds() {
    this._visibilityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityGroupIdsInput() {
    return this._visibilityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_owner_id: cdktf.stringToTerraform(this._adminOwnerId),
      app_id: cdktf.stringToTerraform(this._appId),
      custom_request_notification: cdktf.stringToTerraform(this._customRequestNotification),
      description: cdktf.stringToTerraform(this._description),
      extensions_duration_in_minutes: cdktf.numberToTerraform(this._extensionsDurationInMinutes),
      group_leader_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupLeaderUserIds),
      group_type: cdktf.stringToTerraform(this._groupType),
      message_channel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messageChannelIds),
      name: cdktf.stringToTerraform(this._name),
      on_call_schedule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onCallScheduleIds),
      remote_info: groupRemoteInfoToTerraform(this._remoteInfo.internalValue),
      request_configurations: cdktf.listMapper(groupRequestConfigurationsToTerraform, false)(this._requestConfigurations.internalValue),
      require_mfa_to_approve: cdktf.booleanToTerraform(this._requireMfaToApprove),
      risk_sensitivity_override: cdktf.stringToTerraform(this._riskSensitivityOverride),
      visibility: cdktf.stringToTerraform(this._visibility),
      visibility_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._visibilityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_owner_id: {
        value: cdktf.stringToHclTerraform(this._adminOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_request_notification: {
        value: cdktf.stringToHclTerraform(this._customRequestNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extensions_duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._extensionsDurationInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_leader_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupLeaderUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_channel_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messageChannelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_call_schedule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onCallScheduleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_info: {
        value: groupRemoteInfoToHclTerraform(this._remoteInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupRemoteInfo",
      },
      request_configurations: {
        value: cdktf.listMapperHcl(groupRequestConfigurationsToHclTerraform, false)(this._requestConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupRequestConfigurationsList",
      },
      require_mfa_to_approve: {
        value: cdktf.booleanToHclTerraform(this._requireMfaToApprove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk_sensitivity_override: {
        value: cdktf.stringToHclTerraform(this._riskSensitivityOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._visibilityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
