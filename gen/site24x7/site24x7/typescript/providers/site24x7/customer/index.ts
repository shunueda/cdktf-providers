// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Captcha validation value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#captcha Customer#captcha}
  */
  readonly captcha?: string;
  /**
  * Country code of the customer (e.g., US, IN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#country_code Customer#country_code}
  */
  readonly countryCode: string;
  /**
  * Customer's company name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#customer_company Customer#customer_company}
  */
  readonly customerCompany: string;
  /**
  * List of customer group IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#customer_groups Customer#customer_groups}
  */
  readonly customerGroups?: string[];
  /**
  * Website of the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#customer_website Customer#customer_website}
  */
  readonly customerWebsite?: string;
  /**
  * Digest token for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#digest Customer#digest}
  */
  readonly digest?: string;
  /**
  * Display name of the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#display_name Customer#display_name}
  */
  readonly displayName: string;
  /**
  * Email address of the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#email_address Customer#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#id Customer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Industry type identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#industry Customer#industry}
  */
  readonly industry?: string;
  /**
  * Whether to invite the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#invite Customer#invite}
  */
  readonly invite?: boolean | cdktf.IResolvable;
  /**
  * Language code (e.g., en, fr).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#language_code Customer#language_code}
  */
  readonly languageCode?: string;
  /**
  * Portal name for the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#portal_name Customer#portal_name}
  */
  readonly portalName: string;
  /**
  * Role title assigned for customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#roletitle Customer#roletitle}
  */
  readonly roletitle?: string;
  /**
  * Timezone of the customer (e.g., Asia/Kolkata).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#timezone Customer#timezone}
  */
  readonly timezone: string;
  /**
  * List of Zoho User IDs (zuids).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#zuids Customer#zuids}
  */
  readonly zuids?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer site24x7_customer}
*/
export class Customer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_customer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Customer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Customer to import
  * @param importFromId The id of the existing Customer that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Customer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_customer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/customer site24x7_customer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_customer',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._captcha = config.captcha;
    this._countryCode = config.countryCode;
    this._customerCompany = config.customerCompany;
    this._customerGroups = config.customerGroups;
    this._customerWebsite = config.customerWebsite;
    this._digest = config.digest;
    this._displayName = config.displayName;
    this._emailAddress = config.emailAddress;
    this._id = config.id;
    this._industry = config.industry;
    this._invite = config.invite;
    this._languageCode = config.languageCode;
    this._portalName = config.portalName;
    this._roletitle = config.roletitle;
    this._timezone = config.timezone;
    this._zuids = config.zuids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // captcha - computed: false, optional: true, required: false
  private _captcha?: string; 
  public get captcha() {
    return this.getStringAttribute('captcha');
  }
  public set captcha(value: string) {
    this._captcha = value;
  }
  public resetCaptcha() {
    this._captcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha;
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // customer_company - computed: false, optional: false, required: true
  private _customerCompany?: string; 
  public get customerCompany() {
    return this.getStringAttribute('customer_company');
  }
  public set customerCompany(value: string) {
    this._customerCompany = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerCompanyInput() {
    return this._customerCompany;
  }

  // customer_groups - computed: false, optional: true, required: false
  private _customerGroups?: string[]; 
  public get customerGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('customer_groups'));
  }
  public set customerGroups(value: string[]) {
    this._customerGroups = value;
  }
  public resetCustomerGroups() {
    this._customerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGroupsInput() {
    return this._customerGroups;
  }

  // customer_website - computed: false, optional: true, required: false
  private _customerWebsite?: string; 
  public get customerWebsite() {
    return this.getStringAttribute('customer_website');
  }
  public set customerWebsite(value: string) {
    this._customerWebsite = value;
  }
  public resetCustomerWebsite() {
    this._customerWebsite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerWebsiteInput() {
    return this._customerWebsite;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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

  // industry - computed: false, optional: true, required: false
  private _industry?: string; 
  public get industry() {
    return this.getStringAttribute('industry');
  }
  public set industry(value: string) {
    this._industry = value;
  }
  public resetIndustry() {
    this._industry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryInput() {
    return this._industry;
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: boolean | cdktf.IResolvable; 
  public get invite() {
    return this.getBooleanAttribute('invite');
  }
  public set invite(value: boolean | cdktf.IResolvable) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // portal_name - computed: false, optional: false, required: true
  private _portalName?: string; 
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }
  public set portalName(value: string) {
    this._portalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalNameInput() {
    return this._portalName;
  }

  // roletitle - computed: false, optional: true, required: false
  private _roletitle?: string; 
  public get roletitle() {
    return this.getStringAttribute('roletitle');
  }
  public set roletitle(value: string) {
    this._roletitle = value;
  }
  public resetRoletitle() {
    this._roletitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roletitleInput() {
    return this._roletitle;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // zuids - computed: false, optional: true, required: false
  private _zuids?: string[]; 
  public get zuids() {
    return cdktf.Fn.tolist(this.getListAttribute('zuids'));
  }
  public set zuids(value: string[]) {
    this._zuids = value;
  }
  public resetZuids() {
    this._zuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zuidsInput() {
    return this._zuids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      captcha: cdktf.stringToTerraform(this._captcha),
      country_code: cdktf.stringToTerraform(this._countryCode),
      customer_company: cdktf.stringToTerraform(this._customerCompany),
      customer_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customerGroups),
      customer_website: cdktf.stringToTerraform(this._customerWebsite),
      digest: cdktf.stringToTerraform(this._digest),
      display_name: cdktf.stringToTerraform(this._displayName),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      id: cdktf.stringToTerraform(this._id),
      industry: cdktf.stringToTerraform(this._industry),
      invite: cdktf.booleanToTerraform(this._invite),
      language_code: cdktf.stringToTerraform(this._languageCode),
      portal_name: cdktf.stringToTerraform(this._portalName),
      roletitle: cdktf.stringToTerraform(this._roletitle),
      timezone: cdktf.stringToTerraform(this._timezone),
      zuids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zuids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      captcha: {
        value: cdktf.stringToHclTerraform(this._captcha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_company: {
        value: cdktf.stringToHclTerraform(this._customerCompany),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customerGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      customer_website: {
        value: cdktf.stringToHclTerraform(this._customerWebsite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
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
      industry: {
        value: cdktf.stringToHclTerraform(this._industry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invite: {
        value: cdktf.booleanToHclTerraform(this._invite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_name: {
        value: cdktf.stringToHclTerraform(this._portalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roletitle: {
        value: cdktf.stringToHclTerraform(this._roletitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zuids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zuids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
