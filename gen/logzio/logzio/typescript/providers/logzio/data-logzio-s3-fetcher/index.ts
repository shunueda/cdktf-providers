// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioS3FetcherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher#aws_access_key DataLogzioS3Fetcher#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher#aws_arn DataLogzioS3Fetcher#aws_arn}
  */
  readonly awsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher#fetcher_id DataLogzioS3Fetcher#fetcher_id}
  */
  readonly fetcherId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher#id DataLogzioS3Fetcher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher#prefix DataLogzioS3Fetcher#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher logzio_s3_fetcher}
*/
export class DataLogzioS3Fetcher extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_s3_fetcher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioS3Fetcher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioS3Fetcher to import
  * @param importFromId The id of the existing DataLogzioS3Fetcher that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioS3Fetcher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_s3_fetcher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/s3_fetcher logzio_s3_fetcher} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioS3FetcherConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogzioS3FetcherConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_s3_fetcher',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
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
    this._awsArn = config.awsArn;
    this._fetcherId = config.fetcherId;
    this._id = config.id;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // add_s3_object_key_as_log_field - computed: true, optional: false, required: false
  public get addS3ObjectKeyAsLogField() {
    return this.getBooleanAttribute('add_s3_object_key_as_log_field');
  }

  // aws_access_key - computed: true, optional: true, required: false
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

  // aws_arn - computed: true, optional: true, required: false
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

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // fetcher_id - computed: false, optional: false, required: true
  private _fetcherId?: number; 
  public get fetcherId() {
    return this.getNumberAttribute('fetcher_id');
  }
  public set fetcherId(value: number) {
    this._fetcherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fetcherIdInput() {
    return this._fetcherId;
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

  // logs_type - computed: true, optional: false, required: false
  public get logsType() {
    return this.getStringAttribute('logs_type');
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
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_arn: cdktf.stringToTerraform(this._awsArn),
      fetcher_id: cdktf.numberToTerraform(this._fetcherId),
      id: cdktf.stringToTerraform(this._id),
      prefix: cdktf.stringToTerraform(this._prefix),
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
      aws_arn: {
        value: cdktf.stringToHclTerraform(this._awsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fetcher_id: {
        value: cdktf.numberToHclTerraform(this._fetcherId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
