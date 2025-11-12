// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationS3Config extends cdktf.TerraformMetaArguments {
  /**
  * The AWS Access Key ID used to connect to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#aws_access_key DestinationS3#aws_access_key}
  */
  readonly awsAccessKey: string;
  /**
  * The AWS region to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#aws_region DestinationS3#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The AWS Secret Access Key used to connect to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#aws_secret_key DestinationS3#aws_secret_key}
  */
  readonly awsSecretKey: string;
  /**
  * The S3 Bucket to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#bucket_name DestinationS3#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Compression type for files written to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#compression_type DestinationS3#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Prefix for the filename. Prefixes can be used to specify a directory for the file (e.g. dir1/dir2/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#filename_prefix DestinationS3#filename_prefix}
  */
  readonly filenamePrefix?: string;
  /**
  * The format of the filename. See documentation for more information about formatting options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#filename_template DestinationS3#filename_template}
  */
  readonly filenameTemplate?: string;
  /**
  * The format to use when writing data to the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#format DestinationS3#format}
  */
  readonly format?: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#name DestinationS3#name}
  */
  readonly name: string;
  /**
  * A comma separated list of fields to include in output? Options to include key, offset, timestamp, value, headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#output_fields DestinationS3#output_fields}
  */
  readonly outputFields?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3 streamkap_destination_s3}
*/
export class DestinationS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationS3 to import
  * @param importFromId The id of the existing DestinationS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_s3 streamkap_destination_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationS3Config
  */
  public constructor(scope: Construct, id: string, config: DestinationS3Config) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_s3',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.15',
        providerVersionConstraint: '2.1.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._bucketName = config.bucketName;
    this._compressionType = config.compressionType;
    this._filenamePrefix = config.filenamePrefix;
    this._filenameTemplate = config.filenameTemplate;
    this._format = config.format;
    this._name = config.name;
    this._outputFields = config.outputFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: false, optional: false, required: true
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
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

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // filename_prefix - computed: true, optional: true, required: false
  private _filenamePrefix?: string; 
  public get filenamePrefix() {
    return this.getStringAttribute('filename_prefix');
  }
  public set filenamePrefix(value: string) {
    this._filenamePrefix = value;
  }
  public resetFilenamePrefix() {
    this._filenamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePrefixInput() {
    return this._filenamePrefix;
  }

  // filename_template - computed: true, optional: true, required: false
  private _filenameTemplate?: string; 
  public get filenameTemplate() {
    return this.getStringAttribute('filename_template');
  }
  public set filenameTemplate(value: string) {
    this._filenameTemplate = value;
  }
  public resetFilenameTemplate() {
    this._filenameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameTemplateInput() {
    return this._filenameTemplate;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // output_fields - computed: true, optional: true, required: false
  private _outputFields?: string[]; 
  public get outputFields() {
    return this.getListAttribute('output_fields');
  }
  public set outputFields(value: string[]) {
    this._outputFields = value;
  }
  public resetOutputFields() {
    this._outputFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldsInput() {
    return this._outputFields;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      compression_type: cdktf.stringToTerraform(this._compressionType),
      filename_prefix: cdktf.stringToTerraform(this._filenamePrefix),
      filename_template: cdktf.stringToTerraform(this._filenameTemplate),
      format: cdktf.stringToTerraform(this._format),
      name: cdktf.stringToTerraform(this._name),
      output_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputFields),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
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
      compression_type: {
        value: cdktf.stringToHclTerraform(this._compressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename_prefix: {
        value: cdktf.stringToHclTerraform(this._filenamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename_template: {
        value: cdktf.stringToHclTerraform(this._filenameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
