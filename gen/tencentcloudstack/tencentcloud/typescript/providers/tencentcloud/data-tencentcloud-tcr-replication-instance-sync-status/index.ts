// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcrReplicationInstanceSyncStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#id DataTencentcloudTcrReplicationInstanceSyncStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * master registry id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#registry_id DataTencentcloudTcrReplicationInstanceSyncStatus#registry_id}
  */
  readonly registryId: string;
  /**
  * synchronization instance region id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#replication_region_id DataTencentcloudTcrReplicationInstanceSyncStatus#replication_region_id}
  */
  readonly replicationRegionId?: number;
  /**
  * synchronization instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#replication_registry_id DataTencentcloudTcrReplicationInstanceSyncStatus#replication_registry_id}
  */
  readonly replicationRegistryId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#result_output_file DataTencentcloudTcrReplicationInstanceSyncStatus#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * whether to display the synchronization log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#show_replication_log DataTencentcloudTcrReplicationInstanceSyncStatus#show_replication_log}
  */
  readonly showReplicationLog?: boolean | cdktf.IResolvable;
}
export interface DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLog {
}

export function dataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogToTerraform(struct?: DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogToHclTerraform(struct?: DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogOutputReference {
    return new DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status tencentcloud_tcr_replication_instance_sync_status}
*/
export class DataTencentcloudTcrReplicationInstanceSyncStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_replication_instance_sync_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcrReplicationInstanceSyncStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcrReplicationInstanceSyncStatus to import
  * @param importFromId The id of the existing DataTencentcloudTcrReplicationInstanceSyncStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcrReplicationInstanceSyncStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_replication_instance_sync_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/tcr_replication_instance_sync_status tencentcloud_tcr_replication_instance_sync_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcrReplicationInstanceSyncStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcrReplicationInstanceSyncStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_replication_instance_sync_status',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._registryId = config.registryId;
    this._replicationRegionId = config.replicationRegionId;
    this._replicationRegistryId = config.replicationRegistryId;
    this._resultOutputFile = config.resultOutputFile;
    this._showReplicationLog = config.showReplicationLog;
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

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // replication_log - computed: true, optional: false, required: false
  private _replicationLog = new DataTencentcloudTcrReplicationInstanceSyncStatusReplicationLogList(this, "replication_log", false);
  public get replicationLog() {
    return this._replicationLog;
  }

  // replication_region_id - computed: false, optional: true, required: false
  private _replicationRegionId?: number; 
  public get replicationRegionId() {
    return this.getNumberAttribute('replication_region_id');
  }
  public set replicationRegionId(value: number) {
    this._replicationRegionId = value;
  }
  public resetReplicationRegionId() {
    this._replicationRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegionIdInput() {
    return this._replicationRegionId;
  }

  // replication_registry_id - computed: false, optional: false, required: true
  private _replicationRegistryId?: string; 
  public get replicationRegistryId() {
    return this.getStringAttribute('replication_registry_id');
  }
  public set replicationRegistryId(value: string) {
    this._replicationRegistryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegistryIdInput() {
    return this._replicationRegistryId;
  }

  // replication_status - computed: true, optional: false, required: false
  public get replicationStatus() {
    return this.getStringAttribute('replication_status');
  }

  // replication_time - computed: true, optional: false, required: false
  public get replicationTime() {
    return this.getStringAttribute('replication_time');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // show_replication_log - computed: false, optional: true, required: false
  private _showReplicationLog?: boolean | cdktf.IResolvable; 
  public get showReplicationLog() {
    return this.getBooleanAttribute('show_replication_log');
  }
  public set showReplicationLog(value: boolean | cdktf.IResolvable) {
    this._showReplicationLog = value;
  }
  public resetShowReplicationLog() {
    this._showReplicationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showReplicationLogInput() {
    return this._showReplicationLog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      registry_id: cdktf.stringToTerraform(this._registryId),
      replication_region_id: cdktf.numberToTerraform(this._replicationRegionId),
      replication_registry_id: cdktf.stringToTerraform(this._replicationRegistryId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      show_replication_log: cdktf.booleanToTerraform(this._showReplicationLog),
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
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_region_id: {
        value: cdktf.numberToHclTerraform(this._replicationRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_registry_id: {
        value: cdktf.stringToHclTerraform(this._replicationRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_replication_log: {
        value: cdktf.booleanToHclTerraform(this._showReplicationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
