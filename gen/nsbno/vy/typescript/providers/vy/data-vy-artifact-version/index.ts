// https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/artifact_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVyArtifactVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application you want to find an artifact for. For S3 artifacts, this is the name of the application defined in `.deployment/config.yaml`. For ECR artifacts, this is the name of the ECR repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/artifact_version#application DataVyArtifactVersion#application}
  */
  readonly application: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/artifact_version vy_artifact_version}
*/
export class DataVyArtifactVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy_artifact_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVyArtifactVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVyArtifactVersion to import
  * @param importFromId The id of the existing DataVyArtifactVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/artifact_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVyArtifactVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy_artifact_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/artifact_version vy_artifact_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVyArtifactVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataVyArtifactVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'vy_artifact_version',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // store - computed: true, optional: false, required: false
  public get store() {
    return this.getStringAttribute('store');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
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
      application: cdktf.stringToTerraform(this._application),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
