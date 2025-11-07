// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Log Stream configuration for the AWS S3 Bucket destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#aws_s3_bucket LogStream#aws_s3_bucket}
  */
  readonly awsS3Bucket?: LogStreamAwsS3Bucket;
  /**
  * Log Stream configuration for the Crowdstrike HTTP Event Collector (HEC) destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#crowdstrike_http_event_collector LogStream#crowdstrike_http_event_collector}
  */
  readonly crowdstrikeHttpEventCollector?: LogStreamCrowdstrikeHttpEventCollector;
  /**
  * Data type of Log Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#data_type LogStream#data_type}
  */
  readonly dataType: string;
  /**
  * Description for the Log Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#description LogStream#description}
  */
  readonly description?: string;
  /**
  * GCSBucket destination type Log Stream configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#gcs_bucket LogStream#gcs_bucket}
  */
  readonly gcsBucket?: LogStreamGcsBucket;
  /**
  * Status of the Log Stream (`active` or `inactive`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#is_active LogStream#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * Name for the Log Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#name LogStream#name}
  */
  readonly name: string;
  /**
  * Log Stream configuration for the Splunk HTTP Event Collector (HEC) destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#splunk_http_event_collector LogStream#splunk_http_event_collector}
  */
  readonly splunkHttpEventCollector?: LogStreamSplunkHttpEventCollector;
  /**
  * Destination type of Log Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#type LogStream#type}
  */
  readonly type: string;
}
export interface LogStreamAwsS3Bucket {
  /**
  * S3 Bucket Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#s3_bucket_name LogStream#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * S3 Bucket Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#s3_bucket_region LogStream#s3_bucket_region}
  */
  readonly s3BucketRegion?: string;
  /**
  * S3 Path Prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#s3_path_prefix LogStream#s3_path_prefix}
  */
  readonly s3PathPrefix?: string;
}

export function logStreamAwsS3BucketToTerraform(struct?: LogStreamAwsS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_bucket_region: cdktf.stringToTerraform(struct!.s3BucketRegion),
    s3_path_prefix: cdktf.stringToTerraform(struct!.s3PathPrefix),
  }
}


export function logStreamAwsS3BucketToHclTerraform(struct?: LogStreamAwsS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.s3PathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamAwsS3BucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamAwsS3Bucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3BucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketRegion = this._s3BucketRegion;
    }
    if (this._s3PathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3PathPrefix = this._s3PathPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamAwsS3Bucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketName = undefined;
      this._s3BucketRegion = undefined;
      this._s3PathPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketName = value.s3BucketName;
      this._s3BucketRegion = value.s3BucketRegion;
      this._s3PathPrefix = value.s3PathPrefix;
    }
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_bucket_region - computed: false, optional: true, required: false
  private _s3BucketRegion?: string; 
  public get s3BucketRegion() {
    return this.getStringAttribute('s3_bucket_region');
  }
  public set s3BucketRegion(value: string) {
    this._s3BucketRegion = value;
  }
  public resetS3BucketRegion() {
    this._s3BucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketRegionInput() {
    return this._s3BucketRegion;
  }

  // s3_path_prefix - computed: false, optional: true, required: false
  private _s3PathPrefix?: string; 
  public get s3PathPrefix() {
    return this.getStringAttribute('s3_path_prefix');
  }
  public set s3PathPrefix(value: string) {
    this._s3PathPrefix = value;
  }
  public resetS3PathPrefix() {
    this._s3PathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathPrefixInput() {
    return this._s3PathPrefix;
  }
}
export interface LogStreamCrowdstrikeHttpEventCollector {
  /**
  * API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#api_key LogStream#api_key}
  */
  readonly apiKey: string;
  /**
  * Crowdstrike HTTP Event Collector (HEC) host:port value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#host_port LogStream#host_port}
  */
  readonly hostPort: string;
  /**
  * Crowdstrike Data Input Source Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#source_name LogStream#source_name}
  */
  readonly sourceName: string;
  /**
  * Crowdstrike HTTP Event Collector (HEC) TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#tls LogStream#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Crowdstrike HTTP Event Collector (HEC) TLS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#tls_verification LogStream#tls_verification}
  */
  readonly tlsVerification?: string;
}

export function logStreamCrowdstrikeHttpEventCollectorToTerraform(struct?: LogStreamCrowdstrikeHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    tls: cdktf.booleanToTerraform(struct!.tls),
    tls_verification: cdktf.stringToTerraform(struct!.tlsVerification),
  }
}


