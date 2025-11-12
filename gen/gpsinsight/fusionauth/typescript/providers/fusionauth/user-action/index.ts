// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the Email Template that is used when User Actions are canceled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#cancel_email_template_id UserAction#cancel_email_template_id}
  */
  readonly cancelEmailTemplateId?: string;
  /**
  * The Id of the Email Template that is used when User Actions expired automatically (end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#end_email_template_id UserAction#end_email_template_id}
  */
  readonly endEmailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#id UserAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to include the email information in the JSON that is sent to the Webhook when a user action is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#include_email_in_event_json UserAction#include_email_in_event_json}
  */
  readonly includeEmailInEventJson?: boolean | cdktf.IResolvable;
  /**
  * A mapping of localized names for this User Action. The key is the Locale and the value is the name of the User Action for that language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#localized_names UserAction#localized_names}
  */
  readonly localizedNames?: { [key: string]: string };
  /**
  * The Id of the Email Template that is used when User Actions are modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#modify_email_template_id UserAction#modify_email_template_id}
  */
  readonly modifyEmailTemplateId?: string;
  /**
  * The name of this User Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#name UserAction#name}
  */
  readonly name: string;
  /**
  * Whether or not this User Action will prevent user login. When this value is set to true the action must also be marked as a time based action. See `temporal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#prevent_login UserAction#prevent_login}
  */
  readonly preventLogin?: boolean | cdktf.IResolvable;
  /**
  * Whether or not FusionAuth will send events to any registered Webhooks when this User Action expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#send_end_event UserAction#send_end_event}
  */
  readonly sendEndEvent?: boolean | cdktf.IResolvable;
  /**
  * The Id of the Email Template that is used when User Actions are started (created).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#start_email_template_id UserAction#start_email_template_id}
  */
  readonly startEmailTemplateId?: string;
  /**
  * Whether or not this User Action is time-based (temporal).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#temporal UserAction#temporal}
  */
  readonly temporal?: boolean | cdktf.IResolvable;
  /**
  * The id of this User Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#user_action_id UserAction#user_action_id}
  */
  readonly userActionId?: string;
  /**
  * Whether or not email is enabled for this User Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#user_emailing_enabled UserAction#user_emailing_enabled}
  */
  readonly userEmailingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not user notifications are enabled for this User Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#user_notifications_enabled UserAction#user_notifications_enabled}
  */
  readonly userNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#options UserAction#options}
  */
  readonly options?: UserActionOptions[] | cdktf.IResolvable;
}
export interface UserActionOptions {
  /**
  * A mapping of localized names for this User Action Option. The key is the Locale and the value is the name of the User Action Option for that language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#localized_names UserAction#localized_names}
  */
  readonly localizedNames?: { [key: string]: string };
  /**
  * The name of this User Action Option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#name UserAction#name}
  */
  readonly name: string;
}

