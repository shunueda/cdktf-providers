// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafLogSetupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Numeric identifier of the account to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#account_id WafLogSetup#account_id}
  */
  readonly accountId: number;
  /**
  * A boolean flag to enable or disable WAF Logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#enabled WafLogSetup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#id WafLogSetup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * S3 access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#s3_access_key WafLogSetup#s3_access_key}
  */
  readonly s3AccessKey?: string;
  /**
  * S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#s3_bucket_name WafLogSetup#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * S3 secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#s3_secret_key WafLogSetup#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * The path to the directory on the SFTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#sftp_destination_folder WafLogSetup#sftp_destination_folder}
  */
  readonly sftpDestinationFolder?: string;
  /**
  * The IP address of your SFTP server.
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#sftp_host WafLogSetup#sftp_host}
  */
  readonly sftpHost?: string;
  /**
  * A corresponding password for the user account used to log in to the SFTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#sftp_password WafLogSetup#sftp_password}
  */
  readonly sftpPassword?: string;
  /**
  * A username that will be used to log in to the SFTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#sftp_user_name WafLogSetup#sftp_user_name}
  */
  readonly sftpUserName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup incapsula_waf_log_setup}
*/
export class WafLogSetup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_waf_log_setup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafLogSetup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafLogSetup to import
  * @param importFromId The id of the existing WafLogSetup that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafLogSetup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_waf_log_setup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_log_setup incapsula_waf_log_setup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafLogSetupConfig
  */
  public constructor(scope: Construct, id: string, config: WafLogSetupConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_waf_log_setup',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._s3AccessKey = config.s3AccessKey;
    this._s3BucketName = config.s3BucketName;
    this._s3SecretKey = config.s3SecretKey;
    this._sftpDestinationFolder = config.sftpDestinationFolder;
    this._sftpHost = config.sftpHost;
    this._sftpPassword = config.sftpPassword;
    this._sftpUserName = config.sftpUserName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // s3_access_key - computed: false, optional: true, required: false
  private _s3AccessKey?: string; 
  public get s3AccessKey() {
    return this.getStringAttribute('s3_access_key');
  }
  public set s3AccessKey(value: string) {
    this._s3AccessKey = value;
  }
  public resetS3AccessKey() {
    this._s3AccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessKeyInput() {
    return this._s3AccessKey;
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }

  // sftp_destination_folder - computed: false, optional: true, required: false
  private _sftpDestinationFolder?: string; 
  public get sftpDestinationFolder() {
    return this.getStringAttribute('sftp_destination_folder');
  }
  public set sftpDestinationFolder(value: string) {
    this._sftpDestinationFolder = value;
  }
  public resetSftpDestinationFolder() {
    this._sftpDestinationFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpDestinationFolderInput() {
    return this._sftpDestinationFolder;
  }

  // sftp_host - computed: false, optional: true, required: false
  private _sftpHost?: string; 
  public get sftpHost() {
    return this.getStringAttribute('sftp_host');
  }
  public set sftpHost(value: string) {
    this._sftpHost = value;
  }
  public resetSftpHost() {
    this._sftpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpHostInput() {
    return this._sftpHost;
  }

  // sftp_password - computed: false, optional: true, required: false
  private _sftpPassword?: string; 
  public get sftpPassword() {
    return this.getStringAttribute('sftp_password');
  }
  public set sftpPassword(value: string) {
    this._sftpPassword = value;
  }
  public resetSftpPassword() {
    this._sftpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPasswordInput() {
    return this._sftpPassword;
  }

  // sftp_user_name - computed: false, optional: true, required: false
  private _sftpUserName?: string; 
  public get sftpUserName() {
    return this.getStringAttribute('sftp_user_name');
  }
  public set sftpUserName(value: string) {
    this._sftpUserName = value;
  }
  public resetSftpUserName() {
    this._sftpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpUserNameInput() {
    return this._sftpUserName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      s3_access_key: cdktf.stringToTerraform(this._s3AccessKey),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_secret_key: cdktf.stringToTerraform(this._s3SecretKey),
      sftp_destination_folder: cdktf.stringToTerraform(this._sftpDestinationFolder),
      sftp_host: cdktf.stringToTerraform(this._sftpHost),
      sftp_password: cdktf.stringToTerraform(this._sftpPassword),
      sftp_user_name: cdktf.stringToTerraform(this._sftpUserName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_access_key: {
        value: cdktf.stringToHclTerraform(this._s3AccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_secret_key: {
        value: cdktf.stringToHclTerraform(this._s3SecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp_destination_folder: {
        value: cdktf.stringToHclTerraform(this._sftpDestinationFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp_host: {
        value: cdktf.stringToHclTerraform(this._sftpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp_password: {
        value: cdktf.stringToHclTerraform(this._sftpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp_user_name: {
        value: cdktf.stringToHclTerraform(this._sftpUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
