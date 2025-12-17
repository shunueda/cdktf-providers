// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/vlan_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeVlanConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/vlan_configuration#device DataIosxeVlanConfiguration#device}
  */
  readonly device?: string;
  /**
  * VLAN ID List Eg. 1-10,15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/vlan_configuration#vlan_id DataIosxeVlanConfiguration#vlan_id}
  */
  readonly vlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/vlan_configuration iosxe_vlan_configuration}
*/
export class DataIosxeVlanConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vlan_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeVlanConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeVlanConfiguration to import
  * @param importFromId The id of the existing DataIosxeVlanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/vlan_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeVlanConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vlan_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/vlan_configuration iosxe_vlan_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeVlanConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeVlanConfigurationConfig) {
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
    this._device = config.device;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vfi - computed: true, optional: false, required: false
  public get accessVfi() {
    return this.getStringAttribute('access_vfi');
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

  // evpn_instance - computed: true, optional: false, required: false
  public get evpnInstance() {
    return this.getNumberAttribute('evpn_instance');
  }

  // evpn_instance_legacy - computed: true, optional: false, required: false
  public get evpnInstanceLegacy() {
    return this.getNumberAttribute('evpn_instance_legacy');
  }

  // evpn_instance_profile - computed: true, optional: false, required: false
  public get evpnInstanceProfile() {
    return this.getStringAttribute('evpn_instance_profile');
  }

  // evpn_instance_profile_protected - computed: true, optional: false, required: false
  public get evpnInstanceProfileProtected() {
    return this.getBooleanAttribute('evpn_instance_profile_protected');
  }

  // evpn_instance_protected - computed: true, optional: false, required: false
  public get evpnInstanceProtected() {
    return this.getBooleanAttribute('evpn_instance_protected');
  }

  // evpn_instance_vni - computed: true, optional: false, required: false
  public get evpnInstanceVni() {
    return this.getNumberAttribute('evpn_instance_vni');
  }

  // evpn_instance_vni_legacy - computed: true, optional: false, required: false
  public get evpnInstanceVniLegacy() {
    return this.getNumberAttribute('evpn_instance_vni_legacy');
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

  // vni - computed: true, optional: false, required: false
  public get vni() {
    return this.getNumberAttribute('vni');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
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
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
