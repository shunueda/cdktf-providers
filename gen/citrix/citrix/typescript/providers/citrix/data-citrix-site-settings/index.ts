// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixSiteSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site_settings citrix_site_settings}
*/
export class DataCitrixSiteSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_site_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixSiteSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixSiteSettings to import
  * @param importFromId The id of the existing DataCitrixSiteSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixSiteSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_site_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site_settings citrix_site_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixSiteSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixSiteSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_site_settings',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
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

  // allowed_cors_origins_for_iwa - computed: true, optional: false, required: false
  public get allowedCorsOriginsForIwa() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_cors_origins_for_iwa'));
  }

  // console_inactivity_timeout_minutes - computed: true, optional: false, required: false
  public get consoleInactivityTimeoutMinutes() {
    return this.getNumberAttribute('console_inactivity_timeout_minutes');
  }

  // dns_resolution_enabled - computed: true, optional: false, required: false
  public get dnsResolutionEnabled() {
    return this.getBooleanAttribute('dns_resolution_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiple_remote_pc_assignments - computed: true, optional: false, required: false
  public get multipleRemotePcAssignments() {
    return this.getBooleanAttribute('multiple_remote_pc_assignments');
  }

  // supported_authenticators - computed: true, optional: false, required: false
  public get supportedAuthenticators() {
    return this.getStringAttribute('supported_authenticators');
  }

  // trust_requests_sent_to_the_xml_service_port_enabled - computed: true, optional: false, required: false
  public get trustRequestsSentToTheXmlServicePortEnabled() {
    return this.getBooleanAttribute('trust_requests_sent_to_the_xml_service_port_enabled');
  }

  // use_vertical_scaling_for_sessions_on_machines - computed: true, optional: false, required: false
  public get useVerticalScalingForSessionsOnMachines() {
    return this.getBooleanAttribute('use_vertical_scaling_for_sessions_on_machines');
  }

  // web_ui_policy_set_enabled - computed: true, optional: false, required: false
  public get webUiPolicySetEnabled() {
    return this.getBooleanAttribute('web_ui_policy_set_enabled');
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
