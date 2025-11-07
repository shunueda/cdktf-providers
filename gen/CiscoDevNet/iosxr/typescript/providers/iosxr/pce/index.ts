// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PceConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#address_ipv4 Pce#address_ipv4}
  */
  readonly addressIpv4?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#address_ipv6 Pce#address_ipv6}
  */
  readonly addressIpv6?: string;
  /**
  * Use HTTP Digest authentication (MD5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#api_authentication_digest Pce#api_authentication_digest}
  */
  readonly apiAuthenticationDigest?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address of the PCE sibling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#api_sibling_ipv4 Pce#api_sibling_ipv4}
  */
  readonly apiSiblingIpv4?: string;
  /**
  * Northbound API username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#api_users Pce#api_users}
  */
  readonly apiUsers?: PceApiUsers[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#delete_mode Pce#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#device Pce#device}
  */
  readonly device?: string;
  /**
  * Access-list for IPv4 peer filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#peer_filter_ipv4_access_list Pce#peer_filter_ipv4_access_list}
  */
  readonly peerFilterIpv4AccessList?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#state_sync_ipv4s Pce#state_sync_ipv4s}
  */
  readonly stateSyncIpv4S?: PceStateSyncIpv4S[] | cdktf.IResolvable;
}
export interface PceApiUsers {
  /**
  * Specify unencrypted password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#password_encrypted Pce#password_encrypted}
  */
  readonly passwordEncrypted?: string;
  /**
  * Northbound API username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#user_name Pce#user_name}
  */
  readonly userName: string;
}

