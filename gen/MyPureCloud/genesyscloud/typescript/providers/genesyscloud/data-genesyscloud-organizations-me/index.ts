// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudOrganizationsMeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#default_country_code DataGenesyscloudOrganizationsMe#default_country_code}
  */
  readonly defaultCountryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#default_language DataGenesyscloudOrganizationsMe#default_language}
  */
  readonly defaultLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#default_site_id DataGenesyscloudOrganizationsMe#default_site_id}
  */
  readonly defaultSiteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#domain DataGenesyscloudOrganizationsMe#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#id DataGenesyscloudOrganizationsMe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#name DataGenesyscloudOrganizationsMe#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#product_platform DataGenesyscloudOrganizationsMe#product_platform}
  */
  readonly productPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#support_uri DataGenesyscloudOrganizationsMe#support_uri}
  */
  readonly supportUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#third_party_org_name DataGenesyscloudOrganizationsMe#third_party_org_name}
  */
  readonly thirdPartyOrgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#voicemail_enabled DataGenesyscloudOrganizationsMe#voicemail_enabled}
  */
  readonly voicemailEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me genesyscloud_organizations_me}
*/
export class DataGenesyscloudOrganizationsMe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_organizations_me";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudOrganizationsMe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudOrganizationsMe to import
  * @param importFromId The id of the existing DataGenesyscloudOrganizationsMe that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudOrganizationsMe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_organizations_me", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/organizations_me genesyscloud_organizations_me} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudOrganizationsMeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudOrganizationsMeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_organizations_me',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultCountryCode = config.defaultCountryCode;
    this._defaultLanguage = config.defaultLanguage;
    this._defaultSiteId = config.defaultSiteId;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._productPlatform = config.productPlatform;
    this._supportUri = config.supportUri;
    this._thirdPartyOrgName = config.thirdPartyOrgName;
    this._voicemailEnabled = config.voicemailEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_country_code - computed: true, optional: true, required: false
  private _defaultCountryCode?: string; 
  public get defaultCountryCode() {
    return this.getStringAttribute('default_country_code');
  }
  public set defaultCountryCode(value: string) {
    this._defaultCountryCode = value;
  }
  public resetDefaultCountryCode() {
    this._defaultCountryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCountryCodeInput() {
    return this._defaultCountryCode;
  }

  // default_language - computed: true, optional: true, required: false
  private _defaultLanguage?: string; 
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }
  public set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  public resetDefaultLanguage() {
    this._defaultLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageInput() {
    return this._defaultLanguage;
  }

  // default_site_id - computed: true, optional: true, required: false
  private _defaultSiteId?: string; 
  public get defaultSiteId() {
    return this.getStringAttribute('default_site_id');
  }
  public set defaultSiteId(value: string) {
    this._defaultSiteId = value;
  }
  public resetDefaultSiteId() {
    this._defaultSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSiteIdInput() {
    return this._defaultSiteId;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // product_platform - computed: true, optional: true, required: false
  private _productPlatform?: string; 
  public get productPlatform() {
    return this.getStringAttribute('product_platform');
  }
  public set productPlatform(value: string) {
    this._productPlatform = value;
  }
  public resetProductPlatform() {
    this._productPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productPlatformInput() {
    return this._productPlatform;
  }

  // support_uri - computed: true, optional: true, required: false
  private _supportUri?: string; 
  public get supportUri() {
    return this.getStringAttribute('support_uri');
  }
  public set supportUri(value: string) {
    this._supportUri = value;
  }
  public resetSupportUri() {
    this._supportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUriInput() {
    return this._supportUri;
  }

  // third_party_org_name - computed: true, optional: true, required: false
  private _thirdPartyOrgName?: string; 
  public get thirdPartyOrgName() {
    return this.getStringAttribute('third_party_org_name');
  }
  public set thirdPartyOrgName(value: string) {
    this._thirdPartyOrgName = value;
  }
  public resetThirdPartyOrgName() {
    this._thirdPartyOrgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyOrgNameInput() {
    return this._thirdPartyOrgName;
  }

  // voicemail_enabled - computed: true, optional: true, required: false
  private _voicemailEnabled?: boolean | cdktf.IResolvable; 
  public get voicemailEnabled() {
    return this.getBooleanAttribute('voicemail_enabled');
  }
  public set voicemailEnabled(value: boolean | cdktf.IResolvable) {
    this._voicemailEnabled = value;
  }
  public resetVoicemailEnabled() {
    this._voicemailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicemailEnabledInput() {
    return this._voicemailEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_country_code: cdktf.stringToTerraform(this._defaultCountryCode),
      default_language: cdktf.stringToTerraform(this._defaultLanguage),
      default_site_id: cdktf.stringToTerraform(this._defaultSiteId),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product_platform: cdktf.stringToTerraform(this._productPlatform),
      support_uri: cdktf.stringToTerraform(this._supportUri),
      third_party_org_name: cdktf.stringToTerraform(this._thirdPartyOrgName),
      voicemail_enabled: cdktf.booleanToTerraform(this._voicemailEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_country_code: {
        value: cdktf.stringToHclTerraform(this._defaultCountryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_language: {
        value: cdktf.stringToHclTerraform(this._defaultLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_site_id: {
        value: cdktf.stringToHclTerraform(this._defaultSiteId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      product_platform: {
        value: cdktf.stringToHclTerraform(this._productPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_uri: {
        value: cdktf.stringToHclTerraform(this._supportUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      third_party_org_name: {
        value: cdktf.stringToHclTerraform(this._thirdPartyOrgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voicemail_enabled: {
        value: cdktf.booleanToHclTerraform(this._voicemailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
