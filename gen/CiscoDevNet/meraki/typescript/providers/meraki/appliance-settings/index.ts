// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client tracking method of a network
  *   - Choices: `IP address`, `MAC address`, `Unique client identifier`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings#client_tracking_method ApplianceSettings#client_tracking_method}
  */
  readonly clientTrackingMethod?: string;
  /**
  * Deployment mode of a network
  *   - Choices: `passthrough`, `routed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings#deployment_mode ApplianceSettings#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Dynamic DNS enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings#dynamic_dns_enabled ApplianceSettings#dynamic_dns_enabled}
  */
  readonly dynamicDnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Dynamic DNS url prefix. DDNS must be enabled to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings#dynamic_dns_prefix ApplianceSettings#dynamic_dns_prefix}
  */
  readonly dynamicDnsPrefix?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings#network_id ApplianceSettings#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings meraki_appliance_settings}
*/
export class ApplianceSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceSettings to import
  * @param importFromId The id of the existing ApplianceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_settings meraki_appliance_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientTrackingMethod = config.clientTrackingMethod;
    this._deploymentMode = config.deploymentMode;
    this._dynamicDnsEnabled = config.dynamicDnsEnabled;
    this._dynamicDnsPrefix = config.dynamicDnsPrefix;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_tracking_method - computed: false, optional: true, required: false
  private _clientTrackingMethod?: string; 
  public get clientTrackingMethod() {
    return this.getStringAttribute('client_tracking_method');
  }
  public set clientTrackingMethod(value: string) {
    this._clientTrackingMethod = value;
  }
  public resetClientTrackingMethod() {
    this._clientTrackingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTrackingMethodInput() {
    return this._clientTrackingMethod;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // dynamic_dns_enabled - computed: false, optional: true, required: false
  private _dynamicDnsEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicDnsEnabled() {
    return this.getBooleanAttribute('dynamic_dns_enabled');
  }
  public set dynamicDnsEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicDnsEnabled = value;
  }
  public resetDynamicDnsEnabled() {
    this._dynamicDnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDnsEnabledInput() {
    return this._dynamicDnsEnabled;
  }

  // dynamic_dns_prefix - computed: false, optional: true, required: false
  private _dynamicDnsPrefix?: string; 
  public get dynamicDnsPrefix() {
    return this.getStringAttribute('dynamic_dns_prefix');
  }
  public set dynamicDnsPrefix(value: string) {
    this._dynamicDnsPrefix = value;
  }
  public resetDynamicDnsPrefix() {
    this._dynamicDnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDnsPrefixInput() {
    return this._dynamicDnsPrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_tracking_method: cdktf.stringToTerraform(this._clientTrackingMethod),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      dynamic_dns_enabled: cdktf.booleanToTerraform(this._dynamicDnsEnabled),
      dynamic_dns_prefix: cdktf.stringToTerraform(this._dynamicDnsPrefix),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_tracking_method: {
        value: cdktf.stringToHclTerraform(this._clientTrackingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_dns_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicDnsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_dns_prefix: {
        value: cdktf.stringToHclTerraform(this._dynamicDnsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
