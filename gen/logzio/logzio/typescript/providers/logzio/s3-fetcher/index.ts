// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3FetcherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#active S3Fetcher#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#add_s3_object_key_as_log_field S3Fetcher#add_s3_object_key_as_log_field}
  */
  readonly addS3ObjectKeyAsLogField?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#aws_access_key S3Fetcher#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#aws_arn S3Fetcher#aws_arn}
  */
  readonly awsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#aws_region S3Fetcher#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#aws_secret_key S3Fetcher#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#bucket_name S3Fetcher#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#id S3Fetcher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#logs_type S3Fetcher#logs_type}
  */
  readonly logsType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#prefix S3Fetcher#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher logzio_s3_fetcher}
*/
export class S3Fetcher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_s3_fetcher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Fetcher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Fetcher to import
  * @param importFromId The id of the existing S3Fetcher that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Fetcher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_s3_fetcher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/s3_fetcher logzio_s3_fetcher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3FetcherConfig
  */
  public constructor(scope: Construct, id: string, config: S3FetcherConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_s3_fetcher',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._addS3ObjectKeyAsLogField = config.addS3ObjectKeyAsLogField;
    this._awsAccessKey = config.awsAccessKey;
    this._awsArn = config.awsArn;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._bucketName = config.bucketName;
    this._id = config.id;
    this._logsType = config.logsType;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // add_s3_object_key_as_log_field - computed: false, optional: true, required: false
  private _addS3ObjectKeyAsLogField?: boolean | cdktf.IResolvable; 
  public get addS3ObjectKeyAsLogField() {
    return this.getBooleanAttribute('add_s3_object_key_as_log_field');
  }
  public set addS3ObjectKeyAsLogField(value: boolean | cdktf.IResolvable) {
    this._addS3ObjectKeyAsLogField = value;
  }
  public resetAddS3ObjectKeyAsLogField() {
    this._addS3ObjectKeyAsLogField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addS3ObjectKeyAsLogFieldInput() {
    return this._addS3ObjectKeyAsLogField;
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_arn - computed: false, optional: true, required: false
  private _awsArn?: string; 
  public get awsArn() {
    return this.getStringAttribute('aws_arn');
  }
  public set awsArn(value: string) {
    this._awsArn = value;
  }
  public resetAwsArn() {
    this._awsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsArnInput() {
    return this._awsArn;
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

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // fetcher_id - computed: true, optional: false, required: false
  public get fetcherId() {
    return this.getNumberAttribute('fetcher_id');
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

  // logs_type - computed: false, optional: false, required: true
  private _logsType?: string; 
  public get logsType() {
    return this.getStringAttribute('logs_type');
  }
  public set logsType(value: string) {
    this._logsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsTypeInput() {
    return this._logsType;
  }

  // prefix - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      add_s3_object_key_as_log_field: cdktf.booleanToTerraform(this._addS3ObjectKeyAsLogField),
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_arn: cdktf.stringToTerraform(this._awsArn),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      id: cdktf.stringToTerraform(this._id),
      logs_type: cdktf.stringToTerraform(this._logsType),
      prefix: cdktf.stringToTerraform(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_s3_object_key_as_log_field: {
        value: cdktf.booleanToHclTerraform(this._addS3ObjectKeyAsLogField),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_arn: {
        value: cdktf.stringToHclTerraform(this._awsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
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
      logs_type: {
        value: cdktf.stringToHclTerraform(this._logsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
