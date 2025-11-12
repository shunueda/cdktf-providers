// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutoBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#address SystemAutoBackup#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#config_password SystemAutoBackup#config_password}
  */
  readonly configPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#folder SystemAutoBackup#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#id SystemAutoBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#overwrite_config SystemAutoBackup#overwrite_config}
  */
  readonly overwriteConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#password SystemAutoBackup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#port SystemAutoBackup#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#scheduled_backup_day SystemAutoBackup#scheduled_backup_day}
  */
  readonly scheduledBackupDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#scheduled_backup_frequency SystemAutoBackup#scheduled_backup_frequency}
  */
  readonly scheduledBackupFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#scheduled_backup_status SystemAutoBackup#scheduled_backup_status}
  */
  readonly scheduledBackupStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#scheduled_backup_time SystemAutoBackup#scheduled_backup_time}
  */
  readonly scheduledBackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#storage SystemAutoBackup#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#username SystemAutoBackup#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup fortiadc_system_auto_backup}
*/
export class SystemAutoBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_auto_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutoBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutoBackup to import
  * @param importFromId The id of the existing SystemAutoBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutoBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_auto_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_auto_backup fortiadc_system_auto_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutoBackupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutoBackupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_auto_backup',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._configPassword = config.configPassword;
    this._folder = config.folder;
    this._id = config.id;
    this._overwriteConfig = config.overwriteConfig;
    this._password = config.password;
    this._port = config.port;
    this._scheduledBackupDay = config.scheduledBackupDay;
    this._scheduledBackupFrequency = config.scheduledBackupFrequency;
    this._scheduledBackupStatus = config.scheduledBackupStatus;
    this._scheduledBackupTime = config.scheduledBackupTime;
    this._storage = config.storage;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // config_password - computed: true, optional: true, required: false
  private _configPassword?: string; 
  public get configPassword() {
    return this.getStringAttribute('config_password');
  }
  public set configPassword(value: string) {
    this._configPassword = value;
  }
  public resetConfigPassword() {
    this._configPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPasswordInput() {
    return this._configPassword;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // overwrite_config - computed: true, optional: true, required: false
  private _overwriteConfig?: string; 
  public get overwriteConfig() {
    return this.getStringAttribute('overwrite_config');
  }
  public set overwriteConfig(value: string) {
    this._overwriteConfig = value;
  }
  public resetOverwriteConfig() {
    this._overwriteConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteConfigInput() {
    return this._overwriteConfig;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheduled_backup_day - computed: true, optional: true, required: false
  private _scheduledBackupDay?: string; 
  public get scheduledBackupDay() {
    return this.getStringAttribute('scheduled_backup_day');
  }
  public set scheduledBackupDay(value: string) {
    this._scheduledBackupDay = value;
  }
  public resetScheduledBackupDay() {
    this._scheduledBackupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupDayInput() {
    return this._scheduledBackupDay;
  }

  // scheduled_backup_frequency - computed: true, optional: true, required: false
  private _scheduledBackupFrequency?: string; 
  public get scheduledBackupFrequency() {
    return this.getStringAttribute('scheduled_backup_frequency');
  }
  public set scheduledBackupFrequency(value: string) {
    this._scheduledBackupFrequency = value;
  }
  public resetScheduledBackupFrequency() {
    this._scheduledBackupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupFrequencyInput() {
    return this._scheduledBackupFrequency;
  }

  // scheduled_backup_status - computed: true, optional: true, required: false
  private _scheduledBackupStatus?: string; 
  public get scheduledBackupStatus() {
    return this.getStringAttribute('scheduled_backup_status');
  }
  public set scheduledBackupStatus(value: string) {
    this._scheduledBackupStatus = value;
  }
  public resetScheduledBackupStatus() {
    this._scheduledBackupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupStatusInput() {
    return this._scheduledBackupStatus;
  }

  // scheduled_backup_time - computed: true, optional: true, required: false
  private _scheduledBackupTime?: string; 
  public get scheduledBackupTime() {
    return this.getStringAttribute('scheduled_backup_time');
  }
  public set scheduledBackupTime(value: string) {
    this._scheduledBackupTime = value;
  }
  public resetScheduledBackupTime() {
    this._scheduledBackupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupTimeInput() {
    return this._scheduledBackupTime;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      config_password: cdktf.stringToTerraform(this._configPassword),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      overwrite_config: cdktf.stringToTerraform(this._overwriteConfig),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      scheduled_backup_day: cdktf.stringToTerraform(this._scheduledBackupDay),
      scheduled_backup_frequency: cdktf.stringToTerraform(this._scheduledBackupFrequency),
      scheduled_backup_status: cdktf.stringToTerraform(this._scheduledBackupStatus),
      scheduled_backup_time: cdktf.stringToTerraform(this._scheduledBackupTime),
      storage: cdktf.stringToTerraform(this._storage),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_password: {
        value: cdktf.stringToHclTerraform(this._configPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      overwrite_config: {
        value: cdktf.stringToHclTerraform(this._overwriteConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_backup_day: {
        value: cdktf.stringToHclTerraform(this._scheduledBackupDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_backup_frequency: {
        value: cdktf.stringToHclTerraform(this._scheduledBackupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_backup_status: {
        value: cdktf.stringToHclTerraform(this._scheduledBackupStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_backup_time: {
        value: cdktf.stringToHclTerraform(this._scheduledBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
