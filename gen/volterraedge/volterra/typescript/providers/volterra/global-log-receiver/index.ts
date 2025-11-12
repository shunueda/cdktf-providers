// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalLogReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#annotations GlobalLogReceiver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#audit_logs GlobalLogReceiver#audit_logs}
  */
  readonly auditLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#description GlobalLogReceiver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable GlobalLogReceiver#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#dns_logs GlobalLogReceiver#dns_logs}
  */
  readonly dnsLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#id GlobalLogReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#labels GlobalLogReceiver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#ns_all GlobalLogReceiver#ns_all}
  */
  readonly nsAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#ns_current GlobalLogReceiver#ns_current}
  */
  readonly nsCurrent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#request_logs GlobalLogReceiver#request_logs}
  */
  readonly requestLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#security_events GlobalLogReceiver#security_events}
  */
  readonly securityEvents?: boolean | cdktf.IResolvable;
  /**
  * aws_cloud_watch_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#aws_cloud_watch_receiver GlobalLogReceiver#aws_cloud_watch_receiver}
  */
  readonly awsCloudWatchReceiver?: GlobalLogReceiverAwsCloudWatchReceiver;
  /**
  * azure_event_hubs_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#azure_event_hubs_receiver GlobalLogReceiver#azure_event_hubs_receiver}
  */
  readonly azureEventHubsReceiver?: GlobalLogReceiverAzureEventHubsReceiver;
  /**
  * azure_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#azure_receiver GlobalLogReceiver#azure_receiver}
  */
  readonly azureReceiver?: GlobalLogReceiverAzureReceiver;
  /**
  * datadog_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#datadog_receiver GlobalLogReceiver#datadog_receiver}
  */
  readonly datadogReceiver?: GlobalLogReceiverDatadogReceiver;
  /**
  * gcp_bucket_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#gcp_bucket_receiver GlobalLogReceiver#gcp_bucket_receiver}
  */
  readonly gcpBucketReceiver?: GlobalLogReceiverGcpBucketReceiver;
  /**
  * http_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#http_receiver GlobalLogReceiver#http_receiver}
  */
  readonly httpReceiver?: GlobalLogReceiverHttpReceiver;
  /**
  * kafka_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#kafka_receiver GlobalLogReceiver#kafka_receiver}
  */
  readonly kafkaReceiver?: GlobalLogReceiverKafkaReceiver;
  /**
  * new_relic_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#new_relic_receiver GlobalLogReceiver#new_relic_receiver}
  */
  readonly newRelicReceiver?: GlobalLogReceiverNewRelicReceiver;
  /**
  * ns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#ns_list GlobalLogReceiver#ns_list}
  */
  readonly nsList?: GlobalLogReceiverNsListStruct;
  /**
  * qradar_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#qradar_receiver GlobalLogReceiver#qradar_receiver}
  */
  readonly qradarReceiver?: GlobalLogReceiverQradarReceiver;
  /**
  * s3_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#s3_receiver GlobalLogReceiver#s3_receiver}
  */
  readonly s3Receiver?: GlobalLogReceiverS3Receiver;
  /**
  * splunk_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#splunk_receiver GlobalLogReceiver#splunk_receiver}
  */
  readonly splunkReceiver?: GlobalLogReceiverSplunkReceiver;
  /**
  * sumo_logic_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#sumo_logic_receiver GlobalLogReceiver#sumo_logic_receiver}
  */
  readonly sumoLogicReceiver?: GlobalLogReceiverSumoLogicReceiver;
}
export interface GlobalLogReceiverAwsCloudWatchReceiverAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
  */
  readonly tenant?: string;
}

export function globalLogReceiverAwsCloudWatchReceiverAwsCredToTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverAwsCredOutputReference | GlobalLogReceiverAwsCloudWatchReceiverAwsCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function globalLogReceiverAwsCloudWatchReceiverAwsCredToHclTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverAwsCredOutputReference | GlobalLogReceiverAwsCloudWatchReceiverAwsCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAwsCloudWatchReceiverAwsCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAwsCloudWatchReceiverAwsCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAwsCloudWatchReceiverAwsCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface GlobalLogReceiverAwsCloudWatchReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverAwsCloudWatchReceiverBatchToTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverBatchOutputReference | GlobalLogReceiverAwsCloudWatchReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverAwsCloudWatchReceiverBatchToHclTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverBatchOutputReference | GlobalLogReceiverAwsCloudWatchReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAwsCloudWatchReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAwsCloudWatchReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAwsCloudWatchReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverAwsCloudWatchReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverAwsCloudWatchReceiverCompressionToTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverCompressionOutputReference | GlobalLogReceiverAwsCloudWatchReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverAwsCloudWatchReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverCompressionOutputReference | GlobalLogReceiverAwsCloudWatchReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAwsCloudWatchReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAwsCloudWatchReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAwsCloudWatchReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverAwsCloudWatchReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#aws_region GlobalLogReceiver#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#group_name GlobalLogReceiver#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#stream_name GlobalLogReceiver#stream_name}
  */
  readonly streamName: string;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#aws_cred GlobalLogReceiver#aws_cred}
  */
  readonly awsCred: GlobalLogReceiverAwsCloudWatchReceiverAwsCred;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverAwsCloudWatchReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverAwsCloudWatchReceiverCompression;
}

export function globalLogReceiverAwsCloudWatchReceiverToTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverOutputReference | GlobalLogReceiverAwsCloudWatchReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
    aws_cred: globalLogReceiverAwsCloudWatchReceiverAwsCredToTerraform(struct!.awsCred),
    batch: globalLogReceiverAwsCloudWatchReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverAwsCloudWatchReceiverCompressionToTerraform(struct!.compression),
  }
}


