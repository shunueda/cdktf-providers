// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#adom ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#anqp_nai_realm ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#anqp_nai_realm}
  */
  readonly anqpNaiRealm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#eap_method ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#eap_method}
  */
  readonly eapMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#fosid ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#id ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#index ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#nai_list ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#nai_list}
  */
  readonly naiList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#scopetype ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#val ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam#val}
  */
  readonly val?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam}
*/
export class ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparamConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthparamConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod_authparam',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._anqpNaiRealm = config.anqpNaiRealm;
    this._eapMethod = config.eapMethod;
    this._fosid = config.fosid;
    this._id = config.id;
    this._index = config.index;
    this._naiList = config.naiList;
    this._scopetype = config.scopetype;
    this._val = config.val;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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
      adom: cdktf.stringToTerraform(this._adom),
      anqp_nai_realm: cdktf.stringToTerraform(this._anqpNaiRealm),
      eap_method: cdktf.stringToTerraform(this._eapMethod),
      fosid: cdktf.stringToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      nai_list: cdktf.stringToTerraform(this._naiList),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      val: cdktf.stringToTerraform(this._val),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anqp_nai_realm: {
        value: cdktf.stringToHclTerraform(this._anqpNaiRealm),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
