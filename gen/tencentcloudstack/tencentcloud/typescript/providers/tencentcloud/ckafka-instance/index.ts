// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance bandwidth in MBps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#band_width CkafkaInstance#band_width}
  */
  readonly bandWidth?: number;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. Default value is `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#charge_type CkafkaInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Disk Size. Its interval varies with bandwidth, and the input must be within the interval, which can be viewed through the control. If it is not within the interval, the plan will cause a change when first created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#disk_size CkafkaInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#disk_type CkafkaInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * Elastic bandwidth switch 0 not turned on 1 turned on (0 default). This takes effect only when the instance is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#elastic_bandwidth_switch CkafkaInstance#elastic_bandwidth_switch}
  */
  readonly elasticBandwidthSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#id CkafkaInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#instance_name CkafkaInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Description of instance type. `profession`: 1, `standard`:  1(general), 2(standard), 3(advanced), 4(capacity), 5(specialized-1), 6(specialized-2), 7(specialized-3), 8(specialized-4), 9(exclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#instance_type CkafkaInstance#instance_type}
  */
  readonly instanceType?: number;
  /**
  * Kafka version (0.10.2/1.1.1/2.4.1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#kafka_version CkafkaInstance#kafka_version}
  */
  readonly kafkaVersion?: string;
  /**
  * The size of a single message in bytes at the instance level. Value range: `1024 - 12*1024*1024 bytes (i.e., 1KB-12MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#max_message_byte CkafkaInstance#max_message_byte}
  */
  readonly maxMessageByte?: number;
  /**
  * The maximum retention time of instance logs, in minutes. the default is 10080 (7 days), the maximum is 30 days, and the default 0 is not filled, which means that the log retention time recovery policy is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#msg_retention_time CkafkaInstance#msg_retention_time}
  */
  readonly msgRetentionTime?: number;
  /**
  * Indicates whether the instance is multi zones. NOTE: if set to `true`, `zone_ids` must set together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#multi_zone_flag CkafkaInstance#multi_zone_flag}
  */
  readonly multiZoneFlag?: boolean | cdktf.IResolvable;
  /**
  * Partition Size. Its interval varies with bandwidth, and the input must be within the interval, which can be viewed through the control. If it is not within the interval, the plan will cause a change when first created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#partition CkafkaInstance#partition}
  */
  readonly partition?: number;
  /**
  * Prepaid purchase time, such as 1, is one month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#period CkafkaInstance#period}
  */
  readonly period?: number;
  /**
  * Bandwidth of the public network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#public_network CkafkaInstance#public_network}
  */
  readonly publicNetwork?: number;
  /**
  * Modification of the rebalancing time after upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#rebalance_time CkafkaInstance#rebalance_time}
  */
  readonly rebalanceTime?: number;
  /**
  * Prepaid automatic renewal mark, 0 means the default state, the initial state, 1 means automatic renewal, 2 means clear no automatic renewal (user setting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#renew_flag CkafkaInstance#renew_flag}
  */
  readonly renewFlag?: number;
  /**
  * Specifications type of instance. Allowed values are `profession`, `premium`. Default is `profession`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#specifications_type CkafkaInstance#specifications_type}
  */
  readonly specificationsType?: string;
  /**
  * Subnet id, it will be basic network if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#subnet_id CkafkaInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Tag set of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#tag_set CkafkaInstance#tag_set}
  */
  readonly tagSet?: { [key: string]: string };
  /**
  * POSTPAID_BY_HOUR scale-down mode
  * - 1: stable transformation;
  * - 2: High-speed transformer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#upgrade_strategy CkafkaInstance#upgrade_strategy}
  */
  readonly upgradeStrategy?: number;
  /**
  * Vpc id, it will be basic network if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#vpc_id CkafkaInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Available zone id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#zone_id CkafkaInstance#zone_id}
  */
  readonly zoneId: number;
  /**
  * List of available zone id. NOTE: this argument must set together with `multi_zone_flag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#zone_ids CkafkaInstance#zone_ids}
  */
  readonly zoneIds?: number[];
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#config CkafkaInstance#config}
  */
  readonly config?: CkafkaInstanceConfigA;
  /**
  * dynamic_retention_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#dynamic_retention_config CkafkaInstance#dynamic_retention_config}
  */
  readonly dynamicRetentionConfig?: CkafkaInstanceDynamicRetentionConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#tags CkafkaInstance#tags}
  */
  readonly tags?: CkafkaInstanceTags[] | cdktf.IResolvable;
}
export interface CkafkaInstanceConfigA {
  /**
  * Automatic creation. true: enabled, false: not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#auto_create_topic_enable CkafkaInstance#auto_create_topic_enable}
  */
  readonly autoCreateTopicEnable: boolean | cdktf.IResolvable;
  /**
  * If auto.create.topic.enable is set to true and this value is not set, 3 will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#default_num_partitions CkafkaInstance#default_num_partitions}
  */
  readonly defaultNumPartitions: number;
  /**
  * If auto.create.topic.enable is set to true but this value is not set, 2 will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#default_replication_factor CkafkaInstance#default_replication_factor}
  */
  readonly defaultReplicationFactor: number;
}

