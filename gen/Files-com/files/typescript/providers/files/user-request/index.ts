// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * User's company name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request#company UserRequest#company}
  */
  readonly company?: string;
  /**
  * Details of the user's request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request#details UserRequest#details}
  */
  readonly details: string;
  /**
  * User email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request#email UserRequest#email}
  */
  readonly email: string;
  /**
  * User's full name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request#name UserRequest#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request files_user_request}
*/
export class UserRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_user_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRequest to import
  * @param importFromId The id of the existing UserRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_user_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/user_request files_user_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRequestConfig
  */
  public constructor(scope: Construct, id: string, config: UserRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'files_user_request',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._company = config.company;
    this._details = config.details;
    this._email = config.email;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company - computed: true, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // details - computed: false, optional: false, required: true
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company: cdktf.stringToTerraform(this._company),
      details: cdktf.stringToTerraform(this._details),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: cdktf.stringToHclTerraform(this._details),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
