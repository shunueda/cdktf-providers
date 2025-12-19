// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemInuseCpuListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#id DataThunderSystemInuseCpuListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#oper DataThunderSystemInuseCpuListOper#oper}
  */
  readonly oper?: DataThunderSystemInuseCpuListOperOper;
}
export interface DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#cpu_id DataThunderSystemInuseCpuListOper#cpu_id}
  */
  readonly cpuId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#cpu_num DataThunderSystemInuseCpuListOper#cpu_num}
  */
  readonly cpuNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#ht_cpu DataThunderSystemInuseCpuListOper#ht_cpu}
  */
  readonly htCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#numa_node DataThunderSystemInuseCpuListOper#numa_node}
  */
  readonly numaNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#status DataThunderSystemInuseCpuListOper#status}
  */
  readonly status?: string;
}

export function dataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructToTerraform(struct?: DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_id: cdktf.stringToTerraform(struct!.cpuId),
    cpu_num: cdktf.stringToTerraform(struct!.cpuNum),
    ht_cpu: cdktf.stringToTerraform(struct!.htCpu),
    numa_node: cdktf.stringToTerraform(struct!.numaNode),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructToHclTerraform(struct?: DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_id: {
      value: cdktf.stringToHclTerraform(struct!.cpuId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_num: {
      value: cdktf.stringToHclTerraform(struct!.cpuNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ht_cpu: {
      value: cdktf.stringToHclTerraform(struct!.htCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numa_node: {
      value: cdktf.stringToHclTerraform(struct!.numaNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuId = this._cpuId;
    }
    if (this._cpuNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuNum = this._cpuNum;
    }
    if (this._htCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.htCpu = this._htCpu;
    }
    if (this._numaNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.numaNode = this._numaNode;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuId = undefined;
      this._cpuNum = undefined;
      this._htCpu = undefined;
      this._numaNode = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuId = value.cpuId;
      this._cpuNum = value.cpuNum;
      this._htCpu = value.htCpu;
      this._numaNode = value.numaNode;
      this._status = value.status;
    }
  }

  // cpu_id - computed: false, optional: true, required: false
  private _cpuId?: string; 
  public get cpuId() {
    return this.getStringAttribute('cpu_id');
  }
  public set cpuId(value: string) {
    this._cpuId = value;
  }
  public resetCpuId() {
    this._cpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdInput() {
    return this._cpuId;
  }

  // cpu_num - computed: false, optional: true, required: false
  private _cpuNum?: string; 
  public get cpuNum() {
    return this.getStringAttribute('cpu_num');
  }
  public set cpuNum(value: string) {
    this._cpuNum = value;
  }
  public resetCpuNum() {
    this._cpuNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuNumInput() {
    return this._cpuNum;
  }

  // ht_cpu - computed: false, optional: true, required: false
  private _htCpu?: string; 
  public get htCpu() {
    return this.getStringAttribute('ht_cpu');
  }
  public set htCpu(value: string) {
    this._htCpu = value;
  }
  public resetHtCpu() {
    this._htCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htCpuInput() {
    return this._htCpu;
  }

  // numa_node - computed: false, optional: true, required: false
  private _numaNode?: string; 
  public get numaNode() {
    return this.getStringAttribute('numa_node');
  }
  public set numaNode(value: string) {
    this._numaNode = value;
  }
  public resetNumaNode() {
    this._numaNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaNodeInput() {
    return this._numaNode;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructOutputReference {
    return new DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemInuseCpuListOperOper {
  /**
  * system_inuse_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#system_inuse_cpu_list DataThunderSystemInuseCpuListOper#system_inuse_cpu_list}
  */
  readonly systemInuseCpuList?: DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemInuseCpuListOperOperToTerraform(struct?: DataThunderSystemInuseCpuListOperOperOutputReference | DataThunderSystemInuseCpuListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_inuse_cpu_list: cdktf.listMapper(dataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructToTerraform, true)(struct!.systemInuseCpuList),
  }
}


export function dataThunderSystemInuseCpuListOperOperToHclTerraform(struct?: DataThunderSystemInuseCpuListOperOperOutputReference | DataThunderSystemInuseCpuListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_inuse_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructToHclTerraform, true)(struct!.systemInuseCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemInuseCpuListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemInuseCpuListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemInuseCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInuseCpuList = this._systemInuseCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemInuseCpuListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemInuseCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInuseCpuList.internalValue = value.systemInuseCpuList;
    }
  }

  // system_inuse_cpu_list - computed: false, optional: true, required: false
  private _systemInuseCpuList = new DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStructList(this, "system_inuse_cpu_list", false);
  public get systemInuseCpuList() {
    return this._systemInuseCpuList;
  }
  public putSystemInuseCpuList(value: DataThunderSystemInuseCpuListOperOperSystemInuseCpuListStruct[] | cdktf.IResolvable) {
    this._systemInuseCpuList.internalValue = value;
  }
  public resetSystemInuseCpuList() {
    this._systemInuseCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInuseCpuListInput() {
    return this._systemInuseCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper thunder_system_inuse_cpu_list_oper}
*/
export class DataThunderSystemInuseCpuListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_inuse_cpu_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemInuseCpuListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemInuseCpuListOper to import
  * @param importFromId The id of the existing DataThunderSystemInuseCpuListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemInuseCpuListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_inuse_cpu_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_cpu_list_oper thunder_system_inuse_cpu_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemInuseCpuListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemInuseCpuListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_inuse_cpu_list_oper',
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
  private _oper = new DataThunderSystemInuseCpuListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemInuseCpuListOperOper) {
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
      oper: dataThunderSystemInuseCpuListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemInuseCpuListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemInuseCpuListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
