// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/compatibility_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CompatibilityManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Repository Path on your local machine to your compatibility gpg file ie: /example/example.gpg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/compatibility_management#repository_path CompatibilityManagement#repository_path}
  */
  readonly repositoryPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/compatibility_management powerflex_compatibility_management}
*/
export class CompatibilityManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_compatibility_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CompatibilityManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CompatibilityManagement to import
  * @param importFromId The id of the existing CompatibilityManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/compatibility_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CompatibilityManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_compatibility_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/compatibility_management powerflex_compatibility_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CompatibilityManagementConfig
  */
  public constructor(scope: Construct, id: string, config: CompatibilityManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_compatibility_management',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._repositoryPath = config.repositoryPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // compatibility_data - computed: true, optional: false, required: false
  public get compatibilityData() {
    return this.getStringAttribute('compatibility_data');
  }

  // compatibility_data_bytes - computed: true, optional: false, required: false
  public get compatibilityDataBytes() {
    return this.getStringAttribute('compatibility_data_bytes');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      repository_path: cdktf.stringToTerraform(this._repositoryPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      repository_path: {
        value: cdktf.stringToHclTerraform(this._repositoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
