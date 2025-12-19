// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderConfigSyncStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#id DataThunderConfigSyncStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#oper DataThunderConfigSyncStatusOper#oper}
  */
  readonly oper?: DataThunderConfigSyncStatusOperOper;
}
export interface DataThunderConfigSyncStatusOperOperConfigSyncListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#partition_name DataThunderConfigSyncStatusOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#run_sync_status DataThunderConfigSyncStatusOper#run_sync_status}
  */
  readonly runSyncStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#startup_sync_status DataThunderConfigSyncStatusOper#startup_sync_status}
  */
  readonly startupSyncStatus?: string;
}

export function dataThunderConfigSyncStatusOperOperConfigSyncListStructToTerraform(struct?: DataThunderConfigSyncStatusOperOperConfigSyncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    run_sync_status: cdktf.stringToTerraform(struct!.runSyncStatus),
    startup_sync_status: cdktf.stringToTerraform(struct!.startupSyncStatus),
  }
}


export function dataThunderConfigSyncStatusOperOperConfigSyncListStructToHclTerraform(struct?: DataThunderConfigSyncStatusOperOperConfigSyncListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_sync_status: {
      value: cdktf.stringToHclTerraform(struct!.runSyncStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_sync_status: {
      value: cdktf.stringToHclTerraform(struct!.startupSyncStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderConfigSyncStatusOperOperConfigSyncListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderConfigSyncStatusOperOperConfigSyncListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._runSyncStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSyncStatus = this._runSyncStatus;
    }
    if (this._startupSyncStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupSyncStatus = this._startupSyncStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderConfigSyncStatusOperOperConfigSyncListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionName = undefined;
      this._runSyncStatus = undefined;
      this._startupSyncStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionName = value.partitionName;
      this._runSyncStatus = value.runSyncStatus;
      this._startupSyncStatus = value.startupSyncStatus;
    }
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // run_sync_status - computed: false, optional: true, required: false
  private _runSyncStatus?: string; 
  public get runSyncStatus() {
    return this.getStringAttribute('run_sync_status');
  }
  public set runSyncStatus(value: string) {
    this._runSyncStatus = value;
  }
  public resetRunSyncStatus() {
    this._runSyncStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSyncStatusInput() {
    return this._runSyncStatus;
  }

  // startup_sync_status - computed: false, optional: true, required: false
  private _startupSyncStatus?: string; 
  public get startupSyncStatus() {
    return this.getStringAttribute('startup_sync_status');
  }
  public set startupSyncStatus(value: string) {
    this._startupSyncStatus = value;
  }
  public resetStartupSyncStatus() {
    this._startupSyncStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupSyncStatusInput() {
    return this._startupSyncStatus;
  }
}

export class DataThunderConfigSyncStatusOperOperConfigSyncListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderConfigSyncStatusOperOperConfigSyncListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderConfigSyncStatusOperOperConfigSyncListStructOutputReference {
    return new DataThunderConfigSyncStatusOperOperConfigSyncListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderConfigSyncStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#all_partitions DataThunderConfigSyncStatusOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * config_sync_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#config_sync_list DataThunderConfigSyncStatusOper#config_sync_list}
  */
  readonly configSyncList?: DataThunderConfigSyncStatusOperOperConfigSyncListStruct[] | cdktf.IResolvable;
}

export function dataThunderConfigSyncStatusOperOperToTerraform(struct?: DataThunderConfigSyncStatusOperOperOutputReference | DataThunderConfigSyncStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    config_sync_list: cdktf.listMapper(dataThunderConfigSyncStatusOperOperConfigSyncListStructToTerraform, true)(struct!.configSyncList),
  }
}


export function dataThunderConfigSyncStatusOperOperToHclTerraform(struct?: DataThunderConfigSyncStatusOperOperOutputReference | DataThunderConfigSyncStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_partitions: {
      value: cdktf.numberToHclTerraform(struct!.allPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_sync_list: {
      value: cdktf.listMapperHcl(dataThunderConfigSyncStatusOperOperConfigSyncListStructToHclTerraform, true)(struct!.configSyncList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderConfigSyncStatusOperOperConfigSyncListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderConfigSyncStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderConfigSyncStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._configSyncList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSyncList = this._configSyncList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderConfigSyncStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitions = undefined;
      this._configSyncList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitions = value.allPartitions;
      this._configSyncList.internalValue = value.configSyncList;
    }
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
  }

  // config_sync_list - computed: false, optional: true, required: false
  private _configSyncList = new DataThunderConfigSyncStatusOperOperConfigSyncListStructList(this, "config_sync_list", false);
  public get configSyncList() {
    return this._configSyncList;
  }
  public putConfigSyncList(value: DataThunderConfigSyncStatusOperOperConfigSyncListStruct[] | cdktf.IResolvable) {
    this._configSyncList.internalValue = value;
  }
  public resetConfigSyncList() {
    this._configSyncList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncListInput() {
    return this._configSyncList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper thunder_config_sync_status_oper}
*/
export class DataThunderConfigSyncStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_config_sync_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderConfigSyncStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderConfigSyncStatusOper to import
  * @param importFromId The id of the existing DataThunderConfigSyncStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderConfigSyncStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_config_sync_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/config_sync_status_oper thunder_config_sync_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderConfigSyncStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderConfigSyncStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_config_sync_status_oper',
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
  private _oper = new DataThunderConfigSyncStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderConfigSyncStatusOperOper) {
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
      oper: dataThunderConfigSyncStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderConfigSyncStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderConfigSyncStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
