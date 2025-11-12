// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfRegistrationProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default group ID to assign to users who register through this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#default_group_id SelfRegistrationProfiles#default_group_id}
  */
  readonly defaultGroupId?: number;
  /**
  * The default role ID to assign to users who register through this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#default_role_id SelfRegistrationProfiles#default_role_id}
  */
  readonly defaultRoleId?: number;
  /**
  * Comma-separated list of domains to blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#domain_blacklist SelfRegistrationProfiles#domain_blacklist}
  */
  readonly domainBlacklist?: string;
  /**
  * Domain list strategy: 0 for blacklist, 1 for whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#domain_list_strategy SelfRegistrationProfiles#domain_list_strategy}
  */
  readonly domainListStrategy?: number;
  /**
  * Comma-separated list of domains to whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#domain_whitelist SelfRegistrationProfiles#domain_whitelist}
  */
  readonly domainWhitelist?: string;
  /**
  * Email verification type: 'Email MagicLink' or 'Email OTP'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#email_verification_type SelfRegistrationProfiles#email_verification_type}
  */
  readonly emailVerificationType?: string;
  /**
  * Whether the self-registration profile is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#enabled SelfRegistrationProfiles#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Help text displayed on the registration page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#helptext SelfRegistrationProfiles#helptext}
  */
  readonly helptext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#id SelfRegistrationProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the self-registration profile requires moderation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#moderated SelfRegistrationProfiles#moderated}
  */
  readonly moderated?: boolean | cdktf.IResolvable;
  /**
  * The name of the self-registration profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#name SelfRegistrationProfiles#name}
  */
  readonly name: string;
  /**
  * Thank you message displayed after registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#thankyou_message SelfRegistrationProfiles#thankyou_message}
  */
  readonly thankyouMessage?: string;
  /**
  * The URL path for the self-registration profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#url SelfRegistrationProfiles#url}
  */
  readonly url: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#fields SelfRegistrationProfiles#fields}
  */
  readonly fields?: SelfRegistrationProfilesFields[] | cdktf.IResolvable;
}
export interface SelfRegistrationProfilesFields {
  /**
  * ID of the custom attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#custom_attribute_id SelfRegistrationProfiles#custom_attribute_id}
  */
  readonly customAttributeId: number;
}

export function selfRegistrationProfilesFieldsToTerraform(struct?: SelfRegistrationProfilesFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_id: cdktf.numberToTerraform(struct!.customAttributeId),
  }
}


