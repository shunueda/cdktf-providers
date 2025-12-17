// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter VFI name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#access_vfi VlanConfiguration#access_vfi}
  */
  readonly accessVfi?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#device VlanConfiguration#device}
  */
  readonly device?: string;
  /**
  * EVPN instance number (current path). Use for IOS-XE >= 17.15.
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance VlanConfiguration#evpn_instance}
  */
  readonly evpnInstance?: number;
  /**
  * EVPN instance number (deprecated path). Use for IOS-XE < 17.15.
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance_legacy VlanConfiguration#evpn_instance_legacy}
  */
  readonly evpnInstanceLegacy?: number;
  /**
  * EVPN instance profile name. Use for IOS-XE >= 17.15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance_profile VlanConfiguration#evpn_instance_profile}
  */
  readonly evpnInstanceProfile?: string;
  /**
  * Enable local peer to peer blocking for auto EVI with profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance_profile_protected VlanConfiguration#evpn_instance_profile_protected}
  */
  readonly evpnInstanceProfileProtected?: boolean | cdktf.IResolvable;
  /**
  * Enable local peer to peer blocking for EVI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance_protected VlanConfiguration#evpn_instance_protected}
  */
  readonly evpnInstanceProtected?: boolean | cdktf.IResolvable;
  /**
  * VNI for EVPN instance (current path). Use for IOS-XE >= 17.15.
  *   - Range: `4096`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance_vni VlanConfiguration#evpn_instance_vni}
  */
  readonly evpnInstanceVni?: number;
  /**
  * VNI for EVPN instance (deprecated path). Use for IOS-XE < 17.15.
  *   - Range: `4096`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#evpn_instance_vni_legacy VlanConfiguration#evpn_instance_vni_legacy}
  */
  readonly evpnInstanceVniLegacy?: number;
  /**
  * VLAN ID List Eg. 1-10,15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#vlan_id VlanConfiguration#vlan_id}
  */
  readonly vlanId: string;
  /**
  * VxLAN VNI value
  *   - Range: `4096`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#vni VlanConfiguration#vni}
  */
  readonly vni?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration iosxe_vlan_configuration}