export function pceApiUsersToTerraform(struct?: PceApiUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_encrypted: cdktf.stringToTerraform(struct!.passwordEncrypted),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function pceApiUsersToHclTerraform(struct?: PceApiUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.passwordEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PceApiUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PceApiUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordEncrypted = this._passwordEncrypted;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PceApiUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordEncrypted = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordEncrypted = value.passwordEncrypted;
      this._userName = value.userName;
    }
  }

  // password_encrypted - computed: false, optional: true, required: false
  private _passwordEncrypted?: string; 
  public get passwordEncrypted() {
    return this.getStringAttribute('password_encrypted');
  }
  public set passwordEncrypted(value: string) {
    this._passwordEncrypted = value;
  }
  public resetPasswordEncrypted() {
    this._passwordEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncryptedInput() {
    return this._passwordEncrypted;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class PceApiUsersList extends cdktf.ComplexList {
  public internalValue? : PceApiUsers[] | cdktf.IResolvable

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
  public get(index: number): PceApiUsersOutputReference {
    return new PceApiUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PceStateSyncIpv4S {
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#address Pce#address}
  */
  readonly address: string;
}

export function pceStateSyncIpv4SToTerraform(struct?: PceStateSyncIpv4S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function pceStateSyncIpv4SToHclTerraform(struct?: PceStateSyncIpv4S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PceStateSyncIpv4SOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PceStateSyncIpv4S | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PceStateSyncIpv4S | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class PceStateSyncIpv4SList extends cdktf.ComplexList {
  public internalValue? : PceStateSyncIpv4S[] | cdktf.IResolvable

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
  public get(index: number): PceStateSyncIpv4SOutputReference {
    return new PceStateSyncIpv4SOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce iosxr_pce}
*/
export class Pce extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_pce";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pce resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pce to import
  * @param importFromId The id of the existing Pce that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pce to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_pce", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/pce iosxr_pce} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_pce',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIpv4 = config.addressIpv4;
    this._addressIpv6 = config.addressIpv6;
    this._apiAuthenticationDigest = config.apiAuthenticationDigest;
    this._apiSiblingIpv4 = config.apiSiblingIpv4;
    this._apiUsers.internalValue = config.apiUsers;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._peerFilterIpv4AccessList = config.peerFilterIpv4AccessList;
    this._stateSyncIpv4S.internalValue = config.stateSyncIpv4S;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ipv4 - computed: false, optional: true, required: false
  private _addressIpv4?: string; 
  public get addressIpv4() {
    return this.getStringAttribute('address_ipv4');
  }
  public set addressIpv4(value: string) {
    this._addressIpv4 = value;
  }
  public resetAddressIpv4() {
    this._addressIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpv4Input() {
    return this._addressIpv4;
  }

  // address_ipv6 - computed: false, optional: true, required: false
  private _addressIpv6?: string; 
  public get addressIpv6() {
    return this.getStringAttribute('address_ipv6');
  }
  public set addressIpv6(value: string) {
    this._addressIpv6 = value;
  }
  public resetAddressIpv6() {
    this._addressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpv6Input() {
    return this._addressIpv6;
  }

  // api_authentication_digest - computed: false, optional: true, required: false
  private _apiAuthenticationDigest?: boolean | cdktf.IResolvable; 
  public get apiAuthenticationDigest() {
    return this.getBooleanAttribute('api_authentication_digest');
  }
  public set apiAuthenticationDigest(value: boolean | cdktf.IResolvable) {
    this._apiAuthenticationDigest = value;
  }
  public resetApiAuthenticationDigest() {
    this._apiAuthenticationDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationDigestInput() {
    return this._apiAuthenticationDigest;
  }

  // api_sibling_ipv4 - computed: false, optional: true, required: false
  private _apiSiblingIpv4?: string; 
  public get apiSiblingIpv4() {
    return this.getStringAttribute('api_sibling_ipv4');
  }
  public set apiSiblingIpv4(value: string) {
    this._apiSiblingIpv4 = value;
  }
  public resetApiSiblingIpv4() {
    this._apiSiblingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSiblingIpv4Input() {
    return this._apiSiblingIpv4;
  }

  // api_users - computed: false, optional: true, required: false
  private _apiUsers = new PceApiUsersList(this, "api_users", false);
  public get apiUsers() {
    return this._apiUsers;
  }
  public putApiUsers(value: PceApiUsers[] | cdktf.IResolvable) {
    this._apiUsers.internalValue = value;
  }
  public resetApiUsers() {
    this._apiUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUsersInput() {
    return this._apiUsers.internalValue;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_filter_ipv4_access_list - computed: false, optional: true, required: false
  private _peerFilterIpv4AccessList?: string; 
  public get peerFilterIpv4AccessList() {
    return this.getStringAttribute('peer_filter_ipv4_access_list');
  }
  public set peerFilterIpv4AccessList(value: string) {
    this._peerFilterIpv4AccessList = value;
  }
  public resetPeerFilterIpv4AccessList() {
    this._peerFilterIpv4AccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerFilterIpv4AccessListInput() {
    return this._peerFilterIpv4AccessList;
  }

  // state_sync_ipv4s - computed: false, optional: true, required: false
  private _stateSyncIpv4S = new PceStateSyncIpv4SList(this, "state_sync_ipv4s", false);
  public get stateSyncIpv4S() {
    return this._stateSyncIpv4S;
  }
  public putStateSyncIpv4S(value: PceStateSyncIpv4S[] | cdktf.IResolvable) {
    this._stateSyncIpv4S.internalValue = value;
  }
  public resetStateSyncIpv4S() {
    this._stateSyncIpv4S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateSyncIpv4SInput() {
    return this._stateSyncIpv4S.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ipv4: cdktf.stringToTerraform(this._addressIpv4),
      address_ipv6: cdktf.stringToTerraform(this._addressIpv6),
      api_authentication_digest: cdktf.booleanToTerraform(this._apiAuthenticationDigest),
      api_sibling_ipv4: cdktf.stringToTerraform(this._apiSiblingIpv4),
      api_users: cdktf.listMapper(pceApiUsersToTerraform, false)(this._apiUsers.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      peer_filter_ipv4_access_list: cdktf.stringToTerraform(this._peerFilterIpv4AccessList),
      state_sync_ipv4s: cdktf.listMapper(pceStateSyncIpv4SToTerraform, false)(this._stateSyncIpv4S.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ipv4: {
        value: cdktf.stringToHclTerraform(this._addressIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_ipv6: {
        value: cdktf.stringToHclTerraform(this._addressIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_authentication_digest: {
        value: cdktf.booleanToHclTerraform(this._apiAuthenticationDigest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_sibling_ipv4: {
        value: cdktf.stringToHclTerraform(this._apiSiblingIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_users: {
        value: cdktf.listMapperHcl(pceApiUsersToHclTerraform, false)(this._apiUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PceApiUsersList",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_filter_ipv4_access_list: {
        value: cdktf.stringToHclTerraform(this._peerFilterIpv4AccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_sync_ipv4s: {
        value: cdktf.listMapperHcl(pceStateSyncIpv4SToHclTerraform, false)(this._stateSyncIpv4S.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PceStateSyncIpv4SList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
