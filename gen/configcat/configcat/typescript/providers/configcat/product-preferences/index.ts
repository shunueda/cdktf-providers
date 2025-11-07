// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines the Feature Flag key generation mode. Available values: `camelCase`|`upperCase`|`lowerCase`|`pascalCase`|`kebabCase`. Default: `camelCase`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#key_generation_mode ProductPreferences#key_generation_mode}
  */
  readonly keyGenerationMode?: string;
  /**
  * Indicates whether Feature flags and Settings must have a hint. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#mandatory_setting_hint ProductPreferences#mandatory_setting_hint}
  */
  readonly mandatorySettingHint?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#product_id ProductPreferences#product_id}
  */
  readonly productId: string;
  /**
  * Indicates that a mandatory note is required for saving and publishing. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#reason_required ProductPreferences#reason_required}
  */
  readonly reasonRequired?: boolean | cdktf.IResolvable;
  /**
  * The environment specific mandatory note map block. Keys are the Environment IDs and the values indicate that a mandatory note is required for saving and publishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#reason_required_environments ProductPreferences#reason_required_environments}
  */
  readonly reasonRequiredEnvironments?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Indicates whether variation IDs must be shown on the ConfigCat Dashboard. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#show_variation_id ProductPreferences#show_variation_id}
  */
  readonly showVariationId?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences configcat_product_preferences}
*/
export class ProductPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_product_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProductPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProductPreferences to import
  * @param importFromId The id of the existing ProductPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProductPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_product_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/product_preferences configcat_product_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProductPreferencesConfig
  */
  public constructor(scope: Construct, id: string, config: ProductPreferencesConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_product_preferences',
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
    this._keyGenerationMode = config.keyGenerationMode;
    this._mandatorySettingHint = config.mandatorySettingHint;
    this._productId = config.productId;
    this._reasonRequired = config.reasonRequired;
    this._reasonRequiredEnvironments = config.reasonRequiredEnvironments;
    this._showVariationId = config.showVariationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_generation_mode - computed: true, optional: true, required: false
  private _keyGenerationMode?: string; 
  public get keyGenerationMode() {
    return this.getStringAttribute('key_generation_mode');
  }
  public set keyGenerationMode(value: string) {
    this._keyGenerationMode = value;
  }
  public resetKeyGenerationMode() {
    this._keyGenerationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyGenerationModeInput() {
    return this._keyGenerationMode;
  }

  // mandatory_setting_hint - computed: true, optional: true, required: false
  private _mandatorySettingHint?: boolean | cdktf.IResolvable; 
  public get mandatorySettingHint() {
    return this.getBooleanAttribute('mandatory_setting_hint');
  }
  public set mandatorySettingHint(value: boolean | cdktf.IResolvable) {
    this._mandatorySettingHint = value;
  }
  public resetMandatorySettingHint() {
    this._mandatorySettingHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatorySettingHintInput() {
    return this._mandatorySettingHint;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // reason_required - computed: true, optional: true, required: false
  private _reasonRequired?: boolean | cdktf.IResolvable; 
  public get reasonRequired() {
    return this.getBooleanAttribute('reason_required');
  }
  public set reasonRequired(value: boolean | cdktf.IResolvable) {
    this._reasonRequired = value;
  }
  public resetReasonRequired() {
    this._reasonRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonRequiredInput() {
    return this._reasonRequired;
  }

  // reason_required_environments - computed: true, optional: true, required: false
  private _reasonRequiredEnvironments?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get reasonRequiredEnvironments() {
    return this.getBooleanMapAttribute('reason_required_environments');
  }
  public set reasonRequiredEnvironments(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._reasonRequiredEnvironments = value;
  }
  public resetReasonRequiredEnvironments() {
    this._reasonRequiredEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonRequiredEnvironmentsInput() {
    return this._reasonRequiredEnvironments;
  }

  // show_variation_id - computed: true, optional: true, required: false
  private _showVariationId?: boolean | cdktf.IResolvable; 
  public get showVariationId() {
    return this.getBooleanAttribute('show_variation_id');
  }
  public set showVariationId(value: boolean | cdktf.IResolvable) {
    this._showVariationId = value;
  }
  public resetShowVariationId() {
    this._showVariationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVariationIdInput() {
    return this._showVariationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_generation_mode: cdktf.stringToTerraform(this._keyGenerationMode),
      mandatory_setting_hint: cdktf.booleanToTerraform(this._mandatorySettingHint),
      product_id: cdktf.stringToTerraform(this._productId),
      reason_required: cdktf.booleanToTerraform(this._reasonRequired),
      reason_required_environments: cdktf.hashMapper(cdktf.booleanToTerraform)(this._reasonRequiredEnvironments),
      show_variation_id: cdktf.booleanToTerraform(this._showVariationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_generation_mode: {
        value: cdktf.stringToHclTerraform(this._keyGenerationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory_setting_hint: {
        value: cdktf.booleanToHclTerraform(this._mandatorySettingHint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason_required: {
        value: cdktf.booleanToHclTerraform(this._reasonRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reason_required_environments: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._reasonRequiredEnvironments),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      show_variation_id: {
        value: cdktf.booleanToHclTerraform(this._showVariationId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
