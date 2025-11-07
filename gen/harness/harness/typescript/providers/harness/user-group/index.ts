// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#description UserGroup#description}
  */
  readonly description?: string;
  /**
  * The name of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#name UserGroup#name}
  */
  readonly name: string;
  /**
  * ldap_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#ldap_settings UserGroup#ldap_settings}
  */
  readonly ldapSettings?: UserGroupLdapSettings;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#notification_settings UserGroup#notification_settings}
  */
  readonly notificationSettings?: UserGroupNotificationSettings;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#permissions UserGroup#permissions}
  */
  readonly permissions?: UserGroupPermissions;
  /**
  * saml_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#saml_settings UserGroup#saml_settings}
  */
  readonly samlSettings?: UserGroupSamlSettings;
}
export interface UserGroupLdapSettings {
  /**
  * The group DN of the LDAP user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#group_dn UserGroup#group_dn}
  */
  readonly groupDn?: string;
  /**
  * The group name of the LDAP user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#group_name UserGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * The ID of the SSO provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#sso_provider_id UserGroup#sso_provider_id}
  */
  readonly ssoProviderId?: string;
}

export function userGroupLdapSettingsToTerraform(struct?: UserGroupLdapSettingsOutputReference | UserGroupLdapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_dn: cdktf.stringToTerraform(struct!.groupDn),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    sso_provider_id: cdktf.stringToTerraform(struct!.ssoProviderId),
  }
}


export function userGroupLdapSettingsToHclTerraform(struct?: UserGroupLdapSettingsOutputReference | UserGroupLdapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.ssoProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupLdapSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupLdapSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDn = this._groupDn;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ssoProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoProviderId = this._ssoProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupLdapSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupDn = undefined;
      this._groupName = undefined;
      this._ssoProviderId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupDn = value.groupDn;
      this._groupName = value.groupName;
      this._ssoProviderId = value.ssoProviderId;
    }
  }

  // group_dn - computed: false, optional: true, required: false
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  public resetGroupDn() {
    this._groupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // sso_provider_id - computed: false, optional: true, required: false
  private _ssoProviderId?: string; 
  public get ssoProviderId() {
    return this.getStringAttribute('sso_provider_id');
  }
  public set ssoProviderId(value: string) {
    this._ssoProviderId = value;
  }
  public resetSsoProviderId() {
    this._ssoProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoProviderIdInput() {
    return this._ssoProviderId;
  }
}
export interface UserGroupNotificationSettings {
  /**
  * The email addresses of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#group_email_addresses UserGroup#group_email_addresses}
  */
  readonly groupEmailAddresses?: string[];
  /**
  * The Microsoft Teams webhook URL of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#microsoft_teams_webhook_url UserGroup#microsoft_teams_webhook_url}
  */
  readonly microsoftTeamsWebhookUrl?: string;
  /**
  * Indicates whether an email is sent when a new user is added to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#send_mail_to_new_members UserGroup#send_mail_to_new_members}
  */
  readonly sendMailToNewMembers?: boolean | cdktf.IResolvable;
  /**
  * Enable this setting to have notifications sent to the members of this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#send_notifications_to_members UserGroup#send_notifications_to_members}
  */
  readonly sendNotificationsToMembers?: boolean | cdktf.IResolvable;
  /**
  * The Slack channel to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#slack_channel UserGroup#slack_channel}
  */
  readonly slackChannel?: string;
  /**
  * The Slack webhook URL to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#slack_webhook_url UserGroup#slack_webhook_url}
  */
  readonly slackWebhookUrl?: string;
}

export function userGroupNotificationSettingsToTerraform(struct?: UserGroupNotificationSettingsOutputReference | UserGroupNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupEmailAddresses),
    microsoft_teams_webhook_url: cdktf.stringToTerraform(struct!.microsoftTeamsWebhookUrl),
    send_mail_to_new_members: cdktf.booleanToTerraform(struct!.sendMailToNewMembers),
    send_notifications_to_members: cdktf.booleanToTerraform(struct!.sendNotificationsToMembers),
    slack_channel: cdktf.stringToTerraform(struct!.slackChannel),
    slack_webhook_url: cdktf.stringToTerraform(struct!.slackWebhookUrl),
  }
}


