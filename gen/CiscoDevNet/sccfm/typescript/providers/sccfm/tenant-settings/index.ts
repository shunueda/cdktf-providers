// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This attribute indicates whether auto accept device changes is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#auto_accept_device_changes_enabled TenantSettings#auto_accept_device_changes_enabled}
  */
  readonly autoAcceptDeviceChangesEnabled?: boolean | cdktf.IResolvable;
  /**
  * This attribute indicates whether change request support is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#auto_discover_on_prem_fmcs_enabled TenantSettings#auto_discover_on_prem_fmcs_enabled}
  */
  readonly autoDiscoverOnPremFmcsEnabled?: boolean | cdktf.IResolvable;
  /**
  * This attribute indicates whether change request support is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#change_request_support_enabled TenantSettings#change_request_support_enabled}
  */
  readonly changeRequestSupportEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval used by SCC Firewall Manager to detect conflicts on devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#conflict_detection_interval TenantSettings#conflict_detection_interval}
  */
  readonly conflictDetectionInterval?: string;
  /**
  * This attribute indicates whether denying cisco support engineers access to the tenant is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#deny_cisco_support_access_to_tenant_enabled TenantSettings#deny_cisco_support_access_to_tenant_enabled}
  */
  readonly denyCiscoSupportAccessToTenantEnabled?: boolean | cdktf.IResolvable;
  /**
  * This attribute indicates whether multi cloud defense is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#multi_cloud_defense_enabled TenantSettings#multi_cloud_defense_enabled}
  */
  readonly multiCloudDefenseEnabled?: boolean | cdktf.IResolvable;
  /**
  * This attribute indicates whether scheduled deployments is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#scheduled_deployments_enabled TenantSettings#scheduled_deployments_enabled}
  */
  readonly scheduledDeploymentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * This attribute indicates whether web analytics is enabled for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#web_analytics_enabled TenantSettings#web_analytics_enabled}
  */
  readonly webAnalyticsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings sccfm_tenant_settings}
