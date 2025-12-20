// https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can lock be modified by users other than its creator?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock#allow_access_by_any_user Lock#allow_access_by_any_user}
  */
  readonly allowAccessByAnyUser?: boolean | cdktf.IResolvable;
  /**
  * Is lock exclusive?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock#exclusive Lock#exclusive}
  */
  readonly exclusive?: boolean | cdktf.IResolvable;
  /**
  * Path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock#path Lock#path}
  */
  readonly path: string;
  /**
  * Does lock apply to subfolders?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock#recursive Lock#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Lock timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock#timeout Lock#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock files_lock}
*/
export class Lock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_lock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lock to import
  * @param importFromId The id of the existing Lock that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_lock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/lock files_lock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LockConfig
  */
  public constructor(scope: Construct, id: string, config: LockConfig) {
    super(scope, id, {
      terraformResourceType: 'files_lock',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAccessByAnyUser = config.allowAccessByAnyUser;
    this._exclusive = config.exclusive;
    this._path = config.path;
    this._recursive = config.recursive;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_access_by_any_user - computed: true, optional: true, required: false
  private _allowAccessByAnyUser?: boolean | cdktf.IResolvable; 
  public get allowAccessByAnyUser() {
    return this.getBooleanAttribute('allow_access_by_any_user');
  }
  public set allowAccessByAnyUser(value: boolean | cdktf.IResolvable) {
    this._allowAccessByAnyUser = value;
  }
  public resetAllowAccessByAnyUser() {
    this._allowAccessByAnyUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessByAnyUserInput() {
    return this._allowAccessByAnyUser;
  }

  // depth - computed: true, optional: false, required: false
  public get depth() {
    return this.getStringAttribute('depth');
  }

  // exclusive - computed: true, optional: true, required: false
  private _exclusive?: boolean | cdktf.IResolvable; 
  public get exclusive() {
    return this.getBooleanAttribute('exclusive');
  }
  public set exclusive(value: boolean | cdktf.IResolvable) {
    this._exclusive = value;
  }
  public resetExclusive() {
    this._exclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveInput() {
    return this._exclusive;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recursive - computed: true, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_access_by_any_user: cdktf.booleanToTerraform(this._allowAccessByAnyUser),
      exclusive: cdktf.booleanToTerraform(this._exclusive),
      path: cdktf.stringToTerraform(this._path),
      recursive: cdktf.booleanToTerraform(this._recursive),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_access_by_any_user: {
        value: cdktf.booleanToHclTerraform(this._allowAccessByAnyUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclusive: {
        value: cdktf.booleanToHclTerraform(this._exclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
