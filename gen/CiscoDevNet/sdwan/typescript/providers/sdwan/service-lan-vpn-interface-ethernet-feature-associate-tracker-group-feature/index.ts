// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature#feature_profile_id ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature#service_lan_vpn_feature_id ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
  /**
  * Service LAN VPN Interface Ethernet Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature#service_lan_vpn_interface_ethernet_feature_id ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature#service_lan_vpn_interface_ethernet_feature_id}
  */
  readonly serviceLanVpnInterfaceEthernetFeatureId: string;
  /**
  * Service Tracker Group Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature#service_tracker_group_feature_id ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature#service_tracker_group_feature_id}
  */
  readonly serviceTrackerGroupFeatureId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature sdwan_service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature}
*/
export class ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature to import
  * @param importFromId The id of the existing ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature sdwan_service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnInterfaceEthernetFeatureAssociateTrackerGroupFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_interface_ethernet_feature_associate_tracker_group_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
    this._serviceLanVpnInterfaceEthernetFeatureId = config.serviceLanVpnInterfaceEthernetFeatureId;
    this._serviceTrackerGroupFeatureId = config.serviceTrackerGroupFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_lan_vpn_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnFeatureId?: string; 
  public get serviceLanVpnFeatureId() {
    return this.getStringAttribute('service_lan_vpn_feature_id');
  }
  public set serviceLanVpnFeatureId(value: string) {
    this._serviceLanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnFeatureIdInput() {
    return this._serviceLanVpnFeatureId;
  }

  // service_lan_vpn_interface_ethernet_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnInterfaceEthernetFeatureId?: string; 
  public get serviceLanVpnInterfaceEthernetFeatureId() {
    return this.getStringAttribute('service_lan_vpn_interface_ethernet_feature_id');
  }
  public set serviceLanVpnInterfaceEthernetFeatureId(value: string) {
    this._serviceLanVpnInterfaceEthernetFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnInterfaceEthernetFeatureIdInput() {
    return this._serviceLanVpnInterfaceEthernetFeatureId;
  }

  // service_tracker_group_feature_id - computed: false, optional: false, required: true
  private _serviceTrackerGroupFeatureId?: string; 
  public get serviceTrackerGroupFeatureId() {
    return this.getStringAttribute('service_tracker_group_feature_id');
  }
  public set serviceTrackerGroupFeatureId(value: string) {
    this._serviceTrackerGroupFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTrackerGroupFeatureIdInput() {
    return this._serviceTrackerGroupFeatureId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
      service_lan_vpn_interface_ethernet_feature_id: cdktf.stringToTerraform(this._serviceLanVpnInterfaceEthernetFeatureId),
      service_tracker_group_feature_id: cdktf.stringToTerraform(this._serviceTrackerGroupFeatureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_lan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_lan_vpn_interface_ethernet_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnInterfaceEthernetFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_tracker_group_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceTrackerGroupFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