export function selfRegistrationProfilesFieldsToHclTerraform(struct?: SelfRegistrationProfilesFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_id: {
      value: cdktf.numberToHclTerraform(struct!.customAttributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfRegistrationProfilesFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelfRegistrationProfilesFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeId = this._customAttributeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfRegistrationProfilesFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttributeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttributeId = value.customAttributeId;
    }
  }

  // custom_attribute_id - computed: false, optional: false, required: true
  private _customAttributeId?: number; 
  public get customAttributeId() {
    return this.getNumberAttribute('custom_attribute_id');
  }
  public set customAttributeId(value: number) {
    this._customAttributeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeIdInput() {
    return this._customAttributeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SelfRegistrationProfilesFieldsList extends cdktf.ComplexList {
  public internalValue? : SelfRegistrationProfilesFields[] | cdktf.IResolvable

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
  public get(index: number): SelfRegistrationProfilesFieldsOutputReference {
    return new SelfRegistrationProfilesFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles onelogin_self_registration_profiles}
*/
export class SelfRegistrationProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_self_registration_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfRegistrationProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfRegistrationProfiles to import
  * @param importFromId The id of the existing SelfRegistrationProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfRegistrationProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_self_registration_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/self_registration_profiles onelogin_self_registration_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfRegistrationProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: SelfRegistrationProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_self_registration_profiles',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGroupId = config.defaultGroupId;
    this._defaultRoleId = config.defaultRoleId;
    this._domainBlacklist = config.domainBlacklist;
    this._domainListStrategy = config.domainListStrategy;
    this._domainWhitelist = config.domainWhitelist;
    this._emailVerificationType = config.emailVerificationType;
    this._enabled = config.enabled;
    this._helptext = config.helptext;
    this._id = config.id;
    this._moderated = config.moderated;
    this._name = config.name;
    this._thankyouMessage = config.thankyouMessage;
    this._url = config.url;
    this._fields.internalValue = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_group_id - computed: false, optional: true, required: false
  private _defaultGroupId?: number; 
  public get defaultGroupId() {
    return this.getNumberAttribute('default_group_id');
  }
  public set defaultGroupId(value: number) {
    this._defaultGroupId = value;
  }
  public resetDefaultGroupId() {
    this._defaultGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupIdInput() {
    return this._defaultGroupId;
  }

  // default_role_id - computed: false, optional: true, required: false
  private _defaultRoleId?: number; 
  public get defaultRoleId() {
    return this.getNumberAttribute('default_role_id');
  }
  public set defaultRoleId(value: number) {
    this._defaultRoleId = value;
  }
  public resetDefaultRoleId() {
    this._defaultRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleIdInput() {
    return this._defaultRoleId;
  }

  // domain_blacklist - computed: false, optional: true, required: false
  private _domainBlacklist?: string; 
  public get domainBlacklist() {
    return this.getStringAttribute('domain_blacklist');
  }
  public set domainBlacklist(value: string) {
    this._domainBlacklist = value;
  }
  public resetDomainBlacklist() {
    this._domainBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainBlacklistInput() {
    return this._domainBlacklist;
  }

  // domain_list_strategy - computed: false, optional: true, required: false
  private _domainListStrategy?: number; 
  public get domainListStrategy() {
    return this.getNumberAttribute('domain_list_strategy');
  }
  public set domainListStrategy(value: number) {
    this._domainListStrategy = value;
  }
  public resetDomainListStrategy() {
    this._domainListStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListStrategyInput() {
    return this._domainListStrategy;
  }

  // domain_whitelist - computed: false, optional: true, required: false
  private _domainWhitelist?: string; 
  public get domainWhitelist() {
    return this.getStringAttribute('domain_whitelist');
  }
  public set domainWhitelist(value: string) {
    this._domainWhitelist = value;
  }
  public resetDomainWhitelist() {
    this._domainWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainWhitelistInput() {
    return this._domainWhitelist;
  }

  // email_verification_type - computed: false, optional: true, required: false
  private _emailVerificationType?: string; 
  public get emailVerificationType() {
    return this.getStringAttribute('email_verification_type');
  }
  public set emailVerificationType(value: string) {
    this._emailVerificationType = value;
  }
  public resetEmailVerificationType() {
    this._emailVerificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationTypeInput() {
    return this._emailVerificationType;
  }

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

  // helptext - computed: false, optional: true, required: false
  private _helptext?: string; 
  public get helptext() {
    return this.getStringAttribute('helptext');
  }
  public set helptext(value: string) {
    this._helptext = value;
  }
  public resetHelptext() {
    this._helptext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helptextInput() {
    return this._helptext;
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

  // moderated - computed: false, optional: true, required: false
  private _moderated?: boolean | cdktf.IResolvable; 
  public get moderated() {
    return this.getBooleanAttribute('moderated');
  }
  public set moderated(value: boolean | cdktf.IResolvable) {
    this._moderated = value;
  }
  public resetModerated() {
    this._moderated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moderatedInput() {
    return this._moderated;
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

  // thankyou_message - computed: false, optional: true, required: false
  private _thankyouMessage?: string; 
  public get thankyouMessage() {
    return this.getStringAttribute('thankyou_message');
  }
  public set thankyouMessage(value: string) {
    this._thankyouMessage = value;
  }
  public resetThankyouMessage() {
    this._thankyouMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thankyouMessageInput() {
    return this._thankyouMessage;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new SelfRegistrationProfilesFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: SelfRegistrationProfilesFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_group_id: cdktf.numberToTerraform(this._defaultGroupId),
      default_role_id: cdktf.numberToTerraform(this._defaultRoleId),
      domain_blacklist: cdktf.stringToTerraform(this._domainBlacklist),
      domain_list_strategy: cdktf.numberToTerraform(this._domainListStrategy),
      domain_whitelist: cdktf.stringToTerraform(this._domainWhitelist),
      email_verification_type: cdktf.stringToTerraform(this._emailVerificationType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      helptext: cdktf.stringToTerraform(this._helptext),
      id: cdktf.stringToTerraform(this._id),
      moderated: cdktf.booleanToTerraform(this._moderated),
      name: cdktf.stringToTerraform(this._name),
      thankyou_message: cdktf.stringToTerraform(this._thankyouMessage),
      url: cdktf.stringToTerraform(this._url),
      fields: cdktf.listMapper(selfRegistrationProfilesFieldsToTerraform, true)(this._fields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_group_id: {
        value: cdktf.numberToHclTerraform(this._defaultGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_role_id: {
        value: cdktf.numberToHclTerraform(this._defaultRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_blacklist: {
        value: cdktf.stringToHclTerraform(this._domainBlacklist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list_strategy: {
        value: cdktf.numberToHclTerraform(this._domainListStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_whitelist: {
        value: cdktf.stringToHclTerraform(this._domainWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_verification_type: {
        value: cdktf.stringToHclTerraform(this._emailVerificationType),
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
      helptext: {
        value: cdktf.stringToHclTerraform(this._helptext),
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
      moderated: {
        value: cdktf.booleanToHclTerraform(this._moderated),
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
      thankyou_message: {
        value: cdktf.stringToHclTerraform(this._thankyouMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(selfRegistrationProfilesFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SelfRegistrationProfilesFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
