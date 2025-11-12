// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityAuthenticationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}
  */
  readonly networkPolicy?: IdentityAuthenticationPolicyNetworkPolicy;
  /**
  * password_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}
  */
  readonly passwordPolicy?: IdentityAuthenticationPolicyPasswordPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}
  */
  readonly timeouts?: IdentityAuthenticationPolicyTimeouts;
}
export interface IdentityAuthenticationPolicyNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}
  */
  readonly networkSourceIds?: string[];
}

export function identityAuthenticationPolicyNetworkPolicyToTerraform(struct?: IdentityAuthenticationPolicyNetworkPolicyOutputReference | IdentityAuthenticationPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkSourceIds),
  }
}


export function identityAuthenticationPolicyNetworkPolicyToHclTerraform(struct?: IdentityAuthenticationPolicyNetworkPolicyOutputReference | IdentityAuthenticationPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_source_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkSourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAuthenticationPolicyNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityAuthenticationPolicyNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkSourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIds = this._networkSourceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAuthenticationPolicyNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkSourceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkSourceIds = value.networkSourceIds;
    }
  }

  // network_source_ids - computed: true, optional: true, required: false
  private _networkSourceIds?: string[]; 
  public get networkSourceIds() {
    return this.getListAttribute('network_source_ids');
  }
  public set networkSourceIds(value: string[]) {
    this._networkSourceIds = value;
  }
  public resetNetworkSourceIds() {
    this._networkSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIdsInput() {
    return this._networkSourceIds;
  }
}
export interface IdentityAuthenticationPolicyPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}
  */
  readonly isLowercaseCharactersRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}
  */
  readonly isNumericCharactersRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}
  */
  readonly isSpecialCharactersRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}
  */
  readonly isUppercaseCharactersRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}
  */
  readonly isUsernameContainmentAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}
  */
  readonly minimumPasswordLength?: number;
}

export function identityAuthenticationPolicyPasswordPolicyToTerraform(struct?: IdentityAuthenticationPolicyPasswordPolicyOutputReference | IdentityAuthenticationPolicyPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_lowercase_characters_required: cdktf.booleanToTerraform(struct!.isLowercaseCharactersRequired),
    is_numeric_characters_required: cdktf.booleanToTerraform(struct!.isNumericCharactersRequired),
    is_special_characters_required: cdktf.booleanToTerraform(struct!.isSpecialCharactersRequired),
    is_uppercase_characters_required: cdktf.booleanToTerraform(struct!.isUppercaseCharactersRequired),
    is_username_containment_allowed: cdktf.booleanToTerraform(struct!.isUsernameContainmentAllowed),
    minimum_password_length: cdktf.numberToTerraform(struct!.minimumPasswordLength),
  }
}


