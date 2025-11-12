// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field represents a configuration file that contains a bundle of settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store#bundle ConfigStore#bundle}
  */
  readonly bundle: string;
  /**
  * The list of values for the configuration setting. This is used when the setting has a list of string values. Exactly one of `list_value`, `map_value`, or `string_value` must be set. Changing the type of the setting will require deletion and recreation of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store#list_value ConfigStore#list_value}
  */
  readonly listValue?: string[];
  /**
  * The map of key/value pairs for the configuration setting. This is used when the setting has a map of string keys and values. Exactly one of `list_value`, `map_value`, or `string_value` must be set. Changing the type of the setting will require deletion and recreation of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store#map_value ConfigStore#map_value}
  */
  readonly mapValue?: { [key: string]: string };
  /**
  * The id of the configuration setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store#setting_id ConfigStore#setting_id}
  */
  readonly settingId: string;
  /**
  * The value of the configuration setting. This is used when the setting has a single string value. Exactly one of `list_value`, `map_value`, or `string_value` must be set. Changing the type of the setting will require deletion and recreation of the setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store#string_value ConfigStore#string_value}
  */
  readonly stringValue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store pingfederate_config_store}
*/
export class ConfigStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_config_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigStore to import
  * @param importFromId The id of the existing ConfigStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_config_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/config_store pingfederate_config_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigStoreConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_config_store',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundle = config.bundle;
    this._listValue = config.listValue;
    this._mapValue = config.mapValue;
    this._settingId = config.settingId;
    this._stringValue = config.stringValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle - computed: false, optional: false, required: true
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // list_value - computed: false, optional: true, required: false
  private _listValue?: string[]; 
  public get listValue() {
    return this.getListAttribute('list_value');
  }
  public set listValue(value: string[]) {
    this._listValue = value;
  }
  public resetListValue() {
    this._listValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listValueInput() {
    return this._listValue;
  }

  // map_value - computed: false, optional: true, required: false
  private _mapValue?: { [key: string]: string }; 
  public get mapValue() {
    return this.getStringMapAttribute('map_value');
  }
  public set mapValue(value: { [key: string]: string }) {
    this._mapValue = value;
  }
  public resetMapValue() {
    this._mapValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapValueInput() {
    return this._mapValue;
  }

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle: cdktf.stringToTerraform(this._bundle),
      list_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listValue),
      map_value: cdktf.hashMapper(cdktf.stringToTerraform)(this._mapValue),
      setting_id: cdktf.stringToTerraform(this._settingId),
      string_value: cdktf.stringToTerraform(this._stringValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listValue),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      map_value: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mapValue),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      string_value: {
        value: cdktf.stringToHclTerraform(this._stringValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
