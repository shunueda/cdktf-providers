// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformUsergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#description PlatformUsergroup#description}
  */
  readonly description?: string;
  /**
  * Whether the user group is externally managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#externally_managed PlatformUsergroup#externally_managed}
  */
  readonly externallyManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#id PlatformUsergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#identifier PlatformUsergroup#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the linked SSO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#linked_sso_display_name PlatformUsergroup#linked_sso_display_name}
  */
  readonly linkedSsoDisplayName?: string;
  /**
  * The SSO account ID that the user group is linked to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#linked_sso_id PlatformUsergroup#linked_sso_id}
  */
  readonly linkedSsoId?: string;
  /**
  * Type of linked SSO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#linked_sso_type PlatformUsergroup#linked_sso_type}
  */
  readonly linkedSsoType?: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#name PlatformUsergroup#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#org_id PlatformUsergroup#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#project_id PlatformUsergroup#project_id}
  */
  readonly projectId?: string;
  /**
  * Identifier of the userGroup in SSO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#sso_group_id PlatformUsergroup#sso_group_id}
  */
  readonly ssoGroupId?: string;
  /**
  * Name of the SSO userGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#sso_group_name PlatformUsergroup#sso_group_name}
  */
  readonly ssoGroupName?: string;
  /**
  * Whether sso is linked or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#sso_linked PlatformUsergroup#sso_linked}
  */
  readonly ssoLinked?: boolean | cdktf.IResolvable;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#tags PlatformUsergroup#tags}
  */
  readonly tags?: string[];
  /**
  * List of user emails in the UserGroup. Either provide list of users or list of user emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#user_emails PlatformUsergroup#user_emails}
  */
  readonly userEmails?: string[];
  /**
  * List of users in the UserGroup. Either provide list of users or list of user emails. (Should be null for SSO managed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#users PlatformUsergroup#users}
  */
  readonly users?: string[];
  /**
  * notification_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#notification_configs PlatformUsergroup#notification_configs}
  */
  readonly notificationConfigs?: PlatformUsergroupNotificationConfigs[] | cdktf.IResolvable;
}
export interface PlatformUsergroupNotificationConfigs {
  /**
  * Group email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#group_email PlatformUsergroup#group_email}
  */
  readonly groupEmail?: string;
  /**
  * Url of Microsoft teams webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#microsoft_teams_webhook_url PlatformUsergroup#microsoft_teams_webhook_url}
  */
  readonly microsoftTeamsWebhookUrl?: string;
  /**
  * Pager duty key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#pager_duty_key PlatformUsergroup#pager_duty_key}
  */
  readonly pagerDutyKey?: string;
  /**
  * Send email to all the group members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#send_email_to_all_users PlatformUsergroup#send_email_to_all_users}
  */
  readonly sendEmailToAllUsers?: boolean | cdktf.IResolvable;
  /**
  * Url of slack webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#slack_webhook_url PlatformUsergroup#slack_webhook_url}
  */
  readonly slackWebhookUrl?: string;
  /**
  * Can be one of EMAIL, SLACK, PAGERDUTY, MSTEAMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#type PlatformUsergroup#type}
  */
  readonly type?: string;
}

