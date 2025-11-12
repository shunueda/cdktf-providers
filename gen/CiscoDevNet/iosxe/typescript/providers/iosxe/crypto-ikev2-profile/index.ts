// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIkev2ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pre-Shared Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#authentication_local_pre_share CryptoIkev2Profile#authentication_local_pre_share}
  */
  readonly authenticationLocalPreShare?: boolean | cdktf.IResolvable;
  /**
  * Pre-Shared Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#authentication_remote_pre_share CryptoIkev2Profile#authentication_remote_pre_share}
  */
  readonly authenticationRemotePreShare?: boolean | cdktf.IResolvable;
  /**
  * enable config-exchange request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#config_exchange_request CryptoIkev2Profile#config_exchange_request}
  */
  readonly configExchangeRequest?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#delete_mode CryptoIkev2Profile#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Specify a description of this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#description CryptoIkev2Profile#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#device CryptoIkev2Profile#device}
  */
  readonly device?: string;
  /**
  * 
  *   - Range: `10`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#dpd_interval CryptoIkev2Profile#dpd_interval}
  */
  readonly dpdInterval?: number;
  /**
  * 
  *   - Choices: `on-demand`, `periodic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#dpd_query CryptoIkev2Profile#dpd_query}
  */
  readonly dpdQuery?: string;
  /**
  * 
  *   - Range: `2`-`60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#dpd_retry CryptoIkev2Profile#dpd_retry}
  */
  readonly dpdRetry?: number;
  /**
  * address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#identity_local_address CryptoIkev2Profile#identity_local_address}
  */
  readonly identityLocalAddress?: string;
  /**
  * key-id opaque string - proprietary types of identification key-id string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#identity_local_key_id CryptoIkev2Profile#identity_local_key_id}
  */
  readonly identityLocalKeyId?: string;
  /**
  * I-VRF of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#ivrf CryptoIkev2Profile#ivrf}
  */
  readonly ivrf?: string;
  /**
  * Keyring name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#keyring_local CryptoIkev2Profile#keyring_local}
  */
  readonly keyringLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_address_local_ip CryptoIkev2Profile#match_address_local_ip}
  */
  readonly matchAddressLocalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_fvrf CryptoIkev2Profile#match_fvrf}
  */
  readonly matchFvrf?: string;
  /**
  * Any fvrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_fvrf_any CryptoIkev2Profile#match_fvrf_any}
  */
  readonly matchFvrfAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_identity_remote_ipv4_addresses CryptoIkev2Profile#match_identity_remote_ipv4_addresses}
  */
  readonly matchIdentityRemoteIpv4Addresses?: CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_identity_remote_ipv6_prefixes CryptoIkev2Profile#match_identity_remote_ipv6_prefixes}
  */
  readonly matchIdentityRemoteIpv6Prefixes?: string[];
  /**
  * key-id opaque string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_identity_remote_keys CryptoIkev2Profile#match_identity_remote_keys}
  */
  readonly matchIdentityRemoteKeys?: string[];
  /**
  * Match the profile for incoming connections only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#match_inbound_only CryptoIkev2Profile#match_inbound_only}
  */
  readonly matchInboundOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#name CryptoIkev2Profile#name}
  */
  readonly name: string;
}
export interface CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#address CryptoIkev2Profile#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#mask CryptoIkev2Profile#mask}
  */
  readonly mask?: string;
}

