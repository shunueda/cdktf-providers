// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmTracesScheduledQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#apm_domain_id ApmTracesScheduledQuery#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#defined_tags ApmTracesScheduledQuery#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#freeform_tags ApmTracesScheduledQuery#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#id ApmTracesScheduledQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#opc_dry_run ApmTracesScheduledQuery#opc_dry_run}
  */
  readonly opcDryRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_description ApmTracesScheduledQuery#scheduled_query_description}
  */
  readonly scheduledQueryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_maximum_runtime_in_seconds ApmTracesScheduledQuery#scheduled_query_maximum_runtime_in_seconds}
  */
  readonly scheduledQueryMaximumRuntimeInSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_name ApmTracesScheduledQuery#scheduled_query_name}
  */
  readonly scheduledQueryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_processing_sub_type ApmTracesScheduledQuery#scheduled_query_processing_sub_type}
  */
  readonly scheduledQueryProcessingSubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_processing_type ApmTracesScheduledQuery#scheduled_query_processing_type}
  */
  readonly scheduledQueryProcessingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_retention_criteria ApmTracesScheduledQuery#scheduled_query_retention_criteria}
  */
  readonly scheduledQueryRetentionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_retention_period_in_ms ApmTracesScheduledQuery#scheduled_query_retention_period_in_ms}
  */
  readonly scheduledQueryRetentionPeriodInMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_schedule ApmTracesScheduledQuery#scheduled_query_schedule}
  */
  readonly scheduledQuerySchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_text ApmTracesScheduledQuery#scheduled_query_text}
  */
  readonly scheduledQueryText?: string;
  /**
  * scheduled_query_processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#scheduled_query_processing_configuration ApmTracesScheduledQuery#scheduled_query_processing_configuration}
  */
  readonly scheduledQueryProcessingConfiguration?: ApmTracesScheduledQueryScheduledQueryProcessingConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#timeouts ApmTracesScheduledQuery#timeouts}
  */
  readonly timeouts?: ApmTracesScheduledQueryTimeouts;
}
export interface ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#compartment ApmTracesScheduledQuery#compartment}
  */
  readonly compartment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#description ApmTracesScheduledQuery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#is_anomaly_detection_enabled ApmTracesScheduledQuery#is_anomaly_detection_enabled}
  */
  readonly isAnomalyDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#is_metric_published ApmTracesScheduledQuery#is_metric_published}
  */
  readonly isMetricPublished?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#name ApmTracesScheduledQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#namespace ApmTracesScheduledQuery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#resource_group ApmTracesScheduledQuery#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#unit ApmTracesScheduledQuery#unit}
  */
  readonly unit?: string;
}

