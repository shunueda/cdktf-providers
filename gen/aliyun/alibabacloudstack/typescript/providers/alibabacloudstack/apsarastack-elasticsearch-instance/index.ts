// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackElasticsearchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#action_auto_create_index ApsarastackElasticsearchInstance#action_auto_create_index}
  */
  readonly actionAutoCreateIndex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#action_destructive_requires_name ApsarastackElasticsearchInstance#action_destructive_requires_name}
  */
  readonly actionDestructiveRequiresName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#apack_accesslog_enabled ApsarastackElasticsearchInstance#apack_accesslog_enabled}
  */
  readonly apackAccesslogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#apack_accesslog_search_enabled ApsarastackElasticsearchInstance#apack_accesslog_search_enabled}
  */
  readonly apackAccesslogSearchEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#client_node_amount ApsarastackElasticsearchInstance#client_node_amount}
  */
  readonly clientNodeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#client_node_spec ApsarastackElasticsearchInstance#client_node_spec}
  */
  readonly clientNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#cluster_routing_allocation_disk_watermark_flood_stage ApsarastackElasticsearchInstance#cluster_routing_allocation_disk_watermark_flood_stage}
  */
  readonly clusterRoutingAllocationDiskWatermarkFloodStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#cluster_routing_allocation_disk_watermark_high ApsarastackElasticsearchInstance#cluster_routing_allocation_disk_watermark_high}
  */
  readonly clusterRoutingAllocationDiskWatermarkHigh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#cluster_routing_allocation_disk_watermark_low ApsarastackElasticsearchInstance#cluster_routing_allocation_disk_watermark_low}
  */
  readonly clusterRoutingAllocationDiskWatermarkLow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#cpu_type ApsarastackElasticsearchInstance#cpu_type}
  */
  readonly cpuType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#data_node_affinity ApsarastackElasticsearchInstance#data_node_affinity}
  */
  readonly dataNodeAffinity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#data_node_amount ApsarastackElasticsearchInstance#data_node_amount}
  */
  readonly dataNodeAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#data_node_disk_size ApsarastackElasticsearchInstance#data_node_disk_size}
  */
  readonly dataNodeDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#data_node_disk_type ApsarastackElasticsearchInstance#data_node_disk_type}
  */
  readonly dataNodeDiskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#data_node_spec ApsarastackElasticsearchInstance#data_node_spec}
  */
  readonly dataNodeSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#description ApsarastackElasticsearchInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#id ApsarastackElasticsearchInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#kibana_node_spec ApsarastackElasticsearchInstance#kibana_node_spec}
  */
  readonly kibanaNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#kibana_password ApsarastackElasticsearchInstance#kibana_password}
  */
  readonly kibanaPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#master_node_amount ApsarastackElasticsearchInstance#master_node_amount}
  */
  readonly masterNodeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#master_node_disk_size ApsarastackElasticsearchInstance#master_node_disk_size}
  */
  readonly masterNodeDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#master_node_disk_type ApsarastackElasticsearchInstance#master_node_disk_type}
  */
  readonly masterNodeDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#master_node_spec ApsarastackElasticsearchInstance#master_node_spec}
  */
  readonly masterNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#monitor_password ApsarastackElasticsearchInstance#monitor_password}
  */
  readonly monitorPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#password ApsarastackElasticsearchInstance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#protocol ApsarastackElasticsearchInstance#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#scene ApsarastackElasticsearchInstance#scene}
  */
  readonly scene: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#setting_config ApsarastackElasticsearchInstance#setting_config}
  */
  readonly settingConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#thread_pool_search_queue_size ApsarastackElasticsearchInstance#thread_pool_search_queue_size}
  */
  readonly threadPoolSearchQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#thread_pool_write_queue_size ApsarastackElasticsearchInstance#thread_pool_write_queue_size}
  */
  readonly threadPoolWriteQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#version ApsarastackElasticsearchInstance#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#vswitch_id ApsarastackElasticsearchInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#zone_id ApsarastackElasticsearchInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#timeouts ApsarastackElasticsearchInstance#timeouts}
  */
  readonly timeouts?: ApsarastackElasticsearchInstanceTimeouts;
  /**
  * vpc_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#vpc_whitelist ApsarastackElasticsearchInstance#vpc_whitelist}
  */
  readonly vpcWhitelist?: ApsarastackElasticsearchInstanceVpcWhitelistStruct[] | cdktf.IResolvable;
}
export interface ApsarastackElasticsearchInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#create ApsarastackElasticsearchInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#delete ApsarastackElasticsearchInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#update ApsarastackElasticsearchInstance#update}
  */
  readonly update?: string;
}

