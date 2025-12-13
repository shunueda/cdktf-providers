// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MunkiConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, incidents will be managed automatically when package failed installs are observed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#auto_failed_install_incidents MunkiConfiguration#auto_failed_install_incidents}
  */
  readonly autoFailedInstallIncidents?: boolean | cdktf.IResolvable;
  /**
  * If `true`, incidents will be managed automatically when package reinstalls are observed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#auto_reinstall_incidents MunkiConfiguration#auto_reinstall_incidents}
  */
  readonly autoReinstallIncidents?: boolean | cdktf.IResolvable;
  /**
  * Set of the condition keys to collect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#collected_condition_keys MunkiConfiguration#collected_condition_keys}
  */
  readonly collectedConditionKeys?: string[];
  /**
  * Description of the Munki configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#description MunkiConfiguration#description}
  */
  readonly description?: string;
  /**
  * Percentage of machines configured to collect the full inventory apps information. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#inventory_apps_full_info_shard MunkiConfiguration#inventory_apps_full_info_shard}
  */
  readonly inventoryAppsFullInfoShard?: number;
  /**
  * Interval in days between full managed installs sync. Defaults to 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#managed_installs_sync_interval_days MunkiConfiguration#managed_installs_sync_interval_days}
  */
  readonly managedInstallsSyncIntervalDays?: number;
  /**
  * Name of the Munki configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#name MunkiConfiguration#name}
  */
  readonly name: string;
  /**
  * Set of principal user detection domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#principal_user_detection_domains MunkiConfiguration#principal_user_detection_domains}
  */
  readonly principalUserDetectionDomains?: string[];
  /**
  * List of principal user detection sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#principal_user_detection_sources MunkiConfiguration#principal_user_detection_sources}
  */
  readonly principalUserDetectionSources?: string[];
  /**
  * Interval in seconds between script checks runs. Defaults to 86400 seconds (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#script_checks_run_interval_seconds MunkiConfiguration#script_checks_run_interval_seconds}
  */
  readonly scriptChecksRunIntervalSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration zentral_munki_configuration}
