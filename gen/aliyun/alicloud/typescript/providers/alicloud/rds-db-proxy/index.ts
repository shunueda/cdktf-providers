// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsDbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_connect_string_port RdsDbProxy#db_proxy_connect_string_port}
  */
  readonly dbProxyConnectStringPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_connection_prefix RdsDbProxy#db_proxy_connection_prefix}
  */
  readonly dbProxyConnectionPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_endpoint_read_write_mode RdsDbProxy#db_proxy_endpoint_read_write_mode}
  */
  readonly dbProxyEndpointReadWriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_features RdsDbProxy#db_proxy_features}
  */
  readonly dbProxyFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_instance_num RdsDbProxy#db_proxy_instance_num}
  */
  readonly dbProxyInstanceNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_instance_type RdsDbProxy#db_proxy_instance_type}
  */
  readonly dbProxyInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#db_proxy_ssl_enabled RdsDbProxy#db_proxy_ssl_enabled}
  */
  readonly dbProxySslEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#effective_specific_time RdsDbProxy#effective_specific_time}
  */
  readonly effectiveSpecificTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#effective_time RdsDbProxy#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#id RdsDbProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#instance_id RdsDbProxy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#instance_network_type RdsDbProxy#instance_network_type}
  */
  readonly instanceNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#read_only_instance_distribution_type RdsDbProxy#read_only_instance_distribution_type}
  */
  readonly readOnlyInstanceDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#read_only_instance_max_delay_time RdsDbProxy#read_only_instance_max_delay_time}
  */
  readonly readOnlyInstanceMaxDelayTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#resource_group_id RdsDbProxy#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#switch_time RdsDbProxy#switch_time}
  */
  readonly switchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#upgrade_time RdsDbProxy#upgrade_time}
  */
  readonly upgradeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#vpc_id RdsDbProxy#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#vswitch_id RdsDbProxy#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * read_only_instance_weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#read_only_instance_weight RdsDbProxy#read_only_instance_weight}
  */
  readonly readOnlyInstanceWeight?: RdsDbProxyReadOnlyInstanceWeight[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#timeouts RdsDbProxy#timeouts}
  */
  readonly timeouts?: RdsDbProxyTimeouts;
}
export interface RdsDbProxyReadOnlyInstanceWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#instance_id RdsDbProxy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#weight RdsDbProxy#weight}
  */
  readonly weight: string;
}

