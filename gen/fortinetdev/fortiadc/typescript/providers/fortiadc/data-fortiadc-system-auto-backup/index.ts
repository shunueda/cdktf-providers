// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_auto_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemAutoBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_auto_backup#id DataFortiadcSystemAutoBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_auto_backup fortiadc_system_auto_backup}
*/
export class DataFortiadcSystemAutoBackup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_auto_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemAutoBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemAutoBackup to import
  * @param importFromId The id of the existing DataFortiadcSystemAutoBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_auto_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemAutoBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_auto_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_auto_backup fortiadc_system_auto_backup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemAutoBackupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemAutoBackupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_auto_backup',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // config_password - computed: true, optional: false, required: false
  public get configPassword() {
    return this.getStringAttribute('config_password');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
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

  // overwrite_config - computed: true, optional: false, required: false
  public get overwriteConfig() {
    return this.getStringAttribute('overwrite_config');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheduled_backup_day - computed: true, optional: false, required: false
  public get scheduledBackupDay() {
    return this.getStringAttribute('scheduled_backup_day');
  }

  // scheduled_backup_frequency - computed: true, optional: false, required: false
  public get scheduledBackupFrequency() {
    return this.getStringAttribute('scheduled_backup_frequency');
  }

  // scheduled_backup_status - computed: true, optional: false, required: false
  public get scheduledBackupStatus() {
    return this.getStringAttribute('scheduled_backup_status');
  }

  // scheduled_backup_time - computed: true, optional: false, required: false
  public get scheduledBackupTime() {
    return this.getStringAttribute('scheduled_backup_time');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getStringAttribute('storage');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