*/
export class VlanConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vlan_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanConfiguration to import
  * @param importFromId The id of the existing VlanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vlan_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/vlan_configuration iosxe_vlan_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: VlanConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vlan_configuration',
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
    this._accessVfi = config.accessVfi;
    this._device = config.device;
    this._evpnInstance = config.evpnInstance;
    this._evpnInstanceLegacy = config.evpnInstanceLegacy;
    this._evpnInstanceProfile = config.evpnInstanceProfile;
    this._evpnInstanceProfileProtected = config.evpnInstanceProfileProtected;
    this._evpnInstanceProtected = config.evpnInstanceProtected;
    this._evpnInstanceVni = config.evpnInstanceVni;
    this._evpnInstanceVniLegacy = config.evpnInstanceVniLegacy;
    this._vlanId = config.vlanId;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vfi - computed: false, optional: true, required: false
  private _accessVfi?: string; 
  public get accessVfi() {
    return this.getStringAttribute('access_vfi');
  }
  public set accessVfi(value: string) {
    this._accessVfi = value;
  }
  public resetAccessVfi() {
    this._accessVfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVfiInput() {
    return this._accessVfi;
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

  // evpn_instance - computed: false, optional: true, required: false
  private _evpnInstance?: number; 
  public get evpnInstance() {
    return this.getNumberAttribute('evpn_instance');
  }
  public set evpnInstance(value: number) {
    this._evpnInstance = value;
  }
  public resetEvpnInstance() {
    this._evpnInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceInput() {
    return this._evpnInstance;
  }

  // evpn_instance_legacy - computed: false, optional: true, required: false
  private _evpnInstanceLegacy?: number; 
  public get evpnInstanceLegacy() {
    return this.getNumberAttribute('evpn_instance_legacy');
  }
  public set evpnInstanceLegacy(value: number) {
    this._evpnInstanceLegacy = value;
  }
  public resetEvpnInstanceLegacy() {
    this._evpnInstanceLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceLegacyInput() {
    return this._evpnInstanceLegacy;
  }

  // evpn_instance_profile - computed: false, optional: true, required: false
  private _evpnInstanceProfile?: string; 
  public get evpnInstanceProfile() {
    return this.getStringAttribute('evpn_instance_profile');
  }
  public set evpnInstanceProfile(value: string) {
    this._evpnInstanceProfile = value;
  }
  public resetEvpnInstanceProfile() {
    this._evpnInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceProfileInput() {
    return this._evpnInstanceProfile;
  }

  // evpn_instance_profile_protected - computed: false, optional: true, required: false
  private _evpnInstanceProfileProtected?: boolean | cdktf.IResolvable; 
  public get evpnInstanceProfileProtected() {
    return this.getBooleanAttribute('evpn_instance_profile_protected');
  }
  public set evpnInstanceProfileProtected(value: boolean | cdktf.IResolvable) {
    this._evpnInstanceProfileProtected = value;
  }
  public resetEvpnInstanceProfileProtected() {
    this._evpnInstanceProfileProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceProfileProtectedInput() {
    return this._evpnInstanceProfileProtected;
  }

  // evpn_instance_protected - computed: false, optional: true, required: false
  private _evpnInstanceProtected?: boolean | cdktf.IResolvable; 
  public get evpnInstanceProtected() {
    return this.getBooleanAttribute('evpn_instance_protected');
  }
  public set evpnInstanceProtected(value: boolean | cdktf.IResolvable) {
    this._evpnInstanceProtected = value;
  }
  public resetEvpnInstanceProtected() {
    this._evpnInstanceProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceProtectedInput() {
    return this._evpnInstanceProtected;
  }

  // evpn_instance_vni - computed: false, optional: true, required: false
  private _evpnInstanceVni?: number; 
  public get evpnInstanceVni() {
    return this.getNumberAttribute('evpn_instance_vni');
  }
  public set evpnInstanceVni(value: number) {
    this._evpnInstanceVni = value;
  }
  public resetEvpnInstanceVni() {
    this._evpnInstanceVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceVniInput() {
    return this._evpnInstanceVni;
  }

  // evpn_instance_vni_legacy - computed: false, optional: true, required: false
  private _evpnInstanceVniLegacy?: number; 
  public get evpnInstanceVniLegacy() {
    return this.getNumberAttribute('evpn_instance_vni_legacy');
  }
  public set evpnInstanceVniLegacy(value: number) {
    this._evpnInstanceVniLegacy = value;
  }
  public resetEvpnInstanceVniLegacy() {
    this._evpnInstanceVniLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceVniLegacyInput() {
    return this._evpnInstanceVniLegacy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vfi: cdktf.stringToTerraform(this._accessVfi),
      device: cdktf.stringToTerraform(this._device),
      evpn_instance: cdktf.numberToTerraform(this._evpnInstance),
      evpn_instance_legacy: cdktf.numberToTerraform(this._evpnInstanceLegacy),
      evpn_instance_profile: cdktf.stringToTerraform(this._evpnInstanceProfile),
      evpn_instance_profile_protected: cdktf.booleanToTerraform(this._evpnInstanceProfileProtected),
      evpn_instance_protected: cdktf.booleanToTerraform(this._evpnInstanceProtected),
      evpn_instance_vni: cdktf.numberToTerraform(this._evpnInstanceVni),
      evpn_instance_vni_legacy: cdktf.numberToTerraform(this._evpnInstanceVniLegacy),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      vni: cdktf.numberToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vfi: {
        value: cdktf.stringToHclTerraform(this._accessVfi),
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
      evpn_instance: {
        value: cdktf.numberToHclTerraform(this._evpnInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evpn_instance_legacy: {
        value: cdktf.numberToHclTerraform(this._evpnInstanceLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evpn_instance_profile: {
        value: cdktf.stringToHclTerraform(this._evpnInstanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evpn_instance_profile_protected: {
        value: cdktf.booleanToHclTerraform(this._evpnInstanceProfileProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evpn_instance_protected: {
        value: cdktf.booleanToHclTerraform(this._evpnInstanceProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evpn_instance_vni: {
        value: cdktf.numberToHclTerraform(this._evpnInstanceVni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evpn_instance_vni_legacy: {
        value: cdktf.numberToHclTerraform(this._evpnInstanceVniLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
