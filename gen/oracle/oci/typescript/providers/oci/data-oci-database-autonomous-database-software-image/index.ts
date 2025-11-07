// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_software_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabaseSoftwareImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_software_image#autonomous_database_software_image_id DataOciDatabaseAutonomousDatabaseSoftwareImage#autonomous_database_software_image_id}
  */
  readonly autonomousDatabaseSoftwareImageId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_software_image oci_database_autonomous_database_software_image}
*/
export class DataOciDatabaseAutonomousDatabaseSoftwareImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_database_software_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseSoftwareImage to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousDatabaseSoftwareImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_software_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseSoftwareImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_database_software_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_software_image oci_database_autonomous_database_software_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousDatabaseSoftwareImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseSoftwareImageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_software_image',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousDatabaseSoftwareImageId = config.autonomousDatabaseSoftwareImageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_software_image_id - computed: false, optional: false, required: true
  private _autonomousDatabaseSoftwareImageId?: string; 
  public get autonomousDatabaseSoftwareImageId() {
    return this.getStringAttribute('autonomous_database_software_image_id');
  }
  public set autonomousDatabaseSoftwareImageId(value: string) {
    this._autonomousDatabaseSoftwareImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseSoftwareImageIdInput() {
    return this._autonomousDatabaseSoftwareImageId;
  }

  // autonomous_dsi_one_off_patches - computed: true, optional: false, required: false
  public get autonomousDsiOneOffPatches() {
    return this.getListAttribute('autonomous_dsi_one_off_patches');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_shape_family - computed: true, optional: false, required: false
  public get imageShapeFamily() {
    return this.getStringAttribute('image_shape_family');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // release_update - computed: true, optional: false, required: false
  public get releaseUpdate() {
    return this.getStringAttribute('release_update');
  }

  // source_cdb_id - computed: true, optional: false, required: false
  public get sourceCdbId() {
    return this.getStringAttribute('source_cdb_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_software_image_id: cdktf.stringToTerraform(this._autonomousDatabaseSoftwareImageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_database_software_image_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseSoftwareImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
