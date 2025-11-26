// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON format expected. Use `jsonencode()` to pass objects. Defaults to `{}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#attributes Brand#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#branding_custom_css Brand#branding_custom_css}
  */
  readonly brandingCustomCss?: string;
  /**
  * Defaults to `/static/dist/assets/images/flow_background.jpg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#branding_default_flow_background Brand#branding_default_flow_background}
  */
  readonly brandingDefaultFlowBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#branding_favicon Brand#branding_favicon}
  */
  readonly brandingFavicon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#branding_logo Brand#branding_logo}
  */
  readonly brandingLogo?: string;
  /**
  * Defaults to `authentik`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#branding_title Brand#branding_title}
  */
  readonly brandingTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#client_certificates Brand#client_certificates}
  */
  readonly clientCertificates?: string[];
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#default Brand#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#default_application Brand#default_application}
  */
  readonly defaultApplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#domain Brand#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#flow_authentication Brand#flow_authentication}
  */
  readonly flowAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#flow_device_code Brand#flow_device_code}
  */
  readonly flowDeviceCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#flow_invalidation Brand#flow_invalidation}
  */
  readonly flowInvalidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#flow_recovery Brand#flow_recovery}
  */
  readonly flowRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#flow_unenrollment Brand#flow_unenrollment}
  */
  readonly flowUnenrollment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#flow_user_settings Brand#flow_user_settings}
  */
  readonly flowUserSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#id Brand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#web_certificate Brand#web_certificate}
  */
  readonly webCertificate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand authentik_brand}