export function rdsDbProxyReadOnlyInstanceWeightToTerraform(struct?: RdsDbProxyReadOnlyInstanceWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function rdsDbProxyReadOnlyInstanceWeightToHclTerraform(struct?: RdsDbProxyReadOnlyInstanceWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsDbProxyReadOnlyInstanceWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsDbProxyReadOnlyInstanceWeight | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsDbProxyReadOnlyInstanceWeight | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._weight = value.weight;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class RdsDbProxyReadOnlyInstanceWeightList extends cdktf.ComplexList {
  public internalValue? : RdsDbProxyReadOnlyInstanceWeight[] | cdktf.IResolvable

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
  public get(index: number): RdsDbProxyReadOnlyInstanceWeightOutputReference {
    return new RdsDbProxyReadOnlyInstanceWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsDbProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#create RdsDbProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#delete RdsDbProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#update RdsDbProxy#update}
  */
  readonly update?: string;
}

export function rdsDbProxyTimeoutsToTerraform(struct?: RdsDbProxyTimeouts | cdktf.IResolvable): any {
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


export function rdsDbProxyTimeoutsToHclTerraform(struct?: RdsDbProxyTimeouts | cdktf.IResolvable): any {
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

export class RdsDbProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsDbProxyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsDbProxyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy alicloud_rds_db_proxy}
*/
export class RdsDbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_db_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsDbProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsDbProxy to import
  * @param importFromId The id of the existing RdsDbProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsDbProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_db_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_db_proxy alicloud_rds_db_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_db_proxy',
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
    this._dbProxyConnectStringPort = config.dbProxyConnectStringPort;
    this._dbProxyConnectionPrefix = config.dbProxyConnectionPrefix;
    this._dbProxyEndpointReadWriteMode = config.dbProxyEndpointReadWriteMode;
    this._dbProxyFeatures = config.dbProxyFeatures;
    this._dbProxyInstanceNum = config.dbProxyInstanceNum;
    this._dbProxyInstanceType = config.dbProxyInstanceType;
    this._dbProxySslEnabled = config.dbProxySslEnabled;
    this._effectiveSpecificTime = config.effectiveSpecificTime;
    this._effectiveTime = config.effectiveTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceNetworkType = config.instanceNetworkType;
    this._readOnlyInstanceDistributionType = config.readOnlyInstanceDistributionType;
    this._readOnlyInstanceMaxDelayTime = config.readOnlyInstanceMaxDelayTime;
    this._resourceGroupId = config.resourceGroupId;
    this._switchTime = config.switchTime;
    this._upgradeTime = config.upgradeTime;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._readOnlyInstanceWeight.internalValue = config.readOnlyInstanceWeight;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_proxy_connect_string_port - computed: true, optional: true, required: false
  private _dbProxyConnectStringPort?: number; 
  public get dbProxyConnectStringPort() {
    return this.getNumberAttribute('db_proxy_connect_string_port');
  }
  public set dbProxyConnectStringPort(value: number) {
    this._dbProxyConnectStringPort = value;
  }
  public resetDbProxyConnectStringPort() {
    this._dbProxyConnectStringPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyConnectStringPortInput() {
    return this._dbProxyConnectStringPort;
  }

  // db_proxy_connection_prefix - computed: true, optional: true, required: false
  private _dbProxyConnectionPrefix?: string; 
  public get dbProxyConnectionPrefix() {
    return this.getStringAttribute('db_proxy_connection_prefix');
  }
  public set dbProxyConnectionPrefix(value: string) {
    this._dbProxyConnectionPrefix = value;
  }
  public resetDbProxyConnectionPrefix() {
    this._dbProxyConnectionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyConnectionPrefixInput() {
    return this._dbProxyConnectionPrefix;
  }

  // db_proxy_connection_string - computed: true, optional: false, required: false
  public get dbProxyConnectionString() {
    return this.getStringAttribute('db_proxy_connection_string');
  }

  // db_proxy_endpoint_aliases - computed: true, optional: false, required: false
  public get dbProxyEndpointAliases() {
    return this.getStringAttribute('db_proxy_endpoint_aliases');
  }

  // db_proxy_endpoint_id - computed: true, optional: false, required: false
  public get dbProxyEndpointId() {
    return this.getStringAttribute('db_proxy_endpoint_id');
  }

  // db_proxy_endpoint_read_write_mode - computed: true, optional: true, required: false
  private _dbProxyEndpointReadWriteMode?: string; 
  public get dbProxyEndpointReadWriteMode() {
    return this.getStringAttribute('db_proxy_endpoint_read_write_mode');
  }
  public set dbProxyEndpointReadWriteMode(value: string) {
    this._dbProxyEndpointReadWriteMode = value;
  }
  public resetDbProxyEndpointReadWriteMode() {
    this._dbProxyEndpointReadWriteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointReadWriteModeInput() {
    return this._dbProxyEndpointReadWriteMode;
  }

  // db_proxy_features - computed: true, optional: true, required: false
  private _dbProxyFeatures?: string; 
  public get dbProxyFeatures() {
    return this.getStringAttribute('db_proxy_features');
  }
  public set dbProxyFeatures(value: string) {
    this._dbProxyFeatures = value;
  }
  public resetDbProxyFeatures() {
    this._dbProxyFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyFeaturesInput() {
    return this._dbProxyFeatures;
  }

  // db_proxy_instance_num - computed: false, optional: false, required: true
  private _dbProxyInstanceNum?: number; 
  public get dbProxyInstanceNum() {
    return this.getNumberAttribute('db_proxy_instance_num');
  }
  public set dbProxyInstanceNum(value: number) {
    this._dbProxyInstanceNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyInstanceNumInput() {
    return this._dbProxyInstanceNum;
  }

  // db_proxy_instance_type - computed: true, optional: true, required: false
  private _dbProxyInstanceType?: string; 
  public get dbProxyInstanceType() {
    return this.getStringAttribute('db_proxy_instance_type');
  }
  public set dbProxyInstanceType(value: string) {
    this._dbProxyInstanceType = value;
  }
  public resetDbProxyInstanceType() {
    this._dbProxyInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyInstanceTypeInput() {
    return this._dbProxyInstanceType;
  }

  // db_proxy_ssl_enabled - computed: true, optional: true, required: false
  private _dbProxySslEnabled?: string; 
  public get dbProxySslEnabled() {
    return this.getStringAttribute('db_proxy_ssl_enabled');
  }
  public set dbProxySslEnabled(value: string) {
    this._dbProxySslEnabled = value;
  }
  public resetDbProxySslEnabled() {
    this._dbProxySslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxySslEnabledInput() {
    return this._dbProxySslEnabled;
  }

  // effective_specific_time - computed: true, optional: true, required: false
  private _effectiveSpecificTime?: string; 
  public get effectiveSpecificTime() {
    return this.getStringAttribute('effective_specific_time');
  }
  public set effectiveSpecificTime(value: string) {
    this._effectiveSpecificTime = value;
  }
  public resetEffectiveSpecificTime() {
    this._effectiveSpecificTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveSpecificTimeInput() {
    return this._effectiveSpecificTime;
  }

  // effective_time - computed: true, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_network_type - computed: false, optional: false, required: true
  private _instanceNetworkType?: string; 
  public get instanceNetworkType() {
    return this.getStringAttribute('instance_network_type');
  }
  public set instanceNetworkType(value: string) {
    this._instanceNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNetworkTypeInput() {
    return this._instanceNetworkType;
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }

  // read_only_instance_distribution_type - computed: true, optional: true, required: false
  private _readOnlyInstanceDistributionType?: string; 
  public get readOnlyInstanceDistributionType() {
    return this.getStringAttribute('read_only_instance_distribution_type');
  }
  public set readOnlyInstanceDistributionType(value: string) {
    this._readOnlyInstanceDistributionType = value;
  }
  public resetReadOnlyInstanceDistributionType() {
    this._readOnlyInstanceDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInstanceDistributionTypeInput() {
    return this._readOnlyInstanceDistributionType;
  }

  // read_only_instance_max_delay_time - computed: true, optional: true, required: false
  private _readOnlyInstanceMaxDelayTime?: number; 
  public get readOnlyInstanceMaxDelayTime() {
    return this.getNumberAttribute('read_only_instance_max_delay_time');
  }
  public set readOnlyInstanceMaxDelayTime(value: number) {
    this._readOnlyInstanceMaxDelayTime = value;
  }
  public resetReadOnlyInstanceMaxDelayTime() {
    this._readOnlyInstanceMaxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInstanceMaxDelayTimeInput() {
    return this._readOnlyInstanceMaxDelayTime;
  }

  // resource_group_id - computed: true, optional: true, required: false
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

  // ssl_expired_time - computed: true, optional: false, required: false
  public get sslExpiredTime() {
    return this.getStringAttribute('ssl_expired_time');
  }

  // switch_time - computed: false, optional: true, required: false
  private _switchTime?: string; 
  public get switchTime() {
    return this.getStringAttribute('switch_time');
  }
  public set switchTime(value: string) {
    this._switchTime = value;
  }
  public resetSwitchTime() {
    this._switchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTimeInput() {
    return this._switchTime;
  }

  // upgrade_time - computed: false, optional: true, required: false
  private _upgradeTime?: string; 
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
  public set upgradeTime(value: string) {
    this._upgradeTime = value;
  }
  public resetUpgradeTime() {
    this._upgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInput() {
    return this._upgradeTime;
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

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // read_only_instance_weight - computed: false, optional: true, required: false
  private _readOnlyInstanceWeight = new RdsDbProxyReadOnlyInstanceWeightList(this, "read_only_instance_weight", true);
  public get readOnlyInstanceWeight() {
    return this._readOnlyInstanceWeight;
  }
  public putReadOnlyInstanceWeight(value: RdsDbProxyReadOnlyInstanceWeight[] | cdktf.IResolvable) {
    this._readOnlyInstanceWeight.internalValue = value;
  }
  public resetReadOnlyInstanceWeight() {
    this._readOnlyInstanceWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInstanceWeightInput() {
    return this._readOnlyInstanceWeight.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsDbProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsDbProxyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_proxy_connect_string_port: cdktf.numberToTerraform(this._dbProxyConnectStringPort),
      db_proxy_connection_prefix: cdktf.stringToTerraform(this._dbProxyConnectionPrefix),
      db_proxy_endpoint_read_write_mode: cdktf.stringToTerraform(this._dbProxyEndpointReadWriteMode),
      db_proxy_features: cdktf.stringToTerraform(this._dbProxyFeatures),
      db_proxy_instance_num: cdktf.numberToTerraform(this._dbProxyInstanceNum),
      db_proxy_instance_type: cdktf.stringToTerraform(this._dbProxyInstanceType),
      db_proxy_ssl_enabled: cdktf.stringToTerraform(this._dbProxySslEnabled),
      effective_specific_time: cdktf.stringToTerraform(this._effectiveSpecificTime),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_network_type: cdktf.stringToTerraform(this._instanceNetworkType),
      read_only_instance_distribution_type: cdktf.stringToTerraform(this._readOnlyInstanceDistributionType),
      read_only_instance_max_delay_time: cdktf.numberToTerraform(this._readOnlyInstanceMaxDelayTime),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      upgrade_time: cdktf.stringToTerraform(this._upgradeTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      read_only_instance_weight: cdktf.listMapper(rdsDbProxyReadOnlyInstanceWeightToTerraform, true)(this._readOnlyInstanceWeight.internalValue),
      timeouts: rdsDbProxyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_proxy_connect_string_port: {
        value: cdktf.numberToHclTerraform(this._dbProxyConnectStringPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_proxy_connection_prefix: {
        value: cdktf.stringToHclTerraform(this._dbProxyConnectionPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_endpoint_read_write_mode: {
        value: cdktf.stringToHclTerraform(this._dbProxyEndpointReadWriteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_features: {
        value: cdktf.stringToHclTerraform(this._dbProxyFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_instance_num: {
        value: cdktf.numberToHclTerraform(this._dbProxyInstanceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_proxy_instance_type: {
        value: cdktf.stringToHclTerraform(this._dbProxyInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_ssl_enabled: {
        value: cdktf.stringToHclTerraform(this._dbProxySslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_specific_time: {
        value: cdktf.stringToHclTerraform(this._effectiveSpecificTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_network_type: {
        value: cdktf.stringToHclTerraform(this._instanceNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_instance_distribution_type: {
        value: cdktf.stringToHclTerraform(this._readOnlyInstanceDistributionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_instance_max_delay_time: {
        value: cdktf.numberToHclTerraform(this._readOnlyInstanceMaxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_time: {
        value: cdktf.stringToHclTerraform(this._switchTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time: {
        value: cdktf.stringToHclTerraform(this._upgradeTime),
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
      read_only_instance_weight: {
        value: cdktf.listMapperHcl(rdsDbProxyReadOnlyInstanceWeightToHclTerraform, true)(this._readOnlyInstanceWeight.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsDbProxyReadOnlyInstanceWeightList",
      },
      timeouts: {
        value: rdsDbProxyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsDbProxyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
