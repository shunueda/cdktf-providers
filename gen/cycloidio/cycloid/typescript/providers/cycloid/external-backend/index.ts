// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Representation of AWS storage for external backend.
  * Must be matched with a credential of the "aws" type.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#aws_storage ExternalBackend#aws_storage}
  */
  readonly awsStorage?: ExternalBackendAwsStorage;
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#credential_canonical ExternalBackend#credential_canonical}
  */
  readonly credentialCanonical?: string;
  /**
  * Whether the given entity is default one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#default ExternalBackend#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#engine ExternalBackend#engine}
  */
  readonly engine: string;
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#environment_canonical ExternalBackend#environment_canonical}
  */
  readonly environmentCanonical?: string;
  /**
  * External Backend ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#external_backend_id ExternalBackend#external_backend_id}
  */
  readonly externalBackendId?: number;
  /**
  * Representation of GCP remote tf state for external backend.
  * Must be matched with a credential of the "gcp" type.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#gcp_storage ExternalBackend#gcp_storage}
  */
  readonly gcpStorage?: ExternalBackendGcpStorage;
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#organization_canonical ExternalBackend#organization_canonical}
  */
  readonly organizationCanonical?: string;
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#project_canonical ExternalBackend#project_canonical}
  */
  readonly projectCanonical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#purpose ExternalBackend#purpose}
  */
  readonly purpose: string;
  /**
  * Representation of Swift remote tf state for external backend.
  * Must be matched with a credential of the "swift" type.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#swift_storage ExternalBackend#swift_storage}
  */
  readonly swiftStorage?: ExternalBackendSwiftStorage;
}
export interface ExternalBackendAwsStorage {
  /**
  * The AWS bucket containing objects
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#bucket ExternalBackend#bucket}
  */
  readonly bucket?: string;
  /**
  * A custom endpoint for the S3 API (default: s3.amazonaws.com)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#endpoint ExternalBackend#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The S3 Key uniquely identifies an object in a bucket
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#key ExternalBackend#key}
  */
  readonly key?: string;
  /**
  * The AWS region where the resource exists
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#region ExternalBackend#region}
  */
  readonly region?: string;
  /**
  * Always use path-style S3 URLs (https://<HOST>/<BUCKET> instead of https://<BUCKET>.<HOST>)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#s3_force_path_style ExternalBackend#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Set this to `true` to not verify SSL certificates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#skip_verify_ssl ExternalBackend#skip_verify_ssl}
  */
  readonly skipVerifySsl?: boolean | cdktf.IResolvable;
}

export function externalBackendAwsStorageToTerraform(struct?: ExternalBackendAwsStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    key: cdktf.stringToTerraform(struct!.key),
    region: cdktf.stringToTerraform(struct!.region),
    s3_force_path_style: cdktf.booleanToTerraform(struct!.s3ForcePathStyle),
    skip_verify_ssl: cdktf.booleanToTerraform(struct!.skipVerifySsl),
  }
}


export function externalBackendAwsStorageToHclTerraform(struct?: ExternalBackendAwsStorage | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    s3_force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.s3ForcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.skipVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalBackendAwsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalBackendAwsStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._s3ForcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ForcePathStyle = this._s3ForcePathStyle;
    }
    if (this._skipVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipVerifySsl = this._skipVerifySsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalBackendAwsStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._key = undefined;
      this._region = undefined;
      this._s3ForcePathStyle = undefined;
      this._skipVerifySsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._key = value.key;
      this._region = value.region;
      this._s3ForcePathStyle = value.s3ForcePathStyle;
      this._skipVerifySsl = value.skipVerifySsl;
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

  // endpoint - computed: true, optional: true, required: false
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

  // key - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
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

  // s3_force_path_style - computed: true, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get s3ForcePathStyle() {
    return this.getBooleanAttribute('s3_force_path_style');
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle;
  }

  // skip_verify_ssl - computed: true, optional: true, required: false
  private _skipVerifySsl?: boolean | cdktf.IResolvable; 
  public get skipVerifySsl() {
    return this.getBooleanAttribute('skip_verify_ssl');
  }
  public set skipVerifySsl(value: boolean | cdktf.IResolvable) {
    this._skipVerifySsl = value;
  }
  public resetSkipVerifySsl() {
    this._skipVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifySslInput() {
    return this._skipVerifySsl;
  }
}
export interface ExternalBackendGcpStorage {
  /**
  * The GCP bucket containing objects
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#bucket ExternalBackend#bucket}
  */
  readonly bucket?: string;
  /**
  * The GCP object uniquely identifying an object in a bucket,
  * will be required if the EB is not default
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#object ExternalBackend#object}
  */
  readonly object?: string;
}

