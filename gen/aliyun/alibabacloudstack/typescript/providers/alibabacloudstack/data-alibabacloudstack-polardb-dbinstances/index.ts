// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbDbinstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#db_instance_class DataAlibabacloudstackPolardbDbinstances#db_instance_class}
  */
  readonly dbInstanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#db_instance_id DataAlibabacloudstackPolardbDbinstances#db_instance_id}
  */
  readonly dbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#db_instance_type DataAlibabacloudstackPolardbDbinstances#db_instance_type}
  */
  readonly dbInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#engine DataAlibabacloudstackPolardbDbinstances#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#engine_version DataAlibabacloudstackPolardbDbinstances#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#id DataAlibabacloudstackPolardbDbinstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#ids DataAlibabacloudstackPolardbDbinstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#network_type DataAlibabacloudstackPolardbDbinstances#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#output_file DataAlibabacloudstackPolardbDbinstances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#payment_type DataAlibabacloudstackPolardbDbinstances#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#region_id DataAlibabacloudstackPolardbDbinstances#region_id}
  */
  readonly regionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#resource_group_id DataAlibabacloudstackPolardbDbinstances#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#status DataAlibabacloudstackPolardbDbinstances#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#vpc_id DataAlibabacloudstackPolardbDbinstances#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#vswitch_id DataAlibabacloudstackPolardbDbinstances#vswitch_id}
  */
  readonly vswitchId?: string;
}
export interface DataAlibabacloudstackPolardbDbinstancesDbInstancesTags {
}

