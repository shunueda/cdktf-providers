// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDtsSynchronizationJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#enable_details DataAlicloudDtsSynchronizationJobs#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#id DataAlicloudDtsSynchronizationJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#ids DataAlicloudDtsSynchronizationJobs#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#name_regex DataAlicloudDtsSynchronizationJobs#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#output_file DataAlicloudDtsSynchronizationJobs#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#status DataAlicloudDtsSynchronizationJobs#status}
  */
  readonly status?: string;
}
export interface DataAlicloudDtsSynchronizationJobsJobs {
}

export function dataAlicloudDtsSynchronizationJobsJobsToTerraform(struct?: DataAlicloudDtsSynchronizationJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDtsSynchronizationJobsJobsToHclTerraform(struct?: DataAlicloudDtsSynchronizationJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDtsSynchronizationJobsJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDtsSynchronizationJobsJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDtsSynchronizationJobsJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkpoint - computed: true, optional: false, required: false
  public get checkpoint() {
    return this.getStringAttribute('checkpoint');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_initialization - computed: true, optional: false, required: false
  public get dataInitialization() {
    return this.getBooleanAttribute('data_initialization');
  }

  // data_synchronization - computed: true, optional: false, required: false
  public get dataSynchronization() {
    return this.getBooleanAttribute('data_synchronization');
  }

  // db_list - computed: true, optional: false, required: false
  public get dbList() {
    return this.getStringAttribute('db_list');
  }

  // destination_endpoint_data_base_name - computed: true, optional: false, required: false
  public get destinationEndpointDataBaseName() {
    return this.getStringAttribute('destination_endpoint_data_base_name');
  }

  // destination_endpoint_engine_name - computed: true, optional: false, required: false
  public get destinationEndpointEngineName() {
    return this.getStringAttribute('destination_endpoint_engine_name');
  }

  // destination_endpoint_instance_id - computed: true, optional: false, required: false
  public get destinationEndpointInstanceId() {
    return this.getStringAttribute('destination_endpoint_instance_id');
  }

  // destination_endpoint_instance_type - computed: true, optional: false, required: false
  public get destinationEndpointInstanceType() {
    return this.getStringAttribute('destination_endpoint_instance_type');
  }

  // destination_endpoint_ip - computed: true, optional: false, required: false
  public get destinationEndpointIp() {
    return this.getStringAttribute('destination_endpoint_ip');
  }

  // destination_endpoint_oracle_sid - computed: true, optional: false, required: false
  public get destinationEndpointOracleSid() {
    return this.getStringAttribute('destination_endpoint_oracle_sid');
  }

  // destination_endpoint_port - computed: true, optional: false, required: false
  public get destinationEndpointPort() {
    return this.getStringAttribute('destination_endpoint_port');
  }

  // destination_endpoint_region - computed: true, optional: false, required: false
  public get destinationEndpointRegion() {
    return this.getStringAttribute('destination_endpoint_region');
  }

  // destination_endpoint_user_name - computed: true, optional: false, required: false
  public get destinationEndpointUserName() {
    return this.getStringAttribute('destination_endpoint_user_name');
  }

  // dts_instance_id - computed: true, optional: false, required: false
  public get dtsInstanceId() {
    return this.getStringAttribute('dts_instance_id');
  }

  // dts_job_id - computed: true, optional: false, required: false
  public get dtsJobId() {
    return this.getStringAttribute('dts_job_id');
  }

  // dts_job_name - computed: true, optional: false, required: false
  public get dtsJobName() {
    return this.getStringAttribute('dts_job_name');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_endpoint_database_name - computed: true, optional: false, required: false
  public get sourceEndpointDatabaseName() {
    return this.getStringAttribute('source_endpoint_database_name');
  }

  // source_endpoint_engine_name - computed: true, optional: false, required: false
  public get sourceEndpointEngineName() {
    return this.getStringAttribute('source_endpoint_engine_name');
  }

  // source_endpoint_instance_id - computed: true, optional: false, required: false
  public get sourceEndpointInstanceId() {
    return this.getStringAttribute('source_endpoint_instance_id');
  }

  // source_endpoint_instance_type - computed: true, optional: false, required: false
  public get sourceEndpointInstanceType() {
    return this.getStringAttribute('source_endpoint_instance_type');
  }

  // source_endpoint_ip - computed: true, optional: false, required: false
  public get sourceEndpointIp() {
    return this.getStringAttribute('source_endpoint_ip');
  }

  // source_endpoint_oracle_sid - computed: true, optional: false, required: false
  public get sourceEndpointOracleSid() {
    return this.getStringAttribute('source_endpoint_oracle_sid');
  }

  // source_endpoint_owner_id - computed: true, optional: false, required: false
  public get sourceEndpointOwnerId() {
    return this.getStringAttribute('source_endpoint_owner_id');
  }

  // source_endpoint_port - computed: true, optional: false, required: false
  public get sourceEndpointPort() {
    return this.getStringAttribute('source_endpoint_port');
  }

  // source_endpoint_region - computed: true, optional: false, required: false
  public get sourceEndpointRegion() {
    return this.getStringAttribute('source_endpoint_region');
  }

  // source_endpoint_role - computed: true, optional: false, required: false
  public get sourceEndpointRole() {
    return this.getStringAttribute('source_endpoint_role');
  }

  // source_endpoint_user_name - computed: true, optional: false, required: false
  public get sourceEndpointUserName() {
    return this.getStringAttribute('source_endpoint_user_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // structure_initialization - computed: true, optional: false, required: false
  public get structureInitialization() {
    return this.getBooleanAttribute('structure_initialization');
  }

  // synchronization_direction - computed: true, optional: false, required: false
  public get synchronizationDirection() {
    return this.getStringAttribute('synchronization_direction');
  }
}

export class DataAlicloudDtsSynchronizationJobsJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDtsSynchronizationJobsJobsOutputReference {
    return new DataAlicloudDtsSynchronizationJobsJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs alicloud_dts_synchronization_jobs}
*/
export class DataAlicloudDtsSynchronizationJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dts_synchronization_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDtsSynchronizationJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDtsSynchronizationJobs to import
  * @param importFromId The id of the existing DataAlicloudDtsSynchronizationJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDtsSynchronizationJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dts_synchronization_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dts_synchronization_jobs alicloud_dts_synchronization_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDtsSynchronizationJobsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDtsSynchronizationJobsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dts_synchronization_jobs',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataAlicloudDtsSynchronizationJobsJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
