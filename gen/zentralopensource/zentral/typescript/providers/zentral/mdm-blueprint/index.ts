// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible values: `NO`, `MANAGED_ONLY`, `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#collect_apps MdmBlueprint#collect_apps}
  */
  readonly collectApps?: string;
  /**
  * Possible values: `NO`, `MANAGED_ONLY`, `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#collect_certificates MdmBlueprint#collect_certificates}
  */
  readonly collectCertificates?: string;
  /**
  * Possible values: `NO`, `MANAGED_ONLY`, `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#collect_profiles MdmBlueprint#collect_profiles}
  */
  readonly collectProfiles?: string;
  /**
  * The `ID` of the default apps & books location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#default_location_id MdmBlueprint#default_location_id}
  */
  readonly defaultLocationId?: number;
  /**
  * The `ID` of the attached FileVault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#filevault_config_id MdmBlueprint#filevault_config_id}
  */
  readonly filevaultConfigId?: number;
  /**
  * In seconds, the minimum interval between two inventory collection. Minimum 4h, maximum 7d, default 1d.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#inventory_interval MdmBlueprint#inventory_interval}
  */
  readonly inventoryInterval?: number;
  /**
  * If `true`, legady profiles are distributed via DDM. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#legacy_profiles_via_ddm MdmBlueprint#legacy_profiles_via_ddm}
  */
  readonly legacyProfilesViaDdm?: boolean | cdktf.IResolvable;
  /**
  * Name of the blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#name MdmBlueprint#name}
  */
  readonly name: string;
  /**
  * The `ID` of the attached recovery password configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#recovery_password_config_id MdmBlueprint#recovery_password_config_id}
  */
  readonly recoveryPasswordConfigId?: number;
  /**
  * The `ID`s of the software update enforcements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#software_update_enforcement_ids MdmBlueprint#software_update_enforcement_ids}
  */
  readonly softwareUpdateEnforcementIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint zentral_mdm_blueprint}
