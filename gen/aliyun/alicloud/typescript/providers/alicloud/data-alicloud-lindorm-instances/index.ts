// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudLindormInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#enable_details DataAlicloudLindormInstances#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#id DataAlicloudLindormInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#ids DataAlicloudLindormInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#name_regex DataAlicloudLindormInstances#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#output_file DataAlicloudLindormInstances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#query_str DataAlicloudLindormInstances#query_str}
  */
  readonly queryStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#status DataAlicloudLindormInstances#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#support_engine DataAlicloudLindormInstances#support_engine}
  */
  readonly supportEngine?: number;
}
export interface DataAlicloudLindormInstancesInstances {
}

export function dataAlicloudLindormInstancesInstancesToTerraform(struct?: DataAlicloudLindormInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudLindormInstancesInstancesToHclTerraform(struct?: DataAlicloudLindormInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudLindormInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudLindormInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudLindormInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_renew - computed: true, optional: false, required: false
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }

  // cold_storage - computed: true, optional: false, required: false
  public get coldStorage() {
    return this.getNumberAttribute('cold_storage');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_proection - computed: true, optional: false, required: false
  public get deletionProection() {
    return this.getBooleanAttribute('deletion_proection');
  }

  // disk_category - computed: true, optional: false, required: false
  public get diskCategory() {
    return this.getStringAttribute('disk_category');
  }

  // disk_usage - computed: true, optional: false, required: false
  public get diskUsage() {
    return this.getStringAttribute('disk_usage');
  }

  // disk_warning_threshold - computed: true, optional: false, required: false
  public get diskWarningThreshold() {
    return this.getStringAttribute('disk_warning_threshold');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getNumberAttribute('engine_type');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // file_engine_node_count - computed: true, optional: false, required: false
  public get fileEngineNodeCount() {
    return this.getNumberAttribute('file_engine_node_count');
  }

  // file_engine_specification - computed: true, optional: false, required: false
  public get fileEngineSpecification() {
    return this.getStringAttribute('file_engine_specification');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_storage - computed: true, optional: false, required: false
  public get instanceStorage() {
    return this.getStringAttribute('instance_storage');
  }

  // ip_white_list - computed: true, optional: false, required: false
  public get ipWhiteList() {
    return this.getListAttribute('ip_white_list');
  }

  // lts_node_count - computed: true, optional: false, required: false
  public get ltsNodeCount() {
    return this.getNumberAttribute('lts_node_count');
  }

  // lts_node_specification - computed: true, optional: false, required: false
  public get ltsNodeSpecification() {
    return this.getStringAttribute('lts_node_specification');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // phoenix_node_count - computed: true, optional: false, required: false
  public get phoenixNodeCount() {
    return this.getNumberAttribute('phoenix_node_count');
  }

  // phoenix_node_specification - computed: true, optional: false, required: false
  public get phoenixNodeSpecification() {
    return this.getStringAttribute('phoenix_node_specification');
  }

  // resource_owner_id - computed: true, optional: false, required: false
  public get resourceOwnerId() {
    return this.getStringAttribute('resource_owner_id');
  }

  // search_engine_node_count - computed: true, optional: false, required: false
  public get searchEngineNodeCount() {
    return this.getNumberAttribute('search_engine_node_count');
  }

  // search_engine_specification - computed: true, optional: false, required: false
  public get searchEngineSpecification() {
    return this.getStringAttribute('search_engine_specification');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_engine_node_count - computed: true, optional: false, required: false
  public get tableEngineNodeCount() {
    return this.getNumberAttribute('table_engine_node_count');
  }

  // table_engine_specification - computed: true, optional: false, required: false
  public get tableEngineSpecification() {
    return this.getStringAttribute('table_engine_specification');
  }

  // time_series_engine_node_count - computed: true, optional: false, required: false
  public get timeSeriesEngineNodeCount() {
    return this.getNumberAttribute('time_series_engine_node_count');
  }

  // time_serires_engine_specification - computed: true, optional: false, required: false
  public get timeSeriresEngineSpecification() {
    return this.getStringAttribute('time_serires_engine_specification');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudLindormInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudLindormInstancesInstancesOutputReference {
    return new DataAlicloudLindormInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances alicloud_lindorm_instances}
*/
export class DataAlicloudLindormInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_lindorm_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudLindormInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudLindormInstances to import
  * @param importFromId The id of the existing DataAlicloudLindormInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudLindormInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_lindorm_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/lindorm_instances alicloud_lindorm_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudLindormInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudLindormInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_lindorm_instances',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._queryStr = config.queryStr;
    this._status = config.status;
    this._supportEngine = config.supportEngine;
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

  // instances - computed: true, optional: false, required: false
  private _instances = new DataAlicloudLindormInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
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

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // query_str - computed: false, optional: true, required: false
  private _queryStr?: string; 
  public get queryStr() {
    return this.getStringAttribute('query_str');
  }
  public set queryStr(value: string) {
    this._queryStr = value;
  }
  public resetQueryStr() {
    this._queryStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStrInput() {
    return this._queryStr;
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

  // support_engine - computed: false, optional: true, required: false
  private _supportEngine?: number; 
  public get supportEngine() {
    return this.getNumberAttribute('support_engine');
  }
  public set supportEngine(value: number) {
    this._supportEngine = value;
  }
  public resetSupportEngine() {
    this._supportEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEngineInput() {
    return this._supportEngine;
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
      query_str: cdktf.stringToTerraform(this._queryStr),
      status: cdktf.stringToTerraform(this._status),
      support_engine: cdktf.numberToTerraform(this._supportEngine),
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
      query_str: {
        value: cdktf.stringToHclTerraform(this._queryStr),
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
      support_engine: {
        value: cdktf.numberToHclTerraform(this._supportEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
