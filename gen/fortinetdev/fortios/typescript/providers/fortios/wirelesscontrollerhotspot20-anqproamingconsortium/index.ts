// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wirelesscontrollerhotspot20AnqproamingconsortiumConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#dynamic_sort_subtable Wirelesscontrollerhotspot20Anqproamingconsortium#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#get_all_tables Wirelesscontrollerhotspot20Anqproamingconsortium#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#id Wirelesscontrollerhotspot20Anqproamingconsortium#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#name Wirelesscontrollerhotspot20Anqproamingconsortium#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#vdomparam Wirelesscontrollerhotspot20Anqproamingconsortium#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * oi_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#oi_list Wirelesscontrollerhotspot20Anqproamingconsortium#oi_list}
  */
  readonly oiList?: Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct[] | cdktf.IResolvable;
}
export interface Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#comment Wirelesscontrollerhotspot20Anqproamingconsortium#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#index Wirelesscontrollerhotspot20Anqproamingconsortium#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#oi Wirelesscontrollerhotspot20Anqproamingconsortium#oi}
  */
  readonly oi?: string;
}

export function wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructToTerraform(struct?: Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    index: cdktf.numberToTerraform(struct!.index),
    oi: cdktf.stringToTerraform(struct!.oi),
  }
}


export function wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructToHclTerraform(struct?: Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    oi: {
      value: cdktf.stringToHclTerraform(struct!.oi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._oi !== undefined) {
      hasAnyValues = true;
      internalValueResult.oi = this._oi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._index = undefined;
      this._oi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._index = value.index;
      this._oi = value.oi;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // oi - computed: false, optional: true, required: false
  private _oi?: string; 
  public get oi() {
    return this.getStringAttribute('oi');
  }
  public set oi(value: string) {
    this._oi = value;
  }
  public resetOi() {
    this._oi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oiInput() {
    return this._oi;
  }
}

export class Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructList extends cdktf.ComplexList {
  public internalValue? : Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct[] | cdktf.IResolvable

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
  public get(index: number): Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructOutputReference {
    return new Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium fortios_wirelesscontrollerhotspot20_anqproamingconsortium}
*/
export class Wirelesscontrollerhotspot20Anqproamingconsortium extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontrollerhotspot20_anqproamingconsortium";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wirelesscontrollerhotspot20Anqproamingconsortium resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wirelesscontrollerhotspot20Anqproamingconsortium to import
  * @param importFromId The id of the existing Wirelesscontrollerhotspot20Anqproamingconsortium that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wirelesscontrollerhotspot20Anqproamingconsortium to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontrollerhotspot20_anqproamingconsortium", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_anqproamingconsortium fortios_wirelesscontrollerhotspot20_anqproamingconsortium} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wirelesscontrollerhotspot20AnqproamingconsortiumConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Wirelesscontrollerhotspot20AnqproamingconsortiumConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontrollerhotspot20_anqproamingconsortium',
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
    this._oiList.internalValue = config.oiList;
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

  // oi_list - computed: false, optional: true, required: false
  private _oiList = new Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructList(this, "oi_list", false);
  public get oiList() {
    return this._oiList;
  }
  public putOiList(value: Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStruct[] | cdktf.IResolvable) {
    this._oiList.internalValue = value;
  }
  public resetOiList() {
    this._oiList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oiListInput() {
    return this._oiList.internalValue;
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
      oi_list: cdktf.listMapper(wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructToTerraform, true)(this._oiList.internalValue),
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
      oi_list: {
        value: cdktf.listMapperHcl(wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructToHclTerraform, true)(this._oiList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wirelesscontrollerhotspot20AnqproamingconsortiumOiListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
