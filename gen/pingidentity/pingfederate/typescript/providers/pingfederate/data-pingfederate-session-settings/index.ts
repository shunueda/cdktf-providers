// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateSessionSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_settings pingfederate_session_settings}
*/
export class DataPingfederateSessionSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_session_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateSessionSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateSessionSettings to import
  * @param importFromId The id of the existing DataPingfederateSessionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateSessionSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_session_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_settings pingfederate_session_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateSessionSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateSessionSettingsConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // revoke_user_session_on_logout - computed: true, optional: false, required: false
  public get revokeUserSessionOnLogout() {
    return this.getBooleanAttribute('revoke_user_session_on_logout');
  }

  // session_revocation_lifetime - computed: true, optional: false, required: false
  public get sessionRevocationLifetime() {
    return this.getNumberAttribute('session_revocation_lifetime');
  }

  // track_adapter_sessions_for_logout - computed: true, optional: false, required: false
  public get trackAdapterSessionsForLogout() {
    return this.getBooleanAttribute('track_adapter_sessions_for_logout');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
