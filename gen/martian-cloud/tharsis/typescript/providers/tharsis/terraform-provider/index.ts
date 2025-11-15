// https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TerraformProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the group where this Terraform provider resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider#group_path TerraformProvider#group_path}
  */
  readonly groupPath: string;
  /**
  * The name of the Terraform provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider#name TerraformProvider#name}
  */
  readonly name: string;
  /**
  * Whether this Terraform provider is hidden from other top-level groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider#private TerraformProvider#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * The repository URL where this Terraform provider can be found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider#repository_url TerraformProvider#repository_url}
  */
  readonly repositoryUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider tharsis_terraform_provider}
*/
export class TerraformProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_terraform_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TerraformProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TerraformProvider to import
  * @param importFromId The id of the existing TerraformProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TerraformProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_terraform_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/terraform_provider tharsis_terraform_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TerraformProviderConfig
  */
  public constructor(scope: Construct, id: string, config: TerraformProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_terraform_provider',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupPath = config.groupPath;
    this._name = config.name;
    this._private = config.private;
    this._repositoryUrl = config.repositoryUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // registry_namespace - computed: true, optional: false, required: false
  public get registryNamespace() {
    return this.getStringAttribute('registry_namespace');
  }

  // repository_url - computed: false, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_path: cdktf.stringToTerraform(this._groupPath),
      name: cdktf.stringToTerraform(this._name),
      private: cdktf.booleanToTerraform(this._private),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
