// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDbInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#connection_mode DataAlicloudDbInstances#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#db_type DataAlicloudDbInstances#db_type}
  */
  readonly dbType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#enable_details DataAlicloudDbInstances#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#engine DataAlicloudDbInstances#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#id DataAlicloudDbInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#ids DataAlicloudDbInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#name_regex DataAlicloudDbInstances#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#output_file DataAlicloudDbInstances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#page_number DataAlicloudDbInstances#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#page_size DataAlicloudDbInstances#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#status DataAlicloudDbInstances#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#tags DataAlicloudDbInstances#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#vpc_id DataAlicloudDbInstances#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#vswitch_id DataAlicloudDbInstances#vswitch_id}
  */
  readonly vswitchId?: string;
}
export interface DataAlicloudDbInstancesInstancesHostInstanceInfos {
}

export function dataAlicloudDbInstancesInstancesHostInstanceInfosToTerraform(struct?: DataAlicloudDbInstancesInstancesHostInstanceInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDbInstancesInstancesHostInstanceInfosToHclTerraform(struct?: DataAlicloudDbInstancesInstancesHostInstanceInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDbInstancesInstancesHostInstanceInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDbInstancesInstancesHostInstanceInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDbInstancesInstancesHostInstanceInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_sync_time - computed: true, optional: false, required: false
  public get dataSyncTime() {
    return this.getStringAttribute('data_sync_time');
  }

  // log_sync_time - computed: true, optional: false, required: false
  public get logSyncTime() {
    return this.getStringAttribute('log_sync_time');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudDbInstancesInstancesHostInstanceInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDbInstancesInstancesHostInstanceInfosOutputReference {
    return new DataAlicloudDbInstancesInstancesHostInstanceInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDbInstancesInstancesParameters {
}

export function dataAlicloudDbInstancesInstancesParametersToTerraform(struct?: DataAlicloudDbInstancesInstancesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDbInstancesInstancesParametersToHclTerraform(struct?: DataAlicloudDbInstancesInstancesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDbInstancesInstancesParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDbInstancesInstancesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDbInstancesInstancesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checking_code - computed: true, optional: false, required: false
  public get checkingCode() {
    return this.getStringAttribute('checking_code');
  }

  // force_modify - computed: true, optional: false, required: false
  public get forceModify() {
    return this.getStringAttribute('force_modify');
  }

  // force_restart - computed: true, optional: false, required: false
  public get forceRestart() {
    return this.getStringAttribute('force_restart');
  }

  // parameter_description - computed: true, optional: false, required: false
  public get parameterDescription() {
    return this.getStringAttribute('parameter_description');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAlicloudDbInstancesInstancesParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDbInstancesInstancesParametersOutputReference {
    return new DataAlicloudDbInstancesInstancesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDbInstancesInstances {
}

export function dataAlicloudDbInstancesInstancesToTerraform(struct?: DataAlicloudDbInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDbInstancesInstancesToHclTerraform(struct?: DataAlicloudDbInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDbInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDbInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDbInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // ca_type - computed: true, optional: false, required: false
  public get caType() {
    return this.getStringAttribute('ca_type');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // client_ca_cert - computed: true, optional: false, required: false
  public get clientCaCert() {
    return this.getStringAttribute('client_ca_cert');
  }

  // client_ca_cert_expire_time - computed: true, optional: false, required: false
  public get clientCaCertExpireTime() {
    return this.getStringAttribute('client_ca_cert_expire_time');
  }

  // client_cert_revocation_list - computed: true, optional: false, required: false
  public get clientCertRevocationList() {
    return this.getStringAttribute('client_cert_revocation_list');
  }

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // db_instance_storage_type - computed: true, optional: false, required: false
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }

  // db_instance_type - computed: true, optional: false, required: false
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // delete_date - computed: true, optional: false, required: false
  public get deleteDate() {
    return this.getStringAttribute('delete_date');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // encryption_key_status - computed: true, optional: false, required: false
  public get encryptionKeyStatus() {
    return this.getStringAttribute('encryption_key_status');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // guard_instance_id - computed: true, optional: false, required: false
  public get guardInstanceId() {
    return this.getStringAttribute('guard_instance_id');
  }

  // ha_mode - computed: true, optional: false, required: false
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }

  // host_instance_infos - computed: true, optional: false, required: false
  private _hostInstanceInfos = new DataAlicloudDbInstancesInstancesHostInstanceInfosList(this, "host_instance_infos", false);
  public get hostInstanceInfos() {
    return this._hostInstanceInfos;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_storage - computed: true, optional: false, required: false
  public get instanceStorage() {
    return this.getNumberAttribute('instance_storage');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // last_modify_status - computed: true, optional: false, required: false
  public get lastModifyStatus() {
    return this.getStringAttribute('last_modify_status');
  }

  // master_instance_id - computed: true, optional: false, required: false
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }

  // master_zone - computed: true, optional: false, required: false
  public get masterZone() {
    return this.getStringAttribute('master_zone');
  }

  // material_expire_time - computed: true, optional: false, required: false
  public get materialExpireTime() {
    return this.getStringAttribute('material_expire_time');
  }

  // modify_status_reason - computed: true, optional: false, required: false
  public get modifyStatusReason() {
    return this.getStringAttribute('modify_status_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAlicloudDbInstancesInstancesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // readonly_instance_ids - computed: true, optional: false, required: false
  public get readonlyInstanceIds() {
    return this.getListAttribute('readonly_instance_ids');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // replication_acl - computed: true, optional: false, required: false
  public get replicationAcl() {
    return this.getStringAttribute('replication_acl');
  }

  // require_update - computed: true, optional: false, required: false
  public get requireUpdate() {
    return this.getStringAttribute('require_update');
  }

  // require_update_item - computed: true, optional: false, required: false
  public get requireUpdateItem() {
    return this.getStringAttribute('require_update_item');
  }

  // require_update_reason - computed: true, optional: false, required: false
  public get requireUpdateReason() {
    return this.getStringAttribute('require_update_reason');
  }

  // server_ca_url - computed: true, optional: false, required: false
  public get serverCaUrl() {
    return this.getStringAttribute('server_ca_url');
  }

  // server_cert - computed: true, optional: false, required: false
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }

  // server_key - computed: true, optional: false, required: false
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }

  // ssl_create_time - computed: true, optional: false, required: false
  public get sslCreateTime() {
    return this.getStringAttribute('ssl_create_time');
  }

  // ssl_enabled - computed: true, optional: false, required: false
  public get sslEnabled() {
    return this.getStringAttribute('ssl_enabled');
  }

  // ssl_expire_time - computed: true, optional: false, required: false
  public get sslExpireTime() {
    return this.getStringAttribute('ssl_expire_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }

  // temp_instance_id - computed: true, optional: false, required: false
  public get tempInstanceId() {
    return this.getStringAttribute('temp_instance_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // zone_id_slave_a - computed: true, optional: false, required: false
  public get zoneIdSlaveA() {
    return this.getStringAttribute('zone_id_slave_a');
  }

  // zone_id_slave_b - computed: true, optional: false, required: false
  public get zoneIdSlaveB() {
    return this.getStringAttribute('zone_id_slave_b');
  }
}

export class DataAlicloudDbInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDbInstancesInstancesOutputReference {
    return new DataAlicloudDbInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances alicloud_db_instances}
*/
export class DataAlicloudDbInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_db_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDbInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDbInstances to import
  * @param importFromId The id of the existing DataAlicloudDbInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDbInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_db_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/db_instances alicloud_db_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDbInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDbInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_db_instances',
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
    this._connectionMode = config.connectionMode;
    this._dbType = config.dbType;
    this._enableDetails = config.enableDetails;
    this._engine = config.engine;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._status = config.status;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // db_type - computed: false, optional: true, required: false
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  public resetDbType() {
    this._dbType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

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

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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
  private _instances = new DataAlicloudDbInstancesInstancesList(this, "instances", false);
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

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      db_type: cdktf.stringToTerraform(this._dbType),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      engine: cdktf.stringToTerraform(this._engine),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_mode: {
        value: cdktf.stringToHclTerraform(this._connectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
