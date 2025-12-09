// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/virtual_hex_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryVirtualHexRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It cannot contain spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/virtual_hex_repository#key DataArtifactoryVirtualHexRepository#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/virtual_hex_repository artifactory_virtual_hex_repository}
*/
export class DataArtifactoryVirtualHexRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_virtual_hex_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryVirtualHexRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryVirtualHexRepository to import
  * @param importFromId The id of the existing DataArtifactoryVirtualHexRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/virtual_hex_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryVirtualHexRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_virtual_hex_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/virtual_hex_repository artifactory_virtual_hex_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryVirtualHexRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryVirtualHexRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_virtual_hex_repository',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excludes_pattern - computed: true, optional: false, required: false
  public get excludesPattern() {
    return this.getStringAttribute('excludes_pattern');
  }

  // hex_primary_keypair_ref - computed: true, optional: false, required: false
  public get hexPrimaryKeypairRef() {
    return this.getStringAttribute('hex_primary_keypair_ref');
  }

  // includes_pattern - computed: true, optional: false, required: false
  public get includesPattern() {
    return this.getStringAttribute('includes_pattern');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // project_environments - computed: true, optional: false, required: false
  public get projectEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('project_environments'));
  }

  // project_key - computed: true, optional: false, required: false
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }

  // repo_layout_ref - computed: true, optional: false, required: false
  public get repoLayoutRef() {
    return this.getStringAttribute('repo_layout_ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
