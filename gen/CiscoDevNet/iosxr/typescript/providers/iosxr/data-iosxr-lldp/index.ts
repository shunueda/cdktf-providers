// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/lldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrLldpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/lldp#device DataIosxrLldp#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/lldp iosxr_lldp}
*/
export class DataIosxrLldp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_lldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrLldp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrLldp to import
  * @param importFromId The id of the existing DataIosxrLldp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/lldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrLldp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_lldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/lldp iosxr_lldp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrLldpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrLldpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_lldp',
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
    this._device = config.device;
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

  // extended_show_width_enable - computed: true, optional: false, required: false
  public get extendedShowWidthEnable() {
    return this.getBooleanAttribute('extended_show_width_enable');
  }

  // holdtime - computed: true, optional: false, required: false
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_enable - computed: true, optional: false, required: false
  public get managementEnable() {
    return this.getBooleanAttribute('management_enable');
  }

  // priorityaddr_enable - computed: true, optional: false, required: false
  public get priorityaddrEnable() {
    return this.getBooleanAttribute('priorityaddr_enable');
  }

  // reinit - computed: true, optional: false, required: false
  public get reinit() {
    return this.getNumberAttribute('reinit');
  }

  // subinterfaces_enable - computed: true, optional: false, required: false
  public get subinterfacesEnable() {
    return this.getBooleanAttribute('subinterfaces_enable');
  }

  // timer - computed: true, optional: false, required: false
  public get timer() {
    return this.getNumberAttribute('timer');
  }

  // tlv_select_management_address_disable - computed: true, optional: false, required: false
  public get tlvSelectManagementAddressDisable() {
    return this.getBooleanAttribute('tlv_select_management_address_disable');
  }

  // tlv_select_port_description_disable - computed: true, optional: false, required: false
  public get tlvSelectPortDescriptionDisable() {
    return this.getBooleanAttribute('tlv_select_port_description_disable');
  }

  // tlv_select_system_capabilities_disable - computed: true, optional: false, required: false
  public get tlvSelectSystemCapabilitiesDisable() {
    return this.getBooleanAttribute('tlv_select_system_capabilities_disable');
  }

  // tlv_select_system_description_disable - computed: true, optional: false, required: false
  public get tlvSelectSystemDescriptionDisable() {
    return this.getBooleanAttribute('tlv_select_system_description_disable');
  }

  // tlv_select_system_name_disable - computed: true, optional: false, required: false
  public get tlvSelectSystemNameDisable() {
    return this.getBooleanAttribute('tlv_select_system_name_disable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
