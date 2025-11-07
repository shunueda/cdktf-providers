// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthentikUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user#id DataAuthentikUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user#pk DataAuthentikUser#pk}
  */
  readonly pk?: number;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user#username DataAuthentikUser#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user authentik_user}
*/
export class DataAuthentikUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthentikUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthentikUser to import
  * @param importFromId The id of the existing DataAuthentikUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthentikUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/user authentik_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthentikUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuthentikUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'authentik_user',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._pk = config.pk;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // avatar - computed: true, optional: false, required: false
  public get avatar() {
    return this.getStringAttribute('avatar');
  }

  // date_joined - computed: true, optional: false, required: false
  public get dateJoined() {
    return this.getStringAttribute('date_joined');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
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

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_superuser - computed: true, optional: false, required: false
  public get isSuperuser() {
    return this.getBooleanAttribute('is_superuser');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // pk - computed: true, optional: true, required: false
  private _pk?: number; 
  public get pk() {
    return this.getNumberAttribute('pk');
  }
  public set pk(value: number) {
    this._pk = value;
  }
  public resetPk() {
    this._pk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkInput() {
    return this._pk;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pk: cdktf.numberToTerraform(this._pk),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pk: {
        value: cdktf.numberToHclTerraform(this._pk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
