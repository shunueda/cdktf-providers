// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundDigitalrulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A ContactList to provide suggestions for contact columns on relevant conditions and actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_list_id OutboundDigitalruleset#contact_list_id}
  */
  readonly contactListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#id OutboundDigitalruleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the digital rule set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#name OutboundDigitalruleset#name}
  */
  readonly name?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#rules OutboundDigitalruleset#rules}
  */
  readonly rules: OutboundDigitalrulesetRules[] | cdktf.IResolvable;
}
export interface OutboundDigitalrulesetRulesActionsAppendToDncActionSettings {
  /**
  * If 'expire' is set to true, how long to keep the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#expiration_duration OutboundDigitalruleset#expiration_duration}
  */
  readonly expirationDuration?: string;
  /**
  * Whether to expire the record appended to the DNC list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#expire OutboundDigitalruleset#expire}
  */
  readonly expire: boolean | cdktf.IResolvable;
  /**
  * The Dnc List Type to append entries to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#list_type OutboundDigitalruleset#list_type}
  */
  readonly listType?: string;
}

export function outboundDigitalrulesetRulesActionsAppendToDncActionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesActionsAppendToDncActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsAppendToDncActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_duration: cdktf.stringToTerraform(struct!.expirationDuration),
    expire: cdktf.booleanToTerraform(struct!.expire),
    list_type: cdktf.stringToTerraform(struct!.listType),
  }
}


export function outboundDigitalrulesetRulesActionsAppendToDncActionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesActionsAppendToDncActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsAppendToDncActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_duration: {
      value: cdktf.stringToHclTerraform(struct!.expirationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire: {
      value: cdktf.booleanToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list_type: {
      value: cdktf.stringToHclTerraform(struct!.listType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesActionsAppendToDncActionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesActionsAppendToDncActionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDuration = this._expirationDuration;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._listType !== undefined) {
      hasAnyValues = true;
      internalValueResult.listType = this._listType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesActionsAppendToDncActionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationDuration = undefined;
      this._expire = undefined;
      this._listType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationDuration = value.expirationDuration;
      this._expire = value.expire;
      this._listType = value.listType;
    }
  }

  // expiration_duration - computed: false, optional: true, required: false
  private _expirationDuration?: string; 
  public get expirationDuration() {
    return this.getStringAttribute('expiration_duration');
  }
  public set expirationDuration(value: string) {
    this._expirationDuration = value;
  }
  public resetExpirationDuration() {
    this._expirationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDurationInput() {
    return this._expirationDuration;
  }

  // expire - computed: false, optional: false, required: true
  private _expire?: boolean | cdktf.IResolvable; 
  public get expire() {
    return this.getBooleanAttribute('expire');
  }
  public set expire(value: boolean | cdktf.IResolvable) {
    this._expire = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // list_type - computed: false, optional: true, required: false
  private _listType?: string; 
  public get listType() {
    return this.getStringAttribute('list_type');
  }
  public set listType(value: string) {
    this._listType = value;
  }
  public resetListType() {
    this._listType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
  }
}
export interface OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings {
  /**
  * A list of media types to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#media_types OutboundDigitalruleset#media_types}
  */
  readonly mediaTypes: string[];
}

export function outboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaTypes),
  }
}


export function outboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTypes = this._mediaTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mediaTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mediaTypes = value.mediaTypes;
    }
  }

  // media_types - computed: false, optional: false, required: true
  private _mediaTypes?: string[]; 
  public get mediaTypes() {
    return this.getListAttribute('media_types');
  }
  public set mediaTypes(value: string[]) {
    this._mediaTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypesInput() {
    return this._mediaTypes;
  }
}
export interface OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings {
  /**
  * A string of email contentTemplateId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#email_content_template_id OutboundDigitalruleset#email_content_template_id}
  */
  readonly emailContentTemplateId: string;
  /**
  * A string of sms contentTemplateId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#sms_content_template_id OutboundDigitalruleset#sms_content_template_id}
  */
  readonly smsContentTemplateId: string;
}

export function outboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_content_template_id: cdktf.stringToTerraform(struct!.emailContentTemplateId),
    sms_content_template_id: cdktf.stringToTerraform(struct!.smsContentTemplateId),
  }
}


export function outboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_content_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailContentTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_content_template_id: {
      value: cdktf.stringToHclTerraform(struct!.smsContentTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailContentTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailContentTemplateId = this._emailContentTemplateId;
    }
    if (this._smsContentTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsContentTemplateId = this._smsContentTemplateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailContentTemplateId = undefined;
      this._smsContentTemplateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailContentTemplateId = value.emailContentTemplateId;
      this._smsContentTemplateId = value.smsContentTemplateId;
    }
  }

  // email_content_template_id - computed: false, optional: false, required: true
  private _emailContentTemplateId?: string; 
  public get emailContentTemplateId() {
    return this.getStringAttribute('email_content_template_id');
  }
  public set emailContentTemplateId(value: string) {
    this._emailContentTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailContentTemplateIdInput() {
    return this._emailContentTemplateId;
  }

  // sms_content_template_id - computed: false, optional: false, required: true
  private _smsContentTemplateId?: string; 
  public get smsContentTemplateId() {
    return this.getStringAttribute('sms_content_template_id');
  }
  public set smsContentTemplateId(value: string) {
    this._smsContentTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsContentTemplateIdInput() {
    return this._smsContentTemplateId;
  }
}
export interface OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings {
  /**
  * The string address for the sms phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#sender_sms_phone_number OutboundDigitalruleset#sender_sms_phone_number}
  */
  readonly senderSmsPhoneNumber: string;
}

export function outboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sender_sms_phone_number: cdktf.stringToTerraform(struct!.senderSmsPhoneNumber),
  }
}


export function outboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sender_sms_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.senderSmsPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._senderSmsPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderSmsPhoneNumber = this._senderSmsPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._senderSmsPhoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._senderSmsPhoneNumber = value.senderSmsPhoneNumber;
    }
  }

  // sender_sms_phone_number - computed: false, optional: false, required: true
  private _senderSmsPhoneNumber?: string; 
  public get senderSmsPhoneNumber() {
    return this.getStringAttribute('sender_sms_phone_number');
  }
  public set senderSmsPhoneNumber(value: string) {
    this._senderSmsPhoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderSmsPhoneNumberInput() {
    return this._senderSmsPhoneNumber;
  }
}
export interface OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings {
  /**
  * A map of key-value pairs pertinent to the DialerAction. Different types of DialerActions require different properties. MODIFY_CONTACT_ATTRIBUTE with an updateOption of SET takes a contact column as the key and accepts any value. SCHEDULE_CALLBACK takes a key 'callbackOffset' that specifies how far in the future the callback should be scheduled, in minutes. SET_CALLER_ID takes two keys: 'callerAddress', which should be the caller id phone number, and 'callerName'. For either key, you can also specify a column on the contact to get the value from. To do this, specify 'contact.Column', where 'Column' is the name of the contact column from which to get the value. SET_SKILLS takes a key 'skills' with an array of skill ids wrapped into a string (Example: {'skills': '['skillIdHere']'} ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#properties OutboundDigitalruleset#properties}
  */
  readonly properties?: string;
  /**
  * The type of update to make to the specified contact column(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#update_option OutboundDigitalruleset#update_option}
  */
  readonly updateOption: string;
}