*/
export class MdmBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmBlueprint to import
  * @param importFromId The id of the existing MdmBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_blueprint zentral_mdm_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: MdmBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_blueprint',
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
    this._collectApps = config.collectApps;
    this._collectCertificates = config.collectCertificates;
    this._collectProfiles = config.collectProfiles;
    this._defaultLocationId = config.defaultLocationId;
    this._filevaultConfigId = config.filevaultConfigId;
    this._inventoryInterval = config.inventoryInterval;
    this._legacyProfilesViaDdm = config.legacyProfilesViaDdm;
    this._name = config.name;
    this._recoveryPasswordConfigId = config.recoveryPasswordConfigId;
    this._softwareUpdateEnforcementIds = config.softwareUpdateEnforcementIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collect_apps - computed: true, optional: true, required: false
  private _collectApps?: string; 
  public get collectApps() {
    return this.getStringAttribute('collect_apps');
  }
  public set collectApps(value: string) {
    this._collectApps = value;
  }
  public resetCollectApps() {
    this._collectApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectAppsInput() {
    return this._collectApps;
  }

  // collect_certificates - computed: true, optional: true, required: false
  private _collectCertificates?: string; 
  public get collectCertificates() {
    return this.getStringAttribute('collect_certificates');
  }
  public set collectCertificates(value: string) {
    this._collectCertificates = value;
  }
  public resetCollectCertificates() {
    this._collectCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCertificatesInput() {
    return this._collectCertificates;
  }

  // collect_profiles - computed: true, optional: true, required: false
  private _collectProfiles?: string; 
  public get collectProfiles() {
    return this.getStringAttribute('collect_profiles');
  }
  public set collectProfiles(value: string) {
    this._collectProfiles = value;
  }
  public resetCollectProfiles() {
    this._collectProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectProfilesInput() {
    return this._collectProfiles;
  }

  // default_location_id - computed: false, optional: true, required: false
  private _defaultLocationId?: number; 
  public get defaultLocationId() {
    return this.getNumberAttribute('default_location_id');
  }
  public set defaultLocationId(value: number) {
    this._defaultLocationId = value;
  }
  public resetDefaultLocationId() {
    this._defaultLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocationIdInput() {
    return this._defaultLocationId;
  }

  // filevault_config_id - computed: false, optional: true, required: false
  private _filevaultConfigId?: number; 
  public get filevaultConfigId() {
    return this.getNumberAttribute('filevault_config_id');
  }
  public set filevaultConfigId(value: number) {
    this._filevaultConfigId = value;
  }
  public resetFilevaultConfigId() {
    this._filevaultConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filevaultConfigIdInput() {
    return this._filevaultConfigId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inventory_interval - computed: true, optional: true, required: false
  private _inventoryInterval?: number; 
  public get inventoryInterval() {
    return this.getNumberAttribute('inventory_interval');
  }
  public set inventoryInterval(value: number) {
    this._inventoryInterval = value;
  }
  public resetInventoryInterval() {
    this._inventoryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIntervalInput() {
    return this._inventoryInterval;
  }

  // legacy_profiles_via_ddm - computed: true, optional: true, required: false
  private _legacyProfilesViaDdm?: boolean | cdktf.IResolvable; 
  public get legacyProfilesViaDdm() {
    return this.getBooleanAttribute('legacy_profiles_via_ddm');
  }
  public set legacyProfilesViaDdm(value: boolean | cdktf.IResolvable) {
    this._legacyProfilesViaDdm = value;
  }
  public resetLegacyProfilesViaDdm() {
    this._legacyProfilesViaDdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyProfilesViaDdmInput() {
    return this._legacyProfilesViaDdm;
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

  // recovery_password_config_id - computed: false, optional: true, required: false
  private _recoveryPasswordConfigId?: number; 
  public get recoveryPasswordConfigId() {
    return this.getNumberAttribute('recovery_password_config_id');
  }
  public set recoveryPasswordConfigId(value: number) {
    this._recoveryPasswordConfigId = value;
  }
  public resetRecoveryPasswordConfigId() {
    this._recoveryPasswordConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPasswordConfigIdInput() {
    return this._recoveryPasswordConfigId;
  }

  // software_update_enforcement_ids - computed: true, optional: true, required: false
  private _softwareUpdateEnforcementIds?: number[]; 
  public get softwareUpdateEnforcementIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('software_update_enforcement_ids')));
  }
  public set softwareUpdateEnforcementIds(value: number[]) {
    this._softwareUpdateEnforcementIds = value;
  }
  public resetSoftwareUpdateEnforcementIds() {
    this._softwareUpdateEnforcementIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareUpdateEnforcementIdsInput() {
    return this._softwareUpdateEnforcementIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collect_apps: cdktf.stringToTerraform(this._collectApps),
      collect_certificates: cdktf.stringToTerraform(this._collectCertificates),
      collect_profiles: cdktf.stringToTerraform(this._collectProfiles),
      default_location_id: cdktf.numberToTerraform(this._defaultLocationId),
      filevault_config_id: cdktf.numberToTerraform(this._filevaultConfigId),
      inventory_interval: cdktf.numberToTerraform(this._inventoryInterval),
      legacy_profiles_via_ddm: cdktf.booleanToTerraform(this._legacyProfilesViaDdm),
      name: cdktf.stringToTerraform(this._name),
      recovery_password_config_id: cdktf.numberToTerraform(this._recoveryPasswordConfigId),
      software_update_enforcement_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._softwareUpdateEnforcementIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collect_apps: {
        value: cdktf.stringToHclTerraform(this._collectApps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_certificates: {
        value: cdktf.stringToHclTerraform(this._collectCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_profiles: {
        value: cdktf.stringToHclTerraform(this._collectProfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_location_id: {
        value: cdktf.numberToHclTerraform(this._defaultLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filevault_config_id: {
        value: cdktf.numberToHclTerraform(this._filevaultConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inventory_interval: {
        value: cdktf.numberToHclTerraform(this._inventoryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      legacy_profiles_via_ddm: {
        value: cdktf.booleanToHclTerraform(this._legacyProfilesViaDdm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_password_config_id: {
        value: cdktf.numberToHclTerraform(this._recoveryPasswordConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_update_enforcement_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._softwareUpdateEnforcementIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
