// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitLogStreamsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitLogStreamsLogStreamsAwsS3Bucket {
}

export function dataAembitLogStreamsLogStreamsAwsS3BucketToTerraform(struct?: DataAembitLogStreamsLogStreamsAwsS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitLogStreamsLogStreamsAwsS3BucketToHclTerraform(struct?: DataAembitLogStreamsLogStreamsAwsS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitLogStreamsLogStreamsAwsS3BucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitLogStreamsLogStreamsAwsS3Bucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitLogStreamsLogStreamsAwsS3Bucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_bucket_region - computed: true, optional: false, required: false
  public get s3BucketRegion() {
    return this.getStringAttribute('s3_bucket_region');
  }

  // s3_path_prefix - computed: true, optional: false, required: false
  public get s3PathPrefix() {
    return this.getStringAttribute('s3_path_prefix');
  }
}
export interface DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector {
}

export function dataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollectorToTerraform(struct?: DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollectorToHclTerraform(struct?: DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getBooleanAttribute('tls');
  }

  // tls_verification - computed: true, optional: false, required: false
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
}
export interface DataAembitLogStreamsLogStreamsGcsBucket {
}

export function dataAembitLogStreamsLogStreamsGcsBucketToTerraform(struct?: DataAembitLogStreamsLogStreamsGcsBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitLogStreamsLogStreamsGcsBucketToHclTerraform(struct?: DataAembitLogStreamsLogStreamsGcsBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitLogStreamsLogStreamsGcsBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitLogStreamsLogStreamsGcsBucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitLogStreamsLogStreamsGcsBucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // gcs_bucket_name - computed: true, optional: false, required: false
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }

  // gcs_path_prefix - computed: true, optional: false, required: false
  public get gcsPathPrefix() {
    return this.getStringAttribute('gcs_path_prefix');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // token_lifetime - computed: true, optional: false, required: false
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
}
export interface DataAembitLogStreamsLogStreamsSplunkHttpEventCollector {
}

export function dataAembitLogStreamsLogStreamsSplunkHttpEventCollectorToTerraform(struct?: DataAembitLogStreamsLogStreamsSplunkHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitLogStreamsLogStreamsSplunkHttpEventCollectorToHclTerraform(struct?: DataAembitLogStreamsLogStreamsSplunkHttpEventCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitLogStreamsLogStreamsSplunkHttpEventCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitLogStreamsLogStreamsSplunkHttpEventCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitLogStreamsLogStreamsSplunkHttpEventCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getBooleanAttribute('tls');
  }

  // tls_verification - computed: true, optional: false, required: false
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
}
export interface DataAembitLogStreamsLogStreams {
  /**
  * Log Stream configuration for the AWS S3 Bucket destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams#aws_s3_bucket DataAembitLogStreams#aws_s3_bucket}
  */
  readonly awsS3Bucket?: DataAembitLogStreamsLogStreamsAwsS3Bucket;
  /**
  * Log Stream configuration for the Crowdstrike HTTP Event Collector (HEC) destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams#crowdstrike_http_event_collector DataAembitLogStreams#crowdstrike_http_event_collector}
  */
  readonly crowdstrikeHttpEventCollector?: DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector;
  /**
  * GCSBucket destination type Log Stream configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams#gcs_bucket DataAembitLogStreams#gcs_bucket}
  */
  readonly gcsBucket?: DataAembitLogStreamsLogStreamsGcsBucket;
  /**
  * Log Stream configuration for the Splunk HTTP Event Collector (HEC) destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams#splunk_http_event_collector DataAembitLogStreams#splunk_http_event_collector}
  */
  readonly splunkHttpEventCollector?: DataAembitLogStreamsLogStreamsSplunkHttpEventCollector;
}

export function dataAembitLogStreamsLogStreamsToTerraform(struct?: DataAembitLogStreamsLogStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_s3_bucket: dataAembitLogStreamsLogStreamsAwsS3BucketToTerraform(struct!.awsS3Bucket),
    crowdstrike_http_event_collector: dataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollectorToTerraform(struct!.crowdstrikeHttpEventCollector),
    gcs_bucket: dataAembitLogStreamsLogStreamsGcsBucketToTerraform(struct!.gcsBucket),
    splunk_http_event_collector: dataAembitLogStreamsLogStreamsSplunkHttpEventCollectorToTerraform(struct!.splunkHttpEventCollector),
  }
}


export function dataAembitLogStreamsLogStreamsToHclTerraform(struct?: DataAembitLogStreamsLogStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_s3_bucket: {
      value: dataAembitLogStreamsLogStreamsAwsS3BucketToHclTerraform(struct!.awsS3Bucket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitLogStreamsLogStreamsAwsS3Bucket",
    },
    crowdstrike_http_event_collector: {
      value: dataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollectorToHclTerraform(struct!.crowdstrikeHttpEventCollector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector",
    },
    gcs_bucket: {
      value: dataAembitLogStreamsLogStreamsGcsBucketToHclTerraform(struct!.gcsBucket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitLogStreamsLogStreamsGcsBucket",
    },
    splunk_http_event_collector: {
      value: dataAembitLogStreamsLogStreamsSplunkHttpEventCollectorToHclTerraform(struct!.splunkHttpEventCollector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitLogStreamsLogStreamsSplunkHttpEventCollector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitLogStreamsLogStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitLogStreamsLogStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsS3Bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsS3Bucket = this._awsS3Bucket?.internalValue;
    }
    if (this._crowdstrikeHttpEventCollector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeHttpEventCollector = this._crowdstrikeHttpEventCollector?.internalValue;
    }
    if (this._gcsBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucket = this._gcsBucket?.internalValue;
    }
    if (this._splunkHttpEventCollector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHttpEventCollector = this._splunkHttpEventCollector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitLogStreamsLogStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsS3Bucket.internalValue = undefined;
      this._crowdstrikeHttpEventCollector.internalValue = undefined;
      this._gcsBucket.internalValue = undefined;
      this._splunkHttpEventCollector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsS3Bucket.internalValue = value.awsS3Bucket;
      this._crowdstrikeHttpEventCollector.internalValue = value.crowdstrikeHttpEventCollector;
      this._gcsBucket.internalValue = value.gcsBucket;
      this._splunkHttpEventCollector.internalValue = value.splunkHttpEventCollector;
    }
  }

  // aws_s3_bucket - computed: true, optional: true, required: false
  private _awsS3Bucket = new DataAembitLogStreamsLogStreamsAwsS3BucketOutputReference(this, "aws_s3_bucket");
  public get awsS3Bucket() {
    return this._awsS3Bucket;
  }
  public putAwsS3Bucket(value: DataAembitLogStreamsLogStreamsAwsS3Bucket) {
    this._awsS3Bucket.internalValue = value;
  }
  public resetAwsS3Bucket() {
    this._awsS3Bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3BucketInput() {
    return this._awsS3Bucket.internalValue;
  }

  // crowdstrike_http_event_collector - computed: true, optional: true, required: false
  private _crowdstrikeHttpEventCollector = new DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollectorOutputReference(this, "crowdstrike_http_event_collector");
  public get crowdstrikeHttpEventCollector() {
    return this._crowdstrikeHttpEventCollector;
  }
  public putCrowdstrikeHttpEventCollector(value: DataAembitLogStreamsLogStreamsCrowdstrikeHttpEventCollector) {
    this._crowdstrikeHttpEventCollector.internalValue = value;
  }
  public resetCrowdstrikeHttpEventCollector() {
    this._crowdstrikeHttpEventCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeHttpEventCollectorInput() {
    return this._crowdstrikeHttpEventCollector.internalValue;
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // gcs_bucket - computed: true, optional: true, required: false
  private _gcsBucket = new DataAembitLogStreamsLogStreamsGcsBucketOutputReference(this, "gcs_bucket");
  public get gcsBucket() {
    return this._gcsBucket;
  }
  public putGcsBucket(value: DataAembitLogStreamsLogStreamsGcsBucket) {
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

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // splunk_http_event_collector - computed: true, optional: true, required: false
  private _splunkHttpEventCollector = new DataAembitLogStreamsLogStreamsSplunkHttpEventCollectorOutputReference(this, "splunk_http_event_collector");
  public get splunkHttpEventCollector() {
    return this._splunkHttpEventCollector;
  }
  public putSplunkHttpEventCollector(value: DataAembitLogStreamsLogStreamsSplunkHttpEventCollector) {
    this._splunkHttpEventCollector.internalValue = value;
  }
  public resetSplunkHttpEventCollector() {
    this._splunkHttpEventCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHttpEventCollectorInput() {
    return this._splunkHttpEventCollector.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAembitLogStreamsLogStreamsList extends cdktf.ComplexList {
  public internalValue? : DataAembitLogStreamsLogStreams[] | cdktf.IResolvable

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
  public get(index: number): DataAembitLogStreamsLogStreamsOutputReference {
    return new DataAembitLogStreamsLogStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams aembit_log_streams}
*/
export class DataAembitLogStreams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_log_streams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitLogStreams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitLogStreams to import
  * @param importFromId The id of the existing DataAembitLogStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitLogStreams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_log_streams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/log_streams aembit_log_streams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitLogStreamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitLogStreamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_log_streams',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // log_streams - computed: true, optional: false, required: false
  private _logStreams = new DataAembitLogStreamsLogStreamsList(this, "log_streams", false);
  public get logStreams() {
    return this._logStreams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
