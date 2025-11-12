// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is a required input flag with when changing custom_privacy_url, shouldn't be considered as a readable property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}
  */
  readonly agreeToCustomPrivacyPolicy?: boolean | cdktf.IResolvable;
  /**
  * Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. Do this by setting brand_id. `DEPRECATED`: Okta has fully support brand creation, this attribute is a no op and will be removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#brand_id Brand#brand_id}
  */
  readonly brandId?: string;
  /**
  * Custom privacy policy URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}
  */
  readonly customPrivacyPolicyUrl?: string;
  /**
  * Default app app instance id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#default_app_app_instance_id Brand#default_app_app_instance_id}
  */
  readonly defaultAppAppInstanceId?: string;
  /**
  * Default app app link name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#default_app_app_link_name Brand#default_app_app_link_name}
  */
  readonly defaultAppAppLinkName?: string;
  /**
  * Default app classic application uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#default_app_classic_application_uri Brand#default_app_classic_application_uri}
  */
  readonly defaultAppClassicApplicationUri?: string;
  /**
  * The language specified as an IETF BCP 47 language tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#locale Brand#locale}
  */
  readonly locale?: string;
  /**
  * Name of the brand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#name Brand#name}
  */
  readonly name: string;
  /**
  * Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#remove_powered_by_okta Brand#remove_powered_by_okta}
  */
  readonly removePoweredByOkta?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand okta_brand}
*/
export class Brand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_brand";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Brand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Brand to import
  * @param importFromId The id of the existing Brand that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Brand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_brand", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/brand okta_brand} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandConfig
  */
  public constructor(scope: Construct, id: string, config: BrandConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_brand',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agreeToCustomPrivacyPolicy = config.agreeToCustomPrivacyPolicy;
    this._brandId = config.brandId;
    this._customPrivacyPolicyUrl = config.customPrivacyPolicyUrl;
    this._defaultAppAppInstanceId = config.defaultAppAppInstanceId;
    this._defaultAppAppLinkName = config.defaultAppAppLinkName;
    this._defaultAppClassicApplicationUri = config.defaultAppClassicApplicationUri;
    this._locale = config.locale;
    this._name = config.name;
    this._removePoweredByOkta = config.removePoweredByOkta;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agree_to_custom_privacy_policy - computed: true, optional: true, required: false
  private _agreeToCustomPrivacyPolicy?: boolean | cdktf.IResolvable; 
  public get agreeToCustomPrivacyPolicy() {
    return this.getBooleanAttribute('agree_to_custom_privacy_policy');
  }
  public set agreeToCustomPrivacyPolicy(value: boolean | cdktf.IResolvable) {
    this._agreeToCustomPrivacyPolicy = value;
  }
  public resetAgreeToCustomPrivacyPolicy() {
    this._agreeToCustomPrivacyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreeToCustomPrivacyPolicyInput() {
    return this._agreeToCustomPrivacyPolicy;
  }

  // brand_id - computed: true, optional: true, required: false
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  public resetBrandId() {
    this._brandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // custom_privacy_policy_url - computed: true, optional: true, required: false
  private _customPrivacyPolicyUrl?: string; 
  public get customPrivacyPolicyUrl() {
    return this.getStringAttribute('custom_privacy_policy_url');
  }
  public set customPrivacyPolicyUrl(value: string) {
    this._customPrivacyPolicyUrl = value;
  }
  public resetCustomPrivacyPolicyUrl() {
    this._customPrivacyPolicyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrivacyPolicyUrlInput() {
    return this._customPrivacyPolicyUrl;
  }

  // default_app_app_instance_id - computed: false, optional: true, required: false
  private _defaultAppAppInstanceId?: string; 
  public get defaultAppAppInstanceId() {
    return this.getStringAttribute('default_app_app_instance_id');
  }
  public set defaultAppAppInstanceId(value: string) {
    this._defaultAppAppInstanceId = value;
  }
  public resetDefaultAppAppInstanceId() {
    this._defaultAppAppInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppAppInstanceIdInput() {
    return this._defaultAppAppInstanceId;
  }

  // default_app_app_link_name - computed: false, optional: true, required: false
  private _defaultAppAppLinkName?: string; 
  public get defaultAppAppLinkName() {
    return this.getStringAttribute('default_app_app_link_name');
  }
  public set defaultAppAppLinkName(value: string) {
    this._defaultAppAppLinkName = value;
  }
  public resetDefaultAppAppLinkName() {
    this._defaultAppAppLinkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppAppLinkNameInput() {
    return this._defaultAppAppLinkName;
  }

  // default_app_classic_application_uri - computed: false, optional: true, required: false
  private _defaultAppClassicApplicationUri?: string; 
  public get defaultAppClassicApplicationUri() {
    return this.getStringAttribute('default_app_classic_application_uri');
  }
  public set defaultAppClassicApplicationUri(value: string) {
    this._defaultAppClassicApplicationUri = value;
  }
  public resetDefaultAppClassicApplicationUri() {
    this._defaultAppClassicApplicationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppClassicApplicationUriInput() {
    return this._defaultAppClassicApplicationUri;
  }

  // email_domain_id - computed: true, optional: false, required: false
  public get emailDomainId() {
    return this.getStringAttribute('email_domain_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
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

  // remove_powered_by_okta - computed: true, optional: true, required: false
  private _removePoweredByOkta?: boolean | cdktf.IResolvable; 
  public get removePoweredByOkta() {
    return this.getBooleanAttribute('remove_powered_by_okta');
  }
  public set removePoweredByOkta(value: boolean | cdktf.IResolvable) {
    this._removePoweredByOkta = value;
  }
  public resetRemovePoweredByOkta() {
    this._removePoweredByOkta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePoweredByOktaInput() {
    return this._removePoweredByOkta;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agree_to_custom_privacy_policy: cdktf.booleanToTerraform(this._agreeToCustomPrivacyPolicy),
      brand_id: cdktf.stringToTerraform(this._brandId),
      custom_privacy_policy_url: cdktf.stringToTerraform(this._customPrivacyPolicyUrl),
      default_app_app_instance_id: cdktf.stringToTerraform(this._defaultAppAppInstanceId),
      default_app_app_link_name: cdktf.stringToTerraform(this._defaultAppAppLinkName),
      default_app_classic_application_uri: cdktf.stringToTerraform(this._defaultAppClassicApplicationUri),
      locale: cdktf.stringToTerraform(this._locale),
      name: cdktf.stringToTerraform(this._name),
      remove_powered_by_okta: cdktf.booleanToTerraform(this._removePoweredByOkta),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agree_to_custom_privacy_policy: {
        value: cdktf.booleanToHclTerraform(this._agreeToCustomPrivacyPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      brand_id: {
        value: cdktf.stringToHclTerraform(this._brandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_privacy_policy_url: {
        value: cdktf.stringToHclTerraform(this._customPrivacyPolicyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_app_app_instance_id: {
        value: cdktf.stringToHclTerraform(this._defaultAppAppInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_app_app_link_name: {
        value: cdktf.stringToHclTerraform(this._defaultAppAppLinkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_app_classic_application_uri: {
        value: cdktf.stringToHclTerraform(this._defaultAppClassicApplicationUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
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
      remove_powered_by_okta: {
        value: cdktf.booleanToHclTerraform(this._removePoweredByOkta),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
