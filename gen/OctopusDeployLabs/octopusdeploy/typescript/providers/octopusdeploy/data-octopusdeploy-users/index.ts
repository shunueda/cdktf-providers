// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter search by username, display name or email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#filter DataOctopusdeployUsers#filter}
  */
  readonly filter?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#ids DataOctopusdeployUsers#ids}
  */
  readonly ids?: string[];
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#skip DataOctopusdeployUsers#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#space_id DataOctopusdeployUsers#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#take DataOctopusdeployUsers#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployUsersUsersIdentityClaim {
  /**
  * Specifies whether or not the claim is an identifying claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#is_identifying_claim DataOctopusdeployUsers#is_identifying_claim}
  */
  readonly isIdentifyingClaim?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#name DataOctopusdeployUsers#name}
  */
  readonly name: string;
  /**
  * The value of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#value DataOctopusdeployUsers#value}
  */
  readonly value: string;
}

export function dataOctopusdeployUsersUsersIdentityClaimToTerraform(struct?: DataOctopusdeployUsersUsersIdentityClaim): any {
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


export function dataOctopusdeployUsersUsersIdentityClaimToHclTerraform(struct?: DataOctopusdeployUsersUsersIdentityClaim): any {
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

export class DataOctopusdeployUsersUsersIdentityClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployUsersUsersIdentityClaim | undefined {
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

  public set internalValue(value: DataOctopusdeployUsersUsersIdentityClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isIdentifyingClaim = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isIdentifyingClaim = value.isIdentifyingClaim;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_identifying_claim - computed: true, optional: true, required: false
  private _isIdentifyingClaim?: boolean | cdktf.IResolvable; 
  public get isIdentifyingClaim() {
    return this.getBooleanAttribute('is_identifying_claim');
  }
  public set isIdentifyingClaim(value: boolean | cdktf.IResolvable) {
    this._isIdentifyingClaim = value;
  }
  public resetIsIdentifyingClaim() {
    this._isIdentifyingClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIdentifyingClaimInput() {
    return this._isIdentifyingClaim;
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataOctopusdeployUsersUsersIdentityClaimList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployUsersUsersIdentityClaim[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployUsersUsersIdentityClaimOutputReference {
    return new DataOctopusdeployUsersUsersIdentityClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployUsersUsersIdentity {
}

export function dataOctopusdeployUsersUsersIdentityToTerraform(struct?: DataOctopusdeployUsersUsersIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployUsersUsersIdentityToHclTerraform(struct?: DataOctopusdeployUsersUsersIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployUsersUsersIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployUsersUsersIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployUsersUsersIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // claim - computed: true, optional: false, required: false
  private _claim = new DataOctopusdeployUsersUsersIdentityClaimList(this, "claim", true);
  public get claim() {
    return this._claim;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataOctopusdeployUsersUsersIdentityList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployUsersUsersIdentity[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployUsersUsersIdentityOutputReference {
    return new DataOctopusdeployUsersUsersIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployUsersUsers {
  /**
  * Specifies whether or not the password can be edited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#can_password_be_edited DataOctopusdeployUsers#can_password_be_edited}
  */
  readonly canPasswordBeEdited?: boolean | cdktf.IResolvable;
  /**
  * The display name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#display_name DataOctopusdeployUsers#display_name}
  */
  readonly displayName: string;
  /**
  * The email address of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#email_address DataOctopusdeployUsers#email_address}
  */
  readonly emailAddress?: string;
  /**
  * The identities associated with the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#identity DataOctopusdeployUsers#identity}
  */
  readonly identity?: DataOctopusdeployUsersUsersIdentity[] | cdktf.IResolvable;
  /**
  * Specifies whether or not the user is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#is_active DataOctopusdeployUsers#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not the user is the requestor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#is_requestor DataOctopusdeployUsers#is_requestor}
  */
  readonly isRequestor?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not the user is a service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#is_service DataOctopusdeployUsers#is_service}
  */
  readonly isService?: boolean | cdktf.IResolvable;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#username DataOctopusdeployUsers#username}
  */
  readonly username: string;
}

export function dataOctopusdeployUsersUsersToTerraform(struct?: DataOctopusdeployUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_password_be_edited: cdktf.booleanToTerraform(struct!.canPasswordBeEdited),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    identity: cdktf.listMapper(dataOctopusdeployUsersUsersIdentityToTerraform, false)(struct!.identity),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    is_requestor: cdktf.booleanToTerraform(struct!.isRequestor),
    is_service: cdktf.booleanToTerraform(struct!.isService),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataOctopusdeployUsersUsersToHclTerraform(struct?: DataOctopusdeployUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_password_be_edited: {
      value: cdktf.booleanToHclTerraform(struct!.canPasswordBeEdited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.listMapperHcl(dataOctopusdeployUsersUsersIdentityToHclTerraform, false)(struct!.identity),
      isBlock: true,
      type: "set",
      storageClassType: "DataOctopusdeployUsersUsersIdentityList",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_requestor: {
      value: cdktf.booleanToHclTerraform(struct!.isRequestor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_service: {
      value: cdktf.booleanToHclTerraform(struct!.isService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOctopusdeployUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canPasswordBeEdited !== undefined) {
      hasAnyValues = true;
      internalValueResult.canPasswordBeEdited = this._canPasswordBeEdited;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._isRequestor !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequestor = this._isRequestor;
    }
    if (this._isService !== undefined) {
      hasAnyValues = true;
      internalValueResult.isService = this._isService;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canPasswordBeEdited = undefined;
      this._displayName = undefined;
      this._emailAddress = undefined;
      this._identity.internalValue = undefined;
      this._isActive = undefined;
      this._isRequestor = undefined;
      this._isService = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canPasswordBeEdited = value.canPasswordBeEdited;
      this._displayName = value.displayName;
      this._emailAddress = value.emailAddress;
      this._identity.internalValue = value.identity;
      this._isActive = value.isActive;
      this._isRequestor = value.isRequestor;
      this._isService = value.isService;
      this._username = value.username;
    }
  }

  // can_password_be_edited - computed: true, optional: true, required: false
  private _canPasswordBeEdited?: boolean | cdktf.IResolvable; 
  public get canPasswordBeEdited() {
    return this.getBooleanAttribute('can_password_be_edited');
  }
  public set canPasswordBeEdited(value: boolean | cdktf.IResolvable) {
    this._canPasswordBeEdited = value;
  }
  public resetCanPasswordBeEdited() {
    this._canPasswordBeEdited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPasswordBeEditedInput() {
    return this._canPasswordBeEdited;
  }

  // display_name - computed: true, optional: false, required: true
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

  // email_address - computed: true, optional: true, required: false
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

  // identity - computed: true, optional: true, required: false
  private _identity = new DataOctopusdeployUsersUsersIdentityList(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: DataOctopusdeployUsersUsersIdentity[] | cdktf.IResolvable) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
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

  // is_requestor - computed: true, optional: true, required: false
  private _isRequestor?: boolean | cdktf.IResolvable; 
  public get isRequestor() {
    return this.getBooleanAttribute('is_requestor');
  }
  public set isRequestor(value: boolean | cdktf.IResolvable) {
    this._isRequestor = value;
  }
  public resetIsRequestor() {
    this._isRequestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequestorInput() {
    return this._isRequestor;
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

  // username - computed: true, optional: false, required: true
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
}

export class DataOctopusdeployUsersUsersList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployUsersUsers[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployUsersUsersOutputReference {
    return new DataOctopusdeployUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users octopusdeploy_users}
*/
export class DataOctopusdeployUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployUsers to import
  * @param importFromId The id of the existing DataOctopusdeployUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/users octopusdeploy_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_users',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._ids = config.ids;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOctopusdeployUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
