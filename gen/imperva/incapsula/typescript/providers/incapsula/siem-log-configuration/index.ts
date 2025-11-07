// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiemLogConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client account id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#account_id SiemLogConfiguration#account_id}
  */
  readonly accountId?: string;
  /**
  * True if the logs are compressed, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#compress_logs SiemLogConfiguration#compress_logs}
  */
  readonly compressLogs?: boolean | cdktf.IResolvable;
  /**
  * Name of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#configuration_name SiemLogConfiguration#configuration_name}
  */
  readonly configurationName: string;
  /**
  * The id of the connection for this log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#connection_id SiemLogConfiguration#connection_id}
  */
  readonly connectionId: string;
  /**
  * All datasets for the supported producers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#datasets SiemLogConfiguration#datasets}
  */
  readonly datasets: string[];
  /**
  * True if the connection is enabled, false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#enabled SiemLogConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The format of the logs of this log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#format SiemLogConfiguration#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#id SiemLogConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The default logs level of this log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#logs_level SiemLogConfiguration#logs_level}
  */
  readonly logsLevel?: string;
  /**
  * Type of the producer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#producer SiemLogConfiguration#producer}
  */
  readonly producer: string;
  /**
  * The public key of the log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#public_key SiemLogConfiguration#public_key}
  */
  readonly publicKey?: string;
  /**
  * The public key file name of the log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#public_key_file_name SiemLogConfiguration#public_key_file_name}
  */
  readonly publicKeyFileName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration incapsula_siem_log_configuration}
*/
export class SiemLogConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_siem_log_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiemLogConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiemLogConfiguration to import
  * @param importFromId The id of the existing SiemLogConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiemLogConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_siem_log_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_log_configuration incapsula_siem_log_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiemLogConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SiemLogConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_siem_log_configuration',
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
    this._compressLogs = config.compressLogs;
    this._configurationName = config.configurationName;
    this._connectionId = config.connectionId;
    this._datasets = config.datasets;
    this._enabled = config.enabled;
    this._format = config.format;
    this._id = config.id;
    this._logsLevel = config.logsLevel;
    this._producer = config.producer;
    this._publicKey = config.publicKey;
    this._publicKeyFileName = config.publicKeyFileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // compress_logs - computed: false, optional: true, required: false
  private _compressLogs?: boolean | cdktf.IResolvable; 
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
  }
  public set compressLogs(value: boolean | cdktf.IResolvable) {
    this._compressLogs = value;
  }
  public resetCompressLogs() {
    this._compressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressLogsInput() {
    return this._compressLogs;
  }

  // configuration_name - computed: false, optional: false, required: true
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // datasets - computed: false, optional: false, required: true
  private _datasets?: string[]; 
  public get datasets() {
    return this.getListAttribute('datasets');
  }
  public set datasets(value: string[]) {
    this._datasets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // format - computed: false, optional: true, required: false
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

  // logs_level - computed: false, optional: true, required: false
  private _logsLevel?: string; 
  public get logsLevel() {
    return this.getStringAttribute('logs_level');
  }
  public set logsLevel(value: string) {
    this._logsLevel = value;
  }
  public resetLogsLevel() {
    this._logsLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsLevelInput() {
    return this._logsLevel;
  }

  // producer - computed: false, optional: false, required: true
  private _producer?: string; 
  public get producer() {
    return this.getStringAttribute('producer');
  }
  public set producer(value: string) {
    this._producer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get producerInput() {
    return this._producer;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_key_file_name - computed: false, optional: true, required: false
  private _publicKeyFileName?: string; 
  public get publicKeyFileName() {
    return this.getStringAttribute('public_key_file_name');
  }
  public set publicKeyFileName(value: string) {
    this._publicKeyFileName = value;
  }
  public resetPublicKeyFileName() {
    this._publicKeyFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyFileNameInput() {
    return this._publicKeyFileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      compress_logs: cdktf.booleanToTerraform(this._compressLogs),
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      datasets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datasets),
      enabled: cdktf.booleanToTerraform(this._enabled),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      logs_level: cdktf.stringToTerraform(this._logsLevel),
      producer: cdktf.stringToTerraform(this._producer),
      public_key: cdktf.stringToTerraform(this._publicKey),
      public_key_file_name: cdktf.stringToTerraform(this._publicKeyFileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_logs: {
        value: cdktf.booleanToHclTerraform(this._compressLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._datasets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      logs_level: {
        value: cdktf.stringToHclTerraform(this._logsLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer: {
        value: cdktf.stringToHclTerraform(this._producer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_file_name: {
        value: cdktf.stringToHclTerraform(this._publicKeyFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
