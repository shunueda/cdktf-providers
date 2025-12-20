// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMysqlInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pay type of instance, valid values are `PREPAID` and `POSTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#charge_type DataTencentcloudMysqlInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * The version number of the database engine to use. Supported versions include 5.5/5.6/5.7/8.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#engine_version DataTencentcloudMysqlInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#id DataTencentcloudMysqlInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initialization mark. Available values: `0` - Uninitialized; `1` - Initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#init_flag DataTencentcloudMysqlInstance#init_flag}
  */
  readonly initFlag?: number;
  /**
  * Name of mysql instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#instance_name DataTencentcloudMysqlInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Instance type. Supported values include: `master` - master instance, `dr` - disaster recovery instance, and `ro` - read-only instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#instance_role DataTencentcloudMysqlInstance#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * Number of results returned for a single request. Default is `20`, and maximum is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#limit DataTencentcloudMysqlInstance#limit}
  */
  readonly limit?: number;
  /**
  * Instance ID, such as `cdb-c1nl9rpv`. It is identical to the instance ID displayed in the database console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#mysql_id DataTencentcloudMysqlInstance#mysql_id}
  */
  readonly mysqlId?: string;
  /**
  * Record offset. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#offset DataTencentcloudMysqlInstance#offset}
  */
  readonly offset?: number;
  /**
  * Pay type of instance, `0`: prepay, `1`: postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#pay_type DataTencentcloudMysqlInstance#pay_type}
  */
  readonly payType?: number;
  /**
  * Used to store results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#result_output_file DataTencentcloudMysqlInstance#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Security groups ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#security_group_id DataTencentcloudMysqlInstance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Instance status. Available values: `0` - Creating; `1` - Running; `4` - Isolating; `5` - Isolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#status DataTencentcloudMysqlInstance#status}
  */
  readonly status?: number;
  /**
  * Indicates whether to query disaster recovery instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#with_dr DataTencentcloudMysqlInstance#with_dr}
  */
  readonly withDr?: number;
  /**
  * Indicates whether to query master instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#with_master DataTencentcloudMysqlInstance#with_master}
  */
  readonly withMaster?: number;
  /**
  * Indicates whether to query read-only instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#with_ro DataTencentcloudMysqlInstance#with_ro}
  */
  readonly withRo?: number;
}
export interface DataTencentcloudMysqlInstanceInstanceListRoGroups {
}

