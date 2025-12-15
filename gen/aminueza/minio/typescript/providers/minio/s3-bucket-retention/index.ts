// https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketRetentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket to configure object locking. The bucket must be created with object locking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention#bucket S3BucketRetention#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention#id S3BucketRetention#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retention mode for the bucket. Valid values are:
  *                 - GOVERNANCE: Prevents object modification by non-privileged users. Users with s3:BypassGovernanceRetention permission can modify objects.
  *                 - COMPLIANCE: Prevents any object modification by all users, including the root user, until retention period expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention#mode S3BucketRetention#mode}
  */
  readonly mode: string;
  /**
  * Time unit for the validity period. Valid values are DAYS or YEARS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention#unit S3BucketRetention#unit}
  */
  readonly unit: string;
  /**
  * Duration for which objects should be retained under WORM lock, in the specified unit. Must be a positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention#validity_period S3BucketRetention#validity_period}
  */
  readonly validityPeriod: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention minio_s3_bucket_retention}
*/
export class S3BucketRetention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_s3_bucket_retention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketRetention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketRetention to import
  * @param importFromId The id of the existing S3BucketRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketRetention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_s3_bucket_retention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.12.0/docs/resources/s3_bucket_retention minio_s3_bucket_retention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketRetentionConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketRetentionConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_s3_bucket_retention',
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
    this._mode = config.mode;
    this._unit = config.unit;
    this._validityPeriod = config.validityPeriod;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // validity_period - computed: false, optional: false, required: true
  private _validityPeriod?: number; 
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
  }
  public set validityPeriod(value: number) {
    this._validityPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      unit: cdktf.stringToTerraform(this._unit),
      validity_period: cdktf.numberToTerraform(this._validityPeriod),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_period: {
        value: cdktf.numberToHclTerraform(this._validityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
