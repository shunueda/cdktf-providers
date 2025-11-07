// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/artifacts_generic_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciArtifactsGenericArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/artifacts_generic_artifact#artifact_id DataOciArtifactsGenericArtifact#artifact_id}
  */
  readonly artifactId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/artifacts_generic_artifact oci_artifacts_generic_artifact}
*/
export class DataOciArtifactsGenericArtifact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_artifacts_generic_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciArtifactsGenericArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciArtifactsGenericArtifact to import
  * @param importFromId The id of the existing DataOciArtifactsGenericArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/artifacts_generic_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciArtifactsGenericArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_artifacts_generic_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/artifacts_generic_artifact oci_artifacts_generic_artifact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciArtifactsGenericArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciArtifactsGenericArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_artifacts_generic_artifact',
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
    this._artifactId = config.artifactId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // artifact_path - computed: true, optional: false, required: false
  public get artifactPath() {
    return this.getStringAttribute('artifact_path');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_id: cdktf.stringToTerraform(this._artifactId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_id: {
        value: cdktf.stringToHclTerraform(this._artifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