export function dataTencentcloudMysqlInstanceInstanceListRoGroupsToTerraform(struct?: DataTencentcloudMysqlInstanceInstanceListRoGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMysqlInstanceInstanceListRoGroupsToHclTerraform(struct?: DataTencentcloudMysqlInstanceInstanceListRoGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMysqlInstanceInstanceListRoGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMysqlInstanceInstanceListRoGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMysqlInstanceInstanceListRoGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
}

export class DataTencentcloudMysqlInstanceInstanceListRoGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMysqlInstanceInstanceListRoGroupsOutputReference {
    return new DataTencentcloudMysqlInstanceInstanceListRoGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMysqlInstanceInstanceListStruct {
}

export function dataTencentcloudMysqlInstanceInstanceListStructToTerraform(struct?: DataTencentcloudMysqlInstanceInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMysqlInstanceInstanceListStructToHclTerraform(struct?: DataTencentcloudMysqlInstanceInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMysqlInstanceInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMysqlInstanceInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMysqlInstanceInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_renew_flag - computed: true, optional: false, required: false
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dead_line_time - computed: true, optional: false, required: false
  public get deadLineTime() {
    return this.getStringAttribute('dead_line_time');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // dr_instance_ids - computed: true, optional: false, required: false
  public get drInstanceIds() {
    return this.getListAttribute('dr_instance_ids');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // init_flag - computed: true, optional: false, required: false
  public get initFlag() {
    return this.getNumberAttribute('init_flag');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_role - computed: true, optional: false, required: false
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }

  // internet_host - computed: true, optional: false, required: false
  public get internetHost() {
    return this.getStringAttribute('internet_host');
  }

  // internet_port - computed: true, optional: false, required: false
  public get internetPort() {
    return this.getNumberAttribute('internet_port');
  }

  // internet_status - computed: true, optional: false, required: false
  public get internetStatus() {
    return this.getNumberAttribute('internet_status');
  }

  // intranet_ip - computed: true, optional: false, required: false
  public get intranetIp() {
    return this.getStringAttribute('intranet_ip');
  }

  // intranet_port - computed: true, optional: false, required: false
  public get intranetPort() {
    return this.getNumberAttribute('intranet_port');
  }

  // master_instance_id - computed: true, optional: false, required: false
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // mysql_id - computed: true, optional: false, required: false
  public get mysqlId() {
    return this.getStringAttribute('mysql_id');
  }

  // pay_type - computed: true, optional: false, required: false
  public get payType() {
    return this.getNumberAttribute('pay_type');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // ro_groups - computed: true, optional: false, required: false
  private _roGroups = new DataTencentcloudMysqlInstanceInstanceListRoGroupsList(this, "ro_groups", false);
  public get roGroups() {
    return this._roGroups;
  }

  // ro_instance_ids - computed: true, optional: false, required: false
  public get roInstanceIds() {
    return this.getListAttribute('ro_instance_ids');
  }

  // slave_sync_mode - computed: true, optional: false, required: false
  public get slaveSyncMode() {
    return this.getNumberAttribute('slave_sync_mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudMysqlInstanceInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMysqlInstanceInstanceListStructOutputReference {
    return new DataTencentcloudMysqlInstanceInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance tencentcloud_mysql_instance}
*/
export class DataTencentcloudMysqlInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMysqlInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMysqlInstance to import
  * @param importFromId The id of the existing DataTencentcloudMysqlInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMysqlInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_instance tencentcloud_mysql_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMysqlInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMysqlInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chargeType = config.chargeType;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._initFlag = config.initFlag;
    this._instanceName = config.instanceName;
    this._instanceRole = config.instanceRole;
    this._limit = config.limit;
    this._mysqlId = config.mysqlId;
    this._offset = config.offset;
    this._payType = config.payType;
    this._resultOutputFile = config.resultOutputFile;
    this._securityGroupId = config.securityGroupId;
    this._status = config.status;
    this._withDr = config.withDr;
    this._withMaster = config.withMaster;
    this._withRo = config.withRo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
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

  // init_flag - computed: false, optional: true, required: false
  private _initFlag?: number; 
  public get initFlag() {
    return this.getNumberAttribute('init_flag');
  }
  public set initFlag(value: number) {
    this._initFlag = value;
  }
  public resetInitFlag() {
    this._initFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initFlagInput() {
    return this._initFlag;
  }

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudMysqlInstanceInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_role - computed: false, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // mysql_id - computed: false, optional: true, required: false
  private _mysqlId?: string; 
  public get mysqlId() {
    return this.getStringAttribute('mysql_id');
  }
  public set mysqlId(value: string) {
    this._mysqlId = value;
  }
  public resetMysqlId() {
    this._mysqlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlIdInput() {
    return this._mysqlId;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: number; 
  public get payType() {
    return this.getNumberAttribute('pay_type');
  }
  public set payType(value: number) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
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

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // with_dr - computed: false, optional: true, required: false
  private _withDr?: number; 
  public get withDr() {
    return this.getNumberAttribute('with_dr');
  }
  public set withDr(value: number) {
    this._withDr = value;
  }
  public resetWithDr() {
    this._withDr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDrInput() {
    return this._withDr;
  }

  // with_master - computed: false, optional: true, required: false
  private _withMaster?: number; 
  public get withMaster() {
    return this.getNumberAttribute('with_master');
  }
  public set withMaster(value: number) {
    this._withMaster = value;
  }
  public resetWithMaster() {
    this._withMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withMasterInput() {
    return this._withMaster;
  }

  // with_ro - computed: false, optional: true, required: false
  private _withRo?: number; 
  public get withRo() {
    return this.getNumberAttribute('with_ro');
  }
  public set withRo(value: number) {
    this._withRo = value;
  }
  public resetWithRo() {
    this._withRo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withRoInput() {
    return this._withRo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charge_type: cdktf.stringToTerraform(this._chargeType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      init_flag: cdktf.numberToTerraform(this._initFlag),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_role: cdktf.stringToTerraform(this._instanceRole),
      limit: cdktf.numberToTerraform(this._limit),
      mysql_id: cdktf.stringToTerraform(this._mysqlId),
      offset: cdktf.numberToTerraform(this._offset),
      pay_type: cdktf.numberToTerraform(this._payType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      status: cdktf.numberToTerraform(this._status),
      with_dr: cdktf.numberToTerraform(this._withDr),
      with_master: cdktf.numberToTerraform(this._withMaster),
      with_ro: cdktf.numberToTerraform(this._withRo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
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
      init_flag: {
        value: cdktf.numberToHclTerraform(this._initFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_role: {
        value: cdktf.stringToHclTerraform(this._instanceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysql_id: {
        value: cdktf.stringToHclTerraform(this._mysqlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_type: {
        value: cdktf.numberToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      with_dr: {
        value: cdktf.numberToHclTerraform(this._withDr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      with_master: {
        value: cdktf.numberToHclTerraform(this._withMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      with_ro: {
        value: cdktf.numberToHclTerraform(this._withRo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
