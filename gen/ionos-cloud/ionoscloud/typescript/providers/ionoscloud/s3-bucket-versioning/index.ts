// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketVersioningConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning#bucket S3BucketVersioning#bucket}
  */
  readonly bucket: string;
  /**
  * versioning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning#versioning_configuration S3BucketVersioning#versioning_configuration}
  */
  readonly versioningConfiguration?: S3BucketVersioningVersioningConfiguration;
}
export interface S3BucketVersioningVersioningConfiguration {
  /**
  * The MFA delete status of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning#mfa_delete S3BucketVersioning#mfa_delete}
  */
  readonly mfaDelete?: string;
  /**
  * The versioning status of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning#status S3BucketVersioning#status}
  */
  readonly status: string;
}

export function s3BucketVersioningVersioningConfigurationToTerraform(struct?: S3BucketVersioningVersioningConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mfa_delete: cdktf.stringToTerraform(struct!.mfaDelete),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3BucketVersioningVersioningConfigurationToHclTerraform(struct?: S3BucketVersioningVersioningConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mfa_delete: {
      value: cdktf.stringToHclTerraform(struct!.mfaDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketVersioningVersioningConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mfaDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaDelete = this._mfaDelete;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketVersioningVersioningConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mfaDelete = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mfaDelete = value.mfaDelete;
      this._status = value.status;
    }
  }

  // mfa_delete - computed: true, optional: true, required: false
  private _mfaDelete?: string; 
  public get mfaDelete() {
    return this.getStringAttribute('mfa_delete');
  }
  public set mfaDelete(value: string) {
    this._mfaDelete = value;
  }
  public resetMfaDelete() {
    this._mfaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaDeleteInput() {
    return this._mfaDelete;
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning ionoscloud_s3_bucket_versioning}
*/
export class S3BucketVersioning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_s3_bucket_versioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketVersioning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketVersioning to import
  * @param importFromId The id of the existing S3BucketVersioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketVersioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_s3_bucket_versioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_versioning ionoscloud_s3_bucket_versioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketVersioningConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketVersioningConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_s3_bucket_versioning',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
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

  // versioning_configuration - computed: false, optional: true, required: false
  private _versioningConfiguration = new S3BucketVersioningVersioningConfigurationOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
  }
  public putVersioningConfiguration(value: S3BucketVersioningVersioningConfiguration) {
    this._versioningConfiguration.internalValue = value;
  }
  public resetVersioningConfiguration() {
    this._versioningConfiguration.internalValue = undefined;
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
      versioning_configuration: {
        value: s3BucketVersioningVersioningConfigurationToHclTerraform(this._versioningConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketVersioningVersioningConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
