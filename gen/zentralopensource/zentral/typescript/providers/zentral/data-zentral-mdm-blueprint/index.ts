// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/data-sources/mdm_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMdmBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the MDM blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/data-sources/mdm_blueprint#id DataZentralMdmBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/data-sources/mdm_blueprint#name DataZentralMdmBlueprint#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/data-sources/mdm_blueprint zentral_mdm_blueprint}
*/
export class DataZentralMdmBlueprint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMdmBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMdmBlueprint to import
  * @param importFromId The id of the existing DataZentralMdmBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/data-sources/mdm_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMdmBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/data-sources/mdm_blueprint zentral_mdm_blueprint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMdmBlueprintConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMdmBlueprintConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_blueprint',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collect_apps - computed: true, optional: false, required: false
  public get collectApps() {
    return this.getStringAttribute('collect_apps');
  }

  // collect_certificates - computed: true, optional: false, required: false
  public get collectCertificates() {
    return this.getStringAttribute('collect_certificates');
  }

  // collect_profiles - computed: true, optional: false, required: false
  public get collectProfiles() {
    return this.getStringAttribute('collect_profiles');
  }

  // default_location_id - computed: true, optional: false, required: false
  public get defaultLocationId() {
    return this.getNumberAttribute('default_location_id');
  }

  // filevault_config_id - computed: true, optional: false, required: false
  public get filevaultConfigId() {
    return this.getNumberAttribute('filevault_config_id');
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

  // inventory_interval - computed: true, optional: false, required: false
  public get inventoryInterval() {
    return this.getNumberAttribute('inventory_interval');
  }

  // legacy_profiles_via_ddm - computed: true, optional: false, required: false
  public get legacyProfilesViaDdm() {
    return this.getBooleanAttribute('legacy_profiles_via_ddm');
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

  // recovery_password_config_id - computed: true, optional: false, required: false
  public get recoveryPasswordConfigId() {
    return this.getNumberAttribute('recovery_password_config_id');
  }

  // software_update_enforcement_ids - computed: true, optional: false, required: false
  public get softwareUpdateEnforcementIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('software_update_enforcement_ids')));
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
