// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlmNewLicenseAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#account_name GlmNewLicenseA#account_name}
  */
  readonly accountName?: string;
  /**
  * Country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#country GlmNewLicenseA#country}
  */
  readonly country?: string;
  /**
  * Use existing account with organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#existing_org GlmNewLicenseA#existing_org}
  */
  readonly existingOrg?: number;
  /**
  * Use an existing account with email and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#existing_user GlmNewLicenseA#existing_user}
  */
  readonly existingUser?: number;
  /**
  * First Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#first_name GlmNewLicenseA#first_name}
  */
  readonly firstName?: string;
  /**
  * GLM email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#glm_email GlmNewLicenseA#glm_email}
  */
  readonly glmEmail?: string;
  /**
  * GLM password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#glm_password GlmNewLicenseA#glm_password}
  */
  readonly glmPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#id GlmNewLicenseA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Last Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#last_name GlmNewLicenseA#last_name}
  */
  readonly lastName?: string;
  /**
  * License name (Configure license name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#name GlmNewLicenseA#name}
  */
  readonly name?: string;
  /**
  * GLM email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#new_email GlmNewLicenseA#new_email}
  */
  readonly newEmail?: string;
  /**
  * GLM password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#new_password GlmNewLicenseA#new_password}
  */
  readonly newPassword?: string;
  /**
  * Create a new account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#new_user GlmNewLicenseA#new_user}
  */
  readonly newUser?: number;
  /**
  * GLM organization id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#org_id GlmNewLicenseA#org_id}
  */
  readonly orgId?: number;
  /**
  * Phone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#phone GlmNewLicenseA#phone}
  */
  readonly phone?: string;
  /**
  * 'webroot': webroot; 'webroot_trial': webroot_trial; 'webroot_ti': webroot_ti; 'webroot_ti_trial': webroot_ti_trial; 'qosmos': qosmos; 'qosmos_trial': qosmos_trial; 'ipsec_vpn': ipsec_vpn;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#type GlmNewLicenseA#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license thunder_glm_new_license}
*/
export class GlmNewLicenseA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_glm_new_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlmNewLicenseA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlmNewLicenseA to import
  * @param importFromId The id of the existing GlmNewLicenseA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlmNewLicenseA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_glm_new_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glm_new_license thunder_glm_new_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlmNewLicenseAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlmNewLicenseAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_glm_new_license',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._country = config.country;
    this._existingOrg = config.existingOrg;
    this._existingUser = config.existingUser;
    this._firstName = config.firstName;
    this._glmEmail = config.glmEmail;
    this._glmPassword = config.glmPassword;
    this._id = config.id;
    this._lastName = config.lastName;
    this._name = config.name;
    this._newEmail = config.newEmail;
    this._newPassword = config.newPassword;
    this._newUser = config.newUser;
    this._orgId = config.orgId;
    this._phone = config.phone;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // existing_org - computed: false, optional: true, required: false
  private _existingOrg?: number; 
  public get existingOrg() {
    return this.getNumberAttribute('existing_org');
  }
  public set existingOrg(value: number) {
    this._existingOrg = value;
  }
  public resetExistingOrg() {
    this._existingOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingOrgInput() {
    return this._existingOrg;
  }

  // existing_user - computed: false, optional: true, required: false
  private _existingUser?: number; 
  public get existingUser() {
    return this.getNumberAttribute('existing_user');
  }
  public set existingUser(value: number) {
    this._existingUser = value;
  }
  public resetExistingUser() {
    this._existingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingUserInput() {
    return this._existingUser;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // glm_email - computed: false, optional: true, required: false
  private _glmEmail?: string; 
  public get glmEmail() {
    return this.getStringAttribute('glm_email');
  }
  public set glmEmail(value: string) {
    this._glmEmail = value;
  }
  public resetGlmEmail() {
    this._glmEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmEmailInput() {
    return this._glmEmail;
  }

  // glm_password - computed: false, optional: true, required: false
  private _glmPassword?: string; 
  public get glmPassword() {
    return this.getStringAttribute('glm_password');
  }
  public set glmPassword(value: string) {
    this._glmPassword = value;
  }
  public resetGlmPassword() {
    this._glmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmPasswordInput() {
    return this._glmPassword;
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

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // name - computed: false, optional: true, required: false
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

  // new_email - computed: false, optional: true, required: false
  private _newEmail?: string; 
  public get newEmail() {
    return this.getStringAttribute('new_email');
  }
  public set newEmail(value: string) {
    this._newEmail = value;
  }
  public resetNewEmail() {
    this._newEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newEmailInput() {
    return this._newEmail;
  }

  // new_password - computed: false, optional: true, required: false
  private _newPassword?: string; 
  public get newPassword() {
    return this.getStringAttribute('new_password');
  }
  public set newPassword(value: string) {
    this._newPassword = value;
  }
  public resetNewPassword() {
    this._newPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // new_user - computed: false, optional: true, required: false
  private _newUser?: number; 
  public get newUser() {
    return this.getNumberAttribute('new_user');
  }
  public set newUser(value: number) {
    this._newUser = value;
  }
  public resetNewUser() {
    this._newUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserInput() {
    return this._newUser;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      country: cdktf.stringToTerraform(this._country),
      existing_org: cdktf.numberToTerraform(this._existingOrg),
      existing_user: cdktf.numberToTerraform(this._existingUser),
      first_name: cdktf.stringToTerraform(this._firstName),
      glm_email: cdktf.stringToTerraform(this._glmEmail),
      glm_password: cdktf.stringToTerraform(this._glmPassword),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      name: cdktf.stringToTerraform(this._name),
      new_email: cdktf.stringToTerraform(this._newEmail),
      new_password: cdktf.stringToTerraform(this._newPassword),
      new_user: cdktf.numberToTerraform(this._newUser),
      org_id: cdktf.numberToTerraform(this._orgId),
      phone: cdktf.stringToTerraform(this._phone),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
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
      existing_org: {
        value: cdktf.numberToHclTerraform(this._existingOrg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      existing_user: {
        value: cdktf.numberToHclTerraform(this._existingUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glm_email: {
        value: cdktf.stringToHclTerraform(this._glmEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glm_password: {
        value: cdktf.stringToHclTerraform(this._glmPassword),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
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
      new_email: {
        value: cdktf.stringToHclTerraform(this._newEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_password: {
        value: cdktf.stringToHclTerraform(this._newPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_user: {
        value: cdktf.numberToHclTerraform(this._newUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org_id: {
        value: cdktf.numberToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
