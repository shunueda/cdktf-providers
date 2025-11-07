// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateAuthenticationPoliciesSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_settings pingfederate_authentication_policies_settings}
*/
export class DataPingfederateAuthenticationPoliciesSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_policies_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateAuthenticationPoliciesSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateAuthenticationPoliciesSettings to import
  * @param importFromId The id of the existing DataPingfederateAuthenticationPoliciesSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateAuthenticationPoliciesSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_policies_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_settings pingfederate_authentication_policies_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateAuthenticationPoliciesSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateAuthenticationPoliciesSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_policies_settings',
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

  // enable_idp_authn_selection - computed: true, optional: false, required: false
  public get enableIdpAuthnSelection() {
    return this.getBooleanAttribute('enable_idp_authn_selection');
  }

  // enable_sp_authn_selection - computed: true, optional: false, required: false
  public get enableSpAuthnSelection() {
    return this.getBooleanAttribute('enable_sp_authn_selection');
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
