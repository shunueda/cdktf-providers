// https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default node executor plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#default_node_executor_plugin Project#default_node_executor_plugin}
  */
  readonly defaultNodeExecutorPlugin?: string;
  /**
  * Default node file copier plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#default_node_file_copier_plugin Project#default_node_file_copier_plugin}
  */
  readonly defaultNodeFileCopierPlugin?: string;
  /**
  * Description of the project to be shown in the Rundeck UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Additional raw configuration parameters to include in the project configuration, with dots replaced with slashes in the key names due to limitations in Terraform's config language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#extra_config Project#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Unique name for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Resource model sources configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#resource_model_source Project#resource_model_source}
  */
  readonly resourceModelSource: ProjectResourceModelSource[] | cdktf.IResolvable;
  /**
  * SSH authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#ssh_authentication_type Project#ssh_authentication_type}
  */
  readonly sshAuthenticationType?: string;
  /**
  * Path to SSH key file on filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#ssh_key_file_path Project#ssh_key_file_path}
  */
  readonly sshKeyFilePath?: string;
  /**
  * Path to SSH key in Rundeck key storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#ssh_key_storage_path Project#ssh_key_storage_path}
  */
  readonly sshKeyStoragePath?: string;
}
export interface ProjectResourceModelSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#config Project#config}
  */
  readonly config: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#type Project#type}
  */
  readonly type: string;
}

export function projectResourceModelSourceToTerraform(struct?: ProjectResourceModelSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectResourceModelSourceToHclTerraform(struct?: ProjectResourceModelSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectResourceModelSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectResourceModelSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectResourceModelSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProjectResourceModelSourceList extends cdktf.ComplexList {
  public internalValue? : ProjectResourceModelSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectResourceModelSourceOutputReference {
    return new ProjectResourceModelSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project rundeck_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/project rundeck_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_project',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultNodeExecutorPlugin = config.defaultNodeExecutorPlugin;
    this._defaultNodeFileCopierPlugin = config.defaultNodeFileCopierPlugin;
    this._description = config.description;
    this._extraConfig = config.extraConfig;
    this._name = config.name;
    this._resourceModelSource.internalValue = config.resourceModelSource;
    this._sshAuthenticationType = config.sshAuthenticationType;
    this._sshKeyFilePath = config.sshKeyFilePath;
    this._sshKeyStoragePath = config.sshKeyStoragePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_node_executor_plugin - computed: true, optional: true, required: false
  private _defaultNodeExecutorPlugin?: string; 
  public get defaultNodeExecutorPlugin() {
    return this.getStringAttribute('default_node_executor_plugin');
  }
  public set defaultNodeExecutorPlugin(value: string) {
    this._defaultNodeExecutorPlugin = value;
  }
  public resetDefaultNodeExecutorPlugin() {
    this._defaultNodeExecutorPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodeExecutorPluginInput() {
    return this._defaultNodeExecutorPlugin;
  }

  // default_node_file_copier_plugin - computed: true, optional: true, required: false
  private _defaultNodeFileCopierPlugin?: string; 
  public get defaultNodeFileCopierPlugin() {
    return this.getStringAttribute('default_node_file_copier_plugin');
  }
  public set defaultNodeFileCopierPlugin(value: string) {
    this._defaultNodeFileCopierPlugin = value;
  }
  public resetDefaultNodeFileCopierPlugin() {
    this._defaultNodeFileCopierPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodeFileCopierPluginInput() {
    return this._defaultNodeFileCopierPlugin;
  }

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

  // extra_config - computed: true, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_model_source - computed: false, optional: false, required: true
  private _resourceModelSource = new ProjectResourceModelSourceList(this, "resource_model_source", false);
  public get resourceModelSource() {
    return this._resourceModelSource;
  }
  public putResourceModelSource(value: ProjectResourceModelSource[] | cdktf.IResolvable) {
    this._resourceModelSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceModelSourceInput() {
    return this._resourceModelSource.internalValue;
  }

  // ssh_authentication_type - computed: true, optional: true, required: false
  private _sshAuthenticationType?: string; 
  public get sshAuthenticationType() {
    return this.getStringAttribute('ssh_authentication_type');
  }
  public set sshAuthenticationType(value: string) {
    this._sshAuthenticationType = value;
  }
  public resetSshAuthenticationType() {
    this._sshAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthenticationTypeInput() {
    return this._sshAuthenticationType;
  }

  // ssh_key_file_path - computed: false, optional: true, required: false
  private _sshKeyFilePath?: string; 
  public get sshKeyFilePath() {
    return this.getStringAttribute('ssh_key_file_path');
  }
  public set sshKeyFilePath(value: string) {
    this._sshKeyFilePath = value;
  }
  public resetSshKeyFilePath() {
    this._sshKeyFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyFilePathInput() {
    return this._sshKeyFilePath;
  }

  // ssh_key_storage_path - computed: false, optional: true, required: false
  private _sshKeyStoragePath?: string; 
  public get sshKeyStoragePath() {
    return this.getStringAttribute('ssh_key_storage_path');
  }
  public set sshKeyStoragePath(value: string) {
    this._sshKeyStoragePath = value;
  }
  public resetSshKeyStoragePath() {
    this._sshKeyStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyStoragePathInput() {
    return this._sshKeyStoragePath;
  }

  // ui_url - computed: true, optional: false, required: false
  public get uiUrl() {
    return this.getStringAttribute('ui_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_node_executor_plugin: cdktf.stringToTerraform(this._defaultNodeExecutorPlugin),
      default_node_file_copier_plugin: cdktf.stringToTerraform(this._defaultNodeFileCopierPlugin),
      description: cdktf.stringToTerraform(this._description),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      name: cdktf.stringToTerraform(this._name),
      resource_model_source: cdktf.listMapper(projectResourceModelSourceToTerraform, false)(this._resourceModelSource.internalValue),
      ssh_authentication_type: cdktf.stringToTerraform(this._sshAuthenticationType),
      ssh_key_file_path: cdktf.stringToTerraform(this._sshKeyFilePath),
      ssh_key_storage_path: cdktf.stringToTerraform(this._sshKeyStoragePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_node_executor_plugin: {
        value: cdktf.stringToHclTerraform(this._defaultNodeExecutorPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_node_file_copier_plugin: {
        value: cdktf.stringToHclTerraform(this._defaultNodeFileCopierPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_model_source: {
        value: cdktf.listMapperHcl(projectResourceModelSourceToHclTerraform, false)(this._resourceModelSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectResourceModelSourceList",
      },
      ssh_authentication_type: {
        value: cdktf.stringToHclTerraform(this._sshAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_file_path: {
        value: cdktf.stringToHclTerraform(this._sshKeyFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_storage_path: {
        value: cdktf.stringToHclTerraform(this._sshKeyStoragePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
