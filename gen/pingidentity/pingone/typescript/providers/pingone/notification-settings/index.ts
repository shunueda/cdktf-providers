// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of objects that represent actors that are exempt from any delivery restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#allowed_list NotificationSettings#allowed_list}
  */
  readonly allowedList?: NotificationSettingsAllowedListStruct[] | cdktf.IResolvable;
  /**
  * A string that specifies the delivery mode that the settings apply for.  Options are `ALL`.  Defaults to `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#delivery_mode NotificationSettings#delivery_mode}
  */
  readonly deliveryMode?: string;
  /**
  * The ID of the environment to configure notifications settings in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#environment_id NotificationSettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * A required single block that specifies the email sender's "from" name and email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#from NotificationSettings#from}
  */
  readonly from?: NotificationSettingsFrom;
  /**
  * An ordered list of strings that which represents the execution order of different SMS/Voice providers configured for the environment. The providers and their accounts’ configurations are represented in the list by the ID of the corresponding `pingone_phone_delivery_settings` resource. The only provider which is not represented by the `pingone_phone_delivery_settings.id` value is the PingOne Twilio provider. The PingOne Twilio provider is represented by the `PINGONE_TWILIO` string. If this parameter's list is empty, an SMS or voice message will be sent using the default Ping Twilio account. Otherwise, an SMS or voice message will be sent using the first provider in the list. If the server fails to queue the message using that provider, it will use the next provider in the list to try to send the message. This process will go on until there are no more providers in the list. If the server failed to send the message using all providers, the notification status is set to `FAILED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#provider_fallback_chain NotificationSettings#provider_fallback_chain}
  */
  readonly providerFallbackChain?: string[];
  /**
  * A required single block that specifies the email sender's "reply to" name and email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#reply_to NotificationSettings#reply_to}
  */
  readonly replyTo?: NotificationSettingsReplyTo;
}
export interface NotificationSettingsAllowedListStruct {
  /**
  * A string that specifies the user ID to add to the allowed list.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#user_id NotificationSettings#user_id}
  */
  readonly userId: string;
}

export function notificationSettingsAllowedListStructToTerraform(struct?: NotificationSettingsAllowedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function notificationSettingsAllowedListStructToHclTerraform(struct?: NotificationSettingsAllowedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationSettingsAllowedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationSettingsAllowedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationSettingsAllowedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userId = value.userId;
    }
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class NotificationSettingsAllowedListStructList extends cdktf.ComplexList {
  public internalValue? : NotificationSettingsAllowedListStruct[] | cdktf.IResolvable

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
  public get(index: number): NotificationSettingsAllowedListStructOutputReference {
    return new NotificationSettingsAllowedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationSettingsFrom {
  /**
  * A string that specifies the email sender's "from" email address.  Defaults to `noreply@pingidentity.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#email_address NotificationSettings#email_address}
  */
  readonly emailAddress: string;
  /**
  * A string that specifies the email sender's "from" name.  Defaults to `PingOne`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#name NotificationSettings#name}
  */
  readonly name?: string;
}

export function notificationSettingsFromToTerraform(struct?: NotificationSettingsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationSettingsFromToHclTerraform(struct?: NotificationSettingsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationSettingsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationSettingsFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationSettingsFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._name = value.name;
    }
  }

  // email_address - computed: true, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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
}
export interface NotificationSettingsReplyTo {
  /**
  * A string that specifies the email sender's "reply to" email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#email_address NotificationSettings#email_address}
  */
  readonly emailAddress: string;
  /**
  * A string that specifies the email sender's "reply to" name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#name NotificationSettings#name}
  */
  readonly name?: string;
}

export function notificationSettingsReplyToToTerraform(struct?: NotificationSettingsReplyTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationSettingsReplyToToHclTerraform(struct?: NotificationSettingsReplyTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationSettingsReplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationSettingsReplyTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationSettingsReplyTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._name = value.name;
    }
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // name - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings pingone_notification_settings}
*/
export class NotificationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_notification_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationSettings to import
  * @param importFromId The id of the existing NotificationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_notification_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_settings pingone_notification_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_notification_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedList.internalValue = config.allowedList;
    this._deliveryMode = config.deliveryMode;
    this._environmentId = config.environmentId;
    this._from.internalValue = config.from;
    this._providerFallbackChain = config.providerFallbackChain;
    this._replyTo.internalValue = config.replyTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_list - computed: false, optional: true, required: false
  private _allowedList = new NotificationSettingsAllowedListStructList(this, "allowed_list", true);
  public get allowedList() {
    return this._allowedList;
  }
  public putAllowedList(value: NotificationSettingsAllowedListStruct[] | cdktf.IResolvable) {
    this._allowedList.internalValue = value;
  }
  public resetAllowedList() {
    this._allowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedListInput() {
    return this._allowedList.internalValue;
  }

  // delivery_mode - computed: true, optional: true, required: false
  private _deliveryMode?: string; 
  public get deliveryMode() {
    return this.getStringAttribute('delivery_mode');
  }
  public set deliveryMode(value: string) {
    this._deliveryMode = value;
  }
  public resetDeliveryMode() {
    this._deliveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryModeInput() {
    return this._deliveryMode;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // from - computed: true, optional: true, required: false
  private _from = new NotificationSettingsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: NotificationSettingsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_fallback_chain - computed: true, optional: true, required: false
  private _providerFallbackChain?: string[]; 
  public get providerFallbackChain() {
    return this.getListAttribute('provider_fallback_chain');
  }
  public set providerFallbackChain(value: string[]) {
    this._providerFallbackChain = value;
  }
  public resetProviderFallbackChain() {
    this._providerFallbackChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerFallbackChainInput() {
    return this._providerFallbackChain;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo = new NotificationSettingsReplyToOutputReference(this, "reply_to");
  public get replyTo() {
    return this._replyTo;
  }
  public putReplyTo(value: NotificationSettingsReplyTo) {
    this._replyTo.internalValue = value;
  }
  public resetReplyTo() {
    this._replyTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_list: cdktf.listMapper(notificationSettingsAllowedListStructToTerraform, false)(this._allowedList.internalValue),
      delivery_mode: cdktf.stringToTerraform(this._deliveryMode),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      from: notificationSettingsFromToTerraform(this._from.internalValue),
      provider_fallback_chain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._providerFallbackChain),
      reply_to: notificationSettingsReplyToToTerraform(this._replyTo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_list: {
        value: cdktf.listMapperHcl(notificationSettingsAllowedListStructToHclTerraform, false)(this._allowedList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationSettingsAllowedListStructList",
      },
      delivery_mode: {
        value: cdktf.stringToHclTerraform(this._deliveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: notificationSettingsFromToHclTerraform(this._from.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationSettingsFrom",
      },
      provider_fallback_chain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._providerFallbackChain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reply_to: {
        value: notificationSettingsReplyToToHclTerraform(this._replyTo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationSettingsReplyTo",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