export function logStreamCrowdstrikeHttpEventCollectorToHclTerraform(struct?: LogStreamCrowdstrikeHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.stringToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_verification: {
      value: cdktf.stringToHclTerraform(struct!.tlsVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamCrowdstrikeHttpEventCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamCrowdstrikeHttpEventCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._tlsVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerification = this._tlsVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamCrowdstrikeHttpEventCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._hostPort = undefined;
      this._sourceName = undefined;
      this._tls = undefined;
      this._tlsVerification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._hostPort = value.hostPort;
      this._sourceName = value.sourceName;
      this._tls = value.tls;
      this._tlsVerification = value.tlsVerification;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // host_port - computed: false, optional: false, required: true
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // tls_verification - computed: true, optional: true, required: false
  private _tlsVerification?: string; 
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
  public set tlsVerification(value: string) {
    this._tlsVerification = value;
  }
  public resetTlsVerification() {
    this._tlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerificationInput() {
    return this._tlsVerification;
  }
}
export interface LogStreamGcsBucket {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#audience LogStream#audience}
  */
  readonly audience?: string;
  /**
  * GCS Bucket Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#gcs_bucket_name LogStream#gcs_bucket_name}
  */
  readonly gcsBucketName?: string;
  /**
  * GCS Path Prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#gcs_path_prefix LogStream#gcs_path_prefix}
  */
  readonly gcsPathPrefix?: string;
  /**
  * Service Account Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#service_account_email LogStream#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Token Lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#token_lifetime LogStream#token_lifetime}
  */
  readonly tokenLifetime?: number;
}

export function logStreamGcsBucketToTerraform(struct?: LogStreamGcsBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    gcs_bucket_name: cdktf.stringToTerraform(struct!.gcsBucketName),
    gcs_path_prefix: cdktf.stringToTerraform(struct!.gcsPathPrefix),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    token_lifetime: cdktf.numberToTerraform(struct!.tokenLifetime),
  }
}


export function logStreamGcsBucketToHclTerraform(struct?: LogStreamGcsBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.gcsPathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.tokenLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamGcsBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamGcsBucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._gcsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketName = this._gcsBucketName;
    }
    if (this._gcsPathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsPathPrefix = this._gcsPathPrefix;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._tokenLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLifetime = this._tokenLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamGcsBucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._gcsBucketName = undefined;
      this._gcsPathPrefix = undefined;
      this._serviceAccountEmail = undefined;
      this._tokenLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._gcsBucketName = value.gcsBucketName;
      this._gcsPathPrefix = value.gcsPathPrefix;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._tokenLifetime = value.tokenLifetime;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // gcs_bucket_name - computed: false, optional: true, required: false
  private _gcsBucketName?: string; 
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }
  public set gcsBucketName(value: string) {
    this._gcsBucketName = value;
  }
  public resetGcsBucketName() {
    this._gcsBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketNameInput() {
    return this._gcsBucketName;
  }

  // gcs_path_prefix - computed: false, optional: true, required: false
  private _gcsPathPrefix?: string; 
  public get gcsPathPrefix() {
    return this.getStringAttribute('gcs_path_prefix');
  }
  public set gcsPathPrefix(value: string) {
    this._gcsPathPrefix = value;
  }
  public resetGcsPathPrefix() {
    this._gcsPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsPathPrefixInput() {
    return this._gcsPathPrefix;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // token_lifetime - computed: false, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }
}
export interface LogStreamSplunkHttpEventCollector {
  /**
  * Authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#authentication_token LogStream#authentication_token}
  */
  readonly authenticationToken: string;
  /**
  * Splunk HTTP Event Collector (HEC) host:port value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#host_port LogStream#host_port}
  */
  readonly hostPort: string;
  /**
  * Splunk Data Input Source Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#source_name LogStream#source_name}
  */
  readonly sourceName: string;
  /**
  * Splunk HTTP Event Collector (HEC) TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#tls LogStream#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Splunk HTTP Event Collector (HEC) TLS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#tls_verification LogStream#tls_verification}
  */
  readonly tlsVerification?: string;
}

export function logStreamSplunkHttpEventCollectorToTerraform(struct?: LogStreamSplunkHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_token: cdktf.stringToTerraform(struct!.authenticationToken),
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    tls: cdktf.booleanToTerraform(struct!.tls),
    tls_verification: cdktf.stringToTerraform(struct!.tlsVerification),
  }
}


export function logStreamSplunkHttpEventCollectorToHclTerraform(struct?: LogStreamSplunkHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_token: {
      value: cdktf.stringToHclTerraform(struct!.authenticationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.stringToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_verification: {
      value: cdktf.stringToHclTerraform(struct!.tlsVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamSplunkHttpEventCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamSplunkHttpEventCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationToken = this._authenticationToken;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._tlsVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerification = this._tlsVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamSplunkHttpEventCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationToken = undefined;
      this._hostPort = undefined;
      this._sourceName = undefined;
      this._tls = undefined;
      this._tlsVerification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationToken = value.authenticationToken;
      this._hostPort = value.hostPort;
      this._sourceName = value.sourceName;
      this._tls = value.tls;
      this._tlsVerification = value.tlsVerification;
    }
  }

  // authentication_token - computed: false, optional: false, required: true
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }
  public set authenticationToken(value: string) {
    this._authenticationToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // host_port - computed: false, optional: false, required: true
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // tls_verification - computed: true, optional: true, required: false
  private _tlsVerification?: string; 
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
  public set tlsVerification(value: string) {
    this._tlsVerification = value;
  }
  public resetTlsVerification() {
    this._tlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerificationInput() {
    return this._tlsVerification;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream aembit_log_stream}
*/
export class LogStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_log_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStream to import
  * @param importFromId The id of the existing LogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_log_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/log_stream aembit_log_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStreamConfig
  */
  public constructor(scope: Construct, id: string, config: LogStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_log_stream',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsS3Bucket.internalValue = config.awsS3Bucket;
    this._crowdstrikeHttpEventCollector.internalValue = config.crowdstrikeHttpEventCollector;
    this._dataType = config.dataType;
    this._description = config.description;
    this._gcsBucket.internalValue = config.gcsBucket;
    this._isActive = config.isActive;
    this._name = config.name;
    this._splunkHttpEventCollector.internalValue = config.splunkHttpEventCollector;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_s3_bucket - computed: false, optional: true, required: false
  private _awsS3Bucket = new LogStreamAwsS3BucketOutputReference(this, "aws_s3_bucket");
  public get awsS3Bucket() {
    return this._awsS3Bucket;
  }
  public putAwsS3Bucket(value: LogStreamAwsS3Bucket) {
    this._awsS3Bucket.internalValue = value;
  }
  public resetAwsS3Bucket() {
    this._awsS3Bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3BucketInput() {
    return this._awsS3Bucket.internalValue;
  }

  // crowdstrike_http_event_collector - computed: false, optional: true, required: false
  private _crowdstrikeHttpEventCollector = new LogStreamCrowdstrikeHttpEventCollectorOutputReference(this, "crowdstrike_http_event_collector");
  public get crowdstrikeHttpEventCollector() {
    return this._crowdstrikeHttpEventCollector;
  }
  public putCrowdstrikeHttpEventCollector(value: LogStreamCrowdstrikeHttpEventCollector) {
    this._crowdstrikeHttpEventCollector.internalValue = value;
  }
  public resetCrowdstrikeHttpEventCollector() {
    this._crowdstrikeHttpEventCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeHttpEventCollectorInput() {
    return this._crowdstrikeHttpEventCollector.internalValue;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // gcs_bucket - computed: false, optional: true, required: false
  private _gcsBucket = new LogStreamGcsBucketOutputReference(this, "gcs_bucket");
  public get gcsBucket() {
    return this._gcsBucket;
  }
  public putGcsBucket(value: LogStreamGcsBucket) {
    this._gcsBucket.internalValue = value;
  }
  public resetGcsBucket() {
    this._gcsBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketInput() {
    return this._gcsBucket.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // splunk_http_event_collector - computed: false, optional: true, required: false
  private _splunkHttpEventCollector = new LogStreamSplunkHttpEventCollectorOutputReference(this, "splunk_http_event_collector");
  public get splunkHttpEventCollector() {
    return this._splunkHttpEventCollector;
  }
  public putSplunkHttpEventCollector(value: LogStreamSplunkHttpEventCollector) {
    this._splunkHttpEventCollector.internalValue = value;
  }
  public resetSplunkHttpEventCollector() {
    this._splunkHttpEventCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHttpEventCollectorInput() {
    return this._splunkHttpEventCollector.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_s3_bucket: logStreamAwsS3BucketToTerraform(this._awsS3Bucket.internalValue),
      crowdstrike_http_event_collector: logStreamCrowdstrikeHttpEventCollectorToTerraform(this._crowdstrikeHttpEventCollector.internalValue),
      data_type: cdktf.stringToTerraform(this._dataType),
      description: cdktf.stringToTerraform(this._description),
      gcs_bucket: logStreamGcsBucketToTerraform(this._gcsBucket.internalValue),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      splunk_http_event_collector: logStreamSplunkHttpEventCollectorToTerraform(this._splunkHttpEventCollector.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_s3_bucket: {
        value: logStreamAwsS3BucketToHclTerraform(this._awsS3Bucket.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamAwsS3Bucket",
      },
      crowdstrike_http_event_collector: {
        value: logStreamCrowdstrikeHttpEventCollectorToHclTerraform(this._crowdstrikeHttpEventCollector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamCrowdstrikeHttpEventCollector",
      },
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
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
      gcs_bucket: {
        value: logStreamGcsBucketToHclTerraform(this._gcsBucket.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamGcsBucket",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunk_http_event_collector: {
        value: logStreamSplunkHttpEventCollectorToHclTerraform(this._splunkHttpEventCollector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamSplunkHttpEventCollector",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
