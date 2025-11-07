// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#aoc_list WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#aoc_list}
  */
  readonly aocList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#currency WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#currency}
  */
  readonly currency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#device_name WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#device_vdom WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#h2qp_advice_of_charge WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#h2qp_advice_of_charge}
  */
  readonly h2QpAdviceOfCharge: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#id WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#info_file WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#info_file}
  */
  readonly infoFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#lang WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#name WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo fmgdevice_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo}
*/
export class WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo fmgdevice_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfoConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlaninfoConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist_planinfo',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aocList = config.aocList;
    this._currency = config.currency;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._h2QpAdviceOfCharge = config.h2QpAdviceOfCharge;
    this._id = config.id;
    this._infoFile = config.infoFile;
    this._lang = config.lang;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aoc_list - computed: false, optional: false, required: true
  private _aocList?: string; 
  public get aocList() {
    return this.getStringAttribute('aoc_list');
  }
  public set aocList(value: string) {
    this._aocList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aocListInput() {
    return this._aocList;
  }

  // currency - computed: false, optional: true, required: false
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  public resetCurrency() {
    this._currency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // h2qp_advice_of_charge - computed: false, optional: false, required: true
  private _h2QpAdviceOfCharge?: string; 
  public get h2QpAdviceOfCharge() {
    return this.getStringAttribute('h2qp_advice_of_charge');
  }
  public set h2QpAdviceOfCharge(value: string) {
    this._h2QpAdviceOfCharge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get h2QpAdviceOfChargeInput() {
    return this._h2QpAdviceOfCharge;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // info_file - computed: false, optional: true, required: false
  private _infoFile?: string; 
  public get infoFile() {
    return this.getStringAttribute('info_file');
  }
  public set infoFile(value: string) {
    this._infoFile = value;
  }
  public resetInfoFile() {
    this._infoFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoFileInput() {
    return this._infoFile;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      aoc_list: cdktf.stringToTerraform(this._aocList),
      currency: cdktf.stringToTerraform(this._currency),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      h2qp_advice_of_charge: cdktf.stringToTerraform(this._h2QpAdviceOfCharge),
      id: cdktf.stringToTerraform(this._id),
      info_file: cdktf.stringToTerraform(this._infoFile),
      lang: cdktf.stringToTerraform(this._lang),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aoc_list: {
        value: cdktf.stringToHclTerraform(this._aocList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      currency: {
        value: cdktf.stringToHclTerraform(this._currency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h2qp_advice_of_charge: {
        value: cdktf.stringToHclTerraform(this._h2QpAdviceOfCharge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      info_file: {
        value: cdktf.stringToHclTerraform(this._infoFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
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
