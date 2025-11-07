// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryLayoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Please refer to: [Path Patterns](https://www.jfrog.com/confluence/display/JFROG/Repository+Layouts#RepositoryLayouts-ModulesandPathPatternsusedbyRepositoryLayouts) in the Artifactory Wiki documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#artifact_path_pattern RepositoryLayout#artifact_path_pattern}
  */
  readonly artifactPathPattern: string;
  /**
  * Please refer to: [Descriptor Path Patterns](https://www.jfrog.com/confluence/display/JFROG/Repository+Layouts#RepositoryLayouts-DescriptorPathPatterns) in the Artifactory Wiki documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#descriptor_path_pattern RepositoryLayout#descriptor_path_pattern}
  */
  readonly descriptorPathPattern?: string;
  /**
  * When set, `descriptor_path_pattern` will be used. Default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#distinctive_descriptor_path_pattern RepositoryLayout#distinctive_descriptor_path_pattern}
  */
  readonly distinctiveDescriptorPathPattern?: boolean | cdktf.IResolvable;
  /**
  * A regular expression matching the integration revision string appearing in a file name as part of the artifact's path. For example, `SNAPSHOT|(?:(?:[0-9]{8}.[0-9]{6})-(?:[0-9]+))`, in Maven. Note! Take care not to introduce any regexp capturing groups within this expression. If not applicable use `.*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#file_integration_revision_regexp RepositoryLayout#file_integration_revision_regexp}
  */
  readonly fileIntegrationRevisionRegexp: string;
  /**
  * A regular expression matching the integration revision string appearing in a folder name as part of the artifact's path. For example, `SNAPSHOT`, in Maven. Note! Take care not to introduce any regexp capturing groups within this expression. If not applicable use `.*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#folder_integration_revision_regexp RepositoryLayout#folder_integration_revision_regexp}
  */
  readonly folderIntegrationRevisionRegexp: string;
  /**
  * Layout name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#name RepositoryLayout#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout artifactory_repository_layout}
*/
export class RepositoryLayout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_repository_layout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryLayout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryLayout to import
  * @param importFromId The id of the existing RepositoryLayout that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryLayout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_repository_layout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/repository_layout artifactory_repository_layout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryLayoutConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryLayoutConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_repository_layout',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactPathPattern = config.artifactPathPattern;
    this._descriptorPathPattern = config.descriptorPathPattern;
    this._distinctiveDescriptorPathPattern = config.distinctiveDescriptorPathPattern;
    this._fileIntegrationRevisionRegexp = config.fileIntegrationRevisionRegexp;
    this._folderIntegrationRevisionRegexp = config.folderIntegrationRevisionRegexp;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_path_pattern - computed: false, optional: false, required: true
  private _artifactPathPattern?: string; 
  public get artifactPathPattern() {
    return this.getStringAttribute('artifact_path_pattern');
  }
  public set artifactPathPattern(value: string) {
    this._artifactPathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactPathPatternInput() {
    return this._artifactPathPattern;
  }

  // descriptor_path_pattern - computed: true, optional: true, required: false
  private _descriptorPathPattern?: string; 
  public get descriptorPathPattern() {
    return this.getStringAttribute('descriptor_path_pattern');
  }
  public set descriptorPathPattern(value: string) {
    this._descriptorPathPattern = value;
  }
  public resetDescriptorPathPattern() {
    this._descriptorPathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorPathPatternInput() {
    return this._descriptorPathPattern;
  }

  // distinctive_descriptor_path_pattern - computed: true, optional: true, required: false
  private _distinctiveDescriptorPathPattern?: boolean | cdktf.IResolvable; 
  public get distinctiveDescriptorPathPattern() {
    return this.getBooleanAttribute('distinctive_descriptor_path_pattern');
  }
  public set distinctiveDescriptorPathPattern(value: boolean | cdktf.IResolvable) {
    this._distinctiveDescriptorPathPattern = value;
  }
  public resetDistinctiveDescriptorPathPattern() {
    this._distinctiveDescriptorPathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctiveDescriptorPathPatternInput() {
    return this._distinctiveDescriptorPathPattern;
  }

  // file_integration_revision_regexp - computed: false, optional: false, required: true
  private _fileIntegrationRevisionRegexp?: string; 
  public get fileIntegrationRevisionRegexp() {
    return this.getStringAttribute('file_integration_revision_regexp');
  }
  public set fileIntegrationRevisionRegexp(value: string) {
    this._fileIntegrationRevisionRegexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIntegrationRevisionRegexpInput() {
    return this._fileIntegrationRevisionRegexp;
  }

  // folder_integration_revision_regexp - computed: false, optional: false, required: true
  private _folderIntegrationRevisionRegexp?: string; 
  public get folderIntegrationRevisionRegexp() {
    return this.getStringAttribute('folder_integration_revision_regexp');
  }
  public set folderIntegrationRevisionRegexp(value: string) {
    this._folderIntegrationRevisionRegexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIntegrationRevisionRegexpInput() {
    return this._folderIntegrationRevisionRegexp;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_path_pattern: cdktf.stringToTerraform(this._artifactPathPattern),
      descriptor_path_pattern: cdktf.stringToTerraform(this._descriptorPathPattern),
      distinctive_descriptor_path_pattern: cdktf.booleanToTerraform(this._distinctiveDescriptorPathPattern),
      file_integration_revision_regexp: cdktf.stringToTerraform(this._fileIntegrationRevisionRegexp),
      folder_integration_revision_regexp: cdktf.stringToTerraform(this._folderIntegrationRevisionRegexp),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_path_pattern: {
        value: cdktf.stringToHclTerraform(this._artifactPathPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      descriptor_path_pattern: {
        value: cdktf.stringToHclTerraform(this._descriptorPathPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distinctive_descriptor_path_pattern: {
        value: cdktf.booleanToHclTerraform(this._distinctiveDescriptorPathPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_integration_revision_regexp: {
        value: cdktf.stringToHclTerraform(this._fileIntegrationRevisionRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_integration_revision_regexp: {
        value: cdktf.stringToHclTerraform(this._folderIntegrationRevisionRegexp),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
