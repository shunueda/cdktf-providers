// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/tenant_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSccfmTenantSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/tenant_settings sccfm_tenant_settings}
*/
export class DataSccfmTenantSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_tenant_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSccfmTenantSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSccfmTenantSettings to import
  * @param importFromId The id of the existing DataSccfmTenantSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/tenant_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSccfmTenantSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_tenant_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.0/docs/data-sources/tenant_settings sccfm_tenant_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSccfmTenantSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSccfmTenantSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sccfm_tenant_settings',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
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

  // auto_accept_device_changes_enabled - computed: true, optional: false, required: false
  public get autoAcceptDeviceChangesEnabled() {
    return this.getBooleanAttribute('auto_accept_device_changes_enabled');
  }

  // auto_discover_on_prem_fmcs_enabled - computed: true, optional: false, required: false
  public get autoDiscoverOnPremFmcsEnabled() {
    return this.getBooleanAttribute('auto_discover_on_prem_fmcs_enabled');
  }

  // change_request_support_enabled - computed: true, optional: false, required: false
  public get changeRequestSupportEnabled() {
    return this.getBooleanAttribute('change_request_support_enabled');
  }

  // conflict_detection_interval - computed: true, optional: false, required: false
  public get conflictDetectionInterval() {
    return this.getStringAttribute('conflict_detection_interval');
  }

  // deny_cisco_support_access_to_tenant_enabled - computed: true, optional: false, required: false
  public get denyCiscoSupportAccessToTenantEnabled() {
    return this.getBooleanAttribute('deny_cisco_support_access_to_tenant_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_cloud_defense_enabled - computed: true, optional: false, required: false
  public get multiCloudDefenseEnabled() {
    return this.getBooleanAttribute('multi_cloud_defense_enabled');
  }

  // scheduled_deployments_enabled - computed: true, optional: false, required: false
  public get scheduledDeploymentsEnabled() {
    return this.getBooleanAttribute('scheduled_deployments_enabled');
  }

  // web_analytics_enabled - computed: true, optional: false, required: false
  public get webAnalyticsEnabled() {
    return this.getBooleanAttribute('web_analytics_enabled');
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
