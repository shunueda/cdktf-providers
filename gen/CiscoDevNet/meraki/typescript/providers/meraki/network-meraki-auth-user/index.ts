// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkMerakiAuthUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorization type for user. Can be `Guest` or `802.1X` for wireless networks, or `Client VPN` for MX networks. Defaults to `802.1X`.
  *   - Choices: `802.1X`, `Client VPN`, `Guest`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#account_type NetworkMerakiAuthUser#account_type}
  */
  readonly accountType?: string;
  /**
  * Authorization zones and expiration dates for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#authorizations NetworkMerakiAuthUser#authorizations}
  */
  readonly authorizations: NetworkMerakiAuthUserAuthorizations[] | cdktf.IResolvable;
  /**
  * Email address of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#email NetworkMerakiAuthUser#email}
  */
  readonly email: string;
  /**
  * Whether or not Meraki should email the password to user. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#email_password_to_user NetworkMerakiAuthUser#email_password_to_user}
  */
  readonly emailPasswordToUser?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the user is a Dashboard administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#is_admin NetworkMerakiAuthUser#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Name of the user. Only required If the user is not a Dashboard administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#name NetworkMerakiAuthUser#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#network_id NetworkMerakiAuthUser#network_id}
  */
  readonly networkId: string;
  /**
  * The password for this user account. Only required If the user is not a Dashboard administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#password NetworkMerakiAuthUser#password}
  */
  readonly password: string;
}
export interface NetworkMerakiAuthUserAuthorizations {
  /**
  * Date for authorization to expire. Set to `Never` for the authorization to not expire, which is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#expires_at NetworkMerakiAuthUser#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Required for wireless networks. The SSID for which the user is being authorized, which must be configured for the user`s given accountType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#ssid_number NetworkMerakiAuthUser#ssid_number}
  */
  readonly ssidNumber: number;
}

export function networkMerakiAuthUserAuthorizationsToTerraform(struct?: NetworkMerakiAuthUserAuthorizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expires_at: cdktf.stringToTerraform(struct!.expiresAt),
    ssid_number: cdktf.numberToTerraform(struct!.ssidNumber),
  }
}


export function networkMerakiAuthUserAuthorizationsToHclTerraform(struct?: NetworkMerakiAuthUserAuthorizations | cdktf.IResolvable): any {
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

export class NetworkMerakiAuthUserAuthorizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkMerakiAuthUserAuthorizations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkMerakiAuthUserAuthorizations | cdktf.IResolvable | undefined) {
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

export class NetworkMerakiAuthUserAuthorizationsList extends cdktf.ComplexList {
  public internalValue? : NetworkMerakiAuthUserAuthorizations[] | cdktf.IResolvable

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
  public get(index: number): NetworkMerakiAuthUserAuthorizationsOutputReference {
    return new NetworkMerakiAuthUserAuthorizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user meraki_network_meraki_auth_user}
*/
export class NetworkMerakiAuthUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_meraki_auth_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkMerakiAuthUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkMerakiAuthUser to import
  * @param importFromId The id of the existing NetworkMerakiAuthUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkMerakiAuthUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_meraki_auth_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_meraki_auth_user meraki_network_meraki_auth_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkMerakiAuthUserConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkMerakiAuthUserConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_meraki_auth_user',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountType = config.accountType;
    this._authorizations.internalValue = config.authorizations;
    this._email = config.email;
    this._emailPasswordToUser = config.emailPasswordToUser;
    this._isAdmin = config.isAdmin;
    this._name = config.name;
    this._networkId = config.networkId;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _authorizations = new NetworkMerakiAuthUserAuthorizationsList(this, "authorizations", false);
  public get authorizations() {
    return this._authorizations;
  }
  public putAuthorizations(value: NetworkMerakiAuthUserAuthorizations[] | cdktf.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_type: cdktf.stringToTerraform(this._accountType),
      authorizations: cdktf.listMapper(networkMerakiAuthUserAuthorizationsToTerraform, false)(this._authorizations.internalValue),
      email: cdktf.stringToTerraform(this._email),
      email_password_to_user: cdktf.booleanToTerraform(this._emailPasswordToUser),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizations: {
        value: cdktf.listMapperHcl(networkMerakiAuthUserAuthorizationsToHclTerraform, false)(this._authorizations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkMerakiAuthUserAuthorizationsList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_password_to_user: {
        value: cdktf.booleanToHclTerraform(this._emailPasswordToUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
