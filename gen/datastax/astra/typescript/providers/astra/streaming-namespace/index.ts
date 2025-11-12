// https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster where the tenant is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#cluster StreamingNamespace#cluster}
  */
  readonly cluster: string;
  /**
  * Name of the Pulsar namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#namespace StreamingNamespace#namespace}
  */
  readonly namespace: string;
  /**
  * Policies to be applied to the Pulsar namespace. For more details related to valid policy configuration, refer to the Pulsar namespace policies documentation (https://pulsar.apache.org/docs/3.0.x/admin-api-namespaces/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#policies StreamingNamespace#policies}
  */
  readonly policies?: StreamingNamespacePolicies;
  /**
  * Name of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#tenant StreamingNamespace#tenant}
  */
  readonly tenant: string;
}
export interface StreamingNamespacePoliciesAutoTopicCreationOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#allow_auto_topic_creation StreamingNamespace#allow_auto_topic_creation}
  */
  readonly allowAutoTopicCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#default_num_partitions StreamingNamespace#default_num_partitions}
  */
  readonly defaultNumPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#topic_type StreamingNamespace#topic_type}
  */
  readonly topicType?: string;
}

export function streamingNamespacePoliciesAutoTopicCreationOverrideToTerraform(struct?: StreamingNamespacePoliciesAutoTopicCreationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_auto_topic_creation: cdktf.booleanToTerraform(struct!.allowAutoTopicCreation),
    default_num_partitions: cdktf.numberToTerraform(struct!.defaultNumPartitions),
    topic_type: cdktf.stringToTerraform(struct!.topicType),
  }
}


