// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcdbDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  *  Automatic renewal flag, 0 means the default state (the user has not set it, that is, the initial state is manual renewal, and the user has activated the prepaid non-stop privilege and will also perform automatic renewal).  1 means automatic renewal, 2 means no automatic renewal (user setting).  if the business has no concept of renewal or automatic renewal is not required, it needs to be set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#auto_renew_flag DcdbDbInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Whether to automatically use vouchers for payment, not used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#auto_voucher DcdbDbInstance#auto_voucher}
  */
  readonly autoVoucher?: boolean | cdktf.IResolvable;
  /**
  *  Database engine version, currently available: 8.0.18, 10.1.9, 5.7.17.  8.0.18 - MySQL 8.0.18;  10.1.9 - Mariadb 10.1.9;  5.7.17 - Percona 5.7.17  If not filled, the default is 5.7.17, which means Percona 5.7.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#db_version_id DcdbDbInstance#db_version_id}
  */
  readonly dbVersionId?: string;
  /**
  * DCN source instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#dcn_instance_id DcdbDbInstance#dcn_instance_id}
  */
  readonly dcnInstanceId?: string;
  /**
  * DCN source region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#dcn_region DcdbDbInstance#dcn_region}
  */
  readonly dcnRegion?: string;
  /**
  * Whether to open the extranet access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#extranet_access DcdbDbInstance#extranet_access}
  */
  readonly extranetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#id DcdbDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name, you can set the name of the instance independently through this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#instance_name DcdbDbInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Whether to support IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#ipv6_flag DcdbDbInstance#ipv6_flag}
  */
  readonly ipv6Flag?: number;
  /**
  * The length of time you want to buy, unit: month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#period DcdbDbInstance#period}
  */
  readonly period: number;
  /**
  * Project ID, which can be obtained by viewing the project list, if not passed, it will be associated with the default project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#project_id DcdbDbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Security group ids, the security group can be passed in the form of an array, compatible with the previous SecurityGroupId parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#security_group_ids DcdbDbInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The number of instance fragments, the optional range is 2-8, and new fragments can be added to a maximum of 64 fragments by upgrading the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#shard_count DcdbDbInstance#shard_count}
  */
  readonly shardCount: number;
  /**
  * Shard memory size, unit: GB, can pass DescribeShardSpec Query the instance specification to obtain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#shard_memory DcdbDbInstance#shard_memory}
  */
  readonly shardMemory: number;
  /**
  *  Number of single shard nodes, can pass DescribeShardSpec  Query the instance specification to obtain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#shard_node_count DcdbDbInstance#shard_node_count}
  */
  readonly shardNodeCount: number;
  /**
  *  Shard storage size, unit: GB, can pass DescribeShardSpec  Query the instance specification to obtain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#shard_storage DcdbDbInstance#shard_storage}
  */
  readonly shardStorage: number;
  /**
  * Virtual private network subnet ID, required when VpcId is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#subnet_id DcdbDbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The field is required to specify VIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#vip DcdbDbInstance#vip}
  */
  readonly vip?: string;
  /**
  * The field is required to specify VIPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#vipv6 DcdbDbInstance#vipv6}
  */
  readonly vipv6?: string;
  /**
  * Voucher ID list, currently only supports specifying one voucher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#voucher_ids DcdbDbInstance#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * Virtual private network ID, if not passed or passed empty, it means that it is created as a basic network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#vpc_id DcdbDbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * The availability zone distribution of shard nodes can be filled with up to two availability zones. When the shard specification is one master and two slaves, two of the nodes are in the first availability zone.Note that the current availability zone that can be sold needs to be pulled through the DescribeDCDBSaleInfo interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#zones DcdbDbInstance#zones}
  */
  readonly zones: string[];
  /**
  * init_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#init_params DcdbDbInstance#init_params}
  */
  readonly initParams?: DcdbDbInstanceInitParams[] | cdktf.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#resource_tags DcdbDbInstance#resource_tags}
  */
  readonly resourceTags?: DcdbDbInstanceResourceTags[] | cdktf.IResolvable;
}
export interface DcdbDbInstanceInitParams {
  /**
  * The name of parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#param DcdbDbInstance#param}
  */
  readonly param: string;
  /**
  * The value of parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#value DcdbDbInstance#value}
  */
  readonly value: string;
}

