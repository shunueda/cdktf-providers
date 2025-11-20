import * as cdktf from 'cdktf';
export interface GlobalLogReceiverAwsCloudWatchReceiverAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#aws_region GlobalLogReceiver#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#group_name GlobalLogReceiver#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#stream_name GlobalLogReceiver#stream_name}
  */
  readonly streamName: string;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#aws_cred GlobalLogReceiver#aws_cred}
  */
  readonly awsCred: GlobalLogReceiverAwsCloudWatchReceiverAwsCred;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverAwsCloudWatchReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverAzureEventHubsReceiverConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo;
}

export function globalLogReceiverAzureEventHubsReceiverConnectionStringToTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverAzureEventHubsReceiverConnectionStringToHclTerraform(struct?: GlobalLogReceiverAzureEventHubsReceiverConnectionStringOutputReference | GlobalLogReceiverAzureEventHubsReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureEventHubsReceiverConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverAzureEventHubsReceiverConnectionStringWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverAzureEventHubsReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#instance GlobalLogReceiver#instance}
  */
  readonly instance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#connection_string GlobalLogReceiver#connection_string}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverAzureReceiverConnectionStringVaultSecretInfoToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverAzureReceiverConnectionStringVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoOutputReference | GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverAzureReceiverConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo;
}

export function globalLogReceiverAzureReceiverConnectionStringToTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringOutputReference | GlobalLogReceiverAzureReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverAzureReceiverConnectionStringClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverAzureReceiverConnectionStringVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverAzureReceiverConnectionStringToHclTerraform(struct?: GlobalLogReceiverAzureReceiverConnectionStringOutputReference | GlobalLogReceiverAzureReceiverConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverAzureReceiverConnectionStringClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverAzureReceiverConnectionStringVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverAzureReceiverConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverAzureReceiverConnectionStringBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverAzureReceiverConnectionStringVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverAzureReceiverConnectionStringWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverAzureReceiverFilenameOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#custom_folder GlobalLogReceiver#custom_folder}
  */
  readonly customFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#log_type_folder GlobalLogReceiver#log_type_folder}
  */
  readonly logTypeFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_folder GlobalLogReceiver#no_folder}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#container_name GlobalLogReceiver#container_name}
  */
  readonly containerName: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverAzureReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverAzureReceiverCompression;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#connection_string GlobalLogReceiver#connection_string}
  */
  readonly connectionString: GlobalLogReceiverAzureReceiverConnectionString;
  /**
  * filename_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#filename_options GlobalLogReceiver#filename_options}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverDatadogReceiverDatadogApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo;
}

export function globalLogReceiverDatadogReceiverDatadogApiKeyToTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverDatadogReceiverDatadogApiKeyToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverDatadogApiKeyOutputReference | GlobalLogReceiverDatadogReceiverDatadogApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverDatadogApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverDatadogReceiverDatadogApiKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverDatadogReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverDatadogReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#endpoint GlobalLogReceiver#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#site GlobalLogReceiver#site}
  */
  readonly site?: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverDatadogReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverDatadogReceiverCompression;
  /**
  * datadog_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#datadog_api_key GlobalLogReceiver#datadog_api_key}
  */
  readonly datadogApiKey: GlobalLogReceiverDatadogReceiverDatadogApiKey;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
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
export interface GlobalLogReceiverElasticReceiverAuthAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
  */
  readonly tenant?: string;
}

export function globalLogReceiverElasticReceiverAuthAwsToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthAwsOutputReference | GlobalLogReceiverElasticReceiverAuthAws): any {
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


export function globalLogReceiverElasticReceiverAuthAwsToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthAwsOutputReference | GlobalLogReceiverElasticReceiverAuthAws): any {
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

export class GlobalLogReceiverElasticReceiverAuthAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthAws | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthAws | undefined) {
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
export interface GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo): any {
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


export function globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo): any {
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

export class GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo | undefined) {
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
export interface GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo): any {
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

export class GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo | undefined) {
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
export interface GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverElasticReceiverAuthBasicPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo;
}

