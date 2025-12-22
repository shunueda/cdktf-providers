// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIpsecTransformSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set#device CryptoIpsecTransformSet#device}
  */
  readonly device?: string;
  /**
  * 
  *   - Choices: `esp-192-aes`, `esp-256-aes`, `esp-3des`, `esp-aes`, `esp-des`, `esp-gcm`, `esp-gmac`, `esp-null`, `esp-seal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set#esp CryptoIpsecTransformSet#esp}
  */
  readonly esp: string;
  /**
  * 
  *   - Choices: `esp-md5-hmac`, `esp-sha-hmac`, `esp-sha256-hmac`, `esp-sha384-hmac`, `esp-sha512-hmac`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set#esp_hmac CryptoIpsecTransformSet#esp_hmac}
  */
  readonly espHmac: string;
  /**
  * tunnel (datagram encapsulation) mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set#mode_tunnel CryptoIpsecTransformSet#mode_tunnel}
  */
  readonly modeTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set#name CryptoIpsecTransformSet#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set iosxe_crypto_ipsec_transform_set}
*/
export class CryptoIpsecTransformSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ipsec_transform_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIpsecTransformSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIpsecTransformSet to import
  * @param importFromId The id of the existing CryptoIpsecTransformSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIpsecTransformSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ipsec_transform_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/crypto_ipsec_transform_set iosxe_crypto_ipsec_transform_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIpsecTransformSetConfig
  */
  public constructor(scope: Construct, id: string, config: CryptoIpsecTransformSetConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ipsec_transform_set',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
    this._esp = config.esp;
    this._espHmac = config.espHmac;
    this._modeTunnel = config.modeTunnel;
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

  // esp - computed: false, optional: false, required: true
  private _esp?: string; 
  public get esp() {
    return this.getStringAttribute('esp');
  }
  public set esp(value: string) {
    this._esp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp;
  }

  // esp_hmac - computed: false, optional: false, required: true
  private _espHmac?: string; 
  public get espHmac() {
    return this.getStringAttribute('esp_hmac');
  }
  public set espHmac(value: string) {
    this._espHmac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get espHmacInput() {
    return this._espHmac;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode_tunnel - computed: false, optional: true, required: false
  private _modeTunnel?: boolean | cdktf.IResolvable; 
  public get modeTunnel() {
    return this.getBooleanAttribute('mode_tunnel');
  }
  public set modeTunnel(value: boolean | cdktf.IResolvable) {
    this._modeTunnel = value;
  }
  public resetModeTunnel() {
    this._modeTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTunnelInput() {
    return this._modeTunnel;
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
      esp: cdktf.stringToTerraform(this._esp),
      esp_hmac: cdktf.stringToTerraform(this._espHmac),
      mode_tunnel: cdktf.booleanToTerraform(this._modeTunnel),
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
      esp: {
        value: cdktf.stringToHclTerraform(this._esp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esp_hmac: {
        value: cdktf.stringToHclTerraform(this._espHmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_tunnel: {
        value: cdktf.booleanToHclTerraform(this._modeTunnel),
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
