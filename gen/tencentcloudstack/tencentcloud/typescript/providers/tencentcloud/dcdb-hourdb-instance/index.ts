// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcdbHourdbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * db engine version, default to Percona 5.7.17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#db_version_id DcdbHourdbInstance#db_version_id}
  */
  readonly dbVersionId?: string;
  /**
  * DCN source instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#dcn_instance_id DcdbHourdbInstance#dcn_instance_id}
  */
  readonly dcnInstanceId?: string;
  /**
  * DCN source region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#dcn_region DcdbHourdbInstance#dcn_region}
  */
  readonly dcnRegion?: string;
  /**
  * Whether to open the extranet access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#extranet_access DcdbHourdbInstance#extranet_access}
  */
  readonly extranetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#id DcdbHourdbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#instance_name DcdbHourdbInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Whether to support IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#ipv6_flag DcdbHourdbInstance#ipv6_flag}
  */
  readonly ipv6Flag?: number;
  /**
  * project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#project_id DcdbHourdbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * security group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#security_group_id DcdbHourdbInstance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * instance shard count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#shard_count DcdbHourdbInstance#shard_count}
  */
  readonly shardCount: number;
  /**
  * memory(GB) for each shard. It can be obtained by querying api DescribeShardSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#shard_memory DcdbHourdbInstance#shard_memory}
  */
  readonly shardMemory: number;
  /**
  * node count for each shard. It can be obtained by querying api DescribeShardSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#shard_node_count DcdbHourdbInstance#shard_node_count}
  */
  readonly shardNodeCount: number;
  /**
  * storage(GB) for each shard. It can be obtained by querying api DescribeShardSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#shard_storage DcdbHourdbInstance#shard_storage}
  */
  readonly shardStorage: number;
  /**
  * subnet id, its required when vpcId is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#subnet_id DcdbHourdbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The field is required to specify VIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#vip DcdbHourdbInstance#vip}
  */
  readonly vip?: string;
  /**
  * The field is required to specify VIPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#vipv6 DcdbHourdbInstance#vipv6}
  */
  readonly vipv6?: string;
  /**
  * vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#vpc_id DcdbHourdbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * available zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#zones DcdbHourdbInstance#zones}
  */
  readonly zones?: string[];
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#resource_tags DcdbHourdbInstance#resource_tags}
  */
  readonly resourceTags?: DcdbHourdbInstanceResourceTags[] | cdktf.IResolvable;
}
export interface DcdbHourdbInstanceResourceTags {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#tag_key DcdbHourdbInstance#tag_key}
  */
  readonly tagKey: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#tag_value DcdbHourdbInstance#tag_value}
  */
  readonly tagValue: string;
}

export function dcdbHourdbInstanceResourceTagsToTerraform(struct?: DcdbHourdbInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dcdbHourdbInstanceResourceTagsToHclTerraform(struct?: DcdbHourdbInstanceResourceTags | cdktf.IResolvable): any {
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

export class DcdbHourdbInstanceResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcdbHourdbInstanceResourceTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DcdbHourdbInstanceResourceTags | cdktf.IResolvable | undefined) {
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

export class DcdbHourdbInstanceResourceTagsList extends cdktf.ComplexList {
  public internalValue? : DcdbHourdbInstanceResourceTags[] | cdktf.IResolvable

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
  public get(index: number): DcdbHourdbInstanceResourceTagsOutputReference {
    return new DcdbHourdbInstanceResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance tencentcloud_dcdb_hourdb_instance}
*/
export class DcdbHourdbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcdb_hourdb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcdbHourdbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcdbHourdbInstance to import
  * @param importFromId The id of the existing DcdbHourdbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcdbHourdbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcdb_hourdb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dcdb_hourdb_instance tencentcloud_dcdb_hourdb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcdbHourdbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DcdbHourdbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcdb_hourdb_instance',
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
    this._dbVersionId = config.dbVersionId;
    this._dcnInstanceId = config.dcnInstanceId;
    this._dcnRegion = config.dcnRegion;
    this._extranetAccess = config.extranetAccess;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ipv6Flag = config.ipv6Flag;
    this._projectId = config.projectId;
    this._securityGroupId = config.securityGroupId;
    this._shardCount = config.shardCount;
    this._shardMemory = config.shardMemory;
    this._shardNodeCount = config.shardNodeCount;
    this._shardStorage = config.shardStorage;
    this._subnetId = config.subnetId;
    this._vip = config.vip;
    this._vipv6 = config.vipv6;
    this._vpcId = config.vpcId;
    this._zones = config.zones;
    this._resourceTags.internalValue = config.resourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new DcdbHourdbInstanceResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: DcdbHourdbInstanceResourceTags[] | cdktf.IResolvable) {
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
      db_version_id: cdktf.stringToTerraform(this._dbVersionId),
      dcn_instance_id: cdktf.stringToTerraform(this._dcnInstanceId),
      dcn_region: cdktf.stringToTerraform(this._dcnRegion),
      extranet_access: cdktf.booleanToTerraform(this._extranetAccess),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ipv6_flag: cdktf.numberToTerraform(this._ipv6Flag),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      shard_memory: cdktf.numberToTerraform(this._shardMemory),
      shard_node_count: cdktf.numberToTerraform(this._shardNodeCount),
      shard_storage: cdktf.numberToTerraform(this._shardStorage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vip: cdktf.stringToTerraform(this._vip),
      vipv6: cdktf.stringToTerraform(this._vipv6),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      resource_tags: cdktf.listMapper(dcdbHourdbInstanceResourceTagsToTerraform, true)(this._resourceTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      resource_tags: {
        value: cdktf.listMapperHcl(dcdbHourdbInstanceResourceTagsToHclTerraform, true)(this._resourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdbHourdbInstanceResourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