export function outboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.stringToTerraform(struct!.properties),
    update_option: cdktf.stringToTerraform(struct!.updateOption),
  }
}


export function outboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsOutputReference | OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_option: {
      value: cdktf.stringToHclTerraform(struct!.updateOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._updateOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateOption = this._updateOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
      this._updateOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
      this._updateOption = value.updateOption;
    }
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // update_option - computed: false, optional: false, required: true
  private _updateOption?: string; 
  public get updateOption() {
    return this.getStringAttribute('update_option');
  }
  public set updateOption(value: string) {
    this._updateOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOptionInput() {
    return this._updateOption;
  }
}
export interface OutboundDigitalrulesetRulesActions {
  /**
  * The settings for a 'do not send' action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#do_not_send_action_settings OutboundDigitalruleset#do_not_send_action_settings}
  */
  readonly doNotSendActionSettings?: string;
  /**
  * The settings for an 'mark contact address uncontactable' action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#mark_contact_address_uncontactable_action_settings OutboundDigitalruleset#mark_contact_address_uncontactable_action_settings}
  */
  readonly markContactAddressUncontactableActionSettings?: string;
  /**
  * append_to_dnc_action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#append_to_dnc_action_settings OutboundDigitalruleset#append_to_dnc_action_settings}
  */
  readonly appendToDncActionSettings?: OutboundDigitalrulesetRulesActionsAppendToDncActionSettings;
  /**
  * mark_contact_uncontactable_action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#mark_contact_uncontactable_action_settings OutboundDigitalruleset#mark_contact_uncontactable_action_settings}
  */
  readonly markContactUncontactableActionSettings?: OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings;
  /**
  * set_content_template_action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#set_content_template_action_settings OutboundDigitalruleset#set_content_template_action_settings}
  */
  readonly setContentTemplateActionSettings?: OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings;
  /**
  * set_sms_phone_number_action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#set_sms_phone_number_action_settings OutboundDigitalruleset#set_sms_phone_number_action_settings}
  */
  readonly setSmsPhoneNumberActionSettings?: OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings;
  /**
  * update_contact_column_action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#update_contact_column_action_settings OutboundDigitalruleset#update_contact_column_action_settings}
  */
  readonly updateContactColumnActionSettings?: OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings;
}

export function outboundDigitalrulesetRulesActionsToTerraform(struct?: OutboundDigitalrulesetRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_send_action_settings: cdktf.stringToTerraform(struct!.doNotSendActionSettings),
    mark_contact_address_uncontactable_action_settings: cdktf.stringToTerraform(struct!.markContactAddressUncontactableActionSettings),
    append_to_dnc_action_settings: outboundDigitalrulesetRulesActionsAppendToDncActionSettingsToTerraform(struct!.appendToDncActionSettings),
    mark_contact_uncontactable_action_settings: outboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsToTerraform(struct!.markContactUncontactableActionSettings),
    set_content_template_action_settings: outboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsToTerraform(struct!.setContentTemplateActionSettings),
    set_sms_phone_number_action_settings: outboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsToTerraform(struct!.setSmsPhoneNumberActionSettings),
    update_contact_column_action_settings: outboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsToTerraform(struct!.updateContactColumnActionSettings),
  }
}


