// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAdvancedSettingsPiiLearningConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning#config_id AppsecAdvancedSettingsPiiLearning#config_id}
  */
  readonly configId: number;
  /**
  * Whether to enable the PII learning advanced setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning#enable_pii_learning AppsecAdvancedSettingsPiiLearning#enable_pii_learning}
  */
  readonly enablePiiLearning: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning#id AppsecAdvancedSettingsPiiLearning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning akamai_appsec_advanced_settings_pii_learning}
*/
export class AppsecAdvancedSettingsPiiLearning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_advanced_settings_pii_learning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAdvancedSettingsPiiLearning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAdvancedSettingsPiiLearning to import
  * @param importFromId The id of the existing AppsecAdvancedSettingsPiiLearning that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAdvancedSettingsPiiLearning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_advanced_settings_pii_learning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_pii_learning akamai_appsec_advanced_settings_pii_learning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAdvancedSettingsPiiLearningConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAdvancedSettingsPiiLearningConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_advanced_settings_pii_learning',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
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
    this._enablePiiLearning = config.enablePiiLearning;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // enable_pii_learning - computed: false, optional: false, required: true
  private _enablePiiLearning?: boolean | cdktf.IResolvable; 
  public get enablePiiLearning() {
    return this.getBooleanAttribute('enable_pii_learning');
  }
  public set enablePiiLearning(value: boolean | cdktf.IResolvable) {
    this._enablePiiLearning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePiiLearningInput() {
    return this._enablePiiLearning;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      enable_pii_learning: cdktf.booleanToTerraform(this._enablePiiLearning),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_pii_learning: {
        value: cdktf.booleanToHclTerraform(this._enablePiiLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
