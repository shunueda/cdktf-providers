// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#anqp_nai_realm WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#anqp_nai_realm}
  */
  readonly anqpNaiRealm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#device_name WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#device_vdom WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#dynamic_sort_subtable WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#id WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#index WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#method WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#nai_list WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#nai_list}
  */
  readonly naiList: string;
  /**
  * auth_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#auth_param WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#auth_param}
  */
  readonly authParam?: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam[] | cdktf.IResolvable;
}
export interface WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#id WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#index WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#val WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#val}
  */
  readonly val?: string;
}

export function wirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToTerraform(struct?: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.numberToTerraform(struct!.index),
    val: cdktf.stringToTerraform(struct!.val),
  }
}


export function wirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToHclTerraform(struct?: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    val: {
      value: cdktf.stringToHclTerraform(struct!.val),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._index = undefined;
      this._val = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._index = value.index;
      this._val = value.val;
    }
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
}

export class WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamOutputReference {
    return new WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod}
*/
export class WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20AnqpnairealmNailistEapmethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod',
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
    this._anqpNaiRealm = config.anqpNaiRealm;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._index = config.index;
    this._method = config.method;
    this._naiList = config.naiList;
    this._authParam.internalValue = config.authParam;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // auth_param - computed: false, optional: true, required: false
  private _authParam = new WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamList(this, "auth_param", false);
  public get authParam() {
    return this._authParam;
  }
  public putAuthParam(value: WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam[] | cdktf.IResolvable) {
    this._authParam.internalValue = value;
  }
  public resetAuthParam() {
    this._authParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParamInput() {
    return this._authParam.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anqp_nai_realm: cdktf.stringToTerraform(this._anqpNaiRealm),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      method: cdktf.stringToTerraform(this._method),
      nai_list: cdktf.stringToTerraform(this._naiList),
      auth_param: cdktf.listMapper(wirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToTerraform, true)(this._authParam.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nai_list: {
        value: cdktf.stringToHclTerraform(this._naiList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_param: {
        value: cdktf.listMapperHcl(wirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToHclTerraform, true)(this._authParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
