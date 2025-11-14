// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#adom ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#anqp_nai_realm ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#anqp_nai_realm}
  */
  readonly anqpNaiRealm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#dynamic_sort_subtable ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#id ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#index ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#method ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#nai_list ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#nai_list}
  */
  readonly naiList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#scopetype ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#scopetype}
  */
  readonly scopetype?: string;
  /**
  * auth_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#auth_param ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#auth_param}
  */
  readonly authParam?: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#id ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#index ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#val ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod#val}
  */
  readonly val?: string;
}

export function objectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable): any {
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


export function objectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable): any {
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

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam | cdktf.IResolvable | undefined) {
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

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamOutputReference {
    return new ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod}
*/
export class ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm_nailist_eapmethod',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._index = config.index;
    this._method = config.method;
    this._naiList = config.naiList;
    this._scopetype = config.scopetype;
    this._authParam.internalValue = config.authParam;
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

  // auth_param - computed: false, optional: true, required: false
  private _authParam = new ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamList(this, "auth_param", false);
  public get authParam() {
    return this._authParam;
  }
  public putAuthParam(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParam[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      anqp_nai_realm: cdktf.stringToTerraform(this._anqpNaiRealm),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      method: cdktf.stringToTerraform(this._method),
      nai_list: cdktf.stringToTerraform(this._naiList),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      auth_param: cdktf.listMapper(objectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToTerraform, true)(this._authParam.internalValue),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_param: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamToHclTerraform, true)(this._authParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20AnqpnairealmNailistEapmethodAuthParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