export function apsarastackElasticsearchInstanceTimeoutsToTerraform(struct?: ApsarastackElasticsearchInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apsarastackElasticsearchInstanceTimeoutsToHclTerraform(struct?: ApsarastackElasticsearchInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackElasticsearchInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackElasticsearchInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackElasticsearchInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ApsarastackElasticsearchInstanceVpcWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#ips ApsarastackElasticsearchInstance#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#vpc_id ApsarastackElasticsearchInstance#vpc_id}
  */
  readonly vpcId: string;
}

export function apsarastackElasticsearchInstanceVpcWhitelistStructToTerraform(struct?: ApsarastackElasticsearchInstanceVpcWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function apsarastackElasticsearchInstanceVpcWhitelistStructToHclTerraform(struct?: ApsarastackElasticsearchInstanceVpcWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackElasticsearchInstanceVpcWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackElasticsearchInstanceVpcWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackElasticsearchInstanceVpcWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ips = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ips = value.ips;
      this._vpcId = value.vpcId;
    }
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class ApsarastackElasticsearchInstanceVpcWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : ApsarastackElasticsearchInstanceVpcWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackElasticsearchInstanceVpcWhitelistStructOutputReference {
    return new ApsarastackElasticsearchInstanceVpcWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance apsarastack_elasticsearch_instance}
*/
export class ApsarastackElasticsearchInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_elasticsearch_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackElasticsearchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackElasticsearchInstance to import
  * @param importFromId The id of the existing ApsarastackElasticsearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackElasticsearchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_elasticsearch_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_elasticsearch_instance apsarastack_elasticsearch_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackElasticsearchInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackElasticsearchInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_elasticsearch_instance',
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
    this._actionAutoCreateIndex = config.actionAutoCreateIndex;
    this._actionDestructiveRequiresName = config.actionDestructiveRequiresName;
    this._apackAccesslogEnabled = config.apackAccesslogEnabled;
    this._apackAccesslogSearchEnabled = config.apackAccesslogSearchEnabled;
    this._clientNodeAmount = config.clientNodeAmount;
    this._clientNodeSpec = config.clientNodeSpec;
    this._clusterRoutingAllocationDiskWatermarkFloodStage = config.clusterRoutingAllocationDiskWatermarkFloodStage;
    this._clusterRoutingAllocationDiskWatermarkHigh = config.clusterRoutingAllocationDiskWatermarkHigh;
    this._clusterRoutingAllocationDiskWatermarkLow = config.clusterRoutingAllocationDiskWatermarkLow;
    this._cpuType = config.cpuType;
    this._dataNodeAffinity = config.dataNodeAffinity;
    this._dataNodeAmount = config.dataNodeAmount;
    this._dataNodeDiskSize = config.dataNodeDiskSize;
    this._dataNodeDiskType = config.dataNodeDiskType;
    this._dataNodeSpec = config.dataNodeSpec;
    this._description = config.description;
    this._id = config.id;
    this._kibanaNodeSpec = config.kibanaNodeSpec;
    this._kibanaPassword = config.kibanaPassword;
    this._masterNodeAmount = config.masterNodeAmount;
    this._masterNodeDiskSize = config.masterNodeDiskSize;
    this._masterNodeDiskType = config.masterNodeDiskType;
    this._masterNodeSpec = config.masterNodeSpec;
    this._monitorPassword = config.monitorPassword;
    this._password = config.password;
    this._protocol = config.protocol;
    this._scene = config.scene;
    this._settingConfig = config.settingConfig;
    this._threadPoolSearchQueueSize = config.threadPoolSearchQueueSize;
    this._threadPoolWriteQueueSize = config.threadPoolWriteQueueSize;
    this._version = config.version;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
    this._vpcWhitelist.internalValue = config.vpcWhitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_auto_create_index - computed: true, optional: true, required: false
  private _actionAutoCreateIndex?: boolean | cdktf.IResolvable; 
  public get actionAutoCreateIndex() {
    return this.getBooleanAttribute('action_auto_create_index');
  }
  public set actionAutoCreateIndex(value: boolean | cdktf.IResolvable) {
    this._actionAutoCreateIndex = value;
  }
  public resetActionAutoCreateIndex() {
    this._actionAutoCreateIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionAutoCreateIndexInput() {
    return this._actionAutoCreateIndex;
  }

  // action_destructive_requires_name - computed: true, optional: true, required: false
  private _actionDestructiveRequiresName?: boolean | cdktf.IResolvable; 
  public get actionDestructiveRequiresName() {
    return this.getBooleanAttribute('action_destructive_requires_name');
  }
  public set actionDestructiveRequiresName(value: boolean | cdktf.IResolvable) {
    this._actionDestructiveRequiresName = value;
  }
  public resetActionDestructiveRequiresName() {
    this._actionDestructiveRequiresName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDestructiveRequiresNameInput() {
    return this._actionDestructiveRequiresName;
  }

  // apack_accesslog_enabled - computed: true, optional: true, required: false
  private _apackAccesslogEnabled?: boolean | cdktf.IResolvable; 
  public get apackAccesslogEnabled() {
    return this.getBooleanAttribute('apack_accesslog_enabled');
  }
  public set apackAccesslogEnabled(value: boolean | cdktf.IResolvable) {
    this._apackAccesslogEnabled = value;
  }
  public resetApackAccesslogEnabled() {
    this._apackAccesslogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apackAccesslogEnabledInput() {
    return this._apackAccesslogEnabled;
  }

  // apack_accesslog_search_enabled - computed: true, optional: true, required: false
  private _apackAccesslogSearchEnabled?: boolean | cdktf.IResolvable; 
  public get apackAccesslogSearchEnabled() {
    return this.getBooleanAttribute('apack_accesslog_search_enabled');
  }
  public set apackAccesslogSearchEnabled(value: boolean | cdktf.IResolvable) {
    this._apackAccesslogSearchEnabled = value;
  }
  public resetApackAccesslogSearchEnabled() {
    this._apackAccesslogSearchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apackAccesslogSearchEnabledInput() {
    return this._apackAccesslogSearchEnabled;
  }

  // client_node_amount - computed: false, optional: true, required: false
  private _clientNodeAmount?: number; 
  public get clientNodeAmount() {
    return this.getNumberAttribute('client_node_amount');
  }
  public set clientNodeAmount(value: number) {
    this._clientNodeAmount = value;
  }
  public resetClientNodeAmount() {
    this._clientNodeAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNodeAmountInput() {
    return this._clientNodeAmount;
  }

  // client_node_spec - computed: false, optional: true, required: false
  private _clientNodeSpec?: string; 
  public get clientNodeSpec() {
    return this.getStringAttribute('client_node_spec');
  }
  public set clientNodeSpec(value: string) {
    this._clientNodeSpec = value;
  }
  public resetClientNodeSpec() {
    this._clientNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNodeSpecInput() {
    return this._clientNodeSpec;
  }

  // cluster_routing_allocation_disk_watermark_flood_stage - computed: true, optional: true, required: false
  private _clusterRoutingAllocationDiskWatermarkFloodStage?: string; 
  public get clusterRoutingAllocationDiskWatermarkFloodStage() {
    return this.getStringAttribute('cluster_routing_allocation_disk_watermark_flood_stage');
  }
  public set clusterRoutingAllocationDiskWatermarkFloodStage(value: string) {
    this._clusterRoutingAllocationDiskWatermarkFloodStage = value;
  }
  public resetClusterRoutingAllocationDiskWatermarkFloodStage() {
    this._clusterRoutingAllocationDiskWatermarkFloodStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskWatermarkFloodStageInput() {
    return this._clusterRoutingAllocationDiskWatermarkFloodStage;
  }

  // cluster_routing_allocation_disk_watermark_high - computed: true, optional: true, required: false
  private _clusterRoutingAllocationDiskWatermarkHigh?: string; 
  public get clusterRoutingAllocationDiskWatermarkHigh() {
    return this.getStringAttribute('cluster_routing_allocation_disk_watermark_high');
  }
  public set clusterRoutingAllocationDiskWatermarkHigh(value: string) {
    this._clusterRoutingAllocationDiskWatermarkHigh = value;
  }
  public resetClusterRoutingAllocationDiskWatermarkHigh() {
    this._clusterRoutingAllocationDiskWatermarkHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskWatermarkHighInput() {
    return this._clusterRoutingAllocationDiskWatermarkHigh;
  }

  // cluster_routing_allocation_disk_watermark_low - computed: true, optional: true, required: false
  private _clusterRoutingAllocationDiskWatermarkLow?: string; 
  public get clusterRoutingAllocationDiskWatermarkLow() {
    return this.getStringAttribute('cluster_routing_allocation_disk_watermark_low');
  }
  public set clusterRoutingAllocationDiskWatermarkLow(value: string) {
    this._clusterRoutingAllocationDiskWatermarkLow = value;
  }
  public resetClusterRoutingAllocationDiskWatermarkLow() {
    this._clusterRoutingAllocationDiskWatermarkLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationDiskWatermarkLowInput() {
    return this._clusterRoutingAllocationDiskWatermarkLow;
  }

  // cpu_type - computed: false, optional: false, required: true
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // data_node_affinity - computed: true, optional: true, required: false
  private _dataNodeAffinity?: boolean | cdktf.IResolvable; 
  public get dataNodeAffinity() {
    return this.getBooleanAttribute('data_node_affinity');
  }
  public set dataNodeAffinity(value: boolean | cdktf.IResolvable) {
    this._dataNodeAffinity = value;
  }
  public resetDataNodeAffinity() {
    this._dataNodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeAffinityInput() {
    return this._dataNodeAffinity;
  }

  // data_node_amount - computed: false, optional: false, required: true
  private _dataNodeAmount?: number; 
  public get dataNodeAmount() {
    return this.getNumberAttribute('data_node_amount');
  }
  public set dataNodeAmount(value: number) {
    this._dataNodeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeAmountInput() {
    return this._dataNodeAmount;
  }

  // data_node_disk_size - computed: true, optional: true, required: false
  private _dataNodeDiskSize?: number; 
  public get dataNodeDiskSize() {
    return this.getNumberAttribute('data_node_disk_size');
  }
  public set dataNodeDiskSize(value: number) {
    this._dataNodeDiskSize = value;
  }
  public resetDataNodeDiskSize() {
    this._dataNodeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeDiskSizeInput() {
    return this._dataNodeDiskSize;
  }

  // data_node_disk_type - computed: false, optional: false, required: true
  private _dataNodeDiskType?: string; 
  public get dataNodeDiskType() {
    return this.getStringAttribute('data_node_disk_type');
  }
  public set dataNodeDiskType(value: string) {
    this._dataNodeDiskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeDiskTypeInput() {
    return this._dataNodeDiskType;
  }

  // data_node_spec - computed: false, optional: false, required: true
  private _dataNodeSpec?: string; 
  public get dataNodeSpec() {
    return this.getStringAttribute('data_node_spec');
  }
  public set dataNodeSpec(value: string) {
    this._dataNodeSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeSpecInput() {
    return this._dataNodeSpec;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enable_public - computed: true, optional: false, required: false
  public get enablePublic() {
    return this.getBooleanAttribute('enable_public');
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

  // kibana_domain - computed: true, optional: false, required: false
  public get kibanaDomain() {
    return this.getStringAttribute('kibana_domain');
  }

  // kibana_node_spec - computed: false, optional: true, required: false
  private _kibanaNodeSpec?: string; 
  public get kibanaNodeSpec() {
    return this.getStringAttribute('kibana_node_spec');
  }
  public set kibanaNodeSpec(value: string) {
    this._kibanaNodeSpec = value;
  }
  public resetKibanaNodeSpec() {
    this._kibanaNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaNodeSpecInput() {
    return this._kibanaNodeSpec;
  }

  // kibana_password - computed: false, optional: true, required: false
  private _kibanaPassword?: string; 
  public get kibanaPassword() {
    return this.getStringAttribute('kibana_password');
  }
  public set kibanaPassword(value: string) {
    this._kibanaPassword = value;
  }
  public resetKibanaPassword() {
    this._kibanaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaPasswordInput() {
    return this._kibanaPassword;
  }

  // kibana_port - computed: true, optional: false, required: false
  public get kibanaPort() {
    return this.getNumberAttribute('kibana_port');
  }

  // kibana_private_whitelist - computed: true, optional: false, required: false
  public get kibanaPrivateWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('kibana_private_whitelist'));
  }

  // kibana_protocol - computed: true, optional: false, required: false
  public get kibanaProtocol() {
    return this.getStringAttribute('kibana_protocol');
  }

  // kibana_slb_address - computed: true, optional: false, required: false
  public get kibanaSlbAddress() {
    return this.getStringAttribute('kibana_slb_address');
  }

  // kibana_whitelist - computed: true, optional: false, required: false
  public get kibanaWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('kibana_whitelist'));
  }

  // master_node_amount - computed: true, optional: true, required: false
  private _masterNodeAmount?: number; 
  public get masterNodeAmount() {
    return this.getNumberAttribute('master_node_amount');
  }
  public set masterNodeAmount(value: number) {
    this._masterNodeAmount = value;
  }
  public resetMasterNodeAmount() {
    this._masterNodeAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeAmountInput() {
    return this._masterNodeAmount;
  }

  // master_node_disk_size - computed: true, optional: true, required: false
  private _masterNodeDiskSize?: number; 
  public get masterNodeDiskSize() {
    return this.getNumberAttribute('master_node_disk_size');
  }
  public set masterNodeDiskSize(value: number) {
    this._masterNodeDiskSize = value;
  }
  public resetMasterNodeDiskSize() {
    this._masterNodeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeDiskSizeInput() {
    return this._masterNodeDiskSize;
  }

  // master_node_disk_type - computed: false, optional: true, required: false
  private _masterNodeDiskType?: string; 
  public get masterNodeDiskType() {
    return this.getStringAttribute('master_node_disk_type');
  }
  public set masterNodeDiskType(value: string) {
    this._masterNodeDiskType = value;
  }
  public resetMasterNodeDiskType() {
    this._masterNodeDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeDiskTypeInput() {
    return this._masterNodeDiskType;
  }

  // master_node_spec - computed: false, optional: true, required: false
  private _masterNodeSpec?: string; 
  public get masterNodeSpec() {
    return this.getStringAttribute('master_node_spec');
  }
  public set masterNodeSpec(value: string) {
    this._masterNodeSpec = value;
  }
  public resetMasterNodeSpec() {
    this._masterNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeSpecInput() {
    return this._masterNodeSpec;
  }

  // monitor_password - computed: false, optional: false, required: true
  private _monitorPassword?: string; 
  public get monitorPassword() {
    return this.getStringAttribute('monitor_password');
  }
  public set monitorPassword(value: string) {
    this._monitorPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPasswordInput() {
    return this._monitorPassword;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_whitelist - computed: true, optional: false, required: false
  public get privateWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('private_whitelist'));
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_whitelist - computed: true, optional: false, required: false
  public get publicWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('public_whitelist'));
  }

  // scene - computed: false, optional: false, required: true
  private _scene?: string; 
  public get scene() {
    return this.getStringAttribute('scene');
  }
  public set scene(value: string) {
    this._scene = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneInput() {
    return this._scene;
  }

  // setting_config - computed: true, optional: true, required: false
  private _settingConfig?: { [key: string]: string }; 
  public get settingConfig() {
    return this.getStringMapAttribute('setting_config');
  }
  public set settingConfig(value: { [key: string]: string }) {
    this._settingConfig = value;
  }
  public resetSettingConfig() {
    this._settingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingConfigInput() {
    return this._settingConfig;
  }

  // slb_address - computed: true, optional: false, required: false
  public get slbAddress() {
    return this.getStringAttribute('slb_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // thread_pool_search_queue_size - computed: true, optional: true, required: false
  private _threadPoolSearchQueueSize?: number; 
  public get threadPoolSearchQueueSize() {
    return this.getNumberAttribute('thread_pool_search_queue_size');
  }
  public set threadPoolSearchQueueSize(value: number) {
    this._threadPoolSearchQueueSize = value;
  }
  public resetThreadPoolSearchQueueSize() {
    this._threadPoolSearchQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchQueueSizeInput() {
    return this._threadPoolSearchQueueSize;
  }

  // thread_pool_write_queue_size - computed: true, optional: true, required: false
  private _threadPoolWriteQueueSize?: number; 
  public get threadPoolWriteQueueSize() {
    return this.getNumberAttribute('thread_pool_write_queue_size');
  }
  public set threadPoolWriteQueueSize(value: number) {
    this._threadPoolWriteQueueSize = value;
  }
  public resetThreadPoolWriteQueueSize() {
    this._threadPoolWriteQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteQueueSizeInput() {
    return this._threadPoolWriteQueueSize;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vswitch_id - computed: true, optional: true, required: false
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackElasticsearchInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackElasticsearchInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_whitelist - computed: false, optional: true, required: false
  private _vpcWhitelist = new ApsarastackElasticsearchInstanceVpcWhitelistStructList(this, "vpc_whitelist", true);
  public get vpcWhitelist() {
    return this._vpcWhitelist;
  }
  public putVpcWhitelist(value: ApsarastackElasticsearchInstanceVpcWhitelistStruct[] | cdktf.IResolvable) {
    this._vpcWhitelist.internalValue = value;
  }
  public resetVpcWhitelist() {
    this._vpcWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcWhitelistInput() {
    return this._vpcWhitelist.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_auto_create_index: cdktf.booleanToTerraform(this._actionAutoCreateIndex),
      action_destructive_requires_name: cdktf.booleanToTerraform(this._actionDestructiveRequiresName),
      apack_accesslog_enabled: cdktf.booleanToTerraform(this._apackAccesslogEnabled),
      apack_accesslog_search_enabled: cdktf.booleanToTerraform(this._apackAccesslogSearchEnabled),
      client_node_amount: cdktf.numberToTerraform(this._clientNodeAmount),
      client_node_spec: cdktf.stringToTerraform(this._clientNodeSpec),
      cluster_routing_allocation_disk_watermark_flood_stage: cdktf.stringToTerraform(this._clusterRoutingAllocationDiskWatermarkFloodStage),
      cluster_routing_allocation_disk_watermark_high: cdktf.stringToTerraform(this._clusterRoutingAllocationDiskWatermarkHigh),
      cluster_routing_allocation_disk_watermark_low: cdktf.stringToTerraform(this._clusterRoutingAllocationDiskWatermarkLow),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      data_node_affinity: cdktf.booleanToTerraform(this._dataNodeAffinity),
      data_node_amount: cdktf.numberToTerraform(this._dataNodeAmount),
      data_node_disk_size: cdktf.numberToTerraform(this._dataNodeDiskSize),
      data_node_disk_type: cdktf.stringToTerraform(this._dataNodeDiskType),
      data_node_spec: cdktf.stringToTerraform(this._dataNodeSpec),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kibana_node_spec: cdktf.stringToTerraform(this._kibanaNodeSpec),
      kibana_password: cdktf.stringToTerraform(this._kibanaPassword),
      master_node_amount: cdktf.numberToTerraform(this._masterNodeAmount),
      master_node_disk_size: cdktf.numberToTerraform(this._masterNodeDiskSize),
      master_node_disk_type: cdktf.stringToTerraform(this._masterNodeDiskType),
      master_node_spec: cdktf.stringToTerraform(this._masterNodeSpec),
      monitor_password: cdktf.stringToTerraform(this._monitorPassword),
      password: cdktf.stringToTerraform(this._password),
      protocol: cdktf.stringToTerraform(this._protocol),
      scene: cdktf.stringToTerraform(this._scene),
      setting_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._settingConfig),
      thread_pool_search_queue_size: cdktf.numberToTerraform(this._threadPoolSearchQueueSize),
      thread_pool_write_queue_size: cdktf.numberToTerraform(this._threadPoolWriteQueueSize),
      version: cdktf.stringToTerraform(this._version),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: apsarastackElasticsearchInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_whitelist: cdktf.listMapper(apsarastackElasticsearchInstanceVpcWhitelistStructToTerraform, true)(this._vpcWhitelist.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_auto_create_index: {
        value: cdktf.booleanToHclTerraform(this._actionAutoCreateIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_destructive_requires_name: {
        value: cdktf.booleanToHclTerraform(this._actionDestructiveRequiresName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apack_accesslog_enabled: {
        value: cdktf.booleanToHclTerraform(this._apackAccesslogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apack_accesslog_search_enabled: {
        value: cdktf.booleanToHclTerraform(this._apackAccesslogSearchEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_node_amount: {
        value: cdktf.numberToHclTerraform(this._clientNodeAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_node_spec: {
        value: cdktf.stringToHclTerraform(this._clientNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_disk_watermark_flood_stage: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationDiskWatermarkFloodStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_disk_watermark_high: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationDiskWatermarkHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routing_allocation_disk_watermark_low: {
        value: cdktf.stringToHclTerraform(this._clusterRoutingAllocationDiskWatermarkLow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_affinity: {
        value: cdktf.booleanToHclTerraform(this._dataNodeAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_node_amount: {
        value: cdktf.numberToHclTerraform(this._dataNodeAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_disk_size: {
        value: cdktf.numberToHclTerraform(this._dataNodeDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_disk_type: {
        value: cdktf.stringToHclTerraform(this._dataNodeDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_spec: {
        value: cdktf.stringToHclTerraform(this._dataNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kibana_node_spec: {
        value: cdktf.stringToHclTerraform(this._kibanaNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_password: {
        value: cdktf.stringToHclTerraform(this._kibanaPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_amount: {
        value: cdktf.numberToHclTerraform(this._masterNodeAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_disk_size: {
        value: cdktf.numberToHclTerraform(this._masterNodeDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_disk_type: {
        value: cdktf.stringToHclTerraform(this._masterNodeDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_spec: {
        value: cdktf.stringToHclTerraform(this._masterNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_password: {
        value: cdktf.stringToHclTerraform(this._monitorPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scene: {
        value: cdktf.stringToHclTerraform(this._scene),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settingConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      thread_pool_search_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolSearchQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thread_pool_write_queue_size: {
        value: cdktf.numberToHclTerraform(this._threadPoolWriteQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apsarastackElasticsearchInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackElasticsearchInstanceTimeouts",
      },
      vpc_whitelist: {
        value: cdktf.listMapperHcl(apsarastackElasticsearchInstanceVpcWhitelistStructToHclTerraform, true)(this._vpcWhitelist.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackElasticsearchInstanceVpcWhitelistStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
