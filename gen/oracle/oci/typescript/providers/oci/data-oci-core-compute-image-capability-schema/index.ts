// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_image_capability_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeImageCapabilitySchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}
  */
  readonly computeImageCapabilitySchemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}
  */
  readonly isMergeEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_image_capability_schema oci_core_compute_image_capability_schema}
*/
export class DataOciCoreComputeImageCapabilitySchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_image_capability_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreComputeImageCapabilitySchema to import
  * @param importFromId The id of the existing DataOciCoreComputeImageCapabilitySchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_image_capability_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreComputeImageCapabilitySchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_image_capability_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_image_capability_schema oci_core_compute_image_capability_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeImageCapabilitySchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeImageCapabilitySchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_image_capability_schema',
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
    this._computeImageCapabilitySchemaId = config.computeImageCapabilitySchemaId;
    this._isMergeEnabled = config.isMergeEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_global_image_capability_schema_id - computed: true, optional: false, required: false
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }

  // compute_global_image_capability_schema_version_name - computed: true, optional: false, required: false
  public get computeGlobalImageCapabilitySchemaVersionName() {
    return this.getStringAttribute('compute_global_image_capability_schema_version_name');
  }

  // compute_image_capability_schema_id - computed: false, optional: false, required: true
  private _computeImageCapabilitySchemaId?: string; 
  public get computeImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_image_capability_schema_id');
  }
  public set computeImageCapabilitySchemaId(value: string) {
    this._computeImageCapabilitySchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeImageCapabilitySchemaIdInput() {
    return this._computeImageCapabilitySchemaId;
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // is_merge_enabled - computed: false, optional: true, required: false
  private _isMergeEnabled?: string; 
  public get isMergeEnabled() {
    return this.getStringAttribute('is_merge_enabled');
  }
  public set isMergeEnabled(value: string) {
    this._isMergeEnabled = value;
  }
  public resetIsMergeEnabled() {
    this._isMergeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMergeEnabledInput() {
    return this._isMergeEnabled;
  }

  // schema_data - computed: true, optional: false, required: false
  private _schemaData = new cdktf.StringMap(this, "schema_data");
  public get schemaData() {
    return this._schemaData;
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
      compute_image_capability_schema_id: cdktf.stringToTerraform(this._computeImageCapabilitySchemaId),
      is_merge_enabled: cdktf.stringToTerraform(this._isMergeEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_image_capability_schema_id: {
        value: cdktf.stringToHclTerraform(this._computeImageCapabilitySchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_merge_enabled: {
        value: cdktf.stringToHclTerraform(this._isMergeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
