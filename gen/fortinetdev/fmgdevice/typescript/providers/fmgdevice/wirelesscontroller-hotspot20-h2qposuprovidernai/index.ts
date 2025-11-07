// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20H2QposuprovidernaiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#device_name WirelesscontrollerHotspot20H2Qposuprovidernai#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#device_vdom WirelesscontrollerHotspot20H2Qposuprovidernai#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#dynamic_sort_subtable WirelesscontrollerHotspot20H2Qposuprovidernai#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#id WirelesscontrollerHotspot20H2Qposuprovidernai#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#name WirelesscontrollerHotspot20H2Qposuprovidernai#name}
  */
  readonly name?: string;
  /**
  * nai_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#nai_list WirelesscontrollerHotspot20H2Qposuprovidernai#nai_list}
  */
  readonly naiList?: WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct[] | cdktf.IResolvable;
}
export interface WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#name WirelesscontrollerHotspot20H2Qposuprovidernai#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#osu_nai WirelesscontrollerHotspot20H2Qposuprovidernai#osu_nai}
  */
  readonly osuNai?: string;
}

export function wirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToTerraform(struct?: WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    osu_nai: cdktf.stringToTerraform(struct!.osuNai),
  }
}


export function wirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToHclTerraform(struct?: WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osu_nai: {
      value: cdktf.stringToHclTerraform(struct!.osuNai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osuNai !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuNai = this._osuNai;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._osuNai = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._osuNai = value.osuNai;
    }
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

  // osu_nai - computed: false, optional: true, required: false
  private _osuNai?: string; 
  public get osuNai() {
    return this.getStringAttribute('osu_nai');
  }
  public set osuNai(value: string) {
    this._osuNai = value;
  }
  public resetOsuNai() {
    this._osuNai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuNaiInput() {
    return this._osuNai;
  }
}

export class WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructOutputReference {
    return new WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai fmgdevice_wirelesscontroller_hotspot20_h2qposuprovidernai}
*/
export class WirelesscontrollerHotspot20H2Qposuprovidernai extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_h2qposuprovidernai";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20H2Qposuprovidernai resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20H2Qposuprovidernai to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20H2Qposuprovidernai that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20H2Qposuprovidernai to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_h2qposuprovidernai", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_h2qposuprovidernai fmgdevice_wirelesscontroller_hotspot20_h2qposuprovidernai} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20H2QposuprovidernaiConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20H2QposuprovidernaiConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_h2qposuprovidernai',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._naiList.internalValue = config.naiList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // nai_list - computed: false, optional: true, required: false
  private _naiList = new WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructList(this, "nai_list", false);
  public get naiList() {
    return this._naiList;
  }
  public putNaiList(value: WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct[] | cdktf.IResolvable) {
    this._naiList.internalValue = value;
  }
  public resetNaiList() {
    this._naiList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiListInput() {
    return this._naiList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nai_list: cdktf.listMapper(wirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToTerraform, true)(this._naiList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nai_list: {
        value: cdktf.listMapperHcl(wirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToHclTerraform, true)(this._naiList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
