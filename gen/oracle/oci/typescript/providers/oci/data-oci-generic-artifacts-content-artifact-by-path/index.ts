// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenericArtifactsContentArtifactByPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}
  */
  readonly artifactPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}
*/
export class DataOciGenericArtifactsContentArtifactByPath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generic_artifacts_content_artifact_by_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenericArtifactsContentArtifactByPath to import
  * @param importFromId The id of the existing DataOciGenericArtifactsContentArtifactByPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenericArtifactsContentArtifactByPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generic_artifacts_content_artifact_by_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenericArtifactsContentArtifactByPathConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenericArtifactsContentArtifactByPathConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generic_artifacts_content_artifact_by_path',
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
    this._artifactPath = config.artifactPath;
    this._repositoryId = config.repositoryId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_id - computed: true, optional: false, required: false
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }

  // artifact_path - computed: false, optional: false, required: true
  private _artifactPath?: string; 
  public get artifactPath() {
    return this.getStringAttribute('artifact_path');
  }
  public set artifactPath(value: string) {
    this._artifactPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactPathInput() {
    return this._artifactPath;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_path: cdktf.stringToTerraform(this._artifactPath),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_path: {
        value: cdktf.stringToHclTerraform(this._artifactPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