export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricToTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment: cdktf.stringToTerraform(struct!.compartment),
    description: cdktf.stringToTerraform(struct!.description),
    is_anomaly_detection_enabled: cdktf.booleanToTerraform(struct!.isAnomalyDetectionEnabled),
    is_metric_published: cdktf.booleanToTerraform(struct!.isMetricPublished),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricToHclTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment: {
      value: cdktf.stringToHclTerraform(struct!.compartment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_anomaly_detection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAnomalyDetectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metric_published: {
      value: cdktf.booleanToHclTerraform(struct!.isMetricPublished),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartment !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartment = this._compartment;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isAnomalyDetectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnomalyDetectionEnabled = this._isAnomalyDetectionEnabled;
    }
    if (this._isMetricPublished !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetricPublished = this._isMetricPublished;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartment = undefined;
      this._description = undefined;
      this._isAnomalyDetectionEnabled = undefined;
      this._isMetricPublished = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartment = value.compartment;
      this._description = value.description;
      this._isAnomalyDetectionEnabled = value.isAnomalyDetectionEnabled;
      this._isMetricPublished = value.isMetricPublished;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
      this._unit = value.unit;
    }
  }

  // compartment - computed: true, optional: true, required: false
  private _compartment?: string; 
  public get compartment() {
    return this.getStringAttribute('compartment');
  }
  public set compartment(value: string) {
    this._compartment = value;
  }
  public resetCompartment() {
    this._compartment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentInput() {
    return this._compartment;
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

  // is_anomaly_detection_enabled - computed: true, optional: true, required: false
  private _isAnomalyDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get isAnomalyDetectionEnabled() {
    return this.getBooleanAttribute('is_anomaly_detection_enabled');
  }
  public set isAnomalyDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isAnomalyDetectionEnabled = value;
  }
  public resetIsAnomalyDetectionEnabled() {
    this._isAnomalyDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnomalyDetectionEnabledInput() {
    return this._isAnomalyDetectionEnabled;
  }

  // is_metric_published - computed: true, optional: true, required: false
  private _isMetricPublished?: boolean | cdktf.IResolvable; 
  public get isMetricPublished() {
    return this.getBooleanAttribute('is_metric_published');
  }
  public set isMetricPublished(value: boolean | cdktf.IResolvable) {
    this._isMetricPublished = value;
  }
  public resetIsMetricPublished() {
    this._isMetricPublished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetricPublishedInput() {
    return this._isMetricPublished;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#bucket ApmTracesScheduledQuery#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#name_space ApmTracesScheduledQuery#name_space}
  */
  readonly nameSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#object_name_prefix ApmTracesScheduledQuery#object_name_prefix}
  */
  readonly objectNamePrefix?: string;
}

export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageToTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    name_space: cdktf.stringToTerraform(struct!.nameSpace),
    object_name_prefix: cdktf.stringToTerraform(struct!.objectNamePrefix),
  }
}


export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageToHclTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_space: {
      value: cdktf.stringToHclTerraform(struct!.nameSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.objectNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._nameSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSpace = this._nameSpace;
    }
    if (this._objectNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNamePrefix = this._objectNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._nameSpace = undefined;
      this._objectNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._nameSpace = value.nameSpace;
      this._objectNamePrefix = value.objectNamePrefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // name_space - computed: true, optional: true, required: false
  private _nameSpace?: string; 
  public get nameSpace() {
    return this.getStringAttribute('name_space');
  }
  public set nameSpace(value: string) {
    this._nameSpace = value;
  }
  public resetNameSpace() {
    this._nameSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSpaceInput() {
    return this._nameSpace;
  }

  // object_name_prefix - computed: true, optional: true, required: false
  private _objectNamePrefix?: string; 
  public get objectNamePrefix() {
    return this.getStringAttribute('object_name_prefix');
  }
  public set objectNamePrefix(value: string) {
    this._objectNamePrefix = value;
  }
  public resetObjectNamePrefix() {
    this._objectNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamePrefixInput() {
    return this._objectNamePrefix;
  }
}
export interface ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#stream_id ApmTracesScheduledQuery#stream_id}
  */
  readonly streamId?: string;
}

export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingToTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_id: cdktf.stringToTerraform(struct!.streamId),
  }
}


export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingToHclTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamId = value.streamId;
    }
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }
}
export interface ApmTracesScheduledQueryScheduledQueryProcessingConfiguration {
  /**
  * custom_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#custom_metric ApmTracesScheduledQuery#custom_metric}
  */
  readonly customMetric?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#object_storage ApmTracesScheduledQuery#object_storage}
  */
  readonly objectStorage?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage;
  /**
  * streaming block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#streaming ApmTracesScheduledQuery#streaming}
  */
  readonly streaming?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming;
}

export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationToTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_metric: apmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricToTerraform(struct!.customMetric),
    object_storage: apmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageToTerraform(struct!.objectStorage),
    streaming: apmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingToTerraform(struct!.streaming),
  }
}