export function externalBackendGcpStorageToTerraform(struct?: ExternalBackendGcpStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function externalBackendGcpStorageToHclTerraform(struct?: ExternalBackendGcpStorage | cdktf.IResolvable): any {
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
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalBackendGcpStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalBackendGcpStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalBackendGcpStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._object = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._object = value.object;
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

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface ExternalBackendSwiftStorage {
  /**
  * The Swift container containing objects
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#container ExternalBackend#container}
  */
  readonly container?: string;
  /**
  * The swift object uniquely identifying an object in a container,
  * will be required if the EB is not default
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#object ExternalBackend#object}
  */
  readonly object?: string;
  /**
  * The Swift region where the resource exists
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#region ExternalBackend#region}
  */
  readonly region?: string;
  /**
  * Set this to `true` to not verify SSL certificates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#skip_verify_ssl ExternalBackend#skip_verify_ssl}
  */
  readonly skipVerifySsl?: boolean | cdktf.IResolvable;
}

export function externalBackendSwiftStorageToTerraform(struct?: ExternalBackendSwiftStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
    skip_verify_ssl: cdktf.booleanToTerraform(struct!.skipVerifySsl),
  }
}


export function externalBackendSwiftStorageToHclTerraform(struct?: ExternalBackendSwiftStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
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
    skip_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.skipVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalBackendSwiftStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalBackendSwiftStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._skipVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipVerifySsl = this._skipVerifySsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalBackendSwiftStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._object = undefined;
      this._region = undefined;
      this._skipVerifySsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._object = value.object;
      this._region = value.region;
      this._skipVerifySsl = value.skipVerifySsl;
    }
  }

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: true, optional: true, required: false
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

  // skip_verify_ssl - computed: true, optional: true, required: false
  private _skipVerifySsl?: boolean | cdktf.IResolvable; 
  public get skipVerifySsl() {
    return this.getBooleanAttribute('skip_verify_ssl');
  }
  public set skipVerifySsl(value: boolean | cdktf.IResolvable) {
    this._skipVerifySsl = value;
  }
  public resetSkipVerifySsl() {
    this._skipVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifySslInput() {
    return this._skipVerifySsl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend cycloid_external_backend}
*/
export class ExternalBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_external_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalBackend to import
  * @param importFromId The id of the existing ExternalBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_external_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/external_backend cycloid_external_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalBackendConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_external_backend',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsStorage.internalValue = config.awsStorage;
    this._credentialCanonical = config.credentialCanonical;
    this._default = config.default;
    this._engine = config.engine;
    this._environmentCanonical = config.environmentCanonical;
    this._externalBackendId = config.externalBackendId;
    this._gcpStorage.internalValue = config.gcpStorage;
    this._organizationCanonical = config.organizationCanonical;
    this._projectCanonical = config.projectCanonical;
    this._purpose = config.purpose;
    this._swiftStorage.internalValue = config.swiftStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_storage - computed: true, optional: true, required: false
  private _awsStorage = new ExternalBackendAwsStorageOutputReference(this, "aws_storage");
  public get awsStorage() {
    return this._awsStorage;
  }
  public putAwsStorage(value: ExternalBackendAwsStorage) {
    this._awsStorage.internalValue = value;
  }
  public resetAwsStorage() {
    this._awsStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStorageInput() {
    return this._awsStorage.internalValue;
  }

  // credential_canonical - computed: true, optional: true, required: false
  private _credentialCanonical?: string; 
  public get credentialCanonical() {
    return this.getStringAttribute('credential_canonical');
  }
  public set credentialCanonical(value: string) {
    this._credentialCanonical = value;
  }
  public resetCredentialCanonical() {
    this._credentialCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialCanonicalInput() {
    return this._credentialCanonical;
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // environment_canonical - computed: true, optional: true, required: false
  private _environmentCanonical?: string; 
  public get environmentCanonical() {
    return this.getStringAttribute('environment_canonical');
  }
  public set environmentCanonical(value: string) {
    this._environmentCanonical = value;
  }
  public resetEnvironmentCanonical() {
    this._environmentCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentCanonicalInput() {
    return this._environmentCanonical;
  }

  // external_backend_id - computed: true, optional: true, required: false
  private _externalBackendId?: number; 
  public get externalBackendId() {
    return this.getNumberAttribute('external_backend_id');
  }
  public set externalBackendId(value: number) {
    this._externalBackendId = value;
  }
  public resetExternalBackendId() {
    this._externalBackendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBackendIdInput() {
    return this._externalBackendId;
  }

  // gcp_storage - computed: true, optional: true, required: false
  private _gcpStorage = new ExternalBackendGcpStorageOutputReference(this, "gcp_storage");
  public get gcpStorage() {
    return this._gcpStorage;
  }
  public putGcpStorage(value: ExternalBackendGcpStorage) {
    this._gcpStorage.internalValue = value;
  }
  public resetGcpStorage() {
    this._gcpStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpStorageInput() {
    return this._gcpStorage.internalValue;
  }

  // organization_canonical - computed: true, optional: true, required: false
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  public resetOrganizationCanonical() {
    this._organizationCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // project_canonical - computed: true, optional: true, required: false
  private _projectCanonical?: string; 
  public get projectCanonical() {
    return this.getStringAttribute('project_canonical');
  }
  public set projectCanonical(value: string) {
    this._projectCanonical = value;
  }
  public resetProjectCanonical() {
    this._projectCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCanonicalInput() {
    return this._projectCanonical;
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // swift_storage - computed: true, optional: true, required: false
  private _swiftStorage = new ExternalBackendSwiftStorageOutputReference(this, "swift_storage");
  public get swiftStorage() {
    return this._swiftStorage;
  }
  public putSwiftStorage(value: ExternalBackendSwiftStorage) {
    this._swiftStorage.internalValue = value;
  }
  public resetSwiftStorage() {
    this._swiftStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftStorageInput() {
    return this._swiftStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_storage: externalBackendAwsStorageToTerraform(this._awsStorage.internalValue),
      credential_canonical: cdktf.stringToTerraform(this._credentialCanonical),
      default: cdktf.booleanToTerraform(this._default),
      engine: cdktf.stringToTerraform(this._engine),
      environment_canonical: cdktf.stringToTerraform(this._environmentCanonical),
      external_backend_id: cdktf.numberToTerraform(this._externalBackendId),
      gcp_storage: externalBackendGcpStorageToTerraform(this._gcpStorage.internalValue),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      project_canonical: cdktf.stringToTerraform(this._projectCanonical),
      purpose: cdktf.stringToTerraform(this._purpose),
      swift_storage: externalBackendSwiftStorageToTerraform(this._swiftStorage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_storage: {
        value: externalBackendAwsStorageToHclTerraform(this._awsStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalBackendAwsStorage",
      },
      credential_canonical: {
        value: cdktf.stringToHclTerraform(this._credentialCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_canonical: {
        value: cdktf.stringToHclTerraform(this._environmentCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_backend_id: {
        value: cdktf.numberToHclTerraform(this._externalBackendId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gcp_storage: {
        value: externalBackendGcpStorageToHclTerraform(this._gcpStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalBackendGcpStorage",
      },
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_canonical: {
        value: cdktf.stringToHclTerraform(this._projectCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swift_storage: {
        value: externalBackendSwiftStorageToHclTerraform(this._swiftStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalBackendSwiftStorage",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
