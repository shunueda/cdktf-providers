// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_authentication_policies_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateSessionAuthenticationPoliciesGlobalConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_authentication_policies_global pingfederate_session_authentication_policies_global}
*/
export class DataPingfederateSessionAuthenticationPoliciesGlobal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_session_authentication_policies_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateSessionAuthenticationPoliciesGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateSessionAuthenticationPoliciesGlobal to import
  * @param importFromId The id of the existing DataPingfederateSessionAuthenticationPoliciesGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_authentication_policies_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateSessionAuthenticationPoliciesGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_session_authentication_policies_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/session_authentication_policies_global pingfederate_session_authentication_policies_global} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateSessionAuthenticationPoliciesGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateSessionAuthenticationPoliciesGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_session_authentication_policies_global',
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

  // enable_sessions - computed: true, optional: false, required: false
  public get enableSessions() {
    return this.getBooleanAttribute('enable_sessions');
  }

  // hash_unique_user_key_attribute - computed: true, optional: false, required: false
  public get hashUniqueUserKeyAttribute() {
    return this.getBooleanAttribute('hash_unique_user_key_attribute');
  }

  // idle_timeout_display_unit - computed: true, optional: false, required: false
  public get idleTimeoutDisplayUnit() {
    return this.getStringAttribute('idle_timeout_display_unit');
  }

  // idle_timeout_mins - computed: true, optional: false, required: false
  public get idleTimeoutMins() {
    return this.getNumberAttribute('idle_timeout_mins');
  }

  // max_timeout_display_unit - computed: true, optional: false, required: false
  public get maxTimeoutDisplayUnit() {
    return this.getStringAttribute('max_timeout_display_unit');
  }

  // max_timeout_mins - computed: true, optional: false, required: false
  public get maxTimeoutMins() {
    return this.getNumberAttribute('max_timeout_mins');
  }

  // persistent_sessions - computed: true, optional: false, required: false
  public get persistentSessions() {
    return this.getBooleanAttribute('persistent_sessions');
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
