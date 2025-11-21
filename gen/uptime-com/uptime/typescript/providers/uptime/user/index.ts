// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#access_level User#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#assigned_subaccounts User#assigned_subaccounts}
  */
  readonly assignedSubaccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#is_api_enabled User#is_api_enabled}
  */
  readonly isApiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#notify_paid_invoices User#notify_paid_invoices}
  */
  readonly notifyPaidInvoices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#require_two_factor User#require_two_factor}
  */
  readonly requireTwoFactor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user uptime_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/user uptime_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_user',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._assignedSubaccounts = config.assignedSubaccounts;
    this._email = config.email;
    this._firstName = config.firstName;
    this._isApiEnabled = config.isApiEnabled;
    this._lastName = config.lastName;
    this._notifyPaidInvoices = config.notifyPaidInvoices;
    this._password = config.password;
    this._requireTwoFactor = config.requireTwoFactor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: true, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // assigned_subaccounts - computed: true, optional: true, required: false
  private _assignedSubaccounts?: string[]; 
  public get assignedSubaccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_subaccounts'));
  }
  public set assignedSubaccounts(value: string[]) {
    this._assignedSubaccounts = value;
  }
  public resetAssignedSubaccounts() {
    this._assignedSubaccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedSubaccountsInput() {
    return this._assignedSubaccounts;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_api_enabled - computed: true, optional: true, required: false
  private _isApiEnabled?: boolean | cdktf.IResolvable; 
  public get isApiEnabled() {
    return this.getBooleanAttribute('is_api_enabled');
  }
  public set isApiEnabled(value: boolean | cdktf.IResolvable) {
    this._isApiEnabled = value;
  }
  public resetIsApiEnabled() {
    this._isApiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApiEnabledInput() {
    return this._isApiEnabled;
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
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

  // must_two_factor - computed: true, optional: false, required: false
  public get mustTwoFactor() {
    return this.getBooleanAttribute('must_two_factor');
  }

  // notify_paid_invoices - computed: true, optional: true, required: false
  private _notifyPaidInvoices?: boolean | cdktf.IResolvable; 
  public get notifyPaidInvoices() {
    return this.getBooleanAttribute('notify_paid_invoices');
  }
  public set notifyPaidInvoices(value: boolean | cdktf.IResolvable) {
    this._notifyPaidInvoices = value;
  }
  public resetNotifyPaidInvoices() {
    this._notifyPaidInvoices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPaidInvoicesInput() {
    return this._notifyPaidInvoices;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // require_two_factor - computed: true, optional: true, required: false
  private _requireTwoFactor?: string; 
  public get requireTwoFactor() {
    return this.getStringAttribute('require_two_factor');
  }
  public set requireTwoFactor(value: string) {
    this._requireTwoFactor = value;
  }
  public resetRequireTwoFactor() {
    this._requireTwoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTwoFactorInput() {
    return this._requireTwoFactor;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      assigned_subaccounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedSubaccounts),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      is_api_enabled: cdktf.booleanToTerraform(this._isApiEnabled),
      last_name: cdktf.stringToTerraform(this._lastName),
      notify_paid_invoices: cdktf.booleanToTerraform(this._notifyPaidInvoices),
      password: cdktf.stringToTerraform(this._password),
      require_two_factor: cdktf.stringToTerraform(this._requireTwoFactor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_subaccounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedSubaccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      is_api_enabled: {
        value: cdktf.booleanToHclTerraform(this._isApiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_paid_invoices: {
        value: cdktf.booleanToHclTerraform(this._notifyPaidInvoices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_two_factor: {
        value: cdktf.stringToHclTerraform(this._requireTwoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
