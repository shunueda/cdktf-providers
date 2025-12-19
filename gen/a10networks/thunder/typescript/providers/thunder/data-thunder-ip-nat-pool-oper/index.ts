// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpNatPoolOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#id DataThunderIpNatPoolOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pool name or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#pool_name DataThunderIpNatPoolOper#pool_name}
  */
  readonly poolName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#oper DataThunderIpNatPoolOper#oper}
  */
  readonly oper?: DataThunderIpNatPoolOperOper;
}
export interface DataThunderIpNatPoolOperOperNatPoolAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#address DataThunderIpNatPoolOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#failed DataThunderIpNatPoolOper#failed}
  */
  readonly failed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#port_usage DataThunderIpNatPoolOper#port_usage}
  */
  readonly portUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#total_freed DataThunderIpNatPoolOper#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#total_used DataThunderIpNatPoolOper#total_used}
  */
  readonly totalUsed?: number;
}

export function dataThunderIpNatPoolOperOperNatPoolAddrListStructToTerraform(struct?: DataThunderIpNatPoolOperOperNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    failed: cdktf.numberToTerraform(struct!.failed),
    port_usage: cdktf.numberToTerraform(struct!.portUsage),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_used: cdktf.numberToTerraform(struct!.totalUsed),
  }
}


export function dataThunderIpNatPoolOperOperNatPoolAddrListStructToHclTerraform(struct?: DataThunderIpNatPoolOperOperNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failed: {
      value: cdktf.numberToHclTerraform(struct!.failed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_usage: {
      value: cdktf.numberToHclTerraform(struct!.portUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_used: {
      value: cdktf.numberToHclTerraform(struct!.totalUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpNatPoolOperOperNatPoolAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderIpNatPoolOperOperNatPoolAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._failed !== undefined) {
      hasAnyValues = true;
      internalValueResult.failed = this._failed;
    }
    if (this._portUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUsage = this._portUsage;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUsed = this._totalUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpNatPoolOperOperNatPoolAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._failed = undefined;
      this._portUsage = undefined;
      this._totalFreed = undefined;
      this._totalUsed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._failed = value.failed;
      this._portUsage = value.portUsage;
      this._totalFreed = value.totalFreed;
      this._totalUsed = value.totalUsed;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // failed - computed: false, optional: true, required: false
  private _failed?: number; 
  public get failed() {
    return this.getNumberAttribute('failed');
  }
  public set failed(value: number) {
    this._failed = value;
  }
  public resetFailed() {
    this._failed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInput() {
    return this._failed;
  }

  // port_usage - computed: false, optional: true, required: false
  private _portUsage?: number; 
  public get portUsage() {
    return this.getNumberAttribute('port_usage');
  }
  public set portUsage(value: number) {
    this._portUsage = value;
  }
  public resetPortUsage() {
    this._portUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUsageInput() {
    return this._portUsage;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_used - computed: false, optional: true, required: false
  private _totalUsed?: number; 
  public get totalUsed() {
    return this.getNumberAttribute('total_used');
  }
  public set totalUsed(value: number) {
    this._totalUsed = value;
  }
  public resetTotalUsed() {
    this._totalUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUsedInput() {
    return this._totalUsed;
  }
}

export class DataThunderIpNatPoolOperOperNatPoolAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderIpNatPoolOperOperNatPoolAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderIpNatPoolOperOperNatPoolAddrListStructOutputReference {
    return new DataThunderIpNatPoolOperOperNatPoolAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderIpNatPoolOperOper {
  /**
  * nat_pool_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#nat_pool_addr_list DataThunderIpNatPoolOper#nat_pool_addr_list}
  */
  readonly natPoolAddrList?: DataThunderIpNatPoolOperOperNatPoolAddrListStruct[] | cdktf.IResolvable;
}

export function dataThunderIpNatPoolOperOperToTerraform(struct?: DataThunderIpNatPoolOperOperOutputReference | DataThunderIpNatPoolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_pool_addr_list: cdktf.listMapper(dataThunderIpNatPoolOperOperNatPoolAddrListStructToTerraform, true)(struct!.natPoolAddrList),
  }
}


export function dataThunderIpNatPoolOperOperToHclTerraform(struct?: DataThunderIpNatPoolOperOperOutputReference | DataThunderIpNatPoolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_pool_addr_list: {
      value: cdktf.listMapperHcl(dataThunderIpNatPoolOperOperNatPoolAddrListStructToHclTerraform, true)(struct!.natPoolAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderIpNatPoolOperOperNatPoolAddrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpNatPoolOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpNatPoolOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natPoolAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrList = this._natPoolAddrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpNatPoolOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natPoolAddrList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natPoolAddrList.internalValue = value.natPoolAddrList;
    }
  }

  // nat_pool_addr_list - computed: false, optional: true, required: false
  private _natPoolAddrList = new DataThunderIpNatPoolOperOperNatPoolAddrListStructList(this, "nat_pool_addr_list", false);
  public get natPoolAddrList() {
    return this._natPoolAddrList;
  }
  public putNatPoolAddrList(value: DataThunderIpNatPoolOperOperNatPoolAddrListStruct[] | cdktf.IResolvable) {
    this._natPoolAddrList.internalValue = value;
  }
  public resetNatPoolAddrList() {
    this._natPoolAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrListInput() {
    return this._natPoolAddrList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper thunder_ip_nat_pool_oper}
*/
export class DataThunderIpNatPoolOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_pool_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpNatPoolOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpNatPoolOper to import
  * @param importFromId The id of the existing DataThunderIpNatPoolOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpNatPoolOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_pool_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_nat_pool_oper thunder_ip_nat_pool_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpNatPoolOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpNatPoolOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_pool_oper',
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
    this._poolName = config.poolName;
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderIpNatPoolOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderIpNatPoolOperOper) {
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
      pool_name: cdktf.stringToTerraform(this._poolName),
      oper: dataThunderIpNatPoolOperOperToTerraform(this._oper.internalValue),
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
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderIpNatPoolOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpNatPoolOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
