// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationPubsubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#configuration DestinationPubsub#configuration}
  */
  readonly configuration: DestinationPubsubConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#definition_id DestinationPubsub#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#name DestinationPubsub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#workspace_id DestinationPubsub#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationPubsubConfiguration {
  /**
  * Number of ms before the buffer is flushed. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#batching_delay_threshold DestinationPubsub#batching_delay_threshold}
  */
  readonly batchingDelayThreshold?: number;
  /**
  * Number of messages before the buffer is flushed. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#batching_element_count_threshold DestinationPubsub#batching_element_count_threshold}
  */
  readonly batchingElementCountThreshold?: number;
  /**
  * If TRUE messages will be buffered instead of sending them one by one. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#batching_enabled DestinationPubsub#batching_enabled}
  */
  readonly batchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of bytes before the buffer is flushed. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#batching_request_bytes_threshold DestinationPubsub#batching_request_bytes_threshold}
  */
  readonly batchingRequestBytesThreshold?: number;
  /**
  * The contents of the JSON service account key. Check out the <a href="https://docs.airbyte.com/integrations/destinations/pubsub">docs</a> if you need help generating this key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#credentials_json DestinationPubsub#credentials_json}
  */
  readonly credentialsJson: string;
  /**
  * If TRUE PubSub publisher will have <a href="https://cloud.google.com/pubsub/docs/ordering">message ordering</a> enabled. Every message will have an ordering key of stream. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#ordering_enabled DestinationPubsub#ordering_enabled}
  */
  readonly orderingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The GCP project ID for the project containing the target PubSub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#project_id DestinationPubsub#project_id}
  */
  readonly projectId: string;
  /**
  * The PubSub topic ID in the given GCP project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#topic_id DestinationPubsub#topic_id}
  */
  readonly topicId: string;
}

