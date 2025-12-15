// https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket on which to setup replication rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#bucket S3BucketReplication#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#id S3BucketReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#rule S3BucketReplication#rule}
  */
  readonly rule?: S3BucketReplicationRule[] | cdktf.IResolvable;
}
export interface S3BucketReplicationRuleTarget {
  /**
  * Access key for the replication service account in the target MinIO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#access_key S3BucketReplication#access_key}
  */
  readonly accessKey: string;
  /**
  * Maximum bandwidth in byte per second that MinIO can used when syncronysing this target. Minimum is 100MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#bandwidth_limit S3BucketReplication#bandwidth_limit}
  */
  readonly bandwidthLimit?: string;
  /**
  * The name of the existing target bucket to replicate into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#bucket S3BucketReplication#bucket}
  */
  readonly bucket: string;
  /**
  * Disable proxy for this target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#disable_proxy S3BucketReplication#disable_proxy}
  */
  readonly disableProxy?: boolean | cdktf.IResolvable;
  /**
  * Period where the health of this target will be checked. This must be a valid duration, such as `5s` or `2m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#health_check_period S3BucketReplication#health_check_period}
  */
  readonly healthCheckPeriod?: string;
  /**
  * The target host (pair IP/port or domain port). If port is omitted, HTTPS port (or HTTP if unsecure) will be used. This host must be reachable by the MinIO instance itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#host S3BucketReplication#host}
  */
  readonly host: string;
  /**
  * Path of the Minio endpoint. This is usefull if MinIO API isn't served on at the root, e.g for `example.com/minio/`, the path would be `/minio/`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#path S3BucketReplication#path}
  */
  readonly path?: string;
  /**
  * Whether to use path-style or virtual-hosted-syle request to this target (https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html#path-style-access). `auto` allows MinIO to chose automatically the appropriate option (Recommened)`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#path_style S3BucketReplication#path_style}
  */
  readonly pathStyle?: string;
  /**
  * Region of the target MinIO. This will be used to generate the target ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#region S3BucketReplication#region}
  */
  readonly region?: string;
  /**
  * Secret key for the replication service account in the target MinIO. This is optional so it can be imported but prevent secret update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#secret_key S3BucketReplication#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Whether to use HTTPS with this target (Recommended). Note that disabling HTTPS will yield Terraform warning for security reason`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#secure S3BucketReplication#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * The storage class to use for the object on this target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#storage_class S3BucketReplication#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Use synchronous replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#syncronous S3BucketReplication#syncronous}
  */
  readonly syncronous?: boolean | cdktf.IResolvable;
}

export function s3BucketReplicationRuleTargetToTerraform(struct?: S3BucketReplicationRuleTargetOutputReference | S3BucketReplicationRuleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bandwidth_limit: cdktf.stringToTerraform(struct!.bandwidthLimit),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    disable_proxy: cdktf.booleanToTerraform(struct!.disableProxy),
    health_check_period: cdktf.stringToTerraform(struct!.healthCheckPeriod),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    path_style: cdktf.stringToTerraform(struct!.pathStyle),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secure: cdktf.booleanToTerraform(struct!.secure),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    syncronous: cdktf.booleanToTerraform(struct!.syncronous),
  }
}


