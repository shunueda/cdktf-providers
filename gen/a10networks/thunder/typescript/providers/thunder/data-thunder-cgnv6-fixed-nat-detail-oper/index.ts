// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatDetailOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper#id DataThunderCgnv6FixedNatDetailOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper#oper DataThunderCgnv6FixedNatDetailOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatDetailOperOper;
}
export interface DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper#index DataThunderCgnv6FixedNatDetailOper#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper#inside_user DataThunderCgnv6FixedNatDetailOper#inside_user}
  */
  readonly insideUser?: string;
}

export function dataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructToTerraform(struct?: DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    inside_user: cdktf.stringToTerraform(struct!.insideUser),
  }
}


export function dataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_user: {
      value: cdktf.stringToHclTerraform(struct!.insideUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._insideUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideUser = this._insideUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._insideUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._insideUser = value.insideUser;
    }
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

  // inside_user - computed: false, optional: true, required: false
  private _insideUser?: string; 
  public get insideUser() {
    return this.getStringAttribute('inside_user');
  }
  public set insideUser(value: string) {
    this._insideUser = value;
  }
  public resetInsideUser() {
    this._insideUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideUserInput() {
    return this._insideUser;
  }
}

export class DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructOutputReference {
    return new DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatDetailOperOper {
  /**
  * fixed_nat_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper#fixed_nat_config_list DataThunderCgnv6FixedNatDetailOper#fixed_nat_config_list}
  */
  readonly fixedNatConfigList?: DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatDetailOperOperToTerraform(struct?: DataThunderCgnv6FixedNatDetailOperOperOutputReference | DataThunderCgnv6FixedNatDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_nat_config_list: cdktf.listMapper(dataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructToTerraform, true)(struct!.fixedNatConfigList),
  }
}


export function dataThunderCgnv6FixedNatDetailOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatDetailOperOperOutputReference | DataThunderCgnv6FixedNatDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_nat_config_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructToHclTerraform, true)(struct!.fixedNatConfigList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatDetailOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatDetailOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedNatConfigList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatConfigList = this._fixedNatConfigList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatDetailOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedNatConfigList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedNatConfigList.internalValue = value.fixedNatConfigList;
    }
  }

  // fixed_nat_config_list - computed: false, optional: true, required: false
  private _fixedNatConfigList = new DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStructList(this, "fixed_nat_config_list", false);
  public get fixedNatConfigList() {
    return this._fixedNatConfigList;
  }
  public putFixedNatConfigList(value: DataThunderCgnv6FixedNatDetailOperOperFixedNatConfigListStruct[] | cdktf.IResolvable) {
    this._fixedNatConfigList.internalValue = value;
  }
  public resetFixedNatConfigList() {
    this._fixedNatConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatConfigListInput() {
    return this._fixedNatConfigList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper thunder_cgnv6_fixed_nat_detail_oper}
*/
export class DataThunderCgnv6FixedNatDetailOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_detail_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatDetailOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatDetailOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatDetailOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatDetailOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_detail_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_detail_oper thunder_cgnv6_fixed_nat_detail_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatDetailOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatDetailOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_detail_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderCgnv6FixedNatDetailOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatDetailOperOper) {
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
      oper: dataThunderCgnv6FixedNatDetailOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6FixedNatDetailOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatDetailOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
