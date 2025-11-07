// https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#address1 Contact#address1}
  */
  readonly address1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#address2 Contact#address2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#city Contact#city}
  */
  readonly city: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#country Contact#country}
  */
  readonly country: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#email Contact#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#fax Contact#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#first_name Contact#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#job_title Contact#job_title}
  */
  readonly jobTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#label Contact#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#last_name Contact#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#organization_name Contact#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#phone Contact#phone}
  */
  readonly phone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#postal_code Contact#postal_code}
  */
  readonly postalCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#state_province Contact#state_province}
  */
  readonly stateProvince: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact dnsimple_contact}
*/
export class Contact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Contact to import
  * @param importFromId The id of the existing Contact that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Contact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnsimple_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs/resources/contact dnsimple_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactConfig
  */
  public constructor(scope: Construct, id: string, config: ContactConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_contact',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address1 = config.address1;
    this._address2 = config.address2;
    this._city = config.city;
    this._country = config.country;
    this._email = config.email;
    this._fax = config.fax;
    this._firstName = config.firstName;
    this._jobTitle = config.jobTitle;
    this._label = config.label;
    this._lastName = config.lastName;
    this._organizationName = config.organizationName;
    this._phone = config.phone;
    this._postalCode = config.postalCode;
    this._stateProvince = config.stateProvince;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // address1 - computed: false, optional: false, required: true
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address2 - computed: true, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax - computed: true, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // fax_normalized - computed: true, optional: false, required: false
  public get faxNormalized() {
    return this.getStringAttribute('fax_normalized');
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // job_title - computed: true, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // phone_normalized - computed: true, optional: false, required: false
  public get phoneNormalized() {
    return this.getStringAttribute('phone_normalized');
  }

  // postal_code - computed: false, optional: false, required: true
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // state_province - computed: false, optional: false, required: true
  private _stateProvince?: string; 
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
  public set stateProvince(value: string) {
    this._stateProvince = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateProvinceInput() {
    return this._stateProvince;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address1: cdktf.stringToTerraform(this._address1),
      address2: cdktf.stringToTerraform(this._address2),
      city: cdktf.stringToTerraform(this._city),
      country: cdktf.stringToTerraform(this._country),
      email: cdktf.stringToTerraform(this._email),
      fax: cdktf.stringToTerraform(this._fax),
      first_name: cdktf.stringToTerraform(this._firstName),
      job_title: cdktf.stringToTerraform(this._jobTitle),
      label: cdktf.stringToTerraform(this._label),
      last_name: cdktf.stringToTerraform(this._lastName),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      phone: cdktf.stringToTerraform(this._phone),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      state_province: cdktf.stringToTerraform(this._stateProvince),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address1: {
        value: cdktf.stringToHclTerraform(this._address1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address2: {
        value: cdktf.stringToHclTerraform(this._address2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fax: {
        value: cdktf.stringToHclTerraform(this._fax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_title: {
        value: cdktf.stringToHclTerraform(this._jobTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_province: {
        value: cdktf.stringToHclTerraform(this._stateProvince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
