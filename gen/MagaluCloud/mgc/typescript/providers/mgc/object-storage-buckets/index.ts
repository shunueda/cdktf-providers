// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageBucketsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#bucket ObjectStorageBuckets#bucket}
  */
  readonly bucket: string;
  /**
  * CORS configuration for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#cors ObjectStorageBuckets#cors}
  */
  readonly cors?: ObjectStorageBucketsCors;
  /**
  * Enable object lock for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#lock ObjectStorageBuckets#lock}
  */
  readonly lock?: boolean | cdktf.IResolvable;
  /**
  * Bucket policy document as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#policy ObjectStorageBuckets#policy}
  */
  readonly policy?: string;
  /**
  * Enable versioning for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#versioning ObjectStorageBuckets#versioning}
  */
  readonly versioning?: boolean | cdktf.IResolvable;
}
export interface ObjectStorageBucketsCors {
  /**
  * Allowed headers for CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#allowed_headers ObjectStorageBuckets#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Allowed HTTP methods for CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#allowed_methods ObjectStorageBuckets#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Allowed origins for CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#allowed_origins ObjectStorageBuckets#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Headers exposed to the browser for CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#expose_headers ObjectStorageBuckets#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Maximum age in seconds for CORS preflight cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#max_age_seconds ObjectStorageBuckets#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function objectStorageBucketsCorsToTerraform(struct?: ObjectStorageBucketsCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function objectStorageBucketsCorsToHclTerraform(struct?: ObjectStorageBucketsCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketsCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketsCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposeHeaders = undefined;
      this._maxAgeSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: true, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: true, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: true, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // expose_headers - computed: true, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age_seconds - computed: true, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets mgc_object_storage_buckets}
*/
export class ObjectStorageBuckets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_object_storage_buckets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageBuckets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageBuckets to import
  * @param importFromId The id of the existing ObjectStorageBuckets that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageBuckets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_object_storage_buckets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/object_storage_buckets mgc_object_storage_buckets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageBucketsConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageBucketsConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_object_storage_buckets',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
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
    this._cors.internalValue = config.cors;
    this._lock = config.lock;
    this._policy = config.policy;
    this._versioning = config.versioning;
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

  // cors - computed: true, optional: true, required: false
  private _cors = new ObjectStorageBucketsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: ObjectStorageBucketsCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // lock - computed: true, optional: true, required: false
  private _lock?: boolean | cdktf.IResolvable; 
  public get lock() {
    return this.getBooleanAttribute('lock');
  }
  public set lock(value: boolean | cdktf.IResolvable) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // versioning - computed: true, optional: true, required: false
  private _versioning?: boolean | cdktf.IResolvable; 
  public get versioning() {
    return this.getBooleanAttribute('versioning');
  }
  public set versioning(value: boolean | cdktf.IResolvable) {
    this._versioning = value;
  }
  public resetVersioning() {
    this._versioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      cors: objectStorageBucketsCorsToTerraform(this._cors.internalValue),
      lock: cdktf.booleanToTerraform(this._lock),
      policy: cdktf.stringToTerraform(this._policy),
      versioning: cdktf.booleanToTerraform(this._versioning),
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
      cors: {
        value: objectStorageBucketsCorsToHclTerraform(this._cors.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageBucketsCors",
      },
      lock: {
        value: cdktf.booleanToHclTerraform(this._lock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versioning: {
        value: cdktf.booleanToHclTerraform(this._versioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
