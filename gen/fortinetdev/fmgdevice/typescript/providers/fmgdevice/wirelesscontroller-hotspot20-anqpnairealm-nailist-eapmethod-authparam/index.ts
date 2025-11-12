// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#anqp_nai_realm WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#anqp_nai_realm}
  */
  readonly anqpNaiRealm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#device_name WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#device_vdom WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#eap_method WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#eap_method}
  */
  readonly eapMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#fosid WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#id WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#index WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#nai_list WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#nai_list}
  */
  readonly naiList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#val WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#val}
  */
  readonly val?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam}
*/
export class WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparamConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparamConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anqpNaiRealm = config.anqpNaiRealm;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._eapMethod = config.eapMethod;
    this._fosid = config.fosid;
    this._id = config.id;
    this._index = config.index;
    this._naiList = config.naiList;
    this._val = config.val;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anqp_nai_realm - computed: false, optional: false, required: true
  private _anqpNaiRealm?: string; 
  public get anqpNaiRealm() {
    return this.getStringAttribute('anqp_nai_realm');
  }
  public set anqpNaiRealm(value: string) {
    this._anqpNaiRealm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anqpNaiRealmInput() {
    return this._anqpNaiRealm;
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

  // eap_method - computed: false, optional: false, required: true
  private _eapMethod?: string; 
  public get eapMethod() {
    return this.getStringAttribute('eap_method');
  }
  public set eapMethod(value: string) {
    this._eapMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodInput() {
    return this._eapMethod;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: string; 
  public get fosid() {
    return this.getStringAttribute('fosid');
  }
  public set fosid(value: string) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // nai_list - computed: false, optional: false, required: true
  private _naiList?: string; 
  public get naiList() {
    return this.getStringAttribute('nai_list');
  }
  public set naiList(value: string) {
    this._naiList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naiListInput() {
    return this._naiList;
  }

  // val - computed: true, optional: true, required: false
  private _val?: string; 
  public get val() {
    return this.getStringAttribute('val');
  }
  public set val(value: string) {
    this._val = value;
  }
  public resetVal() {
    this._val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anqp_nai_realm: cdktf.stringToTerraform(this._anqpNaiRealm),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      eap_method: cdktf.stringToTerraform(this._eapMethod),
      fosid: cdktf.stringToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      nai_list: cdktf.stringToTerraform(this._naiList),
      val: cdktf.stringToTerraform(this._val),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anqp_nai_realm: {
        value: cdktf.stringToHclTerraform(this._anqpNaiRealm),
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
      eap_method: {
        value: cdktf.stringToHclTerraform(this._eapMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.stringToHclTerraform(this._fosid),
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
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nai_list: {
        value: cdktf.stringToHclTerraform(this._naiList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      val: {
        value: cdktf.stringToHclTerraform(this._val),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