*/
export class Brand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_brand";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Brand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Brand to import
  * @param importFromId The id of the existing Brand that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Brand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_brand", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/brand authentik_brand} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandConfig
  */
  public constructor(scope: Construct, id: string, config: BrandConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_brand',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._brandingCustomCss = config.brandingCustomCss;
    this._brandingDefaultFlowBackground = config.brandingDefaultFlowBackground;
    this._brandingFavicon = config.brandingFavicon;
    this._brandingLogo = config.brandingLogo;
    this._brandingTitle = config.brandingTitle;
    this._clientCertificates = config.clientCertificates;
    this._default = config.default;
    this._defaultApplication = config.defaultApplication;
    this._domain = config.domain;
    this._flowAuthentication = config.flowAuthentication;
    this._flowDeviceCode = config.flowDeviceCode;
    this._flowInvalidation = config.flowInvalidation;
    this._flowRecovery = config.flowRecovery;
    this._flowUnenrollment = config.flowUnenrollment;
    this._flowUserSettings = config.flowUserSettings;
    this._id = config.id;
    this._webCertificate = config.webCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // branding_custom_css - computed: false, optional: true, required: false
  private _brandingCustomCss?: string; 
  public get brandingCustomCss() {
    return this.getStringAttribute('branding_custom_css');
  }
  public set brandingCustomCss(value: string) {
    this._brandingCustomCss = value;
  }
  public resetBrandingCustomCss() {
    this._brandingCustomCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingCustomCssInput() {
    return this._brandingCustomCss;
  }

  // branding_default_flow_background - computed: false, optional: true, required: false
  private _brandingDefaultFlowBackground?: string; 
  public get brandingDefaultFlowBackground() {
    return this.getStringAttribute('branding_default_flow_background');
  }
  public set brandingDefaultFlowBackground(value: string) {
    this._brandingDefaultFlowBackground = value;
  }
  public resetBrandingDefaultFlowBackground() {
    this._brandingDefaultFlowBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingDefaultFlowBackgroundInput() {
    return this._brandingDefaultFlowBackground;
  }

  // branding_favicon - computed: false, optional: true, required: false
  private _brandingFavicon?: string; 
  public get brandingFavicon() {
    return this.getStringAttribute('branding_favicon');
  }
  public set brandingFavicon(value: string) {
    this._brandingFavicon = value;
  }
  public resetBrandingFavicon() {
    this._brandingFavicon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingFaviconInput() {
    return this._brandingFavicon;
  }

  // branding_logo - computed: false, optional: true, required: false
  private _brandingLogo?: string; 
  public get brandingLogo() {
    return this.getStringAttribute('branding_logo');
  }
  public set brandingLogo(value: string) {
    this._brandingLogo = value;
  }
  public resetBrandingLogo() {
    this._brandingLogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingLogoInput() {
    return this._brandingLogo;
  }

  // branding_title - computed: false, optional: true, required: false
  private _brandingTitle?: string; 
  public get brandingTitle() {
    return this.getStringAttribute('branding_title');
  }
  public set brandingTitle(value: string) {
    this._brandingTitle = value;
  }
  public resetBrandingTitle() {
    this._brandingTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingTitleInput() {
    return this._brandingTitle;
  }

  // client_certificates - computed: false, optional: true, required: false
  private _clientCertificates?: string[]; 
  public get clientCertificates() {
    return this.getListAttribute('client_certificates');
  }
  public set clientCertificates(value: string[]) {
    this._clientCertificates = value;
  }
  public resetClientCertificates() {
    this._clientCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatesInput() {
    return this._clientCertificates;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_application - computed: false, optional: true, required: false
  private _defaultApplication?: string; 
  public get defaultApplication() {
    return this.getStringAttribute('default_application');
  }
  public set defaultApplication(value: string) {
    this._defaultApplication = value;
  }
  public resetDefaultApplication() {
    this._defaultApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApplicationInput() {
    return this._defaultApplication;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // flow_authentication - computed: false, optional: true, required: false
  private _flowAuthentication?: string; 
  public get flowAuthentication() {
    return this.getStringAttribute('flow_authentication');
  }
  public set flowAuthentication(value: string) {
    this._flowAuthentication = value;
  }
  public resetFlowAuthentication() {
    this._flowAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowAuthenticationInput() {
    return this._flowAuthentication;
  }

  // flow_device_code - computed: false, optional: true, required: false
  private _flowDeviceCode?: string; 
  public get flowDeviceCode() {
    return this.getStringAttribute('flow_device_code');
  }
  public set flowDeviceCode(value: string) {
    this._flowDeviceCode = value;
  }
  public resetFlowDeviceCode() {
    this._flowDeviceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDeviceCodeInput() {
    return this._flowDeviceCode;
  }

  // flow_invalidation - computed: false, optional: true, required: false
  private _flowInvalidation?: string; 
  public get flowInvalidation() {
    return this.getStringAttribute('flow_invalidation');
  }
  public set flowInvalidation(value: string) {
    this._flowInvalidation = value;
  }
  public resetFlowInvalidation() {
    this._flowInvalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInvalidationInput() {
    return this._flowInvalidation;
  }

  // flow_recovery - computed: false, optional: true, required: false
  private _flowRecovery?: string; 
  public get flowRecovery() {
    return this.getStringAttribute('flow_recovery');
  }
  public set flowRecovery(value: string) {
    this._flowRecovery = value;
  }
  public resetFlowRecovery() {
    this._flowRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowRecoveryInput() {
    return this._flowRecovery;
  }

  // flow_unenrollment - computed: false, optional: true, required: false
  private _flowUnenrollment?: string; 
  public get flowUnenrollment() {
    return this.getStringAttribute('flow_unenrollment');
  }
  public set flowUnenrollment(value: string) {
    this._flowUnenrollment = value;
  }
  public resetFlowUnenrollment() {
    this._flowUnenrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowUnenrollmentInput() {
    return this._flowUnenrollment;
  }

  // flow_user_settings - computed: false, optional: true, required: false
  private _flowUserSettings?: string; 
  public get flowUserSettings() {
    return this.getStringAttribute('flow_user_settings');
  }
  public set flowUserSettings(value: string) {
    this._flowUserSettings = value;
  }
  public resetFlowUserSettings() {
    this._flowUserSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowUserSettingsInput() {
    return this._flowUserSettings;
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

  // web_certificate - computed: false, optional: true, required: false
  private _webCertificate?: string; 
  public get webCertificate() {
    return this.getStringAttribute('web_certificate');
  }
  public set webCertificate(value: string) {
    this._webCertificate = value;
  }
  public resetWebCertificate() {
    this._webCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCertificateInput() {
    return this._webCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.stringToTerraform(this._attributes),
      branding_custom_css: cdktf.stringToTerraform(this._brandingCustomCss),
      branding_default_flow_background: cdktf.stringToTerraform(this._brandingDefaultFlowBackground),
      branding_favicon: cdktf.stringToTerraform(this._brandingFavicon),
      branding_logo: cdktf.stringToTerraform(this._brandingLogo),
      branding_title: cdktf.stringToTerraform(this._brandingTitle),
      client_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientCertificates),
      default: cdktf.booleanToTerraform(this._default),
      default_application: cdktf.stringToTerraform(this._defaultApplication),
      domain: cdktf.stringToTerraform(this._domain),
      flow_authentication: cdktf.stringToTerraform(this._flowAuthentication),
      flow_device_code: cdktf.stringToTerraform(this._flowDeviceCode),
      flow_invalidation: cdktf.stringToTerraform(this._flowInvalidation),
      flow_recovery: cdktf.stringToTerraform(this._flowRecovery),
      flow_unenrollment: cdktf.stringToTerraform(this._flowUnenrollment),
      flow_user_settings: cdktf.stringToTerraform(this._flowUserSettings),
      id: cdktf.stringToTerraform(this._id),
      web_certificate: cdktf.stringToTerraform(this._webCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branding_custom_css: {
        value: cdktf.stringToHclTerraform(this._brandingCustomCss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branding_default_flow_background: {
        value: cdktf.stringToHclTerraform(this._brandingDefaultFlowBackground),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branding_favicon: {
        value: cdktf.stringToHclTerraform(this._brandingFavicon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branding_logo: {
        value: cdktf.stringToHclTerraform(this._brandingLogo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branding_title: {
        value: cdktf.stringToHclTerraform(this._brandingTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_application: {
        value: cdktf.stringToHclTerraform(this._defaultApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_authentication: {
        value: cdktf.stringToHclTerraform(this._flowAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_device_code: {
        value: cdktf.stringToHclTerraform(this._flowDeviceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_invalidation: {
        value: cdktf.stringToHclTerraform(this._flowInvalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_recovery: {
        value: cdktf.stringToHclTerraform(this._flowRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_unenrollment: {
        value: cdktf.stringToHclTerraform(this._flowUnenrollment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_user_settings: {
        value: cdktf.stringToHclTerraform(this._flowUserSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_certificate: {
        value: cdktf.stringToHclTerraform(this._webCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