export function destinationPubsubConfigurationToTerraform(struct?: DestinationPubsubConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batching_delay_threshold: cdktf.numberToTerraform(struct!.batchingDelayThreshold),
    batching_element_count_threshold: cdktf.numberToTerraform(struct!.batchingElementCountThreshold),
    batching_enabled: cdktf.booleanToTerraform(struct!.batchingEnabled),
    batching_request_bytes_threshold: cdktf.numberToTerraform(struct!.batchingRequestBytesThreshold),
    credentials_json: cdktf.stringToTerraform(struct!.credentialsJson),
    ordering_enabled: cdktf.booleanToTerraform(struct!.orderingEnabled),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function destinationPubsubConfigurationToHclTerraform(struct?: DestinationPubsubConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batching_delay_threshold: {
      value: cdktf.numberToHclTerraform(struct!.batchingDelayThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batching_element_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.batchingElementCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.batchingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batching_request_bytes_threshold: {
      value: cdktf.numberToHclTerraform(struct!.batchingRequestBytesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credentials_json: {
      value: cdktf.stringToHclTerraform(struct!.credentialsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ordering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.orderingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationPubsubConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPubsubConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchingDelayThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchingDelayThreshold = this._batchingDelayThreshold;
    }
    if (this._batchingElementCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchingElementCountThreshold = this._batchingElementCountThreshold;
    }
    if (this._batchingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchingEnabled = this._batchingEnabled;
    }
    if (this._batchingRequestBytesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchingRequestBytesThreshold = this._batchingRequestBytesThreshold;
    }
    if (this._credentialsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsJson = this._credentialsJson;
    }
    if (this._orderingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderingEnabled = this._orderingEnabled;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPubsubConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchingDelayThreshold = undefined;
      this._batchingElementCountThreshold = undefined;
      this._batchingEnabled = undefined;
      this._batchingRequestBytesThreshold = undefined;
      this._credentialsJson = undefined;
      this._orderingEnabled = undefined;
      this._projectId = undefined;
      this._topicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchingDelayThreshold = value.batchingDelayThreshold;
      this._batchingElementCountThreshold = value.batchingElementCountThreshold;
      this._batchingEnabled = value.batchingEnabled;
      this._batchingRequestBytesThreshold = value.batchingRequestBytesThreshold;
      this._credentialsJson = value.credentialsJson;
      this._orderingEnabled = value.orderingEnabled;
      this._projectId = value.projectId;
      this._topicId = value.topicId;
    }
  }

  // batching_delay_threshold - computed: true, optional: true, required: false
  private _batchingDelayThreshold?: number; 
  public get batchingDelayThreshold() {
    return this.getNumberAttribute('batching_delay_threshold');
  }
  public set batchingDelayThreshold(value: number) {
    this._batchingDelayThreshold = value;
  }
  public resetBatchingDelayThreshold() {
    this._batchingDelayThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingDelayThresholdInput() {
    return this._batchingDelayThreshold;
  }

  // batching_element_count_threshold - computed: true, optional: true, required: false
  private _batchingElementCountThreshold?: number; 
  public get batchingElementCountThreshold() {
    return this.getNumberAttribute('batching_element_count_threshold');
  }
  public set batchingElementCountThreshold(value: number) {
    this._batchingElementCountThreshold = value;
  }
  public resetBatchingElementCountThreshold() {
    this._batchingElementCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingElementCountThresholdInput() {
    return this._batchingElementCountThreshold;
  }

  // batching_enabled - computed: true, optional: true, required: false
  private _batchingEnabled?: boolean | cdktf.IResolvable; 
  public get batchingEnabled() {
    return this.getBooleanAttribute('batching_enabled');
  }
  public set batchingEnabled(value: boolean | cdktf.IResolvable) {
    this._batchingEnabled = value;
  }
  public resetBatchingEnabled() {
    this._batchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingEnabledInput() {
    return this._batchingEnabled;
  }

  // batching_request_bytes_threshold - computed: true, optional: true, required: false
  private _batchingRequestBytesThreshold?: number; 
  public get batchingRequestBytesThreshold() {
    return this.getNumberAttribute('batching_request_bytes_threshold');
  }
  public set batchingRequestBytesThreshold(value: number) {
    this._batchingRequestBytesThreshold = value;
  }
  public resetBatchingRequestBytesThreshold() {
    this._batchingRequestBytesThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingRequestBytesThresholdInput() {
    return this._batchingRequestBytesThreshold;
  }

  // credentials_json - computed: false, optional: false, required: true
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }

  // ordering_enabled - computed: true, optional: true, required: false
  private _orderingEnabled?: boolean | cdktf.IResolvable; 
  public get orderingEnabled() {
    return this.getBooleanAttribute('ordering_enabled');
  }
  public set orderingEnabled(value: boolean | cdktf.IResolvable) {
    this._orderingEnabled = value;
  }
  public resetOrderingEnabled() {
    this._orderingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingEnabledInput() {
    return this._orderingEnabled;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}
export interface DestinationPubsubResourceAllocationDefault {
}

export function destinationPubsubResourceAllocationDefaultToTerraform(struct?: DestinationPubsubResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPubsubResourceAllocationDefaultToHclTerraform(struct?: DestinationPubsubResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPubsubResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPubsubResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPubsubResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationPubsubResourceAllocationJobSpecificResourceRequirements {
}

export function destinationPubsubResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationPubsubResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPubsubResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationPubsubResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPubsubResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPubsubResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPubsubResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationPubsubResourceAllocationJobSpecific {
}

export function destinationPubsubResourceAllocationJobSpecificToTerraform(struct?: DestinationPubsubResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPubsubResourceAllocationJobSpecificToHclTerraform(struct?: DestinationPubsubResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPubsubResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationPubsubResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPubsubResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationPubsubResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationPubsubResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationPubsubResourceAllocationJobSpecificOutputReference {
    return new DestinationPubsubResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationPubsubResourceAllocation {
}

export function destinationPubsubResourceAllocationToTerraform(struct?: DestinationPubsubResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPubsubResourceAllocationToHclTerraform(struct?: DestinationPubsubResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPubsubResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPubsubResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPubsubResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationPubsubResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationPubsubResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub airbyte_destination_pubsub}
*/
export class DestinationPubsub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_pubsub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationPubsub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationPubsub to import
  * @param importFromId The id of the existing DestinationPubsub that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationPubsub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_pubsub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pubsub airbyte_destination_pubsub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationPubsubConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationPubsubConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_pubsub',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationPubsubConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationPubsubConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationPubsubResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationPubsubConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationPubsubConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationPubsubConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