*/
export class MunkiConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_munki_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MunkiConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MunkiConfiguration to import
  * @param importFromId The id of the existing MunkiConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MunkiConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_munki_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/munki_configuration zentral_munki_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MunkiConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MunkiConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_munki_configuration',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoFailedInstallIncidents = config.autoFailedInstallIncidents;
    this._autoReinstallIncidents = config.autoReinstallIncidents;
    this._collectedConditionKeys = config.collectedConditionKeys;
    this._description = config.description;
    this._inventoryAppsFullInfoShard = config.inventoryAppsFullInfoShard;
    this._managedInstallsSyncIntervalDays = config.managedInstallsSyncIntervalDays;
    this._name = config.name;
    this._principalUserDetectionDomains = config.principalUserDetectionDomains;
    this._principalUserDetectionSources = config.principalUserDetectionSources;
    this._scriptChecksRunIntervalSeconds = config.scriptChecksRunIntervalSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_failed_install_incidents - computed: true, optional: true, required: false
  private _autoFailedInstallIncidents?: boolean | cdktf.IResolvable; 
  public get autoFailedInstallIncidents() {
    return this.getBooleanAttribute('auto_failed_install_incidents');
  }
  public set autoFailedInstallIncidents(value: boolean | cdktf.IResolvable) {
    this._autoFailedInstallIncidents = value;
  }
  public resetAutoFailedInstallIncidents() {
    this._autoFailedInstallIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFailedInstallIncidentsInput() {
    return this._autoFailedInstallIncidents;
  }

  // auto_reinstall_incidents - computed: true, optional: true, required: false
  private _autoReinstallIncidents?: boolean | cdktf.IResolvable; 
  public get autoReinstallIncidents() {
    return this.getBooleanAttribute('auto_reinstall_incidents');
  }
  public set autoReinstallIncidents(value: boolean | cdktf.IResolvable) {
    this._autoReinstallIncidents = value;
  }
  public resetAutoReinstallIncidents() {
    this._autoReinstallIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReinstallIncidentsInput() {
    return this._autoReinstallIncidents;
  }

  // collected_condition_keys - computed: true, optional: true, required: false
  private _collectedConditionKeys?: string[]; 
  public get collectedConditionKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('collected_condition_keys'));
  }
  public set collectedConditionKeys(value: string[]) {
    this._collectedConditionKeys = value;
  }
  public resetCollectedConditionKeys() {
    this._collectedConditionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectedConditionKeysInput() {
    return this._collectedConditionKeys;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inventory_apps_full_info_shard - computed: true, optional: true, required: false
  private _inventoryAppsFullInfoShard?: number; 
  public get inventoryAppsFullInfoShard() {
    return this.getNumberAttribute('inventory_apps_full_info_shard');
  }
  public set inventoryAppsFullInfoShard(value: number) {
    this._inventoryAppsFullInfoShard = value;
  }
  public resetInventoryAppsFullInfoShard() {
    this._inventoryAppsFullInfoShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryAppsFullInfoShardInput() {
    return this._inventoryAppsFullInfoShard;
  }

  // managed_installs_sync_interval_days - computed: true, optional: true, required: false
  private _managedInstallsSyncIntervalDays?: number; 
  public get managedInstallsSyncIntervalDays() {
    return this.getNumberAttribute('managed_installs_sync_interval_days');
  }
  public set managedInstallsSyncIntervalDays(value: number) {
    this._managedInstallsSyncIntervalDays = value;
  }
  public resetManagedInstallsSyncIntervalDays() {
    this._managedInstallsSyncIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstallsSyncIntervalDaysInput() {
    return this._managedInstallsSyncIntervalDays;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // principal_user_detection_domains - computed: true, optional: true, required: false
  private _principalUserDetectionDomains?: string[]; 
  public get principalUserDetectionDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('principal_user_detection_domains'));
  }
  public set principalUserDetectionDomains(value: string[]) {
    this._principalUserDetectionDomains = value;
  }
  public resetPrincipalUserDetectionDomains() {
    this._principalUserDetectionDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalUserDetectionDomainsInput() {
    return this._principalUserDetectionDomains;
  }

  // principal_user_detection_sources - computed: true, optional: true, required: false
  private _principalUserDetectionSources?: string[]; 
  public get principalUserDetectionSources() {
    return this.getListAttribute('principal_user_detection_sources');
  }
  public set principalUserDetectionSources(value: string[]) {
    this._principalUserDetectionSources = value;
  }
  public resetPrincipalUserDetectionSources() {
    this._principalUserDetectionSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalUserDetectionSourcesInput() {
    return this._principalUserDetectionSources;
  }

  // script_checks_run_interval_seconds - computed: true, optional: true, required: false
  private _scriptChecksRunIntervalSeconds?: number; 
  public get scriptChecksRunIntervalSeconds() {
    return this.getNumberAttribute('script_checks_run_interval_seconds');
  }
  public set scriptChecksRunIntervalSeconds(value: number) {
    this._scriptChecksRunIntervalSeconds = value;
  }
  public resetScriptChecksRunIntervalSeconds() {
    this._scriptChecksRunIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptChecksRunIntervalSecondsInput() {
    return this._scriptChecksRunIntervalSeconds;
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
      auto_failed_install_incidents: cdktf.booleanToTerraform(this._autoFailedInstallIncidents),
      auto_reinstall_incidents: cdktf.booleanToTerraform(this._autoReinstallIncidents),
      collected_condition_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collectedConditionKeys),
      description: cdktf.stringToTerraform(this._description),
      inventory_apps_full_info_shard: cdktf.numberToTerraform(this._inventoryAppsFullInfoShard),
      managed_installs_sync_interval_days: cdktf.numberToTerraform(this._managedInstallsSyncIntervalDays),
      name: cdktf.stringToTerraform(this._name),
      principal_user_detection_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principalUserDetectionDomains),
      principal_user_detection_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principalUserDetectionSources),
      script_checks_run_interval_seconds: cdktf.numberToTerraform(this._scriptChecksRunIntervalSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_failed_install_incidents: {
        value: cdktf.booleanToHclTerraform(this._autoFailedInstallIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_reinstall_incidents: {
        value: cdktf.booleanToHclTerraform(this._autoReinstallIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collected_condition_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collectedConditionKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_apps_full_info_shard: {
        value: cdktf.numberToHclTerraform(this._inventoryAppsFullInfoShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      managed_installs_sync_interval_days: {
        value: cdktf.numberToHclTerraform(this._managedInstallsSyncIntervalDays),
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
      principal_user_detection_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principalUserDetectionDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      principal_user_detection_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principalUserDetectionSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      script_checks_run_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._scriptChecksRunIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
