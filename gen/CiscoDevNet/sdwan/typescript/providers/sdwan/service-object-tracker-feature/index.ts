// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceObjectTrackerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#description ServiceObjectTrackerFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#feature_profile_id ServiceObjectTrackerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#interface ServiceObjectTrackerFeature#interface}
  */
  readonly interface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#interface_variable ServiceObjectTrackerFeature#interface_variable}
  */
  readonly interfaceVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#name ServiceObjectTrackerFeature#name}
  */
  readonly name: string;
  /**
  * Object tracker ID
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#object_tracker_id ServiceObjectTrackerFeature#object_tracker_id}
  */
  readonly objectTrackerId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#object_tracker_id_variable ServiceObjectTrackerFeature#object_tracker_id_variable}
  */
  readonly objectTrackerIdVariable?: string;
  /**
  * objectTrackerType:Interface SIG Route
  *   - Choices: `Interface`, `SIG`, `Route`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#object_tracker_type ServiceObjectTrackerFeature#object_tracker_type}
  */
  readonly objectTrackerType: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#route_ip ServiceObjectTrackerFeature#route_ip}
  */
  readonly routeIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#route_ip_variable ServiceObjectTrackerFeature#route_ip_variable}
  */
  readonly routeIpVariable?: string;
  /**
  * IP mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#route_mask ServiceObjectTrackerFeature#route_mask}
  */
  readonly routeMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#route_mask_variable ServiceObjectTrackerFeature#route_mask_variable}
  */
  readonly routeMaskVariable?: string;
  /**
  * VPN
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#vpn ServiceObjectTrackerFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#vpn_variable ServiceObjectTrackerFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature sdwan_service_object_tracker_feature}
*/
export class ServiceObjectTrackerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_object_tracker_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceObjectTrackerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceObjectTrackerFeature to import
  * @param importFromId The id of the existing ServiceObjectTrackerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceObjectTrackerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_object_tracker_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_feature sdwan_service_object_tracker_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceObjectTrackerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceObjectTrackerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_object_tracker_feature',
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
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._interface = config.interface;
    this._interfaceVariable = config.interfaceVariable;
    this._name = config.name;
    this._objectTrackerId = config.objectTrackerId;
    this._objectTrackerIdVariable = config.objectTrackerIdVariable;
    this._objectTrackerType = config.objectTrackerType;
    this._routeIp = config.routeIp;
    this._routeIpVariable = config.routeIpVariable;
    this._routeMask = config.routeMask;
    this._routeMaskVariable = config.routeMaskVariable;
    this._vpn = config.vpn;
    this._vpnVariable = config.vpnVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_variable - computed: false, optional: true, required: false
  private _interfaceVariable?: string; 
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }
  public set interfaceVariable(value: string) {
    this._interfaceVariable = value;
  }
  public resetInterfaceVariable() {
    this._interfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVariableInput() {
    return this._interfaceVariable;
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

  // object_tracker_id - computed: false, optional: true, required: false
  private _objectTrackerId?: number; 
  public get objectTrackerId() {
    return this.getNumberAttribute('object_tracker_id');
  }
  public set objectTrackerId(value: number) {
    this._objectTrackerId = value;
  }
  public resetObjectTrackerId() {
    this._objectTrackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackerIdInput() {
    return this._objectTrackerId;
  }

  // object_tracker_id_variable - computed: false, optional: true, required: false
  private _objectTrackerIdVariable?: string; 
  public get objectTrackerIdVariable() {
    return this.getStringAttribute('object_tracker_id_variable');
  }
  public set objectTrackerIdVariable(value: string) {
    this._objectTrackerIdVariable = value;
  }
  public resetObjectTrackerIdVariable() {
    this._objectTrackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackerIdVariableInput() {
    return this._objectTrackerIdVariable;
  }

  // object_tracker_type - computed: false, optional: false, required: true
  private _objectTrackerType?: string; 
  public get objectTrackerType() {
    return this.getStringAttribute('object_tracker_type');
  }
  public set objectTrackerType(value: string) {
    this._objectTrackerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackerTypeInput() {
    return this._objectTrackerType;
  }

  // route_ip - computed: false, optional: true, required: false
  private _routeIp?: string; 
  public get routeIp() {
    return this.getStringAttribute('route_ip');
  }
  public set routeIp(value: string) {
    this._routeIp = value;
  }
  public resetRouteIp() {
    this._routeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIpInput() {
    return this._routeIp;
  }

  // route_ip_variable - computed: false, optional: true, required: false
  private _routeIpVariable?: string; 
  public get routeIpVariable() {
    return this.getStringAttribute('route_ip_variable');
  }
  public set routeIpVariable(value: string) {
    this._routeIpVariable = value;
  }
  public resetRouteIpVariable() {
    this._routeIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIpVariableInput() {
    return this._routeIpVariable;
  }

  // route_mask - computed: false, optional: true, required: false
  private _routeMask?: string; 
  public get routeMask() {
    return this.getStringAttribute('route_mask');
  }
  public set routeMask(value: string) {
    this._routeMask = value;
  }
  public resetRouteMask() {
    this._routeMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMaskInput() {
    return this._routeMask;
  }

  // route_mask_variable - computed: false, optional: true, required: false
  private _routeMaskVariable?: string; 
  public get routeMaskVariable() {
    return this.getStringAttribute('route_mask_variable');
  }
  public set routeMaskVariable(value: string) {
    this._routeMaskVariable = value;
  }
  public resetRouteMaskVariable() {
    this._routeMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMaskVariableInput() {
    return this._routeMaskVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_variable - computed: false, optional: true, required: false
  private _vpnVariable?: string; 
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
  public set vpnVariable(value: string) {
    this._vpnVariable = value;
  }
  public resetVpnVariable() {
    this._vpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnVariableInput() {
    return this._vpnVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interface: cdktf.stringToTerraform(this._interface),
      interface_variable: cdktf.stringToTerraform(this._interfaceVariable),
      name: cdktf.stringToTerraform(this._name),
      object_tracker_id: cdktf.numberToTerraform(this._objectTrackerId),
      object_tracker_id_variable: cdktf.stringToTerraform(this._objectTrackerIdVariable),
      object_tracker_type: cdktf.stringToTerraform(this._objectTrackerType),
      route_ip: cdktf.stringToTerraform(this._routeIp),
      route_ip_variable: cdktf.stringToTerraform(this._routeIpVariable),
      route_mask: cdktf.stringToTerraform(this._routeMask),
      route_mask_variable: cdktf.stringToTerraform(this._routeMaskVariable),
      vpn: cdktf.numberToTerraform(this._vpn),
      vpn_variable: cdktf.stringToTerraform(this._vpnVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_tracker_id: {
        value: cdktf.numberToHclTerraform(this._objectTrackerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_tracker_id_variable: {
        value: cdktf.stringToHclTerraform(this._objectTrackerIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_tracker_type: {
        value: cdktf.stringToHclTerraform(this._objectTrackerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_ip: {
        value: cdktf.stringToHclTerraform(this._routeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_ip_variable: {
        value: cdktf.stringToHclTerraform(this._routeIpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_mask: {
        value: cdktf.stringToHclTerraform(this._routeMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_mask_variable: {
        value: cdktf.stringToHclTerraform(this._routeMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn: {
        value: cdktf.numberToHclTerraform(this._vpn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_variable: {
        value: cdktf.stringToHclTerraform(this._vpnVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
