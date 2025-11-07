// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20H2QpadviceofchargeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#adom ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#dynamic_sort_subtable ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#id ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#name ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#scopetype ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#scopetype}
  */
  readonly scopetype?: string;
  /**
  * aoc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#aoc_list ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#aoc_list}
  */
  readonly aocList?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#currency ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#currency}
  */
  readonly currency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#info_file ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#info_file}
  */
  readonly infoFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#lang ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#name ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#name}
  */
  readonly name?: string;
}

export function objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoToTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency: cdktf.stringToTerraform(struct!.currency),
    info_file: cdktf.stringToTerraform(struct!.infoFile),
    lang: cdktf.stringToTerraform(struct!.lang),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    currency: {
      value: cdktf.stringToHclTerraform(struct!.currency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_file: {
      value: cdktf.stringToHclTerraform(struct!.infoFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currency !== undefined) {
      hasAnyValues = true;
      internalValueResult.currency = this._currency;
    }
    if (this._infoFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoFile = this._infoFile;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currency = undefined;
      this._infoFile = undefined;
      this._lang = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currency = value.currency;
      this._infoFile = value.infoFile;
      this._lang = value.lang;
      this._name = value.name;
    }
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
}

export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoOutputReference {
    return new ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#nai_realm ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#nai_realm}
  */
  readonly naiRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#nai_realm_encoding ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#nai_realm_encoding}
  */
  readonly naiRealmEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#name ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#type ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#type}
  */
  readonly type?: string;
  /**
  * plan_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#plan_info ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge#plan_info}
  */
  readonly planInfo?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo[] | cdktf.IResolvable;
}

export function objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructToTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nai_realm: cdktf.stringToTerraform(struct!.naiRealm),
    nai_realm_encoding: cdktf.stringToTerraform(struct!.naiRealmEncoding),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    plan_info: cdktf.listMapper(objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoToTerraform, true)(struct!.planInfo),
  }
}


export function objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nai_realm: {
      value: cdktf.stringToHclTerraform(struct!.naiRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nai_realm_encoding: {
      value: cdktf.stringToHclTerraform(struct!.naiRealmEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_info: {
      value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoToHclTerraform, true)(struct!.planInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naiRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.naiRealm = this._naiRealm;
    }
    if (this._naiRealmEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.naiRealmEncoding = this._naiRealmEncoding;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._planInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.planInfo = this._planInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naiRealm = undefined;
      this._naiRealmEncoding = undefined;
      this._name = undefined;
      this._type = undefined;
      this._planInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naiRealm = value.naiRealm;
      this._naiRealmEncoding = value.naiRealmEncoding;
      this._name = value.name;
      this._type = value.type;
      this._planInfo.internalValue = value.planInfo;
    }
  }

  // nai_realm - computed: false, optional: true, required: false
  private _naiRealm?: string; 
  public get naiRealm() {
    return this.getStringAttribute('nai_realm');
  }
  public set naiRealm(value: string) {
    this._naiRealm = value;
  }
  public resetNaiRealm() {
    this._naiRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiRealmInput() {
    return this._naiRealm;
  }

  // nai_realm_encoding - computed: false, optional: true, required: false
  private _naiRealmEncoding?: string; 
  public get naiRealmEncoding() {
    return this.getStringAttribute('nai_realm_encoding');
  }
  public set naiRealmEncoding(value: string) {
    this._naiRealmEncoding = value;
  }
  public resetNaiRealmEncoding() {
    this._naiRealmEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiRealmEncodingInput() {
    return this._naiRealmEncoding;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // plan_info - computed: false, optional: true, required: false
  private _planInfo = new ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfoList(this, "plan_info", false);
  public get planInfo() {
    return this._planInfo;
  }
  public putPlanInfo(value: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListPlanInfo[] | cdktf.IResolvable) {
    this._planInfo.internalValue = value;
  }
  public resetPlanInfo() {
    this._planInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInfoInput() {
    return this._planInfo.internalValue;
  }
}

export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructOutputReference {
    return new ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge}
*/
export class ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20H2Qpadviceofcharge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20H2QpadviceofchargeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge',
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
    this._aocList.internalValue = config.aocList;
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

  // aoc_list - computed: false, optional: true, required: false
  private _aocList = new ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructList(this, "aoc_list", false);
  public get aocList() {
    return this._aocList;
  }
  public putAocList(value: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStruct[] | cdktf.IResolvable) {
    this._aocList.internalValue = value;
  }
  public resetAocList() {
    this._aocList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aocListInput() {
    return this._aocList.internalValue;
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
      aoc_list: cdktf.listMapper(objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructToTerraform, true)(this._aocList.internalValue),
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
      aoc_list: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructToHclTerraform, true)(this._aocList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAocListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
