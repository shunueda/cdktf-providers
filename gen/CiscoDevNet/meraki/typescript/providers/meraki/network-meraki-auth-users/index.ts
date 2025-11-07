// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkMerakiAuthUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#items NetworkMerakiAuthUsers#items}
  */
  readonly items: NetworkMerakiAuthUsersItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#network_id NetworkMerakiAuthUsers#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#organization_id NetworkMerakiAuthUsers#organization_id}
  */
  readonly organizationId: string;
}
export interface NetworkMerakiAuthUsersItemsAuthorizations {
  /**
  * Date for authorization to expire. Set to `Never` for the authorization to not expire, which is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#expires_at NetworkMerakiAuthUsers#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Required for wireless networks. The SSID for which the user is being authorized, which must be configured for the user`s given accountType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#ssid_number NetworkMerakiAuthUsers#ssid_number}
  */
  readonly ssidNumber: number;
}

export function networkMerakiAuthUsersItemsAuthorizationsToTerraform(struct?: NetworkMerakiAuthUsersItemsAuthorizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expires_at: cdktf.stringToTerraform(struct!.expiresAt),
    ssid_number: cdktf.numberToTerraform(struct!.ssidNumber),
  }
}


export function networkMerakiAuthUsersItemsAuthorizationsToHclTerraform(struct?: NetworkMerakiAuthUsersItemsAuthorizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expires_at: {
      value: cdktf.stringToHclTerraform(struct!.expiresAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid_number: {
      value: cdktf.numberToHclTerraform(struct!.ssidNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMerakiAuthUsersItemsAuthorizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMerakiAuthUsersItemsAuthorizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiresAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAt = this._expiresAt;
    }
    if (this._ssidNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidNumber = this._ssidNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMerakiAuthUsersItemsAuthorizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiresAt = undefined;
      this._ssidNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiresAt = value.expiresAt;
      this._ssidNumber = value.ssidNumber;
    }
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // ssid_number - computed: false, optional: false, required: true
  private _ssidNumber?: number; 
  public get ssidNumber() {
    return this.getNumberAttribute('ssid_number');
  }
  public set ssidNumber(value: number) {
    this._ssidNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNumberInput() {
    return this._ssidNumber;
  }
}

export class NetworkMerakiAuthUsersItemsAuthorizationsList extends cdktf.ComplexList {
  public internalValue? : NetworkMerakiAuthUsersItemsAuthorizations[] | cdktf.IResolvable

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
  public get(index: number): NetworkMerakiAuthUsersItemsAuthorizationsOutputReference {
    return new NetworkMerakiAuthUsersItemsAuthorizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMerakiAuthUsersItems {
  /**
  * Authorization type for user. Can be `Guest` or `802.1X` for wireless networks, or `Client VPN` for MX networks. Defaults to `802.1X`.
  *   - Choices: `802.1X`, `Client VPN`, `Guest`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#account_type NetworkMerakiAuthUsers#account_type}
  */
  readonly accountType?: string;
  /**
  * Authorization zones and expiration dates for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#authorizations NetworkMerakiAuthUsers#authorizations}
  */
  readonly authorizations: NetworkMerakiAuthUsersItemsAuthorizations[] | cdktf.IResolvable;
  /**
  * Email address of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#email NetworkMerakiAuthUsers#email}
  */
  readonly email: string;
  /**
  * Whether or not Meraki should email the password to user. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#email_password_to_user NetworkMerakiAuthUsers#email_password_to_user}
  */
  readonly emailPasswordToUser?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the user is a Dashboard administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#is_admin NetworkMerakiAuthUsers#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Name of the user. Only required If the user is not a Dashboard administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#name NetworkMerakiAuthUsers#name}
  */
  readonly name: string;
  /**
  * The password for this user account. Only required If the user is not a Dashboard administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#password NetworkMerakiAuthUsers#password}
  */
  readonly password: string;
}

export function networkMerakiAuthUsersItemsToTerraform(struct?: NetworkMerakiAuthUsersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_type: cdktf.stringToTerraform(struct!.accountType),
    authorizations: cdktf.listMapper(networkMerakiAuthUsersItemsAuthorizationsToTerraform, false)(struct!.authorizations),
    email: cdktf.stringToTerraform(struct!.email),
    email_password_to_user: cdktf.booleanToTerraform(struct!.emailPasswordToUser),
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function networkMerakiAuthUsersItemsToHclTerraform(struct?: NetworkMerakiAuthUsersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizations: {
      value: cdktf.listMapperHcl(networkMerakiAuthUsersItemsAuthorizationsToHclTerraform, false)(struct!.authorizations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkMerakiAuthUsersItemsAuthorizationsList",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_password_to_user: {
      value: cdktf.booleanToHclTerraform(struct!.emailPasswordToUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_admin: {
      value: cdktf.booleanToHclTerraform(struct!.isAdmin),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMerakiAuthUsersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMerakiAuthUsersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._authorizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizations = this._authorizations?.internalValue;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emailPasswordToUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailPasswordToUser = this._emailPasswordToUser;
    }
    if (this._isAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAdmin = this._isAdmin;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMerakiAuthUsersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountType = undefined;
      this._authorizations.internalValue = undefined;
      this._email = undefined;
      this._emailPasswordToUser = undefined;
      this._isAdmin = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountType = value.accountType;
      this._authorizations.internalValue = value.authorizations;
      this._email = value.email;
      this._emailPasswordToUser = value.emailPasswordToUser;
      this._isAdmin = value.isAdmin;
      this._name = value.name;
      this._password = value.password;
    }
  }

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // authorizations - computed: false, optional: false, required: true
  private _authorizations = new NetworkMerakiAuthUsersItemsAuthorizationsList(this, "authorizations", false);
  public get authorizations() {
    return this._authorizations;
  }
  public putAuthorizations(value: NetworkMerakiAuthUsersItemsAuthorizations[] | cdktf.IResolvable) {
    this._authorizations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationsInput() {
    return this._authorizations.internalValue;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_password_to_user - computed: false, optional: true, required: false
  private _emailPasswordToUser?: boolean | cdktf.IResolvable; 
  public get emailPasswordToUser() {
    return this.getBooleanAttribute('email_password_to_user');
  }
  public set emailPasswordToUser(value: boolean | cdktf.IResolvable) {
    this._emailPasswordToUser = value;
  }
  public resetEmailPasswordToUser() {
    this._emailPasswordToUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPasswordToUserInput() {
    return this._emailPasswordToUser;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_admin - computed: false, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class NetworkMerakiAuthUsersItemsList extends cdktf.ComplexList {
  public internalValue? : NetworkMerakiAuthUsersItems[] | cdktf.IResolvable

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
  public get(index: number): NetworkMerakiAuthUsersItemsOutputReference {
    return new NetworkMerakiAuthUsersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users meraki_network_meraki_auth_users}
*/
export class NetworkMerakiAuthUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_meraki_auth_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkMerakiAuthUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkMerakiAuthUsers to import
  * @param importFromId The id of the existing NetworkMerakiAuthUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkMerakiAuthUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_meraki_auth_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_users meraki_network_meraki_auth_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkMerakiAuthUsersConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkMerakiAuthUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_meraki_auth_users',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new NetworkMerakiAuthUsersItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: NetworkMerakiAuthUsersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(networkMerakiAuthUsersItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(networkMerakiAuthUsersItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkMerakiAuthUsersItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