export function userGroupNotificationSettingsToHclTerraform(struct?: UserGroupNotificationSettingsOutputReference | UserGroupNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupEmailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    microsoft_teams_webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.microsoftTeamsWebhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_mail_to_new_members: {
      value: cdktf.booleanToHclTerraform(struct!.sendMailToNewMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_notifications_to_members: {
      value: cdktf.booleanToHclTerraform(struct!.sendNotificationsToMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slack_channel: {
      value: cdktf.stringToHclTerraform(struct!.slackChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack_webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.slackWebhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEmailAddresses = this._groupEmailAddresses;
    }
    if (this._microsoftTeamsWebhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftTeamsWebhookUrl = this._microsoftTeamsWebhookUrl;
    }
    if (this._sendMailToNewMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendMailToNewMembers = this._sendMailToNewMembers;
    }
    if (this._sendNotificationsToMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendNotificationsToMembers = this._sendNotificationsToMembers;
    }
    if (this._slackChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackChannel = this._slackChannel;
    }
    if (this._slackWebhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackWebhookUrl = this._slackWebhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupEmailAddresses = undefined;
      this._microsoftTeamsWebhookUrl = undefined;
      this._sendMailToNewMembers = undefined;
      this._sendNotificationsToMembers = undefined;
      this._slackChannel = undefined;
      this._slackWebhookUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupEmailAddresses = value.groupEmailAddresses;
      this._microsoftTeamsWebhookUrl = value.microsoftTeamsWebhookUrl;
      this._sendMailToNewMembers = value.sendMailToNewMembers;
      this._sendNotificationsToMembers = value.sendNotificationsToMembers;
      this._slackChannel = value.slackChannel;
      this._slackWebhookUrl = value.slackWebhookUrl;
    }
  }

  // group_email_addresses - computed: false, optional: true, required: false
  private _groupEmailAddresses?: string[]; 
  public get groupEmailAddresses() {
    return this.getListAttribute('group_email_addresses');
  }
  public set groupEmailAddresses(value: string[]) {
    this._groupEmailAddresses = value;
  }
  public resetGroupEmailAddresses() {
    this._groupEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEmailAddressesInput() {
    return this._groupEmailAddresses;
  }

  // microsoft_teams_webhook_url - computed: false, optional: true, required: false
  private _microsoftTeamsWebhookUrl?: string; 
  public get microsoftTeamsWebhookUrl() {
    return this.getStringAttribute('microsoft_teams_webhook_url');
  }
  public set microsoftTeamsWebhookUrl(value: string) {
    this._microsoftTeamsWebhookUrl = value;
  }
  public resetMicrosoftTeamsWebhookUrl() {
    this._microsoftTeamsWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsWebhookUrlInput() {
    return this._microsoftTeamsWebhookUrl;
  }

  // send_mail_to_new_members - computed: false, optional: true, required: false
  private _sendMailToNewMembers?: boolean | cdktf.IResolvable; 
  public get sendMailToNewMembers() {
    return this.getBooleanAttribute('send_mail_to_new_members');
  }
  public set sendMailToNewMembers(value: boolean | cdktf.IResolvable) {
    this._sendMailToNewMembers = value;
  }
  public resetSendMailToNewMembers() {
    this._sendMailToNewMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMailToNewMembersInput() {
    return this._sendMailToNewMembers;
  }

  // send_notifications_to_members - computed: false, optional: true, required: false
  private _sendNotificationsToMembers?: boolean | cdktf.IResolvable; 
  public get sendNotificationsToMembers() {
    return this.getBooleanAttribute('send_notifications_to_members');
  }
  public set sendNotificationsToMembers(value: boolean | cdktf.IResolvable) {
    this._sendNotificationsToMembers = value;
  }
  public resetSendNotificationsToMembers() {
    this._sendNotificationsToMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationsToMembersInput() {
    return this._sendNotificationsToMembers;
  }

  // slack_channel - computed: false, optional: true, required: false
  private _slackChannel?: string; 
  public get slackChannel() {
    return this.getStringAttribute('slack_channel');
  }
  public set slackChannel(value: string) {
    this._slackChannel = value;
  }
  public resetSlackChannel() {
    this._slackChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelInput() {
    return this._slackChannel;
  }

  // slack_webhook_url - computed: false, optional: true, required: false
  private _slackWebhookUrl?: string; 
  public get slackWebhookUrl() {
    return this.getStringAttribute('slack_webhook_url');
  }
  public set slackWebhookUrl(value: string) {
    this._slackWebhookUrl = value;
  }
  public resetSlackWebhookUrl() {
    this._slackWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackWebhookUrlInput() {
    return this._slackWebhookUrl;
  }
}
export interface UserGroupPermissionsAppPermissionsAll {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE, EXECUTE_WORKFLOW, EXECUTE_PIPELINE, ROLLBACK_WORKFLOW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
}

export function userGroupPermissionsAppPermissionsAllToTerraform(struct?: UserGroupPermissionsAppPermissionsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
  }
}


export function userGroupPermissionsAppPermissionsAllToHclTerraform(struct?: UserGroupPermissionsAppPermissionsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }
}

export class UserGroupPermissionsAppPermissionsAllList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsAll[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsAllOutputReference {
    return new UserGroupPermissionsAppPermissionsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsDeployment {
  /**
  * The actions allowed to be performed. Valid options are READ, EXECUTE_WORKFLOW, EXECUTE_PIPELINE, ROLLBACK_WORKFLOW, ABORT_WORKFLOW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The environment IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#env_ids UserGroup#env_ids}
  */
  readonly envIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#filters UserGroup#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsDeploymentToTerraform(struct?: UserGroupPermissionsAppPermissionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    env_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsDeploymentToHclTerraform(struct?: UserGroupPermissionsAppPermissionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    env_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._envIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.envIds = this._envIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._envIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._envIds = value.envIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // env_ids - computed: false, optional: true, required: false
  private _envIds?: string[]; 
  public get envIds() {
    return cdktf.Fn.tolist(this.getListAttribute('env_ids'));
  }
  public set envIds(value: string[]) {
    this._envIds = value;
  }
  public resetEnvIds() {
    this._envIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdsInput() {
    return this._envIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsDeploymentList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsDeployment[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsDeploymentOutputReference {
    return new UserGroupPermissionsAppPermissionsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsEnvironment {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The environment IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#env_ids UserGroup#env_ids}
  */
  readonly envIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#filters UserGroup#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsEnvironmentToTerraform(struct?: UserGroupPermissionsAppPermissionsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    env_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsEnvironmentToHclTerraform(struct?: UserGroupPermissionsAppPermissionsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    env_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._envIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.envIds = this._envIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._envIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._envIds = value.envIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // env_ids - computed: false, optional: true, required: false
  private _envIds?: string[]; 
  public get envIds() {
    return cdktf.Fn.tolist(this.getListAttribute('env_ids'));
  }
  public set envIds(value: string[]) {
    this._envIds = value;
  }
  public resetEnvIds() {
    this._envIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdsInput() {
    return this._envIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsEnvironmentList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsEnvironment[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsEnvironmentOutputReference {
    return new UserGroupPermissionsAppPermissionsEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsPipeline {
  /**
  * The actions allowed to be performed. Valid options are [CREATE READ UPDATE DELETE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The environment IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#env_ids UserGroup#env_ids}
  */
  readonly envIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_PIPELINES, PRODUCTION_PIPELINES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#filters UserGroup#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsPipelineToTerraform(struct?: UserGroupPermissionsAppPermissionsPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    env_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsPipelineToHclTerraform(struct?: UserGroupPermissionsAppPermissionsPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    env_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsPipeline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._envIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.envIds = this._envIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsPipeline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._envIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._envIds = value.envIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // env_ids - computed: false, optional: true, required: false
  private _envIds?: string[]; 
  public get envIds() {
    return cdktf.Fn.tolist(this.getListAttribute('env_ids'));
  }
  public set envIds(value: string[]) {
    this._envIds = value;
  }
  public resetEnvIds() {
    this._envIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdsInput() {
    return this._envIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsPipelineList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsPipeline[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsPipelineOutputReference {
    return new UserGroupPermissionsAppPermissionsPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsProvisioner {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The provisioner IDs to which the permission applies. Leave empty to apply to all provisioners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#provisioner_ids UserGroup#provisioner_ids}
  */
  readonly provisionerIds?: string[];
}

export function userGroupPermissionsAppPermissionsProvisionerToTerraform(struct?: UserGroupPermissionsAppPermissionsProvisioner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    provisioner_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provisionerIds),
  }
}


export function userGroupPermissionsAppPermissionsProvisionerToHclTerraform(struct?: UserGroupPermissionsAppPermissionsProvisioner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    provisioner_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provisionerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsProvisionerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsProvisioner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._provisionerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerIds = this._provisionerIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsProvisioner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._provisionerIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._provisionerIds = value.provisionerIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // provisioner_ids - computed: false, optional: true, required: false
  private _provisionerIds?: string[]; 
  public get provisionerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('provisioner_ids'));
  }
  public set provisionerIds(value: string[]) {
    this._provisionerIds = value;
  }
  public resetProvisionerIds() {
    this._provisionerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerIdsInput() {
    return this._provisionerIds;
  }
}

export class UserGroupPermissionsAppPermissionsProvisionerList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsProvisioner[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsProvisionerOutputReference {
    return new UserGroupPermissionsAppPermissionsProvisionerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsService {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The service IDs to which the permission applies. Leave empty to apply to all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#service_ids UserGroup#service_ids}
  */
  readonly serviceIds?: string[];
}

export function userGroupPermissionsAppPermissionsServiceToTerraform(struct?: UserGroupPermissionsAppPermissionsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIds),
  }
}


export function userGroupPermissionsAppPermissionsServiceToHclTerraform(struct?: UserGroupPermissionsAppPermissionsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._serviceIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._serviceIds = value.serviceIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_ids'));
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }
}

export class UserGroupPermissionsAppPermissionsServiceList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsService[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsServiceOutputReference {
    return new UserGroupPermissionsAppPermissionsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsTemplate {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The template IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#template_ids UserGroup#template_ids}
  */
  readonly templateIds?: string[];
}

export function userGroupPermissionsAppPermissionsTemplateToTerraform(struct?: UserGroupPermissionsAppPermissionsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateIds),
  }
}


export function userGroupPermissionsAppPermissionsTemplateToHclTerraform(struct?: UserGroupPermissionsAppPermissionsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._templateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIds = this._templateIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._templateIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._templateIds = value.templateIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // template_ids - computed: false, optional: true, required: false
  private _templateIds?: string[]; 
  public get templateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('template_ids'));
  }
  public set templateIds(value: string[]) {
    this._templateIds = value;
  }
  public resetTemplateIds() {
    this._templateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdsInput() {
    return this._templateIds;
  }
}

export class UserGroupPermissionsAppPermissionsTemplateList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsTemplate[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsTemplateOutputReference {
    return new UserGroupPermissionsAppPermissionsTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsWorkflow {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#actions UserGroup#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_ids UserGroup#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_WORKFLOWS, PRODUCTION_WORKFLOWS, WORKFLOW_TEMPLATES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#filters UserGroup#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsWorkflowToTerraform(struct?: UserGroupPermissionsAppPermissionsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsWorkflowToHclTerraform(struct?: UserGroupPermissionsAppPermissionsWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsWorkflowList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsWorkflow[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsWorkflowOutputReference {
    return new UserGroupPermissionsAppPermissionsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissions {
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#all UserGroup#all}
  */
  readonly all?: UserGroupPermissionsAppPermissionsAll[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#deployment UserGroup#deployment}
  */
  readonly deployment?: UserGroupPermissionsAppPermissionsDeployment[] | cdktf.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#environment UserGroup#environment}
  */
  readonly environment?: UserGroupPermissionsAppPermissionsEnvironment[] | cdktf.IResolvable;
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#pipeline UserGroup#pipeline}
  */
  readonly pipeline?: UserGroupPermissionsAppPermissionsPipeline[] | cdktf.IResolvable;
  /**
  * provisioner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#provisioner UserGroup#provisioner}
  */
  readonly provisioner?: UserGroupPermissionsAppPermissionsProvisioner[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#service UserGroup#service}
  */
  readonly service?: UserGroupPermissionsAppPermissionsService[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#template UserGroup#template}
  */
  readonly template?: UserGroupPermissionsAppPermissionsTemplate[] | cdktf.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#workflow UserGroup#workflow}
  */
  readonly workflow?: UserGroupPermissionsAppPermissionsWorkflow[] | cdktf.IResolvable;
}

export function userGroupPermissionsAppPermissionsToTerraform(struct?: UserGroupPermissionsAppPermissionsOutputReference | UserGroupPermissionsAppPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(userGroupPermissionsAppPermissionsAllToTerraform, true)(struct!.all),
    deployment: cdktf.listMapper(userGroupPermissionsAppPermissionsDeploymentToTerraform, true)(struct!.deployment),
    environment: cdktf.listMapper(userGroupPermissionsAppPermissionsEnvironmentToTerraform, true)(struct!.environment),
    pipeline: cdktf.listMapper(userGroupPermissionsAppPermissionsPipelineToTerraform, true)(struct!.pipeline),
    provisioner: cdktf.listMapper(userGroupPermissionsAppPermissionsProvisionerToTerraform, true)(struct!.provisioner),
    service: cdktf.listMapper(userGroupPermissionsAppPermissionsServiceToTerraform, true)(struct!.service),
    template: cdktf.listMapper(userGroupPermissionsAppPermissionsTemplateToTerraform, true)(struct!.template),
    workflow: cdktf.listMapper(userGroupPermissionsAppPermissionsWorkflowToTerraform, true)(struct!.workflow),
  }
}


export function userGroupPermissionsAppPermissionsToHclTerraform(struct?: UserGroupPermissionsAppPermissionsOutputReference | UserGroupPermissionsAppPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsAllList",
    },
    deployment: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsDeploymentToHclTerraform, true)(struct!.deployment),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsDeploymentList",
    },
    environment: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsEnvironmentList",
    },
    pipeline: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsPipelineToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsPipelineList",
    },
    provisioner: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsProvisionerToHclTerraform, true)(struct!.provisioner),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsProvisionerList",
    },
    service: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsServiceList",
    },
    template: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsTemplateToHclTerraform, true)(struct!.template),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsTemplateList",
    },
    workflow: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupPermissionsAppPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    if (this._provisioner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioner = this._provisioner?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._pipeline.internalValue = undefined;
      this._provisioner.internalValue = undefined;
      this._service.internalValue = undefined;
      this._template.internalValue = undefined;
      this._workflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all.internalValue = value.all;
      this._deployment.internalValue = value.deployment;
      this._environment.internalValue = value.environment;
      this._pipeline.internalValue = value.pipeline;
      this._provisioner.internalValue = value.provisioner;
      this._service.internalValue = value.service;
      this._template.internalValue = value.template;
      this._workflow.internalValue = value.workflow;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new UserGroupPermissionsAppPermissionsAllList(this, "all", true);
  public get all() {
    return this._all;
  }
  public putAll(value: UserGroupPermissionsAppPermissionsAll[] | cdktf.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new UserGroupPermissionsAppPermissionsDeploymentList(this, "deployment", true);
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: UserGroupPermissionsAppPermissionsDeployment[] | cdktf.IResolvable) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new UserGroupPermissionsAppPermissionsEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: UserGroupPermissionsAppPermissionsEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline = new UserGroupPermissionsAppPermissionsPipelineList(this, "pipeline", true);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: UserGroupPermissionsAppPermissionsPipeline[] | cdktf.IResolvable) {
    this._pipeline.internalValue = value;
  }
  public resetPipeline() {
    this._pipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }

  // provisioner - computed: false, optional: true, required: false
  private _provisioner = new UserGroupPermissionsAppPermissionsProvisionerList(this, "provisioner", true);
  public get provisioner() {
    return this._provisioner;
  }
  public putProvisioner(value: UserGroupPermissionsAppPermissionsProvisioner[] | cdktf.IResolvable) {
    this._provisioner.internalValue = value;
  }
  public resetProvisioner() {
    this._provisioner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerInput() {
    return this._provisioner.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new UserGroupPermissionsAppPermissionsServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: UserGroupPermissionsAppPermissionsService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new UserGroupPermissionsAppPermissionsTemplateList(this, "template", true);
  public get template() {
    return this._template;
  }
  public putTemplate(value: UserGroupPermissionsAppPermissionsTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new UserGroupPermissionsAppPermissionsWorkflowList(this, "workflow", true);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: UserGroupPermissionsAppPermissionsWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
export interface UserGroupPermissions {
  /**
  * The account permissions of the user group. Valid options are ADMINISTER_OTHER_ACCOUNT_FUNCTIONS, CREATE_AND_DELETE_APPLICATION, CREATE_CUSTOM_DASHBOARDS, MANAGE_ALERT_NOTIFICATION_RULES, MANAGE_API_KEYS, MANAGE_APPLICATION_STACKS, MANAGE_AUTHENTICATION_SETTINGS, MANAGE_CLOUD_PROVIDERS, MANAGE_CONFIG_AS_CODE, MANAGE_CONNECTORS, MANAGE_CUSTOM_DASHBOARDS, MANAGE_DELEGATE_PROFILES, MANAGE_DELEGATES, MANAGE_DEPLOYMENT_FREEZES, MANAGE_IP_WHITELIST, MANAGE_PIPELINE_GOVERNANCE_STANDARDS, MANAGE_RESTRICTED_ACCESS, MANAGE_SECRET_MANAGERS, MANAGE_SECRETS, MANAGE_SSH_AND_WINRM, MANAGE_TAGS, MANAGE_TEMPLATE_LIBRARY, MANAGE_USER_AND_USER_GROUPS_AND_API_KEYS, MANAGE_USERS_AND_GROUPS, READ_USERS_AND_GROUPS, VIEW_AUDITS, VIEW_USER_AND_USER_GROUPS_AND_API_KEYS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#account_permissions UserGroup#account_permissions}
  */
  readonly accountPermissions?: string[];
  /**
  * app_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#app_permissions UserGroup#app_permissions}
  */
  readonly appPermissions?: UserGroupPermissionsAppPermissions;
}

export function userGroupPermissionsToTerraform(struct?: UserGroupPermissionsOutputReference | UserGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountPermissions),
    app_permissions: userGroupPermissionsAppPermissionsToTerraform(struct!.appPermissions),
  }
}


export function userGroupPermissionsToHclTerraform(struct?: UserGroupPermissionsOutputReference | UserGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountPermissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_permissions: {
      value: userGroupPermissionsAppPermissionsToHclTerraform(struct!.appPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "UserGroupPermissionsAppPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountPermissions = this._accountPermissions;
    }
    if (this._appPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPermissions = this._appPermissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountPermissions = undefined;
      this._appPermissions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountPermissions = value.accountPermissions;
      this._appPermissions.internalValue = value.appPermissions;
    }
  }

  // account_permissions - computed: false, optional: true, required: false
  private _accountPermissions?: string[]; 
  public get accountPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('account_permissions'));
  }
  public set accountPermissions(value: string[]) {
    this._accountPermissions = value;
  }
  public resetAccountPermissions() {
    this._accountPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPermissionsInput() {
    return this._accountPermissions;
  }

  // app_permissions - computed: false, optional: true, required: false
  private _appPermissions = new UserGroupPermissionsAppPermissionsOutputReference(this, "app_permissions");
  public get appPermissions() {
    return this._appPermissions;
  }
  public putAppPermissions(value: UserGroupPermissionsAppPermissions) {
    this._appPermissions.internalValue = value;
  }
  public resetAppPermissions() {
    this._appPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPermissionsInput() {
    return this._appPermissions.internalValue;
  }
}
export interface UserGroupSamlSettings {
  /**
  * The group name of the SAML user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#group_name UserGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * The ID of the SSO provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#sso_provider_id UserGroup#sso_provider_id}
  */
  readonly ssoProviderId?: string;
}

export function userGroupSamlSettingsToTerraform(struct?: UserGroupSamlSettingsOutputReference | UserGroupSamlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    sso_provider_id: cdktf.stringToTerraform(struct!.ssoProviderId),
  }
}


export function userGroupSamlSettingsToHclTerraform(struct?: UserGroupSamlSettingsOutputReference | UserGroupSamlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.ssoProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupSamlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupSamlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ssoProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoProviderId = this._ssoProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupSamlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._ssoProviderId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._ssoProviderId = value.ssoProviderId;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // sso_provider_id - computed: false, optional: true, required: false
  private _ssoProviderId?: string; 
  public get ssoProviderId() {
    return this.getStringAttribute('sso_provider_id');
  }
  public set ssoProviderId(value: string) {
    this._ssoProviderId = value;
  }
  public resetSsoProviderId() {
    this._ssoProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoProviderIdInput() {
    return this._ssoProviderId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group harness_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/user_group harness_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_user_group',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._ldapSettings.internalValue = config.ldapSettings;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._permissions.internalValue = config.permissions;
    this._samlSettings.internalValue = config.samlSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imported_by_scim - computed: true, optional: false, required: false
  public get importedByScim() {
    return this.getBooleanAttribute('imported_by_scim');
  }

  // is_sso_linked - computed: true, optional: false, required: false
  public get isSsoLinked() {
    return this.getBooleanAttribute('is_sso_linked');
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

  // ldap_settings - computed: false, optional: true, required: false
  private _ldapSettings = new UserGroupLdapSettingsOutputReference(this, "ldap_settings");
  public get ldapSettings() {
    return this._ldapSettings;
  }
  public putLdapSettings(value: UserGroupLdapSettings) {
    this._ldapSettings.internalValue = value;
  }
  public resetLdapSettings() {
    this._ldapSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSettingsInput() {
    return this._ldapSettings.internalValue;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new UserGroupNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: UserGroupNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new UserGroupPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: UserGroupPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // saml_settings - computed: false, optional: true, required: false
  private _samlSettings = new UserGroupSamlSettingsOutputReference(this, "saml_settings");
  public get samlSettings() {
    return this._samlSettings;
  }
  public putSamlSettings(value: UserGroupSamlSettings) {
    this._samlSettings.internalValue = value;
  }
  public resetSamlSettings() {
    this._samlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSettingsInput() {
    return this._samlSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      ldap_settings: userGroupLdapSettingsToTerraform(this._ldapSettings.internalValue),
      notification_settings: userGroupNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      permissions: userGroupPermissionsToTerraform(this._permissions.internalValue),
      saml_settings: userGroupSamlSettingsToTerraform(this._samlSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ldap_settings: {
        value: userGroupLdapSettingsToHclTerraform(this._ldapSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupLdapSettingsList",
      },
      notification_settings: {
        value: userGroupNotificationSettingsToHclTerraform(this._notificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupNotificationSettingsList",
      },
      permissions: {
        value: userGroupPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupPermissionsList",
      },
      saml_settings: {
        value: userGroupSamlSettingsToHclTerraform(this._samlSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupSamlSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