export function cryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesToTerraform(struct?: CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function cryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesToHclTerraform(struct?: CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses | cdktf.IResolvable): any {
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
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._mask = value.mask;
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

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class CryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesList extends cdktf.ComplexList {
  public internalValue? : CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses[] | cdktf.IResolvable

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
  public get(index: number): CryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesOutputReference {
    return new CryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile iosxe_crypto_ikev2_profile}
*/
export class CryptoIkev2Profile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIkev2Profile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIkev2Profile to import
  * @param importFromId The id of the existing CryptoIkev2Profile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIkev2Profile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/crypto_ikev2_profile iosxe_crypto_ikev2_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIkev2ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CryptoIkev2ProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2_profile',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationLocalPreShare = config.authenticationLocalPreShare;
    this._authenticationRemotePreShare = config.authenticationRemotePreShare;
    this._configExchangeRequest = config.configExchangeRequest;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._dpdInterval = config.dpdInterval;
    this._dpdQuery = config.dpdQuery;
    this._dpdRetry = config.dpdRetry;
    this._identityLocalAddress = config.identityLocalAddress;
    this._identityLocalKeyId = config.identityLocalKeyId;
    this._ivrf = config.ivrf;
    this._keyringLocal = config.keyringLocal;
    this._matchAddressLocalIp = config.matchAddressLocalIp;
    this._matchFvrf = config.matchFvrf;
    this._matchFvrfAny = config.matchFvrfAny;
    this._matchIdentityRemoteIpv4Addresses.internalValue = config.matchIdentityRemoteIpv4Addresses;
    this._matchIdentityRemoteIpv6Prefixes = config.matchIdentityRemoteIpv6Prefixes;
    this._matchIdentityRemoteKeys = config.matchIdentityRemoteKeys;
    this._matchInboundOnly = config.matchInboundOnly;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_local_pre_share - computed: false, optional: true, required: false
  private _authenticationLocalPreShare?: boolean | cdktf.IResolvable; 
  public get authenticationLocalPreShare() {
    return this.getBooleanAttribute('authentication_local_pre_share');
  }
  public set authenticationLocalPreShare(value: boolean | cdktf.IResolvable) {
    this._authenticationLocalPreShare = value;
  }
  public resetAuthenticationLocalPreShare() {
    this._authenticationLocalPreShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationLocalPreShareInput() {
    return this._authenticationLocalPreShare;
  }

  // authentication_remote_pre_share - computed: false, optional: true, required: false
  private _authenticationRemotePreShare?: boolean | cdktf.IResolvable; 
  public get authenticationRemotePreShare() {
    return this.getBooleanAttribute('authentication_remote_pre_share');
  }
  public set authenticationRemotePreShare(value: boolean | cdktf.IResolvable) {
    this._authenticationRemotePreShare = value;
  }
  public resetAuthenticationRemotePreShare() {
    this._authenticationRemotePreShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRemotePreShareInput() {
    return this._authenticationRemotePreShare;
  }

  // config_exchange_request - computed: false, optional: true, required: false
  private _configExchangeRequest?: boolean | cdktf.IResolvable; 
  public get configExchangeRequest() {
    return this.getBooleanAttribute('config_exchange_request');
  }
  public set configExchangeRequest(value: boolean | cdktf.IResolvable) {
    this._configExchangeRequest = value;
  }
  public resetConfigExchangeRequest() {
    this._configExchangeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configExchangeRequestInput() {
    return this._configExchangeRequest;
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

  // dpd_interval - computed: false, optional: true, required: false
  private _dpdInterval?: number; 
  public get dpdInterval() {
    return this.getNumberAttribute('dpd_interval');
  }
  public set dpdInterval(value: number) {
    this._dpdInterval = value;
  }
  public resetDpdInterval() {
    this._dpdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdIntervalInput() {
    return this._dpdInterval;
  }

  // dpd_query - computed: false, optional: true, required: false
  private _dpdQuery?: string; 
  public get dpdQuery() {
    return this.getStringAttribute('dpd_query');
  }
  public set dpdQuery(value: string) {
    this._dpdQuery = value;
  }
  public resetDpdQuery() {
    this._dpdQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdQueryInput() {
    return this._dpdQuery;
  }

  // dpd_retry - computed: false, optional: true, required: false
  private _dpdRetry?: number; 
  public get dpdRetry() {
    return this.getNumberAttribute('dpd_retry');
  }
  public set dpdRetry(value: number) {
    this._dpdRetry = value;
  }
  public resetDpdRetry() {
    this._dpdRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdRetryInput() {
    return this._dpdRetry;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_local_address - computed: false, optional: true, required: false
  private _identityLocalAddress?: string; 
  public get identityLocalAddress() {
    return this.getStringAttribute('identity_local_address');
  }
  public set identityLocalAddress(value: string) {
    this._identityLocalAddress = value;
  }
  public resetIdentityLocalAddress() {
    this._identityLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityLocalAddressInput() {
    return this._identityLocalAddress;
  }

  // identity_local_key_id - computed: false, optional: true, required: false
  private _identityLocalKeyId?: string; 
  public get identityLocalKeyId() {
    return this.getStringAttribute('identity_local_key_id');
  }
  public set identityLocalKeyId(value: string) {
    this._identityLocalKeyId = value;
  }
  public resetIdentityLocalKeyId() {
    this._identityLocalKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityLocalKeyIdInput() {
    return this._identityLocalKeyId;
  }

  // ivrf - computed: false, optional: true, required: false
  private _ivrf?: string; 
  public get ivrf() {
    return this.getStringAttribute('ivrf');
  }
  public set ivrf(value: string) {
    this._ivrf = value;
  }
  public resetIvrf() {
    this._ivrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ivrfInput() {
    return this._ivrf;
  }

  // keyring_local - computed: false, optional: true, required: false
  private _keyringLocal?: string; 
  public get keyringLocal() {
    return this.getStringAttribute('keyring_local');
  }
  public set keyringLocal(value: string) {
    this._keyringLocal = value;
  }
  public resetKeyringLocal() {
    this._keyringLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringLocalInput() {
    return this._keyringLocal;
  }

  // match_address_local_ip - computed: false, optional: true, required: false
  private _matchAddressLocalIp?: string; 
  public get matchAddressLocalIp() {
    return this.getStringAttribute('match_address_local_ip');
  }
  public set matchAddressLocalIp(value: string) {
    this._matchAddressLocalIp = value;
  }
  public resetMatchAddressLocalIp() {
    this._matchAddressLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAddressLocalIpInput() {
    return this._matchAddressLocalIp;
  }

  // match_fvrf - computed: false, optional: true, required: false
  private _matchFvrf?: string; 
  public get matchFvrf() {
    return this.getStringAttribute('match_fvrf');
  }
  public set matchFvrf(value: string) {
    this._matchFvrf = value;
  }
  public resetMatchFvrf() {
    this._matchFvrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFvrfInput() {
    return this._matchFvrf;
  }

  // match_fvrf_any - computed: false, optional: true, required: false
  private _matchFvrfAny?: boolean | cdktf.IResolvable; 
  public get matchFvrfAny() {
    return this.getBooleanAttribute('match_fvrf_any');
  }
  public set matchFvrfAny(value: boolean | cdktf.IResolvable) {
    this._matchFvrfAny = value;
  }
  public resetMatchFvrfAny() {
    this._matchFvrfAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFvrfAnyInput() {
    return this._matchFvrfAny;
  }

  // match_identity_remote_ipv4_addresses - computed: false, optional: true, required: false
  private _matchIdentityRemoteIpv4Addresses = new CryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesList(this, "match_identity_remote_ipv4_addresses", false);
  public get matchIdentityRemoteIpv4Addresses() {
    return this._matchIdentityRemoteIpv4Addresses;
  }
  public putMatchIdentityRemoteIpv4Addresses(value: CryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses[] | cdktf.IResolvable) {
    this._matchIdentityRemoteIpv4Addresses.internalValue = value;
  }
  public resetMatchIdentityRemoteIpv4Addresses() {
    this._matchIdentityRemoteIpv4Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIdentityRemoteIpv4AddressesInput() {
    return this._matchIdentityRemoteIpv4Addresses.internalValue;
  }

  // match_identity_remote_ipv6_prefixes - computed: false, optional: true, required: false
  private _matchIdentityRemoteIpv6Prefixes?: string[]; 
  public get matchIdentityRemoteIpv6Prefixes() {
    return this.getListAttribute('match_identity_remote_ipv6_prefixes');
  }
  public set matchIdentityRemoteIpv6Prefixes(value: string[]) {
    this._matchIdentityRemoteIpv6Prefixes = value;
  }
  public resetMatchIdentityRemoteIpv6Prefixes() {
    this._matchIdentityRemoteIpv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIdentityRemoteIpv6PrefixesInput() {
    return this._matchIdentityRemoteIpv6Prefixes;
  }

  // match_identity_remote_keys - computed: false, optional: true, required: false
  private _matchIdentityRemoteKeys?: string[]; 
  public get matchIdentityRemoteKeys() {
    return this.getListAttribute('match_identity_remote_keys');
  }
  public set matchIdentityRemoteKeys(value: string[]) {
    this._matchIdentityRemoteKeys = value;
  }
  public resetMatchIdentityRemoteKeys() {
    this._matchIdentityRemoteKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIdentityRemoteKeysInput() {
    return this._matchIdentityRemoteKeys;
  }

  // match_inbound_only - computed: false, optional: true, required: false
  private _matchInboundOnly?: boolean | cdktf.IResolvable; 
  public get matchInboundOnly() {
    return this.getBooleanAttribute('match_inbound_only');
  }
  public set matchInboundOnly(value: boolean | cdktf.IResolvable) {
    this._matchInboundOnly = value;
  }
  public resetMatchInboundOnly() {
    this._matchInboundOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInboundOnlyInput() {
    return this._matchInboundOnly;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_local_pre_share: cdktf.booleanToTerraform(this._authenticationLocalPreShare),
      authentication_remote_pre_share: cdktf.booleanToTerraform(this._authenticationRemotePreShare),
      config_exchange_request: cdktf.booleanToTerraform(this._configExchangeRequest),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      dpd_interval: cdktf.numberToTerraform(this._dpdInterval),
      dpd_query: cdktf.stringToTerraform(this._dpdQuery),
      dpd_retry: cdktf.numberToTerraform(this._dpdRetry),
      identity_local_address: cdktf.stringToTerraform(this._identityLocalAddress),
      identity_local_key_id: cdktf.stringToTerraform(this._identityLocalKeyId),
      ivrf: cdktf.stringToTerraform(this._ivrf),
      keyring_local: cdktf.stringToTerraform(this._keyringLocal),
      match_address_local_ip: cdktf.stringToTerraform(this._matchAddressLocalIp),
      match_fvrf: cdktf.stringToTerraform(this._matchFvrf),
      match_fvrf_any: cdktf.booleanToTerraform(this._matchFvrfAny),
      match_identity_remote_ipv4_addresses: cdktf.listMapper(cryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesToTerraform, false)(this._matchIdentityRemoteIpv4Addresses.internalValue),
      match_identity_remote_ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchIdentityRemoteIpv6Prefixes),
      match_identity_remote_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchIdentityRemoteKeys),
      match_inbound_only: cdktf.booleanToTerraform(this._matchInboundOnly),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_local_pre_share: {
        value: cdktf.booleanToHclTerraform(this._authenticationLocalPreShare),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_remote_pre_share: {
        value: cdktf.booleanToHclTerraform(this._authenticationRemotePreShare),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_exchange_request: {
        value: cdktf.booleanToHclTerraform(this._configExchangeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_interval: {
        value: cdktf.numberToHclTerraform(this._dpdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_query: {
        value: cdktf.stringToHclTerraform(this._dpdQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_retry: {
        value: cdktf.numberToHclTerraform(this._dpdRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity_local_address: {
        value: cdktf.stringToHclTerraform(this._identityLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_local_key_id: {
        value: cdktf.stringToHclTerraform(this._identityLocalKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ivrf: {
        value: cdktf.stringToHclTerraform(this._ivrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyring_local: {
        value: cdktf.stringToHclTerraform(this._keyringLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_address_local_ip: {
        value: cdktf.stringToHclTerraform(this._matchAddressLocalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_fvrf: {
        value: cdktf.stringToHclTerraform(this._matchFvrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_fvrf_any: {
        value: cdktf.booleanToHclTerraform(this._matchFvrfAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_identity_remote_ipv4_addresses: {
        value: cdktf.listMapperHcl(cryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesToHclTerraform, false)(this._matchIdentityRemoteIpv4Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesList",
      },
      match_identity_remote_ipv6_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchIdentityRemoteIpv6Prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_identity_remote_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchIdentityRemoteKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_inbound_only: {
        value: cdktf.booleanToHclTerraform(this._matchInboundOnly),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