export function platformUsergroupNotificationConfigsToTerraform(struct?: PlatformUsergroupNotificationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_email: cdktf.stringToTerraform(struct!.groupEmail),
    microsoft_teams_webhook_url: cdktf.stringToTerraform(struct!.microsoftTeamsWebhookUrl),
    pager_duty_key: cdktf.stringToTerraform(struct!.pagerDutyKey),
    send_email_to_all_users: cdktf.booleanToTerraform(struct!.sendEmailToAllUsers),
    slack_webhook_url: cdktf.stringToTerraform(struct!.slackWebhookUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformUsergroupNotificationConfigsToHclTerraform(struct?: PlatformUsergroupNotificationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_email: {
      value: cdktf.stringToHclTerraform(struct!.groupEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_teams_webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.microsoftTeamsWebhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pager_duty_key: {
      value: cdktf.stringToHclTerraform(struct!.pagerDutyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_email_to_all_users: {
      value: cdktf.booleanToHclTerraform(struct!.sendEmailToAllUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slack_webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.slackWebhookUrl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformUsergroupNotificationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformUsergroupNotificationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEmail = this._groupEmail;
    }
    if (this._microsoftTeamsWebhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftTeamsWebhookUrl = this._microsoftTeamsWebhookUrl;
    }
    if (this._pagerDutyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerDutyKey = this._pagerDutyKey;
    }
    if (this._sendEmailToAllUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEmailToAllUsers = this._sendEmailToAllUsers;
    }
    if (this._slackWebhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackWebhookUrl = this._slackWebhookUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformUsergroupNotificationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupEmail = undefined;
      this._microsoftTeamsWebhookUrl = undefined;
      this._pagerDutyKey = undefined;
      this._sendEmailToAllUsers = undefined;
      this._slackWebhookUrl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupEmail = value.groupEmail;
      this._microsoftTeamsWebhookUrl = value.microsoftTeamsWebhookUrl;
      this._pagerDutyKey = value.pagerDutyKey;
      this._sendEmailToAllUsers = value.sendEmailToAllUsers;
      this._slackWebhookUrl = value.slackWebhookUrl;
      this._type = value.type;
    }
  }

  // group_email - computed: false, optional: true, required: false
  private _groupEmail?: string; 
  public get groupEmail() {
    return this.getStringAttribute('group_email');
  }
  public set groupEmail(value: string) {
    this._groupEmail = value;
  }
  public resetGroupEmail() {
    this._groupEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEmailInput() {
    return this._groupEmail;
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

  // pager_duty_key - computed: false, optional: true, required: false
  private _pagerDutyKey?: string; 
  public get pagerDutyKey() {
    return this.getStringAttribute('pager_duty_key');
  }
  public set pagerDutyKey(value: string) {
    this._pagerDutyKey = value;
  }
  public resetPagerDutyKey() {
    this._pagerDutyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyKeyInput() {
    return this._pagerDutyKey;
  }

  // send_email_to_all_users - computed: true, optional: true, required: false
  private _sendEmailToAllUsers?: boolean | cdktf.IResolvable; 
  public get sendEmailToAllUsers() {
    return this.getBooleanAttribute('send_email_to_all_users');
  }
  public set sendEmailToAllUsers(value: boolean | cdktf.IResolvable) {
    this._sendEmailToAllUsers = value;
  }
  public resetSendEmailToAllUsers() {
    this._sendEmailToAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailToAllUsersInput() {
    return this._sendEmailToAllUsers;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PlatformUsergroupNotificationConfigsList extends cdktf.ComplexList {
  public internalValue? : PlatformUsergroupNotificationConfigs[] | cdktf.IResolvable

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
  public get(index: number): PlatformUsergroupNotificationConfigsOutputReference {
    return new PlatformUsergroupNotificationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup harness_platform_usergroup}
*/
export class PlatformUsergroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_usergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformUsergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformUsergroup to import
  * @param importFromId The id of the existing PlatformUsergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformUsergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_usergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_usergroup harness_platform_usergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformUsergroupConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformUsergroupConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_usergroup',
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
    this._externallyManaged = config.externallyManaged;
    this._id = config.id;
    this._identifier = config.identifier;
    this._linkedSsoDisplayName = config.linkedSsoDisplayName;
    this._linkedSsoId = config.linkedSsoId;
    this._linkedSsoType = config.linkedSsoType;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._ssoGroupId = config.ssoGroupId;
    this._ssoGroupName = config.ssoGroupName;
    this._ssoLinked = config.ssoLinked;
    this._tags = config.tags;
    this._userEmails = config.userEmails;
    this._users = config.users;
    this._notificationConfigs.internalValue = config.notificationConfigs;
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

  // externally_managed - computed: false, optional: true, required: false
  private _externallyManaged?: boolean | cdktf.IResolvable; 
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
  }
  public set externallyManaged(value: boolean | cdktf.IResolvable) {
    this._externallyManaged = value;
  }
  public resetExternallyManaged() {
    this._externallyManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externallyManagedInput() {
    return this._externallyManaged;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // linked_sso_display_name - computed: false, optional: true, required: false
  private _linkedSsoDisplayName?: string; 
  public get linkedSsoDisplayName() {
    return this.getStringAttribute('linked_sso_display_name');
  }
  public set linkedSsoDisplayName(value: string) {
    this._linkedSsoDisplayName = value;
  }
  public resetLinkedSsoDisplayName() {
    this._linkedSsoDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedSsoDisplayNameInput() {
    return this._linkedSsoDisplayName;
  }

  // linked_sso_id - computed: false, optional: true, required: false
  private _linkedSsoId?: string; 
  public get linkedSsoId() {
    return this.getStringAttribute('linked_sso_id');
  }
  public set linkedSsoId(value: string) {
    this._linkedSsoId = value;
  }
  public resetLinkedSsoId() {
    this._linkedSsoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedSsoIdInput() {
    return this._linkedSsoId;
  }

  // linked_sso_type - computed: false, optional: true, required: false
  private _linkedSsoType?: string; 
  public get linkedSsoType() {
    return this.getStringAttribute('linked_sso_type');
  }
  public set linkedSsoType(value: string) {
    this._linkedSsoType = value;
  }
  public resetLinkedSsoType() {
    this._linkedSsoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedSsoTypeInput() {
    return this._linkedSsoType;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // sso_group_id - computed: false, optional: true, required: false
  private _ssoGroupId?: string; 
  public get ssoGroupId() {
    return this.getStringAttribute('sso_group_id');
  }
  public set ssoGroupId(value: string) {
    this._ssoGroupId = value;
  }
  public resetSsoGroupId() {
    this._ssoGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoGroupIdInput() {
    return this._ssoGroupId;
  }

  // sso_group_name - computed: false, optional: true, required: false
  private _ssoGroupName?: string; 
  public get ssoGroupName() {
    return this.getStringAttribute('sso_group_name');
  }
  public set ssoGroupName(value: string) {
    this._ssoGroupName = value;
  }
  public resetSsoGroupName() {
    this._ssoGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoGroupNameInput() {
    return this._ssoGroupName;
  }

  // sso_linked - computed: true, optional: true, required: false
  private _ssoLinked?: boolean | cdktf.IResolvable; 
  public get ssoLinked() {
    return this.getBooleanAttribute('sso_linked');
  }
  public set ssoLinked(value: boolean | cdktf.IResolvable) {
    this._ssoLinked = value;
  }
  public resetSsoLinked() {
    this._ssoLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoLinkedInput() {
    return this._ssoLinked;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_emails - computed: false, optional: true, required: false
  private _userEmails?: string[]; 
  public get userEmails() {
    return this.getListAttribute('user_emails');
  }
  public set userEmails(value: string[]) {
    this._userEmails = value;
  }
  public resetUserEmails() {
    this._userEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailsInput() {
    return this._userEmails;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // notification_configs - computed: false, optional: true, required: false
  private _notificationConfigs = new PlatformUsergroupNotificationConfigsList(this, "notification_configs", false);
  public get notificationConfigs() {
    return this._notificationConfigs;
  }
  public putNotificationConfigs(value: PlatformUsergroupNotificationConfigs[] | cdktf.IResolvable) {
    this._notificationConfigs.internalValue = value;
  }
  public resetNotificationConfigs() {
    this._notificationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigsInput() {
    return this._notificationConfigs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      externally_managed: cdktf.booleanToTerraform(this._externallyManaged),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      linked_sso_display_name: cdktf.stringToTerraform(this._linkedSsoDisplayName),
      linked_sso_id: cdktf.stringToTerraform(this._linkedSsoId),
      linked_sso_type: cdktf.stringToTerraform(this._linkedSsoType),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      sso_group_id: cdktf.stringToTerraform(this._ssoGroupId),
      sso_group_name: cdktf.stringToTerraform(this._ssoGroupName),
      sso_linked: cdktf.booleanToTerraform(this._ssoLinked),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userEmails),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      notification_configs: cdktf.listMapper(platformUsergroupNotificationConfigsToTerraform, true)(this._notificationConfigs.internalValue),
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
      externally_managed: {
        value: cdktf.booleanToHclTerraform(this._externallyManaged),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_sso_display_name: {
        value: cdktf.stringToHclTerraform(this._linkedSsoDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_sso_id: {
        value: cdktf.stringToHclTerraform(this._linkedSsoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_sso_type: {
        value: cdktf.stringToHclTerraform(this._linkedSsoType),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_group_id: {
        value: cdktf.stringToHclTerraform(this._ssoGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_group_name: {
        value: cdktf.stringToHclTerraform(this._ssoGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_linked: {
        value: cdktf.booleanToHclTerraform(this._ssoLinked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notification_configs: {
        value: cdktf.listMapperHcl(platformUsergroupNotificationConfigsToHclTerraform, true)(this._notificationConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformUsergroupNotificationConfigsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