export function globalLogReceiverAwsCloudWatchReceiverToHclTerraform(struct?: GlobalLogReceiverAwsCloudWatchReceiverOutputReference | GlobalLogReceiverAwsCloudWatchReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_cred: {
      value: globalLogReceiverAwsCloudWatchReceiverAwsCredToHclTerraform(struct!.awsCred),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAwsCloudWatchReceiverAwsCredList",
    },
    batch: {
      value: globalLogReceiverAwsCloudWatchReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAwsCloudWatchReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverAwsCloudWatchReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAwsCloudWatchReceiverCompressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAwsCloudWatchReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAwsCloudWatchReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    if (this._awsCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCred = this._awsCred?.internalValue;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAwsCloudWatchReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._groupName = undefined;
      this._streamName = undefined;
      this._awsCred.internalValue = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._groupName = value.groupName;
      this._streamName = value.streamName;
      this._awsCred.internalValue = value.awsCred;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // aws_cred - computed: false, optional: false, required: true
  private _awsCred = new GlobalLogReceiverAwsCloudWatchReceiverAwsCredOutputReference(this, "aws_cred");
  public get awsCred() {
    return this._awsCred;
  }
  public putAwsCred(value: GlobalLogReceiverAwsCloudWatchReceiverAwsCred) {
    this._awsCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredInput() {
    return this._awsCred.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverAwsCloudWatchReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverAwsCloudWatchReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverAwsCloudWatchReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverAwsCloudWatchReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }
}
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionString {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverAzureEventHubsReceiverConnectionStringToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureEventHubsReceiverConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiverConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverAzureEventHubsReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#instance GlobalLogReceiver#instance}
  */
  readonly instance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#connection_string GlobalLogReceiver#connection_string}
  */
  readonly connectionString: GlobalLogReceiverAzureEventHubsReceiverConnectionString;
}

export function globalLogReceiverAzureEventHubsReceiverToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverOutputReference | GlobalLogReceiverAzureEventHubsReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    connection_string: globalLogReceiverAzureEventHubsReceiverConnectionStringToTerraform(struct!.connectionString),
  }
}


export function globalLogReceiverAzureEventHubsReceiverToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverOutputReference | GlobalLogReceiverAzureEventHubsReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
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
    connection_string: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringToHclTerraform(struct!.connectionString),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureEventHubsReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._connectionString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instance = undefined;
      this._namespace = undefined;
      this._connectionString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instance = value.instance;
      this._namespace = value.namespace;
      this._connectionString.internalValue = value.connectionString;
    }
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // connection_string - computed: false, optional: false, required: true
  private _connectionString = new GlobalLogReceiverAzureEventHubsReceiverConnectionStringOutputReference(this, "connection_string");
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: GlobalLogReceiverAzureEventHubsReceiverConnectionString) {
    this._connectionString.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString.internalValue;
  }
}
export interface GlobalLogReceiverAzureReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverAzureReceiverBatchToTerraform(struct?: GlobalLogReceiverAzureReceiverBatchOutputReference | GlobalLogReceiverAzureReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverAzureReceiverBatchToHclTerraform(struct?: GlobalLogReceiverAzureReceiverBatchOutputReference | GlobalLogReceiverAzureReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverAzureReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverAzureReceiverCompressionToTerraform(struct?: GlobalLogReceiverAzureReceiverCompressionOutputReference | GlobalLogReceiverAzureReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverAzureReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverAzureReceiverCompressionOutputReference | GlobalLogReceiverAzureReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverAzureReceiverConnectionStringClearSecretInfoToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverAzureReceiverConnectionStringClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverAzureReceiverConnectionString {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo;
}

export function globalLogReceiverAzureReceiverConnectionStringToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringOutputReference | GlobalLogReceiverAzureReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverAzureReceiverConnectionStringClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverAzureReceiverConnectionStringToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringOutputReference | GlobalLogReceiverAzureReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverAzureReceiverConnectionStringClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverAzureReceiverFilenameOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#custom_folder GlobalLogReceiver#custom_folder}
  */
  readonly customFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#log_type_folder GlobalLogReceiver#log_type_folder}
  */
  readonly logTypeFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_folder GlobalLogReceiver#no_folder}
  */
  readonly noFolder?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverAzureReceiverFilenameOptionsToTerraform(struct?: GlobalLogReceiverAzureReceiverFilenameOptionsOutputReference | GlobalLogReceiverAzureReceiverFilenameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_folder: cdktf.stringToTerraform(struct!.customFolder),
    log_type_folder: cdktf.booleanToTerraform(struct!.logTypeFolder),
    no_folder: cdktf.booleanToTerraform(struct!.noFolder),
  }
}


export function globalLogReceiverAzureReceiverFilenameOptionsToHclTerraform(struct?: GlobalLogReceiverAzureReceiverFilenameOptionsOutputReference | GlobalLogReceiverAzureReceiverFilenameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_folder: {
      value: cdktf.stringToHclTerraform(struct!.customFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type_folder: {
      value: cdktf.booleanToHclTerraform(struct!.logTypeFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_folder: {
      value: cdktf.booleanToHclTerraform(struct!.noFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverFilenameOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverFilenameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFolder = this._customFolder;
    }
    if (this._logTypeFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeFolder = this._logTypeFolder;
    }
    if (this._noFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFolder = this._noFolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverFilenameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFolder = undefined;
      this._logTypeFolder = undefined;
      this._noFolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFolder = value.customFolder;
      this._logTypeFolder = value.logTypeFolder;
      this._noFolder = value.noFolder;
    }
  }

  // custom_folder - computed: false, optional: true, required: false
  private _customFolder?: string; 
  public get customFolder() {
    return this.getStringAttribute('custom_folder');
  }
  public set customFolder(value: string) {
    this._customFolder = value;
  }
  public resetCustomFolder() {
    this._customFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFolderInput() {
    return this._customFolder;
  }

  // log_type_folder - computed: false, optional: true, required: false
  private _logTypeFolder?: boolean | cdktf.IResolvable; 
  public get logTypeFolder() {
    return this.getBooleanAttribute('log_type_folder');
  }
  public set logTypeFolder(value: boolean | cdktf.IResolvable) {
    this._logTypeFolder = value;
  }
  public resetLogTypeFolder() {
    this._logTypeFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeFolderInput() {
    return this._logTypeFolder;
  }

  // no_folder - computed: false, optional: true, required: false
  private _noFolder?: boolean | cdktf.IResolvable; 
  public get noFolder() {
    return this.getBooleanAttribute('no_folder');
  }
  public set noFolder(value: boolean | cdktf.IResolvable) {
    this._noFolder = value;
  }
  public resetNoFolder() {
    this._noFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFolderInput() {
    return this._noFolder;
  }
}
export interface GlobalLogReceiverAzureReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#container_name GlobalLogReceiver#container_name}
  */
  readonly containerName: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverAzureReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverAzureReceiverCompression;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#connection_string GlobalLogReceiver#connection_string}
  */
  readonly connectionString: GlobalLogReceiverAzureReceiverConnectionString;
  /**
  * filename_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#filename_options GlobalLogReceiver#filename_options}
  */
  readonly filenameOptions?: GlobalLogReceiverAzureReceiverFilenameOptions;
}

export function globalLogReceiverAzureReceiverToTerraform(struct?: GlobalLogReceiverAzureReceiverOutputReference | GlobalLogReceiverAzureReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    batch: globalLogReceiverAzureReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverAzureReceiverCompressionToTerraform(struct!.compression),
    connection_string: globalLogReceiverAzureReceiverConnectionStringToTerraform(struct!.connectionString),
    filename_options: globalLogReceiverAzureReceiverFilenameOptionsToTerraform(struct!.filenameOptions),
  }
}


export function globalLogReceiverAzureReceiverToHclTerraform(struct?: GlobalLogReceiverAzureReceiverOutputReference | GlobalLogReceiverAzureReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch: {
      value: globalLogReceiverAzureReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverAzureReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverCompressionList",
    },
    connection_string: {
      value: globalLogReceiverAzureReceiverConnectionStringToHclTerraform(struct!.connectionString),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringList",
    },
    filename_options: {
      value: globalLogReceiverAzureReceiverFilenameOptionsToHclTerraform(struct!.filenameOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverFilenameOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._connectionString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString?.internalValue;
    }
    if (this._filenameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameOptions = this._filenameOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._connectionString.internalValue = undefined;
      this._filenameOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._connectionString.internalValue = value.connectionString;
      this._filenameOptions.internalValue = value.filenameOptions;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverAzureReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverAzureReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverAzureReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverAzureReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString = new GlobalLogReceiverAzureReceiverConnectionStringOutputReference(this, "connection_string");
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: GlobalLogReceiverAzureReceiverConnectionString) {
    this._connectionString.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString.internalValue;
  }

  // filename_options - computed: false, optional: true, required: false
  private _filenameOptions = new GlobalLogReceiverAzureReceiverFilenameOptionsOutputReference(this, "filename_options");
  public get filenameOptions() {
    return this._filenameOptions;
  }
  public putFilenameOptions(value: GlobalLogReceiverAzureReceiverFilenameOptions) {
    this._filenameOptions.internalValue = value;
  }
  public resetFilenameOptions() {
    this._filenameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameOptionsInput() {
    return this._filenameOptions.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverDatadogReceiverBatchToTerraform(struct?: GlobalLogReceiverDatadogReceiverBatchOutputReference | GlobalLogReceiverDatadogReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverDatadogReceiverBatchToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverBatchOutputReference | GlobalLogReceiverDatadogReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverDatadogReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverDatadogReceiverCompressionToTerraform(struct?: GlobalLogReceiverDatadogReceiverCompressionOutputReference | GlobalLogReceiverDatadogReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverDatadogReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverCompressionOutputReference | GlobalLogReceiverDatadogReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverDatadogReceiverDatadogApiKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverDatadogReceiverDatadogApiKeyToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverDatadogApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverDatadogApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverDatadogReceiverUseTlsToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsOutputReference | GlobalLogReceiverDatadogReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_certificate: cdktf.booleanToTerraform(struct!.disableVerifyCertificate),
    disable_verify_hostname: cdktf.booleanToTerraform(struct!.disableVerifyHostname),
    enable_verify_certificate: cdktf.booleanToTerraform(struct!.enableVerifyCertificate),
    enable_verify_hostname: cdktf.booleanToTerraform(struct!.enableVerifyHostname),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    no_ca: cdktf.booleanToTerraform(struct!.noCa),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    mtls_enable: globalLogReceiverDatadogReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsOutputReference | GlobalLogReceiverDatadogReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ca: {
      value: cdktf.booleanToHclTerraform(struct!.noCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_enable: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyCertificate = this._disableVerifyCertificate;
    }
    if (this._disableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyHostname = this._disableVerifyHostname;
    }
    if (this._enableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyCertificate = this._enableVerifyCertificate;
    }
    if (this._enableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyHostname = this._enableVerifyHostname;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._noCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCa = this._noCa;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVerifyCertificate = undefined;
      this._disableVerifyHostname = undefined;
      this._enableVerifyCertificate = undefined;
      this._enableVerifyHostname = undefined;
      this._mtlsDisabled = undefined;
      this._noCa = undefined;
      this._trustedCaUrl = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVerifyCertificate = value.disableVerifyCertificate;
      this._disableVerifyHostname = value.disableVerifyHostname;
      this._enableVerifyCertificate = value.enableVerifyCertificate;
      this._enableVerifyHostname = value.enableVerifyHostname;
      this._mtlsDisabled = value.mtlsDisabled;
      this._noCa = value.noCa;
      this._trustedCaUrl = value.trustedCaUrl;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // disable_verify_certificate - computed: false, optional: true, required: false
  private _disableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get disableVerifyCertificate() {
    return this.getBooleanAttribute('disable_verify_certificate');
  }
  public set disableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._disableVerifyCertificate = value;
  }
  public resetDisableVerifyCertificate() {
    this._disableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyCertificateInput() {
    return this._disableVerifyCertificate;
  }

  // disable_verify_hostname - computed: false, optional: true, required: false
  private _disableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get disableVerifyHostname() {
    return this.getBooleanAttribute('disable_verify_hostname');
  }
  public set disableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._disableVerifyHostname = value;
  }
  public resetDisableVerifyHostname() {
    this._disableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyHostnameInput() {
    return this._disableVerifyHostname;
  }

  // enable_verify_certificate - computed: false, optional: true, required: false
  private _enableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get enableVerifyCertificate() {
    return this.getBooleanAttribute('enable_verify_certificate');
  }
  public set enableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._enableVerifyCertificate = value;
  }
  public resetEnableVerifyCertificate() {
    this._enableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyCertificateInput() {
    return this._enableVerifyCertificate;
  }

  // enable_verify_hostname - computed: false, optional: true, required: false
  private _enableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get enableVerifyHostname() {
    return this.getBooleanAttribute('enable_verify_hostname');
  }
  public set enableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._enableVerifyHostname = value;
  }
  public resetEnableVerifyHostname() {
    this._enableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyHostnameInput() {
    return this._enableVerifyHostname;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // no_ca - computed: false, optional: true, required: false
  private _noCa?: boolean | cdktf.IResolvable; 
  public get noCa() {
    return this.getBooleanAttribute('no_ca');
  }
  public set noCa(value: boolean | cdktf.IResolvable) {
    this._noCa = value;
  }
  public resetNoCa() {
    this._noCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCaInput() {
    return this._noCa;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#endpoint GlobalLogReceiver#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#site GlobalLogReceiver#site}
  */
  readonly site?: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverDatadogReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverDatadogReceiverCompression;
  /**
  * datadog_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#datadog_api_key GlobalLogReceiver#datadog_api_key}
  */
  readonly datadogApiKey: GlobalLogReceiverDatadogReceiverDatadogApiKey;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverDatadogReceiverUseTls;
}

export function globalLogReceiverDatadogReceiverToTerraform(struct?: GlobalLogReceiverDatadogReceiverOutputReference | GlobalLogReceiverDatadogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    site: cdktf.stringToTerraform(struct!.site),
    batch: globalLogReceiverDatadogReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverDatadogReceiverCompressionToTerraform(struct!.compression),
    datadog_api_key: globalLogReceiverDatadogReceiverDatadogApiKeyToTerraform(struct!.datadogApiKey),
    use_tls: globalLogReceiverDatadogReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverDatadogReceiverToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverOutputReference | GlobalLogReceiverDatadogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch: {
      value: globalLogReceiverDatadogReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverDatadogReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverCompressionList",
    },
    datadog_api_key: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyToHclTerraform(struct!.datadogApiKey),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyList",
    },
    use_tls: {
      value: globalLogReceiverDatadogReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._datadogApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._noTls = undefined;
      this._site = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._datadogApiKey.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._noTls = value.noTls;
      this._site = value.site;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._datadogApiKey.internalValue = value.datadogApiKey;
      this._useTls.internalValue = value.useTls;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverDatadogReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverDatadogReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverDatadogReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverDatadogReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // datadog_api_key - computed: false, optional: false, required: true
  private _datadogApiKey = new GlobalLogReceiverDatadogReceiverDatadogApiKeyOutputReference(this, "datadog_api_key");
  public get datadogApiKey() {
    return this._datadogApiKey;
  }
  public putDatadogApiKey(value: GlobalLogReceiverDatadogReceiverDatadogApiKey) {
    this._datadogApiKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new GlobalLogReceiverDatadogReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverDatadogReceiverUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface GlobalLogReceiverGcpBucketReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverGcpBucketReceiverBatchToTerraform(struct?: GlobalLogReceiverGcpBucketReceiverBatchOutputReference | GlobalLogReceiverGcpBucketReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverGcpBucketReceiverBatchToHclTerraform(struct?: GlobalLogReceiverGcpBucketReceiverBatchOutputReference | GlobalLogReceiverGcpBucketReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverGcpBucketReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverGcpBucketReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverGcpBucketReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverGcpBucketReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverGcpBucketReceiverCompressionToTerraform(struct?: GlobalLogReceiverGcpBucketReceiverCompressionOutputReference | GlobalLogReceiverGcpBucketReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverGcpBucketReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverGcpBucketReceiverCompressionOutputReference | GlobalLogReceiverGcpBucketReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverGcpBucketReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverGcpBucketReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverGcpBucketReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverGcpBucketReceiverFilenameOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#custom_folder GlobalLogReceiver#custom_folder}
  */
  readonly customFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#log_type_folder GlobalLogReceiver#log_type_folder}
  */
  readonly logTypeFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_folder GlobalLogReceiver#no_folder}
  */
  readonly noFolder?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverGcpBucketReceiverFilenameOptionsToTerraform(struct?: GlobalLogReceiverGcpBucketReceiverFilenameOptionsOutputReference | GlobalLogReceiverGcpBucketReceiverFilenameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_folder: cdktf.stringToTerraform(struct!.customFolder),
    log_type_folder: cdktf.booleanToTerraform(struct!.logTypeFolder),
    no_folder: cdktf.booleanToTerraform(struct!.noFolder),
  }
}


export function globalLogReceiverGcpBucketReceiverFilenameOptionsToHclTerraform(struct?: GlobalLogReceiverGcpBucketReceiverFilenameOptionsOutputReference | GlobalLogReceiverGcpBucketReceiverFilenameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_folder: {
      value: cdktf.stringToHclTerraform(struct!.customFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type_folder: {
      value: cdktf.booleanToHclTerraform(struct!.logTypeFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_folder: {
      value: cdktf.booleanToHclTerraform(struct!.noFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverGcpBucketReceiverFilenameOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverGcpBucketReceiverFilenameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFolder = this._customFolder;
    }
    if (this._logTypeFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeFolder = this._logTypeFolder;
    }
    if (this._noFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFolder = this._noFolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverGcpBucketReceiverFilenameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFolder = undefined;
      this._logTypeFolder = undefined;
      this._noFolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFolder = value.customFolder;
      this._logTypeFolder = value.logTypeFolder;
      this._noFolder = value.noFolder;
    }
  }

  // custom_folder - computed: false, optional: true, required: false
  private _customFolder?: string; 
  public get customFolder() {
    return this.getStringAttribute('custom_folder');
  }
  public set customFolder(value: string) {
    this._customFolder = value;
  }
  public resetCustomFolder() {
    this._customFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFolderInput() {
    return this._customFolder;
  }

  // log_type_folder - computed: false, optional: true, required: false
  private _logTypeFolder?: boolean | cdktf.IResolvable; 
  public get logTypeFolder() {
    return this.getBooleanAttribute('log_type_folder');
  }
  public set logTypeFolder(value: boolean | cdktf.IResolvable) {
    this._logTypeFolder = value;
  }
  public resetLogTypeFolder() {
    this._logTypeFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeFolderInput() {
    return this._logTypeFolder;
  }

  // no_folder - computed: false, optional: true, required: false
  private _noFolder?: boolean | cdktf.IResolvable; 
  public get noFolder() {
    return this.getBooleanAttribute('no_folder');
  }
  public set noFolder(value: boolean | cdktf.IResolvable) {
    this._noFolder = value;
  }
  public resetNoFolder() {
    this._noFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFolderInput() {
    return this._noFolder;
  }
}
export interface GlobalLogReceiverGcpBucketReceiverGcpCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
  */
  readonly tenant?: string;
}

export function globalLogReceiverGcpBucketReceiverGcpCredToTerraform(struct?: GlobalLogReceiverGcpBucketReceiverGcpCredOutputReference | GlobalLogReceiverGcpBucketReceiverGcpCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function globalLogReceiverGcpBucketReceiverGcpCredToHclTerraform(struct?: GlobalLogReceiverGcpBucketReceiverGcpCredOutputReference | GlobalLogReceiverGcpBucketReceiverGcpCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverGcpBucketReceiverGcpCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverGcpBucketReceiverGcpCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverGcpBucketReceiverGcpCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface GlobalLogReceiverGcpBucketReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#bucket GlobalLogReceiver#bucket}
  */
  readonly bucket: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverGcpBucketReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverGcpBucketReceiverCompression;
  /**
  * filename_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#filename_options GlobalLogReceiver#filename_options}
  */
  readonly filenameOptions?: GlobalLogReceiverGcpBucketReceiverFilenameOptions;
  /**
  * gcp_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#gcp_cred GlobalLogReceiver#gcp_cred}
  */
  readonly gcpCred: GlobalLogReceiverGcpBucketReceiverGcpCred;
}

export function globalLogReceiverGcpBucketReceiverToTerraform(struct?: GlobalLogReceiverGcpBucketReceiverOutputReference | GlobalLogReceiverGcpBucketReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    batch: globalLogReceiverGcpBucketReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverGcpBucketReceiverCompressionToTerraform(struct!.compression),
    filename_options: globalLogReceiverGcpBucketReceiverFilenameOptionsToTerraform(struct!.filenameOptions),
    gcp_cred: globalLogReceiverGcpBucketReceiverGcpCredToTerraform(struct!.gcpCred),
  }
}


export function globalLogReceiverGcpBucketReceiverToHclTerraform(struct?: GlobalLogReceiverGcpBucketReceiverOutputReference | GlobalLogReceiverGcpBucketReceiver): any {
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
    batch: {
      value: globalLogReceiverGcpBucketReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverGcpBucketReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverGcpBucketReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverGcpBucketReceiverCompressionList",
    },
    filename_options: {
      value: globalLogReceiverGcpBucketReceiverFilenameOptionsToHclTerraform(struct!.filenameOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverGcpBucketReceiverFilenameOptionsList",
    },
    gcp_cred: {
      value: globalLogReceiverGcpBucketReceiverGcpCredToHclTerraform(struct!.gcpCred),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverGcpBucketReceiverGcpCredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverGcpBucketReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverGcpBucketReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._filenameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameOptions = this._filenameOptions?.internalValue;
    }
    if (this._gcpCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpCred = this._gcpCred?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverGcpBucketReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._filenameOptions.internalValue = undefined;
      this._gcpCred.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._filenameOptions.internalValue = value.filenameOptions;
      this._gcpCred.internalValue = value.gcpCred;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverGcpBucketReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverGcpBucketReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverGcpBucketReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverGcpBucketReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // filename_options - computed: false, optional: true, required: false
  private _filenameOptions = new GlobalLogReceiverGcpBucketReceiverFilenameOptionsOutputReference(this, "filename_options");
  public get filenameOptions() {
    return this._filenameOptions;
  }
  public putFilenameOptions(value: GlobalLogReceiverGcpBucketReceiverFilenameOptions) {
    this._filenameOptions.internalValue = value;
  }
  public resetFilenameOptions() {
    this._filenameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameOptionsInput() {
    return this._filenameOptions.internalValue;
  }

  // gcp_cred - computed: false, optional: false, required: true
  private _gcpCred = new GlobalLogReceiverGcpBucketReceiverGcpCredOutputReference(this, "gcp_cred");
  public get gcpCred() {
    return this._gcpCred;
  }
  public putGcpCred(value: GlobalLogReceiverGcpBucketReceiverGcpCred) {
    this._gcpCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredInput() {
    return this._gcpCred.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthBasicPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicPasswordToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthBasicPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasicPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#user_name GlobalLogReceiver#user_name}
  */
  readonly userName?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#password GlobalLogReceiver#password}
  */
  readonly password?: GlobalLogReceiverHttpReceiverAuthBasicPassword;
}

export function globalLogReceiverHttpReceiverAuthBasicToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicOutputReference | GlobalLogReceiverHttpReceiverAuthBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    password: globalLogReceiverHttpReceiverAuthBasicPasswordToTerraform(struct!.password),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicOutputReference | GlobalLogReceiverHttpReceiverAuthBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userName = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userName = value.userName;
      this._password.internalValue = value.password;
    }
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // password - computed: false, optional: true, required: false
  private _password = new GlobalLogReceiverHttpReceiverAuthBasicPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: GlobalLogReceiverHttpReceiverAuthBasicPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthTokenToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenOutputReference | GlobalLogReceiverHttpReceiverAuthTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenTokenToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenOutputReference | GlobalLogReceiverHttpReceiverAuthTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthTokenTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthTokenToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthToken {
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#token GlobalLogReceiver#token}
  */
  readonly token?: GlobalLogReceiverHttpReceiverAuthTokenToken;
}

export function globalLogReceiverHttpReceiverAuthTokenToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenOutputReference | GlobalLogReceiverHttpReceiverAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: globalLogReceiverHttpReceiverAuthTokenTokenToTerraform(struct!.token),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenOutputReference | GlobalLogReceiverHttpReceiverAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token.internalValue = value.token;
    }
  }

  // token - computed: false, optional: true, required: false
  private _token = new GlobalLogReceiverHttpReceiverAuthTokenTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: GlobalLogReceiverHttpReceiverAuthTokenToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverHttpReceiverBatchToTerraform(struct?: GlobalLogReceiverHttpReceiverBatchOutputReference | GlobalLogReceiverHttpReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverHttpReceiverBatchToHclTerraform(struct?: GlobalLogReceiverHttpReceiverBatchOutputReference | GlobalLogReceiverHttpReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverHttpReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverHttpReceiverCompressionToTerraform(struct?: GlobalLogReceiverHttpReceiverCompressionOutputReference | GlobalLogReceiverHttpReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverHttpReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverHttpReceiverCompressionOutputReference | GlobalLogReceiverHttpReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverHttpReceiverUseTlsToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsOutputReference | GlobalLogReceiverHttpReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_certificate: cdktf.booleanToTerraform(struct!.disableVerifyCertificate),
    disable_verify_hostname: cdktf.booleanToTerraform(struct!.disableVerifyHostname),
    enable_verify_certificate: cdktf.booleanToTerraform(struct!.enableVerifyCertificate),
    enable_verify_hostname: cdktf.booleanToTerraform(struct!.enableVerifyHostname),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    no_ca: cdktf.booleanToTerraform(struct!.noCa),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    mtls_enable: globalLogReceiverHttpReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverHttpReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsOutputReference | GlobalLogReceiverHttpReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ca: {
      value: cdktf.booleanToHclTerraform(struct!.noCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_enable: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyCertificate = this._disableVerifyCertificate;
    }
    if (this._disableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyHostname = this._disableVerifyHostname;
    }
    if (this._enableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyCertificate = this._enableVerifyCertificate;
    }
    if (this._enableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyHostname = this._enableVerifyHostname;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._noCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCa = this._noCa;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVerifyCertificate = undefined;
      this._disableVerifyHostname = undefined;
      this._enableVerifyCertificate = undefined;
      this._enableVerifyHostname = undefined;
      this._mtlsDisabled = undefined;
      this._noCa = undefined;
      this._trustedCaUrl = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVerifyCertificate = value.disableVerifyCertificate;
      this._disableVerifyHostname = value.disableVerifyHostname;
      this._enableVerifyCertificate = value.enableVerifyCertificate;
      this._enableVerifyHostname = value.enableVerifyHostname;
      this._mtlsDisabled = value.mtlsDisabled;
      this._noCa = value.noCa;
      this._trustedCaUrl = value.trustedCaUrl;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // disable_verify_certificate - computed: false, optional: true, required: false
  private _disableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get disableVerifyCertificate() {
    return this.getBooleanAttribute('disable_verify_certificate');
  }
  public set disableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._disableVerifyCertificate = value;
  }
  public resetDisableVerifyCertificate() {
    this._disableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyCertificateInput() {
    return this._disableVerifyCertificate;
  }

  // disable_verify_hostname - computed: false, optional: true, required: false
  private _disableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get disableVerifyHostname() {
    return this.getBooleanAttribute('disable_verify_hostname');
  }
  public set disableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._disableVerifyHostname = value;
  }
  public resetDisableVerifyHostname() {
    this._disableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyHostnameInput() {
    return this._disableVerifyHostname;
  }

  // enable_verify_certificate - computed: false, optional: true, required: false
  private _enableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get enableVerifyCertificate() {
    return this.getBooleanAttribute('enable_verify_certificate');
  }
  public set enableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._enableVerifyCertificate = value;
  }
  public resetEnableVerifyCertificate() {
    this._enableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyCertificateInput() {
    return this._enableVerifyCertificate;
  }

  // enable_verify_hostname - computed: false, optional: true, required: false
  private _enableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get enableVerifyHostname() {
    return this.getBooleanAttribute('enable_verify_hostname');
  }
  public set enableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._enableVerifyHostname = value;
  }
  public resetEnableVerifyHostname() {
    this._enableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyHostnameInput() {
    return this._enableVerifyHostname;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // no_ca - computed: false, optional: true, required: false
  private _noCa?: boolean | cdktf.IResolvable; 
  public get noCa() {
    return this.getBooleanAttribute('no_ca');
  }
  public set noCa(value: boolean | cdktf.IResolvable) {
    this._noCa = value;
  }
  public resetNoCa() {
    this._noCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCaInput() {
    return this._noCa;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#auth_none GlobalLogReceiver#auth_none}
  */
  readonly authNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#uri GlobalLogReceiver#uri}
  */
  readonly uri: string;
  /**
  * auth_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#auth_basic GlobalLogReceiver#auth_basic}
  */
  readonly authBasic?: GlobalLogReceiverHttpReceiverAuthBasic;
  /**
  * auth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#auth_token GlobalLogReceiver#auth_token}
  */
  readonly authToken?: GlobalLogReceiverHttpReceiverAuthToken;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverHttpReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverHttpReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverHttpReceiverUseTls;
}

export function globalLogReceiverHttpReceiverToTerraform(struct?: GlobalLogReceiverHttpReceiverOutputReference | GlobalLogReceiverHttpReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_none: cdktf.booleanToTerraform(struct!.authNone),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    uri: cdktf.stringToTerraform(struct!.uri),
    auth_basic: globalLogReceiverHttpReceiverAuthBasicToTerraform(struct!.authBasic),
    auth_token: globalLogReceiverHttpReceiverAuthTokenToTerraform(struct!.authToken),
    batch: globalLogReceiverHttpReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverHttpReceiverCompressionToTerraform(struct!.compression),
    use_tls: globalLogReceiverHttpReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverHttpReceiverToHclTerraform(struct?: GlobalLogReceiverHttpReceiverOutputReference | GlobalLogReceiverHttpReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_none: {
      value: cdktf.booleanToHclTerraform(struct!.authNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_basic: {
      value: globalLogReceiverHttpReceiverAuthBasicToHclTerraform(struct!.authBasic),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicList",
    },
    auth_token: {
      value: globalLogReceiverHttpReceiverAuthTokenToHclTerraform(struct!.authToken),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenList",
    },
    batch: {
      value: globalLogReceiverHttpReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverHttpReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverCompressionList",
    },
    use_tls: {
      value: globalLogReceiverHttpReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.authNone = this._authNone;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._authBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authBasic = this._authBasic?.internalValue;
    }
    if (this._authToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken?.internalValue;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authNone = undefined;
      this._noTls = undefined;
      this._uri = undefined;
      this._authBasic.internalValue = undefined;
      this._authToken.internalValue = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authNone = value.authNone;
      this._noTls = value.noTls;
      this._uri = value.uri;
      this._authBasic.internalValue = value.authBasic;
      this._authToken.internalValue = value.authToken;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._useTls.internalValue = value.useTls;
    }
  }

  // auth_none - computed: false, optional: true, required: false
  private _authNone?: boolean | cdktf.IResolvable; 
  public get authNone() {
    return this.getBooleanAttribute('auth_none');
  }
  public set authNone(value: boolean | cdktf.IResolvable) {
    this._authNone = value;
  }
  public resetAuthNone() {
    this._authNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authNoneInput() {
    return this._authNone;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // auth_basic - computed: false, optional: true, required: false
  private _authBasic = new GlobalLogReceiverHttpReceiverAuthBasicOutputReference(this, "auth_basic");
  public get authBasic() {
    return this._authBasic;
  }
  public putAuthBasic(value: GlobalLogReceiverHttpReceiverAuthBasic) {
    this._authBasic.internalValue = value;
  }
  public resetAuthBasic() {
    this._authBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBasicInput() {
    return this._authBasic.internalValue;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken = new GlobalLogReceiverHttpReceiverAuthTokenOutputReference(this, "auth_token");
  public get authToken() {
    return this._authToken;
  }
  public putAuthToken(value: GlobalLogReceiverHttpReceiverAuthToken) {
    this._authToken.internalValue = value;
  }
  public resetAuthToken() {
    this._authToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverHttpReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverHttpReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverHttpReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverHttpReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new GlobalLogReceiverHttpReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverHttpReceiverUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface GlobalLogReceiverKafkaReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverKafkaReceiverBatchToTerraform(struct?: GlobalLogReceiverKafkaReceiverBatchOutputReference | GlobalLogReceiverKafkaReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverKafkaReceiverBatchToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverBatchOutputReference | GlobalLogReceiverKafkaReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverKafkaReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverKafkaReceiverCompressionToTerraform(struct?: GlobalLogReceiverKafkaReceiverCompressionOutputReference | GlobalLogReceiverKafkaReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverKafkaReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverCompressionOutputReference | GlobalLogReceiverKafkaReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverKafkaReceiverUseTlsToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsOutputReference | GlobalLogReceiverKafkaReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_certificate: cdktf.booleanToTerraform(struct!.disableVerifyCertificate),
    disable_verify_hostname: cdktf.booleanToTerraform(struct!.disableVerifyHostname),
    enable_verify_certificate: cdktf.booleanToTerraform(struct!.enableVerifyCertificate),
    enable_verify_hostname: cdktf.booleanToTerraform(struct!.enableVerifyHostname),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    no_ca: cdktf.booleanToTerraform(struct!.noCa),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    mtls_enable: globalLogReceiverKafkaReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsOutputReference | GlobalLogReceiverKafkaReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ca: {
      value: cdktf.booleanToHclTerraform(struct!.noCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_enable: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyCertificate = this._disableVerifyCertificate;
    }
    if (this._disableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyHostname = this._disableVerifyHostname;
    }
    if (this._enableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyCertificate = this._enableVerifyCertificate;
    }
    if (this._enableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyHostname = this._enableVerifyHostname;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._noCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCa = this._noCa;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVerifyCertificate = undefined;
      this._disableVerifyHostname = undefined;
      this._enableVerifyCertificate = undefined;
      this._enableVerifyHostname = undefined;
      this._mtlsDisabled = undefined;
      this._noCa = undefined;
      this._trustedCaUrl = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVerifyCertificate = value.disableVerifyCertificate;
      this._disableVerifyHostname = value.disableVerifyHostname;
      this._enableVerifyCertificate = value.enableVerifyCertificate;
      this._enableVerifyHostname = value.enableVerifyHostname;
      this._mtlsDisabled = value.mtlsDisabled;
      this._noCa = value.noCa;
      this._trustedCaUrl = value.trustedCaUrl;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // disable_verify_certificate - computed: false, optional: true, required: false
  private _disableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get disableVerifyCertificate() {
    return this.getBooleanAttribute('disable_verify_certificate');
  }
  public set disableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._disableVerifyCertificate = value;
  }
  public resetDisableVerifyCertificate() {
    this._disableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyCertificateInput() {
    return this._disableVerifyCertificate;
  }

  // disable_verify_hostname - computed: false, optional: true, required: false
  private _disableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get disableVerifyHostname() {
    return this.getBooleanAttribute('disable_verify_hostname');
  }
  public set disableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._disableVerifyHostname = value;
  }
  public resetDisableVerifyHostname() {
    this._disableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyHostnameInput() {
    return this._disableVerifyHostname;
  }

  // enable_verify_certificate - computed: false, optional: true, required: false
  private _enableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get enableVerifyCertificate() {
    return this.getBooleanAttribute('enable_verify_certificate');
  }
  public set enableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._enableVerifyCertificate = value;
  }
  public resetEnableVerifyCertificate() {
    this._enableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyCertificateInput() {
    return this._enableVerifyCertificate;
  }

  // enable_verify_hostname - computed: false, optional: true, required: false
  private _enableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get enableVerifyHostname() {
    return this.getBooleanAttribute('enable_verify_hostname');
  }
  public set enableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._enableVerifyHostname = value;
  }
  public resetEnableVerifyHostname() {
    this._enableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyHostnameInput() {
    return this._enableVerifyHostname;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // no_ca - computed: false, optional: true, required: false
  private _noCa?: boolean | cdktf.IResolvable; 
  public get noCa() {
    return this.getBooleanAttribute('no_ca');
  }
  public set noCa(value: boolean | cdktf.IResolvable) {
    this._noCa = value;
  }
  public resetNoCa() {
    this._noCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCaInput() {
    return this._noCa;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface GlobalLogReceiverKafkaReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#bootstrap_servers GlobalLogReceiver#bootstrap_servers}
  */
  readonly bootstrapServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#kafka_topic GlobalLogReceiver#kafka_topic}
  */
  readonly kafkaTopic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverKafkaReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverKafkaReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverKafkaReceiverUseTls;
}

export function globalLogReceiverKafkaReceiverToTerraform(struct?: GlobalLogReceiverKafkaReceiverOutputReference | GlobalLogReceiverKafkaReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootstrapServers),
    kafka_topic: cdktf.stringToTerraform(struct!.kafkaTopic),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    batch: globalLogReceiverKafkaReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverKafkaReceiverCompressionToTerraform(struct!.compression),
    use_tls: globalLogReceiverKafkaReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverKafkaReceiverToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverOutputReference | GlobalLogReceiverKafkaReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootstrapServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kafka_topic: {
      value: cdktf.stringToHclTerraform(struct!.kafkaTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch: {
      value: globalLogReceiverKafkaReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverKafkaReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverCompressionList",
    },
    use_tls: {
      value: globalLogReceiverKafkaReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._kafkaTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopic = this._kafkaTopic;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapServers = undefined;
      this._kafkaTopic = undefined;
      this._noTls = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapServers = value.bootstrapServers;
      this._kafkaTopic = value.kafkaTopic;
      this._noTls = value.noTls;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._useTls.internalValue = value.useTls;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string[]; 
  public get bootstrapServers() {
    return this.getListAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string[]) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // kafka_topic - computed: false, optional: false, required: true
  private _kafkaTopic?: string; 
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }
  public set kafkaTopic(value: string) {
    this._kafkaTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicInput() {
    return this._kafkaTopic;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverKafkaReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverKafkaReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverKafkaReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverKafkaReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new GlobalLogReceiverKafkaReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverKafkaReceiverUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverNewRelicReceiverApiKeyClearSecretInfoToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverNewRelicReceiverApiKeyClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverNewRelicReceiverApiKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo;
}

export function globalLogReceiverNewRelicReceiverApiKeyToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyOutputReference | GlobalLogReceiverNewRelicReceiverApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverNewRelicReceiverApiKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverNewRelicReceiverApiKeyToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyOutputReference | GlobalLogReceiverNewRelicReceiverApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverNewRelicReceiverApiKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNewRelicReceiverApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiverApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverNewRelicReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#eu GlobalLogReceiver#eu}
  */
  readonly eu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#us GlobalLogReceiver#us}
  */
  readonly us?: boolean | cdktf.IResolvable;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#api_key GlobalLogReceiver#api_key}
  */
  readonly apiKey: GlobalLogReceiverNewRelicReceiverApiKey;
}

export function globalLogReceiverNewRelicReceiverToTerraform(struct?: GlobalLogReceiverNewRelicReceiverOutputReference | GlobalLogReceiverNewRelicReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eu: cdktf.booleanToTerraform(struct!.eu),
    us: cdktf.booleanToTerraform(struct!.us),
    api_key: globalLogReceiverNewRelicReceiverApiKeyToTerraform(struct!.apiKey),
  }
}


export function globalLogReceiverNewRelicReceiverToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverOutputReference | GlobalLogReceiverNewRelicReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eu: {
      value: cdktf.booleanToHclTerraform(struct!.eu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    us: {
      value: cdktf.booleanToHclTerraform(struct!.us),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_key: {
      value: globalLogReceiverNewRelicReceiverApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNewRelicReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eu !== undefined) {
      hasAnyValues = true;
      internalValueResult.eu = this._eu;
    }
    if (this._us !== undefined) {
      hasAnyValues = true;
      internalValueResult.us = this._us;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eu = undefined;
      this._us = undefined;
      this._apiKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eu = value.eu;
      this._us = value.us;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // eu - computed: false, optional: true, required: false
  private _eu?: boolean | cdktf.IResolvable; 
  public get eu() {
    return this.getBooleanAttribute('eu');
  }
  public set eu(value: boolean | cdktf.IResolvable) {
    this._eu = value;
  }
  public resetEu() {
    this._eu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get euInput() {
    return this._eu;
  }

  // us - computed: false, optional: true, required: false
  private _us?: boolean | cdktf.IResolvable; 
  public get us() {
    return this.getBooleanAttribute('us');
  }
  public set us(value: boolean | cdktf.IResolvable) {
    this._us = value;
  }
  public resetUs() {
    this._us = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usInput() {
    return this._us;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey = new GlobalLogReceiverNewRelicReceiverApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: GlobalLogReceiverNewRelicReceiverApiKey) {
    this._apiKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface GlobalLogReceiverNsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#namespaces GlobalLogReceiver#namespaces}
  */
  readonly namespaces: string[];
}

export function globalLogReceiverNsListStructToTerraform(struct?: GlobalLogReceiverNsListStructOutputReference | GlobalLogReceiverNsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function globalLogReceiverNsListStructToHclTerraform(struct?: GlobalLogReceiverNsListStructOutputReference | GlobalLogReceiverNsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
    }
  }

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}
export interface GlobalLogReceiverQradarReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverQradarReceiverBatchToTerraform(struct?: GlobalLogReceiverQradarReceiverBatchOutputReference | GlobalLogReceiverQradarReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverQradarReceiverBatchToHclTerraform(struct?: GlobalLogReceiverQradarReceiverBatchOutputReference | GlobalLogReceiverQradarReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverQradarReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverQradarReceiverCompressionToTerraform(struct?: GlobalLogReceiverQradarReceiverCompressionOutputReference | GlobalLogReceiverQradarReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverQradarReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverQradarReceiverCompressionOutputReference | GlobalLogReceiverQradarReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverQradarReceiverUseTlsToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsOutputReference | GlobalLogReceiverQradarReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_certificate: cdktf.booleanToTerraform(struct!.disableVerifyCertificate),
    disable_verify_hostname: cdktf.booleanToTerraform(struct!.disableVerifyHostname),
    enable_verify_certificate: cdktf.booleanToTerraform(struct!.enableVerifyCertificate),
    enable_verify_hostname: cdktf.booleanToTerraform(struct!.enableVerifyHostname),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    no_ca: cdktf.booleanToTerraform(struct!.noCa),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    mtls_enable: globalLogReceiverQradarReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverQradarReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsOutputReference | GlobalLogReceiverQradarReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ca: {
      value: cdktf.booleanToHclTerraform(struct!.noCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_enable: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyCertificate = this._disableVerifyCertificate;
    }
    if (this._disableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyHostname = this._disableVerifyHostname;
    }
    if (this._enableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyCertificate = this._enableVerifyCertificate;
    }
    if (this._enableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyHostname = this._enableVerifyHostname;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._noCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCa = this._noCa;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVerifyCertificate = undefined;
      this._disableVerifyHostname = undefined;
      this._enableVerifyCertificate = undefined;
      this._enableVerifyHostname = undefined;
      this._mtlsDisabled = undefined;
      this._noCa = undefined;
      this._trustedCaUrl = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVerifyCertificate = value.disableVerifyCertificate;
      this._disableVerifyHostname = value.disableVerifyHostname;
      this._enableVerifyCertificate = value.enableVerifyCertificate;
      this._enableVerifyHostname = value.enableVerifyHostname;
      this._mtlsDisabled = value.mtlsDisabled;
      this._noCa = value.noCa;
      this._trustedCaUrl = value.trustedCaUrl;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // disable_verify_certificate - computed: false, optional: true, required: false
  private _disableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get disableVerifyCertificate() {
    return this.getBooleanAttribute('disable_verify_certificate');
  }
  public set disableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._disableVerifyCertificate = value;
  }
  public resetDisableVerifyCertificate() {
    this._disableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyCertificateInput() {
    return this._disableVerifyCertificate;
  }

  // disable_verify_hostname - computed: false, optional: true, required: false
  private _disableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get disableVerifyHostname() {
    return this.getBooleanAttribute('disable_verify_hostname');
  }
  public set disableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._disableVerifyHostname = value;
  }
  public resetDisableVerifyHostname() {
    this._disableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyHostnameInput() {
    return this._disableVerifyHostname;
  }

  // enable_verify_certificate - computed: false, optional: true, required: false
  private _enableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get enableVerifyCertificate() {
    return this.getBooleanAttribute('enable_verify_certificate');
  }
  public set enableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._enableVerifyCertificate = value;
  }
  public resetEnableVerifyCertificate() {
    this._enableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyCertificateInput() {
    return this._enableVerifyCertificate;
  }

  // enable_verify_hostname - computed: false, optional: true, required: false
  private _enableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get enableVerifyHostname() {
    return this.getBooleanAttribute('enable_verify_hostname');
  }
  public set enableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._enableVerifyHostname = value;
  }
  public resetEnableVerifyHostname() {
    this._enableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyHostnameInput() {
    return this._enableVerifyHostname;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // no_ca - computed: false, optional: true, required: false
  private _noCa?: boolean | cdktf.IResolvable; 
  public get noCa() {
    return this.getBooleanAttribute('no_ca');
  }
  public set noCa(value: boolean | cdktf.IResolvable) {
    this._noCa = value;
  }
  public resetNoCa() {
    this._noCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCaInput() {
    return this._noCa;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface GlobalLogReceiverQradarReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#uri GlobalLogReceiver#uri}
  */
  readonly uri: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverQradarReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverQradarReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverQradarReceiverUseTls;
}

export function globalLogReceiverQradarReceiverToTerraform(struct?: GlobalLogReceiverQradarReceiverOutputReference | GlobalLogReceiverQradarReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    uri: cdktf.stringToTerraform(struct!.uri),
    batch: globalLogReceiverQradarReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverQradarReceiverCompressionToTerraform(struct!.compression),
    use_tls: globalLogReceiverQradarReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverQradarReceiverToHclTerraform(struct?: GlobalLogReceiverQradarReceiverOutputReference | GlobalLogReceiverQradarReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch: {
      value: globalLogReceiverQradarReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverQradarReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverCompressionList",
    },
    use_tls: {
      value: globalLogReceiverQradarReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noTls = undefined;
      this._uri = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noTls = value.noTls;
      this._uri = value.uri;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._useTls.internalValue = value.useTls;
    }
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverQradarReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverQradarReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverQradarReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverQradarReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new GlobalLogReceiverQradarReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverQradarReceiverUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface GlobalLogReceiverS3ReceiverAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
  */
  readonly tenant?: string;
}

export function globalLogReceiverS3ReceiverAwsCredToTerraform(struct?: GlobalLogReceiverS3ReceiverAwsCredOutputReference | GlobalLogReceiverS3ReceiverAwsCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function globalLogReceiverS3ReceiverAwsCredToHclTerraform(struct?: GlobalLogReceiverS3ReceiverAwsCredOutputReference | GlobalLogReceiverS3ReceiverAwsCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverS3ReceiverAwsCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverS3ReceiverAwsCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverS3ReceiverAwsCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface GlobalLogReceiverS3ReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverS3ReceiverBatchToTerraform(struct?: GlobalLogReceiverS3ReceiverBatchOutputReference | GlobalLogReceiverS3ReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverS3ReceiverBatchToHclTerraform(struct?: GlobalLogReceiverS3ReceiverBatchOutputReference | GlobalLogReceiverS3ReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverS3ReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverS3ReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverS3ReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverS3ReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverS3ReceiverCompressionToTerraform(struct?: GlobalLogReceiverS3ReceiverCompressionOutputReference | GlobalLogReceiverS3ReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverS3ReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverS3ReceiverCompressionOutputReference | GlobalLogReceiverS3ReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverS3ReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverS3ReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverS3ReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverS3ReceiverFilenameOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#custom_folder GlobalLogReceiver#custom_folder}
  */
  readonly customFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#log_type_folder GlobalLogReceiver#log_type_folder}
  */
  readonly logTypeFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_folder GlobalLogReceiver#no_folder}
  */
  readonly noFolder?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverS3ReceiverFilenameOptionsToTerraform(struct?: GlobalLogReceiverS3ReceiverFilenameOptionsOutputReference | GlobalLogReceiverS3ReceiverFilenameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_folder: cdktf.stringToTerraform(struct!.customFolder),
    log_type_folder: cdktf.booleanToTerraform(struct!.logTypeFolder),
    no_folder: cdktf.booleanToTerraform(struct!.noFolder),
  }
}


export function globalLogReceiverS3ReceiverFilenameOptionsToHclTerraform(struct?: GlobalLogReceiverS3ReceiverFilenameOptionsOutputReference | GlobalLogReceiverS3ReceiverFilenameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_folder: {
      value: cdktf.stringToHclTerraform(struct!.customFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type_folder: {
      value: cdktf.booleanToHclTerraform(struct!.logTypeFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_folder: {
      value: cdktf.booleanToHclTerraform(struct!.noFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverS3ReceiverFilenameOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverS3ReceiverFilenameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFolder = this._customFolder;
    }
    if (this._logTypeFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeFolder = this._logTypeFolder;
    }
    if (this._noFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFolder = this._noFolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverS3ReceiverFilenameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFolder = undefined;
      this._logTypeFolder = undefined;
      this._noFolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFolder = value.customFolder;
      this._logTypeFolder = value.logTypeFolder;
      this._noFolder = value.noFolder;
    }
  }

  // custom_folder - computed: false, optional: true, required: false
  private _customFolder?: string; 
  public get customFolder() {
    return this.getStringAttribute('custom_folder');
  }
  public set customFolder(value: string) {
    this._customFolder = value;
  }
  public resetCustomFolder() {
    this._customFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFolderInput() {
    return this._customFolder;
  }

  // log_type_folder - computed: false, optional: true, required: false
  private _logTypeFolder?: boolean | cdktf.IResolvable; 
  public get logTypeFolder() {
    return this.getBooleanAttribute('log_type_folder');
  }
  public set logTypeFolder(value: boolean | cdktf.IResolvable) {
    this._logTypeFolder = value;
  }
  public resetLogTypeFolder() {
    this._logTypeFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeFolderInput() {
    return this._logTypeFolder;
  }

  // no_folder - computed: false, optional: true, required: false
  private _noFolder?: boolean | cdktf.IResolvable; 
  public get noFolder() {
    return this.getBooleanAttribute('no_folder');
  }
  public set noFolder(value: boolean | cdktf.IResolvable) {
    this._noFolder = value;
  }
  public resetNoFolder() {
    this._noFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFolderInput() {
    return this._noFolder;
  }
}
export interface GlobalLogReceiverS3Receiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#aws_region GlobalLogReceiver#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#bucket GlobalLogReceiver#bucket}
  */
  readonly bucket: string;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#aws_cred GlobalLogReceiver#aws_cred}
  */
  readonly awsCred: GlobalLogReceiverS3ReceiverAwsCred;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverS3ReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverS3ReceiverCompression;
  /**
  * filename_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#filename_options GlobalLogReceiver#filename_options}
  */
  readonly filenameOptions?: GlobalLogReceiverS3ReceiverFilenameOptions;
}

export function globalLogReceiverS3ReceiverToTerraform(struct?: GlobalLogReceiverS3ReceiverOutputReference | GlobalLogReceiverS3Receiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    aws_cred: globalLogReceiverS3ReceiverAwsCredToTerraform(struct!.awsCred),
    batch: globalLogReceiverS3ReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverS3ReceiverCompressionToTerraform(struct!.compression),
    filename_options: globalLogReceiverS3ReceiverFilenameOptionsToTerraform(struct!.filenameOptions),
  }
}


export function globalLogReceiverS3ReceiverToHclTerraform(struct?: GlobalLogReceiverS3ReceiverOutputReference | GlobalLogReceiverS3Receiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_cred: {
      value: globalLogReceiverS3ReceiverAwsCredToHclTerraform(struct!.awsCred),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverS3ReceiverAwsCredList",
    },
    batch: {
      value: globalLogReceiverS3ReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverS3ReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverS3ReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverS3ReceiverCompressionList",
    },
    filename_options: {
      value: globalLogReceiverS3ReceiverFilenameOptionsToHclTerraform(struct!.filenameOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverS3ReceiverFilenameOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverS3ReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverS3Receiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._awsCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCred = this._awsCred?.internalValue;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._filenameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameOptions = this._filenameOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverS3Receiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._bucket = undefined;
      this._awsCred.internalValue = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._filenameOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._bucket = value.bucket;
      this._awsCred.internalValue = value.awsCred;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._filenameOptions.internalValue = value.filenameOptions;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // aws_cred - computed: false, optional: false, required: true
  private _awsCred = new GlobalLogReceiverS3ReceiverAwsCredOutputReference(this, "aws_cred");
  public get awsCred() {
    return this._awsCred;
  }
  public putAwsCred(value: GlobalLogReceiverS3ReceiverAwsCred) {
    this._awsCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredInput() {
    return this._awsCred.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverS3ReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverS3ReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverS3ReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverS3ReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // filename_options - computed: false, optional: true, required: false
  private _filenameOptions = new GlobalLogReceiverS3ReceiverFilenameOptionsOutputReference(this, "filename_options");
  public get filenameOptions() {
    return this._filenameOptions;
  }
  public putFilenameOptions(value: GlobalLogReceiverS3ReceiverFilenameOptions) {
    this._filenameOptions.internalValue = value;
  }
  public resetFilenameOptions() {
    this._filenameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameOptionsInput() {
    return this._filenameOptions.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverSplunkReceiverBatchToTerraform(struct?: GlobalLogReceiverSplunkReceiverBatchOutputReference | GlobalLogReceiverSplunkReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_bytes_disabled: cdktf.booleanToTerraform(struct!.maxBytesDisabled),
    max_events: cdktf.numberToTerraform(struct!.maxEvents),
    max_events_disabled: cdktf.booleanToTerraform(struct!.maxEventsDisabled),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    timeout_seconds_default: cdktf.booleanToTerraform(struct!.timeoutSecondsDefault),
  }
}


export function globalLogReceiverSplunkReceiverBatchToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverBatchOutputReference | GlobalLogReceiverSplunkReceiverBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxBytesDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_events: {
      value: cdktf.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_events_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.maxEventsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds_default: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutSecondsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxBytesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesDisabled = this._maxBytesDisabled;
    }
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxEventsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsDisabled = this._maxEventsDisabled;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._timeoutSecondsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecondsDefault = this._timeoutSecondsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBytes = undefined;
      this._maxBytesDisabled = undefined;
      this._maxEvents = undefined;
      this._maxEventsDisabled = undefined;
      this._timeoutSeconds = undefined;
      this._timeoutSecondsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBytes = value.maxBytes;
      this._maxBytesDisabled = value.maxBytesDisabled;
      this._maxEvents = value.maxEvents;
      this._maxEventsDisabled = value.maxEventsDisabled;
      this._timeoutSeconds = value.timeoutSeconds;
      this._timeoutSecondsDefault = value.timeoutSecondsDefault;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_bytes_disabled - computed: false, optional: true, required: false
  private _maxBytesDisabled?: boolean | cdktf.IResolvable; 
  public get maxBytesDisabled() {
    return this.getBooleanAttribute('max_bytes_disabled');
  }
  public set maxBytesDisabled(value: boolean | cdktf.IResolvable) {
    this._maxBytesDisabled = value;
  }
  public resetMaxBytesDisabled() {
    this._maxBytesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesDisabledInput() {
    return this._maxBytesDisabled;
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_events_disabled - computed: false, optional: true, required: false
  private _maxEventsDisabled?: boolean | cdktf.IResolvable; 
  public get maxEventsDisabled() {
    return this.getBooleanAttribute('max_events_disabled');
  }
  public set maxEventsDisabled(value: boolean | cdktf.IResolvable) {
    this._maxEventsDisabled = value;
  }
  public resetMaxEventsDisabled() {
    this._maxEventsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsDisabledInput() {
    return this._maxEventsDisabled;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // timeout_seconds_default - computed: false, optional: true, required: false
  private _timeoutSecondsDefault?: boolean | cdktf.IResolvable; 
  public get timeoutSecondsDefault() {
    return this.getBooleanAttribute('timeout_seconds_default');
  }
  public set timeoutSecondsDefault(value: boolean | cdktf.IResolvable) {
    this._timeoutSecondsDefault = value;
  }
  public resetTimeoutSecondsDefault() {
    this._timeoutSecondsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsDefaultInput() {
    return this._timeoutSecondsDefault;
  }
}
export interface GlobalLogReceiverSplunkReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverSplunkReceiverCompressionToTerraform(struct?: GlobalLogReceiverSplunkReceiverCompressionOutputReference | GlobalLogReceiverSplunkReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_default: cdktf.booleanToTerraform(struct!.compressionDefault),
    compression_gzip: cdktf.booleanToTerraform(struct!.compressionGzip),
    compression_none: cdktf.booleanToTerraform(struct!.compressionNone),
  }
}


export function globalLogReceiverSplunkReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverCompressionOutputReference | GlobalLogReceiverSplunkReceiverCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_default: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_gzip: {
      value: cdktf.booleanToHclTerraform(struct!.compressionGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_none: {
      value: cdktf.booleanToHclTerraform(struct!.compressionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDefault = this._compressionDefault;
    }
    if (this._compressionGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionGzip = this._compressionGzip;
    }
    if (this._compressionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionNone = this._compressionNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDefault = undefined;
      this._compressionGzip = undefined;
      this._compressionNone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDefault = value.compressionDefault;
      this._compressionGzip = value.compressionGzip;
      this._compressionNone = value.compressionNone;
    }
  }

  // compression_default - computed: false, optional: true, required: false
  private _compressionDefault?: boolean | cdktf.IResolvable; 
  public get compressionDefault() {
    return this.getBooleanAttribute('compression_default');
  }
  public set compressionDefault(value: boolean | cdktf.IResolvable) {
    this._compressionDefault = value;
  }
  public resetCompressionDefault() {
    this._compressionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDefaultInput() {
    return this._compressionDefault;
  }

  // compression_gzip - computed: false, optional: true, required: false
  private _compressionGzip?: boolean | cdktf.IResolvable; 
  public get compressionGzip() {
    return this.getBooleanAttribute('compression_gzip');
  }
  public set compressionGzip(value: boolean | cdktf.IResolvable) {
    this._compressionGzip = value;
  }
  public resetCompressionGzip() {
    this._compressionGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionGzipInput() {
    return this._compressionGzip;
  }

  // compression_none - computed: false, optional: true, required: false
  private _compressionNone?: boolean | cdktf.IResolvable; 
  public get compressionNone() {
    return this.getBooleanAttribute('compression_none');
  }
  public set compressionNone(value: boolean | cdktf.IResolvable) {
    this._compressionNone = value;
  }
  public resetCompressionNone() {
    this._compressionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionNoneInput() {
    return this._compressionNone;
  }
}
export interface GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverSplunkReceiverSplunkHecToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverSplunkReceiverSplunkHecTokenToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverSplunkHecToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverSplunkReceiverUseTlsToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsOutputReference | GlobalLogReceiverSplunkReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_certificate: cdktf.booleanToTerraform(struct!.disableVerifyCertificate),
    disable_verify_hostname: cdktf.booleanToTerraform(struct!.disableVerifyHostname),
    enable_verify_certificate: cdktf.booleanToTerraform(struct!.enableVerifyCertificate),
    enable_verify_hostname: cdktf.booleanToTerraform(struct!.enableVerifyHostname),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    no_ca: cdktf.booleanToTerraform(struct!.noCa),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    mtls_enable: globalLogReceiverSplunkReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsOutputReference | GlobalLogReceiverSplunkReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ca: {
      value: cdktf.booleanToHclTerraform(struct!.noCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_enable: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyCertificate = this._disableVerifyCertificate;
    }
    if (this._disableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyHostname = this._disableVerifyHostname;
    }
    if (this._enableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyCertificate = this._enableVerifyCertificate;
    }
    if (this._enableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyHostname = this._enableVerifyHostname;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._noCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCa = this._noCa;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVerifyCertificate = undefined;
      this._disableVerifyHostname = undefined;
      this._enableVerifyCertificate = undefined;
      this._enableVerifyHostname = undefined;
      this._mtlsDisabled = undefined;
      this._noCa = undefined;
      this._trustedCaUrl = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVerifyCertificate = value.disableVerifyCertificate;
      this._disableVerifyHostname = value.disableVerifyHostname;
      this._enableVerifyCertificate = value.enableVerifyCertificate;
      this._enableVerifyHostname = value.enableVerifyHostname;
      this._mtlsDisabled = value.mtlsDisabled;
      this._noCa = value.noCa;
      this._trustedCaUrl = value.trustedCaUrl;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // disable_verify_certificate - computed: false, optional: true, required: false
  private _disableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get disableVerifyCertificate() {
    return this.getBooleanAttribute('disable_verify_certificate');
  }
  public set disableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._disableVerifyCertificate = value;
  }
  public resetDisableVerifyCertificate() {
    this._disableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyCertificateInput() {
    return this._disableVerifyCertificate;
  }

  // disable_verify_hostname - computed: false, optional: true, required: false
  private _disableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get disableVerifyHostname() {
    return this.getBooleanAttribute('disable_verify_hostname');
  }
  public set disableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._disableVerifyHostname = value;
  }
  public resetDisableVerifyHostname() {
    this._disableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyHostnameInput() {
    return this._disableVerifyHostname;
  }

  // enable_verify_certificate - computed: false, optional: true, required: false
  private _enableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get enableVerifyCertificate() {
    return this.getBooleanAttribute('enable_verify_certificate');
  }
  public set enableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._enableVerifyCertificate = value;
  }
  public resetEnableVerifyCertificate() {
    this._enableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyCertificateInput() {
    return this._enableVerifyCertificate;
  }

  // enable_verify_hostname - computed: false, optional: true, required: false
  private _enableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get enableVerifyHostname() {
    return this.getBooleanAttribute('enable_verify_hostname');
  }
  public set enableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._enableVerifyHostname = value;
  }
  public resetEnableVerifyHostname() {
    this._enableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyHostnameInput() {
    return this._enableVerifyHostname;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // no_ca - computed: false, optional: true, required: false
  private _noCa?: boolean | cdktf.IResolvable; 
  public get noCa() {
    return this.getBooleanAttribute('no_ca');
  }
  public set noCa(value: boolean | cdktf.IResolvable) {
    this._noCa = value;
  }
  public resetNoCa() {
    this._noCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCaInput() {
    return this._noCa;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#endpoint GlobalLogReceiver#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverSplunkReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverSplunkReceiverCompression;
  /**
  * splunk_hec_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#splunk_hec_token GlobalLogReceiver#splunk_hec_token}
  */
  readonly splunkHecToken: GlobalLogReceiverSplunkReceiverSplunkHecToken;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverSplunkReceiverUseTls;
}

export function globalLogReceiverSplunkReceiverToTerraform(struct?: GlobalLogReceiverSplunkReceiverOutputReference | GlobalLogReceiverSplunkReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    batch: globalLogReceiverSplunkReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverSplunkReceiverCompressionToTerraform(struct!.compression),
    splunk_hec_token: globalLogReceiverSplunkReceiverSplunkHecTokenToTerraform(struct!.splunkHecToken),
    use_tls: globalLogReceiverSplunkReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverSplunkReceiverToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverOutputReference | GlobalLogReceiverSplunkReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch: {
      value: globalLogReceiverSplunkReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverSplunkReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverCompressionList",
    },
    splunk_hec_token: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenToHclTerraform(struct!.splunkHecToken),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenList",
    },
    use_tls: {
      value: globalLogReceiverSplunkReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._splunkHecToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHecToken = this._splunkHecToken?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._noTls = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._splunkHecToken.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._noTls = value.noTls;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._splunkHecToken.internalValue = value.splunkHecToken;
      this._useTls.internalValue = value.useTls;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverSplunkReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverSplunkReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverSplunkReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverSplunkReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // splunk_hec_token - computed: false, optional: false, required: true
  private _splunkHecToken = new GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference(this, "splunk_hec_token");
  public get splunkHecToken() {
    return this._splunkHecToken;
  }
  public putSplunkHecToken(value: GlobalLogReceiverSplunkReceiverSplunkHecToken) {
    this._splunkHecToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecTokenInput() {
    return this._splunkHecToken.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new GlobalLogReceiverSplunkReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverSplunkReceiverUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GlobalLogReceiverSumoLogicReceiverUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo;
}

export function globalLogReceiverSumoLogicReceiverUrlToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlOutputReference | GlobalLogReceiverSumoLogicReceiverUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function globalLogReceiverSumoLogicReceiverUrlToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlOutputReference | GlobalLogReceiverSumoLogicReceiverUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSumoLogicReceiverUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverSumoLogicReceiver {
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: GlobalLogReceiverSumoLogicReceiverUrl;
}

export function globalLogReceiverSumoLogicReceiverToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverOutputReference | GlobalLogReceiverSumoLogicReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: globalLogReceiverSumoLogicReceiverUrlToTerraform(struct!.url),
  }
}


export function globalLogReceiverSumoLogicReceiverToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverOutputReference | GlobalLogReceiverSumoLogicReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: globalLogReceiverSumoLogicReceiverUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSumoLogicReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url.internalValue = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url = new GlobalLogReceiverSumoLogicReceiverUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: GlobalLogReceiverSumoLogicReceiverUrl) {
    this._url.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver volterra_global_log_receiver}
*/
export class GlobalLogReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_global_log_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLogReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLogReceiver to import
  * @param importFromId The id of the existing GlobalLogReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLogReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_global_log_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/global_log_receiver volterra_global_log_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLogReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalLogReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_global_log_receiver',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._auditLogs = config.auditLogs;
    this._description = config.description;
    this._disable = config.disable;
    this._dnsLogs = config.dnsLogs;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._nsAll = config.nsAll;
    this._nsCurrent = config.nsCurrent;
    this._requestLogs = config.requestLogs;
    this._securityEvents = config.securityEvents;
    this._awsCloudWatchReceiver.internalValue = config.awsCloudWatchReceiver;
    this._azureEventHubsReceiver.internalValue = config.azureEventHubsReceiver;
    this._azureReceiver.internalValue = config.azureReceiver;
    this._datadogReceiver.internalValue = config.datadogReceiver;
    this._gcpBucketReceiver.internalValue = config.gcpBucketReceiver;
    this._httpReceiver.internalValue = config.httpReceiver;
    this._kafkaReceiver.internalValue = config.kafkaReceiver;
    this._newRelicReceiver.internalValue = config.newRelicReceiver;
    this._nsList.internalValue = config.nsList;
    this._qradarReceiver.internalValue = config.qradarReceiver;
    this._s3Receiver.internalValue = config.s3Receiver;
    this._splunkReceiver.internalValue = config.splunkReceiver;
    this._sumoLogicReceiver.internalValue = config.sumoLogicReceiver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // audit_logs - computed: false, optional: true, required: false
  private _auditLogs?: boolean | cdktf.IResolvable; 
  public get auditLogs() {
    return this.getBooleanAttribute('audit_logs');
  }
  public set auditLogs(value: boolean | cdktf.IResolvable) {
    this._auditLogs = value;
  }
  public resetAuditLogs() {
    this._auditLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs;
  }

  // description - computed: false, optional: true, required: false
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_logs - computed: false, optional: true, required: false
  private _dnsLogs?: boolean | cdktf.IResolvable; 
  public get dnsLogs() {
    return this.getBooleanAttribute('dns_logs');
  }
  public set dnsLogs(value: boolean | cdktf.IResolvable) {
    this._dnsLogs = value;
  }
  public resetDnsLogs() {
    this._dnsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLogsInput() {
    return this._dnsLogs;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // ns_all - computed: false, optional: true, required: false
  private _nsAll?: boolean | cdktf.IResolvable; 
  public get nsAll() {
    return this.getBooleanAttribute('ns_all');
  }
  public set nsAll(value: boolean | cdktf.IResolvable) {
    this._nsAll = value;
  }
  public resetNsAll() {
    this._nsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsAllInput() {
    return this._nsAll;
  }

  // ns_current - computed: false, optional: true, required: false
  private _nsCurrent?: boolean | cdktf.IResolvable; 
  public get nsCurrent() {
    return this.getBooleanAttribute('ns_current');
  }
  public set nsCurrent(value: boolean | cdktf.IResolvable) {
    this._nsCurrent = value;
  }
  public resetNsCurrent() {
    this._nsCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsCurrentInput() {
    return this._nsCurrent;
  }

  // request_logs - computed: false, optional: true, required: false
  private _requestLogs?: boolean | cdktf.IResolvable; 
  public get requestLogs() {
    return this.getBooleanAttribute('request_logs');
  }
  public set requestLogs(value: boolean | cdktf.IResolvable) {
    this._requestLogs = value;
  }
  public resetRequestLogs() {
    this._requestLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLogsInput() {
    return this._requestLogs;
  }

  // security_events - computed: false, optional: true, required: false
  private _securityEvents?: boolean | cdktf.IResolvable; 
  public get securityEvents() {
    return this.getBooleanAttribute('security_events');
  }
  public set securityEvents(value: boolean | cdktf.IResolvable) {
    this._securityEvents = value;
  }
  public resetSecurityEvents() {
    this._securityEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventsInput() {
    return this._securityEvents;
  }

  // aws_cloud_watch_receiver - computed: false, optional: true, required: false
  private _awsCloudWatchReceiver = new GlobalLogReceiverAwsCloudWatchReceiverOutputReference(this, "aws_cloud_watch_receiver");
  public get awsCloudWatchReceiver() {
    return this._awsCloudWatchReceiver;
  }
  public putAwsCloudWatchReceiver(value: GlobalLogReceiverAwsCloudWatchReceiver) {
    this._awsCloudWatchReceiver.internalValue = value;
  }
  public resetAwsCloudWatchReceiver() {
    this._awsCloudWatchReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudWatchReceiverInput() {
    return this._awsCloudWatchReceiver.internalValue;
  }

  // azure_event_hubs_receiver - computed: false, optional: true, required: false
  private _azureEventHubsReceiver = new GlobalLogReceiverAzureEventHubsReceiverOutputReference(this, "azure_event_hubs_receiver");
  public get azureEventHubsReceiver() {
    return this._azureEventHubsReceiver;
  }
  public putAzureEventHubsReceiver(value: GlobalLogReceiverAzureEventHubsReceiver) {
    this._azureEventHubsReceiver.internalValue = value;
  }
  public resetAzureEventHubsReceiver() {
    this._azureEventHubsReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEventHubsReceiverInput() {
    return this._azureEventHubsReceiver.internalValue;
  }

  // azure_receiver - computed: false, optional: true, required: false
  private _azureReceiver = new GlobalLogReceiverAzureReceiverOutputReference(this, "azure_receiver");
  public get azureReceiver() {
    return this._azureReceiver;
  }
  public putAzureReceiver(value: GlobalLogReceiverAzureReceiver) {
    this._azureReceiver.internalValue = value;
  }
  public resetAzureReceiver() {
    this._azureReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureReceiverInput() {
    return this._azureReceiver.internalValue;
  }

  // datadog_receiver - computed: false, optional: true, required: false
  private _datadogReceiver = new GlobalLogReceiverDatadogReceiverOutputReference(this, "datadog_receiver");
  public get datadogReceiver() {
    return this._datadogReceiver;
  }
  public putDatadogReceiver(value: GlobalLogReceiverDatadogReceiver) {
    this._datadogReceiver.internalValue = value;
  }
  public resetDatadogReceiver() {
    this._datadogReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogReceiverInput() {
    return this._datadogReceiver.internalValue;
  }

  // gcp_bucket_receiver - computed: false, optional: true, required: false
  private _gcpBucketReceiver = new GlobalLogReceiverGcpBucketReceiverOutputReference(this, "gcp_bucket_receiver");
  public get gcpBucketReceiver() {
    return this._gcpBucketReceiver;
  }
  public putGcpBucketReceiver(value: GlobalLogReceiverGcpBucketReceiver) {
    this._gcpBucketReceiver.internalValue = value;
  }
  public resetGcpBucketReceiver() {
    this._gcpBucketReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBucketReceiverInput() {
    return this._gcpBucketReceiver.internalValue;
  }

  // http_receiver - computed: false, optional: true, required: false
  private _httpReceiver = new GlobalLogReceiverHttpReceiverOutputReference(this, "http_receiver");
  public get httpReceiver() {
    return this._httpReceiver;
  }
  public putHttpReceiver(value: GlobalLogReceiverHttpReceiver) {
    this._httpReceiver.internalValue = value;
  }
  public resetHttpReceiver() {
    this._httpReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReceiverInput() {
    return this._httpReceiver.internalValue;
  }

  // kafka_receiver - computed: false, optional: true, required: false
  private _kafkaReceiver = new GlobalLogReceiverKafkaReceiverOutputReference(this, "kafka_receiver");
  public get kafkaReceiver() {
    return this._kafkaReceiver;
  }
  public putKafkaReceiver(value: GlobalLogReceiverKafkaReceiver) {
    this._kafkaReceiver.internalValue = value;
  }
  public resetKafkaReceiver() {
    this._kafkaReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaReceiverInput() {
    return this._kafkaReceiver.internalValue;
  }

  // new_relic_receiver - computed: false, optional: true, required: false
  private _newRelicReceiver = new GlobalLogReceiverNewRelicReceiverOutputReference(this, "new_relic_receiver");
  public get newRelicReceiver() {
    return this._newRelicReceiver;
  }
  public putNewRelicReceiver(value: GlobalLogReceiverNewRelicReceiver) {
    this._newRelicReceiver.internalValue = value;
  }
  public resetNewRelicReceiver() {
    this._newRelicReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicReceiverInput() {
    return this._newRelicReceiver.internalValue;
  }

  // ns_list - computed: false, optional: true, required: false
  private _nsList = new GlobalLogReceiverNsListStructOutputReference(this, "ns_list");
  public get nsList() {
    return this._nsList;
  }
  public putNsList(value: GlobalLogReceiverNsListStruct) {
    this._nsList.internalValue = value;
  }
  public resetNsList() {
    this._nsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsListInput() {
    return this._nsList.internalValue;
  }

  // qradar_receiver - computed: false, optional: true, required: false
  private _qradarReceiver = new GlobalLogReceiverQradarReceiverOutputReference(this, "qradar_receiver");
  public get qradarReceiver() {
    return this._qradarReceiver;
  }
  public putQradarReceiver(value: GlobalLogReceiverQradarReceiver) {
    this._qradarReceiver.internalValue = value;
  }
  public resetQradarReceiver() {
    this._qradarReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qradarReceiverInput() {
    return this._qradarReceiver.internalValue;
  }

  // s3_receiver - computed: false, optional: true, required: false
  private _s3Receiver = new GlobalLogReceiverS3ReceiverOutputReference(this, "s3_receiver");
  public get s3Receiver() {
    return this._s3Receiver;
  }
  public putS3Receiver(value: GlobalLogReceiverS3Receiver) {
    this._s3Receiver.internalValue = value;
  }
  public resetS3Receiver() {
    this._s3Receiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReceiverInput() {
    return this._s3Receiver.internalValue;
  }

  // splunk_receiver - computed: false, optional: true, required: false
  private _splunkReceiver = new GlobalLogReceiverSplunkReceiverOutputReference(this, "splunk_receiver");
  public get splunkReceiver() {
    return this._splunkReceiver;
  }
  public putSplunkReceiver(value: GlobalLogReceiverSplunkReceiver) {
    this._splunkReceiver.internalValue = value;
  }
  public resetSplunkReceiver() {
    this._splunkReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkReceiverInput() {
    return this._splunkReceiver.internalValue;
  }

  // sumo_logic_receiver - computed: false, optional: true, required: false
  private _sumoLogicReceiver = new GlobalLogReceiverSumoLogicReceiverOutputReference(this, "sumo_logic_receiver");
  public get sumoLogicReceiver() {
    return this._sumoLogicReceiver;
  }
  public putSumoLogicReceiver(value: GlobalLogReceiverSumoLogicReceiver) {
    this._sumoLogicReceiver.internalValue = value;
  }
  public resetSumoLogicReceiver() {
    this._sumoLogicReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicReceiverInput() {
    return this._sumoLogicReceiver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      audit_logs: cdktf.booleanToTerraform(this._auditLogs),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      dns_logs: cdktf.booleanToTerraform(this._dnsLogs),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ns_all: cdktf.booleanToTerraform(this._nsAll),
      ns_current: cdktf.booleanToTerraform(this._nsCurrent),
      request_logs: cdktf.booleanToTerraform(this._requestLogs),
      security_events: cdktf.booleanToTerraform(this._securityEvents),
      aws_cloud_watch_receiver: globalLogReceiverAwsCloudWatchReceiverToTerraform(this._awsCloudWatchReceiver.internalValue),
      azure_event_hubs_receiver: globalLogReceiverAzureEventHubsReceiverToTerraform(this._azureEventHubsReceiver.internalValue),
      azure_receiver: globalLogReceiverAzureReceiverToTerraform(this._azureReceiver.internalValue),
      datadog_receiver: globalLogReceiverDatadogReceiverToTerraform(this._datadogReceiver.internalValue),
      gcp_bucket_receiver: globalLogReceiverGcpBucketReceiverToTerraform(this._gcpBucketReceiver.internalValue),
      http_receiver: globalLogReceiverHttpReceiverToTerraform(this._httpReceiver.internalValue),
      kafka_receiver: globalLogReceiverKafkaReceiverToTerraform(this._kafkaReceiver.internalValue),
      new_relic_receiver: globalLogReceiverNewRelicReceiverToTerraform(this._newRelicReceiver.internalValue),
      ns_list: globalLogReceiverNsListStructToTerraform(this._nsList.internalValue),
      qradar_receiver: globalLogReceiverQradarReceiverToTerraform(this._qradarReceiver.internalValue),
      s3_receiver: globalLogReceiverS3ReceiverToTerraform(this._s3Receiver.internalValue),
      splunk_receiver: globalLogReceiverSplunkReceiverToTerraform(this._splunkReceiver.internalValue),
      sumo_logic_receiver: globalLogReceiverSumoLogicReceiverToTerraform(this._sumoLogicReceiver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      audit_logs: {
        value: cdktf.booleanToHclTerraform(this._auditLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_logs: {
        value: cdktf.booleanToHclTerraform(this._dnsLogs),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      ns_all: {
        value: cdktf.booleanToHclTerraform(this._nsAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ns_current: {
        value: cdktf.booleanToHclTerraform(this._nsCurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_logs: {
        value: cdktf.booleanToHclTerraform(this._requestLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_events: {
        value: cdktf.booleanToHclTerraform(this._securityEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_cloud_watch_receiver: {
        value: globalLogReceiverAwsCloudWatchReceiverToHclTerraform(this._awsCloudWatchReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverAwsCloudWatchReceiverList",
      },
      azure_event_hubs_receiver: {
        value: globalLogReceiverAzureEventHubsReceiverToHclTerraform(this._azureEventHubsReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverAzureEventHubsReceiverList",
      },
      azure_receiver: {
        value: globalLogReceiverAzureReceiverToHclTerraform(this._azureReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverAzureReceiverList",
      },
      datadog_receiver: {
        value: globalLogReceiverDatadogReceiverToHclTerraform(this._datadogReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverDatadogReceiverList",
      },
      gcp_bucket_receiver: {
        value: globalLogReceiverGcpBucketReceiverToHclTerraform(this._gcpBucketReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverGcpBucketReceiverList",
      },
      http_receiver: {
        value: globalLogReceiverHttpReceiverToHclTerraform(this._httpReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverHttpReceiverList",
      },
      kafka_receiver: {
        value: globalLogReceiverKafkaReceiverToHclTerraform(this._kafkaReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverKafkaReceiverList",
      },
      new_relic_receiver: {
        value: globalLogReceiverNewRelicReceiverToHclTerraform(this._newRelicReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverNewRelicReceiverList",
      },
      ns_list: {
        value: globalLogReceiverNsListStructToHclTerraform(this._nsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverNsListStructList",
      },
      qradar_receiver: {
        value: globalLogReceiverQradarReceiverToHclTerraform(this._qradarReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverQradarReceiverList",
      },
      s3_receiver: {
        value: globalLogReceiverS3ReceiverToHclTerraform(this._s3Receiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverS3ReceiverList",
      },
      splunk_receiver: {
        value: globalLogReceiverSplunkReceiverToHclTerraform(this._splunkReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverSplunkReceiverList",
      },
      sumo_logic_receiver: {
        value: globalLogReceiverSumoLogicReceiverToHclTerraform(this._sumoLogicReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverSumoLogicReceiverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
