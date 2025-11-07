// https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConcourseProviderConfig {
  /**
  * Password, do not use if using target 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#password ConcourseProvider#password}
  */
  readonly password?: string;
  /**
  * Target as in 'fly --target', do not use if using team/username/password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#target ConcourseProvider#target}
  */
  readonly target?: string;
  /**
  * Team name, do not use if using target 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#team ConcourseProvider#team}
  */
  readonly team?: string;
  /**
  * URL, do not use if using target 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#url ConcourseProvider#url}
  */
  readonly url?: string;
  /**
  * Username, do not use if using target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#username ConcourseProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#alias ConcourseProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs concourse}
*/
export class ConcourseProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "concourse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConcourseProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConcourseProvider to import
  * @param importFromId The id of the existing ConcourseProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConcourseProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "concourse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-concourse/concourse/8.0.1/docs concourse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConcourseProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConcourseProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'concourse',
      terraformGeneratorMetadata: {
        providerName: 'concourse',
        providerVersion: '8.0.1'
      },
      terraformProviderSource: 'terraform-provider-concourse/concourse'
    });
    this._password = config.password;
    this._target = config.target;
    this._team = config.team;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this._target;
  }
  public set target(value: string | undefined) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this._team;
  }
  public set team(value: string | undefined) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      target: cdktf.stringToTerraform(this._target),
      team: cdktf.stringToTerraform(this._team),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team: {
        value: cdktf.stringToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