*/
export class TenantSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_tenant_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantSettings to import
  * @param importFromId The id of the existing TenantSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_tenant_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/tenant_settings sccfm_tenant_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TenantSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sccfm_tenant_settings',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAcceptDeviceChangesEnabled = config.autoAcceptDeviceChangesEnabled;
    this._autoDiscoverOnPremFmcsEnabled = config.autoDiscoverOnPremFmcsEnabled;
    this._changeRequestSupportEnabled = config.changeRequestSupportEnabled;
    this._conflictDetectionInterval = config.conflictDetectionInterval;
    this._denyCiscoSupportAccessToTenantEnabled = config.denyCiscoSupportAccessToTenantEnabled;
    this._multiCloudDefenseEnabled = config.multiCloudDefenseEnabled;
    this._scheduledDeploymentsEnabled = config.scheduledDeploymentsEnabled;
    this._webAnalyticsEnabled = config.webAnalyticsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_accept_device_changes_enabled - computed: true, optional: true, required: false
  private _autoAcceptDeviceChangesEnabled?: boolean | cdktf.IResolvable; 
  public get autoAcceptDeviceChangesEnabled() {
    return this.getBooleanAttribute('auto_accept_device_changes_enabled');
  }
  public set autoAcceptDeviceChangesEnabled(value: boolean | cdktf.IResolvable) {
    this._autoAcceptDeviceChangesEnabled = value;
  }
  public resetAutoAcceptDeviceChangesEnabled() {
    this._autoAcceptDeviceChangesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptDeviceChangesEnabledInput() {
    return this._autoAcceptDeviceChangesEnabled;
  }

  // auto_discover_on_prem_fmcs_enabled - computed: true, optional: true, required: false
  private _autoDiscoverOnPremFmcsEnabled?: boolean | cdktf.IResolvable; 
  public get autoDiscoverOnPremFmcsEnabled() {
    return this.getBooleanAttribute('auto_discover_on_prem_fmcs_enabled');
  }
  public set autoDiscoverOnPremFmcsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDiscoverOnPremFmcsEnabled = value;
  }
  public resetAutoDiscoverOnPremFmcsEnabled() {
    this._autoDiscoverOnPremFmcsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoverOnPremFmcsEnabledInput() {
    return this._autoDiscoverOnPremFmcsEnabled;
  }

  // change_request_support_enabled - computed: true, optional: true, required: false
  private _changeRequestSupportEnabled?: boolean | cdktf.IResolvable; 
  public get changeRequestSupportEnabled() {
    return this.getBooleanAttribute('change_request_support_enabled');
  }
  public set changeRequestSupportEnabled(value: boolean | cdktf.IResolvable) {
    this._changeRequestSupportEnabled = value;
  }
  public resetChangeRequestSupportEnabled() {
    this._changeRequestSupportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeRequestSupportEnabledInput() {
    return this._changeRequestSupportEnabled;
  }

  // conflict_detection_interval - computed: true, optional: true, required: false
  private _conflictDetectionInterval?: string; 
  public get conflictDetectionInterval() {
    return this.getStringAttribute('conflict_detection_interval');
  }
  public set conflictDetectionInterval(value: string) {
    this._conflictDetectionInterval = value;
  }
  public resetConflictDetectionInterval() {
    this._conflictDetectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictDetectionIntervalInput() {
    return this._conflictDetectionInterval;
  }

  // deny_cisco_support_access_to_tenant_enabled - computed: true, optional: true, required: false
  private _denyCiscoSupportAccessToTenantEnabled?: boolean | cdktf.IResolvable; 
  public get denyCiscoSupportAccessToTenantEnabled() {
    return this.getBooleanAttribute('deny_cisco_support_access_to_tenant_enabled');
  }
  public set denyCiscoSupportAccessToTenantEnabled(value: boolean | cdktf.IResolvable) {
    this._denyCiscoSupportAccessToTenantEnabled = value;
  }
  public resetDenyCiscoSupportAccessToTenantEnabled() {
    this._denyCiscoSupportAccessToTenantEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyCiscoSupportAccessToTenantEnabledInput() {
    return this._denyCiscoSupportAccessToTenantEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_cloud_defense_enabled - computed: true, optional: true, required: false
  private _multiCloudDefenseEnabled?: boolean | cdktf.IResolvable; 
  public get multiCloudDefenseEnabled() {
    return this.getBooleanAttribute('multi_cloud_defense_enabled');
  }
  public set multiCloudDefenseEnabled(value: boolean | cdktf.IResolvable) {
    this._multiCloudDefenseEnabled = value;
  }
  public resetMultiCloudDefenseEnabled() {
    this._multiCloudDefenseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCloudDefenseEnabledInput() {
    return this._multiCloudDefenseEnabled;
  }

  // scheduled_deployments_enabled - computed: true, optional: true, required: false
  private _scheduledDeploymentsEnabled?: boolean | cdktf.IResolvable; 
  public get scheduledDeploymentsEnabled() {
    return this.getBooleanAttribute('scheduled_deployments_enabled');
  }
  public set scheduledDeploymentsEnabled(value: boolean | cdktf.IResolvable) {
    this._scheduledDeploymentsEnabled = value;
  }
  public resetScheduledDeploymentsEnabled() {
    this._scheduledDeploymentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDeploymentsEnabledInput() {
    return this._scheduledDeploymentsEnabled;
  }

  // web_analytics_enabled - computed: true, optional: true, required: false
  private _webAnalyticsEnabled?: boolean | cdktf.IResolvable; 
  public get webAnalyticsEnabled() {
    return this.getBooleanAttribute('web_analytics_enabled');
  }
  public set webAnalyticsEnabled(value: boolean | cdktf.IResolvable) {
    this._webAnalyticsEnabled = value;
  }
  public resetWebAnalyticsEnabled() {
    this._webAnalyticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsEnabledInput() {
    return this._webAnalyticsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept_device_changes_enabled: cdktf.booleanToTerraform(this._autoAcceptDeviceChangesEnabled),
      auto_discover_on_prem_fmcs_enabled: cdktf.booleanToTerraform(this._autoDiscoverOnPremFmcsEnabled),
      change_request_support_enabled: cdktf.booleanToTerraform(this._changeRequestSupportEnabled),
      conflict_detection_interval: cdktf.stringToTerraform(this._conflictDetectionInterval),
      deny_cisco_support_access_to_tenant_enabled: cdktf.booleanToTerraform(this._denyCiscoSupportAccessToTenantEnabled),
      multi_cloud_defense_enabled: cdktf.booleanToTerraform(this._multiCloudDefenseEnabled),
      scheduled_deployments_enabled: cdktf.booleanToTerraform(this._scheduledDeploymentsEnabled),
      web_analytics_enabled: cdktf.booleanToTerraform(this._webAnalyticsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_accept_device_changes_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoAcceptDeviceChangesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_discover_on_prem_fmcs_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoDiscoverOnPremFmcsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      change_request_support_enabled: {
        value: cdktf.booleanToHclTerraform(this._changeRequestSupportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conflict_detection_interval: {
        value: cdktf.stringToHclTerraform(this._conflictDetectionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_cisco_support_access_to_tenant_enabled: {
        value: cdktf.booleanToHclTerraform(this._denyCiscoSupportAccessToTenantEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_cloud_defense_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiCloudDefenseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scheduled_deployments_enabled: {
        value: cdktf.booleanToHclTerraform(this._scheduledDeploymentsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_analytics_enabled: {
        value: cdktf.booleanToHclTerraform(this._webAnalyticsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
