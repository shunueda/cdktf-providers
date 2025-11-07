// https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHeadscaleUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#display_name DataHeadscaleUser#display_name}
  */
  readonly displayName?: string;
  /**
  * The user's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#email DataHeadscaleUser#email}
  */
  readonly email?: string;
  /**
  * If the user should be deleted even if it has nodes attached to it. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#force_delete DataHeadscaleUser#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * The user's id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#id DataHeadscaleUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#name DataHeadscaleUser#name}
  */
  readonly name?: string;
  /**
  * The URL of the user's profile picture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#profile_picture_url DataHeadscaleUser#profile_picture_url}
  */
  readonly profilePictureUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user headscale_user}
*/
export class DataHeadscaleUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "headscale_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHeadscaleUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHeadscaleUser to import
  * @param importFromId The id of the existing DataHeadscaleUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHeadscaleUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "headscale_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/data-sources/user headscale_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHeadscaleUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHeadscaleUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'headscale_user',
      terraformGeneratorMetadata: {
        providerName: 'headscale',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._email = config.email;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._name = config.name;
    this._profilePictureUrl = config.profilePictureUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // profile_picture_url - computed: true, optional: true, required: false
  private _profilePictureUrl?: string; 
  public get profilePictureUrl() {
    return this.getStringAttribute('profile_picture_url');
  }
  public set profilePictureUrl(value: string) {
    this._profilePictureUrl = value;
  }
  public resetProfilePictureUrl() {
    this._profilePictureUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePictureUrlInput() {
    return this._profilePictureUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      profile_picture_url: cdktf.stringToTerraform(this._profilePictureUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      profile_picture_url: {
        value: cdktf.stringToHclTerraform(this._profilePictureUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