export function streamingNamespacePoliciesAutoTopicCreationOverrideToHclTerraform(struct?: StreamingNamespacePoliciesAutoTopicCreationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_auto_topic_creation: {
      value: cdktf.booleanToHclTerraform(struct!.allowAutoTopicCreation),
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
    topic_type: {
      value: cdktf.stringToHclTerraform(struct!.topicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingNamespacePoliciesAutoTopicCreationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingNamespacePoliciesAutoTopicCreationOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAutoTopicCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAutoTopicCreation = this._allowAutoTopicCreation;
    }
    if (this._defaultNumPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNumPartitions = this._defaultNumPartitions;
    }
    if (this._topicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicType = this._topicType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingNamespacePoliciesAutoTopicCreationOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAutoTopicCreation = undefined;
      this._defaultNumPartitions = undefined;
      this._topicType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAutoTopicCreation = value.allowAutoTopicCreation;
      this._defaultNumPartitions = value.defaultNumPartitions;
      this._topicType = value.topicType;
    }
  }

  // allow_auto_topic_creation - computed: true, optional: true, required: false
  private _allowAutoTopicCreation?: boolean | cdktf.IResolvable; 
  public get allowAutoTopicCreation() {
    return this.getBooleanAttribute('allow_auto_topic_creation');
  }
  public set allowAutoTopicCreation(value: boolean | cdktf.IResolvable) {
    this._allowAutoTopicCreation = value;
  }
  public resetAllowAutoTopicCreation() {
    this._allowAutoTopicCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoTopicCreationInput() {
    return this._allowAutoTopicCreation;
  }

  // default_num_partitions - computed: true, optional: true, required: false
  private _defaultNumPartitions?: number; 
  public get defaultNumPartitions() {
    return this.getNumberAttribute('default_num_partitions');
  }
  public set defaultNumPartitions(value: number) {
    this._defaultNumPartitions = value;
  }
  public resetDefaultNumPartitions() {
    this._defaultNumPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNumPartitionsInput() {
    return this._defaultNumPartitions;
  }

  // topic_type - computed: true, optional: true, required: false
  private _topicType?: string; 
  public get topicType() {
    return this.getStringAttribute('topic_type');
  }
  public set topicType(value: string) {
    this._topicType = value;
  }
  public resetTopicType() {
    this._topicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicTypeInput() {
    return this._topicType;
  }
}
export interface StreamingNamespacePoliciesBacklogQuotaMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#limit StreamingNamespace#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#limit_size StreamingNamespace#limit_size}
  */
  readonly limitSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#limit_time StreamingNamespace#limit_time}
  */
  readonly limitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#policy StreamingNamespace#policy}
  */
  readonly policy?: string;
}

export function streamingNamespacePoliciesBacklogQuotaMapToTerraform(struct?: StreamingNamespacePoliciesBacklogQuotaMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_size: cdktf.numberToTerraform(struct!.limitSize),
    limit_time: cdktf.numberToTerraform(struct!.limitTime),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function streamingNamespacePoliciesBacklogQuotaMapToHclTerraform(struct?: StreamingNamespacePoliciesBacklogQuotaMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_size: {
      value: cdktf.numberToHclTerraform(struct!.limitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_time: {
      value: cdktf.numberToHclTerraform(struct!.limitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingNamespacePoliciesBacklogQuotaMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): StreamingNamespacePoliciesBacklogQuotaMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitSize = this._limitSize;
    }
    if (this._limitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitTime = this._limitTime;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingNamespacePoliciesBacklogQuotaMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._limitSize = undefined;
      this._limitTime = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._limitSize = value.limitSize;
      this._limitTime = value.limitTime;
      this._policy = value.policy;
    }
  }

  // limit - computed: true, optional: true, required: false
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

  // limit_size - computed: true, optional: true, required: false
  private _limitSize?: number; 
  public get limitSize() {
    return this.getNumberAttribute('limit_size');
  }
  public set limitSize(value: number) {
    this._limitSize = value;
  }
  public resetLimitSize() {
    this._limitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitSizeInput() {
    return this._limitSize;
  }

  // limit_time - computed: true, optional: true, required: false
  private _limitTime?: number; 
  public get limitTime() {
    return this.getNumberAttribute('limit_time');
  }
  public set limitTime(value: number) {
    this._limitTime = value;
  }
  public resetLimitTime() {
    this._limitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTimeInput() {
    return this._limitTime;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

export class StreamingNamespacePoliciesBacklogQuotaMapMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: StreamingNamespacePoliciesBacklogQuotaMap } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): StreamingNamespacePoliciesBacklogQuotaMapOutputReference {
    return new StreamingNamespacePoliciesBacklogQuotaMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface StreamingNamespacePoliciesInactiveTopicPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#delete_mode StreamingNamespace#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#delete_while_inactive StreamingNamespace#delete_while_inactive}
  */
  readonly deleteWhileInactive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#max_inactive_duration_seconds StreamingNamespace#max_inactive_duration_seconds}
  */
  readonly maxInactiveDurationSeconds?: number;
}

export function streamingNamespacePoliciesInactiveTopicPoliciesToTerraform(struct?: StreamingNamespacePoliciesInactiveTopicPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_mode: cdktf.stringToTerraform(struct!.deleteMode),
    delete_while_inactive: cdktf.booleanToTerraform(struct!.deleteWhileInactive),
    max_inactive_duration_seconds: cdktf.numberToTerraform(struct!.maxInactiveDurationSeconds),
  }
}


export function streamingNamespacePoliciesInactiveTopicPoliciesToHclTerraform(struct?: StreamingNamespacePoliciesInactiveTopicPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_mode: {
      value: cdktf.stringToHclTerraform(struct!.deleteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_while_inactive: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWhileInactive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_inactive_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxInactiveDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingNamespacePoliciesInactiveTopicPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingNamespacePoliciesInactiveTopicPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMode = this._deleteMode;
    }
    if (this._deleteWhileInactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWhileInactive = this._deleteWhileInactive;
    }
    if (this._maxInactiveDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInactiveDurationSeconds = this._maxInactiveDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingNamespacePoliciesInactiveTopicPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMode = undefined;
      this._deleteWhileInactive = undefined;
      this._maxInactiveDurationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMode = value.deleteMode;
      this._deleteWhileInactive = value.deleteWhileInactive;
      this._maxInactiveDurationSeconds = value.maxInactiveDurationSeconds;
    }
  }

  // delete_mode - computed: true, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // delete_while_inactive - computed: true, optional: true, required: false
  private _deleteWhileInactive?: boolean | cdktf.IResolvable; 
  public get deleteWhileInactive() {
    return this.getBooleanAttribute('delete_while_inactive');
  }
  public set deleteWhileInactive(value: boolean | cdktf.IResolvable) {
    this._deleteWhileInactive = value;
  }
  public resetDeleteWhileInactive() {
    this._deleteWhileInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWhileInactiveInput() {
    return this._deleteWhileInactive;
  }

  // max_inactive_duration_seconds - computed: true, optional: true, required: false
  private _maxInactiveDurationSeconds?: number; 
  public get maxInactiveDurationSeconds() {
    return this.getNumberAttribute('max_inactive_duration_seconds');
  }
  public set maxInactiveDurationSeconds(value: number) {
    this._maxInactiveDurationSeconds = value;
  }
  public resetMaxInactiveDurationSeconds() {
    this._maxInactiveDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInactiveDurationSecondsInput() {
    return this._maxInactiveDurationSeconds;
  }
}
export interface StreamingNamespacePoliciesRetentionPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#retention_size_in_mb StreamingNamespace#retention_size_in_mb}
  */
  readonly retentionSizeInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#retention_time_in_minutes StreamingNamespace#retention_time_in_minutes}
  */
  readonly retentionTimeInMinutes?: number;
}

export function streamingNamespacePoliciesRetentionPoliciesToTerraform(struct?: StreamingNamespacePoliciesRetentionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_size_in_mb: cdktf.numberToTerraform(struct!.retentionSizeInMb),
    retention_time_in_minutes: cdktf.numberToTerraform(struct!.retentionTimeInMinutes),
  }
}


export function streamingNamespacePoliciesRetentionPoliciesToHclTerraform(struct?: StreamingNamespacePoliciesRetentionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.retentionSizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.retentionTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingNamespacePoliciesRetentionPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingNamespacePoliciesRetentionPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionSizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionSizeInMb = this._retentionSizeInMb;
    }
    if (this._retentionTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTimeInMinutes = this._retentionTimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingNamespacePoliciesRetentionPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionSizeInMb = undefined;
      this._retentionTimeInMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionSizeInMb = value.retentionSizeInMb;
      this._retentionTimeInMinutes = value.retentionTimeInMinutes;
    }
  }

  // retention_size_in_mb - computed: true, optional: true, required: false
  private _retentionSizeInMb?: number; 
  public get retentionSizeInMb() {
    return this.getNumberAttribute('retention_size_in_mb');
  }
  public set retentionSizeInMb(value: number) {
    this._retentionSizeInMb = value;
  }
  public resetRetentionSizeInMb() {
    this._retentionSizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSizeInMbInput() {
    return this._retentionSizeInMb;
  }

  // retention_time_in_minutes - computed: true, optional: true, required: false
  private _retentionTimeInMinutes?: number; 
  public get retentionTimeInMinutes() {
    return this.getNumberAttribute('retention_time_in_minutes');
  }
  public set retentionTimeInMinutes(value: number) {
    this._retentionTimeInMinutes = value;
  }
  public resetRetentionTimeInMinutes() {
    this._retentionTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimeInMinutesInput() {
    return this._retentionTimeInMinutes;
  }
}
export interface StreamingNamespacePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#auto_topic_creation_override StreamingNamespace#auto_topic_creation_override}
  */
  readonly autoTopicCreationOverride?: StreamingNamespacePoliciesAutoTopicCreationOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#backlog_quota_map StreamingNamespace#backlog_quota_map}
  */
  readonly backlogQuotaMap?: { [key: string]: StreamingNamespacePoliciesBacklogQuotaMap } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#inactive_topic_policies StreamingNamespace#inactive_topic_policies}
  */
  readonly inactiveTopicPolicies?: StreamingNamespacePoliciesInactiveTopicPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#is_allow_auto_update_schema StreamingNamespace#is_allow_auto_update_schema}
  */
  readonly isAllowAutoUpdateSchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#message_ttl_in_seconds StreamingNamespace#message_ttl_in_seconds}
  */
  readonly messageTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#offload_threshold StreamingNamespace#offload_threshold}
  */
  readonly offloadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#retention_policies StreamingNamespace#retention_policies}
  */
  readonly retentionPolicies?: StreamingNamespacePoliciesRetentionPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#schema_auto_update_compatibility_strategy StreamingNamespace#schema_auto_update_compatibility_strategy}
  */
  readonly schemaAutoUpdateCompatibilityStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#schema_compatibility_strategy StreamingNamespace#schema_compatibility_strategy}
  */
  readonly schemaCompatibilityStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#schema_validation_enforced StreamingNamespace#schema_validation_enforced}
  */
  readonly schemaValidationEnforced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#subscription_expiration_time_minutes StreamingNamespace#subscription_expiration_time_minutes}
  */
  readonly subscriptionExpirationTimeMinutes?: number;
}

export function streamingNamespacePoliciesToTerraform(struct?: StreamingNamespacePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_topic_creation_override: streamingNamespacePoliciesAutoTopicCreationOverrideToTerraform(struct!.autoTopicCreationOverride),
    backlog_quota_map: cdktf.hashMapper(streamingNamespacePoliciesBacklogQuotaMapToTerraform)(struct!.backlogQuotaMap),
    inactive_topic_policies: streamingNamespacePoliciesInactiveTopicPoliciesToTerraform(struct!.inactiveTopicPolicies),
    is_allow_auto_update_schema: cdktf.booleanToTerraform(struct!.isAllowAutoUpdateSchema),
    message_ttl_in_seconds: cdktf.numberToTerraform(struct!.messageTtlInSeconds),
    offload_threshold: cdktf.numberToTerraform(struct!.offloadThreshold),
    retention_policies: streamingNamespacePoliciesRetentionPoliciesToTerraform(struct!.retentionPolicies),
    schema_auto_update_compatibility_strategy: cdktf.stringToTerraform(struct!.schemaAutoUpdateCompatibilityStrategy),
    schema_compatibility_strategy: cdktf.stringToTerraform(struct!.schemaCompatibilityStrategy),
    schema_validation_enforced: cdktf.booleanToTerraform(struct!.schemaValidationEnforced),
    subscription_expiration_time_minutes: cdktf.numberToTerraform(struct!.subscriptionExpirationTimeMinutes),
  }
}


export function streamingNamespacePoliciesToHclTerraform(struct?: StreamingNamespacePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_topic_creation_override: {
      value: streamingNamespacePoliciesAutoTopicCreationOverrideToHclTerraform(struct!.autoTopicCreationOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "StreamingNamespacePoliciesAutoTopicCreationOverride",
    },
    backlog_quota_map: {
      value: cdktf.hashMapperHcl(streamingNamespacePoliciesBacklogQuotaMapToHclTerraform)(struct!.backlogQuotaMap),
      isBlock: true,
      type: "map",
      storageClassType: "StreamingNamespacePoliciesBacklogQuotaMapMap",
    },
    inactive_topic_policies: {
      value: streamingNamespacePoliciesInactiveTopicPoliciesToHclTerraform(struct!.inactiveTopicPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "StreamingNamespacePoliciesInactiveTopicPolicies",
    },
    is_allow_auto_update_schema: {
      value: cdktf.booleanToHclTerraform(struct!.isAllowAutoUpdateSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_ttl_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.messageTtlInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offload_threshold: {
      value: cdktf.numberToHclTerraform(struct!.offloadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_policies: {
      value: streamingNamespacePoliciesRetentionPoliciesToHclTerraform(struct!.retentionPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "StreamingNamespacePoliciesRetentionPolicies",
    },
    schema_auto_update_compatibility_strategy: {
      value: cdktf.stringToHclTerraform(struct!.schemaAutoUpdateCompatibilityStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_compatibility_strategy: {
      value: cdktf.stringToHclTerraform(struct!.schemaCompatibilityStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_validation_enforced: {
      value: cdktf.booleanToHclTerraform(struct!.schemaValidationEnforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscription_expiration_time_minutes: {
      value: cdktf.numberToHclTerraform(struct!.subscriptionExpirationTimeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingNamespacePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingNamespacePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTopicCreationOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTopicCreationOverride = this._autoTopicCreationOverride?.internalValue;
    }
    if (this._backlogQuotaMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backlogQuotaMap = this._backlogQuotaMap?.internalValue;
    }
    if (this._inactiveTopicPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveTopicPolicies = this._inactiveTopicPolicies?.internalValue;
    }
    if (this._isAllowAutoUpdateSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAllowAutoUpdateSchema = this._isAllowAutoUpdateSchema;
    }
    if (this._messageTtlInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTtlInSeconds = this._messageTtlInSeconds;
    }
    if (this._offloadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.offloadThreshold = this._offloadThreshold;
    }
    if (this._retentionPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicies = this._retentionPolicies?.internalValue;
    }
    if (this._schemaAutoUpdateCompatibilityStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaAutoUpdateCompatibilityStrategy = this._schemaAutoUpdateCompatibilityStrategy;
    }
    if (this._schemaCompatibilityStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaCompatibilityStrategy = this._schemaCompatibilityStrategy;
    }
    if (this._schemaValidationEnforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaValidationEnforced = this._schemaValidationEnforced;
    }
    if (this._subscriptionExpirationTimeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionExpirationTimeMinutes = this._subscriptionExpirationTimeMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingNamespacePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTopicCreationOverride.internalValue = undefined;
      this._backlogQuotaMap.internalValue = undefined;
      this._inactiveTopicPolicies.internalValue = undefined;
      this._isAllowAutoUpdateSchema = undefined;
      this._messageTtlInSeconds = undefined;
      this._offloadThreshold = undefined;
      this._retentionPolicies.internalValue = undefined;
      this._schemaAutoUpdateCompatibilityStrategy = undefined;
      this._schemaCompatibilityStrategy = undefined;
      this._schemaValidationEnforced = undefined;
      this._subscriptionExpirationTimeMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTopicCreationOverride.internalValue = value.autoTopicCreationOverride;
      this._backlogQuotaMap.internalValue = value.backlogQuotaMap;
      this._inactiveTopicPolicies.internalValue = value.inactiveTopicPolicies;
      this._isAllowAutoUpdateSchema = value.isAllowAutoUpdateSchema;
      this._messageTtlInSeconds = value.messageTtlInSeconds;
      this._offloadThreshold = value.offloadThreshold;
      this._retentionPolicies.internalValue = value.retentionPolicies;
      this._schemaAutoUpdateCompatibilityStrategy = value.schemaAutoUpdateCompatibilityStrategy;
      this._schemaCompatibilityStrategy = value.schemaCompatibilityStrategy;
      this._schemaValidationEnforced = value.schemaValidationEnforced;
      this._subscriptionExpirationTimeMinutes = value.subscriptionExpirationTimeMinutes;
    }
  }

  // auto_topic_creation_override - computed: true, optional: true, required: false
  private _autoTopicCreationOverride = new StreamingNamespacePoliciesAutoTopicCreationOverrideOutputReference(this, "auto_topic_creation_override");
  public get autoTopicCreationOverride() {
    return this._autoTopicCreationOverride;
  }
  public putAutoTopicCreationOverride(value: StreamingNamespacePoliciesAutoTopicCreationOverride) {
    this._autoTopicCreationOverride.internalValue = value;
  }
  public resetAutoTopicCreationOverride() {
    this._autoTopicCreationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTopicCreationOverrideInput() {
    return this._autoTopicCreationOverride.internalValue;
  }

  // backlog_quota_map - computed: true, optional: true, required: false
  private _backlogQuotaMap = new StreamingNamespacePoliciesBacklogQuotaMapMap(this, "backlog_quota_map");
  public get backlogQuotaMap() {
    return this._backlogQuotaMap;
  }
  public putBacklogQuotaMap(value: { [key: string]: StreamingNamespacePoliciesBacklogQuotaMap } | cdktf.IResolvable) {
    this._backlogQuotaMap.internalValue = value;
  }
  public resetBacklogQuotaMap() {
    this._backlogQuotaMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backlogQuotaMapInput() {
    return this._backlogQuotaMap.internalValue;
  }

  // inactive_topic_policies - computed: true, optional: true, required: false
  private _inactiveTopicPolicies = new StreamingNamespacePoliciesInactiveTopicPoliciesOutputReference(this, "inactive_topic_policies");
  public get inactiveTopicPolicies() {
    return this._inactiveTopicPolicies;
  }
  public putInactiveTopicPolicies(value: StreamingNamespacePoliciesInactiveTopicPolicies) {
    this._inactiveTopicPolicies.internalValue = value;
  }
  public resetInactiveTopicPolicies() {
    this._inactiveTopicPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTopicPoliciesInput() {
    return this._inactiveTopicPolicies.internalValue;
  }

  // is_allow_auto_update_schema - computed: true, optional: true, required: false
  private _isAllowAutoUpdateSchema?: boolean | cdktf.IResolvable; 
  public get isAllowAutoUpdateSchema() {
    return this.getBooleanAttribute('is_allow_auto_update_schema');
  }
  public set isAllowAutoUpdateSchema(value: boolean | cdktf.IResolvable) {
    this._isAllowAutoUpdateSchema = value;
  }
  public resetIsAllowAutoUpdateSchema() {
    this._isAllowAutoUpdateSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllowAutoUpdateSchemaInput() {
    return this._isAllowAutoUpdateSchema;
  }

  // message_ttl_in_seconds - computed: true, optional: true, required: false
  private _messageTtlInSeconds?: number; 
  public get messageTtlInSeconds() {
    return this.getNumberAttribute('message_ttl_in_seconds');
  }
  public set messageTtlInSeconds(value: number) {
    this._messageTtlInSeconds = value;
  }
  public resetMessageTtlInSeconds() {
    this._messageTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTtlInSecondsInput() {
    return this._messageTtlInSeconds;
  }

  // offload_threshold - computed: true, optional: true, required: false
  private _offloadThreshold?: number; 
  public get offloadThreshold() {
    return this.getNumberAttribute('offload_threshold');
  }
  public set offloadThreshold(value: number) {
    this._offloadThreshold = value;
  }
  public resetOffloadThreshold() {
    this._offloadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offloadThresholdInput() {
    return this._offloadThreshold;
  }

  // retention_policies - computed: true, optional: true, required: false
  private _retentionPolicies = new StreamingNamespacePoliciesRetentionPoliciesOutputReference(this, "retention_policies");
  public get retentionPolicies() {
    return this._retentionPolicies;
  }
  public putRetentionPolicies(value: StreamingNamespacePoliciesRetentionPolicies) {
    this._retentionPolicies.internalValue = value;
  }
  public resetRetentionPolicies() {
    this._retentionPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPoliciesInput() {
    return this._retentionPolicies.internalValue;
  }

  // schema_auto_update_compatibility_strategy - computed: true, optional: true, required: false
  private _schemaAutoUpdateCompatibilityStrategy?: string; 
  public get schemaAutoUpdateCompatibilityStrategy() {
    return this.getStringAttribute('schema_auto_update_compatibility_strategy');
  }
  public set schemaAutoUpdateCompatibilityStrategy(value: string) {
    this._schemaAutoUpdateCompatibilityStrategy = value;
  }
  public resetSchemaAutoUpdateCompatibilityStrategy() {
    this._schemaAutoUpdateCompatibilityStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaAutoUpdateCompatibilityStrategyInput() {
    return this._schemaAutoUpdateCompatibilityStrategy;
  }

  // schema_compatibility_strategy - computed: true, optional: true, required: false
  private _schemaCompatibilityStrategy?: string; 
  public get schemaCompatibilityStrategy() {
    return this.getStringAttribute('schema_compatibility_strategy');
  }
  public set schemaCompatibilityStrategy(value: string) {
    this._schemaCompatibilityStrategy = value;
  }
  public resetSchemaCompatibilityStrategy() {
    this._schemaCompatibilityStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaCompatibilityStrategyInput() {
    return this._schemaCompatibilityStrategy;
  }

  // schema_validation_enforced - computed: true, optional: true, required: false
  private _schemaValidationEnforced?: boolean | cdktf.IResolvable; 
  public get schemaValidationEnforced() {
    return this.getBooleanAttribute('schema_validation_enforced');
  }
  public set schemaValidationEnforced(value: boolean | cdktf.IResolvable) {
    this._schemaValidationEnforced = value;
  }
  public resetSchemaValidationEnforced() {
    this._schemaValidationEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaValidationEnforcedInput() {
    return this._schemaValidationEnforced;
  }

  // subscription_expiration_time_minutes - computed: true, optional: true, required: false
  private _subscriptionExpirationTimeMinutes?: number; 
  public get subscriptionExpirationTimeMinutes() {
    return this.getNumberAttribute('subscription_expiration_time_minutes');
  }
  public set subscriptionExpirationTimeMinutes(value: number) {
    this._subscriptionExpirationTimeMinutes = value;
  }
  public resetSubscriptionExpirationTimeMinutes() {
    this._subscriptionExpirationTimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionExpirationTimeMinutesInput() {
    return this._subscriptionExpirationTimeMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace astra_streaming_namespace}
*/
export class StreamingNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_streaming_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingNamespace to import
  * @param importFromId The id of the existing StreamingNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_streaming_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_namespace astra_streaming_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_streaming_namespace',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.3.18',
        providerVersionConstraint: '2.3.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._namespace = config.namespace;
    this._policies.internalValue = config.policies;
    this._tenant = config.tenant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policies - computed: true, optional: true, required: false
  private _policies = new StreamingNamespacePoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: StreamingNamespacePolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      namespace: cdktf.stringToTerraform(this._namespace),
      policies: streamingNamespacePoliciesToTerraform(this._policies.internalValue),
      tenant: cdktf.stringToTerraform(this._tenant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: streamingNamespacePoliciesToHclTerraform(this._policies.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamingNamespacePolicies",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