export function apmTracesScheduledQueryScheduledQueryProcessingConfigurationToHclTerraform(struct?: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference | ApmTracesScheduledQueryScheduledQueryProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_metric: {
      value: apmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricToHclTerraform(struct!.customMetric),
      isBlock: true,
      type: "list",
      storageClassType: "ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricList",
    },
    object_storage: {
      value: apmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageToHclTerraform(struct!.objectStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageList",
    },
    streaming: {
      value: apmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingToHclTerraform(struct!.streaming),
      isBlock: true,
      type: "list",
      storageClassType: "ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmTracesScheduledQueryScheduledQueryProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetric = this._customMetric?.internalValue;
    }
    if (this._objectStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorage = this._objectStorage?.internalValue;
    }
    if (this._streaming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streaming = this._streaming?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmTracesScheduledQueryScheduledQueryProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customMetric.internalValue = undefined;
      this._objectStorage.internalValue = undefined;
      this._streaming.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customMetric.internalValue = value.customMetric;
      this._objectStorage.internalValue = value.objectStorage;
      this._streaming.internalValue = value.streaming;
    }
  }

  // custom_metric - computed: false, optional: true, required: false
  private _customMetric = new ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference(this, "custom_metric");
  public get customMetric() {
    return this._customMetric;
  }
  public putCustomMetric(value: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric) {
    this._customMetric.internalValue = value;
  }
  public resetCustomMetric() {
    this._customMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricInput() {
    return this._customMetric.internalValue;
  }

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage = new ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  public resetObjectStorage() {
    this._objectStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }

  // streaming - computed: false, optional: true, required: false
  private _streaming = new ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference(this, "streaming");
  public get streaming() {
    return this._streaming;
  }
  public putStreaming(value: ApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming) {
    this._streaming.internalValue = value;
  }
  public resetStreaming() {
    this._streaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingInput() {
    return this._streaming.internalValue;
  }
}
export interface ApmTracesScheduledQueryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#create ApmTracesScheduledQuery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#delete ApmTracesScheduledQuery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#update ApmTracesScheduledQuery#update}
  */
  readonly update?: string;
}

export function apmTracesScheduledQueryTimeoutsToTerraform(struct?: ApmTracesScheduledQueryTimeouts | cdktf.IResolvable): any {
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


export function apmTracesScheduledQueryTimeoutsToHclTerraform(struct?: ApmTracesScheduledQueryTimeouts | cdktf.IResolvable): any {
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

export class ApmTracesScheduledQueryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApmTracesScheduledQueryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmTracesScheduledQueryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query oci_apm_traces_scheduled_query}
*/
export class ApmTracesScheduledQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_scheduled_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmTracesScheduledQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmTracesScheduledQuery to import
  * @param importFromId The id of the existing ApmTracesScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmTracesScheduledQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_scheduled_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/apm_traces_scheduled_query oci_apm_traces_scheduled_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmTracesScheduledQueryConfig
  */
  public constructor(scope: Construct, id: string, config: ApmTracesScheduledQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_scheduled_query',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._opcDryRun = config.opcDryRun;
    this._scheduledQueryDescription = config.scheduledQueryDescription;
    this._scheduledQueryMaximumRuntimeInSeconds = config.scheduledQueryMaximumRuntimeInSeconds;
    this._scheduledQueryName = config.scheduledQueryName;
    this._scheduledQueryProcessingSubType = config.scheduledQueryProcessingSubType;
    this._scheduledQueryProcessingType = config.scheduledQueryProcessingType;
    this._scheduledQueryRetentionCriteria = config.scheduledQueryRetentionCriteria;
    this._scheduledQueryRetentionPeriodInMs = config.scheduledQueryRetentionPeriodInMs;
    this._scheduledQuerySchedule = config.scheduledQuerySchedule;
    this._scheduledQueryText = config.scheduledQueryText;
    this._scheduledQueryProcessingConfiguration.internalValue = config.scheduledQueryProcessingConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // opc_dry_run - computed: true, optional: true, required: false
  private _opcDryRun?: string; 
  public get opcDryRun() {
    return this.getStringAttribute('opc_dry_run');
  }
  public set opcDryRun(value: string) {
    this._opcDryRun = value;
  }
  public resetOpcDryRun() {
    this._opcDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcDryRunInput() {
    return this._opcDryRun;
  }

  // scheduled_query_description - computed: true, optional: true, required: false
  private _scheduledQueryDescription?: string; 
  public get scheduledQueryDescription() {
    return this.getStringAttribute('scheduled_query_description');
  }
  public set scheduledQueryDescription(value: string) {
    this._scheduledQueryDescription = value;
  }
  public resetScheduledQueryDescription() {
    this._scheduledQueryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryDescriptionInput() {
    return this._scheduledQueryDescription;
  }

  // scheduled_query_instances - computed: true, optional: false, required: false
  public get scheduledQueryInstances() {
    return this.getStringAttribute('scheduled_query_instances');
  }

  // scheduled_query_maximum_runtime_in_seconds - computed: true, optional: true, required: false
  private _scheduledQueryMaximumRuntimeInSeconds?: string; 
  public get scheduledQueryMaximumRuntimeInSeconds() {
    return this.getStringAttribute('scheduled_query_maximum_runtime_in_seconds');
  }
  public set scheduledQueryMaximumRuntimeInSeconds(value: string) {
    this._scheduledQueryMaximumRuntimeInSeconds = value;
  }
  public resetScheduledQueryMaximumRuntimeInSeconds() {
    this._scheduledQueryMaximumRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryMaximumRuntimeInSecondsInput() {
    return this._scheduledQueryMaximumRuntimeInSeconds;
  }

  // scheduled_query_name - computed: true, optional: true, required: false
  private _scheduledQueryName?: string; 
  public get scheduledQueryName() {
    return this.getStringAttribute('scheduled_query_name');
  }
  public set scheduledQueryName(value: string) {
    this._scheduledQueryName = value;
  }
  public resetScheduledQueryName() {
    this._scheduledQueryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryNameInput() {
    return this._scheduledQueryName;
  }

  // scheduled_query_next_run_in_ms - computed: true, optional: false, required: false
  public get scheduledQueryNextRunInMs() {
    return this.getStringAttribute('scheduled_query_next_run_in_ms');
  }

  // scheduled_query_processing_sub_type - computed: true, optional: true, required: false
  private _scheduledQueryProcessingSubType?: string; 
  public get scheduledQueryProcessingSubType() {
    return this.getStringAttribute('scheduled_query_processing_sub_type');
  }
  public set scheduledQueryProcessingSubType(value: string) {
    this._scheduledQueryProcessingSubType = value;
  }
  public resetScheduledQueryProcessingSubType() {
    this._scheduledQueryProcessingSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryProcessingSubTypeInput() {
    return this._scheduledQueryProcessingSubType;
  }

  // scheduled_query_processing_type - computed: true, optional: true, required: false
  private _scheduledQueryProcessingType?: string; 
  public get scheduledQueryProcessingType() {
    return this.getStringAttribute('scheduled_query_processing_type');
  }
  public set scheduledQueryProcessingType(value: string) {
    this._scheduledQueryProcessingType = value;
  }
  public resetScheduledQueryProcessingType() {
    this._scheduledQueryProcessingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryProcessingTypeInput() {
    return this._scheduledQueryProcessingType;
  }

  // scheduled_query_retention_criteria - computed: true, optional: true, required: false
  private _scheduledQueryRetentionCriteria?: string; 
  public get scheduledQueryRetentionCriteria() {
    return this.getStringAttribute('scheduled_query_retention_criteria');
  }
  public set scheduledQueryRetentionCriteria(value: string) {
    this._scheduledQueryRetentionCriteria = value;
  }
  public resetScheduledQueryRetentionCriteria() {
    this._scheduledQueryRetentionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryRetentionCriteriaInput() {
    return this._scheduledQueryRetentionCriteria;
  }

  // scheduled_query_retention_period_in_ms - computed: true, optional: true, required: false
  private _scheduledQueryRetentionPeriodInMs?: string; 
  public get scheduledQueryRetentionPeriodInMs() {
    return this.getStringAttribute('scheduled_query_retention_period_in_ms');
  }
  public set scheduledQueryRetentionPeriodInMs(value: string) {
    this._scheduledQueryRetentionPeriodInMs = value;
  }
  public resetScheduledQueryRetentionPeriodInMs() {
    this._scheduledQueryRetentionPeriodInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryRetentionPeriodInMsInput() {
    return this._scheduledQueryRetentionPeriodInMs;
  }

  // scheduled_query_schedule - computed: true, optional: true, required: false
  private _scheduledQuerySchedule?: string; 
  public get scheduledQuerySchedule() {
    return this.getStringAttribute('scheduled_query_schedule');
  }
  public set scheduledQuerySchedule(value: string) {
    this._scheduledQuerySchedule = value;
  }
  public resetScheduledQuerySchedule() {
    this._scheduledQuerySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryScheduleInput() {
    return this._scheduledQuerySchedule;
  }

  // scheduled_query_text - computed: true, optional: true, required: false
  private _scheduledQueryText?: string; 
  public get scheduledQueryText() {
    return this.getStringAttribute('scheduled_query_text');
  }
  public set scheduledQueryText(value: string) {
    this._scheduledQueryText = value;
  }
  public resetScheduledQueryText() {
    this._scheduledQueryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryTextInput() {
    return this._scheduledQueryText;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // scheduled_query_processing_configuration - computed: false, optional: true, required: false
  private _scheduledQueryProcessingConfiguration = new ApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference(this, "scheduled_query_processing_configuration");
  public get scheduledQueryProcessingConfiguration() {
    return this._scheduledQueryProcessingConfiguration;
  }
  public putScheduledQueryProcessingConfiguration(value: ApmTracesScheduledQueryScheduledQueryProcessingConfiguration) {
    this._scheduledQueryProcessingConfiguration.internalValue = value;
  }
  public resetScheduledQueryProcessingConfiguration() {
    this._scheduledQueryProcessingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryProcessingConfigurationInput() {
    return this._scheduledQueryProcessingConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApmTracesScheduledQueryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApmTracesScheduledQueryTimeouts) {
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
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      opc_dry_run: cdktf.stringToTerraform(this._opcDryRun),
      scheduled_query_description: cdktf.stringToTerraform(this._scheduledQueryDescription),
      scheduled_query_maximum_runtime_in_seconds: cdktf.stringToTerraform(this._scheduledQueryMaximumRuntimeInSeconds),
      scheduled_query_name: cdktf.stringToTerraform(this._scheduledQueryName),
      scheduled_query_processing_sub_type: cdktf.stringToTerraform(this._scheduledQueryProcessingSubType),
      scheduled_query_processing_type: cdktf.stringToTerraform(this._scheduledQueryProcessingType),
      scheduled_query_retention_criteria: cdktf.stringToTerraform(this._scheduledQueryRetentionCriteria),
      scheduled_query_retention_period_in_ms: cdktf.stringToTerraform(this._scheduledQueryRetentionPeriodInMs),
      scheduled_query_schedule: cdktf.stringToTerraform(this._scheduledQuerySchedule),
      scheduled_query_text: cdktf.stringToTerraform(this._scheduledQueryText),
      scheduled_query_processing_configuration: apmTracesScheduledQueryScheduledQueryProcessingConfigurationToTerraform(this._scheduledQueryProcessingConfiguration.internalValue),
      timeouts: apmTracesScheduledQueryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_dry_run: {
        value: cdktf.stringToHclTerraform(this._opcDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_description: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_maximum_runtime_in_seconds: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryMaximumRuntimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_name: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_processing_sub_type: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryProcessingSubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_processing_type: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryProcessingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_retention_criteria: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryRetentionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_retention_period_in_ms: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryRetentionPeriodInMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_schedule: {
        value: cdktf.stringToHclTerraform(this._scheduledQuerySchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_text: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_processing_configuration: {
        value: apmTracesScheduledQueryScheduledQueryProcessingConfigurationToHclTerraform(this._scheduledQueryProcessingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmTracesScheduledQueryScheduledQueryProcessingConfigurationList",
      },
      timeouts: {
        value: apmTracesScheduledQueryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApmTracesScheduledQueryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