export function outboundDigitalrulesetRulesActionsToHclTerraform(struct?: OutboundDigitalrulesetRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_not_send_action_settings: {
      value: cdktf.stringToHclTerraform(struct!.doNotSendActionSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mark_contact_address_uncontactable_action_settings: {
      value: cdktf.stringToHclTerraform(struct!.markContactAddressUncontactableActionSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_to_dnc_action_settings: {
      value: outboundDigitalrulesetRulesActionsAppendToDncActionSettingsToHclTerraform(struct!.appendToDncActionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesActionsAppendToDncActionSettingsList",
    },
    mark_contact_uncontactable_action_settings: {
      value: outboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsToHclTerraform(struct!.markContactUncontactableActionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsList",
    },
    set_content_template_action_settings: {
      value: outboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsToHclTerraform(struct!.setContentTemplateActionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsList",
    },
    set_sms_phone_number_action_settings: {
      value: outboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsToHclTerraform(struct!.setSmsPhoneNumberActionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsList",
    },
    update_contact_column_action_settings: {
      value: outboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsToHclTerraform(struct!.updateContactColumnActionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundDigitalrulesetRulesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doNotSendActionSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotSendActionSettings = this._doNotSendActionSettings;
    }
    if (this._markContactAddressUncontactableActionSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.markContactAddressUncontactableActionSettings = this._markContactAddressUncontactableActionSettings;
    }
    if (this._appendToDncActionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToDncActionSettings = this._appendToDncActionSettings?.internalValue;
    }
    if (this._markContactUncontactableActionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markContactUncontactableActionSettings = this._markContactUncontactableActionSettings?.internalValue;
    }
    if (this._setContentTemplateActionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setContentTemplateActionSettings = this._setContentTemplateActionSettings?.internalValue;
    }
    if (this._setSmsPhoneNumberActionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSmsPhoneNumberActionSettings = this._setSmsPhoneNumberActionSettings?.internalValue;
    }
    if (this._updateContactColumnActionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateContactColumnActionSettings = this._updateContactColumnActionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doNotSendActionSettings = undefined;
      this._markContactAddressUncontactableActionSettings = undefined;
      this._appendToDncActionSettings.internalValue = undefined;
      this._markContactUncontactableActionSettings.internalValue = undefined;
      this._setContentTemplateActionSettings.internalValue = undefined;
      this._setSmsPhoneNumberActionSettings.internalValue = undefined;
      this._updateContactColumnActionSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doNotSendActionSettings = value.doNotSendActionSettings;
      this._markContactAddressUncontactableActionSettings = value.markContactAddressUncontactableActionSettings;
      this._appendToDncActionSettings.internalValue = value.appendToDncActionSettings;
      this._markContactUncontactableActionSettings.internalValue = value.markContactUncontactableActionSettings;
      this._setContentTemplateActionSettings.internalValue = value.setContentTemplateActionSettings;
      this._setSmsPhoneNumberActionSettings.internalValue = value.setSmsPhoneNumberActionSettings;
      this._updateContactColumnActionSettings.internalValue = value.updateContactColumnActionSettings;
    }
  }

  // do_not_send_action_settings - computed: true, optional: true, required: false
  private _doNotSendActionSettings?: string; 
  public get doNotSendActionSettings() {
    return this.getStringAttribute('do_not_send_action_settings');
  }
  public set doNotSendActionSettings(value: string) {
    this._doNotSendActionSettings = value;
  }
  public resetDoNotSendActionSettings() {
    this._doNotSendActionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotSendActionSettingsInput() {
    return this._doNotSendActionSettings;
  }

  // mark_contact_address_uncontactable_action_settings - computed: true, optional: true, required: false
  private _markContactAddressUncontactableActionSettings?: string; 
  public get markContactAddressUncontactableActionSettings() {
    return this.getStringAttribute('mark_contact_address_uncontactable_action_settings');
  }
  public set markContactAddressUncontactableActionSettings(value: string) {
    this._markContactAddressUncontactableActionSettings = value;
  }
  public resetMarkContactAddressUncontactableActionSettings() {
    this._markContactAddressUncontactableActionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markContactAddressUncontactableActionSettingsInput() {
    return this._markContactAddressUncontactableActionSettings;
  }

  // append_to_dnc_action_settings - computed: false, optional: true, required: false
  private _appendToDncActionSettings = new OutboundDigitalrulesetRulesActionsAppendToDncActionSettingsOutputReference(this, "append_to_dnc_action_settings");
  public get appendToDncActionSettings() {
    return this._appendToDncActionSettings;
  }
  public putAppendToDncActionSettings(value: OutboundDigitalrulesetRulesActionsAppendToDncActionSettings) {
    this._appendToDncActionSettings.internalValue = value;
  }
  public resetAppendToDncActionSettings() {
    this._appendToDncActionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToDncActionSettingsInput() {
    return this._appendToDncActionSettings.internalValue;
  }

  // mark_contact_uncontactable_action_settings - computed: false, optional: true, required: false
  private _markContactUncontactableActionSettings = new OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettingsOutputReference(this, "mark_contact_uncontactable_action_settings");
  public get markContactUncontactableActionSettings() {
    return this._markContactUncontactableActionSettings;
  }
  public putMarkContactUncontactableActionSettings(value: OutboundDigitalrulesetRulesActionsMarkContactUncontactableActionSettings) {
    this._markContactUncontactableActionSettings.internalValue = value;
  }
  public resetMarkContactUncontactableActionSettings() {
    this._markContactUncontactableActionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markContactUncontactableActionSettingsInput() {
    return this._markContactUncontactableActionSettings.internalValue;
  }

  // set_content_template_action_settings - computed: false, optional: true, required: false
  private _setContentTemplateActionSettings = new OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettingsOutputReference(this, "set_content_template_action_settings");
  public get setContentTemplateActionSettings() {
    return this._setContentTemplateActionSettings;
  }
  public putSetContentTemplateActionSettings(value: OutboundDigitalrulesetRulesActionsSetContentTemplateActionSettings) {
    this._setContentTemplateActionSettings.internalValue = value;
  }
  public resetSetContentTemplateActionSettings() {
    this._setContentTemplateActionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setContentTemplateActionSettingsInput() {
    return this._setContentTemplateActionSettings.internalValue;
  }

  // set_sms_phone_number_action_settings - computed: false, optional: true, required: false
  private _setSmsPhoneNumberActionSettings = new OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettingsOutputReference(this, "set_sms_phone_number_action_settings");
  public get setSmsPhoneNumberActionSettings() {
    return this._setSmsPhoneNumberActionSettings;
  }
  public putSetSmsPhoneNumberActionSettings(value: OutboundDigitalrulesetRulesActionsSetSmsPhoneNumberActionSettings) {
    this._setSmsPhoneNumberActionSettings.internalValue = value;
  }
  public resetSetSmsPhoneNumberActionSettings() {
    this._setSmsPhoneNumberActionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSmsPhoneNumberActionSettingsInput() {
    return this._setSmsPhoneNumberActionSettings.internalValue;
  }

  // update_contact_column_action_settings - computed: false, optional: true, required: false
  private _updateContactColumnActionSettings = new OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettingsOutputReference(this, "update_contact_column_action_settings");
  public get updateContactColumnActionSettings() {
    return this._updateContactColumnActionSettings;
  }
  public putUpdateContactColumnActionSettings(value: OutboundDigitalrulesetRulesActionsUpdateContactColumnActionSettings) {
    this._updateContactColumnActionSettings.internalValue = value;
  }
  public resetUpdateContactColumnActionSettings() {
    this._updateContactColumnActionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateContactColumnActionSettingsInput() {
    return this._updateContactColumnActionSettings.internalValue;
  }
}

export class OutboundDigitalrulesetRulesActionsList extends cdktf.ComplexList {
  public internalValue? : OutboundDigitalrulesetRulesActions[] | cdktf.IResolvable

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
  public get(index: number): OutboundDigitalrulesetRulesActionsOutputReference {
    return new OutboundDigitalrulesetRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings {
  /**
  * The operator to use when comparing address values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#operator OutboundDigitalruleset#operator}
  */
  readonly operator: string;
  /**
  * The value to compare against the contact's address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#value OutboundDigitalruleset#value}
  */
  readonly value: string;
}

export function outboundDigitalrulesetRulesConditionsContactAddressConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsContactAddressConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function outboundDigitalrulesetRulesConditionsContactAddressConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsContactAddressConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsContactAddressConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings {
  /**
  * The operator to use when comparing the address types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#operator OutboundDigitalruleset#operator}
  */
  readonly operator: string;
  /**
  * The type value to compare against the contact column type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#value OutboundDigitalruleset#value}
  */
  readonly value: string;
}

export function outboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function outboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings {
  /**
  * The name of the contact list column to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#column_name OutboundDigitalruleset#column_name}
  */
  readonly columnName: string;
  /**
  * The operator to use when comparing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#operator OutboundDigitalruleset#operator}
  */
  readonly operator: string;
  /**
  * The value to compare against the contact's data. If 'value_type' is Numeric or Period, value is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#value OutboundDigitalruleset#value}
  */
  readonly value?: string;
  /**
  * The data type the value should be treated as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#value_type OutboundDigitalruleset#value_type}
  */
  readonly valueType: string;
}

export function outboundDigitalrulesetRulesConditionsContactColumnConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsContactColumnConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function outboundDigitalrulesetRulesConditionsContactColumnConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsContactColumnConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsContactColumnConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._operator = value.operator;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}
export interface OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings {
  /**
  * The name of a contact column whose data will be passed to the data action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_column_name OutboundDigitalruleset#contact_column_name}
  */
  readonly contactColumnName: string;
  /**
  * The name of an input field from the data action that the contact column data will be passed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#data_action_field OutboundDigitalruleset#data_action_field}
  */
  readonly dataActionField: string;
}

export function outboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_column_name: cdktf.stringToTerraform(struct!.contactColumnName),
    data_action_field: cdktf.stringToTerraform(struct!.dataActionField),
  }
}


export function outboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_column_name: {
      value: cdktf.stringToHclTerraform(struct!.contactColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_action_field: {
      value: cdktf.stringToHclTerraform(struct!.dataActionField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnName = this._contactColumnName;
    }
    if (this._dataActionField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionField = this._dataActionField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactColumnName = undefined;
      this._dataActionField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactColumnName = value.contactColumnName;
      this._dataActionField = value.dataActionField;
    }
  }

  // contact_column_name - computed: false, optional: false, required: true
  private _contactColumnName?: string; 
  public get contactColumnName() {
    return this.getStringAttribute('contact_column_name');
  }
  public set contactColumnName(value: string) {
    this._contactColumnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnNameInput() {
    return this._contactColumnName;
  }

  // data_action_field - computed: false, optional: false, required: true
  private _dataActionField?: string; 
  public get dataActionField() {
    return this.getStringAttribute('data_action_field');
  }
  public set dataActionField(value: string) {
    this._dataActionField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionFieldInput() {
    return this._dataActionField;
  }
}

export class OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsList extends cdktf.ComplexList {
  public internalValue? : OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable

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
  public get(index: number): OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsOutputReference {
    return new OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates {
  /**
  * The value to compare against for this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#comparison_value OutboundDigitalruleset#comparison_value}
  */
  readonly comparisonValue: string;
  /**
  * If true, inverts the result of evaluating this Predicate. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#inverted OutboundDigitalruleset#inverted}
  */
  readonly inverted: boolean | cdktf.IResolvable;
  /**
  * The name of an output field from the data action's output to use for this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#output_field OutboundDigitalruleset#output_field}
  */
  readonly outputField: string;
  /**
  * The result of this predicate if the requested output field is missing from the data action's result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#output_field_missing_resolution OutboundDigitalruleset#output_field_missing_resolution}
  */
  readonly outputFieldMissingResolution: boolean | cdktf.IResolvable;
  /**
  * The operation with which to evaluate this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#output_operator OutboundDigitalruleset#output_operator}
  */
  readonly outputOperator: string;
}

export function outboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesToTerraform(struct?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_value: cdktf.stringToTerraform(struct!.comparisonValue),
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    output_field: cdktf.stringToTerraform(struct!.outputField),
    output_field_missing_resolution: cdktf.booleanToTerraform(struct!.outputFieldMissingResolution),
    output_operator: cdktf.stringToTerraform(struct!.outputOperator),
  }
}


export function outboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_value: {
      value: cdktf.stringToHclTerraform(struct!.comparisonValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverted: {
      value: cdktf.booleanToHclTerraform(struct!.inverted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_field: {
      value: cdktf.stringToHclTerraform(struct!.outputField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_field_missing_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.outputFieldMissingResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_operator: {
      value: cdktf.stringToHclTerraform(struct!.outputOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonValue = this._comparisonValue;
    }
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._outputField !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputField = this._outputField;
    }
    if (this._outputFieldMissingResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFieldMissingResolution = this._outputFieldMissingResolution;
    }
    if (this._outputOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputOperator = this._outputOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonValue = undefined;
      this._inverted = undefined;
      this._outputField = undefined;
      this._outputFieldMissingResolution = undefined;
      this._outputOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonValue = value.comparisonValue;
      this._inverted = value.inverted;
      this._outputField = value.outputField;
      this._outputFieldMissingResolution = value.outputFieldMissingResolution;
      this._outputOperator = value.outputOperator;
    }
  }

  // comparison_value - computed: false, optional: false, required: true
  private _comparisonValue?: string; 
  public get comparisonValue() {
    return this.getStringAttribute('comparison_value');
  }
  public set comparisonValue(value: string) {
    this._comparisonValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonValueInput() {
    return this._comparisonValue;
  }

  // inverted - computed: false, optional: false, required: true
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // output_field - computed: false, optional: false, required: true
  private _outputField?: string; 
  public get outputField() {
    return this.getStringAttribute('output_field');
  }
  public set outputField(value: string) {
    this._outputField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldInput() {
    return this._outputField;
  }

  // output_field_missing_resolution - computed: false, optional: false, required: true
  private _outputFieldMissingResolution?: boolean | cdktf.IResolvable; 
  public get outputFieldMissingResolution() {
    return this.getBooleanAttribute('output_field_missing_resolution');
  }
  public set outputFieldMissingResolution(value: boolean | cdktf.IResolvable) {
    this._outputFieldMissingResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldMissingResolutionInput() {
    return this._outputFieldMissingResolution;
  }

  // output_operator - computed: false, optional: false, required: true
  private _outputOperator?: string; 
  public get outputOperator() {
    return this.getStringAttribute('output_operator');
  }
  public set outputOperator(value: string) {
    this._outputOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputOperatorInput() {
    return this._outputOperator;
  }
}

export class OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesList extends cdktf.ComplexList {
  public internalValue? : OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates[] | cdktf.IResolvable

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
  public get(index: number): OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesOutputReference {
    return new OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundDigitalrulesetRulesConditionsDataActionConditionSettings {
  /**
  * The input field from the data action that the contactId will be passed into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_id_field OutboundDigitalruleset#contact_id_field}
  */
  readonly contactIdField?: string;
  /**
  * The Data Action Id to use for this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#data_action_id OutboundDigitalruleset#data_action_id}
  */
  readonly dataActionId: string;
  /**
  * The result of this condition if the data action returns a result indicating there was no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#data_not_found_resolution OutboundDigitalruleset#data_not_found_resolution}
  */
  readonly dataNotFoundResolution: boolean | cdktf.IResolvable;
  /**
  * contact_column_to_data_action_field_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_column_to_data_action_field_mappings OutboundDigitalruleset#contact_column_to_data_action_field_mappings}
  */
  readonly contactColumnToDataActionFieldMappings?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable;
  /**
  * predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#predicates OutboundDigitalruleset#predicates}
  */
  readonly predicates?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates[] | cdktf.IResolvable;
}

export function outboundDigitalrulesetRulesConditionsDataActionConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsDataActionConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_id_field: cdktf.stringToTerraform(struct!.contactIdField),
    data_action_id: cdktf.stringToTerraform(struct!.dataActionId),
    data_not_found_resolution: cdktf.booleanToTerraform(struct!.dataNotFoundResolution),
    contact_column_to_data_action_field_mappings: cdktf.listMapper(outboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsToTerraform, true)(struct!.contactColumnToDataActionFieldMappings),
    predicates: cdktf.listMapper(outboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesToTerraform, true)(struct!.predicates),
  }
}


export function outboundDigitalrulesetRulesConditionsDataActionConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsDataActionConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_id_field: {
      value: cdktf.stringToHclTerraform(struct!.contactIdField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_action_id: {
      value: cdktf.stringToHclTerraform(struct!.dataActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_not_found_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.dataNotFoundResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    contact_column_to_data_action_field_mappings: {
      value: cdktf.listMapperHcl(outboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsToHclTerraform, true)(struct!.contactColumnToDataActionFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsList",
    },
    predicates: {
      value: cdktf.listMapperHcl(outboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesToHclTerraform, true)(struct!.predicates),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsDataActionConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactIdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactIdField = this._contactIdField;
    }
    if (this._dataActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionId = this._dataActionId;
    }
    if (this._dataNotFoundResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNotFoundResolution = this._dataNotFoundResolution;
    }
    if (this._contactColumnToDataActionFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnToDataActionFieldMappings = this._contactColumnToDataActionFieldMappings?.internalValue;
    }
    if (this._predicates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsDataActionConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactIdField = undefined;
      this._dataActionId = undefined;
      this._dataNotFoundResolution = undefined;
      this._contactColumnToDataActionFieldMappings.internalValue = undefined;
      this._predicates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactIdField = value.contactIdField;
      this._dataActionId = value.dataActionId;
      this._dataNotFoundResolution = value.dataNotFoundResolution;
      this._contactColumnToDataActionFieldMappings.internalValue = value.contactColumnToDataActionFieldMappings;
      this._predicates.internalValue = value.predicates;
    }
  }

  // contact_id_field - computed: false, optional: true, required: false
  private _contactIdField?: string; 
  public get contactIdField() {
    return this.getStringAttribute('contact_id_field');
  }
  public set contactIdField(value: string) {
    this._contactIdField = value;
  }
  public resetContactIdField() {
    this._contactIdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdFieldInput() {
    return this._contactIdField;
  }

  // data_action_id - computed: false, optional: false, required: true
  private _dataActionId?: string; 
  public get dataActionId() {
    return this.getStringAttribute('data_action_id');
  }
  public set dataActionId(value: string) {
    this._dataActionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionIdInput() {
    return this._dataActionId;
  }

  // data_not_found_resolution - computed: false, optional: false, required: true
  private _dataNotFoundResolution?: boolean | cdktf.IResolvable; 
  public get dataNotFoundResolution() {
    return this.getBooleanAttribute('data_not_found_resolution');
  }
  public set dataNotFoundResolution(value: boolean | cdktf.IResolvable) {
    this._dataNotFoundResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNotFoundResolutionInput() {
    return this._dataNotFoundResolution;
  }

  // contact_column_to_data_action_field_mappings - computed: false, optional: true, required: false
  private _contactColumnToDataActionFieldMappings = new OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappingsList(this, "contact_column_to_data_action_field_mappings", false);
  public get contactColumnToDataActionFieldMappings() {
    return this._contactColumnToDataActionFieldMappings;
  }
  public putContactColumnToDataActionFieldMappings(value: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable) {
    this._contactColumnToDataActionFieldMappings.internalValue = value;
  }
  public resetContactColumnToDataActionFieldMappings() {
    this._contactColumnToDataActionFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnToDataActionFieldMappingsInput() {
    return this._contactColumnToDataActionFieldMappings.internalValue;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates = new OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicatesList(this, "predicates", false);
  public get predicates() {
    return this._predicates;
  }
  public putPredicates(value: OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsPredicates[] | cdktf.IResolvable) {
    this._predicates.internalValue = value;
  }
  public resetPredicates() {
    this._predicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates.internalValue;
  }
}
export interface OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings {
  /**
  * The name of the contact column to evaluate for Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#email_column_name OutboundDigitalruleset#email_column_name}
  */
  readonly emailColumnName?: string;
  /**
  * The operator to use when comparing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#operator OutboundDigitalruleset#operator}
  */
  readonly operator: string;
  /**
  * The name of the contact column to evaluate for SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#sms_column_name OutboundDigitalruleset#sms_column_name}
  */
  readonly smsColumnName?: string;
  /**
  * The period value to compare against the contact's data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#value OutboundDigitalruleset#value}
  */
  readonly value: string;
}

export function outboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_column_name: cdktf.stringToTerraform(struct!.emailColumnName),
    operator: cdktf.stringToTerraform(struct!.operator),
    sms_column_name: cdktf.stringToTerraform(struct!.smsColumnName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function outboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_column_name: {
      value: cdktf.stringToHclTerraform(struct!.emailColumnName),
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
    sms_column_name: {
      value: cdktf.stringToHclTerraform(struct!.smsColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailColumnName = this._emailColumnName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._smsColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsColumnName = this._smsColumnName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailColumnName = undefined;
      this._operator = undefined;
      this._smsColumnName = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailColumnName = value.emailColumnName;
      this._operator = value.operator;
      this._smsColumnName = value.smsColumnName;
      this._value = value.value;
    }
  }

  // email_column_name - computed: false, optional: true, required: false
  private _emailColumnName?: string; 
  public get emailColumnName() {
    return this.getStringAttribute('email_column_name');
  }
  public set emailColumnName(value: string) {
    this._emailColumnName = value;
  }
  public resetEmailColumnName() {
    this._emailColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailColumnNameInput() {
    return this._emailColumnName;
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

  // sms_column_name - computed: false, optional: true, required: false
  private _smsColumnName?: string; 
  public get smsColumnName() {
    return this.getStringAttribute('sms_column_name');
  }
  public set smsColumnName(value: string) {
    this._smsColumnName = value;
  }
  public resetSmsColumnName() {
    this._smsColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsColumnNameInput() {
    return this._smsColumnName;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings {
  /**
  * A list of media types to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#media_types OutboundDigitalruleset#media_types}
  */
  readonly mediaTypes: string[];
  /**
  * The operator to use when comparing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#operator OutboundDigitalruleset#operator}
  */
  readonly operator: string;
  /**
  * The period value to compare against the contact's data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#value OutboundDigitalruleset#value}
  */
  readonly value: string;
}

export function outboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaTypes),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function outboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaTypes = this._mediaTypes;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mediaTypes = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mediaTypes = value.mediaTypes;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // media_types - computed: false, optional: false, required: true
  private _mediaTypes?: string[]; 
  public get mediaTypes() {
    return this.getListAttribute('media_types');
  }
  public set mediaTypes(value: string[]) {
    this._mediaTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypesInput() {
    return this._mediaTypes;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings {
  /**
  * The name of the contact column to evaluate for Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#email_column_name OutboundDigitalruleset#email_column_name}
  */
  readonly emailColumnName?: string;
  /**
  * A list of wrapup code identifiers to match for Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#email_wrapup_codes OutboundDigitalruleset#email_wrapup_codes}
  */
  readonly emailWrapupCodes?: string[];
  /**
  * The name of the contact column to evaluate for SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#sms_column_name OutboundDigitalruleset#sms_column_name}
  */
  readonly smsColumnName?: string;
  /**
  * A list of wrapup code identifiers to match for SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#sms_wrapup_codes OutboundDigitalruleset#sms_wrapup_codes}
  */
  readonly smsWrapupCodes?: string[];
}

export function outboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_column_name: cdktf.stringToTerraform(struct!.emailColumnName),
    email_wrapup_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailWrapupCodes),
    sms_column_name: cdktf.stringToTerraform(struct!.smsColumnName),
    sms_wrapup_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.smsWrapupCodes),
  }
}


export function outboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_column_name: {
      value: cdktf.stringToHclTerraform(struct!.emailColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_wrapup_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailWrapupCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sms_column_name: {
      value: cdktf.stringToHclTerraform(struct!.smsColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_wrapup_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.smsWrapupCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailColumnName = this._emailColumnName;
    }
    if (this._emailWrapupCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailWrapupCodes = this._emailWrapupCodes;
    }
    if (this._smsColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsColumnName = this._smsColumnName;
    }
    if (this._smsWrapupCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsWrapupCodes = this._smsWrapupCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailColumnName = undefined;
      this._emailWrapupCodes = undefined;
      this._smsColumnName = undefined;
      this._smsWrapupCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailColumnName = value.emailColumnName;
      this._emailWrapupCodes = value.emailWrapupCodes;
      this._smsColumnName = value.smsColumnName;
      this._smsWrapupCodes = value.smsWrapupCodes;
    }
  }

  // email_column_name - computed: false, optional: true, required: false
  private _emailColumnName?: string; 
  public get emailColumnName() {
    return this.getStringAttribute('email_column_name');
  }
  public set emailColumnName(value: string) {
    this._emailColumnName = value;
  }
  public resetEmailColumnName() {
    this._emailColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailColumnNameInput() {
    return this._emailColumnName;
  }

  // email_wrapup_codes - computed: false, optional: true, required: false
  private _emailWrapupCodes?: string[]; 
  public get emailWrapupCodes() {
    return this.getListAttribute('email_wrapup_codes');
  }
  public set emailWrapupCodes(value: string[]) {
    this._emailWrapupCodes = value;
  }
  public resetEmailWrapupCodes() {
    this._emailWrapupCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailWrapupCodesInput() {
    return this._emailWrapupCodes;
  }

  // sms_column_name - computed: false, optional: true, required: false
  private _smsColumnName?: string; 
  public get smsColumnName() {
    return this.getStringAttribute('sms_column_name');
  }
  public set smsColumnName(value: string) {
    this._smsColumnName = value;
  }
  public resetSmsColumnName() {
    this._smsColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsColumnNameInput() {
    return this._smsColumnName;
  }

  // sms_wrapup_codes - computed: false, optional: true, required: false
  private _smsWrapupCodes?: string[]; 
  public get smsWrapupCodes() {
    return this.getListAttribute('sms_wrapup_codes');
  }
  public set smsWrapupCodes(value: string[]) {
    this._smsWrapupCodes = value;
  }
  public resetSmsWrapupCodes() {
    this._smsWrapupCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsWrapupCodesInput() {
    return this._smsWrapupCodes;
  }
}
export interface OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings {
  /**
  * A list of wrapup code identifiers to match for Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#email_wrapup_codes OutboundDigitalruleset#email_wrapup_codes}
  */
  readonly emailWrapupCodes?: string[];
  /**
  * A list of wrapup code identifiers to match for SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#sms_wrapup_codes OutboundDigitalruleset#sms_wrapup_codes}
  */
  readonly smsWrapupCodes?: string[];
}

export function outboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsToTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_wrapup_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailWrapupCodes),
    sms_wrapup_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.smsWrapupCodes),
  }
}


export function outboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsOutputReference | OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_wrapup_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailWrapupCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sms_wrapup_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.smsWrapupCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailWrapupCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailWrapupCodes = this._emailWrapupCodes;
    }
    if (this._smsWrapupCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsWrapupCodes = this._smsWrapupCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailWrapupCodes = undefined;
      this._smsWrapupCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailWrapupCodes = value.emailWrapupCodes;
      this._smsWrapupCodes = value.smsWrapupCodes;
    }
  }

  // email_wrapup_codes - computed: false, optional: true, required: false
  private _emailWrapupCodes?: string[]; 
  public get emailWrapupCodes() {
    return this.getListAttribute('email_wrapup_codes');
  }
  public set emailWrapupCodes(value: string[]) {
    this._emailWrapupCodes = value;
  }
  public resetEmailWrapupCodes() {
    this._emailWrapupCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailWrapupCodesInput() {
    return this._emailWrapupCodes;
  }

  // sms_wrapup_codes - computed: false, optional: true, required: false
  private _smsWrapupCodes?: string[]; 
  public get smsWrapupCodes() {
    return this.getListAttribute('sms_wrapup_codes');
  }
  public set smsWrapupCodes(value: string[]) {
    this._smsWrapupCodes = value;
  }
  public resetSmsWrapupCodes() {
    this._smsWrapupCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsWrapupCodesInput() {
    return this._smsWrapupCodes;
  }
}
export interface OutboundDigitalrulesetRulesConditions {
  /**
  * If true, inverts the result of evaluating this condition. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#inverted OutboundDigitalruleset#inverted}
  */
  readonly inverted?: boolean | cdktf.IResolvable;
  /**
  * contact_address_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_address_condition_settings OutboundDigitalruleset#contact_address_condition_settings}
  */
  readonly contactAddressConditionSettings?: OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings;
  /**
  * contact_address_type_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_address_type_condition_settings OutboundDigitalruleset#contact_address_type_condition_settings}
  */
  readonly contactAddressTypeConditionSettings?: OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings;
  /**
  * contact_column_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#contact_column_condition_settings OutboundDigitalruleset#contact_column_condition_settings}
  */
  readonly contactColumnConditionSettings?: OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings;
  /**
  * data_action_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#data_action_condition_settings OutboundDigitalruleset#data_action_condition_settings}
  */
  readonly dataActionConditionSettings?: OutboundDigitalrulesetRulesConditionsDataActionConditionSettings;
  /**
  * last_attempt_by_column_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#last_attempt_by_column_condition_settings OutboundDigitalruleset#last_attempt_by_column_condition_settings}
  */
  readonly lastAttemptByColumnConditionSettings?: OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings;
  /**
  * last_attempt_overall_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#last_attempt_overall_condition_settings OutboundDigitalruleset#last_attempt_overall_condition_settings}
  */
  readonly lastAttemptOverallConditionSettings?: OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings;
  /**
  * last_result_by_column_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#last_result_by_column_condition_settings OutboundDigitalruleset#last_result_by_column_condition_settings}
  */
  readonly lastResultByColumnConditionSettings?: OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings;
  /**
  * last_result_overall_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#last_result_overall_condition_settings OutboundDigitalruleset#last_result_overall_condition_settings}
  */
  readonly lastResultOverallConditionSettings?: OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings;
}

export function outboundDigitalrulesetRulesConditionsToTerraform(struct?: OutboundDigitalrulesetRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    contact_address_condition_settings: outboundDigitalrulesetRulesConditionsContactAddressConditionSettingsToTerraform(struct!.contactAddressConditionSettings),
    contact_address_type_condition_settings: outboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsToTerraform(struct!.contactAddressTypeConditionSettings),
    contact_column_condition_settings: outboundDigitalrulesetRulesConditionsContactColumnConditionSettingsToTerraform(struct!.contactColumnConditionSettings),
    data_action_condition_settings: outboundDigitalrulesetRulesConditionsDataActionConditionSettingsToTerraform(struct!.dataActionConditionSettings),
    last_attempt_by_column_condition_settings: outboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsToTerraform(struct!.lastAttemptByColumnConditionSettings),
    last_attempt_overall_condition_settings: outboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsToTerraform(struct!.lastAttemptOverallConditionSettings),
    last_result_by_column_condition_settings: outboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsToTerraform(struct!.lastResultByColumnConditionSettings),
    last_result_overall_condition_settings: outboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsToTerraform(struct!.lastResultOverallConditionSettings),
  }
}


export function outboundDigitalrulesetRulesConditionsToHclTerraform(struct?: OutboundDigitalrulesetRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverted: {
      value: cdktf.booleanToHclTerraform(struct!.inverted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    contact_address_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsContactAddressConditionSettingsToHclTerraform(struct!.contactAddressConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsContactAddressConditionSettingsList",
    },
    contact_address_type_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsToHclTerraform(struct!.contactAddressTypeConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsList",
    },
    contact_column_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsContactColumnConditionSettingsToHclTerraform(struct!.contactColumnConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsContactColumnConditionSettingsList",
    },
    data_action_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsDataActionConditionSettingsToHclTerraform(struct!.dataActionConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsList",
    },
    last_attempt_by_column_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsToHclTerraform(struct!.lastAttemptByColumnConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsList",
    },
    last_attempt_overall_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsToHclTerraform(struct!.lastAttemptOverallConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsList",
    },
    last_result_by_column_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsToHclTerraform(struct!.lastResultByColumnConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsList",
    },
    last_result_overall_condition_settings: {
      value: outboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsToHclTerraform(struct!.lastResultOverallConditionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundDigitalrulesetRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._contactAddressConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactAddressConditionSettings = this._contactAddressConditionSettings?.internalValue;
    }
    if (this._contactAddressTypeConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactAddressTypeConditionSettings = this._contactAddressTypeConditionSettings?.internalValue;
    }
    if (this._contactColumnConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnConditionSettings = this._contactColumnConditionSettings?.internalValue;
    }
    if (this._dataActionConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionConditionSettings = this._dataActionConditionSettings?.internalValue;
    }
    if (this._lastAttemptByColumnConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAttemptByColumnConditionSettings = this._lastAttemptByColumnConditionSettings?.internalValue;
    }
    if (this._lastAttemptOverallConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAttemptOverallConditionSettings = this._lastAttemptOverallConditionSettings?.internalValue;
    }
    if (this._lastResultByColumnConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastResultByColumnConditionSettings = this._lastResultByColumnConditionSettings?.internalValue;
    }
    if (this._lastResultOverallConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastResultOverallConditionSettings = this._lastResultOverallConditionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverted = undefined;
      this._contactAddressConditionSettings.internalValue = undefined;
      this._contactAddressTypeConditionSettings.internalValue = undefined;
      this._contactColumnConditionSettings.internalValue = undefined;
      this._dataActionConditionSettings.internalValue = undefined;
      this._lastAttemptByColumnConditionSettings.internalValue = undefined;
      this._lastAttemptOverallConditionSettings.internalValue = undefined;
      this._lastResultByColumnConditionSettings.internalValue = undefined;
      this._lastResultOverallConditionSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverted = value.inverted;
      this._contactAddressConditionSettings.internalValue = value.contactAddressConditionSettings;
      this._contactAddressTypeConditionSettings.internalValue = value.contactAddressTypeConditionSettings;
      this._contactColumnConditionSettings.internalValue = value.contactColumnConditionSettings;
      this._dataActionConditionSettings.internalValue = value.dataActionConditionSettings;
      this._lastAttemptByColumnConditionSettings.internalValue = value.lastAttemptByColumnConditionSettings;
      this._lastAttemptOverallConditionSettings.internalValue = value.lastAttemptOverallConditionSettings;
      this._lastResultByColumnConditionSettings.internalValue = value.lastResultByColumnConditionSettings;
      this._lastResultOverallConditionSettings.internalValue = value.lastResultOverallConditionSettings;
    }
  }

  // inverted - computed: false, optional: true, required: false
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  public resetInverted() {
    this._inverted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // contact_address_condition_settings - computed: false, optional: true, required: false
  private _contactAddressConditionSettings = new OutboundDigitalrulesetRulesConditionsContactAddressConditionSettingsOutputReference(this, "contact_address_condition_settings");
  public get contactAddressConditionSettings() {
    return this._contactAddressConditionSettings;
  }
  public putContactAddressConditionSettings(value: OutboundDigitalrulesetRulesConditionsContactAddressConditionSettings) {
    this._contactAddressConditionSettings.internalValue = value;
  }
  public resetContactAddressConditionSettings() {
    this._contactAddressConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactAddressConditionSettingsInput() {
    return this._contactAddressConditionSettings.internalValue;
  }

  // contact_address_type_condition_settings - computed: false, optional: true, required: false
  private _contactAddressTypeConditionSettings = new OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettingsOutputReference(this, "contact_address_type_condition_settings");
  public get contactAddressTypeConditionSettings() {
    return this._contactAddressTypeConditionSettings;
  }
  public putContactAddressTypeConditionSettings(value: OutboundDigitalrulesetRulesConditionsContactAddressTypeConditionSettings) {
    this._contactAddressTypeConditionSettings.internalValue = value;
  }
  public resetContactAddressTypeConditionSettings() {
    this._contactAddressTypeConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactAddressTypeConditionSettingsInput() {
    return this._contactAddressTypeConditionSettings.internalValue;
  }

  // contact_column_condition_settings - computed: false, optional: true, required: false
  private _contactColumnConditionSettings = new OutboundDigitalrulesetRulesConditionsContactColumnConditionSettingsOutputReference(this, "contact_column_condition_settings");
  public get contactColumnConditionSettings() {
    return this._contactColumnConditionSettings;
  }
  public putContactColumnConditionSettings(value: OutboundDigitalrulesetRulesConditionsContactColumnConditionSettings) {
    this._contactColumnConditionSettings.internalValue = value;
  }
  public resetContactColumnConditionSettings() {
    this._contactColumnConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnConditionSettingsInput() {
    return this._contactColumnConditionSettings.internalValue;
  }

  // data_action_condition_settings - computed: false, optional: true, required: false
  private _dataActionConditionSettings = new OutboundDigitalrulesetRulesConditionsDataActionConditionSettingsOutputReference(this, "data_action_condition_settings");
  public get dataActionConditionSettings() {
    return this._dataActionConditionSettings;
  }
  public putDataActionConditionSettings(value: OutboundDigitalrulesetRulesConditionsDataActionConditionSettings) {
    this._dataActionConditionSettings.internalValue = value;
  }
  public resetDataActionConditionSettings() {
    this._dataActionConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionConditionSettingsInput() {
    return this._dataActionConditionSettings.internalValue;
  }

  // last_attempt_by_column_condition_settings - computed: false, optional: true, required: false
  private _lastAttemptByColumnConditionSettings = new OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettingsOutputReference(this, "last_attempt_by_column_condition_settings");
  public get lastAttemptByColumnConditionSettings() {
    return this._lastAttemptByColumnConditionSettings;
  }
  public putLastAttemptByColumnConditionSettings(value: OutboundDigitalrulesetRulesConditionsLastAttemptByColumnConditionSettings) {
    this._lastAttemptByColumnConditionSettings.internalValue = value;
  }
  public resetLastAttemptByColumnConditionSettings() {
    this._lastAttemptByColumnConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAttemptByColumnConditionSettingsInput() {
    return this._lastAttemptByColumnConditionSettings.internalValue;
  }

  // last_attempt_overall_condition_settings - computed: false, optional: true, required: false
  private _lastAttemptOverallConditionSettings = new OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettingsOutputReference(this, "last_attempt_overall_condition_settings");
  public get lastAttemptOverallConditionSettings() {
    return this._lastAttemptOverallConditionSettings;
  }
  public putLastAttemptOverallConditionSettings(value: OutboundDigitalrulesetRulesConditionsLastAttemptOverallConditionSettings) {
    this._lastAttemptOverallConditionSettings.internalValue = value;
  }
  public resetLastAttemptOverallConditionSettings() {
    this._lastAttemptOverallConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAttemptOverallConditionSettingsInput() {
    return this._lastAttemptOverallConditionSettings.internalValue;
  }

  // last_result_by_column_condition_settings - computed: false, optional: true, required: false
  private _lastResultByColumnConditionSettings = new OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettingsOutputReference(this, "last_result_by_column_condition_settings");
  public get lastResultByColumnConditionSettings() {
    return this._lastResultByColumnConditionSettings;
  }
  public putLastResultByColumnConditionSettings(value: OutboundDigitalrulesetRulesConditionsLastResultByColumnConditionSettings) {
    this._lastResultByColumnConditionSettings.internalValue = value;
  }
  public resetLastResultByColumnConditionSettings() {
    this._lastResultByColumnConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastResultByColumnConditionSettingsInput() {
    return this._lastResultByColumnConditionSettings.internalValue;
  }

  // last_result_overall_condition_settings - computed: false, optional: true, required: false
  private _lastResultOverallConditionSettings = new OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettingsOutputReference(this, "last_result_overall_condition_settings");
  public get lastResultOverallConditionSettings() {
    return this._lastResultOverallConditionSettings;
  }
  public putLastResultOverallConditionSettings(value: OutboundDigitalrulesetRulesConditionsLastResultOverallConditionSettings) {
    this._lastResultOverallConditionSettings.internalValue = value;
  }
  public resetLastResultOverallConditionSettings() {
    this._lastResultOverallConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastResultOverallConditionSettingsInput() {
    return this._lastResultOverallConditionSettings.internalValue;
  }
}

export class OutboundDigitalrulesetRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : OutboundDigitalrulesetRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): OutboundDigitalrulesetRulesConditionsOutputReference {
    return new OutboundDigitalrulesetRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundDigitalrulesetRules {
  /**
  * The category of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#category OutboundDigitalruleset#category}
  */
  readonly category: string;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#name OutboundDigitalruleset#name}
  */
  readonly name: string;
  /**
  * The ranked order of the rule. Rules are processed from lowest number to highest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#order OutboundDigitalruleset#order}
  */
  readonly order: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#actions OutboundDigitalruleset#actions}
  */
  readonly actions: OutboundDigitalrulesetRulesActions[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#conditions OutboundDigitalruleset#conditions}
  */
  readonly conditions: OutboundDigitalrulesetRulesConditions[] | cdktf.IResolvable;
}

export function outboundDigitalrulesetRulesToTerraform(struct?: OutboundDigitalrulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    actions: cdktf.listMapper(outboundDigitalrulesetRulesActionsToTerraform, true)(struct!.actions),
    conditions: cdktf.listMapper(outboundDigitalrulesetRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function outboundDigitalrulesetRulesToHclTerraform(struct?: OutboundDigitalrulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    actions: {
      value: cdktf.listMapperHcl(outboundDigitalrulesetRulesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundDigitalrulesetRulesActionsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(outboundDigitalrulesetRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundDigitalrulesetRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundDigitalrulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundDigitalrulesetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundDigitalrulesetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._order = undefined;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._name = value.name;
      this._order = value.order;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new OutboundDigitalrulesetRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: OutboundDigitalrulesetRulesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new OutboundDigitalrulesetRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: OutboundDigitalrulesetRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class OutboundDigitalrulesetRulesList extends cdktf.ComplexList {
  public internalValue? : OutboundDigitalrulesetRules[] | cdktf.IResolvable

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
  public get(index: number): OutboundDigitalrulesetRulesOutputReference {
    return new OutboundDigitalrulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset genesyscloud_outbound_digitalruleset}
*/
export class OutboundDigitalruleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_digitalruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundDigitalruleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundDigitalruleset to import
  * @param importFromId The id of the existing OutboundDigitalruleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundDigitalruleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_digitalruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_digitalruleset genesyscloud_outbound_digitalruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundDigitalrulesetConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundDigitalrulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_digitalruleset',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactListId = config.contactListId;
    this._id = config.id;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_list_id - computed: false, optional: true, required: false
  private _contactListId?: string; 
  public get contactListId() {
    return this.getStringAttribute('contact_list_id');
  }
  public set contactListId(value: string) {
    this._contactListId = value;
  }
  public resetContactListId() {
    this._contactListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListIdInput() {
    return this._contactListId;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new OutboundDigitalrulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: OutboundDigitalrulesetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_list_id: cdktf.stringToTerraform(this._contactListId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(outboundDigitalrulesetRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_list_id: {
        value: cdktf.stringToHclTerraform(this._contactListId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(outboundDigitalrulesetRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundDigitalrulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
