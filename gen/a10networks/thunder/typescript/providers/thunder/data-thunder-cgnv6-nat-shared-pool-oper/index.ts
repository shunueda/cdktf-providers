// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6NatSharedPoolOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#id DataThunderCgnv6NatSharedPoolOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#oper DataThunderCgnv6NatSharedPoolOper#oper}
  */
  readonly oper?: DataThunderCgnv6NatSharedPoolOperOper;
}
export interface DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#end_address DataThunderCgnv6NatSharedPoolOper#end_address}
  */
  readonly endAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#netmask DataThunderCgnv6NatSharedPoolOper#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#pool_name DataThunderCgnv6NatSharedPoolOper#pool_name}
  */
  readonly poolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#start_address DataThunderCgnv6NatSharedPoolOper#start_address}
  */
  readonly startAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#vird DataThunderCgnv6NatSharedPoolOper#vird}
  */
  readonly vird?: number;
}

export function dataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructToTerraform(struct?: DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
    vird: cdktf.numberToTerraform(struct!.vird),
  }
}


export function dataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructToHclTerraform(struct?: DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vird: {
      value: cdktf.numberToHclTerraform(struct!.vird),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    if (this._vird !== undefined) {
      hasAnyValues = true;
      internalValueResult.vird = this._vird;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._netmask = undefined;
      this._poolName = undefined;
      this._startAddress = undefined;
      this._vird = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._netmask = value.netmask;
      this._poolName = value.poolName;
      this._startAddress = value.startAddress;
      this._vird = value.vird;
    }
  }

  // end_address - computed: false, optional: true, required: false
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  public resetEndAddress() {
    this._endAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // start_address - computed: false, optional: true, required: false
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  public resetStartAddress() {
    this._startAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }

  // vird - computed: false, optional: true, required: false
  private _vird?: number; 
  public get vird() {
    return this.getNumberAttribute('vird');
  }
  public set vird(value: number) {
    this._vird = value;
  }
  public resetVird() {
    this._vird = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virdInput() {
    return this._vird;
  }
}

export class DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructOutputReference {
    return new DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6NatSharedPoolOperOper {
  /**
  * shared_pool_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#shared_pool_list DataThunderCgnv6NatSharedPoolOper#shared_pool_list}
  */
  readonly sharedPoolList?: DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6NatSharedPoolOperOperToTerraform(struct?: DataThunderCgnv6NatSharedPoolOperOperOutputReference | DataThunderCgnv6NatSharedPoolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_pool_list: cdktf.listMapper(dataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructToTerraform, true)(struct!.sharedPoolList),
  }
}


export function dataThunderCgnv6NatSharedPoolOperOperToHclTerraform(struct?: DataThunderCgnv6NatSharedPoolOperOperOutputReference | DataThunderCgnv6NatSharedPoolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared_pool_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructToHclTerraform, true)(struct!.sharedPoolList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatSharedPoolOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6NatSharedPoolOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharedPoolList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPoolList = this._sharedPoolList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatSharedPoolOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sharedPoolList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sharedPoolList.internalValue = value.sharedPoolList;
    }
  }

  // shared_pool_list - computed: false, optional: true, required: false
  private _sharedPoolList = new DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStructList(this, "shared_pool_list", false);
  public get sharedPoolList() {
    return this._sharedPoolList;
  }
  public putSharedPoolList(value: DataThunderCgnv6NatSharedPoolOperOperSharedPoolListStruct[] | cdktf.IResolvable) {
    this._sharedPoolList.internalValue = value;
  }
  public resetSharedPoolList() {
    this._sharedPoolList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPoolListInput() {
    return this._sharedPoolList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper thunder_cgnv6_nat_shared_pool_oper}
*/
export class DataThunderCgnv6NatSharedPoolOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_shared_pool_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6NatSharedPoolOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6NatSharedPoolOper to import
  * @param importFromId The id of the existing DataThunderCgnv6NatSharedPoolOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6NatSharedPoolOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_shared_pool_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_shared_pool_oper thunder_cgnv6_nat_shared_pool_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6NatSharedPoolOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6NatSharedPoolOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_shared_pool_oper',
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
  private _oper = new DataThunderCgnv6NatSharedPoolOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6NatSharedPoolOperOper) {
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
      oper: dataThunderCgnv6NatSharedPoolOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6NatSharedPoolOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6NatSharedPoolOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