export function userActionOptionsToTerraform(struct?: UserActionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localized_names: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.localizedNames),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userActionOptionsToHclTerraform(struct?: UserActionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localized_names: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.localizedNames),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserActionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserActionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localizedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.localizedNames = this._localizedNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserActionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localizedNames = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localizedNames = value.localizedNames;
      this._name = value.name;
    }
  }

  // localized_names - computed: false, optional: true, required: false
  private _localizedNames?: { [key: string]: string }; 
  public get localizedNames() {
    return this.getStringMapAttribute('localized_names');
  }
  public set localizedNames(value: { [key: string]: string }) {
    this._localizedNames = value;
  }
  public resetLocalizedNames() {
    this._localizedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedNamesInput() {
    return this._localizedNames;
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
}

export class UserActionOptionsList extends cdktf.ComplexList {
  public internalValue? : UserActionOptions[] | cdktf.IResolvable

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
  public get(index: number): UserActionOptionsOutputReference {
    return new UserActionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action fusionauth_user_action}
*/
export class UserAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_user_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAction to import
  * @param importFromId The id of the existing UserAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_user_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user_action fusionauth_user_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserActionConfig
  */
  public constructor(scope: Construct, id: string, config: UserActionConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_user_action',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100',
        providerVersionConstraint: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cancelEmailTemplateId = config.cancelEmailTemplateId;
    this._endEmailTemplateId = config.endEmailTemplateId;
    this._id = config.id;
    this._includeEmailInEventJson = config.includeEmailInEventJson;
    this._localizedNames = config.localizedNames;
    this._modifyEmailTemplateId = config.modifyEmailTemplateId;
    this._name = config.name;
    this._preventLogin = config.preventLogin;
    this._sendEndEvent = config.sendEndEvent;
    this._startEmailTemplateId = config.startEmailTemplateId;
    this._temporal = config.temporal;
    this._userActionId = config.userActionId;
    this._userEmailingEnabled = config.userEmailingEnabled;
    this._userNotificationsEnabled = config.userNotificationsEnabled;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cancel_email_template_id - computed: false, optional: true, required: false
  private _cancelEmailTemplateId?: string; 
  public get cancelEmailTemplateId() {
    return this.getStringAttribute('cancel_email_template_id');
  }
  public set cancelEmailTemplateId(value: string) {
    this._cancelEmailTemplateId = value;
  }
  public resetCancelEmailTemplateId() {
    this._cancelEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelEmailTemplateIdInput() {
    return this._cancelEmailTemplateId;
  }

  // end_email_template_id - computed: false, optional: true, required: false
  private _endEmailTemplateId?: string; 
  public get endEmailTemplateId() {
    return this.getStringAttribute('end_email_template_id');
  }
  public set endEmailTemplateId(value: string) {
    this._endEmailTemplateId = value;
  }
  public resetEndEmailTemplateId() {
    this._endEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endEmailTemplateIdInput() {
    return this._endEmailTemplateId;
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

  // include_email_in_event_json - computed: false, optional: true, required: false
  private _includeEmailInEventJson?: boolean | cdktf.IResolvable; 
  public get includeEmailInEventJson() {
    return this.getBooleanAttribute('include_email_in_event_json');
  }
  public set includeEmailInEventJson(value: boolean | cdktf.IResolvable) {
    this._includeEmailInEventJson = value;
  }
  public resetIncludeEmailInEventJson() {
    this._includeEmailInEventJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEmailInEventJsonInput() {
    return this._includeEmailInEventJson;
  }

  // localized_names - computed: false, optional: true, required: false
  private _localizedNames?: { [key: string]: string }; 
  public get localizedNames() {
    return this.getStringMapAttribute('localized_names');
  }
  public set localizedNames(value: { [key: string]: string }) {
    this._localizedNames = value;
  }
  public resetLocalizedNames() {
    this._localizedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedNamesInput() {
    return this._localizedNames;
  }

  // modify_email_template_id - computed: false, optional: true, required: false
  private _modifyEmailTemplateId?: string; 
  public get modifyEmailTemplateId() {
    return this.getStringAttribute('modify_email_template_id');
  }
  public set modifyEmailTemplateId(value: string) {
    this._modifyEmailTemplateId = value;
  }
  public resetModifyEmailTemplateId() {
    this._modifyEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyEmailTemplateIdInput() {
    return this._modifyEmailTemplateId;
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

  // prevent_login - computed: false, optional: true, required: false
  private _preventLogin?: boolean | cdktf.IResolvable; 
  public get preventLogin() {
    return this.getBooleanAttribute('prevent_login');
  }
  public set preventLogin(value: boolean | cdktf.IResolvable) {
    this._preventLogin = value;
  }
  public resetPreventLogin() {
    this._preventLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventLoginInput() {
    return this._preventLogin;
  }

  // send_end_event - computed: false, optional: true, required: false
  private _sendEndEvent?: boolean | cdktf.IResolvable; 
  public get sendEndEvent() {
    return this.getBooleanAttribute('send_end_event');
  }
  public set sendEndEvent(value: boolean | cdktf.IResolvable) {
    this._sendEndEvent = value;
  }
  public resetSendEndEvent() {
    this._sendEndEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEndEventInput() {
    return this._sendEndEvent;
  }

  // start_email_template_id - computed: false, optional: true, required: false
  private _startEmailTemplateId?: string; 
  public get startEmailTemplateId() {
    return this.getStringAttribute('start_email_template_id');
  }
  public set startEmailTemplateId(value: string) {
    this._startEmailTemplateId = value;
  }
  public resetStartEmailTemplateId() {
    this._startEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startEmailTemplateIdInput() {
    return this._startEmailTemplateId;
  }

  // temporal - computed: false, optional: true, required: false
  private _temporal?: boolean | cdktf.IResolvable; 
  public get temporal() {
    return this.getBooleanAttribute('temporal');
  }
  public set temporal(value: boolean | cdktf.IResolvable) {
    this._temporal = value;
  }
  public resetTemporal() {
    this._temporal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporalInput() {
    return this._temporal;
  }

  // user_action_id - computed: true, optional: true, required: false
  private _userActionId?: string; 
  public get userActionId() {
    return this.getStringAttribute('user_action_id');
  }
  public set userActionId(value: string) {
    this._userActionId = value;
  }
  public resetUserActionId() {
    this._userActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionIdInput() {
    return this._userActionId;
  }

  // user_emailing_enabled - computed: false, optional: true, required: false
  private _userEmailingEnabled?: boolean | cdktf.IResolvable; 
  public get userEmailingEnabled() {
    return this.getBooleanAttribute('user_emailing_enabled');
  }
  public set userEmailingEnabled(value: boolean | cdktf.IResolvable) {
    this._userEmailingEnabled = value;
  }
  public resetUserEmailingEnabled() {
    this._userEmailingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailingEnabledInput() {
    return this._userEmailingEnabled;
  }

  // user_notifications_enabled - computed: false, optional: true, required: false
  private _userNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get userNotificationsEnabled() {
    return this.getBooleanAttribute('user_notifications_enabled');
  }
  public set userNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._userNotificationsEnabled = value;
  }
  public resetUserNotificationsEnabled() {
    this._userNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNotificationsEnabledInput() {
    return this._userNotificationsEnabled;
  }

  // options - computed: false, optional: true, required: false
  private _options = new UserActionOptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: UserActionOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cancel_email_template_id: cdktf.stringToTerraform(this._cancelEmailTemplateId),
      end_email_template_id: cdktf.stringToTerraform(this._endEmailTemplateId),
      id: cdktf.stringToTerraform(this._id),
      include_email_in_event_json: cdktf.booleanToTerraform(this._includeEmailInEventJson),
      localized_names: cdktf.hashMapper(cdktf.stringToTerraform)(this._localizedNames),
      modify_email_template_id: cdktf.stringToTerraform(this._modifyEmailTemplateId),
      name: cdktf.stringToTerraform(this._name),
      prevent_login: cdktf.booleanToTerraform(this._preventLogin),
      send_end_event: cdktf.booleanToTerraform(this._sendEndEvent),
      start_email_template_id: cdktf.stringToTerraform(this._startEmailTemplateId),
      temporal: cdktf.booleanToTerraform(this._temporal),
      user_action_id: cdktf.stringToTerraform(this._userActionId),
      user_emailing_enabled: cdktf.booleanToTerraform(this._userEmailingEnabled),
      user_notifications_enabled: cdktf.booleanToTerraform(this._userNotificationsEnabled),
      options: cdktf.listMapper(userActionOptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cancel_email_template_id: {
        value: cdktf.stringToHclTerraform(this._cancelEmailTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_email_template_id: {
        value: cdktf.stringToHclTerraform(this._endEmailTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_email_in_event_json: {
        value: cdktf.booleanToHclTerraform(this._includeEmailInEventJson),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      localized_names: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._localizedNames),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      modify_email_template_id: {
        value: cdktf.stringToHclTerraform(this._modifyEmailTemplateId),
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
      prevent_login: {
        value: cdktf.booleanToHclTerraform(this._preventLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_end_event: {
        value: cdktf.booleanToHclTerraform(this._sendEndEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_email_template_id: {
        value: cdktf.stringToHclTerraform(this._startEmailTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporal: {
        value: cdktf.booleanToHclTerraform(this._temporal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_action_id: {
        value: cdktf.stringToHclTerraform(this._userActionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_emailing_enabled: {
        value: cdktf.booleanToHclTerraform(this._userEmailingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._userNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: cdktf.listMapperHcl(userActionOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserActionOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
