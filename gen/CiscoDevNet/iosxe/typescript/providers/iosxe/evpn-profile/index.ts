// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile#delete_mode EvpnProfile#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile#device EvpnProfile#device}
  */
  readonly device?: string;
  /**
  * Evpn instance identifier base
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile#evi_base EvpnProfile#evi_base}
  */
  readonly eviBase?: number;
  /**
  * VxLAN Layer 2 VNI base
  *   - Range: `4096`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile#l2vni_base EvpnProfile#l2vni_base}
  */
  readonly l2VniBase?: number;
  /**
  * EVPN L2 profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile#name EvpnProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile iosxe_evpn_profile}
*/
export class EvpnProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_evpn_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnProfile to import
  * @param importFromId The id of the existing EvpnProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_evpn_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/evpn_profile iosxe_evpn_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnProfileConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_evpn_profile',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._eviBase = config.eviBase;
    this._l2VniBase = config.l2VniBase;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // evi_base - computed: false, optional: true, required: false
  private _eviBase?: number; 
  public get eviBase() {
    return this.getNumberAttribute('evi_base');
  }
  public set eviBase(value: number) {
    this._eviBase = value;
  }
  public resetEviBase() {
    this._eviBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eviBaseInput() {
    return this._eviBase;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l2vni_base - computed: false, optional: true, required: false
  private _l2VniBase?: number; 
  public get l2VniBase() {
    return this.getNumberAttribute('l2vni_base');
  }
  public set l2VniBase(value: number) {
    this._l2VniBase = value;
  }
  public resetL2VniBase() {
    this._l2VniBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2VniBaseInput() {
    return this._l2VniBase;
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
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      evi_base: cdktf.numberToTerraform(this._eviBase),
      l2vni_base: cdktf.numberToTerraform(this._l2VniBase),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      evi_base: {
        value: cdktf.numberToHclTerraform(this._eviBase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2vni_base: {
        value: cdktf.numberToHclTerraform(this._l2VniBase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
