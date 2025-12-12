// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#display_name User#display_name}
  */
  readonly displayName: string;
  /**
  * The email address of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#email_address User#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Specifies whether or not the user is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#is_active User#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not the user is a service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#is_service User#is_service}
  */
  readonly isService?: boolean | cdktf.IResolvable;
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#identity User#identity}
  */
  readonly identity?: UserIdentity[] | cdktf.IResolvable;
}
export interface UserIdentityClaim {
  /**
  * Specifies whether or not the claim is an identifying claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#is_identifying_claim User#is_identifying_claim}
  */
  readonly isIdentifyingClaim: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * The value of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userIdentityClaimToTerraform(struct?: UserIdentityClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_identifying_claim: cdktf.booleanToTerraform(struct!.isIdentifyingClaim),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userIdentityClaimToHclTerraform(struct?: UserIdentityClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_identifying_claim: {
      value: cdktf.booleanToHclTerraform(struct!.isIdentifyingClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class UserIdentityClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIdentityClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isIdentifyingClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIdentifyingClaim = this._isIdentifyingClaim;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIdentityClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isIdentifyingClaim = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isIdentifyingClaim = value.isIdentifyingClaim;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_identifying_claim - computed: false, optional: false, required: true
  private _isIdentifyingClaim?: boolean | cdktf.IResolvable; 
  public get isIdentifyingClaim() {
    return this.getBooleanAttribute('is_identifying_claim');
  }
  public set isIdentifyingClaim(value: boolean | cdktf.IResolvable) {
    this._isIdentifyingClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isIdentifyingClaimInput() {
    return this._isIdentifyingClaim;
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

export class UserIdentityClaimList extends cdktf.ComplexList {
  public internalValue? : UserIdentityClaim[] | cdktf.IResolvable

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
  public get(index: number): UserIdentityClaimOutputReference {
    return new UserIdentityClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserIdentity {
  /**
  * The identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#provider User#provider}
  */
  readonly provider?: string;
  /**
  * claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#claim User#claim}
  */
  readonly claim?: UserIdentityClaim[] | cdktf.IResolvable;
}

export function userIdentityToTerraform(struct?: UserIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    claim: cdktf.listMapper(userIdentityClaimToTerraform, true)(struct!.claim),
  }
}


export function userIdentityToHclTerraform(struct?: UserIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim: {
      value: cdktf.listMapperHcl(userIdentityClaimToHclTerraform, true)(struct!.claim),
      isBlock: true,
      type: "set",
      storageClassType: "UserIdentityClaimList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._claim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._claim.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._claim.internalValue = value.claim;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // claim - computed: false, optional: true, required: false
  private _claim = new UserIdentityClaimList(this, "claim", true);
  public get claim() {
    return this._claim;
  }
  public putClaim(value: UserIdentityClaim[] | cdktf.IResolvable) {
    this._claim.internalValue = value;
  }
  public resetClaim() {
    this._claim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim.internalValue;
  }
}

export class UserIdentityList extends cdktf.ComplexList {
  public internalValue? : UserIdentity[] | cdktf.IResolvable

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
  public get(index: number): UserIdentityOutputReference {
    return new UserIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user octopusdeploy_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/user octopusdeploy_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_user',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._emailAddress = config.emailAddress;
    this._isActive = config.isActive;
    this._isService = config.isService;
    this._password = config.password;
    this._username = config.username;
    this._identity.internalValue = config.identity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_password_be_edited - computed: true, optional: false, required: false
  public get canPasswordBeEdited() {
    return this.getBooleanAttribute('can_password_be_edited');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_requestor - computed: true, optional: false, required: false
  public get isRequestor() {
    return this.getBooleanAttribute('is_requestor');
  }

  // is_service - computed: true, optional: true, required: false
  private _isService?: boolean | cdktf.IResolvable; 
  public get isService() {
    return this.getBooleanAttribute('is_service');
  }
  public set isService(value: boolean | cdktf.IResolvable) {
    this._isService = value;
  }
  public resetIsService() {
    this._isService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isServiceInput() {
    return this._isService;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new UserIdentityList(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: UserIdentity[] | cdktf.IResolvable) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      is_active: cdktf.booleanToTerraform(this._isActive),
      is_service: cdktf.booleanToTerraform(this._isService),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      identity: cdktf.listMapper(userIdentityToTerraform, true)(this._identity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_service: {
        value: cdktf.booleanToHclTerraform(this._isService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.listMapperHcl(userIdentityToHclTerraform, true)(this._identity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserIdentityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
