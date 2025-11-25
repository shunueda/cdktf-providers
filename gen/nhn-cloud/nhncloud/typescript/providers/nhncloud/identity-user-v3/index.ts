// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityUserV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}
  */
  readonly defaultProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#description IdentityUserV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#extra IdentityUserV3#extra}
  */
  readonly extra?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#id IdentityUserV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}
  */
  readonly ignoreChangePasswordUponFirstUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}
  */
  readonly ignoreLockoutFailureAttempts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}
  */
  readonly ignorePasswordExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}
  */
  readonly multiFactorAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#name IdentityUserV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#password IdentityUserV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#region IdentityUserV3#region}
  */
  readonly region?: string;
  /**
  * multi_factor_auth_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#multi_factor_auth_rule IdentityUserV3#multi_factor_auth_rule}
  */
  readonly multiFactorAuthRule?: IdentityUserV3MultiFactorAuthRule[] | cdktf.IResolvable;
}
export interface IdentityUserV3MultiFactorAuthRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#rule IdentityUserV3#rule}
  */
  readonly rule: string[];
}

export function identityUserV3MultiFactorAuthRuleToTerraform(struct?: IdentityUserV3MultiFactorAuthRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rule),
  }
}


export function identityUserV3MultiFactorAuthRuleToHclTerraform(struct?: IdentityUserV3MultiFactorAuthRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityUserV3MultiFactorAuthRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityUserV3MultiFactorAuthRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityUserV3MultiFactorAuthRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string[]; 
  public get rule() {
    return this.getListAttribute('rule');
  }
  public set rule(value: string[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class IdentityUserV3MultiFactorAuthRuleList extends cdktf.ComplexList {
  public internalValue? : IdentityUserV3MultiFactorAuthRule[] | cdktf.IResolvable

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
  public get(index: number): IdentityUserV3MultiFactorAuthRuleOutputReference {
    return new IdentityUserV3MultiFactorAuthRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3 nhncloud_identity_user_v3}
*/
export class IdentityUserV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_identity_user_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityUserV3 to import
  * @param importFromId The id of the existing IdentityUserV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityUserV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_identity_user_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/identity_user_v3 nhncloud_identity_user_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityUserV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityUserV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_identity_user_v3',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultProjectId = config.defaultProjectId;
    this._description = config.description;
    this._domainId = config.domainId;
    this._enabled = config.enabled;
    this._extra = config.extra;
    this._id = config.id;
    this._ignoreChangePasswordUponFirstUse = config.ignoreChangePasswordUponFirstUse;
    this._ignoreLockoutFailureAttempts = config.ignoreLockoutFailureAttempts;
    this._ignorePasswordExpiry = config.ignorePasswordExpiry;
    this._multiFactorAuthEnabled = config.multiFactorAuthEnabled;
    this._name = config.name;
    this._password = config.password;
    this._region = config.region;
    this._multiFactorAuthRule.internalValue = config.multiFactorAuthRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_project_id - computed: true, optional: true, required: false
  private _defaultProjectId?: string; 
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
  }
  public set defaultProjectId(value: string) {
    this._defaultProjectId = value;
  }
  public resetDefaultProjectId() {
    this._defaultProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectIdInput() {
    return this._defaultProjectId;
  }

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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // extra - computed: false, optional: true, required: false
  private _extra?: { [key: string]: string }; 
  public get extra() {
    return this.getStringMapAttribute('extra');
  }
  public set extra(value: { [key: string]: string }) {
    this._extra = value;
  }
  public resetExtra() {
    this._extra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra;
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

  // ignore_change_password_upon_first_use - computed: false, optional: true, required: false
  private _ignoreChangePasswordUponFirstUse?: boolean | cdktf.IResolvable; 
  public get ignoreChangePasswordUponFirstUse() {
    return this.getBooleanAttribute('ignore_change_password_upon_first_use');
  }
  public set ignoreChangePasswordUponFirstUse(value: boolean | cdktf.IResolvable) {
    this._ignoreChangePasswordUponFirstUse = value;
  }
  public resetIgnoreChangePasswordUponFirstUse() {
    this._ignoreChangePasswordUponFirstUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreChangePasswordUponFirstUseInput() {
    return this._ignoreChangePasswordUponFirstUse;
  }

  // ignore_lockout_failure_attempts - computed: false, optional: true, required: false
  private _ignoreLockoutFailureAttempts?: boolean | cdktf.IResolvable; 
  public get ignoreLockoutFailureAttempts() {
    return this.getBooleanAttribute('ignore_lockout_failure_attempts');
  }
  public set ignoreLockoutFailureAttempts(value: boolean | cdktf.IResolvable) {
    this._ignoreLockoutFailureAttempts = value;
  }
  public resetIgnoreLockoutFailureAttempts() {
    this._ignoreLockoutFailureAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLockoutFailureAttemptsInput() {
    return this._ignoreLockoutFailureAttempts;
  }

  // ignore_password_expiry - computed: false, optional: true, required: false
  private _ignorePasswordExpiry?: boolean | cdktf.IResolvable; 
  public get ignorePasswordExpiry() {
    return this.getBooleanAttribute('ignore_password_expiry');
  }
  public set ignorePasswordExpiry(value: boolean | cdktf.IResolvable) {
    this._ignorePasswordExpiry = value;
  }
  public resetIgnorePasswordExpiry() {
    this._ignorePasswordExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePasswordExpiryInput() {
    return this._ignorePasswordExpiry;
  }

  // multi_factor_auth_enabled - computed: false, optional: true, required: false
  private _multiFactorAuthEnabled?: boolean | cdktf.IResolvable; 
  public get multiFactorAuthEnabled() {
    return this.getBooleanAttribute('multi_factor_auth_enabled');
  }
  public set multiFactorAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._multiFactorAuthEnabled = value;
  }
  public resetMultiFactorAuthEnabled() {
    this._multiFactorAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthEnabledInput() {
    return this._multiFactorAuthEnabled;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // multi_factor_auth_rule - computed: false, optional: true, required: false
  private _multiFactorAuthRule = new IdentityUserV3MultiFactorAuthRuleList(this, "multi_factor_auth_rule", false);
  public get multiFactorAuthRule() {
    return this._multiFactorAuthRule;
  }
  public putMultiFactorAuthRule(value: IdentityUserV3MultiFactorAuthRule[] | cdktf.IResolvable) {
    this._multiFactorAuthRule.internalValue = value;
  }
  public resetMultiFactorAuthRule() {
    this._multiFactorAuthRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthRuleInput() {
    return this._multiFactorAuthRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_project_id: cdktf.stringToTerraform(this._defaultProjectId),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extra: cdktf.hashMapper(cdktf.stringToTerraform)(this._extra),
      id: cdktf.stringToTerraform(this._id),
      ignore_change_password_upon_first_use: cdktf.booleanToTerraform(this._ignoreChangePasswordUponFirstUse),
      ignore_lockout_failure_attempts: cdktf.booleanToTerraform(this._ignoreLockoutFailureAttempts),
      ignore_password_expiry: cdktf.booleanToTerraform(this._ignorePasswordExpiry),
      multi_factor_auth_enabled: cdktf.booleanToTerraform(this._multiFactorAuthEnabled),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      multi_factor_auth_rule: cdktf.listMapper(identityUserV3MultiFactorAuthRuleToTerraform, true)(this._multiFactorAuthRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_project_id: {
        value: cdktf.stringToHclTerraform(this._defaultProjectId),
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
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      extra: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extra),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_change_password_upon_first_use: {
        value: cdktf.booleanToHclTerraform(this._ignoreChangePasswordUponFirstUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_lockout_failure_attempts: {
        value: cdktf.booleanToHclTerraform(this._ignoreLockoutFailureAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_password_expiry: {
        value: cdktf.booleanToHclTerraform(this._ignorePasswordExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_factor_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiFactorAuthEnabled),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_factor_auth_rule: {
        value: cdktf.listMapperHcl(identityUserV3MultiFactorAuthRuleToHclTerraform, true)(this._multiFactorAuthRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityUserV3MultiFactorAuthRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