export function dataAlibabacloudstackPolardbDbinstancesDbInstancesTagsToTerraform(struct?: DataAlibabacloudstackPolardbDbinstancesDbInstancesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbDbinstancesDbInstancesTagsToHclTerraform(struct?: DataAlibabacloudstackPolardbDbinstancesDbInstancesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbDbinstancesDbInstancesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbDbinstancesDbInstancesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbDbinstancesDbInstancesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataAlibabacloudstackPolardbDbinstancesDbInstancesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbDbinstancesDbInstancesTagsOutputReference {
    return new DataAlibabacloudstackPolardbDbinstancesDbInstancesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackPolardbDbinstancesDbInstances {
}

export function dataAlibabacloudstackPolardbDbinstancesDbInstancesToTerraform(struct?: DataAlibabacloudstackPolardbDbinstancesDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbDbinstancesDbInstancesToHclTerraform(struct?: DataAlibabacloudstackPolardbDbinstancesDbInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbDbinstancesDbInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbDbinstancesDbInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbDbinstancesDbInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_pay - computed: true, optional: false, required: false
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }

  // auto_renew - computed: true, optional: false, required: false
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }

  // auto_upgrade_minor_version - computed: true, optional: false, required: false
  public get autoUpgradeMinorVersion() {
    return this.getStringAttribute('auto_upgrade_minor_version');
  }

  // business_info - computed: true, optional: false, required: false
  public get businessInfo() {
    return this.getStringAttribute('business_info');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // classic_expired_days - computed: true, optional: false, required: false
  public get classicExpiredDays() {
    return this.getNumberAttribute('classic_expired_days');
  }

  // commodity_code - computed: true, optional: false, required: false
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }

  // connection_string_prefix - computed: true, optional: false, required: false
  public get connectionStringPrefix() {
    return this.getStringAttribute('connection_string_prefix');
  }

  // connection_string_type - computed: true, optional: false, required: false
  public get connectionStringType() {
    return this.getStringAttribute('connection_string_type');
  }

  // current_connection_string - computed: true, optional: false, required: false
  public get currentConnectionString() {
    return this.getStringAttribute('current_connection_string');
  }

  // db_instance_class - computed: true, optional: false, required: false
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }

  // db_instance_description - computed: true, optional: false, required: false
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // db_instance_net_type - computed: true, optional: false, required: false
  public get dbInstanceNetType() {
    return this.getStringAttribute('db_instance_net_type');
  }

  // db_instance_storage - computed: true, optional: false, required: false
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }

  // db_instance_storage_type - computed: true, optional: false, required: false
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }

  // db_instance_type - computed: true, optional: false, required: false
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }

  // distribution_type - computed: true, optional: false, required: false
  public get distributionType() {
    return this.getStringAttribute('distribution_type');
  }

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
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

  // guard_db_instance_id - computed: true, optional: false, required: false
  public get guardDbInstanceId() {
    return this.getStringAttribute('guard_db_instance_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_mode - computed: true, optional: false, required: false
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }

  // lock_reason - computed: true, optional: false, required: false
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }

  // maintain_time - computed: true, optional: false, required: false
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }

  // master_instance_id - computed: true, optional: false, required: false
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }

  // max_delay_time - computed: true, optional: false, required: false
  public get maxDelayTime() {
    return this.getStringAttribute('max_delay_time');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // read_write_splitting_classic_expired_days - computed: true, optional: false, required: false
  public get readWriteSplittingClassicExpiredDays() {
    return this.getNumberAttribute('read_write_splitting_classic_expired_days');
  }

  // read_write_splitting_private_ip_address - computed: true, optional: false, required: false
  public get readWriteSplittingPrivateIpAddress() {
    return this.getStringAttribute('read_write_splitting_private_ip_address');
  }

  // record_total - computed: true, optional: false, required: false
  public get recordTotal() {
    return this.getNumberAttribute('record_total');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // retain_classic - computed: true, optional: false, required: false
  public get retainClassic() {
    return this.getStringAttribute('retain_classic');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // security_ip_list - computed: true, optional: false, required: false
  public get securityIpList() {
    return this.getStringAttribute('security_ip_list');
  }

  // security_ip_mode - computed: true, optional: false, required: false
  public get securityIpMode() {
    return this.getStringAttribute('security_ip_mode');
  }

  // sql_collector_status - computed: true, optional: false, required: false
  public get sqlCollectorStatus() {
    return this.getStringAttribute('sql_collector_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_meta - computed: true, optional: false, required: false
  public get tableMeta() {
    return this.getStringAttribute('table_meta');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAlibabacloudstackPolardbDbinstancesDbInstancesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // temp_db_instance_id - computed: true, optional: false, required: false
  public get tempDbInstanceId() {
    return this.getStringAttribute('temp_db_instance_id');
  }

  // used_time - computed: true, optional: false, required: false
  public get usedTime() {
    return this.getStringAttribute('used_time');
  }

  // vpc_cloud_instance_id - computed: true, optional: false, required: false
  public get vpcCloudInstanceId() {
    return this.getStringAttribute('vpc_cloud_instance_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }

  // zone_id_slave_one - computed: true, optional: false, required: false
  public get zoneIdSlaveOne() {
    return this.getStringAttribute('zone_id_slave_one');
  }

  // zone_id_slave_two - computed: true, optional: false, required: false
  public get zoneIdSlaveTwo() {
    return this.getStringAttribute('zone_id_slave_two');
  }
}

export class DataAlibabacloudstackPolardbDbinstancesDbInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbDbinstancesDbInstancesOutputReference {
    return new DataAlibabacloudstackPolardbDbinstancesDbInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances alibabacloudstack_polardb_dbinstances}
*/
export class DataAlibabacloudstackPolardbDbinstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_dbinstances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbDbinstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbDbinstances to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbDbinstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbDbinstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_dbinstances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardb_dbinstances alibabacloudstack_polardb_dbinstances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbDbinstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbDbinstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_dbinstances',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceId = config.dbInstanceId;
    this._dbInstanceType = config.dbInstanceType;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._ids = config.ids;
    this._networkType = config.networkType;
    this._outputFile = config.outputFile;
    this._paymentType = config.paymentType;
    this._regionId = config.regionId;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_class - computed: false, optional: true, required: false
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  public resetDbInstanceClass() {
    this._dbInstanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_id - computed: false, optional: true, required: false
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  public resetDbInstanceId() {
    this._dbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // db_instance_type - computed: false, optional: true, required: false
  private _dbInstanceType?: string; 
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }
  public set dbInstanceType(value: string) {
    this._dbInstanceType = value;
  }
  public resetDbInstanceType() {
    this._dbInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceTypeInput() {
    return this._dbInstanceType;
  }

  // db_instances - computed: true, optional: false, required: false
  private _dbInstances = new DataAlibabacloudstackPolardbDbinstancesDbInstancesList(this, "db_instances", false);
  public get dbInstances() {
    return this._dbInstances;
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

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // payment_type - computed: false, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      db_instance_type: cdktf.stringToTerraform(this._dbInstanceType),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      network_type: cdktf.stringToTerraform(this._networkType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      region_id: cdktf.stringToTerraform(this._regionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
