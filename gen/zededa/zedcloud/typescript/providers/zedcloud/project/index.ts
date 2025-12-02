// generated from terraform resource schema

import { ProjectCloudPolicyList, 
ProjectModulePolicyList, 
ProjectRevisionList, 
ProjectAppPolicy, 
projectAppPolicyToTerraform, 
projectAppPolicyToHclTerraform, 
ProjectAppPolicyList, 
ProjectAttestationPolicy, 
projectAttestationPolicyToTerraform, 
projectAttestationPolicyToHclTerraform, 
ProjectAttestationPolicyList, 
ProjectConfigurationLockPolicy, 
projectConfigurationLockPolicyToTerraform, 
projectConfigurationLockPolicyToHclTerraform, 
ProjectConfigurationLockPolicyList, 
ProjectEdgeviewPolicy, 
projectEdgeviewPolicyToTerraform, 
projectEdgeviewPolicyToHclTerraform, 
ProjectEdgeviewPolicyList, 
ProjectLocalOperatorConsolePolicy, 
projectLocalOperatorConsolePolicyToTerraform, 
projectLocalOperatorConsolePolicyToHclTerraform, 
ProjectLocalOperatorConsolePolicyList, 
ProjectNetworkPolicy, 
projectNetworkPolicyToTerraform, 
projectNetworkPolicyToHclTerraform, 
ProjectNetworkPolicyList, 
ProjectTagLevelSettings, 
projectTagLevelSettingsToTerraform, 
projectTagLevelSettingsToHclTerraform, 
ProjectTagLevelSettingsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description of the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * User defined name of the resource group, unique across the enterprise. Once resource group is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#tags Project#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the resource group. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#title Project#title}
  */
  readonly title: string;
  /**
  * Resource group type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#type Project#type}
  */
  readonly type: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#app_policy Project#app_policy}
  */
  readonly appPolicy?: ProjectAppPolicy[] | cdktf.IResolvable;
  /**
  * attestation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#attestation_policy Project#attestation_policy}
  */
  readonly attestationPolicy?: ProjectAttestationPolicy[] | cdktf.IResolvable;
  /**
  * configuration_lock_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#configuration_lock_policy Project#configuration_lock_policy}
  */
  readonly configurationLockPolicy?: ProjectConfigurationLockPolicy[] | cdktf.IResolvable;
  /**
  * edgeview_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#edgeview_policy Project#edgeview_policy}
  */
  readonly edgeviewPolicy?: ProjectEdgeviewPolicy[] | cdktf.IResolvable;
  /**
  * local_operator_console_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#local_operator_console_policy Project#local_operator_console_policy}
  */
  readonly localOperatorConsolePolicy?: ProjectLocalOperatorConsolePolicy[] | cdktf.IResolvable;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#network_policy Project#network_policy}
  */
  readonly networkPolicy?: ProjectNetworkPolicy[] | cdktf.IResolvable;
  /**
  * tag_level_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#tag_level_settings Project#tag_level_settings}
  */
  readonly tagLevelSettings?: ProjectTagLevelSettings[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project zedcloud_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/project zedcloud_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_project',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
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
    this._name = config.name;
    this._tags = config.tags;
    this._title = config.title;
    this._type = config.type;
    this._appPolicy.internalValue = config.appPolicy;
    this._attestationPolicy.internalValue = config.attestationPolicy;
    this._configurationLockPolicy.internalValue = config.configurationLockPolicy;
    this._edgeviewPolicy.internalValue = config.edgeviewPolicy;
    this._localOperatorConsolePolicy.internalValue = config.localOperatorConsolePolicy;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._tagLevelSettings.internalValue = config.tagLevelSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attr - computed: true, optional: false, required: false
  private _attr = new cdktf.StringMap(this, "attr");
  public get attr() {
    return this._attr;
  }

  // cloud_policy - computed: true, optional: false, required: false
  private _cloudPolicy = new ProjectCloudPolicyList(this, "cloud_policy", false);
  public get cloudPolicy() {
    return this._cloudPolicy;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module_policy - computed: true, optional: false, required: false
  private _modulePolicy = new ProjectModulePolicyList(this, "module_policy", false);
  public get modulePolicy() {
    return this._modulePolicy;
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

  // numdevices - computed: true, optional: false, required: false
  public get numdevices() {
    return this.getNumberAttribute('numdevices');
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new ProjectRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // app_policy - computed: false, optional: true, required: false
  private _appPolicy = new ProjectAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: ProjectAppPolicy[] | cdktf.IResolvable) {
    this._appPolicy.internalValue = value;
  }
  public resetAppPolicy() {
    this._appPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPolicyInput() {
    return this._appPolicy.internalValue;
  }

  // attestation_policy - computed: false, optional: true, required: false
  private _attestationPolicy = new ProjectAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }
  public putAttestationPolicy(value: ProjectAttestationPolicy[] | cdktf.IResolvable) {
    this._attestationPolicy.internalValue = value;
  }
  public resetAttestationPolicy() {
    this._attestationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationPolicyInput() {
    return this._attestationPolicy.internalValue;
  }

  // configuration_lock_policy - computed: false, optional: true, required: false
  private _configurationLockPolicy = new ProjectConfigurationLockPolicyList(this, "configuration_lock_policy", false);
  public get configurationLockPolicy() {
    return this._configurationLockPolicy;
  }
  public putConfigurationLockPolicy(value: ProjectConfigurationLockPolicy[] | cdktf.IResolvable) {
    this._configurationLockPolicy.internalValue = value;
  }
  public resetConfigurationLockPolicy() {
    this._configurationLockPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationLockPolicyInput() {
    return this._configurationLockPolicy.internalValue;
  }

  // edgeview_policy - computed: false, optional: true, required: false
  private _edgeviewPolicy = new ProjectEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }
  public putEdgeviewPolicy(value: ProjectEdgeviewPolicy[] | cdktf.IResolvable) {
    this._edgeviewPolicy.internalValue = value;
  }
  public resetEdgeviewPolicy() {
    this._edgeviewPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewPolicyInput() {
    return this._edgeviewPolicy.internalValue;
  }

  // local_operator_console_policy - computed: false, optional: true, required: false
  private _localOperatorConsolePolicy = new ProjectLocalOperatorConsolePolicyList(this, "local_operator_console_policy", false);
  public get localOperatorConsolePolicy() {
    return this._localOperatorConsolePolicy;
  }
  public putLocalOperatorConsolePolicy(value: ProjectLocalOperatorConsolePolicy[] | cdktf.IResolvable) {
    this._localOperatorConsolePolicy.internalValue = value;
  }
  public resetLocalOperatorConsolePolicy() {
    this._localOperatorConsolePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOperatorConsolePolicyInput() {
    return this._localOperatorConsolePolicy.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new ProjectNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: ProjectNetworkPolicy[] | cdktf.IResolvable) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // tag_level_settings - computed: false, optional: true, required: false
  private _tagLevelSettings = new ProjectTagLevelSettingsList(this, "tag_level_settings", false);
  public get tagLevelSettings() {
    return this._tagLevelSettings;
  }
  public putTagLevelSettings(value: ProjectTagLevelSettings[] | cdktf.IResolvable) {
    this._tagLevelSettings.internalValue = value;
  }
  public resetTagLevelSettings() {
    this._tagLevelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagLevelSettingsInput() {
    return this._tagLevelSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      app_policy: cdktf.listMapper(projectAppPolicyToTerraform, true)(this._appPolicy.internalValue),
      attestation_policy: cdktf.listMapper(projectAttestationPolicyToTerraform, true)(this._attestationPolicy.internalValue),
      configuration_lock_policy: cdktf.listMapper(projectConfigurationLockPolicyToTerraform, true)(this._configurationLockPolicy.internalValue),
      edgeview_policy: cdktf.listMapper(projectEdgeviewPolicyToTerraform, true)(this._edgeviewPolicy.internalValue),
      local_operator_console_policy: cdktf.listMapper(projectLocalOperatorConsolePolicyToTerraform, true)(this._localOperatorConsolePolicy.internalValue),
      network_policy: cdktf.listMapper(projectNetworkPolicyToTerraform, true)(this._networkPolicy.internalValue),
      tag_level_settings: cdktf.listMapper(projectTagLevelSettingsToTerraform, true)(this._tagLevelSettings.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_policy: {
        value: cdktf.listMapperHcl(projectAppPolicyToHclTerraform, true)(this._appPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectAppPolicyList",
      },
      attestation_policy: {
        value: cdktf.listMapperHcl(projectAttestationPolicyToHclTerraform, true)(this._attestationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectAttestationPolicyList",
      },
      configuration_lock_policy: {
        value: cdktf.listMapperHcl(projectConfigurationLockPolicyToHclTerraform, true)(this._configurationLockPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectConfigurationLockPolicyList",
      },
      edgeview_policy: {
        value: cdktf.listMapperHcl(projectEdgeviewPolicyToHclTerraform, true)(this._edgeviewPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectEdgeviewPolicyList",
      },
      local_operator_console_policy: {
        value: cdktf.listMapperHcl(projectLocalOperatorConsolePolicyToHclTerraform, true)(this._localOperatorConsolePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectLocalOperatorConsolePolicyList",
      },
      network_policy: {
        value: cdktf.listMapperHcl(projectNetworkPolicyToHclTerraform, true)(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectNetworkPolicyList",
      },
      tag_level_settings: {
        value: cdktf.listMapperHcl(projectTagLevelSettingsToHclTerraform, true)(this._tagLevelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectTagLevelSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
