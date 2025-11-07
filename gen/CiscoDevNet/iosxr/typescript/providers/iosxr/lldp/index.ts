// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#delete_mode Lldp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#device Lldp#device}
  */
  readonly device?: string;
  /**
  * Enable Extended Show LLDP Neighbor Width
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#extended_show_width_enable Lldp#extended_show_width_enable}
  */
  readonly extendedShowWidthEnable?: boolean | cdktf.IResolvable;
  /**
  * Specify the holdtime (in sec) to be sent in packets
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#holdtime Lldp#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Enable LLDP over Management interface as well
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#management_enable Lldp#management_enable}
  */
  readonly managementEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable LLDP to use Management interface address first(if configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#priorityaddr_enable Lldp#priorityaddr_enable}
  */
  readonly priorityaddrEnable?: boolean | cdktf.IResolvable;
  /**
  * Delay (in sec) for LLDP initialization on any interface
  *   - Range: `2`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#reinit Lldp#reinit}
  */
  readonly reinit?: number;
  /**
  * Enable LLDP over Sub-interfaces as well
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#subinterfaces_enable Lldp#subinterfaces_enable}
  */
  readonly subinterfacesEnable?: boolean | cdktf.IResolvable;
  /**
  * Specify the rate at which LLDP packets are sent (in sec)
  *   - Range: `5`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#timer Lldp#timer}
  */
  readonly timer?: number;
  /**
  * disable Management Address TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#tlv_select_management_address_disable Lldp#tlv_select_management_address_disable}
  */
  readonly tlvSelectManagementAddressDisable?: boolean | cdktf.IResolvable;
  /**
  * disable Port Description TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#tlv_select_port_description_disable Lldp#tlv_select_port_description_disable}
  */
  readonly tlvSelectPortDescriptionDisable?: boolean | cdktf.IResolvable;
  /**
  * disable System Capabilities TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#tlv_select_system_capabilities_disable Lldp#tlv_select_system_capabilities_disable}
  */
  readonly tlvSelectSystemCapabilitiesDisable?: boolean | cdktf.IResolvable;
  /**
  * disable System Description TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#tlv_select_system_description_disable Lldp#tlv_select_system_description_disable}
  */
  readonly tlvSelectSystemDescriptionDisable?: boolean | cdktf.IResolvable;
  /**
  * disable System Name TLV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#tlv_select_system_name_disable Lldp#tlv_select_system_name_disable}
  */
  readonly tlvSelectSystemNameDisable?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp iosxr_lldp}
