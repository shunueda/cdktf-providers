// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Authentication type of an app.
  *    * `type`:  Following authentication types are supported.
  *        * api_key, awsxks, awsiam, certificate and trustedca.
  *    * `certificate`: Certificate value, this should be configured when the type is certificate.
  *    * `ca_certificate`: CA certificate value, this should be configured when the type is trustedca.
  *    One of the following parameters should be given when the type is trustedca.
  *    * `ip_address`:  IP address value for trusted ca.
  *    * `dns_name`:  DNS name for trusted ca.
  *    **Note**: For more details refer the above examples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app#authentication_method AdminApp#authentication_method}
  */
  readonly authenticationMethod: { [key: string]: string };
  /**
  * The description of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app#description AdminApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app#id AdminApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Fortanix DSM App name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app#name AdminApp#name}
  */
  readonly name: string;
  /**
  * Set this if you want to rotate/regenerate the API key(secret). The values can be set as true/false.
  * 
  * **Note**: This should set only when the type of authentication_method is secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app#new_credential AdminApp#new_credential}
  */
  readonly newCredential?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app dsm_admin_app}
*/
export class AdminApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_admin_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminApp to import
  * @param importFromId The id of the existing AdminApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_admin_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/admin_app dsm_admin_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminAppConfig
  */
  public constructor(scope: Construct, id: string, config: AdminAppConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_admin_app',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36',
        providerVersionConstraint: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethod = config.authenticationMethod;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._newCredential = config.newCredential;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: { [key: string]: string }; 
  public get authenticationMethod() {
    return this.getStringMapAttribute('authentication_method');
  }
  public set authenticationMethod(value: { [key: string]: string }) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
  }

  // credential - computed: true, optional: false, required: false
  private _credential = new cdktf.StringMap(this, "credential");
  public get credential() {
    return this._credential;
  }

  // description - computed: false, optional: true, required: false
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

  // new_credential - computed: false, optional: true, required: false
  private _newCredential?: boolean | cdktf.IResolvable; 
  public get newCredential() {
    return this.getBooleanAttribute('new_credential');
  }
  public set newCredential(value: boolean | cdktf.IResolvable) {
    this._newCredential = value;
  }
  public resetNewCredential() {
    this._newCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newCredentialInput() {
    return this._newCredential;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.hashMapper(cdktf.stringToTerraform)(this._authenticationMethod),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      new_credential: cdktf.booleanToTerraform(this._newCredential),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._authenticationMethod),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      new_credential: {
        value: cdktf.booleanToHclTerraform(this._newCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
