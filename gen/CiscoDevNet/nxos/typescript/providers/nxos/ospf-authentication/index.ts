// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspfAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#device OspfAuthentication#device}
  */
  readonly device?: string;
  /**
  * OSPF instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#instance_name OspfAuthentication#instance_name}
  */
  readonly instanceName: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#interface_id OspfAuthentication#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Key used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#key OspfAuthentication#key}
  */
  readonly key?: string;
  /**
  * Key ID used for authentication.
  *   - Range: `0`-`255`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#key_id OspfAuthentication#key_id}
  */
  readonly keyId?: number;
  /**
  * Encrypted authentication key or plain text key.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#key_secure_mode OspfAuthentication#key_secure_mode}
  */
  readonly keySecureMode?: boolean | cdktf.IResolvable;
  /**
  * Authentication keychain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#keychain OspfAuthentication#keychain}
  */
  readonly keychain?: string;
  /**
  * Key used for md5 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#md5_key OspfAuthentication#md5_key}
  */
  readonly md5Key?: string;
  /**
  * Encrypted authentication md5 key or plain text key.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#md5_key_secure_mode OspfAuthentication#md5_key_secure_mode}
  */
  readonly md5KeySecureMode?: boolean | cdktf.IResolvable;
  /**
  * Authentication type.
  *   - Choices: `none`, `simple`, `md5`, `unspecified`
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#type OspfAuthentication#type}
  */
  readonly type?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#vrf_name OspfAuthentication#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication nxos_ospf_authentication}
*/
export class OspfAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ospf_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OspfAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OspfAuthentication to import
  * @param importFromId The id of the existing OspfAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OspfAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ospf_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ospf_authentication nxos_ospf_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspfAuthenticationConfig
  */
  public constructor(scope: Construct, id: string, config: OspfAuthenticationConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ospf_authentication',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
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
    this._instanceName = config.instanceName;
    this._interfaceId = config.interfaceId;
    this._key = config.key;
    this._keyId = config.keyId;
    this._keySecureMode = config.keySecureMode;
    this._keychain = config.keychain;
    this._md5Key = config.md5Key;
    this._md5KeySecureMode = config.md5KeySecureMode;
    this._type = config.type;
    this._vrfName = config.vrfName;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_secure_mode - computed: true, optional: true, required: false
  private _keySecureMode?: boolean | cdktf.IResolvable; 
  public get keySecureMode() {
    return this.getBooleanAttribute('key_secure_mode');
  }
  public set keySecureMode(value: boolean | cdktf.IResolvable) {
    this._keySecureMode = value;
  }
  public resetKeySecureMode() {
    this._keySecureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecureModeInput() {
    return this._keySecureMode;
  }

  // keychain - computed: false, optional: true, required: false
  private _keychain?: string; 
  public get keychain() {
    return this.getStringAttribute('keychain');
  }
  public set keychain(value: string) {
    this._keychain = value;
  }
  public resetKeychain() {
    this._keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keychainInput() {
    return this._keychain;
  }

  // md5_key - computed: false, optional: true, required: false
  private _md5Key?: string; 
  public get md5Key() {
    return this.getStringAttribute('md5_key');
  }
  public set md5Key(value: string) {
    this._md5Key = value;
  }
  public resetMd5Key() {
    this._md5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeyInput() {
    return this._md5Key;
  }

  // md5_key_secure_mode - computed: true, optional: true, required: false
  private _md5KeySecureMode?: boolean | cdktf.IResolvable; 
  public get md5KeySecureMode() {
    return this.getBooleanAttribute('md5_key_secure_mode');
  }
  public set md5KeySecureMode(value: boolean | cdktf.IResolvable) {
    this._md5KeySecureMode = value;
  }
  public resetMd5KeySecureMode() {
    this._md5KeySecureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeySecureModeInput() {
    return this._md5KeySecureMode;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      key: cdktf.stringToTerraform(this._key),
      key_id: cdktf.numberToTerraform(this._keyId),
      key_secure_mode: cdktf.booleanToTerraform(this._keySecureMode),
      keychain: cdktf.stringToTerraform(this._keychain),
      md5_key: cdktf.stringToTerraform(this._md5Key),
      md5_key_secure_mode: cdktf.booleanToTerraform(this._md5KeySecureMode),
      type: cdktf.stringToTerraform(this._type),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_secure_mode: {
        value: cdktf.booleanToHclTerraform(this._keySecureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keychain: {
        value: cdktf.stringToHclTerraform(this._keychain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5_key: {
        value: cdktf.stringToHclTerraform(this._md5Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5_key_secure_mode: {
        value: cdktf.booleanToHclTerraform(this._md5KeySecureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
