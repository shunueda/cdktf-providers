// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersion#compute_global_image_capability_schema_id}
  */
  readonly computeGlobalImageCapabilitySchemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version#compute_global_image_capability_schema_version_name DataOciCoreComputeGlobalImageCapabilitySchemasVersion#compute_global_image_capability_schema_version_name}
  */
  readonly computeGlobalImageCapabilitySchemaVersionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version#id DataOciCoreComputeGlobalImageCapabilitySchemasVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version oci_core_compute_global_image_capability_schemas_version}
*/
export class DataOciCoreComputeGlobalImageCapabilitySchemasVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_global_image_capability_schemas_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemasVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreComputeGlobalImageCapabilitySchemasVersion to import
  * @param importFromId The id of the existing DataOciCoreComputeGlobalImageCapabilitySchemasVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreComputeGlobalImageCapabilitySchemasVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_global_image_capability_schemas_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_compute_global_image_capability_schemas_version oci_core_compute_global_image_capability_schemas_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeGlobalImageCapabilitySchemasVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGlobalImageCapabilitySchemasVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_global_image_capability_schemas_version',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeGlobalImageCapabilitySchemaId = config.computeGlobalImageCapabilitySchemaId;
    this._computeGlobalImageCapabilitySchemaVersionName = config.computeGlobalImageCapabilitySchemaVersionName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_global_image_capability_schema_id - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaId?: string; 
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }
  public set computeGlobalImageCapabilitySchemaId(value: string) {
    this._computeGlobalImageCapabilitySchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGlobalImageCapabilitySchemaIdInput() {
    return this._computeGlobalImageCapabilitySchemaId;
  }

  // compute_global_image_capability_schema_version_name - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaVersionName?: string; 
  public get computeGlobalImageCapabilitySchemaVersionName() {
    return this.getStringAttribute('compute_global_image_capability_schema_version_name');
  }
  public set computeGlobalImageCapabilitySchemaVersionName(value: string) {
    this._computeGlobalImageCapabilitySchemaVersionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGlobalImageCapabilitySchemaVersionNameInput() {
    return this._computeGlobalImageCapabilitySchemaVersionName;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
      compute_global_image_capability_schema_id: cdktf.stringToTerraform(this._computeGlobalImageCapabilitySchemaId),
      compute_global_image_capability_schema_version_name: cdktf.stringToTerraform(this._computeGlobalImageCapabilitySchemaVersionName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_global_image_capability_schema_id: {
        value: cdktf.stringToHclTerraform(this._computeGlobalImageCapabilitySchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_global_image_capability_schema_version_name: {
        value: cdktf.stringToHclTerraform(this._computeGlobalImageCapabilitySchemaVersionName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
