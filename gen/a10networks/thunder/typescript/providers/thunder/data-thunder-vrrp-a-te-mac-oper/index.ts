// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpATeMacOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#id DataThunderVrrpATeMacOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#oper DataThunderVrrpATeMacOper#oper}
  */
  readonly oper?: DataThunderVrrpATeMacOperOper;
}
export interface DataThunderVrrpATeMacOperOperVridMacListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#mac_address_inside DataThunderVrrpATeMacOper#mac_address_inside}
  */
  readonly macAddressInside?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#mac_address_outside DataThunderVrrpATeMacOper#mac_address_outside}
  */
  readonly macAddressOutside?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#vrid DataThunderVrrpATeMacOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderVrrpATeMacOperOperVridMacListStructToTerraform(struct?: DataThunderVrrpATeMacOperOperVridMacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address_inside: cdktf.stringToTerraform(struct!.macAddressInside),
    mac_address_outside: cdktf.stringToTerraform(struct!.macAddressOutside),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderVrrpATeMacOperOperVridMacListStructToHclTerraform(struct?: DataThunderVrrpATeMacOperOperVridMacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address_inside: {
      value: cdktf.stringToHclTerraform(struct!.macAddressInside),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_outside: {
      value: cdktf.stringToHclTerraform(struct!.macAddressOutside),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpATeMacOperOperVridMacListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVrrpATeMacOperOperVridMacListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddressInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressInside = this._macAddressInside;
    }
    if (this._macAddressOutside !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressOutside = this._macAddressOutside;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpATeMacOperOperVridMacListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddressInside = undefined;
      this._macAddressOutside = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddressInside = value.macAddressInside;
      this._macAddressOutside = value.macAddressOutside;
      this._vrid = value.vrid;
    }
  }

  // mac_address_inside - computed: false, optional: true, required: false
  private _macAddressInside?: string; 
  public get macAddressInside() {
    return this.getStringAttribute('mac_address_inside');
  }
  public set macAddressInside(value: string) {
    this._macAddressInside = value;
  }
  public resetMacAddressInside() {
    this._macAddressInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInsideInput() {
    return this._macAddressInside;
  }

  // mac_address_outside - computed: false, optional: true, required: false
  private _macAddressOutside?: string; 
  public get macAddressOutside() {
    return this.getStringAttribute('mac_address_outside');
  }
  public set macAddressOutside(value: string) {
    this._macAddressOutside = value;
  }
  public resetMacAddressOutside() {
    this._macAddressOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressOutsideInput() {
    return this._macAddressOutside;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderVrrpATeMacOperOperVridMacListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpATeMacOperOperVridMacListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVrrpATeMacOperOperVridMacListStructOutputReference {
    return new DataThunderVrrpATeMacOperOperVridMacListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpATeMacOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#invalid_flag DataThunderVrrpATeMacOper#invalid_flag}
  */
  readonly invalidFlag?: number;
  /**
  * vrid_mac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#vrid_mac_list DataThunderVrrpATeMacOper#vrid_mac_list}
  */
  readonly vridMacList?: DataThunderVrrpATeMacOperOperVridMacListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpATeMacOperOperToTerraform(struct?: DataThunderVrrpATeMacOperOperOutputReference | DataThunderVrrpATeMacOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_flag: cdktf.numberToTerraform(struct!.invalidFlag),
    vrid_mac_list: cdktf.listMapper(dataThunderVrrpATeMacOperOperVridMacListStructToTerraform, true)(struct!.vridMacList),
  }
}


export function dataThunderVrrpATeMacOperOperToHclTerraform(struct?: DataThunderVrrpATeMacOperOperOutputReference | DataThunderVrrpATeMacOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invalid_flag: {
      value: cdktf.numberToHclTerraform(struct!.invalidFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid_mac_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpATeMacOperOperVridMacListStructToHclTerraform, true)(struct!.vridMacList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpATeMacOperOperVridMacListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpATeMacOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpATeMacOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFlag = this._invalidFlag;
    }
    if (this._vridMacList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridMacList = this._vridMacList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpATeMacOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidFlag = undefined;
      this._vridMacList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidFlag = value.invalidFlag;
      this._vridMacList.internalValue = value.vridMacList;
    }
  }

  // invalid_flag - computed: false, optional: true, required: false
  private _invalidFlag?: number; 
  public get invalidFlag() {
    return this.getNumberAttribute('invalid_flag');
  }
  public set invalidFlag(value: number) {
    this._invalidFlag = value;
  }
  public resetInvalidFlag() {
    this._invalidFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFlagInput() {
    return this._invalidFlag;
  }

  // vrid_mac_list - computed: false, optional: true, required: false
  private _vridMacList = new DataThunderVrrpATeMacOperOperVridMacListStructList(this, "vrid_mac_list", false);
  public get vridMacList() {
    return this._vridMacList;
  }
  public putVridMacList(value: DataThunderVrrpATeMacOperOperVridMacListStruct[] | cdktf.IResolvable) {
    this._vridMacList.internalValue = value;
  }
  public resetVridMacList() {
    this._vridMacList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridMacListInput() {
    return this._vridMacList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper thunder_vrrp_a_te_mac_oper}
*/
export class DataThunderVrrpATeMacOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_te_mac_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpATeMacOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpATeMacOper to import
  * @param importFromId The id of the existing DataThunderVrrpATeMacOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpATeMacOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_te_mac_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_te_mac_oper thunder_vrrp_a_te_mac_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpATeMacOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpATeMacOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_te_mac_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVrrpATeMacOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVrrpATeMacOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVrrpATeMacOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderVrrpATeMacOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpATeMacOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
