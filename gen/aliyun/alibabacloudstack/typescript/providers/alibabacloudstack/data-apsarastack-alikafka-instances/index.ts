// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackAlikafkaInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances#enable_details DataApsarastackAlikafkaInstances#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances#id DataApsarastackAlikafkaInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances#ids DataApsarastackAlikafkaInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances#name_regex DataApsarastackAlikafkaInstances#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances#output_file DataApsarastackAlikafkaInstances#output_file}
  */
  readonly outputFile?: string;
}
export interface DataApsarastackAlikafkaInstancesInstances {
}

export function dataApsarastackAlikafkaInstancesInstancesToTerraform(struct?: DataApsarastackAlikafkaInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackAlikafkaInstancesInstancesToHclTerraform(struct?: DataApsarastackAlikafkaInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackAlikafkaInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackAlikafkaInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackAlikafkaInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_create_topics_enable - computed: true, optional: false, required: false
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }

  // background_threads - computed: true, optional: false, required: false
  public get backgroundThreads() {
    return this.getNumberAttribute('background_threads');
  }

  // cup_type - computed: true, optional: false, required: false
  public get cupType() {
    return this.getStringAttribute('cup_type');
  }

  // default_replication_factor - computed: true, optional: false, required: false
  public get defaultReplicationFactor() {
    return this.getNumberAttribute('default_replication_factor');
  }

  // disk_num - computed: true, optional: false, required: false
  public get diskNum() {
    return this.getNumberAttribute('disk_num');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_retention_bytes - computed: true, optional: false, required: false
  public get logRetentionBytes() {
    return this.getNumberAttribute('log_retention_bytes');
  }

  // message_max_bytes - computed: true, optional: false, required: false
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_io_threads - computed: true, optional: false, required: false
  public get numIoThreads() {
    return this.getNumberAttribute('num_io_threads');
  }

  // num_network_threads - computed: true, optional: false, required: false
  public get numNetworkThreads() {
    return this.getNumberAttribute('num_network_threads');
  }

  // num_partitions - computed: true, optional: false, required: false
  public get numPartitions() {
    return this.getNumberAttribute('num_partitions');
  }

  // num_replica_fetchers - computed: true, optional: false, required: false
  public get numReplicaFetchers() {
    return this.getNumberAttribute('num_replica_fetchers');
  }

  // offsets_retention_minutes - computed: true, optional: false, required: false
  public get offsetsRetentionMinutes() {
    return this.getNumberAttribute('offsets_retention_minutes');
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getBooleanAttribute('plaintext');
  }

  // plaintext_endpoint - computed: true, optional: false, required: false
  public get plaintextEndpoint() {
    return this.getListAttribute('plaintext_endpoint');
  }

  // queued_max_requests - computed: true, optional: false, required: false
  public get queuedMaxRequests() {
    return this.getNumberAttribute('queued_max_requests');
  }

  // replica_fetch_max_bytes - computed: true, optional: false, required: false
  public get replicaFetchMaxBytes() {
    return this.getNumberAttribute('replica_fetch_max_bytes');
  }

  // replica_fetch_wait_max_ms - computed: true, optional: false, required: false
  public get replicaFetchWaitMaxMs() {
    return this.getNumberAttribute('replica_fetch_wait_max_ms');
  }

  // replica_lag_time_max_ms - computed: true, optional: false, required: false
  public get replicaLagTimeMaxMs() {
    return this.getNumberAttribute('replica_lag_time_max_ms');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // sasl - computed: true, optional: false, required: false
  public get sasl() {
    return this.getBooleanAttribute('sasl');
  }

  // sasl_plaintext_endpoint - computed: true, optional: false, required: false
  public get saslPlaintextEndpoint() {
    return this.getListAttribute('sasl_plaintext_endpoint');
  }

  // sasl_ssl_endpoint - computed: true, optional: false, required: false
  public get saslSslEndpoint() {
    return this.getListAttribute('sasl_ssl_endpoint');
  }

  // selected_zones - computed: true, optional: false, required: false
  public get selectedZones() {
    return this.getListAttribute('selected_zones');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // vip_type - computed: true, optional: false, required: false
  public get vipType() {
    return this.getStringAttribute('vip_type');
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

export class DataApsarastackAlikafkaInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackAlikafkaInstancesInstancesOutputReference {
    return new DataApsarastackAlikafkaInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances apsarastack_alikafka_instances}
*/
export class DataApsarastackAlikafkaInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_alikafka_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackAlikafkaInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackAlikafkaInstances to import
  * @param importFromId The id of the existing DataApsarastackAlikafkaInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackAlikafkaInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_alikafka_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_alikafka_instances apsarastack_alikafka_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackAlikafkaInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackAlikafkaInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_alikafka_instances',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
  private _instances = new DataApsarastackAlikafkaInstancesInstancesList(this, "instances", false);
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
