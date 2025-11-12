// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#adom ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#dynamic_sort_subtable ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#h2qp_advice_of_charge ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#h2qp_advice_of_charge}
  */
  readonly h2QpAdviceOfCharge: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#id ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#nai_realm ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#nai_realm}
  */
  readonly naiRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#nai_realm_encoding ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#nai_realm_encoding}
  */
  readonly naiRealmEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#name ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#scopetype ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#type ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#type}
  */
  readonly type?: string;
  /**
  * plan_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#plan_info ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#plan_info}
  */
  readonly planInfo?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#currency ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#currency}
  */
  readonly currency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#info_file ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#info_file}
  */
  readonly infoFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#lang ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#name ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist#name}
  */
  readonly name?: string;
}

export function objectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoToTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo | cdktf.IResolvable): any {
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


export function objectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo | cdktf.IResolvable): any {
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

export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo | cdktf.IResolvable | undefined) {
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

export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoOutputReference {
    return new ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist}
*/
export class ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_h2qpadviceofcharge_aoclist',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._h2QpAdviceOfCharge = config.h2QpAdviceOfCharge;
    this._id = config.id;
    this._naiRealm = config.naiRealm;
    this._naiRealmEncoding = config.naiRealmEncoding;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._planInfo.internalValue = config.planInfo;
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
  private _planInfo = new ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoList(this, "plan_info", false);
  public get planInfo() {
    return this._planInfo;
  }
  public putPlanInfo(value: ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfo[] | cdktf.IResolvable) {
    this._planInfo.internalValue = value;
  }
  public resetPlanInfo() {
    this._planInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInfoInput() {
    return this._planInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      h2qp_advice_of_charge: cdktf.stringToTerraform(this._h2QpAdviceOfCharge),
      id: cdktf.stringToTerraform(this._id),
      nai_realm: cdktf.stringToTerraform(this._naiRealm),
      nai_realm_encoding: cdktf.stringToTerraform(this._naiRealmEncoding),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      plan_info: cdktf.listMapper(objectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoToTerraform, true)(this._planInfo.internalValue),
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
      nai_realm: {
        value: cdktf.stringToHclTerraform(this._naiRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nai_realm_encoding: {
        value: cdktf.stringToHclTerraform(this._naiRealmEncoding),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_info: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoToHclTerraform, true)(this._planInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20H2QpadviceofchargeAoclistPlanInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