export function s3BucketReplicationRuleTargetToHclTerraform(struct?: S3BucketReplicationRuleTargetOutputReference | S3BucketReplicationRuleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_limit: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthLimit),
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
    disable_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_period: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_style: {
      value: cdktf.stringToHclTerraform(struct!.pathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syncronous: {
      value: cdktf.booleanToHclTerraform(struct!.syncronous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationRuleTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationRuleTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._disableProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxy = this._disableProxy;
    }
    if (this._healthCheckPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPeriod = this._healthCheckPeriod;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathStyle = this._pathStyle;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._syncronous !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncronous = this._syncronous;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationRuleTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bandwidthLimit = undefined;
      this._bucket = undefined;
      this._disableProxy = undefined;
      this._healthCheckPeriod = undefined;
      this._host = undefined;
      this._path = undefined;
      this._pathStyle = undefined;
      this._region = undefined;
      this._secretKey = undefined;
      this._secure = undefined;
      this._storageClass = undefined;
      this._syncronous = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bandwidthLimit = value.bandwidthLimit;
      this._bucket = value.bucket;
      this._disableProxy = value.disableProxy;
      this._healthCheckPeriod = value.healthCheckPeriod;
      this._host = value.host;
      this._path = value.path;
      this._pathStyle = value.pathStyle;
      this._region = value.region;
      this._secretKey = value.secretKey;
      this._secure = value.secure;
      this._storageClass = value.storageClass;
      this._syncronous = value.syncronous;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: string; 
  public get bandwidthLimit() {
    return this.getStringAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: string) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
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

  // disable_proxy - computed: false, optional: true, required: false
  private _disableProxy?: boolean | cdktf.IResolvable; 
  public get disableProxy() {
    return this.getBooleanAttribute('disable_proxy');
  }
  public set disableProxy(value: boolean | cdktf.IResolvable) {
    this._disableProxy = value;
  }
  public resetDisableProxy() {
    this._disableProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyInput() {
    return this._disableProxy;
  }

  // health_check_period - computed: false, optional: true, required: false
  private _healthCheckPeriod?: string; 
  public get healthCheckPeriod() {
    return this.getStringAttribute('health_check_period');
  }
  public set healthCheckPeriod(value: string) {
    this._healthCheckPeriod = value;
  }
  public resetHealthCheckPeriod() {
    this._healthCheckPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPeriodInput() {
    return this._healthCheckPeriod;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_style - computed: false, optional: true, required: false
  private _pathStyle?: string; 
  public get pathStyle() {
    return this.getStringAttribute('path_style');
  }
  public set pathStyle(value: string) {
    this._pathStyle = value;
  }
  public resetPathStyle() {
    this._pathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathStyleInput() {
    return this._pathStyle;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // syncronous - computed: false, optional: true, required: false
  private _syncronous?: boolean | cdktf.IResolvable; 
  public get syncronous() {
    return this.getBooleanAttribute('syncronous');
  }
  public set syncronous(value: boolean | cdktf.IResolvable) {
    this._syncronous = value;
  }
  public resetSyncronous() {
    this._syncronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncronousInput() {
    return this._syncronous;
  }
}
export interface S3BucketReplicationRule {
  /**
  * Whether or not to synchronise marker deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#delete_marker_replication S3BucketReplication#delete_marker_replication}
  */
  readonly deleteMarkerReplication?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to propagate deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#delete_replication S3BucketReplication#delete_replication}
  */
  readonly deleteReplication?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this rule is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#enabled S3BucketReplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to synchronise object created prior the replication configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#existing_object_replication S3BucketReplication#existing_object_replication}
  */
  readonly existingObjectReplication?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to synchonise buckets and objects metadata (such as locks). This must be enabled to achieve a two-way replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#metadata_sync S3BucketReplication#metadata_sync}
  */
  readonly metadataSync?: boolean | cdktf.IResolvable;
  /**
  * Bucket prefix object must be in to be syncronised
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#prefix S3BucketReplication#prefix}
  */
  readonly prefix?: string;
  /**
  * Rule priority. If omitted, the inverted index will be used as priority. This means that the first rule definition will have the higher priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#priority S3BucketReplication#priority}
  */
  readonly priority?: number;
  /**
  * Tags which objects must have to be syncronised
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#tags S3BucketReplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#target S3BucketReplication#target}
  */
  readonly target: S3BucketReplicationRuleTarget;
}

export function s3BucketReplicationRuleToTerraform(struct?: S3BucketReplicationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_marker_replication: cdktf.booleanToTerraform(struct!.deleteMarkerReplication),
    delete_replication: cdktf.booleanToTerraform(struct!.deleteReplication),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    existing_object_replication: cdktf.booleanToTerraform(struct!.existingObjectReplication),
    metadata_sync: cdktf.booleanToTerraform(struct!.metadataSync),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    target: s3BucketReplicationRuleTargetToTerraform(struct!.target),
  }
}


export function s3BucketReplicationRuleToHclTerraform(struct?: S3BucketReplicationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_marker_replication: {
      value: cdktf.booleanToHclTerraform(struct!.deleteMarkerReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_replication: {
      value: cdktf.booleanToHclTerraform(struct!.deleteReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    existing_object_replication: {
      value: cdktf.booleanToHclTerraform(struct!.existingObjectReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_sync: {
      value: cdktf.booleanToHclTerraform(struct!.metadataSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target: {
      value: s3BucketReplicationRuleTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationRuleTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketReplicationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMarkerReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMarkerReplication = this._deleteMarkerReplication;
    }
    if (this._deleteReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteReplication = this._deleteReplication;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._existingObjectReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingObjectReplication = this._existingObjectReplication;
    }
    if (this._metadataSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSync = this._metadataSync;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMarkerReplication = undefined;
      this._deleteReplication = undefined;
      this._enabled = undefined;
      this._existingObjectReplication = undefined;
      this._metadataSync = undefined;
      this._prefix = undefined;
      this._priority = undefined;
      this._tags = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMarkerReplication = value.deleteMarkerReplication;
      this._deleteReplication = value.deleteReplication;
      this._enabled = value.enabled;
      this._existingObjectReplication = value.existingObjectReplication;
      this._metadataSync = value.metadataSync;
      this._prefix = value.prefix;
      this._priority = value.priority;
      this._tags = value.tags;
      this._target.internalValue = value.target;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_marker_replication - computed: false, optional: true, required: false
  private _deleteMarkerReplication?: boolean | cdktf.IResolvable; 
  public get deleteMarkerReplication() {
    return this.getBooleanAttribute('delete_marker_replication');
  }
  public set deleteMarkerReplication(value: boolean | cdktf.IResolvable) {
    this._deleteMarkerReplication = value;
  }
  public resetDeleteMarkerReplication() {
    this._deleteMarkerReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMarkerReplicationInput() {
    return this._deleteMarkerReplication;
  }

  // delete_replication - computed: false, optional: true, required: false
  private _deleteReplication?: boolean | cdktf.IResolvable; 
  public get deleteReplication() {
    return this.getBooleanAttribute('delete_replication');
  }
  public set deleteReplication(value: boolean | cdktf.IResolvable) {
    this._deleteReplication = value;
  }
  public resetDeleteReplication() {
    this._deleteReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReplicationInput() {
    return this._deleteReplication;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // existing_object_replication - computed: false, optional: true, required: false
  private _existingObjectReplication?: boolean | cdktf.IResolvable; 
  public get existingObjectReplication() {
    return this.getBooleanAttribute('existing_object_replication');
  }
  public set existingObjectReplication(value: boolean | cdktf.IResolvable) {
    this._existingObjectReplication = value;
  }
  public resetExistingObjectReplication() {
    this._existingObjectReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingObjectReplicationInput() {
    return this._existingObjectReplication;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata_sync - computed: false, optional: true, required: false
  private _metadataSync?: boolean | cdktf.IResolvable; 
  public get metadataSync() {
    return this.getBooleanAttribute('metadata_sync');
  }
  public set metadataSync(value: boolean | cdktf.IResolvable) {
    this._metadataSync = value;
  }
  public resetMetadataSync() {
    this._metadataSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSyncInput() {
    return this._metadataSync;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: false, optional: false, required: true
  private _target = new S3BucketReplicationRuleTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: S3BucketReplicationRuleTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class S3BucketReplicationRuleList extends cdktf.ComplexList {
  public internalValue? : S3BucketReplicationRule[] | cdktf.IResolvable

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
  public get(index: number): S3BucketReplicationRuleOutputReference {
    return new S3BucketReplicationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication minio_s3_bucket_replication}
*/
export class S3BucketReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_s3_bucket_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketReplication to import
  * @param importFromId The id of the existing S3BucketReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_s3_bucket_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_replication minio_s3_bucket_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_s3_bucket_replication',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.12.0',
        providerVersionConstraint: '3.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule - computed: false, optional: true, required: false
  private _rule = new S3BucketReplicationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketReplicationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.listMapper(s3BucketReplicationRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      rule: {
        value: cdktf.listMapperHcl(s3BucketReplicationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketReplicationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
