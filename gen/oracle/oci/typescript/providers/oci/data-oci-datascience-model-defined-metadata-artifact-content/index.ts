// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceModelDefinedMetadataArtifactContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content#id DataOciDatascienceModelDefinedMetadataArtifactContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content#metadatum_key_name DataOciDatascienceModelDefinedMetadataArtifactContent#metadatum_key_name}
  */
  readonly metadatumKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content#model_id DataOciDatascienceModelDefinedMetadataArtifactContent#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content#range DataOciDatascienceModelDefinedMetadataArtifactContent#range}
  */
  readonly range?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content oci_datascience_model_defined_metadata_artifact_content}
*/
export class DataOciDatascienceModelDefinedMetadataArtifactContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_defined_metadata_artifact_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatascienceModelDefinedMetadataArtifactContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatascienceModelDefinedMetadataArtifactContent to import
  * @param importFromId The id of the existing DataOciDatascienceModelDefinedMetadataArtifactContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatascienceModelDefinedMetadataArtifactContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model_defined_metadata_artifact_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_model_defined_metadata_artifact_content oci_datascience_model_defined_metadata_artifact_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceModelDefinedMetadataArtifactContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceModelDefinedMetadataArtifactContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_defined_metadata_artifact_content',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._metadatumKeyName = config.metadatumKeyName;
    this._modelId = config.modelId;
    this._range = config.range;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadatum_key_name - computed: false, optional: false, required: true
  private _metadatumKeyName?: string; 
  public get metadatumKeyName() {
    return this.getStringAttribute('metadatum_key_name');
  }
  public set metadatumKeyName(value: string) {
    this._metadatumKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadatumKeyNameInput() {
    return this._metadatumKeyName;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadatum_key_name: cdktf.stringToTerraform(this._metadatumKeyName),
      model_id: cdktf.stringToTerraform(this._modelId),
      range: cdktf.stringToTerraform(this._range),
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
      metadatum_key_name: {
        value: cdktf.stringToHclTerraform(this._metadatumKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.stringToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
