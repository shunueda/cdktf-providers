// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppliancePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the policy. Only applicable to Access ports. Valid values are: `open`, `8021x-radius`, `mac-radius`, `hybris-radius` for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, `open` is the only valid value and `open` is the default value if the field is missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#access_policy AppliancePort#access_policy}
  */
  readonly accessPolicy?: string;
  /**
  * Comma-delimited list of the VLAN ID`s allowed on the port, or `all` to permit all VLAN`s on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#allowed_vlans AppliancePort#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#drop_untagged_traffic AppliancePort#drop_untagged_traffic}
  */
  readonly dropUntaggedTraffic?: boolean | cdktf.IResolvable;
  /**
  * The status of the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#enabled AppliancePort#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#network_id AppliancePort#network_id}
  */
  readonly networkId: string;
  /**
  * Port ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#port_id AppliancePort#port_id}
  */
  readonly portId: string;
  /**
  * The type of the port: `access` or `trunk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#type AppliancePort#type}
  */
  readonly type?: string;
  /**
  * Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#vlan AppliancePort#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port meraki_appliance_port}
*/
export class AppliancePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppliancePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppliancePort to import
  * @param importFromId The id of the existing AppliancePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppliancePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_port meraki_appliance_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppliancePortConfig
  */
  public constructor(scope: Construct, id: string, config: AppliancePortConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_port',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicy = config.accessPolicy;
    this._allowedVlans = config.allowedVlans;
    this._dropUntaggedTraffic = config.dropUntaggedTraffic;
    this._enabled = config.enabled;
    this._networkId = config.networkId;
    this._portId = config.portId;
    this._type = config.type;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: true, required: false
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

  // allowed_vlans - computed: false, optional: true, required: false
  private _allowedVlans?: string; 
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }
  public set allowedVlans(value: string) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // drop_untagged_traffic - computed: false, optional: true, required: false
  private _dropUntaggedTraffic?: boolean | cdktf.IResolvable; 
  public get dropUntaggedTraffic() {
    return this.getBooleanAttribute('drop_untagged_traffic');
  }
  public set dropUntaggedTraffic(value: boolean | cdktf.IResolvable) {
    this._dropUntaggedTraffic = value;
  }
  public resetDropUntaggedTraffic() {
    this._dropUntaggedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUntaggedTrafficInput() {
    return this._dropUntaggedTraffic;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      allowed_vlans: cdktf.stringToTerraform(this._allowedVlans),
      drop_untagged_traffic: cdktf.booleanToTerraform(this._dropUntaggedTraffic),
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      port_id: cdktf.stringToTerraform(this._portId),
      type: cdktf.stringToTerraform(this._type),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktf.stringToHclTerraform(this._accessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._allowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_untagged_traffic: {
        value: cdktf.booleanToHclTerraform(this._dropUntaggedTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
