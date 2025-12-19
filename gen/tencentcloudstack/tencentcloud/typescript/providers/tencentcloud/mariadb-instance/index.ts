// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic renewal flag, 1: automatic renewal, 2: no automatic renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#auto_renew_flag MariadbInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Whether to automatically use the voucher for payment, the default is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#auto_voucher MariadbInstance#auto_voucher}
  */
  readonly autoVoucher?: boolean | cdktf.IResolvable;
  /**
  * Database engine version, currently available: 8.0.18, 10.1.9, 5.7.17. If not passed, the default is Percona 5.7.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#db_version_id MariadbInstance#db_version_id}
  */
  readonly dbVersionId?: string;
  /**
  * DCN source instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#dcn_instance_id MariadbInstance#dcn_instance_id}
  */
  readonly dcnInstanceId?: string;
  /**
  * DCN source region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#dcn_region MariadbInstance#dcn_region}
  */
  readonly dcnRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#id MariadbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name, you can set the name of the instance independently through this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#instance_name MariadbInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Whether IPv6 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#ipv6_flag MariadbInstance#ipv6_flag}
  */
  readonly ipv6Flag?: number;
  /**
  * Memory size, unit: GB, can be obtained by querying instance specifications through DescribeDBInstanceSpecs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#memory MariadbInstance#memory}
  */
  readonly memory: number;
  /**
  * Number of nodes, 2 is one master and one slave, 3 is one master and two slaves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#node_count MariadbInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * The duration of the purchase, unit: month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#period MariadbInstance#period}
  */
  readonly period?: number;
  /**
  * Project ID, which can be obtained by viewing the project list, if not passed, it will be associated with the default project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#project_id MariadbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Security group ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#security_group_ids MariadbInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Storage size, unit: GB. You can query instance specifications through DescribeDBInstanceSpecs to obtain the lower and upper limits of disk specifications corresponding to different memory sizes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#storage MariadbInstance#storage}
  */
  readonly storage: number;
  /**
  * Virtual private network subnet ID, required when VpcId is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#subnet_id MariadbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tag list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#tags MariadbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Intranet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#vip MariadbInstance#vip}
  */
  readonly vip?: string;
  /**
  * A list of voucher IDs. Currently, only one voucher can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#voucher_ids MariadbInstance#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * Virtual private network ID, if not passed, it means that it is created as a basic network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#vpc_id MariadbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Instance node availability zone distribution, up to two availability zones can be filled. When the shard specification is one master and two slaves, two of the nodes are in the first availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#zones MariadbInstance#zones}
  */
  readonly zones: string[];
  /**
  * init_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#init_params MariadbInstance#init_params}
  */
  readonly initParams?: MariadbInstanceInitParams[] | cdktf.IResolvable;
}
export interface MariadbInstanceInitParams {
  /**
  * parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#param MariadbInstance#param}
  */
  readonly param: string;
  /**
  * parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#value MariadbInstance#value}
  */
  readonly value: string;
}

