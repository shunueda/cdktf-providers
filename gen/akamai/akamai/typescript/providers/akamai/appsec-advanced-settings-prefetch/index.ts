// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAdvancedSettingsPrefetchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable prefetch requests for all file extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#all_extensions AppsecAdvancedSettingsPrefetch#all_extensions}
  */
  readonly allExtensions: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#config_id AppsecAdvancedSettingsPrefetch#config_id}
  */
  readonly configId: number;
  /**
  * Whether to enable or disable prefetch requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#enable_app_layer AppsecAdvancedSettingsPrefetch#enable_app_layer}
  */
  readonly enableAppLayer: boolean | cdktf.IResolvable;
  /**
  * Whether to enable prefetch requests for rate controls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#enable_rate_controls AppsecAdvancedSettingsPrefetch#enable_rate_controls}
  */
  readonly enableRateControls: boolean | cdktf.IResolvable;
  /**
  * List of file extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#extensions AppsecAdvancedSettingsPrefetch#extensions}
  */
  readonly extensions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#id AppsecAdvancedSettingsPrefetch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch akamai_appsec_advanced_settings_prefetch}
*/
export class AppsecAdvancedSettingsPrefetch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_advanced_settings_prefetch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAdvancedSettingsPrefetch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAdvancedSettingsPrefetch to import
  * @param importFromId The id of the existing AppsecAdvancedSettingsPrefetch that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAdvancedSettingsPrefetch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_advanced_settings_prefetch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_prefetch akamai_appsec_advanced_settings_prefetch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAdvancedSettingsPrefetchConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAdvancedSettingsPrefetchConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_advanced_settings_prefetch',
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
    this._allExtensions = config.allExtensions;
    this._configId = config.configId;
    this._enableAppLayer = config.enableAppLayer;
    this._enableRateControls = config.enableRateControls;
    this._extensions = config.extensions;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_extensions - computed: false, optional: false, required: true
  private _allExtensions?: boolean | cdktf.IResolvable; 
  public get allExtensions() {
    return this.getBooleanAttribute('all_extensions');
  }
  public set allExtensions(value: boolean | cdktf.IResolvable) {
    this._allExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allExtensionsInput() {
    return this._allExtensions;
  }

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

  // enable_app_layer - computed: false, optional: false, required: true
  private _enableAppLayer?: boolean | cdktf.IResolvable; 
  public get enableAppLayer() {
    return this.getBooleanAttribute('enable_app_layer');
  }
  public set enableAppLayer(value: boolean | cdktf.IResolvable) {
    this._enableAppLayer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAppLayerInput() {
    return this._enableAppLayer;
  }

  // enable_rate_controls - computed: false, optional: false, required: true
  private _enableRateControls?: boolean | cdktf.IResolvable; 
  public get enableRateControls() {
    return this.getBooleanAttribute('enable_rate_controls');
  }
  public set enableRateControls(value: boolean | cdktf.IResolvable) {
    this._enableRateControls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRateControlsInput() {
    return this._enableRateControls;
  }

  // extensions - computed: false, optional: false, required: true
  private _extensions?: string[]; 
  public get extensions() {
    return cdktf.Fn.tolist(this.getListAttribute('extensions'));
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
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
      all_extensions: cdktf.booleanToTerraform(this._allExtensions),
      config_id: cdktf.numberToTerraform(this._configId),
      enable_app_layer: cdktf.booleanToTerraform(this._enableAppLayer),
      enable_rate_controls: cdktf.booleanToTerraform(this._enableRateControls),
      extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensions),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_extensions: {
        value: cdktf.booleanToHclTerraform(this._allExtensions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_app_layer: {
        value: cdktf.booleanToHclTerraform(this._enableAppLayer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rate_controls: {
        value: cdktf.booleanToHclTerraform(this._enableRateControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
