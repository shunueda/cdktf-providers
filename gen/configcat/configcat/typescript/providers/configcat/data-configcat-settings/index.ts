// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfigcatSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/settings#config_id DataConfigcatSettings#config_id}
  */
  readonly configId: string;
  /**
  * Filter the Feature Flags or Settingss by key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/settings#key_filter_regex DataConfigcatSettings#key_filter_regex}
  */
  readonly keyFilterRegex?: string;
}
export interface DataConfigcatSettingsSettings {
}

export function dataConfigcatSettingsSettingsToTerraform(struct?: DataConfigcatSettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfigcatSettingsSettingsToHclTerraform(struct?: DataConfigcatSettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfigcatSettingsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataConfigcatSettingsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfigcatSettingsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hint - computed: true, optional: false, required: false
  public get hint() {
    return this.getStringAttribute('hint');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // setting_id - computed: true, optional: false, required: false
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }

  // setting_type - computed: true, optional: false, required: false
  public get settingType() {
    return this.getStringAttribute('setting_type');
  }
}

export class DataConfigcatSettingsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataConfigcatSettingsSettingsOutputReference {
    return new DataConfigcatSettingsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/settings configcat_settings}
*/
export class DataConfigcatSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfigcatSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfigcatSettings to import
  * @param importFromId The id of the existing DataConfigcatSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfigcatSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/settings configcat_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfigcatSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfigcatSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_settings',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._keyFilterRegex = config.keyFilterRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_filter_regex - computed: false, optional: true, required: false
  private _keyFilterRegex?: string; 
  public get keyFilterRegex() {
    return this.getStringAttribute('key_filter_regex');
  }
  public set keyFilterRegex(value: string) {
    this._keyFilterRegex = value;
  }
  public resetKeyFilterRegex() {
    this._keyFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFilterRegexInput() {
    return this._keyFilterRegex;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataConfigcatSettingsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.stringToTerraform(this._configId),
      key_filter_regex: cdktf.stringToTerraform(this._keyFilterRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_filter_regex: {
        value: cdktf.stringToHclTerraform(this._keyFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