export function ckafkaInstanceConfigAToTerraform(struct?: CkafkaInstanceConfigAOutputReference | CkafkaInstanceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_topic_enable: cdktf.booleanToTerraform(struct!.autoCreateTopicEnable),
    default_num_partitions: cdktf.numberToTerraform(struct!.defaultNumPartitions),
    default_replication_factor: cdktf.numberToTerraform(struct!.defaultReplicationFactor),
  }
}


export function ckafkaInstanceConfigAToHclTerraform(struct?: CkafkaInstanceConfigAOutputReference | CkafkaInstanceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_topic_enable: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateTopicEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_num_partitions: {
      value: cdktf.numberToHclTerraform(struct!.defaultNumPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.defaultReplicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaInstanceConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaInstanceConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateTopicEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateTopicEnable = this._autoCreateTopicEnable;
    }
    if (this._defaultNumPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNumPartitions = this._defaultNumPartitions;
    }
    if (this._defaultReplicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReplicationFactor = this._defaultReplicationFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaInstanceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateTopicEnable = undefined;
      this._defaultNumPartitions = undefined;
      this._defaultReplicationFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateTopicEnable = value.autoCreateTopicEnable;
      this._defaultNumPartitions = value.defaultNumPartitions;
      this._defaultReplicationFactor = value.defaultReplicationFactor;
    }
  }

  // auto_create_topic_enable - computed: false, optional: false, required: true
  private _autoCreateTopicEnable?: boolean | cdktf.IResolvable; 
  public get autoCreateTopicEnable() {
    return this.getBooleanAttribute('auto_create_topic_enable');
  }
  public set autoCreateTopicEnable(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopicEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicEnableInput() {
    return this._autoCreateTopicEnable;
  }

  // default_num_partitions - computed: false, optional: false, required: true
  private _defaultNumPartitions?: number; 
  public get defaultNumPartitions() {
    return this.getNumberAttribute('default_num_partitions');
  }
  public set defaultNumPartitions(value: number) {
    this._defaultNumPartitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNumPartitionsInput() {
    return this._defaultNumPartitions;
  }

  // default_replication_factor - computed: false, optional: false, required: true
  private _defaultReplicationFactor?: number; 
  public get defaultReplicationFactor() {
    return this.getNumberAttribute('default_replication_factor');
  }
  public set defaultReplicationFactor(value: number) {
    this._defaultReplicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReplicationFactorInput() {
    return this._defaultReplicationFactor;
  }
}
export interface CkafkaInstanceDynamicRetentionConfig {
  /**
  * Minimum retention time, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#bottom_retention CkafkaInstance#bottom_retention}
  */
  readonly bottomRetention?: number;
  /**
  * Disk quota threshold (in percentage) for triggering the message retention time change event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#disk_quota_percentage CkafkaInstance#disk_quota_percentage}
  */
  readonly diskQuotaPercentage?: number;
  /**
  * Whether the dynamic message retention time configuration is enabled. 0: disabled; 1: enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#enable CkafkaInstance#enable}
  */
  readonly enable?: number;
  /**
  * Percentage by which the message retention time is shortened each time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#step_forward_percentage CkafkaInstance#step_forward_percentage}
  */
  readonly stepForwardPercentage?: number;
}

export function ckafkaInstanceDynamicRetentionConfigToTerraform(struct?: CkafkaInstanceDynamicRetentionConfigOutputReference | CkafkaInstanceDynamicRetentionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom_retention: cdktf.numberToTerraform(struct!.bottomRetention),
    disk_quota_percentage: cdktf.numberToTerraform(struct!.diskQuotaPercentage),
    enable: cdktf.numberToTerraform(struct!.enable),
    step_forward_percentage: cdktf.numberToTerraform(struct!.stepForwardPercentage),
  }
}


export function ckafkaInstanceDynamicRetentionConfigToHclTerraform(struct?: CkafkaInstanceDynamicRetentionConfigOutputReference | CkafkaInstanceDynamicRetentionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottom_retention: {
      value: cdktf.numberToHclTerraform(struct!.bottomRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_quota_percentage: {
      value: cdktf.numberToHclTerraform(struct!.diskQuotaPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_forward_percentage: {
      value: cdktf.numberToHclTerraform(struct!.stepForwardPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaInstanceDynamicRetentionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaInstanceDynamicRetentionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottomRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottomRetention = this._bottomRetention;
    }
    if (this._diskQuotaPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskQuotaPercentage = this._diskQuotaPercentage;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._stepForwardPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepForwardPercentage = this._stepForwardPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaInstanceDynamicRetentionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottomRetention = undefined;
      this._diskQuotaPercentage = undefined;
      this._enable = undefined;
      this._stepForwardPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottomRetention = value.bottomRetention;
      this._diskQuotaPercentage = value.diskQuotaPercentage;
      this._enable = value.enable;
      this._stepForwardPercentage = value.stepForwardPercentage;
    }
  }

  // bottom_retention - computed: true, optional: true, required: false
  private _bottomRetention?: number; 
  public get bottomRetention() {
    return this.getNumberAttribute('bottom_retention');
  }
  public set bottomRetention(value: number) {
    this._bottomRetention = value;
  }
  public resetBottomRetention() {
    this._bottomRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomRetentionInput() {
    return this._bottomRetention;
  }

  // disk_quota_percentage - computed: true, optional: true, required: false
  private _diskQuotaPercentage?: number; 
  public get diskQuotaPercentage() {
    return this.getNumberAttribute('disk_quota_percentage');
  }
  public set diskQuotaPercentage(value: number) {
    this._diskQuotaPercentage = value;
  }
  public resetDiskQuotaPercentage() {
    this._diskQuotaPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskQuotaPercentageInput() {
    return this._diskQuotaPercentage;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // step_forward_percentage - computed: true, optional: true, required: false
  private _stepForwardPercentage?: number; 
  public get stepForwardPercentage() {
    return this.getNumberAttribute('step_forward_percentage');
  }
  public set stepForwardPercentage(value: number) {
    this._stepForwardPercentage = value;
  }
  public resetStepForwardPercentage() {
    this._stepForwardPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepForwardPercentageInput() {
    return this._stepForwardPercentage;
  }
}
export interface CkafkaInstanceTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#key CkafkaInstance#key}
  */
  readonly key: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#value CkafkaInstance#value}
  */
  readonly value: string;
}

export function ckafkaInstanceTagsToTerraform(struct?: CkafkaInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ckafkaInstanceTagsToHclTerraform(struct?: CkafkaInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CkafkaInstanceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaInstanceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaInstanceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class CkafkaInstanceTagsList extends cdktf.ComplexList {
  public internalValue? : CkafkaInstanceTags[] | cdktf.IResolvable

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
  public get(index: number): CkafkaInstanceTagsOutputReference {
    return new CkafkaInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance tencentcloud_ckafka_instance}
*/
export class CkafkaInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaInstance to import
  * @param importFromId The id of the existing CkafkaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ckafka_instance tencentcloud_ckafka_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_instance',
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
    this._bandWidth = config.bandWidth;
    this._chargeType = config.chargeType;
    this._diskSize = config.diskSize;
    this._diskType = config.diskType;
    this._elasticBandwidthSwitch = config.elasticBandwidthSwitch;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._kafkaVersion = config.kafkaVersion;
    this._maxMessageByte = config.maxMessageByte;
    this._msgRetentionTime = config.msgRetentionTime;
    this._multiZoneFlag = config.multiZoneFlag;
    this._partition = config.partition;
    this._period = config.period;
    this._publicNetwork = config.publicNetwork;
    this._rebalanceTime = config.rebalanceTime;
    this._renewFlag = config.renewFlag;
    this._specificationsType = config.specificationsType;
    this._subnetId = config.subnetId;
    this._tagSet = config.tagSet;
    this._upgradeStrategy = config.upgradeStrategy;
    this._vpcId = config.vpcId;
    this._zoneId = config.zoneId;
    this._zoneIds = config.zoneIds;
    this._config.internalValue = config.config;
    this._dynamicRetentionConfig.internalValue = config.dynamicRetentionConfig;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // band_width - computed: true, optional: true, required: false
  private _bandWidth?: number; 
  public get bandWidth() {
    return this.getNumberAttribute('band_width');
  }
  public set bandWidth(value: number) {
    this._bandWidth = value;
  }
  public resetBandWidth() {
    this._bandWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandWidthInput() {
    return this._bandWidth;
  }

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

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // elastic_bandwidth_switch - computed: false, optional: true, required: false
  private _elasticBandwidthSwitch?: number; 
  public get elasticBandwidthSwitch() {
    return this.getNumberAttribute('elastic_bandwidth_switch');
  }
  public set elasticBandwidthSwitch(value: number) {
    this._elasticBandwidthSwitch = value;
  }
  public resetElasticBandwidthSwitch() {
    this._elasticBandwidthSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticBandwidthSwitchInput() {
    return this._elasticBandwidthSwitch;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: number; 
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }
  public set instanceType(value: number) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kafka_version - computed: true, optional: true, required: false
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  public resetKafkaVersion() {
    this._kafkaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // max_message_byte - computed: true, optional: true, required: false
  private _maxMessageByte?: number; 
  public get maxMessageByte() {
    return this.getNumberAttribute('max_message_byte');
  }
  public set maxMessageByte(value: number) {
    this._maxMessageByte = value;
  }
  public resetMaxMessageByte() {
    this._maxMessageByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageByteInput() {
    return this._maxMessageByte;
  }

  // msg_retention_time - computed: true, optional: true, required: false
  private _msgRetentionTime?: number; 
  public get msgRetentionTime() {
    return this.getNumberAttribute('msg_retention_time');
  }
  public set msgRetentionTime(value: number) {
    this._msgRetentionTime = value;
  }
  public resetMsgRetentionTime() {
    this._msgRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgRetentionTimeInput() {
    return this._msgRetentionTime;
  }

  // multi_zone_flag - computed: false, optional: true, required: false
  private _multiZoneFlag?: boolean | cdktf.IResolvable; 
  public get multiZoneFlag() {
    return this.getBooleanAttribute('multi_zone_flag');
  }
  public set multiZoneFlag(value: boolean | cdktf.IResolvable) {
    this._multiZoneFlag = value;
  }
  public resetMultiZoneFlag() {
    this._multiZoneFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneFlagInput() {
    return this._multiZoneFlag;
  }

  // partition - computed: true, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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

  // public_network - computed: true, optional: true, required: false
  private _publicNetwork?: number; 
  public get publicNetwork() {
    return this.getNumberAttribute('public_network');
  }
  public set publicNetwork(value: number) {
    this._publicNetwork = value;
  }
  public resetPublicNetwork() {
    this._publicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork;
  }

  // rebalance_time - computed: false, optional: true, required: false
  private _rebalanceTime?: number; 
  public get rebalanceTime() {
    return this.getNumberAttribute('rebalance_time');
  }
  public set rebalanceTime(value: number) {
    this._rebalanceTime = value;
  }
  public resetRebalanceTime() {
    this._rebalanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceTimeInput() {
    return this._rebalanceTime;
  }

  // renew_flag - computed: true, optional: true, required: false
  private _renewFlag?: number; 
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }
  public set renewFlag(value: number) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }

  // specifications_type - computed: false, optional: true, required: false
  private _specificationsType?: string; 
  public get specificationsType() {
    return this.getStringAttribute('specifications_type');
  }
  public set specificationsType(value: string) {
    this._specificationsType = value;
  }
  public resetSpecificationsType() {
    this._specificationsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationsTypeInput() {
    return this._specificationsType;
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

  // tag_set - computed: true, optional: true, required: false
  private _tagSet?: { [key: string]: string }; 
  public get tagSet() {
    return this.getStringMapAttribute('tag_set');
  }
  public set tagSet(value: { [key: string]: string }) {
    this._tagSet = value;
  }
  public resetTagSet() {
    this._tagSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetInput() {
    return this._tagSet;
  }

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy?: number; 
  public get upgradeStrategy() {
    return this.getNumberAttribute('upgrade_strategy');
  }
  public set upgradeStrategy(value: number) {
    this._upgradeStrategy = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy;
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
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
    return this.getStringAttribute('vport');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: number; 
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
  public set zoneId(value: number) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // zone_ids - computed: false, optional: true, required: false
  private _zoneIds?: number[]; 
  public get zoneIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('zone_ids')));
  }
  public set zoneIds(value: number[]) {
    this._zoneIds = value;
  }
  public resetZoneIds() {
    this._zoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // config - computed: false, optional: true, required: false
  private _config = new CkafkaInstanceConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CkafkaInstanceConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // dynamic_retention_config - computed: false, optional: true, required: false
  private _dynamicRetentionConfig = new CkafkaInstanceDynamicRetentionConfigOutputReference(this, "dynamic_retention_config");
  public get dynamicRetentionConfig() {
    return this._dynamicRetentionConfig;
  }
  public putDynamicRetentionConfig(value: CkafkaInstanceDynamicRetentionConfig) {
    this._dynamicRetentionConfig.internalValue = value;
  }
  public resetDynamicRetentionConfig() {
    this._dynamicRetentionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRetentionConfigInput() {
    return this._dynamicRetentionConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CkafkaInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CkafkaInstanceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      band_width: cdktf.numberToTerraform(this._bandWidth),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_type: cdktf.stringToTerraform(this._diskType),
      elastic_bandwidth_switch: cdktf.numberToTerraform(this._elasticBandwidthSwitch),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.numberToTerraform(this._instanceType),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      max_message_byte: cdktf.numberToTerraform(this._maxMessageByte),
      msg_retention_time: cdktf.numberToTerraform(this._msgRetentionTime),
      multi_zone_flag: cdktf.booleanToTerraform(this._multiZoneFlag),
      partition: cdktf.numberToTerraform(this._partition),
      period: cdktf.numberToTerraform(this._period),
      public_network: cdktf.numberToTerraform(this._publicNetwork),
      rebalance_time: cdktf.numberToTerraform(this._rebalanceTime),
      renew_flag: cdktf.numberToTerraform(this._renewFlag),
      specifications_type: cdktf.stringToTerraform(this._specificationsType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tag_set: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagSet),
      upgrade_strategy: cdktf.numberToTerraform(this._upgradeStrategy),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone_id: cdktf.numberToTerraform(this._zoneId),
      zone_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._zoneIds),
      config: ckafkaInstanceConfigAToTerraform(this._config.internalValue),
      dynamic_retention_config: ckafkaInstanceDynamicRetentionConfigToTerraform(this._dynamicRetentionConfig.internalValue),
      tags: cdktf.listMapper(ckafkaInstanceTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      band_width: {
        value: cdktf.numberToHclTerraform(this._bandWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_bandwidth_switch: {
        value: cdktf.numberToHclTerraform(this._elasticBandwidthSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      instance_type: {
        value: cdktf.numberToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kafka_version: {
        value: cdktf.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_byte: {
        value: cdktf.numberToHclTerraform(this._maxMessageByte),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_retention_time: {
        value: cdktf.numberToHclTerraform(this._msgRetentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_zone_flag: {
        value: cdktf.booleanToHclTerraform(this._multiZoneFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partition: {
        value: cdktf.numberToHclTerraform(this._partition),
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
      public_network: {
        value: cdktf.numberToHclTerraform(this._publicNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rebalance_time: {
        value: cdktf.numberToHclTerraform(this._rebalanceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_flag: {
        value: cdktf.numberToHclTerraform(this._renewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      specifications_type: {
        value: cdktf.stringToHclTerraform(this._specificationsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_set: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagSet),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upgrade_strategy: {
        value: cdktf.numberToHclTerraform(this._upgradeStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.numberToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      config: {
        value: ckafkaInstanceConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaInstanceConfigAList",
      },
      dynamic_retention_config: {
        value: ckafkaInstanceDynamicRetentionConfigToHclTerraform(this._dynamicRetentionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaInstanceDynamicRetentionConfigList",
      },
      tags: {
        value: cdktf.listMapperHcl(ckafkaInstanceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaInstanceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
