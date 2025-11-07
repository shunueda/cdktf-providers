// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the user's session is revoked on logout. The default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings#revoke_user_session_on_logout SessionSettings#revoke_user_session_on_logout}
  */
  readonly revokeUserSessionOnLogout?: boolean | cdktf.IResolvable;
  /**
  * How long a session revocation is tracked and stored, in minutes. The default is `40`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings#session_revocation_lifetime SessionSettings#session_revocation_lifetime}
  */
  readonly sessionRevocationLifetime?: number;
  /**
  * Determines whether adapter sessions are tracked for cleanup during single logout. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings#track_adapter_sessions_for_logout SessionSettings#track_adapter_sessions_for_logout}
  */
  readonly trackAdapterSessionsForLogout?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings pingfederate_session_settings}
*/
export class SessionSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_session_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionSettings to import
  * @param importFromId The id of the existing SessionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_session_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_settings pingfederate_session_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SessionSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_session_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._revokeUserSessionOnLogout = config.revokeUserSessionOnLogout;
    this._sessionRevocationLifetime = config.sessionRevocationLifetime;
    this._trackAdapterSessionsForLogout = config.trackAdapterSessionsForLogout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // revoke_user_session_on_logout - computed: true, optional: true, required: false
  private _revokeUserSessionOnLogout?: boolean | cdktf.IResolvable; 
  public get revokeUserSessionOnLogout() {
    return this.getBooleanAttribute('revoke_user_session_on_logout');
  }
  public set revokeUserSessionOnLogout(value: boolean | cdktf.IResolvable) {
    this._revokeUserSessionOnLogout = value;
  }
  public resetRevokeUserSessionOnLogout() {
    this._revokeUserSessionOnLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeUserSessionOnLogoutInput() {
    return this._revokeUserSessionOnLogout;
  }

  // session_revocation_lifetime - computed: true, optional: true, required: false
  private _sessionRevocationLifetime?: number; 
  public get sessionRevocationLifetime() {
    return this.getNumberAttribute('session_revocation_lifetime');
  }
  public set sessionRevocationLifetime(value: number) {
    this._sessionRevocationLifetime = value;
  }
  public resetSessionRevocationLifetime() {
    this._sessionRevocationLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRevocationLifetimeInput() {
    return this._sessionRevocationLifetime;
  }

  // track_adapter_sessions_for_logout - computed: true, optional: true, required: false
  private _trackAdapterSessionsForLogout?: boolean | cdktf.IResolvable; 
  public get trackAdapterSessionsForLogout() {
    return this.getBooleanAttribute('track_adapter_sessions_for_logout');
  }
  public set trackAdapterSessionsForLogout(value: boolean | cdktf.IResolvable) {
    this._trackAdapterSessionsForLogout = value;
  }
  public resetTrackAdapterSessionsForLogout() {
    this._trackAdapterSessionsForLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackAdapterSessionsForLogoutInput() {
    return this._trackAdapterSessionsForLogout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      revoke_user_session_on_logout: cdktf.booleanToTerraform(this._revokeUserSessionOnLogout),
      session_revocation_lifetime: cdktf.numberToTerraform(this._sessionRevocationLifetime),
      track_adapter_sessions_for_logout: cdktf.booleanToTerraform(this._trackAdapterSessionsForLogout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      revoke_user_session_on_logout: {
        value: cdktf.booleanToHclTerraform(this._revokeUserSessionOnLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_revocation_lifetime: {
        value: cdktf.numberToHclTerraform(this._sessionRevocationLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_adapter_sessions_for_logout: {
        value: cdktf.booleanToHclTerraform(this._trackAdapterSessionsForLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