export function identityAuthenticationPolicyPasswordPolicyToHclTerraform(struct?: IdentityAuthenticationPolicyPasswordPolicyOutputReference | IdentityAuthenticationPolicyPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_lowercase_characters_required: {
      value: cdktf.booleanToHclTerraform(struct!.isLowercaseCharactersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_numeric_characters_required: {
      value: cdktf.booleanToHclTerraform(struct!.isNumericCharactersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_special_characters_required: {
      value: cdktf.booleanToHclTerraform(struct!.isSpecialCharactersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_uppercase_characters_required: {
      value: cdktf.booleanToHclTerraform(struct!.isUppercaseCharactersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_username_containment_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isUsernameContainmentAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_password_length: {
      value: cdktf.numberToHclTerraform(struct!.minimumPasswordLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAuthenticationPolicyPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityAuthenticationPolicyPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLowercaseCharactersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLowercaseCharactersRequired = this._isLowercaseCharactersRequired;
    }
    if (this._isNumericCharactersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNumericCharactersRequired = this._isNumericCharactersRequired;
    }
    if (this._isSpecialCharactersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSpecialCharactersRequired = this._isSpecialCharactersRequired;
    }
    if (this._isUppercaseCharactersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUppercaseCharactersRequired = this._isUppercaseCharactersRequired;
    }
    if (this._isUsernameContainmentAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUsernameContainmentAllowed = this._isUsernameContainmentAllowed;
    }
    if (this._minimumPasswordLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPasswordLength = this._minimumPasswordLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAuthenticationPolicyPasswordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLowercaseCharactersRequired = undefined;
      this._isNumericCharactersRequired = undefined;
      this._isSpecialCharactersRequired = undefined;
      this._isUppercaseCharactersRequired = undefined;
      this._isUsernameContainmentAllowed = undefined;
      this._minimumPasswordLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLowercaseCharactersRequired = value.isLowercaseCharactersRequired;
      this._isNumericCharactersRequired = value.isNumericCharactersRequired;
      this._isSpecialCharactersRequired = value.isSpecialCharactersRequired;
      this._isUppercaseCharactersRequired = value.isUppercaseCharactersRequired;
      this._isUsernameContainmentAllowed = value.isUsernameContainmentAllowed;
      this._minimumPasswordLength = value.minimumPasswordLength;
    }
  }

  // is_lowercase_characters_required - computed: true, optional: true, required: false
  private _isLowercaseCharactersRequired?: boolean | cdktf.IResolvable; 
  public get isLowercaseCharactersRequired() {
    return this.getBooleanAttribute('is_lowercase_characters_required');
  }
  public set isLowercaseCharactersRequired(value: boolean | cdktf.IResolvable) {
    this._isLowercaseCharactersRequired = value;
  }
  public resetIsLowercaseCharactersRequired() {
    this._isLowercaseCharactersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLowercaseCharactersRequiredInput() {
    return this._isLowercaseCharactersRequired;
  }

  // is_numeric_characters_required - computed: true, optional: true, required: false
  private _isNumericCharactersRequired?: boolean | cdktf.IResolvable; 
  public get isNumericCharactersRequired() {
    return this.getBooleanAttribute('is_numeric_characters_required');
  }
  public set isNumericCharactersRequired(value: boolean | cdktf.IResolvable) {
    this._isNumericCharactersRequired = value;
  }
  public resetIsNumericCharactersRequired() {
    this._isNumericCharactersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNumericCharactersRequiredInput() {
    return this._isNumericCharactersRequired;
  }

  // is_special_characters_required - computed: true, optional: true, required: false
  private _isSpecialCharactersRequired?: boolean | cdktf.IResolvable; 
  public get isSpecialCharactersRequired() {
    return this.getBooleanAttribute('is_special_characters_required');
  }
  public set isSpecialCharactersRequired(value: boolean | cdktf.IResolvable) {
    this._isSpecialCharactersRequired = value;
  }
  public resetIsSpecialCharactersRequired() {
    this._isSpecialCharactersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSpecialCharactersRequiredInput() {
    return this._isSpecialCharactersRequired;
  }

  // is_uppercase_characters_required - computed: true, optional: true, required: false
  private _isUppercaseCharactersRequired?: boolean | cdktf.IResolvable; 
  public get isUppercaseCharactersRequired() {
    return this.getBooleanAttribute('is_uppercase_characters_required');
  }
  public set isUppercaseCharactersRequired(value: boolean | cdktf.IResolvable) {
    this._isUppercaseCharactersRequired = value;
  }
  public resetIsUppercaseCharactersRequired() {
    this._isUppercaseCharactersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUppercaseCharactersRequiredInput() {
    return this._isUppercaseCharactersRequired;
  }

  // is_username_containment_allowed - computed: true, optional: true, required: false
  private _isUsernameContainmentAllowed?: boolean | cdktf.IResolvable; 
  public get isUsernameContainmentAllowed() {
    return this.getBooleanAttribute('is_username_containment_allowed');
  }
  public set isUsernameContainmentAllowed(value: boolean | cdktf.IResolvable) {
    this._isUsernameContainmentAllowed = value;
  }
  public resetIsUsernameContainmentAllowed() {
    this._isUsernameContainmentAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUsernameContainmentAllowedInput() {
    return this._isUsernameContainmentAllowed;
  }

  // minimum_password_length - computed: true, optional: true, required: false
  private _minimumPasswordLength?: number; 
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }
}
export interface IdentityAuthenticationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}
  */
  readonly update?: string;
}

export function identityAuthenticationPolicyTimeoutsToTerraform(struct?: IdentityAuthenticationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function identityAuthenticationPolicyTimeoutsToHclTerraform(struct?: IdentityAuthenticationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAuthenticationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityAuthenticationPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAuthenticationPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy}
*/
export class IdentityAuthenticationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_authentication_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityAuthenticationPolicy to import
  * @param importFromId The id of the existing IdentityAuthenticationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityAuthenticationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_authentication_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityAuthenticationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityAuthenticationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_authentication_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new IdentityAuthenticationPolicyNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: IdentityAuthenticationPolicyNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new IdentityAuthenticationPolicyPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: IdentityAuthenticationPolicyPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityAuthenticationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityAuthenticationPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      network_policy: identityAuthenticationPolicyNetworkPolicyToTerraform(this._networkPolicy.internalValue),
      password_policy: identityAuthenticationPolicyPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      timeouts: identityAuthenticationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      network_policy: {
        value: identityAuthenticationPolicyNetworkPolicyToHclTerraform(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityAuthenticationPolicyNetworkPolicyList",
      },
      password_policy: {
        value: identityAuthenticationPolicyPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityAuthenticationPolicyPasswordPolicyList",
      },
      timeouts: {
        value: identityAuthenticationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityAuthenticationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
