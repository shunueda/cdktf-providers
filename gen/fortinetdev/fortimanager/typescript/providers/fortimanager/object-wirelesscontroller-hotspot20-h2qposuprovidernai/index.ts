// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20H2QposuprovidernaiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#adom ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#dynamic_sort_subtable ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#id ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#name ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#scopetype ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#scopetype}
  */
  readonly scopetype?: string;
  /**
  * nai_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#nai_list ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#nai_list}
  */
  readonly naiList?: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#name ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#osu_nai ObjectWirelesscontrollerHotspot20H2Qposuprovidernai#osu_nai}
  */
  readonly osuNai?: string;
}

export function objectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    osu_nai: cdktf.stringToTerraform(struct!.osuNai),
  }
}


export function objectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable): any {
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

export class ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: true, required: false
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

export class ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructOutputReference {
    return new ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai}
*/
export class ObjectWirelesscontrollerHotspot20H2Qposuprovidernai extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20H2Qposuprovidernai resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20H2Qposuprovidernai to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20H2Qposuprovidernai that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20H2Qposuprovidernai to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20H2QposuprovidernaiConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._naiList.internalValue = config.naiList;
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

  // nai_list - computed: false, optional: true, required: false
  private _naiList = new ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructList(this, "nai_list", false);
  public get naiList() {
    return this._naiList;
  }
  public putNaiList(value: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStruct[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      nai_list: cdktf.listMapper(objectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToTerraform, true)(this._naiList.internalValue),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nai_list: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructToHclTerraform, true)(this._naiList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNaiListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
