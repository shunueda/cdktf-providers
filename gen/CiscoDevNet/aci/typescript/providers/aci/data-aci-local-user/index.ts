// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciLocalUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#account_status DataAciLocalUser#account_status}
  */
  readonly accountStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#annotation DataAciLocalUser#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#cert_attribute DataAciLocalUser#cert_attribute}
  */
  readonly certAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#clear_pwd_history DataAciLocalUser#clear_pwd_history}
  */
  readonly clearPwdHistory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#description DataAciLocalUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#email DataAciLocalUser#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#expiration DataAciLocalUser#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#expires DataAciLocalUser#expires}
  */
  readonly expires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#first_name DataAciLocalUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#id DataAciLocalUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#last_name DataAciLocalUser#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#name DataAciLocalUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#name_alias DataAciLocalUser#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#otpenable DataAciLocalUser#otpenable}
  */
  readonly otpenable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#otpkey DataAciLocalUser#otpkey}
  */
  readonly otpkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#phone DataAciLocalUser#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#pwd_life_time DataAciLocalUser#pwd_life_time}
  */
  readonly pwdLifeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#pwd_update_required DataAciLocalUser#pwd_update_required}
  */
  readonly pwdUpdateRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#rbac_string DataAciLocalUser#rbac_string}
  */
  readonly rbacString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#unix_user_id DataAciLocalUser#unix_user_id}
  */
  readonly unixUserId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user aci_local_user}
*/
export class DataAciLocalUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_local_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciLocalUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciLocalUser to import
  * @param importFromId The id of the existing DataAciLocalUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciLocalUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_local_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/local_user aci_local_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciLocalUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciLocalUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_local_user',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountStatus = config.accountStatus;
    this._annotation = config.annotation;
    this._certAttribute = config.certAttribute;
    this._clearPwdHistory = config.clearPwdHistory;
    this._description = config.description;
    this._email = config.email;
    this._expiration = config.expiration;
    this._expires = config.expires;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._otpenable = config.otpenable;
    this._otpkey = config.otpkey;
    this._phone = config.phone;
    this._pwdLifeTime = config.pwdLifeTime;
    this._pwdUpdateRequired = config.pwdUpdateRequired;
    this._rbacString = config.rbacString;
    this._unixUserId = config.unixUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_status - computed: true, optional: true, required: false
  private _accountStatus?: string; 
  public get accountStatus() {
    return this.getStringAttribute('account_status');
  }
  public set accountStatus(value: string) {
    this._accountStatus = value;
  }
  public resetAccountStatus() {
    this._accountStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountStatusInput() {
    return this._accountStatus;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // cert_attribute - computed: true, optional: true, required: false
  private _certAttribute?: string; 
  public get certAttribute() {
    return this.getStringAttribute('cert_attribute');
  }
  public set certAttribute(value: string) {
    this._certAttribute = value;
  }
  public resetCertAttribute() {
    this._certAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAttributeInput() {
    return this._certAttribute;
  }

  // clear_pwd_history - computed: true, optional: true, required: false
  private _clearPwdHistory?: string; 
  public get clearPwdHistory() {
    return this.getStringAttribute('clear_pwd_history');
  }
  public set clearPwdHistory(value: string) {
    this._clearPwdHistory = value;
  }
  public resetClearPwdHistory() {
    this._clearPwdHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPwdHistoryInput() {
    return this._clearPwdHistory;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expiration - computed: true, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // first_name - computed: true, optional: true, required: false
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

  // last_name - computed: true, optional: true, required: false
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // otpenable - computed: true, optional: true, required: false
  private _otpenable?: string; 
  public get otpenable() {
    return this.getStringAttribute('otpenable');
  }
  public set otpenable(value: string) {
    this._otpenable = value;
  }
  public resetOtpenable() {
    this._otpenable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpenableInput() {
    return this._otpenable;
  }

  // otpkey - computed: true, optional: true, required: false
  private _otpkey?: string; 
  public get otpkey() {
    return this.getStringAttribute('otpkey');
  }
  public set otpkey(value: string) {
    this._otpkey = value;
  }
  public resetOtpkey() {
    this._otpkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpkeyInput() {
    return this._otpkey;
  }

  // phone - computed: true, optional: true, required: false
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

  // pwd_life_time - computed: true, optional: true, required: false
  private _pwdLifeTime?: string; 
  public get pwdLifeTime() {
    return this.getStringAttribute('pwd_life_time');
  }
  public set pwdLifeTime(value: string) {
    this._pwdLifeTime = value;
  }
  public resetPwdLifeTime() {
    this._pwdLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdLifeTimeInput() {
    return this._pwdLifeTime;
  }

  // pwd_update_required - computed: true, optional: true, required: false
  private _pwdUpdateRequired?: string; 
  public get pwdUpdateRequired() {
    return this.getStringAttribute('pwd_update_required');
  }
  public set pwdUpdateRequired(value: string) {
    this._pwdUpdateRequired = value;
  }
  public resetPwdUpdateRequired() {
    this._pwdUpdateRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdUpdateRequiredInput() {
    return this._pwdUpdateRequired;
  }

  // rbac_string - computed: true, optional: true, required: false
  private _rbacString?: string; 
  public get rbacString() {
    return this.getStringAttribute('rbac_string');
  }
  public set rbacString(value: string) {
    this._rbacString = value;
  }
  public resetRbacString() {
    this._rbacString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacStringInput() {
    return this._rbacString;
  }

  // unix_user_id - computed: true, optional: true, required: false
  private _unixUserId?: string; 
  public get unixUserId() {
    return this.getStringAttribute('unix_user_id');
  }
  public set unixUserId(value: string) {
    this._unixUserId = value;
  }
  public resetUnixUserId() {
    this._unixUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixUserIdInput() {
    return this._unixUserId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_status: cdktf.stringToTerraform(this._accountStatus),
      annotation: cdktf.stringToTerraform(this._annotation),
      cert_attribute: cdktf.stringToTerraform(this._certAttribute),
      clear_pwd_history: cdktf.stringToTerraform(this._clearPwdHistory),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      expiration: cdktf.stringToTerraform(this._expiration),
      expires: cdktf.stringToTerraform(this._expires),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      otpenable: cdktf.stringToTerraform(this._otpenable),
      otpkey: cdktf.stringToTerraform(this._otpkey),
      phone: cdktf.stringToTerraform(this._phone),
      pwd_life_time: cdktf.stringToTerraform(this._pwdLifeTime),
      pwd_update_required: cdktf.stringToTerraform(this._pwdUpdateRequired),
      rbac_string: cdktf.stringToTerraform(this._rbacString),
      unix_user_id: cdktf.stringToTerraform(this._unixUserId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_status: {
        value: cdktf.stringToHclTerraform(this._accountStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_attribute: {
        value: cdktf.stringToHclTerraform(this._certAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_pwd_history: {
        value: cdktf.stringToHclTerraform(this._clearPwdHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires: {
        value: cdktf.stringToHclTerraform(this._expires),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otpenable: {
        value: cdktf.stringToHclTerraform(this._otpenable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otpkey: {
        value: cdktf.stringToHclTerraform(this._otpkey),
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
      pwd_life_time: {
        value: cdktf.stringToHclTerraform(this._pwdLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwd_update_required: {
        value: cdktf.stringToHclTerraform(this._pwdUpdateRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rbac_string: {
        value: cdktf.stringToHclTerraform(this._rbacString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unix_user_id: {
        value: cdktf.stringToHclTerraform(this._unixUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
