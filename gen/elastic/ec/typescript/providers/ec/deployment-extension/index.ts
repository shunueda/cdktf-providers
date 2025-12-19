// https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#description DeploymentExtension#description}
  */
  readonly description?: string;
  /**
  * The URL to download the extension archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#download_url DeploymentExtension#download_url}
  */
  readonly downloadUrl?: string;
  /**
  * Extension type. Must be `bundle` or `plugin`. A `bundle` will usually contain a dictionary or script, where a `plugin` is compiled from source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#extension_type DeploymentExtension#extension_type}
  */
  readonly extensionType: string;
  /**
  * Hash value of the file. Triggers re-uploading the file on change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#file_hash DeploymentExtension#file_hash}
  */
  readonly fileHash?: string;
  /**
  * Local file path to upload as the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#file_path DeploymentExtension#file_path}
  */
  readonly filePath?: string;
  /**
  * Name of the extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#name DeploymentExtension#name}
  */
  readonly name: string;
  /**
  * Elastic stack version. A full version (e.g 8.7.0) should be set for plugins. A wildcard (e.g 8.*) may be used for bundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#version DeploymentExtension#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension ec_deployment_extension}
*/
export class DeploymentExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployment_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentExtension to import
  * @param importFromId The id of the existing DeploymentExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployment_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/resources/deployment_extension ec_deployment_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_deployment_extension',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.4',
        providerVersionConstraint: '0.12.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._downloadUrl = config.downloadUrl;
    this._extensionType = config.extensionType;
    this._fileHash = config.fileHash;
    this._filePath = config.filePath;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // download_url - computed: true, optional: true, required: false
  private _downloadUrl?: string; 
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
  }
  public set downloadUrl(value: string) {
    this._downloadUrl = value;
  }
  public resetDownloadUrl() {
    this._downloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadUrlInput() {
    return this._downloadUrl;
  }

  // extension_type - computed: false, optional: false, required: true
  private _extensionType?: string; 
  public get extensionType() {
    return this.getStringAttribute('extension_type');
  }
  public set extensionType(value: string) {
    this._extensionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTypeInput() {
    return this._extensionType;
  }

  // file_hash - computed: false, optional: true, required: false
  private _fileHash?: string; 
  public get fileHash() {
    return this.getStringAttribute('file_hash');
  }
  public set fileHash(value: string) {
    this._fileHash = value;
  }
  public resetFileHash() {
    this._fileHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHashInput() {
    return this._fileHash;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
      description: cdktf.stringToTerraform(this._description),
      download_url: cdktf.stringToTerraform(this._downloadUrl),
      extension_type: cdktf.stringToTerraform(this._extensionType),
      file_hash: cdktf.stringToTerraform(this._fileHash),
      file_path: cdktf.stringToTerraform(this._filePath),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_url: {
        value: cdktf.stringToHclTerraform(this._downloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_type: {
        value: cdktf.stringToHclTerraform(this._extensionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_hash: {
        value: cdktf.stringToHclTerraform(this._fileHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
