// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#config_id Setting#config_id}
  */
  readonly configId: string;
  /**
  * The hint of the Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#hint Setting#hint}
  */
  readonly hint?: string;
  /**
  * The key of the Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#key Setting#key}
  */
  readonly key: string;
  /**
  * The name of the Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#name Setting#name}
  */
  readonly name: string;
  /**
  * The order of the Feature Flag or Setting within a Product (zero-based). If multiple Feature Flags or Settings has the same order, they are displayed in alphabetical order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#order Setting#order}
  */
  readonly order: number;
  /**
  * The type of the Feature Flag or Setting. Available values: `boolean`|`string`|`int`|`double`. Default: `boolean`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#setting_type Setting#setting_type}
  */
  readonly settingType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting configcat_setting}
*/
export class Setting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Setting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Setting to import
  * @param importFromId The id of the existing Setting that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Setting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting configcat_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingConfig
  */
  public constructor(scope: Construct, id: string, config: SettingConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_setting',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0',
        providerVersionConstraint: '5.6.0'
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
    this._hint = config.hint;
    this._key = config.key;
    this._name = config.name;
    this._order = config.order;
    this._settingType = config.settingType;
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

  // hint - computed: true, optional: true, required: false
  private _hint?: string; 
  public get hint() {
    return this.getStringAttribute('hint');
  }
  public set hint(value: string) {
    this._hint = value;
  }
  public resetHint() {
    this._hint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // setting_type - computed: true, optional: true, required: false
  private _settingType?: string; 
  public get settingType() {
    return this.getStringAttribute('setting_type');
  }
  public set settingType(value: string) {
    this._settingType = value;
  }
  public resetSettingType() {
    this._settingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingTypeInput() {
    return this._settingType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.stringToTerraform(this._configId),
      hint: cdktf.stringToTerraform(this._hint),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      setting_type: cdktf.stringToTerraform(this._settingType),
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
      hint: {
        value: cdktf.stringToHclTerraform(this._hint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      setting_type: {
        value: cdktf.stringToHclTerraform(this._settingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
