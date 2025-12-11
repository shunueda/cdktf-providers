// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayLogForwardingAwsS3Config extends cdktf.TerraformMetaArguments {
  /**
  * AWS access id relevant for access_key auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#access_id GatewayLogForwardingAwsS3#access_id}
  */
  readonly accessId?: string;
  /**
  * AWS access key relevant for access_key auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#access_key GatewayLogForwardingAwsS3#access_key}
  */
  readonly accessKey?: string;
  /**
  * AWS auth type [access_key/cloud_id/assume_role]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#auth_type GatewayLogForwardingAwsS3#auth_type}
  */
  readonly authType?: string;
  /**
  * AWS S3 bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#bucket_name GatewayLogForwardingAwsS3#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Enable Log Forwarding [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#enable GatewayLogForwardingAwsS3#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#id GatewayLogForwardingAwsS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AWS S3 destination folder for logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#log_folder GatewayLogForwardingAwsS3#log_folder}
  */
  readonly logFolder?: string;
  /**
  * Logs format [text/json]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#output_format GatewayLogForwardingAwsS3#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Pull interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#pull_interval GatewayLogForwardingAwsS3#pull_interval}
  */
  readonly pullInterval?: string;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#region GatewayLogForwardingAwsS3#region}
  */
  readonly region?: string;
  /**
  * AWS role arn relevant for assume_role auth-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#role_arn GatewayLogForwardingAwsS3#role_arn}
  */
  readonly roleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3 akeyless_gateway_log_forwarding_aws_s3}
*/
export class GatewayLogForwardingAwsS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_log_forwarding_aws_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayLogForwardingAwsS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayLogForwardingAwsS3 to import
  * @param importFromId The id of the existing GatewayLogForwardingAwsS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayLogForwardingAwsS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_log_forwarding_aws_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_aws_s3 akeyless_gateway_log_forwarding_aws_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayLogForwardingAwsS3Config = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayLogForwardingAwsS3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_log_forwarding_aws_s3',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessId = config.accessId;
    this._accessKey = config.accessKey;
    this._authType = config.authType;
    this._bucketName = config.bucketName;
    this._enable = config.enable;
    this._id = config.id;
    this._logFolder = config.logFolder;
    this._outputFormat = config.outputFormat;
    this._pullInterval = config.pullInterval;
    this._region = config.region;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: true, required: false
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  public resetAccessId() {
    this._accessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
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

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // log_folder - computed: false, optional: true, required: false
  private _logFolder?: string; 
  public get logFolder() {
    return this.getStringAttribute('log_folder');
  }
  public set logFolder(value: string) {
    this._logFolder = value;
  }
  public resetLogFolder() {
    this._logFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFolderInput() {
    return this._logFolder;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // pull_interval - computed: false, optional: true, required: false
  private _pullInterval?: string; 
  public get pullInterval() {
    return this.getStringAttribute('pull_interval');
  }
  public set pullInterval(value: string) {
    this._pullInterval = value;
  }
  public resetPullInterval() {
    this._pullInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullIntervalInput() {
    return this._pullInterval;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_id: cdktf.stringToTerraform(this._accessId),
      access_key: cdktf.stringToTerraform(this._accessKey),
      auth_type: cdktf.stringToTerraform(this._authType),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      log_folder: cdktf.stringToTerraform(this._logFolder),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      pull_interval: cdktf.stringToTerraform(this._pullInterval),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_id: {
        value: cdktf.stringToHclTerraform(this._accessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
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
      log_folder: {
        value: cdktf.stringToHclTerraform(this._logFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_interval: {
        value: cdktf.stringToHclTerraform(this._pullInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
