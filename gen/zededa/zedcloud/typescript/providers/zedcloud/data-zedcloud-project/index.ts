// generated from terraform resource schema

import { DataZedcloudProjectCloudPolicyList, 
DataZedcloudProjectModulePolicyList, 
DataZedcloudProjectRevisionList, 
DataZedcloudProjectAppPolicy, 
dataZedcloudProjectAppPolicyToTerraform, 
dataZedcloudProjectAppPolicyToHclTerraform, 
DataZedcloudProjectAppPolicyList, 
DataZedcloudProjectAttestationPolicy, 
dataZedcloudProjectAttestationPolicyToTerraform, 
dataZedcloudProjectAttestationPolicyToHclTerraform, 
DataZedcloudProjectAttestationPolicyList, 
DataZedcloudProjectConfigurationLockPolicy, 
dataZedcloudProjectConfigurationLockPolicyToTerraform, 
dataZedcloudProjectConfigurationLockPolicyToHclTerraform, 
DataZedcloudProjectConfigurationLockPolicyList, 
DataZedcloudProjectEdgeviewPolicy, 
dataZedcloudProjectEdgeviewPolicyToTerraform, 
dataZedcloudProjectEdgeviewPolicyToHclTerraform, 
DataZedcloudProjectEdgeviewPolicyList, 
DataZedcloudProjectLocalOperatorConsolePolicy, 
dataZedcloudProjectLocalOperatorConsolePolicyToTerraform, 
dataZedcloudProjectLocalOperatorConsolePolicyToHclTerraform, 
DataZedcloudProjectLocalOperatorConsolePolicyList, 
DataZedcloudProjectNetworkPolicy, 
dataZedcloudProjectNetworkPolicyToTerraform, 
dataZedcloudProjectNetworkPolicyToHclTerraform, 
DataZedcloudProjectNetworkPolicyList, 
DataZedcloudProjectTagLevelSettings, 
dataZedcloudProjectTagLevelSettingsToTerraform, 
dataZedcloudProjectTagLevelSettingsToHclTerraform, 
DataZedcloudProjectTagLevelSettingsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataZedcloudProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description of the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * User defined name of the resource group, unique across the enterprise. Once resource group is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tags DataZedcloudProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the resource group. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#title DataZedcloudProject#title}
  */
  readonly title: string;
  /**
  * Resource group type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#app_policy DataZedcloudProject#app_policy}
  */
  readonly appPolicy?: DataZedcloudProjectAppPolicy[] | cdktf.IResolvable;
  /**
  * attestation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#attestation_policy DataZedcloudProject#attestation_policy}
  */
  readonly attestationPolicy?: DataZedcloudProjectAttestationPolicy[] | cdktf.IResolvable;
  /**
  * configuration_lock_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#configuration_lock_policy DataZedcloudProject#configuration_lock_policy}
  */
  readonly configurationLockPolicy?: DataZedcloudProjectConfigurationLockPolicy[] | cdktf.IResolvable;
  /**
  * edgeview_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#edgeview_policy DataZedcloudProject#edgeview_policy}
  */
  readonly edgeviewPolicy?: DataZedcloudProjectEdgeviewPolicy[] | cdktf.IResolvable;
  /**
  * local_operator_console_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#local_operator_console_policy DataZedcloudProject#local_operator_console_policy}
  */
  readonly localOperatorConsolePolicy?: DataZedcloudProjectLocalOperatorConsolePolicy[] | cdktf.IResolvable;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#network_policy DataZedcloudProject#network_policy}
  */
  readonly networkPolicy?: DataZedcloudProjectNetworkPolicy[] | cdktf.IResolvable;
  /**
  * tag_level_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tag_level_settings DataZedcloudProject#tag_level_settings}
  */
  readonly tagLevelSettings?: DataZedcloudProjectTagLevelSettings[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project zedcloud_project}
*/
export class DataZedcloudProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudProject to import
  * @param importFromId The id of the existing DataZedcloudProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project zedcloud_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_project',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0',
        providerVersionConstraint: '2.5.0'
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
  private _cloudPolicy = new DataZedcloudProjectCloudPolicyList(this, "cloud_policy", false);
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
  private _modulePolicy = new DataZedcloudProjectModulePolicyList(this, "module_policy", false);
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
  private _revision = new DataZedcloudProjectRevisionList(this, "revision", false);
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
  private _appPolicy = new DataZedcloudProjectAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: DataZedcloudProjectAppPolicy[] | cdktf.IResolvable) {
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
  private _attestationPolicy = new DataZedcloudProjectAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }
  public putAttestationPolicy(value: DataZedcloudProjectAttestationPolicy[] | cdktf.IResolvable) {
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
  private _configurationLockPolicy = new DataZedcloudProjectConfigurationLockPolicyList(this, "configuration_lock_policy", false);
  public get configurationLockPolicy() {
    return this._configurationLockPolicy;
  }
  public putConfigurationLockPolicy(value: DataZedcloudProjectConfigurationLockPolicy[] | cdktf.IResolvable) {
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
  private _edgeviewPolicy = new DataZedcloudProjectEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }
  public putEdgeviewPolicy(value: DataZedcloudProjectEdgeviewPolicy[] | cdktf.IResolvable) {
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
  private _localOperatorConsolePolicy = new DataZedcloudProjectLocalOperatorConsolePolicyList(this, "local_operator_console_policy", false);
  public get localOperatorConsolePolicy() {
    return this._localOperatorConsolePolicy;
  }
  public putLocalOperatorConsolePolicy(value: DataZedcloudProjectLocalOperatorConsolePolicy[] | cdktf.IResolvable) {
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
  private _networkPolicy = new DataZedcloudProjectNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: DataZedcloudProjectNetworkPolicy[] | cdktf.IResolvable) {
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
  private _tagLevelSettings = new DataZedcloudProjectTagLevelSettingsList(this, "tag_level_settings", false);
  public get tagLevelSettings() {
    return this._tagLevelSettings;
  }
  public putTagLevelSettings(value: DataZedcloudProjectTagLevelSettings[] | cdktf.IResolvable) {
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
      app_policy: cdktf.listMapper(dataZedcloudProjectAppPolicyToTerraform, true)(this._appPolicy.internalValue),
      attestation_policy: cdktf.listMapper(dataZedcloudProjectAttestationPolicyToTerraform, true)(this._attestationPolicy.internalValue),
      configuration_lock_policy: cdktf.listMapper(dataZedcloudProjectConfigurationLockPolicyToTerraform, true)(this._configurationLockPolicy.internalValue),
      edgeview_policy: cdktf.listMapper(dataZedcloudProjectEdgeviewPolicyToTerraform, true)(this._edgeviewPolicy.internalValue),
      local_operator_console_policy: cdktf.listMapper(dataZedcloudProjectLocalOperatorConsolePolicyToTerraform, true)(this._localOperatorConsolePolicy.internalValue),
      network_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyToTerraform, true)(this._networkPolicy.internalValue),
      tag_level_settings: cdktf.listMapper(dataZedcloudProjectTagLevelSettingsToTerraform, true)(this._tagLevelSettings.internalValue),
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
        value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyToHclTerraform, true)(this._appPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectAppPolicyList",
      },
      attestation_policy: {
        value: cdktf.listMapperHcl(dataZedcloudProjectAttestationPolicyToHclTerraform, true)(this._attestationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectAttestationPolicyList",
      },
      configuration_lock_policy: {
        value: cdktf.listMapperHcl(dataZedcloudProjectConfigurationLockPolicyToHclTerraform, true)(this._configurationLockPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectConfigurationLockPolicyList",
      },
      edgeview_policy: {
        value: cdktf.listMapperHcl(dataZedcloudProjectEdgeviewPolicyToHclTerraform, true)(this._edgeviewPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectEdgeviewPolicyList",
      },
      local_operator_console_policy: {
        value: cdktf.listMapperHcl(dataZedcloudProjectLocalOperatorConsolePolicyToHclTerraform, true)(this._localOperatorConsolePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectLocalOperatorConsolePolicyList",
      },
      network_policy: {
        value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyToHclTerraform, true)(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectNetworkPolicyList",
      },
      tag_level_settings: {
        value: cdktf.listMapperHcl(dataZedcloudProjectTagLevelSettingsToHclTerraform, true)(this._tagLevelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudProjectTagLevelSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
