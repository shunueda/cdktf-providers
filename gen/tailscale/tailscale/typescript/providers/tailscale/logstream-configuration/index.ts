// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogstreamConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The compression algorithm with which to compress logs. One of `none`, `zstd` or `gzip`. Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#compression_format LogstreamConfiguration#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * The type of system to which logs are being streamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#destination_type LogstreamConfiguration#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#id LogstreamConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of log that is streamed to this endpoint. Either `configuration` for configuration audit logs, or `network` for network flow logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#log_type LogstreamConfiguration#log_type}
  */
  readonly logType: string;
  /**
  * The S3 access key ID. Required if destination_type is s3 and s3_authentication_type is 'accesskey'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_access_key_id LogstreamConfiguration#s3_access_key_id}
  */
  readonly s3AccessKeyId?: string;
  /**
  * What type of authentication to use for S3. Required if destination_type is 's3'. Tailscale recommends using 'rolearn'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_authentication_type LogstreamConfiguration#s3_authentication_type}
  */
  readonly s3AuthenticationType?: string;
  /**
  * The S3 bucket name. Required if destination_type is 's3'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_bucket LogstreamConfiguration#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * The AWS External ID that Tailscale supplies when authenticating using role-based authentication. Required if destination_type is 's3' and s3_authentication_type is 'rolearn'. This can be obtained via the tailscale_aws_external_id resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_external_id LogstreamConfiguration#s3_external_id}
  */
  readonly s3ExternalId?: string;
  /**
  * An optional S3 key prefix to prepend to the auto-generated S3 key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_key_prefix LogstreamConfiguration#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * The region in which the S3 bucket is located. Required if destination_type is 's3'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_region LogstreamConfiguration#s3_region}
  */
  readonly s3Region?: string;
  /**
  * ARN of the AWS IAM role that Tailscale should assume when using role-based authentication. Required if destination_type is 's3' and s3_authentication_type is 'rolearn'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_role_arn LogstreamConfiguration#s3_role_arn}
  */
  readonly s3RoleArn?: string;
  /**
  * The S3 secret access key. Required if destination_type is 's3' and s3_authentication_type is 'accesskey'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#s3_secret_access_key LogstreamConfiguration#s3_secret_access_key}
  */
  readonly s3SecretAccessKey?: string;
  /**
  * The token/password with which log streams to this endpoint should be authenticated, required unless destination_type is 's3'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#token LogstreamConfiguration#token}
  */
  readonly token?: string;
  /**
  * An optional number of minutes to wait in between uploading new logs. If the quantity of logs does not fit within a single upload, multiple uploads will be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#upload_period_minutes LogstreamConfiguration#upload_period_minutes}
  */
  readonly uploadPeriodMinutes?: number;
  /**
  * The URL to which log streams are being posted. If destination_type is 's3' and you want to use the official Amazon S3 endpoint, leave this empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#url LogstreamConfiguration#url}
  */
  readonly url?: string;
  /**
  * The username with which log streams to this endpoint are authenticated. Only required if destination_type is 'elastic', defaults to 'user' if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#user LogstreamConfiguration#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration tailscale_logstream_configuration}
*/
export class LogstreamConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_logstream_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogstreamConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogstreamConfiguration to import
  * @param importFromId The id of the existing LogstreamConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogstreamConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_logstream_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/logstream_configuration tailscale_logstream_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogstreamConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LogstreamConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'tailscale_logstream_configuration',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0',
        providerVersionConstraint: '0.24.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compressionFormat = config.compressionFormat;
    this._destinationType = config.destinationType;
    this._id = config.id;
    this._logType = config.logType;
    this._s3AccessKeyId = config.s3AccessKeyId;
    this._s3AuthenticationType = config.s3AuthenticationType;
    this._s3Bucket = config.s3Bucket;
    this._s3ExternalId = config.s3ExternalId;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._s3Region = config.s3Region;
    this._s3RoleArn = config.s3RoleArn;
    this._s3SecretAccessKey = config.s3SecretAccessKey;
    this._token = config.token;
    this._uploadPeriodMinutes = config.uploadPeriodMinutes;
    this._url = config.url;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // s3_access_key_id - computed: false, optional: true, required: false
  private _s3AccessKeyId?: string; 
  public get s3AccessKeyId() {
    return this.getStringAttribute('s3_access_key_id');
  }
  public set s3AccessKeyId(value: string) {
    this._s3AccessKeyId = value;
  }
  public resetS3AccessKeyId() {
    this._s3AccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessKeyIdInput() {
    return this._s3AccessKeyId;
  }

  // s3_authentication_type - computed: false, optional: true, required: false
  private _s3AuthenticationType?: string; 
  public get s3AuthenticationType() {
    return this.getStringAttribute('s3_authentication_type');
  }
  public set s3AuthenticationType(value: string) {
    this._s3AuthenticationType = value;
  }
  public resetS3AuthenticationType() {
    this._s3AuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AuthenticationTypeInput() {
    return this._s3AuthenticationType;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_external_id - computed: false, optional: true, required: false
  private _s3ExternalId?: string; 
  public get s3ExternalId() {
    return this.getStringAttribute('s3_external_id');
  }
  public set s3ExternalId(value: string) {
    this._s3ExternalId = value;
  }
  public resetS3ExternalId() {
    this._s3ExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExternalIdInput() {
    return this._s3ExternalId;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // s3_region - computed: false, optional: true, required: false
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  public resetS3Region() {
    this._s3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_role_arn - computed: false, optional: true, required: false
  private _s3RoleArn?: string; 
  public get s3RoleArn() {
    return this.getStringAttribute('s3_role_arn');
  }
  public set s3RoleArn(value: string) {
    this._s3RoleArn = value;
  }
  public resetS3RoleArn() {
    this._s3RoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RoleArnInput() {
    return this._s3RoleArn;
  }

  // s3_secret_access_key - computed: false, optional: true, required: false
  private _s3SecretAccessKey?: string; 
  public get s3SecretAccessKey() {
    return this.getStringAttribute('s3_secret_access_key');
  }
  public set s3SecretAccessKey(value: string) {
    this._s3SecretAccessKey = value;
  }
  public resetS3SecretAccessKey() {
    this._s3SecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretAccessKeyInput() {
    return this._s3SecretAccessKey;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // upload_period_minutes - computed: false, optional: true, required: false
  private _uploadPeriodMinutes?: number; 
  public get uploadPeriodMinutes() {
    return this.getNumberAttribute('upload_period_minutes');
  }
  public set uploadPeriodMinutes(value: number) {
    this._uploadPeriodMinutes = value;
  }
  public resetUploadPeriodMinutes() {
    this._uploadPeriodMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPeriodMinutesInput() {
    return this._uploadPeriodMinutes;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression_format: cdktf.stringToTerraform(this._compressionFormat),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      s3_access_key_id: cdktf.stringToTerraform(this._s3AccessKeyId),
      s3_authentication_type: cdktf.stringToTerraform(this._s3AuthenticationType),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_external_id: cdktf.stringToTerraform(this._s3ExternalId),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      s3_region: cdktf.stringToTerraform(this._s3Region),
      s3_role_arn: cdktf.stringToTerraform(this._s3RoleArn),
      s3_secret_access_key: cdktf.stringToTerraform(this._s3SecretAccessKey),
      token: cdktf.stringToTerraform(this._token),
      upload_period_minutes: cdktf.numberToTerraform(this._uploadPeriodMinutes),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression_format: {
        value: cdktf.stringToHclTerraform(this._compressionFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
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
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_access_key_id: {
        value: cdktf.stringToHclTerraform(this._s3AccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_authentication_type: {
        value: cdktf.stringToHclTerraform(this._s3AuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_external_id: {
        value: cdktf.stringToHclTerraform(this._s3ExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key_prefix: {
        value: cdktf.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_region: {
        value: cdktf.stringToHclTerraform(this._s3Region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_role_arn: {
        value: cdktf.stringToHclTerraform(this._s3RoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._s3SecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_period_minutes: {
        value: cdktf.numberToHclTerraform(this._uploadPeriodMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
