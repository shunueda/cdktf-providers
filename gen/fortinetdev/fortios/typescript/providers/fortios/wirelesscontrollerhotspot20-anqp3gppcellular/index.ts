// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wirelesscontrollerhotspot20Anqp3GppcellularConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#dynamic_sort_subtable Wirelesscontrollerhotspot20Anqp3Gppcellular#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#get_all_tables Wirelesscontrollerhotspot20Anqp3Gppcellular#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#id Wirelesscontrollerhotspot20Anqp3Gppcellular#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#name Wirelesscontrollerhotspot20Anqp3Gppcellular#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#vdomparam Wirelesscontrollerhotspot20Anqp3Gppcellular#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * mcc_mnc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#mcc_mnc_list Wirelesscontrollerhotspot20Anqp3Gppcellular#mcc_mnc_list}
  */
  readonly mccMncList?: Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct[] | cdktf.IResolvable;
}
export interface Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#id Wirelesscontrollerhotspot20Anqp3Gppcellular#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#mcc Wirelesscontrollerhotspot20Anqp3Gppcellular#mcc}
  */
  readonly mcc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#mnc Wirelesscontrollerhotspot20Anqp3Gppcellular#mnc}
  */
  readonly mnc?: string;
}

export function wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructToTerraform(struct?: Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    mcc: cdktf.stringToTerraform(struct!.mcc),
    mnc: cdktf.stringToTerraform(struct!.mnc),
  }
}


export function wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructToHclTerraform(struct?: Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcc: {
      value: cdktf.stringToHclTerraform(struct!.mcc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mnc: {
      value: cdktf.stringToHclTerraform(struct!.mnc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mcc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcc = this._mcc;
    }
    if (this._mnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mnc = this._mnc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mcc = undefined;
      this._mnc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mcc = value.mcc;
      this._mnc = value.mnc;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mcc - computed: false, optional: true, required: false
  private _mcc?: string; 
  public get mcc() {
    return this.getStringAttribute('mcc');
  }
  public set mcc(value: string) {
    this._mcc = value;
  }
  public resetMcc() {
    this._mcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mccInput() {
    return this._mcc;
  }

  // mnc - computed: false, optional: true, required: false
  private _mnc?: string; 
  public get mnc() {
    return this.getStringAttribute('mnc');
  }
  public set mnc(value: string) {
    this._mnc = value;
  }
  public resetMnc() {
    this._mnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mncInput() {
    return this._mnc;
  }
}

export class Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructList extends cdktf.ComplexList {
  public internalValue? : Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct[] | cdktf.IResolvable

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
  public get(index: number): Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructOutputReference {
    return new Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular fortios_wirelesscontrollerhotspot20_anqp3gppcellular}
*/
export class Wirelesscontrollerhotspot20Anqp3Gppcellular extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontrollerhotspot20_anqp3gppcellular";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wirelesscontrollerhotspot20Anqp3Gppcellular resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wirelesscontrollerhotspot20Anqp3Gppcellular to import
  * @param importFromId The id of the existing Wirelesscontrollerhotspot20Anqp3Gppcellular that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wirelesscontrollerhotspot20Anqp3Gppcellular to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontrollerhotspot20_anqp3gppcellular", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqp3gppcellular fortios_wirelesscontrollerhotspot20_anqp3gppcellular} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wirelesscontrollerhotspot20Anqp3GppcellularConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Wirelesscontrollerhotspot20Anqp3GppcellularConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontrollerhotspot20_anqp3gppcellular',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._mccMncList.internalValue = config.mccMncList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // mcc_mnc_list - computed: false, optional: true, required: false
  private _mccMncList = new Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructList(this, "mcc_mnc_list", false);
  public get mccMncList() {
    return this._mccMncList;
  }
  public putMccMncList(value: Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStruct[] | cdktf.IResolvable) {
    this._mccMncList.internalValue = value;
  }
  public resetMccMncList() {
    this._mccMncList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mccMncListInput() {
    return this._mccMncList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      mcc_mnc_list: cdktf.listMapper(wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructToTerraform, true)(this._mccMncList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mcc_mnc_list: {
        value: cdktf.listMapperHcl(wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructToHclTerraform, true)(this._mccMncList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wirelesscontrollerhotspot20Anqp3GppcellularMccMncListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
