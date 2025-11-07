// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Generic repository settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#generic SnapshotRepository#generic}
  */
  readonly generic?: SnapshotRepositoryGeneric;
  /**
  * The name of the snapshot repository configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#name SnapshotRepository#name}
  */
  readonly name: string;
  /**
  * S3 repository settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#s3 SnapshotRepository#s3}
  */
  readonly s3?: SnapshotRepositoryS3;
}
export interface SnapshotRepositoryGeneric {
  /**
  * An arbitrary JSON object containing the repository settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#settings SnapshotRepository#settings}
  */
  readonly settings: string;
  /**
  * Repository type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#type SnapshotRepository#type}
  */
  readonly type: string;
}

export function snapshotRepositoryGenericToTerraform(struct?: SnapshotRepositoryGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function snapshotRepositoryGenericToHclTerraform(struct?: SnapshotRepositoryGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRepositoryGenericOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRepositoryGeneric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRepositoryGeneric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings = value.settings;
      this._type = value.type;
    }
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
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
}
export interface SnapshotRepositoryS3 {
  /**
  * An S3 access key. If set, the secret_key setting must also be specified. If unset, the client will use the instance or container role instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#access_key SnapshotRepository#access_key}
  */
  readonly accessKey?: string;
  /**
  * Name of the S3 bucket to use for snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#bucket SnapshotRepository#bucket}
  */
  readonly bucket: string;
  /**
  * The S3 service endpoint to connect to. This defaults to s3.amazonaws.com but the AWS documentation lists alternative S3 endpoints. If you are using an S3-compatible service then you should set this to the service’s endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#endpoint SnapshotRepository#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to force the use of the path style access pattern. If true, the path style access pattern will be used. If false, the access pattern will be automatically determined by the AWS Java SDK (See AWS documentation for details). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#path_style_access SnapshotRepository#path_style_access}
  */
  readonly pathStyleAccess?: boolean | cdktf.IResolvable;
  /**
  * Allows specifying the signing region to use. Specifying this setting manually should not be necessary for most use cases. Generally, the SDK will correctly guess the signing region to use. It should be considered an expert level setting to support S3-compatible APIs that require v4 signatures and use a region other than the default us-east-1. Defaults to empty string which means that the SDK will try to automatically determine the correct signing region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#region SnapshotRepository#region}
  */
  readonly region?: string;
  /**
  * An S3 secret key. If set, the access_key setting must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#secret_key SnapshotRepository#secret_key}
  */
  readonly secretKey?: string;
  /**
  * When set to true files are encrypted on server side using AES256 algorithm. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#server_side_encryption SnapshotRepository#server_side_encryption}
  */
  readonly serverSideEncryption?: boolean | cdktf.IResolvable;
}

export function snapshotRepositoryS3ToTerraform(struct?: SnapshotRepositoryS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    path_style_access: cdktf.booleanToTerraform(struct!.pathStyleAccess),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    server_side_encryption: cdktf.booleanToTerraform(struct!.serverSideEncryption),
  }
}


export function snapshotRepositoryS3ToHclTerraform(struct?: SnapshotRepositoryS3 | cdktf.IResolvable): any {
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
    path_style_access: {
      value: cdktf.booleanToHclTerraform(struct!.pathStyleAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    server_side_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.serverSideEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRepositoryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRepositoryS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._pathStyleAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathStyleAccess = this._pathStyleAccess;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._serverSideEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryption = this._serverSideEncryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRepositoryS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._pathStyleAccess = undefined;
      this._region = undefined;
      this._secretKey = undefined;
      this._serverSideEncryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._pathStyleAccess = value.pathStyleAccess;
      this._region = value.region;
      this._secretKey = value.secretKey;
      this._serverSideEncryption = value.serverSideEncryption;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
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

  // path_style_access - computed: true, optional: true, required: false
  private _pathStyleAccess?: boolean | cdktf.IResolvable; 
  public get pathStyleAccess() {
    return this.getBooleanAttribute('path_style_access');
  }
  public set pathStyleAccess(value: boolean | cdktf.IResolvable) {
    this._pathStyleAccess = value;
  }
  public resetPathStyleAccess() {
    this._pathStyleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathStyleAccessInput() {
    return this._pathStyleAccess;
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

  // server_side_encryption - computed: true, optional: true, required: false
  private _serverSideEncryption?: boolean | cdktf.IResolvable; 
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: boolean | cdktf.IResolvable) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository ec_snapshot_repository}
*/
export class SnapshotRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_snapshot_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapshotRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapshotRepository to import
  * @param importFromId The id of the existing SnapshotRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapshotRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_snapshot_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/snapshot_repository ec_snapshot_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_snapshot_repository',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generic.internalValue = config.generic;
    this._name = config.name;
    this._s3.internalValue = config.s3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // generic - computed: false, optional: true, required: false
  private _generic = new SnapshotRepositoryGenericOutputReference(this, "generic");
  public get generic() {
    return this._generic;
  }
  public putGeneric(value: SnapshotRepositoryGeneric) {
    this._generic.internalValue = value;
  }
  public resetGeneric() {
    this._generic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // s3 - computed: false, optional: true, required: false
  private _s3 = new SnapshotRepositoryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: SnapshotRepositoryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generic: snapshotRepositoryGenericToTerraform(this._generic.internalValue),
      name: cdktf.stringToTerraform(this._name),
      s3: snapshotRepositoryS3ToTerraform(this._s3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generic: {
        value: snapshotRepositoryGenericToHclTerraform(this._generic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotRepositoryGeneric",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3: {
        value: snapshotRepositoryS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotRepositoryS3",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
