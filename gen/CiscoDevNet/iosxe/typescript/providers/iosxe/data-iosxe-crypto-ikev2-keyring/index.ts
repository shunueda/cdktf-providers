// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/crypto_ikev2_keyring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeCryptoIkev2KeyringConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/crypto_ikev2_keyring#device DataIosxeCryptoIkev2Keyring#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/crypto_ikev2_keyring#name DataIosxeCryptoIkev2Keyring#name}
  */
  readonly name: string;
}
export interface DataIosxeCryptoIkev2KeyringPeers {
}

export function dataIosxeCryptoIkev2KeyringPeersToTerraform(struct?: DataIosxeCryptoIkev2KeyringPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeCryptoIkev2KeyringPeersToHclTerraform(struct?: DataIosxeCryptoIkev2KeyringPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeCryptoIkev2KeyringPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeCryptoIkev2KeyringPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeCryptoIkev2KeyringPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // identity_address - computed: true, optional: false, required: false
  public get identityAddress() {
    return this.getStringAttribute('identity_address');
  }

  // identity_email_domain - computed: true, optional: false, required: false
  public get identityEmailDomain() {
    return this.getStringAttribute('identity_email_domain');
  }

  // identity_email_name - computed: true, optional: false, required: false
  public get identityEmailName() {
    return this.getStringAttribute('identity_email_name');
  }

  // identity_fqdn_domain - computed: true, optional: false, required: false
  public get identityFqdnDomain() {
    return this.getStringAttribute('identity_fqdn_domain');
  }

  // identity_fqdn_name - computed: true, optional: false, required: false
  public get identityFqdnName() {
    return this.getStringAttribute('identity_fqdn_name');
  }

  // identity_key_id - computed: true, optional: false, required: false
  public get identityKeyId() {
    return this.getStringAttribute('identity_key_id');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask - computed: true, optional: false, required: false
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }

  // ipv6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pre_shared_key - computed: true, optional: false, required: false
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }

  // pre_shared_key_encryption - computed: true, optional: false, required: false
  public get preSharedKeyEncryption() {
    return this.getStringAttribute('pre_shared_key_encryption');
  }

  // pre_shared_key_local - computed: true, optional: false, required: false
  public get preSharedKeyLocal() {
    return this.getStringAttribute('pre_shared_key_local');
  }

  // pre_shared_key_local_encryption - computed: true, optional: false, required: false
  public get preSharedKeyLocalEncryption() {
    return this.getStringAttribute('pre_shared_key_local_encryption');
  }

  // pre_shared_key_remote - computed: true, optional: false, required: false
  public get preSharedKeyRemote() {
    return this.getStringAttribute('pre_shared_key_remote');
  }

  // pre_shared_key_remote_encryption - computed: true, optional: false, required: false
  public get preSharedKeyRemoteEncryption() {
    return this.getStringAttribute('pre_shared_key_remote_encryption');
  }
}

export class DataIosxeCryptoIkev2KeyringPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeCryptoIkev2KeyringPeersOutputReference {
    return new DataIosxeCryptoIkev2KeyringPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/crypto_ikev2_keyring iosxe_crypto_ikev2_keyring}
*/
export class DataIosxeCryptoIkev2Keyring extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_keyring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeCryptoIkev2Keyring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeCryptoIkev2Keyring to import
  * @param importFromId The id of the existing DataIosxeCryptoIkev2Keyring that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/crypto_ikev2_keyring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeCryptoIkev2Keyring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_keyring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/crypto_ikev2_keyring iosxe_crypto_ikev2_keyring} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeCryptoIkev2KeyringConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeCryptoIkev2KeyringConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2_keyring',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
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

  // peers - computed: true, optional: false, required: false
  private _peers = new DataIosxeCryptoIkev2KeyringPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
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
