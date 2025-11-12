// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/mdm_filevault_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMdmFilevaultConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the MDM FileVault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/mdm_filevault_config#id DataZentralMdmFilevaultConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the FileVault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/mdm_filevault_config#name DataZentralMdmFilevaultConfig#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/mdm_filevault_config zentral_mdm_filevault_config}
*/
export class DataZentralMdmFilevaultConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_filevault_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMdmFilevaultConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMdmFilevaultConfig to import
  * @param importFromId The id of the existing DataZentralMdmFilevaultConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/mdm_filevault_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMdmFilevaultConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_filevault_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/mdm_filevault_config zentral_mdm_filevault_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMdmFilevaultConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMdmFilevaultConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_filevault_config',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at_login_only - computed: true, optional: false, required: false
  public get atLoginOnly() {
    return this.getBooleanAttribute('at_login_only');
  }

  // bypass_attempts - computed: true, optional: false, required: false
  public get bypassAttempts() {
    return this.getNumberAttribute('bypass_attempts');
  }

  // destroy_key_on_standby - computed: true, optional: false, required: false
  public get destroyKeyOnStandby() {
    return this.getBooleanAttribute('destroy_key_on_standby');
  }

  // escrow_location_display_name - computed: true, optional: false, required: false
  public get escrowLocationDisplayName() {
    return this.getStringAttribute('escrow_location_display_name');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prk_rotation_interval_days - computed: true, optional: false, required: false
  public get prkRotationIntervalDays() {
    return this.getNumberAttribute('prk_rotation_interval_days');
  }

  // show_recovery_key - computed: true, optional: false, required: false
  public get showRecoveryKey() {
    return this.getBooleanAttribute('show_recovery_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
