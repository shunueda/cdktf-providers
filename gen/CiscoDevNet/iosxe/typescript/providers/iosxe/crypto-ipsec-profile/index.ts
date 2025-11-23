// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIpsecProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile#device CryptoIpsecProfile#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile#name CryptoIpsecProfile#name}
  */
  readonly name: string;
  /**
  * Specify ikev2 Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile#set_ikev2_profile CryptoIpsecProfile#set_ikev2_profile}
  */
  readonly setIkev2Profile?: string;
  /**
  * Specify isakmp Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile#set_isakmp_profile CryptoIpsecProfile#set_isakmp_profile}
  */
  readonly setIsakmpProfile?: string;
  /**
  * Specify list of transform sets in priority order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile#set_transform_set CryptoIpsecProfile#set_transform_set}
  */
  readonly setTransformSet?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile iosxe_crypto_ipsec_profile}
*/
export class CryptoIpsecProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ipsec_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIpsecProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIpsecProfile to import
  * @param importFromId The id of the existing CryptoIpsecProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIpsecProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ipsec_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_ipsec_profile iosxe_crypto_ipsec_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIpsecProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CryptoIpsecProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ipsec_profile',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
    this._setIkev2Profile = config.setIkev2Profile;
    this._setIsakmpProfile = config.setIsakmpProfile;
    this._setTransformSet = config.setTransformSet;
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

  // set_ikev2_profile - computed: false, optional: true, required: false
  private _setIkev2Profile?: string; 
  public get setIkev2Profile() {
    return this.getStringAttribute('set_ikev2_profile');
  }
  public set setIkev2Profile(value: string) {
    this._setIkev2Profile = value;
  }
  public resetSetIkev2Profile() {
    this._setIkev2Profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIkev2ProfileInput() {
    return this._setIkev2Profile;
  }

  // set_isakmp_profile - computed: false, optional: true, required: false
  private _setIsakmpProfile?: string; 
  public get setIsakmpProfile() {
    return this.getStringAttribute('set_isakmp_profile');
  }
  public set setIsakmpProfile(value: string) {
    this._setIsakmpProfile = value;
  }
  public resetSetIsakmpProfile() {
    this._setIsakmpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIsakmpProfileInput() {
    return this._setIsakmpProfile;
  }

  // set_transform_set - computed: false, optional: true, required: false
  private _setTransformSet?: string[]; 
  public get setTransformSet() {
    return this.getListAttribute('set_transform_set');
  }
  public set setTransformSet(value: string[]) {
    this._setTransformSet = value;
  }
  public resetSetTransformSet() {
    this._setTransformSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTransformSetInput() {
    return this._setTransformSet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      set_ikev2_profile: cdktf.stringToTerraform(this._setIkev2Profile),
      set_isakmp_profile: cdktf.stringToTerraform(this._setIsakmpProfile),
      set_transform_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setTransformSet),
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
      set_ikev2_profile: {
        value: cdktf.stringToHclTerraform(this._setIkev2Profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_isakmp_profile: {
        value: cdktf.stringToHclTerraform(this._setIsakmpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_transform_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setTransformSet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
