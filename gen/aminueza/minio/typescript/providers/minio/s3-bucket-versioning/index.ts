// https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketVersioningConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#bucket S3BucketVersioning#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#id S3BucketVersioning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * versioning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#versioning_configuration S3BucketVersioning#versioning_configuration}
  */
  readonly versioningConfiguration: S3BucketVersioningVersioningConfiguration;
}
export interface S3BucketVersioningVersioningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#exclude_folders S3BucketVersioning#exclude_folders}
  */
  readonly excludeFolders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#excluded_prefixes S3BucketVersioning#excluded_prefixes}
  */
  readonly excludedPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#status S3BucketVersioning#status}
  */
  readonly status: string;
}

export function s3BucketVersioningVersioningConfigurationToTerraform(struct?: S3BucketVersioningVersioningConfigurationOutputReference | S3BucketVersioningVersioningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_folders: cdktf.booleanToTerraform(struct!.excludeFolders),
    excluded_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPrefixes),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3BucketVersioningVersioningConfigurationToHclTerraform(struct?: S3BucketVersioningVersioningConfigurationOutputReference | S3BucketVersioningVersioningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_folders: {
      value: cdktf.booleanToHclTerraform(struct!.excludeFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketVersioningVersioningConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketVersioningVersioningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFolders = this._excludeFolders;
    }
    if (this._excludedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPrefixes = this._excludedPrefixes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketVersioningVersioningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeFolders = undefined;
      this._excludedPrefixes = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeFolders = value.excludeFolders;
      this._excludedPrefixes = value.excludedPrefixes;
      this._status = value.status;
    }
  }

  // exclude_folders - computed: false, optional: true, required: false
  private _excludeFolders?: boolean | cdktf.IResolvable; 
  public get excludeFolders() {
    return this.getBooleanAttribute('exclude_folders');
  }
  public set excludeFolders(value: boolean | cdktf.IResolvable) {
    this._excludeFolders = value;
  }
  public resetExcludeFolders() {
    this._excludeFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFoldersInput() {
    return this._excludeFolders;
  }

  // excluded_prefixes - computed: false, optional: true, required: false
  private _excludedPrefixes?: string[]; 
  public get excludedPrefixes() {
    return this.getListAttribute('excluded_prefixes');
  }
  public set excludedPrefixes(value: string[]) {
    this._excludedPrefixes = value;
  }
  public resetExcludedPrefixes() {
    this._excludedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPrefixesInput() {
    return this._excludedPrefixes;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning minio_s3_bucket_versioning}
*/
export class S3BucketVersioning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_s3_bucket_versioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketVersioning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketVersioning to import
  * @param importFromId The id of the existing S3BucketVersioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketVersioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_s3_bucket_versioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_versioning minio_s3_bucket_versioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketVersioningConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketVersioningConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_s3_bucket_versioning',
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
    this._versioningConfiguration.internalValue = config.versioningConfiguration;
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

  // versioning_configuration - computed: false, optional: false, required: true
  private _versioningConfiguration = new S3BucketVersioningVersioningConfigurationOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
  }
  public putVersioningConfiguration(value: S3BucketVersioningVersioningConfiguration) {
    this._versioningConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningConfigurationInput() {
    return this._versioningConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      versioning_configuration: s3BucketVersioningVersioningConfigurationToTerraform(this._versioningConfiguration.internalValue),
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
      versioning_configuration: {
        value: s3BucketVersioningVersioningConfigurationToHclTerraform(this._versioningConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketVersioningVersioningConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