export function globalLogReceiverElasticReceiverAuthBasicPasswordToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverElasticReceiverAuthBasicPasswordToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicPasswordOutputReference | GlobalLogReceiverElasticReceiverAuthBasicPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverAuthBasicPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasicPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasicPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverElasticReceiverAuthBasicPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverElasticReceiverAuthBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#user_name GlobalLogReceiver#user_name}
  */
  readonly userName?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#password GlobalLogReceiver#password}
  */
  readonly password?: GlobalLogReceiverElasticReceiverAuthBasicPassword;
}

export function globalLogReceiverElasticReceiverAuthBasicToTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicOutputReference | GlobalLogReceiverElasticReceiverAuthBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    password: globalLogReceiverElasticReceiverAuthBasicPasswordToTerraform(struct!.password),
  }
}


export function globalLogReceiverElasticReceiverAuthBasicToHclTerraform(struct?: GlobalLogReceiverElasticReceiverAuthBasicOutputReference | GlobalLogReceiverElasticReceiverAuthBasic): any {
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
      value: globalLogReceiverElasticReceiverAuthBasicPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverAuthBasic | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverAuthBasic | undefined) {
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
  private _password = new GlobalLogReceiverElasticReceiverAuthBasicPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: GlobalLogReceiverElasticReceiverAuthBasicPassword) {
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
export interface GlobalLogReceiverElasticReceiverBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
  */
  readonly timeoutSecondsDefault?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverElasticReceiverBatchToTerraform(struct?: GlobalLogReceiverElasticReceiverBatchOutputReference | GlobalLogReceiverElasticReceiverBatch): any {
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


export function globalLogReceiverElasticReceiverBatchToHclTerraform(struct?: GlobalLogReceiverElasticReceiverBatchOutputReference | GlobalLogReceiverElasticReceiverBatch): any {
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

export class GlobalLogReceiverElasticReceiverBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverBatch | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverBatch | undefined) {
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
export interface GlobalLogReceiverElasticReceiverCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
  */
  readonly compressionNone?: boolean | cdktf.IResolvable;
}

export function globalLogReceiverElasticReceiverCompressionToTerraform(struct?: GlobalLogReceiverElasticReceiverCompressionOutputReference | GlobalLogReceiverElasticReceiverCompression): any {
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


export function globalLogReceiverElasticReceiverCompressionToHclTerraform(struct?: GlobalLogReceiverElasticReceiverCompressionOutputReference | GlobalLogReceiverElasticReceiverCompression): any {
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

export class GlobalLogReceiverElasticReceiverCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverCompression | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverCompression | undefined) {
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
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
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


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
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

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
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
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo): any {
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

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
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
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverElasticReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverElasticReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverElasticReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverElasticReceiverUseTlsMtlsEnable): any {
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
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTlsMtlsEnable | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnable | undefined) {
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
  private _keyUrl = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnableKeyUrl) {
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
export interface GlobalLogReceiverElasticReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverElasticReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverElasticReceiverUseTlsToTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsOutputReference | GlobalLogReceiverElasticReceiverUseTls): any {
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
    mtls_enable: globalLogReceiverElasticReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverElasticReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverElasticReceiverUseTlsOutputReference | GlobalLogReceiverElasticReceiverUseTls): any {
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
      value: globalLogReceiverElasticReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiverUseTls | undefined {
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

  public set internalValue(value: GlobalLogReceiverElasticReceiverUseTls | undefined) {
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
  private _mtlsEnable = new GlobalLogReceiverElasticReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverElasticReceiverUseTlsMtlsEnable) {
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
export interface GlobalLogReceiverElasticReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#auth_none GlobalLogReceiver#auth_none}
  */
  readonly authNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#endpoint GlobalLogReceiver#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * auth_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#auth_aws GlobalLogReceiver#auth_aws}
  */
  readonly authAws?: GlobalLogReceiverElasticReceiverAuthAws;
  /**
  * auth_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#auth_basic GlobalLogReceiver#auth_basic}
  */
  readonly authBasic?: GlobalLogReceiverElasticReceiverAuthBasic;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverElasticReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverElasticReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverElasticReceiverUseTls;
}

export function globalLogReceiverElasticReceiverToTerraform(struct?: GlobalLogReceiverElasticReceiverOutputReference | GlobalLogReceiverElasticReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_none: cdktf.booleanToTerraform(struct!.authNone),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    auth_aws: globalLogReceiverElasticReceiverAuthAwsToTerraform(struct!.authAws),
    auth_basic: globalLogReceiverElasticReceiverAuthBasicToTerraform(struct!.authBasic),
    batch: globalLogReceiverElasticReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverElasticReceiverCompressionToTerraform(struct!.compression),
    use_tls: globalLogReceiverElasticReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverElasticReceiverToHclTerraform(struct?: GlobalLogReceiverElasticReceiverOutputReference | GlobalLogReceiverElasticReceiver): any {
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
    auth_aws: {
      value: globalLogReceiverElasticReceiverAuthAwsToHclTerraform(struct!.authAws),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthAwsList",
    },
    auth_basic: {
      value: globalLogReceiverElasticReceiverAuthBasicToHclTerraform(struct!.authBasic),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverAuthBasicList",
    },
    batch: {
      value: globalLogReceiverElasticReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverElasticReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverCompressionList",
    },
    use_tls: {
      value: globalLogReceiverElasticReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverElasticReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverElasticReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverElasticReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.authNone = this._authNone;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._authAws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAws = this._authAws?.internalValue;
    }
    if (this._authBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authBasic = this._authBasic?.internalValue;
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

  public set internalValue(value: GlobalLogReceiverElasticReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authNone = undefined;
      this._endpoint = undefined;
      this._noTls = undefined;
      this._authAws.internalValue = undefined;
      this._authBasic.internalValue = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authNone = value.authNone;
      this._endpoint = value.endpoint;
      this._noTls = value.noTls;
      this._authAws.internalValue = value.authAws;
      this._authBasic.internalValue = value.authBasic;
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

  // auth_aws - computed: false, optional: true, required: false
  private _authAws = new GlobalLogReceiverElasticReceiverAuthAwsOutputReference(this, "auth_aws");
  public get authAws() {
    return this._authAws;
  }
  public putAuthAws(value: GlobalLogReceiverElasticReceiverAuthAws) {
    this._authAws.internalValue = value;
  }
  public resetAuthAws() {
    this._authAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAwsInput() {
    return this._authAws.internalValue;
  }

  // auth_basic - computed: false, optional: true, required: false
  private _authBasic = new GlobalLogReceiverElasticReceiverAuthBasicOutputReference(this, "auth_basic");
  public get authBasic() {
    return this._authBasic;
  }
  public putAuthBasic(value: GlobalLogReceiverElasticReceiverAuthBasic) {
    this._authBasic.internalValue = value;
  }
  public resetAuthBasic() {
    this._authBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBasicInput() {
    return this._authBasic.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverElasticReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverElasticReceiverBatch) {
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
  private _compression = new GlobalLogReceiverElasticReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverElasticReceiverCompression) {
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
  private _useTls = new GlobalLogReceiverElasticReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverElasticReceiverUseTls) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#custom_folder GlobalLogReceiver#custom_folder}
  */
  readonly customFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#log_type_folder GlobalLogReceiver#log_type_folder}
  */
  readonly logTypeFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_folder GlobalLogReceiver#no_folder}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#bucket GlobalLogReceiver#bucket}
  */
  readonly bucket: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverGcpBucketReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverGcpBucketReceiverCompression;
  /**
  * filename_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#filename_options GlobalLogReceiver#filename_options}
  */
  readonly filenameOptions?: GlobalLogReceiverGcpBucketReceiverFilenameOptions;
  /**
  * gcp_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#gcp_cred GlobalLogReceiver#gcp_cred}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverHttpReceiverAuthBasicPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo;
}

export function globalLogReceiverHttpReceiverAuthBasicPasswordToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverHttpReceiverAuthBasicPasswordToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthBasicPasswordOutputReference | GlobalLogReceiverHttpReceiverAuthBasicPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthBasicPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverHttpReceiverAuthBasicPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#user_name GlobalLogReceiver#user_name}
  */
  readonly userName?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#password GlobalLogReceiver#password}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoOutputReference | GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverHttpReceiverAuthTokenToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo;
}

export function globalLogReceiverHttpReceiverAuthTokenTokenToTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenOutputReference | GlobalLogReceiverHttpReceiverAuthTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverHttpReceiverAuthTokenTokenToHclTerraform(struct?: GlobalLogReceiverHttpReceiverAuthTokenTokenOutputReference | GlobalLogReceiverHttpReceiverAuthTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverAuthTokenToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverHttpReceiverAuthTokenTokenBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverHttpReceiverAuthTokenTokenVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverHttpReceiverAuthTokenTokenWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverAuthToken {
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#token GlobalLogReceiver#token}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverHttpReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverHttpReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#auth_none GlobalLogReceiver#auth_none}
  */
  readonly authNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#uri GlobalLogReceiver#uri}
  */
  readonly uri: string;
  /**
  * auth_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#auth_basic GlobalLogReceiver#auth_basic}
  */
  readonly authBasic?: GlobalLogReceiverHttpReceiverAuthBasic;
  /**
  * auth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#auth_token GlobalLogReceiver#auth_token}
  */
  readonly authToken?: GlobalLogReceiverHttpReceiverAuthToken;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverHttpReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverHttpReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverKafkaReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverKafkaReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#bootstrap_servers GlobalLogReceiver#bootstrap_servers}
  */
  readonly bootstrapServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#kafka_topic GlobalLogReceiver#kafka_topic}
  */
  readonly kafkaTopic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverKafkaReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverKafkaReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoOutputReference | GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverNewRelicReceiverApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo;
}

export function globalLogReceiverNewRelicReceiverApiKeyToTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyOutputReference | GlobalLogReceiverNewRelicReceiverApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverNewRelicReceiverApiKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverNewRelicReceiverApiKeyToHclTerraform(struct?: GlobalLogReceiverNewRelicReceiverApiKeyOutputReference | GlobalLogReceiverNewRelicReceiverApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverNewRelicReceiverApiKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverNewRelicReceiverApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverNewRelicReceiverApiKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverNewRelicReceiverApiKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverNewRelicReceiverApiKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverNewRelicReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#eu GlobalLogReceiver#eu}
  */
  readonly eu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#us GlobalLogReceiver#us}
  */
  readonly us?: boolean | cdktf.IResolvable;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#api_key GlobalLogReceiver#api_key}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#namespaces GlobalLogReceiver#namespaces}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverQradarReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverQradarReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#uri GlobalLogReceiver#uri}
  */
  readonly uri: string;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverQradarReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverQradarReceiverCompression;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#tenant GlobalLogReceiver#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#custom_folder GlobalLogReceiver#custom_folder}
  */
  readonly customFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#log_type_folder GlobalLogReceiver#log_type_folder}
  */
  readonly logTypeFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#no_folder GlobalLogReceiver#no_folder}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#aws_region GlobalLogReceiver#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#bucket GlobalLogReceiver#bucket}
  */
  readonly bucket: string;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#aws_cred GlobalLogReceiver#aws_cred}
  */
  readonly awsCred: GlobalLogReceiverS3ReceiverAwsCred;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverS3ReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverS3ReceiverCompression;
  /**
  * filename_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#filename_options GlobalLogReceiver#filename_options}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes GlobalLogReceiver#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_bytes_disabled GlobalLogReceiver#max_bytes_disabled}
  */
  readonly maxBytesDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events GlobalLogReceiver#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#max_events_disabled GlobalLogReceiver#max_events_disabled}
  */
  readonly maxEventsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds GlobalLogReceiver#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#timeout_seconds_default GlobalLogReceiver#timeout_seconds_default}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_default GlobalLogReceiver#compression_default}
  */
  readonly compressionDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_gzip GlobalLogReceiver#compression_gzip}
  */
  readonly compressionGzip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#compression_none GlobalLogReceiver#compression_none}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
export interface GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function globalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GlobalLogReceiverSplunkReceiverSplunkHecToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo;
}

export function globalLogReceiverSplunkReceiverSplunkHecTokenToTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverSplunkReceiverSplunkHecTokenToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference | GlobalLogReceiverSplunkReceiverSplunkHecToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverSplunkHecToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverSplunkReceiverSplunkHecTokenWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
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
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
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
