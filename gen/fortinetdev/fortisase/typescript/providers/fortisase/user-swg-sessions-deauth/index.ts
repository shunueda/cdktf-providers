// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/user_swg_sessions_deauth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSwgSessionsDeauthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/user_swg_sessions_deauth#session_ids UserSwgSessionsDeauth#session_ids}
  */
  readonly sessionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/user_swg_sessions_deauth#usernames UserSwgSessionsDeauth#usernames}
  */
  readonly usernames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/user_swg_sessions_deauth fortisase_user_swg_sessions_deauth}
*/
export class UserSwgSessionsDeauth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_user_swg_sessions_deauth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserSwgSessionsDeauth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserSwgSessionsDeauth to import
  * @param importFromId The id of the existing UserSwgSessionsDeauth that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/user_swg_sessions_deauth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserSwgSessionsDeauth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_user_swg_sessions_deauth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/user_swg_sessions_deauth fortisase_user_swg_sessions_deauth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSwgSessionsDeauthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserSwgSessionsDeauthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_user_swg_sessions_deauth',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sessionIds = config.sessionIds;
    this._usernames = config.usernames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // session_ids - computed: true, optional: true, required: false
  private _sessionIds?: string[]; 
  public get sessionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('session_ids'));
  }
  public set sessionIds(value: string[]) {
    this._sessionIds = value;
  }
  public resetSessionIds() {
    this._sessionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdsInput() {
    return this._sessionIds;
  }

  // usernames - computed: true, optional: true, required: false
  private _usernames?: string[]; 
  public get usernames() {
    return cdktf.Fn.tolist(this.getListAttribute('usernames'));
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  public resetUsernames() {
    this._usernames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      session_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sessionIds),
      usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usernames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      session_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sessionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      usernames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usernames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
