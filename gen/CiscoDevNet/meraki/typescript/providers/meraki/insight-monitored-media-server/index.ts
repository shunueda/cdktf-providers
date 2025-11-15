// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InsightMonitoredMediaServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address (IPv4 only) or hostname of the media server to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server#address InsightMonitoredMediaServer#address}
  */
  readonly address: string;
  /**
  * Indicates that if the media server doesn`t respond to ICMP pings, the nearest hop will be used in its stead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server#best_effort_monitoring_enabled InsightMonitoredMediaServer#best_effort_monitoring_enabled}
  */
  readonly bestEffortMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the VoIP provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server#name InsightMonitoredMediaServer#name}
  */
  readonly name: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server#organization_id InsightMonitoredMediaServer#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server meraki_insight_monitored_media_server}
*/
export class InsightMonitoredMediaServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_insight_monitored_media_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InsightMonitoredMediaServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InsightMonitoredMediaServer to import
  * @param importFromId The id of the existing InsightMonitoredMediaServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InsightMonitoredMediaServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_insight_monitored_media_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/insight_monitored_media_server meraki_insight_monitored_media_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InsightMonitoredMediaServerConfig
  */
  public constructor(scope: Construct, id: string, config: InsightMonitoredMediaServerConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_insight_monitored_media_server',
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
    this._address = config.address;
    this._bestEffortMonitoringEnabled = config.bestEffortMonitoringEnabled;
    this._name = config.name;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // best_effort_monitoring_enabled - computed: false, optional: true, required: false
  private _bestEffortMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get bestEffortMonitoringEnabled() {
    return this.getBooleanAttribute('best_effort_monitoring_enabled');
  }
  public set bestEffortMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._bestEffortMonitoringEnabled = value;
  }
  public resetBestEffortMonitoringEnabled() {
    this._bestEffortMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestEffortMonitoringEnabledInput() {
    return this._bestEffortMonitoringEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      best_effort_monitoring_enabled: cdktf.booleanToTerraform(this._bestEffortMonitoringEnabled),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      best_effort_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._bestEffortMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
