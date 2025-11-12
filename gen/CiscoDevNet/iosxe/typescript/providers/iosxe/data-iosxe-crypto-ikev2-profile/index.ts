// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/crypto_ikev2_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeCryptoIkev2ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/crypto_ikev2_profile#device DataIosxeCryptoIkev2Profile#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/crypto_ikev2_profile#name DataIosxeCryptoIkev2Profile#name}
  */
  readonly name: string;
}
export interface DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses {
}

export function dataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesToTerraform(struct?: DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesToHclTerraform(struct?: DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesOutputReference {
    return new DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/crypto_ikev2_profile iosxe_crypto_ikev2_profile}
*/
export class DataIosxeCryptoIkev2Profile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeCryptoIkev2Profile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeCryptoIkev2Profile to import
  * @param importFromId The id of the existing DataIosxeCryptoIkev2Profile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/crypto_ikev2_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeCryptoIkev2Profile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/crypto_ikev2_profile iosxe_crypto_ikev2_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeCryptoIkev2ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeCryptoIkev2ProfileConfig) {
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
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_local_pre_share - computed: true, optional: false, required: false
  public get authenticationLocalPreShare() {
    return this.getBooleanAttribute('authentication_local_pre_share');
  }

  // authentication_remote_pre_share - computed: true, optional: false, required: false
  public get authenticationRemotePreShare() {
    return this.getBooleanAttribute('authentication_remote_pre_share');
  }

  // config_exchange_request - computed: true, optional: false, required: false
  public get configExchangeRequest() {
    return this.getBooleanAttribute('config_exchange_request');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // dpd_interval - computed: true, optional: false, required: false
  public get dpdInterval() {
    return this.getNumberAttribute('dpd_interval');
  }

  // dpd_query - computed: true, optional: false, required: false
  public get dpdQuery() {
    return this.getStringAttribute('dpd_query');
  }

  // dpd_retry - computed: true, optional: false, required: false
  public get dpdRetry() {
    return this.getNumberAttribute('dpd_retry');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_local_address - computed: true, optional: false, required: false
  public get identityLocalAddress() {
    return this.getStringAttribute('identity_local_address');
  }

  // identity_local_key_id - computed: true, optional: false, required: false
  public get identityLocalKeyId() {
    return this.getStringAttribute('identity_local_key_id');
  }

  // ivrf - computed: true, optional: false, required: false
  public get ivrf() {
    return this.getStringAttribute('ivrf');
  }

  // keyring_local - computed: true, optional: false, required: false
  public get keyringLocal() {
    return this.getStringAttribute('keyring_local');
  }

  // match_address_local_ip - computed: true, optional: false, required: false
  public get matchAddressLocalIp() {
    return this.getStringAttribute('match_address_local_ip');
  }

  // match_fvrf - computed: true, optional: false, required: false
  public get matchFvrf() {
    return this.getStringAttribute('match_fvrf');
  }

  // match_fvrf_any - computed: true, optional: false, required: false
  public get matchFvrfAny() {
    return this.getBooleanAttribute('match_fvrf_any');
  }

  // match_identity_remote_ipv4_addresses - computed: true, optional: false, required: false
  private _matchIdentityRemoteIpv4Addresses = new DataIosxeCryptoIkev2ProfileMatchIdentityRemoteIpv4AddressesList(this, "match_identity_remote_ipv4_addresses", false);
  public get matchIdentityRemoteIpv4Addresses() {
    return this._matchIdentityRemoteIpv4Addresses;
  }

  // match_identity_remote_ipv6_prefixes - computed: true, optional: false, required: false
  public get matchIdentityRemoteIpv6Prefixes() {
    return this.getListAttribute('match_identity_remote_ipv6_prefixes');
  }

  // match_identity_remote_keys - computed: true, optional: false, required: false
  public get matchIdentityRemoteKeys() {
    return this.getListAttribute('match_identity_remote_keys');
  }

  // match_inbound_only - computed: true, optional: false, required: false
  public get matchInboundOnly() {
    return this.getBooleanAttribute('match_inbound_only');
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
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
