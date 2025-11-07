// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Lw4O6AllBindingTablesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper#id DataThunderCgnv6Lw4O6AllBindingTablesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper#oper DataThunderCgnv6Lw4O6AllBindingTablesOper#oper}
  */
  readonly oper?: DataThunderCgnv6Lw4O6AllBindingTablesOperOper;
}
export interface DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper#name DataThunderCgnv6Lw4O6AllBindingTablesOper#name}
  */
  readonly name?: string;
}

export function dataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructToTerraform(struct?: DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructToHclTerraform(struct?: DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructOutputReference {
    return new DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6Lw4O6AllBindingTablesOperOper {
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper#entry_list DataThunderCgnv6Lw4O6AllBindingTablesOper#entry_list}
  */
  readonly entryList?: DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6Lw4O6AllBindingTablesOperOperToTerraform(struct?: DataThunderCgnv6Lw4O6AllBindingTablesOperOperOutputReference | DataThunderCgnv6Lw4O6AllBindingTablesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_list: cdktf.listMapper(dataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderCgnv6Lw4O6AllBindingTablesOperOperToHclTerraform(struct?: DataThunderCgnv6Lw4O6AllBindingTablesOperOperOutputReference | DataThunderCgnv6Lw4O6AllBindingTablesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Lw4O6AllBindingTablesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Lw4O6AllBindingTablesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Lw4O6AllBindingTablesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderCgnv6Lw4O6AllBindingTablesOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper thunder_cgnv6_lw_4o6_all_binding_tables_oper}
*/
export class DataThunderCgnv6Lw4O6AllBindingTablesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_all_binding_tables_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Lw4O6AllBindingTablesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Lw4O6AllBindingTablesOper to import
  * @param importFromId The id of the existing DataThunderCgnv6Lw4O6AllBindingTablesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Lw4O6AllBindingTablesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_all_binding_tables_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_all_binding_tables_oper thunder_cgnv6_lw_4o6_all_binding_tables_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Lw4O6AllBindingTablesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Lw4O6AllBindingTablesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_all_binding_tables_oper',
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
  private _oper = new DataThunderCgnv6Lw4O6AllBindingTablesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6Lw4O6AllBindingTablesOperOper) {
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
      oper: dataThunderCgnv6Lw4O6AllBindingTablesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6Lw4O6AllBindingTablesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Lw4O6AllBindingTablesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
