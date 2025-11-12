// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserExternalIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the User used by the Authentication Provider. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity#external_identity UserExternalIdentity#external_identity}
  */
  readonly externalIdentity: string;
  /**
  * The key of the Authentication Provider. The Authentication Provider must be activated on Sonarqube. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity#external_provider UserExternalIdentity#external_provider}
  */
  readonly externalProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity#id UserExternalIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The login name of the User to update. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity#login_name UserExternalIdentity#login_name}
  */
  readonly loginName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity sonarqube_user_external_identity}
*/
export class UserExternalIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_user_external_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserExternalIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserExternalIdentity to import
  * @param importFromId The id of the existing UserExternalIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserExternalIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_user_external_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/user_external_identity sonarqube_user_external_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserExternalIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: UserExternalIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_user_external_identity',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17',
        providerVersionConstraint: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalIdentity = config.externalIdentity;
    this._externalProvider = config.externalProvider;
    this._id = config.id;
    this._loginName = config.loginName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_identity - computed: false, optional: false, required: true
  private _externalIdentity?: string; 
  public get externalIdentity() {
    return this.getStringAttribute('external_identity');
  }
  public set externalIdentity(value: string) {
    this._externalIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdentityInput() {
    return this._externalIdentity;
  }

  // external_provider - computed: false, optional: false, required: true
  private _externalProvider?: string; 
  public get externalProvider() {
    return this.getStringAttribute('external_provider');
  }
  public set externalProvider(value: string) {
    this._externalProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalProviderInput() {
    return this._externalProvider;
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

  // login_name - computed: false, optional: false, required: true
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_identity: cdktf.stringToTerraform(this._externalIdentity),
      external_provider: cdktf.stringToTerraform(this._externalProvider),
      id: cdktf.stringToTerraform(this._id),
      login_name: cdktf.stringToTerraform(this._loginName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_identity: {
        value: cdktf.stringToHclTerraform(this._externalIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_provider: {
        value: cdktf.stringToHclTerraform(this._externalProvider),
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
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
