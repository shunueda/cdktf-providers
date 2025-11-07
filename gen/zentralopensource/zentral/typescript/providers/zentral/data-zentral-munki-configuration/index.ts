// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/munki_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMunkiConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the Munki configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/munki_configuration#id DataZentralMunkiConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the Munki configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/munki_configuration#name DataZentralMunkiConfiguration#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/munki_configuration zentral_munki_configuration}
*/
export class DataZentralMunkiConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_munki_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMunkiConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMunkiConfiguration to import
  * @param importFromId The id of the existing DataZentralMunkiConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/munki_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMunkiConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_munki_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/data-sources/munki_configuration zentral_munki_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMunkiConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMunkiConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_munki_configuration',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64'
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

  // auto_failed_install_incidents - computed: true, optional: false, required: false
  public get autoFailedInstallIncidents() {
    return this.getBooleanAttribute('auto_failed_install_incidents');
  }

  // auto_reinstall_incidents - computed: true, optional: false, required: false
  public get autoReinstallIncidents() {
    return this.getBooleanAttribute('auto_reinstall_incidents');
  }

  // collected_condition_keys - computed: true, optional: false, required: false
  public get collectedConditionKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('collected_condition_keys'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // inventory_apps_full_info_shard - computed: true, optional: false, required: false
  public get inventoryAppsFullInfoShard() {
    return this.getNumberAttribute('inventory_apps_full_info_shard');
  }

  // managed_installs_sync_interval_days - computed: true, optional: false, required: false
  public get managedInstallsSyncIntervalDays() {
    return this.getNumberAttribute('managed_installs_sync_interval_days');
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

  // principal_user_detection_domains - computed: true, optional: false, required: false
  public get principalUserDetectionDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('principal_user_detection_domains'));
  }

  // principal_user_detection_sources - computed: true, optional: false, required: false
  public get principalUserDetectionSources() {
    return this.getListAttribute('principal_user_detection_sources');
  }

  // script_checks_run_interval_seconds - computed: true, optional: false, required: false
  public get scriptChecksRunIntervalSeconds() {
    return this.getNumberAttribute('script_checks_run_interval_seconds');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
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
