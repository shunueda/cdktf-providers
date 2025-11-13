// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbEventTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of events for batch delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#batch_event_count EbEventTarget#batch_event_count}
  */
  readonly batchEventCount?: number;
  /**
  * Maximum waiting time for batch delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#batch_timeout EbEventTarget#batch_timeout}
  */
  readonly batchTimeout?: number;
  /**
  * Enable batch delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#enable_batch_delivery EbEventTarget#enable_batch_delivery}
  */
  readonly enableBatchDelivery?: boolean | cdktf.IResolvable;
  /**
  * event bus id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#event_bus_id EbEventTarget#event_bus_id}
  */
  readonly eventBusId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#id EbEventTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * event rule id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#rule_id EbEventTarget#rule_id}
  */
  readonly ruleId: string;
  /**
  * target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#type EbEventTarget#type}
  */
  readonly type: string;
  /**
  * target_description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#target_description EbEventTarget#target_description}
  */
  readonly targetDescription: EbEventTargetTargetDescription;
}
export interface EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy {
  /**
  * Maximum number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#max_retry_attempts EbEventTarget#max_retry_attempts}
  */
  readonly maxRetryAttempts: number;
  /**
  * Retry Interval Unit: Seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#retry_interval EbEventTarget#retry_interval}
  */
  readonly retryInterval: number;
}

export function ebEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyToTerraform(struct?: EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyOutputReference | EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retry_attempts: cdktf.numberToTerraform(struct!.maxRetryAttempts),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
  }
}


export function ebEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyToHclTerraform(struct?: EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyOutputReference | EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryAttempts = this._maxRetryAttempts;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRetryAttempts = undefined;
      this._retryInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRetryAttempts = value.maxRetryAttempts;
      this._retryInterval = value.retryInterval;
    }
  }

  // max_retry_attempts - computed: false, optional: false, required: true
  private _maxRetryAttempts?: number; 
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }
  public set maxRetryAttempts(value: number) {
    this._maxRetryAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryAttemptsInput() {
    return this._maxRetryAttempts;
  }

  // retry_interval - computed: false, optional: false, required: true
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }
}
export interface EbEventTargetTargetDescriptionCkafkaTargetParams {
  /**
  * The ckafka topic to deliver to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#topic_name EbEventTarget#topic_name}
  */
  readonly topicName: string;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#retry_policy EbEventTarget#retry_policy}
  */
  readonly retryPolicy: EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy;
}

export function ebEventTargetTargetDescriptionCkafkaTargetParamsToTerraform(struct?: EbEventTargetTargetDescriptionCkafkaTargetParamsOutputReference | EbEventTargetTargetDescriptionCkafkaTargetParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    retry_policy: ebEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyToTerraform(struct!.retryPolicy),
  }
}


export function ebEventTargetTargetDescriptionCkafkaTargetParamsToHclTerraform(struct?: EbEventTargetTargetDescriptionCkafkaTargetParamsOutputReference | EbEventTargetTargetDescriptionCkafkaTargetParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_policy: {
      value: ebEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTargetTargetDescriptionCkafkaTargetParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTargetTargetDescriptionCkafkaTargetParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTargetTargetDescriptionCkafkaTargetParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topicName = undefined;
      this._retryPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topicName = value.topicName;
      this._retryPolicy.internalValue = value.retryPolicy;
    }
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // retry_policy - computed: false, optional: false, required: true
  private _retryPolicy = new EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: EbEventTargetTargetDescriptionCkafkaTargetParamsRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }
}
export interface EbEventTargetTargetDescriptionEsTargetParams {
  /**
  * index prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#index_prefix EbEventTarget#index_prefix}
  */
  readonly indexPrefix: string;
  /**
  * DTS index configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#index_suffix_mode EbEventTarget#index_suffix_mode}
  */
  readonly indexSuffixMode: string;
  /**
  * es template type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#index_template_type EbEventTarget#index_template_type}
  */
  readonly indexTemplateType?: string;
  /**
  * network connection type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#net_mode EbEventTarget#net_mode}
  */
  readonly netMode: string;
  /**
  * DTS event configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#output_mode EbEventTarget#output_mode}
  */
  readonly outputMode: string;
  /**
  * es log rotation granularity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#rotation_interval EbEventTarget#rotation_interval}
  */
  readonly rotationInterval: string;
}

