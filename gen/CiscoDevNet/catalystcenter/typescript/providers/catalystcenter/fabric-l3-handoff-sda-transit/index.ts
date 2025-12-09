// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricL3HandoffSdaTransitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Affinity id decider value of the border node. When the affinity id prime value is the same on multiple devices, the affinity id decider value is used as a tiebreaker.
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#affinity_id_decider FabricL3HandoffSdaTransit#affinity_id_decider}
  */
  readonly affinityIdDecider?: number;
  /**
  * Affinity id prime value of the border node. It supersedes the border priority to determine border node preference.
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#affinity_id_prime FabricL3HandoffSdaTransit#affinity_id_prime}
  */
  readonly affinityIdPrime?: number;
  /**
  * Set this true to allow associated site to provide internet access to other sites through sd-access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#connected_to_internet FabricL3HandoffSdaTransit#connected_to_internet}
  */
  readonly connectedToInternet?: boolean | cdktf.IResolvable;
  /**
  * ID of the fabric this device is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#fabric_id FabricL3HandoffSdaTransit#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Set this true to configure native multicast over multiple sites that are connected to an sd-access transit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#is_multicast_over_transit_enabled FabricL3HandoffSdaTransit#is_multicast_over_transit_enabled}
  */
  readonly isMulticastOverTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#network_device_id FabricL3HandoffSdaTransit#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * ID of the transit network of the layer 3 handoff sda transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#transit_network_id FabricL3HandoffSdaTransit#transit_network_id}
  */
  readonly transitNetworkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit catalystcenter_fabric_l3_handoff_sda_transit}
*/
export class FabricL3HandoffSdaTransit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l3_handoff_sda_transit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricL3HandoffSdaTransit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricL3HandoffSdaTransit to import
  * @param importFromId The id of the existing FabricL3HandoffSdaTransit that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricL3HandoffSdaTransit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l3_handoff_sda_transit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_l3_handoff_sda_transit catalystcenter_fabric_l3_handoff_sda_transit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricL3HandoffSdaTransitConfig
  */
  public constructor(scope: Construct, id: string, config: FabricL3HandoffSdaTransitConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l3_handoff_sda_transit',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityIdDecider = config.affinityIdDecider;
    this._affinityIdPrime = config.affinityIdPrime;
    this._connectedToInternet = config.connectedToInternet;
    this._fabricId = config.fabricId;
    this._isMulticastOverTransitEnabled = config.isMulticastOverTransitEnabled;
    this._networkDeviceId = config.networkDeviceId;
    this._transitNetworkId = config.transitNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_id_decider - computed: false, optional: true, required: false
  private _affinityIdDecider?: number; 
  public get affinityIdDecider() {
    return this.getNumberAttribute('affinity_id_decider');
  }
  public set affinityIdDecider(value: number) {
    this._affinityIdDecider = value;
  }
  public resetAffinityIdDecider() {
    this._affinityIdDecider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityIdDeciderInput() {
    return this._affinityIdDecider;
  }

  // affinity_id_prime - computed: false, optional: true, required: false
  private _affinityIdPrime?: number; 
  public get affinityIdPrime() {
    return this.getNumberAttribute('affinity_id_prime');
  }
  public set affinityIdPrime(value: number) {
    this._affinityIdPrime = value;
  }
  public resetAffinityIdPrime() {
    this._affinityIdPrime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityIdPrimeInput() {
    return this._affinityIdPrime;
  }

  // connected_to_internet - computed: false, optional: true, required: false
  private _connectedToInternet?: boolean | cdktf.IResolvable; 
  public get connectedToInternet() {
    return this.getBooleanAttribute('connected_to_internet');
  }
  public set connectedToInternet(value: boolean | cdktf.IResolvable) {
    this._connectedToInternet = value;
  }
  public resetConnectedToInternet() {
    this._connectedToInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedToInternetInput() {
    return this._connectedToInternet;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_multicast_over_transit_enabled - computed: false, optional: true, required: false
  private _isMulticastOverTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isMulticastOverTransitEnabled() {
    return this.getBooleanAttribute('is_multicast_over_transit_enabled');
  }
  public set isMulticastOverTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isMulticastOverTransitEnabled = value;
  }
  public resetIsMulticastOverTransitEnabled() {
    this._isMulticastOverTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMulticastOverTransitEnabledInput() {
    return this._isMulticastOverTransitEnabled;
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // transit_network_id - computed: false, optional: false, required: true
  private _transitNetworkId?: string; 
  public get transitNetworkId() {
    return this.getStringAttribute('transit_network_id');
  }
  public set transitNetworkId(value: string) {
    this._transitNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitNetworkIdInput() {
    return this._transitNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_id_decider: cdktf.numberToTerraform(this._affinityIdDecider),
      affinity_id_prime: cdktf.numberToTerraform(this._affinityIdPrime),
      connected_to_internet: cdktf.booleanToTerraform(this._connectedToInternet),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      is_multicast_over_transit_enabled: cdktf.booleanToTerraform(this._isMulticastOverTransitEnabled),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
      transit_network_id: cdktf.stringToTerraform(this._transitNetworkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_id_decider: {
        value: cdktf.numberToHclTerraform(this._affinityIdDecider),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      affinity_id_prime: {
        value: cdktf.numberToHclTerraform(this._affinityIdPrime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connected_to_internet: {
        value: cdktf.booleanToHclTerraform(this._connectedToInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_multicast_over_transit_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMulticastOverTransitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_network_id: {
        value: cdktf.stringToHclTerraform(this._transitNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
