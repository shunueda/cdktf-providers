// https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAvatarConfig extends cdktf.TerraformMetaArguments {
  /**
  * A local path to the avatar image to upload. **Note**: the avatar is not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar#avatar UserAvatar#avatar}
  */
  readonly avatar: string;
  /**
  * The hash of the avatar image.  This is used to track changes to the avatar image if the image contents change but the image name remains the same. Use `filesha256("path/to/avatar.png")` whenever possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar#avatar_hash UserAvatar#avatar_hash}
  */
  readonly avatarHash?: string;
  /**
  * The access token of the user. If this field is omitted, a GitLab token with administrator scope is required to manage the avatar for the specified user. **Note**: the token is not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar#token UserAvatar#token}
  */
  readonly token?: string;
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar#user_id UserAvatar#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar gitlab_user_avatar}
*/
export class UserAvatar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user_avatar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAvatar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAvatar to import
  * @param importFromId The id of the existing UserAvatar that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAvatar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_user_avatar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/resources/user_avatar gitlab_user_avatar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAvatarConfig
  */
  public constructor(scope: Construct, id: string, config: UserAvatarConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_user_avatar',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.7.0',
        providerVersionConstraint: '18.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatar = config.avatar;
    this._avatarHash = config.avatarHash;
    this._token = config.token;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar - computed: false, optional: false, required: true
  private _avatar?: string; 
  public get avatar() {
    return this.getStringAttribute('avatar');
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // avatar_hash - computed: false, optional: true, required: false
  private _avatarHash?: string; 
  public get avatarHash() {
    return this.getStringAttribute('avatar_hash');
  }
  public set avatarHash(value: string) {
    this._avatarHash = value;
  }
  public resetAvatarHash() {
    this._avatarHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarHashInput() {
    return this._avatarHash;
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avatar: cdktf.stringToTerraform(this._avatar),
      avatar_hash: cdktf.stringToTerraform(this._avatarHash),
      token: cdktf.stringToTerraform(this._token),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar: {
        value: cdktf.stringToHclTerraform(this._avatar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar_hash: {
        value: cdktf.stringToHclTerraform(this._avatarHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