*/
export class Lldp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_lldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lldp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lldp to import
  * @param importFromId The id of the existing Lldp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lldp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_lldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/lldp iosxr_lldp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LldpConfig = {}) {
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
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._extendedShowWidthEnable = config.extendedShowWidthEnable;
    this._holdtime = config.holdtime;
    this._managementEnable = config.managementEnable;
    this._priorityaddrEnable = config.priorityaddrEnable;
    this._reinit = config.reinit;
    this._subinterfacesEnable = config.subinterfacesEnable;
    this._timer = config.timer;
    this._tlvSelectManagementAddressDisable = config.tlvSelectManagementAddressDisable;
    this._tlvSelectPortDescriptionDisable = config.tlvSelectPortDescriptionDisable;
    this._tlvSelectSystemCapabilitiesDisable = config.tlvSelectSystemCapabilitiesDisable;
    this._tlvSelectSystemDescriptionDisable = config.tlvSelectSystemDescriptionDisable;
    this._tlvSelectSystemNameDisable = config.tlvSelectSystemNameDisable;
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

  // extended_show_width_enable - computed: false, optional: true, required: false
  private _extendedShowWidthEnable?: boolean | cdktf.IResolvable; 
  public get extendedShowWidthEnable() {
    return this.getBooleanAttribute('extended_show_width_enable');
  }
  public set extendedShowWidthEnable(value: boolean | cdktf.IResolvable) {
    this._extendedShowWidthEnable = value;
  }
  public resetExtendedShowWidthEnable() {
    this._extendedShowWidthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedShowWidthEnableInput() {
    return this._extendedShowWidthEnable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_enable - computed: false, optional: true, required: false
  private _managementEnable?: boolean | cdktf.IResolvable; 
  public get managementEnable() {
    return this.getBooleanAttribute('management_enable');
  }
  public set managementEnable(value: boolean | cdktf.IResolvable) {
    this._managementEnable = value;
  }
  public resetManagementEnable() {
    this._managementEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEnableInput() {
    return this._managementEnable;
  }

  // priorityaddr_enable - computed: false, optional: true, required: false
  private _priorityaddrEnable?: boolean | cdktf.IResolvable; 
  public get priorityaddrEnable() {
    return this.getBooleanAttribute('priorityaddr_enable');
  }
  public set priorityaddrEnable(value: boolean | cdktf.IResolvable) {
    this._priorityaddrEnable = value;
  }
  public resetPriorityaddrEnable() {
    this._priorityaddrEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityaddrEnableInput() {
    return this._priorityaddrEnable;
  }

  // reinit - computed: false, optional: true, required: false
  private _reinit?: number; 
  public get reinit() {
    return this.getNumberAttribute('reinit');
  }
  public set reinit(value: number) {
    this._reinit = value;
  }
  public resetReinit() {
    this._reinit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinitInput() {
    return this._reinit;
  }

  // subinterfaces_enable - computed: false, optional: true, required: false
  private _subinterfacesEnable?: boolean | cdktf.IResolvable; 
  public get subinterfacesEnable() {
    return this.getBooleanAttribute('subinterfaces_enable');
  }
  public set subinterfacesEnable(value: boolean | cdktf.IResolvable) {
    this._subinterfacesEnable = value;
  }
  public resetSubinterfacesEnable() {
    this._subinterfacesEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfacesEnableInput() {
    return this._subinterfacesEnable;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // tlv_select_management_address_disable - computed: false, optional: true, required: false
  private _tlvSelectManagementAddressDisable?: boolean | cdktf.IResolvable; 
  public get tlvSelectManagementAddressDisable() {
    return this.getBooleanAttribute('tlv_select_management_address_disable');
  }
  public set tlvSelectManagementAddressDisable(value: boolean | cdktf.IResolvable) {
    this._tlvSelectManagementAddressDisable = value;
  }
  public resetTlvSelectManagementAddressDisable() {
    this._tlvSelectManagementAddressDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvSelectManagementAddressDisableInput() {
    return this._tlvSelectManagementAddressDisable;
  }

  // tlv_select_port_description_disable - computed: false, optional: true, required: false
  private _tlvSelectPortDescriptionDisable?: boolean | cdktf.IResolvable; 
  public get tlvSelectPortDescriptionDisable() {
    return this.getBooleanAttribute('tlv_select_port_description_disable');
  }
  public set tlvSelectPortDescriptionDisable(value: boolean | cdktf.IResolvable) {
    this._tlvSelectPortDescriptionDisable = value;
  }
  public resetTlvSelectPortDescriptionDisable() {
    this._tlvSelectPortDescriptionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvSelectPortDescriptionDisableInput() {
    return this._tlvSelectPortDescriptionDisable;
  }

  // tlv_select_system_capabilities_disable - computed: false, optional: true, required: false
  private _tlvSelectSystemCapabilitiesDisable?: boolean | cdktf.IResolvable; 
  public get tlvSelectSystemCapabilitiesDisable() {
    return this.getBooleanAttribute('tlv_select_system_capabilities_disable');
  }
  public set tlvSelectSystemCapabilitiesDisable(value: boolean | cdktf.IResolvable) {
    this._tlvSelectSystemCapabilitiesDisable = value;
  }
  public resetTlvSelectSystemCapabilitiesDisable() {
    this._tlvSelectSystemCapabilitiesDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvSelectSystemCapabilitiesDisableInput() {
    return this._tlvSelectSystemCapabilitiesDisable;
  }

  // tlv_select_system_description_disable - computed: false, optional: true, required: false
  private _tlvSelectSystemDescriptionDisable?: boolean | cdktf.IResolvable; 
  public get tlvSelectSystemDescriptionDisable() {
    return this.getBooleanAttribute('tlv_select_system_description_disable');
  }
  public set tlvSelectSystemDescriptionDisable(value: boolean | cdktf.IResolvable) {
    this._tlvSelectSystemDescriptionDisable = value;
  }
  public resetTlvSelectSystemDescriptionDisable() {
    this._tlvSelectSystemDescriptionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvSelectSystemDescriptionDisableInput() {
    return this._tlvSelectSystemDescriptionDisable;
  }

  // tlv_select_system_name_disable - computed: false, optional: true, required: false
  private _tlvSelectSystemNameDisable?: boolean | cdktf.IResolvable; 
  public get tlvSelectSystemNameDisable() {
    return this.getBooleanAttribute('tlv_select_system_name_disable');
  }
  public set tlvSelectSystemNameDisable(value: boolean | cdktf.IResolvable) {
    this._tlvSelectSystemNameDisable = value;
  }
  public resetTlvSelectSystemNameDisable() {
    this._tlvSelectSystemNameDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvSelectSystemNameDisableInput() {
    return this._tlvSelectSystemNameDisable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      extended_show_width_enable: cdktf.booleanToTerraform(this._extendedShowWidthEnable),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      management_enable: cdktf.booleanToTerraform(this._managementEnable),
      priorityaddr_enable: cdktf.booleanToTerraform(this._priorityaddrEnable),
      reinit: cdktf.numberToTerraform(this._reinit),
      subinterfaces_enable: cdktf.booleanToTerraform(this._subinterfacesEnable),
      timer: cdktf.numberToTerraform(this._timer),
      tlv_select_management_address_disable: cdktf.booleanToTerraform(this._tlvSelectManagementAddressDisable),
      tlv_select_port_description_disable: cdktf.booleanToTerraform(this._tlvSelectPortDescriptionDisable),
      tlv_select_system_capabilities_disable: cdktf.booleanToTerraform(this._tlvSelectSystemCapabilitiesDisable),
      tlv_select_system_description_disable: cdktf.booleanToTerraform(this._tlvSelectSystemDescriptionDisable),
      tlv_select_system_name_disable: cdktf.booleanToTerraform(this._tlvSelectSystemNameDisable),
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
      extended_show_width_enable: {
        value: cdktf.booleanToHclTerraform(this._extendedShowWidthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_enable: {
        value: cdktf.booleanToHclTerraform(this._managementEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priorityaddr_enable: {
        value: cdktf.booleanToHclTerraform(this._priorityaddrEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reinit: {
        value: cdktf.numberToHclTerraform(this._reinit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subinterfaces_enable: {
        value: cdktf.booleanToHclTerraform(this._subinterfacesEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlv_select_management_address_disable: {
        value: cdktf.booleanToHclTerraform(this._tlvSelectManagementAddressDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlv_select_port_description_disable: {
        value: cdktf.booleanToHclTerraform(this._tlvSelectPortDescriptionDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlv_select_system_capabilities_disable: {
        value: cdktf.booleanToHclTerraform(this._tlvSelectSystemCapabilitiesDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlv_select_system_description_disable: {
        value: cdktf.booleanToHclTerraform(this._tlvSelectSystemDescriptionDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlv_select_system_name_disable: {
        value: cdktf.booleanToHclTerraform(this._tlvSelectSystemNameDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
