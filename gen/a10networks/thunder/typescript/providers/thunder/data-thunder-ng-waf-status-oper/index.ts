// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNgWafStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#id DataThunderNgWafStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#oper DataThunderNgWafStatusOper#oper}
  */
  readonly oper?: DataThunderNgWafStatusOperOper;
}
export interface DataThunderNgWafStatusOperOperPartitionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#access_key_id DataThunderNgWafStatusOper#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#agent_name DataThunderNgWafStatusOper#agent_name}
  */
  readonly agentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#cache_entries DataThunderNgWafStatusOper#cache_entries}
  */
  readonly cacheEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#cpu DataThunderNgWafStatusOper#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#partition_name DataThunderNgWafStatusOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#secret_access_key DataThunderNgWafStatusOper#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#status DataThunderNgWafStatusOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#tracked_custom_signal DataThunderNgWafStatusOper#tracked_custom_signal}
  */
  readonly trackedCustomSignal?: number;
}

export function dataThunderNgWafStatusOperOperPartitionListStructToTerraform(struct?: DataThunderNgWafStatusOperOperPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    cache_entries: cdktf.numberToTerraform(struct!.cacheEntries),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    status: cdktf.stringToTerraform(struct!.status),
    tracked_custom_signal: cdktf.numberToTerraform(struct!.trackedCustomSignal),
  }
}


export function dataThunderNgWafStatusOperOperPartitionListStructToHclTerraform(struct?: DataThunderNgWafStatusOperOperPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_name: {
      value: cdktf.stringToHclTerraform(struct!.agentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_entries: {
      value: cdktf.numberToHclTerraform(struct!.cacheEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
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
    tracked_custom_signal: {
      value: cdktf.numberToHclTerraform(struct!.trackedCustomSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafStatusOperOperPartitionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNgWafStatusOperOperPartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._cacheEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEntries = this._cacheEntries;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trackedCustomSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackedCustomSignal = this._trackedCustomSignal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafStatusOperOperPartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._agentName = undefined;
      this._cacheEntries = undefined;
      this._cpu = undefined;
      this._partitionName = undefined;
      this._secretAccessKey = undefined;
      this._status = undefined;
      this._trackedCustomSignal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._agentName = value.agentName;
      this._cacheEntries = value.cacheEntries;
      this._cpu = value.cpu;
      this._partitionName = value.partitionName;
      this._secretAccessKey = value.secretAccessKey;
      this._status = value.status;
      this._trackedCustomSignal = value.trackedCustomSignal;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // agent_name - computed: false, optional: true, required: false
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  public resetAgentName() {
    this._agentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // cache_entries - computed: false, optional: true, required: false
  private _cacheEntries?: number; 
  public get cacheEntries() {
    return this.getNumberAttribute('cache_entries');
  }
  public set cacheEntries(value: number) {
    this._cacheEntries = value;
  }
  public resetCacheEntries() {
    this._cacheEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEntriesInput() {
    return this._cacheEntries;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
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

  // tracked_custom_signal - computed: false, optional: true, required: false
  private _trackedCustomSignal?: number; 
  public get trackedCustomSignal() {
    return this.getNumberAttribute('tracked_custom_signal');
  }
  public set trackedCustomSignal(value: number) {
    this._trackedCustomSignal = value;
  }
  public resetTrackedCustomSignal() {
    this._trackedCustomSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedCustomSignalInput() {
    return this._trackedCustomSignal;
  }
}

export class DataThunderNgWafStatusOperOperPartitionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderNgWafStatusOperOperPartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNgWafStatusOperOperPartitionListStructOutputReference {
    return new DataThunderNgWafStatusOperOperPartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNgWafStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#ngwaf_version DataThunderNgWafStatusOper#ngwaf_version}
  */
  readonly ngwafVersion?: string;
  /**
  * partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#partition_list DataThunderNgWafStatusOper#partition_list}
  */
  readonly partitionList?: DataThunderNgWafStatusOperOperPartitionListStruct[] | cdktf.IResolvable;
}

export function dataThunderNgWafStatusOperOperToTerraform(struct?: DataThunderNgWafStatusOperOperOutputReference | DataThunderNgWafStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngwaf_version: cdktf.stringToTerraform(struct!.ngwafVersion),
    partition_list: cdktf.listMapper(dataThunderNgWafStatusOperOperPartitionListStructToTerraform, true)(struct!.partitionList),
  }
}


export function dataThunderNgWafStatusOperOperToHclTerraform(struct?: DataThunderNgWafStatusOperOperOutputReference | DataThunderNgWafStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngwaf_version: {
      value: cdktf.stringToHclTerraform(struct!.ngwafVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_list: {
      value: cdktf.listMapperHcl(dataThunderNgWafStatusOperOperPartitionListStructToHclTerraform, true)(struct!.partitionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNgWafStatusOperOperPartitionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngwafVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafVersion = this._ngwafVersion;
    }
    if (this._partitionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionList = this._partitionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ngwafVersion = undefined;
      this._partitionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ngwafVersion = value.ngwafVersion;
      this._partitionList.internalValue = value.partitionList;
    }
  }

  // ngwaf_version - computed: false, optional: true, required: false
  private _ngwafVersion?: string; 
  public get ngwafVersion() {
    return this.getStringAttribute('ngwaf_version');
  }
  public set ngwafVersion(value: string) {
    this._ngwafVersion = value;
  }
  public resetNgwafVersion() {
    this._ngwafVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafVersionInput() {
    return this._ngwafVersion;
  }

  // partition_list - computed: false, optional: true, required: false
  private _partitionList = new DataThunderNgWafStatusOperOperPartitionListStructList(this, "partition_list", false);
  public get partitionList() {
    return this._partitionList;
  }
  public putPartitionList(value: DataThunderNgWafStatusOperOperPartitionListStruct[] | cdktf.IResolvable) {
    this._partitionList.internalValue = value;
  }
  public resetPartitionList() {
    this._partitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionListInput() {
    return this._partitionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper thunder_ng_waf_status_oper}
*/
export class DataThunderNgWafStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ng_waf_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNgWafStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNgWafStatusOper to import
  * @param importFromId The id of the existing DataThunderNgWafStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNgWafStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ng_waf_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_status_oper thunder_ng_waf_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNgWafStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNgWafStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ng_waf_status_oper',
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
  private _oper = new DataThunderNgWafStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNgWafStatusOperOper) {
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
      oper: dataThunderNgWafStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNgWafStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