export function ebEventTargetTargetDescriptionEsTargetParamsToTerraform(struct?: EbEventTargetTargetDescriptionEsTargetParamsOutputReference | EbEventTargetTargetDescriptionEsTargetParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_prefix: cdktf.stringToTerraform(struct!.indexPrefix),
    index_suffix_mode: cdktf.stringToTerraform(struct!.indexSuffixMode),
    index_template_type: cdktf.stringToTerraform(struct!.indexTemplateType),
    net_mode: cdktf.stringToTerraform(struct!.netMode),
    output_mode: cdktf.stringToTerraform(struct!.outputMode),
    rotation_interval: cdktf.stringToTerraform(struct!.rotationInterval),
  }
}


export function ebEventTargetTargetDescriptionEsTargetParamsToHclTerraform(struct?: EbEventTargetTargetDescriptionEsTargetParamsOutputReference | EbEventTargetTargetDescriptionEsTargetParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_prefix: {
      value: cdktf.stringToHclTerraform(struct!.indexPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_suffix_mode: {
      value: cdktf.stringToHclTerraform(struct!.indexSuffixMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_template_type: {
      value: cdktf.stringToHclTerraform(struct!.indexTemplateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_mode: {
      value: cdktf.stringToHclTerraform(struct!.netMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_mode: {
      value: cdktf.stringToHclTerraform(struct!.outputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTargetTargetDescriptionEsTargetParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTargetTargetDescriptionEsTargetParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPrefix = this._indexPrefix;
    }
    if (this._indexSuffixMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexSuffixMode = this._indexSuffixMode;
    }
    if (this._indexTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexTemplateType = this._indexTemplateType;
    }
    if (this._netMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.netMode = this._netMode;
    }
    if (this._outputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputMode = this._outputMode;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTargetTargetDescriptionEsTargetParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indexPrefix = undefined;
      this._indexSuffixMode = undefined;
      this._indexTemplateType = undefined;
      this._netMode = undefined;
      this._outputMode = undefined;
      this._rotationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indexPrefix = value.indexPrefix;
      this._indexSuffixMode = value.indexSuffixMode;
      this._indexTemplateType = value.indexTemplateType;
      this._netMode = value.netMode;
      this._outputMode = value.outputMode;
      this._rotationInterval = value.rotationInterval;
    }
  }

  // index_prefix - computed: false, optional: false, required: true
  private _indexPrefix?: string; 
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }
  public set indexPrefix(value: string) {
    this._indexPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPrefixInput() {
    return this._indexPrefix;
  }

  // index_suffix_mode - computed: false, optional: false, required: true
  private _indexSuffixMode?: string; 
  public get indexSuffixMode() {
    return this.getStringAttribute('index_suffix_mode');
  }
  public set indexSuffixMode(value: string) {
    this._indexSuffixMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSuffixModeInput() {
    return this._indexSuffixMode;
  }

  // index_template_type - computed: false, optional: true, required: false
  private _indexTemplateType?: string; 
  public get indexTemplateType() {
    return this.getStringAttribute('index_template_type');
  }
  public set indexTemplateType(value: string) {
    this._indexTemplateType = value;
  }
  public resetIndexTemplateType() {
    this._indexTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTemplateTypeInput() {
    return this._indexTemplateType;
  }

  // net_mode - computed: false, optional: false, required: true
  private _netMode?: string; 
  public get netMode() {
    return this.getStringAttribute('net_mode');
  }
  public set netMode(value: string) {
    this._netMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netModeInput() {
    return this._netMode;
  }

  // output_mode - computed: false, optional: false, required: true
  private _outputMode?: string; 
  public get outputMode() {
    return this.getStringAttribute('output_mode');
  }
  public set outputMode(value: string) {
    this._outputMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModeInput() {
    return this._outputMode;
  }

  // rotation_interval - computed: false, optional: false, required: true
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }
}
export interface EbEventTargetTargetDescriptionScfParams {
  /**
  * Maximum number of events for batch delivery. This parameter is no longer effective, please use the batch_event_count parameter at the outer level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#batch_event_count EbEventTarget#batch_event_count}
  */
  readonly batchEventCount?: number;
  /**
  * Maximum waiting time for batch delivery. This parameter is no longer effective, please use the batch_timeout parameter at the outer level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#batch_timeout EbEventTarget#batch_timeout}
  */
  readonly batchTimeout?: number;
  /**
  * Enable batch delivery. This parameter is no longer effective, please use the enable_batch_delivery parameter at the outer level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#enable_batch_delivery EbEventTarget#enable_batch_delivery}
  */
  readonly enableBatchDelivery?: boolean | cdktf.IResolvable;
}

export function ebEventTargetTargetDescriptionScfParamsToTerraform(struct?: EbEventTargetTargetDescriptionScfParamsOutputReference | EbEventTargetTargetDescriptionScfParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_event_count: cdktf.numberToTerraform(struct!.batchEventCount),
    batch_timeout: cdktf.numberToTerraform(struct!.batchTimeout),
    enable_batch_delivery: cdktf.booleanToTerraform(struct!.enableBatchDelivery),
  }
}


export function ebEventTargetTargetDescriptionScfParamsToHclTerraform(struct?: EbEventTargetTargetDescriptionScfParamsOutputReference | EbEventTargetTargetDescriptionScfParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_event_count: {
      value: cdktf.numberToHclTerraform(struct!.batchEventCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_timeout: {
      value: cdktf.numberToHclTerraform(struct!.batchTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_batch_delivery: {
      value: cdktf.booleanToHclTerraform(struct!.enableBatchDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTargetTargetDescriptionScfParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTargetTargetDescriptionScfParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchEventCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchEventCount = this._batchEventCount;
    }
    if (this._batchTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchTimeout = this._batchTimeout;
    }
    if (this._enableBatchDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBatchDelivery = this._enableBatchDelivery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTargetTargetDescriptionScfParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchEventCount = undefined;
      this._batchTimeout = undefined;
      this._enableBatchDelivery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchEventCount = value.batchEventCount;
      this._batchTimeout = value.batchTimeout;
      this._enableBatchDelivery = value.enableBatchDelivery;
    }
  }

  // batch_event_count - computed: true, optional: true, required: false
  private _batchEventCount?: number; 
  public get batchEventCount() {
    return this.getNumberAttribute('batch_event_count');
  }
  public set batchEventCount(value: number) {
    this._batchEventCount = value;
  }
  public resetBatchEventCount() {
    this._batchEventCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchEventCountInput() {
    return this._batchEventCount;
  }

  // batch_timeout - computed: true, optional: true, required: false
  private _batchTimeout?: number; 
  public get batchTimeout() {
    return this.getNumberAttribute('batch_timeout');
  }
  public set batchTimeout(value: number) {
    this._batchTimeout = value;
  }
  public resetBatchTimeout() {
    this._batchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTimeoutInput() {
    return this._batchTimeout;
  }

  // enable_batch_delivery - computed: true, optional: true, required: false
  private _enableBatchDelivery?: boolean | cdktf.IResolvable; 
  public get enableBatchDelivery() {
    return this.getBooleanAttribute('enable_batch_delivery');
  }
  public set enableBatchDelivery(value: boolean | cdktf.IResolvable) {
    this._enableBatchDelivery = value;
  }
  public resetEnableBatchDelivery() {
    this._enableBatchDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchDeliveryInput() {
    return this._enableBatchDelivery;
  }
}
export interface EbEventTargetTargetDescription {
  /**
  * QCS resource six-stage format, more references [resource six-stage format](https://cloud.tencent.com/document/product/598/10606).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#resource_description EbEventTarget#resource_description}
  */
  readonly resourceDescription: string;
  /**
  * ckafka_target_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#ckafka_target_params EbEventTarget#ckafka_target_params}
  */
  readonly ckafkaTargetParams?: EbEventTargetTargetDescriptionCkafkaTargetParams;
  /**
  * es_target_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#es_target_params EbEventTarget#es_target_params}
  */
  readonly esTargetParams?: EbEventTargetTargetDescriptionEsTargetParams;
  /**
  * scf_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#scf_params EbEventTarget#scf_params}
  */
  readonly scfParams?: EbEventTargetTargetDescriptionScfParams;
}

export function ebEventTargetTargetDescriptionToTerraform(struct?: EbEventTargetTargetDescriptionOutputReference | EbEventTargetTargetDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_description: cdktf.stringToTerraform(struct!.resourceDescription),
    ckafka_target_params: ebEventTargetTargetDescriptionCkafkaTargetParamsToTerraform(struct!.ckafkaTargetParams),
    es_target_params: ebEventTargetTargetDescriptionEsTargetParamsToTerraform(struct!.esTargetParams),
    scf_params: ebEventTargetTargetDescriptionScfParamsToTerraform(struct!.scfParams),
  }
}


export function ebEventTargetTargetDescriptionToHclTerraform(struct?: EbEventTargetTargetDescriptionOutputReference | EbEventTargetTargetDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_description: {
      value: cdktf.stringToHclTerraform(struct!.resourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ckafka_target_params: {
      value: ebEventTargetTargetDescriptionCkafkaTargetParamsToHclTerraform(struct!.ckafkaTargetParams),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTargetTargetDescriptionCkafkaTargetParamsList",
    },
    es_target_params: {
      value: ebEventTargetTargetDescriptionEsTargetParamsToHclTerraform(struct!.esTargetParams),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTargetTargetDescriptionEsTargetParamsList",
    },
    scf_params: {
      value: ebEventTargetTargetDescriptionScfParamsToHclTerraform(struct!.scfParams),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTargetTargetDescriptionScfParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTargetTargetDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTargetTargetDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDescription = this._resourceDescription;
    }
    if (this._ckafkaTargetParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ckafkaTargetParams = this._ckafkaTargetParams?.internalValue;
    }
    if (this._esTargetParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTargetParams = this._esTargetParams?.internalValue;
    }
    if (this._scfParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scfParams = this._scfParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTargetTargetDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceDescription = undefined;
      this._ckafkaTargetParams.internalValue = undefined;
      this._esTargetParams.internalValue = undefined;
      this._scfParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceDescription = value.resourceDescription;
      this._ckafkaTargetParams.internalValue = value.ckafkaTargetParams;
      this._esTargetParams.internalValue = value.esTargetParams;
      this._scfParams.internalValue = value.scfParams;
    }
  }

  // resource_description - computed: false, optional: false, required: true
  private _resourceDescription?: string; 
  public get resourceDescription() {
    return this.getStringAttribute('resource_description');
  }
  public set resourceDescription(value: string) {
    this._resourceDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDescriptionInput() {
    return this._resourceDescription;
  }

  // ckafka_target_params - computed: false, optional: true, required: false
  private _ckafkaTargetParams = new EbEventTargetTargetDescriptionCkafkaTargetParamsOutputReference(this, "ckafka_target_params");
  public get ckafkaTargetParams() {
    return this._ckafkaTargetParams;
  }
  public putCkafkaTargetParams(value: EbEventTargetTargetDescriptionCkafkaTargetParams) {
    this._ckafkaTargetParams.internalValue = value;
  }
  public resetCkafkaTargetParams() {
    this._ckafkaTargetParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckafkaTargetParamsInput() {
    return this._ckafkaTargetParams.internalValue;
  }

  // es_target_params - computed: false, optional: true, required: false
  private _esTargetParams = new EbEventTargetTargetDescriptionEsTargetParamsOutputReference(this, "es_target_params");
  public get esTargetParams() {
    return this._esTargetParams;
  }
  public putEsTargetParams(value: EbEventTargetTargetDescriptionEsTargetParams) {
    this._esTargetParams.internalValue = value;
  }
  public resetEsTargetParams() {
    this._esTargetParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTargetParamsInput() {
    return this._esTargetParams.internalValue;
  }

  // scf_params - computed: false, optional: true, required: false
  private _scfParams = new EbEventTargetTargetDescriptionScfParamsOutputReference(this, "scf_params");
  public get scfParams() {
    return this._scfParams;
  }
  public putScfParams(value: EbEventTargetTargetDescriptionScfParams) {
    this._scfParams.internalValue = value;
  }
  public resetScfParams() {
    this._scfParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfParamsInput() {
    return this._scfParams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target tencentcloud_eb_event_target}
*/
export class EbEventTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eb_event_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbEventTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbEventTarget to import
  * @param importFromId The id of the existing EbEventTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbEventTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eb_event_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eb_event_target tencentcloud_eb_event_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbEventTargetConfig
  */
  public constructor(scope: Construct, id: string, config: EbEventTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eb_event_target',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._batchEventCount = config.batchEventCount;
    this._batchTimeout = config.batchTimeout;
    this._enableBatchDelivery = config.enableBatchDelivery;
    this._eventBusId = config.eventBusId;
    this._id = config.id;
    this._ruleId = config.ruleId;
    this._type = config.type;
    this._targetDescription.internalValue = config.targetDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_event_count - computed: true, optional: true, required: false
  private _batchEventCount?: number; 
  public get batchEventCount() {
    return this.getNumberAttribute('batch_event_count');
  }
  public set batchEventCount(value: number) {
    this._batchEventCount = value;
  }
  public resetBatchEventCount() {
    this._batchEventCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchEventCountInput() {
    return this._batchEventCount;
  }

  // batch_timeout - computed: true, optional: true, required: false
  private _batchTimeout?: number; 
  public get batchTimeout() {
    return this.getNumberAttribute('batch_timeout');
  }
  public set batchTimeout(value: number) {
    this._batchTimeout = value;
  }
  public resetBatchTimeout() {
    this._batchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTimeoutInput() {
    return this._batchTimeout;
  }

  // enable_batch_delivery - computed: true, optional: true, required: false
  private _enableBatchDelivery?: boolean | cdktf.IResolvable; 
  public get enableBatchDelivery() {
    return this.getBooleanAttribute('enable_batch_delivery');
  }
  public set enableBatchDelivery(value: boolean | cdktf.IResolvable) {
    this._enableBatchDelivery = value;
  }
  public resetEnableBatchDelivery() {
    this._enableBatchDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchDeliveryInput() {
    return this._enableBatchDelivery;
  }

  // event_bus_id - computed: false, optional: false, required: true
  private _eventBusId?: string; 
  public get eventBusId() {
    return this.getStringAttribute('event_bus_id');
  }
  public set eventBusId(value: string) {
    this._eventBusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusIdInput() {
    return this._eventBusId;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // target_description - computed: false, optional: false, required: true
  private _targetDescription = new EbEventTargetTargetDescriptionOutputReference(this, "target_description");
  public get targetDescription() {
    return this._targetDescription;
  }
  public putTargetDescription(value: EbEventTargetTargetDescription) {
    this._targetDescription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDescriptionInput() {
    return this._targetDescription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_event_count: cdktf.numberToTerraform(this._batchEventCount),
      batch_timeout: cdktf.numberToTerraform(this._batchTimeout),
      enable_batch_delivery: cdktf.booleanToTerraform(this._enableBatchDelivery),
      event_bus_id: cdktf.stringToTerraform(this._eventBusId),
      id: cdktf.stringToTerraform(this._id),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      type: cdktf.stringToTerraform(this._type),
      target_description: ebEventTargetTargetDescriptionToTerraform(this._targetDescription.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_event_count: {
        value: cdktf.numberToHclTerraform(this._batchEventCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      batch_timeout: {
        value: cdktf.numberToHclTerraform(this._batchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_batch_delivery: {
        value: cdktf.booleanToHclTerraform(this._enableBatchDelivery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_bus_id: {
        value: cdktf.stringToHclTerraform(this._eventBusId),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_description: {
        value: ebEventTargetTargetDescriptionToHclTerraform(this._targetDescription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbEventTargetTargetDescriptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