export function mariadbInstanceInitParamsToTerraform(struct?: MariadbInstanceInitParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param: cdktf.stringToTerraform(struct!.param),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mariadbInstanceInitParamsToHclTerraform(struct?: MariadbInstanceInitParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param: {
      value: cdktf.stringToHclTerraform(struct!.param),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MariadbInstanceInitParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbInstanceInitParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._param !== undefined) {
      hasAnyValues = true;
      internalValueResult.param = this._param;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbInstanceInitParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._param = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._param = value.param;
      this._value = value.value;
    }
  }

  // param - computed: false, optional: false, required: true
  private _param?: string; 
  public get param() {
    return this.getStringAttribute('param');
  }
  public set param(value: string) {
    this._param = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MariadbInstanceInitParamsList extends cdktf.ComplexList {
  public internalValue? : MariadbInstanceInitParams[] | cdktf.IResolvable

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
  public get(index: number): MariadbInstanceInitParamsOutputReference {
    return new MariadbInstanceInitParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance tencentcloud_mariadb_instance}
*/
export class MariadbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbInstance to import
  * @param importFromId The id of the existing MariadbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mariadb_instance tencentcloud_mariadb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._autoVoucher = config.autoVoucher;
    this._dbVersionId = config.dbVersionId;
    this._dcnInstanceId = config.dcnInstanceId;
    this._dcnRegion = config.dcnRegion;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ipv6Flag = config.ipv6Flag;
    this._memory = config.memory;
    this._nodeCount = config.nodeCount;
    this._period = config.period;
    this._projectId = config.projectId;
    this._securityGroupIds = config.securityGroupIds;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vip = config.vip;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
    this._zones = config.zones;
    this._initParams.internalValue = config.initParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // auto_renew_flag - computed: true, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // auto_voucher - computed: false, optional: true, required: false
  private _autoVoucher?: boolean | cdktf.IResolvable; 
  public get autoVoucher() {
    return this.getBooleanAttribute('auto_voucher');
  }
  public set autoVoucher(value: boolean | cdktf.IResolvable) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_engine - computed: true, optional: false, required: false
  public get dbEngine() {
    return this.getStringAttribute('db_engine');
  }

  // db_version_id - computed: true, optional: true, required: false
  private _dbVersionId?: string; 
  public get dbVersionId() {
    return this.getStringAttribute('db_version_id');
  }
  public set dbVersionId(value: string) {
    this._dbVersionId = value;
  }
  public resetDbVersionId() {
    this._dbVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionIdInput() {
    return this._dbVersionId;
  }

  // dcn_dst_num - computed: true, optional: false, required: false
  public get dcnDstNum() {
    return this.getNumberAttribute('dcn_dst_num');
  }

  // dcn_flag - computed: true, optional: false, required: false
  public get dcnFlag() {
    return this.getNumberAttribute('dcn_flag');
  }

  // dcn_instance_id - computed: false, optional: true, required: false
  private _dcnInstanceId?: string; 
  public get dcnInstanceId() {
    return this.getStringAttribute('dcn_instance_id');
  }
  public set dcnInstanceId(value: string) {
    this._dcnInstanceId = value;
  }
  public resetDcnInstanceId() {
    this._dcnInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcnInstanceIdInput() {
    return this._dcnInstanceId;
  }

  // dcn_region - computed: false, optional: true, required: false
  private _dcnRegion?: string; 
  public get dcnRegion() {
    return this.getStringAttribute('dcn_region');
  }
  public set dcnRegion(value: string) {
    this._dcnRegion = value;
  }
  public resetDcnRegion() {
    this._dcnRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcnRegionInput() {
    return this._dcnRegion;
  }

  // dcn_status - computed: true, optional: false, required: false
  public get dcnStatus() {
    return this.getNumberAttribute('dcn_status');
  }

  // excluster_id - computed: true, optional: false, required: false
  public get exclusterId() {
    return this.getStringAttribute('excluster_id');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: true, required: false
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

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }

  // ipv6_flag - computed: true, optional: true, required: false
  private _ipv6Flag?: number; 
  public get ipv6Flag() {
    return this.getNumberAttribute('ipv6_flag');
  }
  public set ipv6Flag(value: number) {
    this._ipv6Flag = value;
  }
  public resetIpv6Flag() {
    this._ipv6Flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FlagInput() {
    return this._ipv6Flag;
  }

  // is_audit_supported - computed: true, optional: false, required: false
  public get isAuditSupported() {
    return this.getNumberAttribute('is_audit_supported');
  }

  // is_encrypt_supported - computed: true, optional: false, required: false
  public get isEncryptSupported() {
    return this.getNumberAttribute('is_encrypt_supported');
  }

  // is_tmp - computed: true, optional: false, required: false
  public get isTmp() {
    return this.getNumberAttribute('is_tmp');
  }

  // locker - computed: true, optional: false, required: false
  public get locker() {
    return this.getNumberAttribute('locker');
  }

  // machine - computed: true, optional: false, required: false
  public get machine() {
    return this.getStringAttribute('machine');
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // paymode - computed: true, optional: false, required: false
  public get paymode() {
    return this.getStringAttribute('paymode');
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_end_time - computed: true, optional: false, required: false
  public get periodEndTime() {
    return this.getStringAttribute('period_end_time');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getNumberAttribute('qps');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // tdsql_version - computed: true, optional: false, required: false
  public get tdsqlVersion() {
    return this.getStringAttribute('tdsql_version');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vip - computed: true, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vipv6 - computed: true, optional: false, required: false
  public get vipv6() {
    return this.getStringAttribute('vipv6');
  }

  // voucher_ids - computed: false, optional: true, required: false
  private _voucherIds?: string[]; 
  public get voucherIds() {
    return cdktf.Fn.tolist(this.getListAttribute('voucher_ids'));
  }
  public set voucherIds(value: string[]) {
    this._voucherIds = value;
  }
  public resetVoucherIds() {
    this._voucherIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voucherIdsInput() {
    return this._voucherIds;
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }

  // wan_domain - computed: true, optional: false, required: false
  public get wanDomain() {
    return this.getStringAttribute('wan_domain');
  }

  // wan_port - computed: true, optional: false, required: false
  public get wanPort() {
    return this.getNumberAttribute('wan_port');
  }

  // wan_port_ipv6 - computed: true, optional: false, required: false
  public get wanPortIpv6() {
    return this.getNumberAttribute('wan_port_ipv6');
  }

  // wan_status - computed: true, optional: false, required: false
  public get wanStatus() {
    return this.getNumberAttribute('wan_status');
  }

  // wan_status_ipv6 - computed: true, optional: false, required: false
  public get wanStatusIpv6() {
    return this.getNumberAttribute('wan_status_ipv6');
  }

  // wan_vip - computed: true, optional: false, required: false
  public get wanVip() {
    return this.getStringAttribute('wan_vip');
  }

  // wan_vipv6 - computed: true, optional: false, required: false
  public get wanVipv6() {
    return this.getStringAttribute('wan_vipv6');
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // init_params - computed: false, optional: true, required: false
  private _initParams = new MariadbInstanceInitParamsList(this, "init_params", false);
  public get initParams() {
    return this._initParams;
  }
  public putInitParams(value: MariadbInstanceInitParams[] | cdktf.IResolvable) {
    this._initParams.internalValue = value;
  }
  public resetInitParams() {
    this._initParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initParamsInput() {
    return this._initParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      auto_voucher: cdktf.booleanToTerraform(this._autoVoucher),
      db_version_id: cdktf.stringToTerraform(this._dbVersionId),
      dcn_instance_id: cdktf.stringToTerraform(this._dcnInstanceId),
      dcn_region: cdktf.stringToTerraform(this._dcnRegion),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ipv6_flag: cdktf.numberToTerraform(this._ipv6Flag),
      memory: cdktf.numberToTerraform(this._memory),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vip: cdktf.stringToTerraform(this._vip),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      init_params: cdktf.listMapper(mariadbInstanceInitParamsToTerraform, true)(this._initParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_voucher: {
        value: cdktf.booleanToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_version_id: {
        value: cdktf.stringToHclTerraform(this._dbVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcn_instance_id: {
        value: cdktf.stringToHclTerraform(this._dcnInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcn_region: {
        value: cdktf.stringToHclTerraform(this._dcnRegion),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_flag: {
        value: cdktf.numberToHclTerraform(this._ipv6Flag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voucher_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._voucherIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      init_params: {
        value: cdktf.listMapperHcl(mariadbInstanceInitParamsToHclTerraform, true)(this._initParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MariadbInstanceInitParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
