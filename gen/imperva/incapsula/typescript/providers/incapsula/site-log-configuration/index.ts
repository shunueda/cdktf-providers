// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteLogConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data region to use. Options are `APAC`, `AU`, `EU`, and `US`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#data_storage_region SiteLogConfiguration#data_storage_region}
  */
  readonly dataStorageRegion?: string;
  /**
  * Specify the hash salt (masking setting), required if hashing is enabled. Maximum length of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#hash_salt SiteLogConfiguration#hash_salt}
  */
  readonly hashSalt?: string;
  /**
  * Specify if hashing (masking setting) should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#hashing_enabled SiteLogConfiguration#hashing_enabled}
  */
  readonly hashingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#id SiteLogConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The log level. Options are `full`, `security`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#log_level SiteLogConfiguration#log_level}
  */
  readonly logLevel?: string;
  /**
  * Available only for Enterprise Plan customers that purchased the Logs Integration SKU. Numeric identifier of the account that purchased the logs integration SKU and which collects the logs. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#logs_account_id SiteLogConfiguration#logs_account_id}
  */
  readonly logsAccountId?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#site_id SiteLogConfiguration#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration incapsula_site_log_configuration}
*/
export class SiteLogConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_site_log_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteLogConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteLogConfiguration to import
  * @param importFromId The id of the existing SiteLogConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteLogConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_site_log_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_log_configuration incapsula_site_log_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteLogConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SiteLogConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_site_log_configuration',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataStorageRegion = config.dataStorageRegion;
    this._hashSalt = config.hashSalt;
    this._hashingEnabled = config.hashingEnabled;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._logsAccountId = config.logsAccountId;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_storage_region - computed: true, optional: true, required: false
  private _dataStorageRegion?: string; 
  public get dataStorageRegion() {
    return this.getStringAttribute('data_storage_region');
  }
  public set dataStorageRegion(value: string) {
    this._dataStorageRegion = value;
  }
  public resetDataStorageRegion() {
    this._dataStorageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageRegionInput() {
    return this._dataStorageRegion;
  }

  // hash_salt - computed: true, optional: true, required: false
  private _hashSalt?: string; 
  public get hashSalt() {
    return this.getStringAttribute('hash_salt');
  }
  public set hashSalt(value: string) {
    this._hashSalt = value;
  }
  public resetHashSalt() {
    this._hashSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSaltInput() {
    return this._hashSalt;
  }

  // hashing_enabled - computed: true, optional: true, required: false
  private _hashingEnabled?: boolean | cdktf.IResolvable; 
  public get hashingEnabled() {
    return this.getBooleanAttribute('hashing_enabled');
  }
  public set hashingEnabled(value: boolean | cdktf.IResolvable) {
    this._hashingEnabled = value;
  }
  public resetHashingEnabled() {
    this._hashingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingEnabledInput() {
    return this._hashingEnabled;
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // logs_account_id - computed: true, optional: true, required: false
  private _logsAccountId?: string; 
  public get logsAccountId() {
    return this.getStringAttribute('logs_account_id');
  }
  public set logsAccountId(value: string) {
    this._logsAccountId = value;
  }
  public resetLogsAccountId() {
    this._logsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAccountIdInput() {
    return this._logsAccountId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_storage_region: cdktf.stringToTerraform(this._dataStorageRegion),
      hash_salt: cdktf.stringToTerraform(this._hashSalt),
      hashing_enabled: cdktf.booleanToTerraform(this._hashingEnabled),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      logs_account_id: cdktf.stringToTerraform(this._logsAccountId),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_storage_region: {
        value: cdktf.stringToHclTerraform(this._dataStorageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_salt: {
        value: cdktf.stringToHclTerraform(this._hashSalt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashing_enabled: {
        value: cdktf.booleanToHclTerraform(this._hashingEnabled),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_account_id: {
        value: cdktf.stringToHclTerraform(this._logsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