export function dcdbDbInstanceInitParamsToTerraform(struct?: DcdbDbInstanceInitParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param: cdktf.stringToTerraform(struct!.param),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dcdbDbInstanceInitParamsToHclTerraform(struct?: DcdbDbInstanceInitParams | cdktf.IResolvable): any {
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

export class DcdbDbInstanceInitParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcdbDbInstanceInitParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DcdbDbInstanceInitParams | cdktf.IResolvable | undefined) {
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

export class DcdbDbInstanceInitParamsList extends cdktf.ComplexList {
  public internalValue? : DcdbDbInstanceInitParams[] | cdktf.IResolvable

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
  public get(index: number): DcdbDbInstanceInitParamsOutputReference {
    return new DcdbDbInstanceInitParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DcdbDbInstanceResourceTags {
  /**
  * The key of tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#tag_key DcdbDbInstance#tag_key}
  */
  readonly tagKey: string;
  /**
  * The value of tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#tag_value DcdbDbInstance#tag_value}
  */
  readonly tagValue: string;
}

export function dcdbDbInstanceResourceTagsToTerraform(struct?: DcdbDbInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dcdbDbInstanceResourceTagsToHclTerraform(struct?: DcdbDbInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdbDbInstanceResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcdbDbInstanceResourceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdbDbInstanceResourceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DcdbDbInstanceResourceTagsList extends cdktf.ComplexList {
  public internalValue? : DcdbDbInstanceResourceTags[] | cdktf.IResolvable

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
  public get(index: number): DcdbDbInstanceResourceTagsOutputReference {
    return new DcdbDbInstanceResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance tencentcloud_dcdb_db_instance}
*/
export class DcdbDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcdb_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcdbDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcdbDbInstance to import
  * @param importFromId The id of the existing DcdbDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcdbDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcdb_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dcdb_db_instance tencentcloud_dcdb_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcdbDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DcdbDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcdb_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._extranetAccess = config.extranetAccess;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ipv6Flag = config.ipv6Flag;
    this._period = config.period;
    this._projectId = config.projectId;
    this._securityGroupIds = config.securityGroupIds;
    this._shardCount = config.shardCount;
    this._shardMemory = config.shardMemory;
    this._shardNodeCount = config.shardNodeCount;
    this._shardStorage = config.shardStorage;
    this._subnetId = config.subnetId;
    this._vip = config.vip;
    this._vipv6 = config.vipv6;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
    this._zones = config.zones;
    this._initParams.internalValue = config.initParams;
    this._resourceTags.internalValue = config.resourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: true, required: false
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

  // db_version_id - computed: false, optional: true, required: false
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

  // extranet_access - computed: false, optional: true, required: false
  private _extranetAccess?: boolean | cdktf.IResolvable; 
  public get extranetAccess() {
    return this.getBooleanAttribute('extranet_access');
  }
  public set extranetAccess(value: boolean | cdktf.IResolvable) {
    this._extranetAccess = value;
  }
  public resetExtranetAccess() {
    this._extranetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetAccessInput() {
    return this._extranetAccess;
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

  // ipv6_flag - computed: false, optional: true, required: false
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

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // project_id - computed: false, optional: true, required: false
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

  // shard_count - computed: false, optional: false, required: true
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // shard_memory - computed: false, optional: false, required: true
  private _shardMemory?: number; 
  public get shardMemory() {
    return this.getNumberAttribute('shard_memory');
  }
  public set shardMemory(value: number) {
    this._shardMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardMemoryInput() {
    return this._shardMemory;
  }

  // shard_node_count - computed: false, optional: false, required: true
  private _shardNodeCount?: number; 
  public get shardNodeCount() {
    return this.getNumberAttribute('shard_node_count');
  }
  public set shardNodeCount(value: number) {
    this._shardNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNodeCountInput() {
    return this._shardNodeCount;
  }

  // shard_storage - computed: false, optional: false, required: true
  private _shardStorage?: number; 
  public get shardStorage() {
    return this.getNumberAttribute('shard_storage');
  }
  public set shardStorage(value: number) {
    this._shardStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardStorageInput() {
    return this._shardStorage;
  }

  // subnet_id - computed: false, optional: true, required: false
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

  // vipv6 - computed: true, optional: true, required: false
  private _vipv6?: string; 
  public get vipv6() {
    return this.getStringAttribute('vipv6');
  }
  public set vipv6(value: string) {
    this._vipv6 = value;
  }
  public resetVipv6() {
    this._vipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipv6Input() {
    return this._vipv6;
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

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
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
  private _initParams = new DcdbDbInstanceInitParamsList(this, "init_params", false);
  public get initParams() {
    return this._initParams;
  }
  public putInitParams(value: DcdbDbInstanceInitParams[] | cdktf.IResolvable) {
    this._initParams.internalValue = value;
  }
  public resetInitParams() {
    this._initParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initParamsInput() {
    return this._initParams.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new DcdbDbInstanceResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: DcdbDbInstanceResourceTags[] | cdktf.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
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
      extranet_access: cdktf.booleanToTerraform(this._extranetAccess),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ipv6_flag: cdktf.numberToTerraform(this._ipv6Flag),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      shard_memory: cdktf.numberToTerraform(this._shardMemory),
      shard_node_count: cdktf.numberToTerraform(this._shardNodeCount),
      shard_storage: cdktf.numberToTerraform(this._shardStorage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vip: cdktf.stringToTerraform(this._vip),
      vipv6: cdktf.stringToTerraform(this._vipv6),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      init_params: cdktf.listMapper(dcdbDbInstanceInitParamsToTerraform, true)(this._initParams.internalValue),
      resource_tags: cdktf.listMapper(dcdbDbInstanceResourceTagsToTerraform, true)(this._resourceTags.internalValue),
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
      extranet_access: {
        value: cdktf.booleanToHclTerraform(this._extranetAccess),
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
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_memory: {
        value: cdktf.numberToHclTerraform(this._shardMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_node_count: {
        value: cdktf.numberToHclTerraform(this._shardNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_storage: {
        value: cdktf.numberToHclTerraform(this._shardStorage),
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
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vipv6: {
        value: cdktf.stringToHclTerraform(this._vipv6),
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
        value: cdktf.listMapperHcl(dcdbDbInstanceInitParamsToHclTerraform, true)(this._initParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbDbInstanceInitParamsList",
      },
      resource_tags: {
        value: cdktf.listMapperHcl(dcdbDbInstanceResourceTagsToHclTerraform, true)(this._resourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbDbInstanceResourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
