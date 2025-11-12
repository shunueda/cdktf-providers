// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database ID of the fabric of the VLAN whose DHCP is managed. This parameter `fabric` and `vlan` are used to identify the VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#fabric VlanDhcp#fabric}
  */
  readonly fabric: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#id VlanDhcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of IP range ids to serve DHCP to. IP ranges must be of type dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#ip_ranges VlanDhcp#ip_ranges}
  */
  readonly ipRanges?: number[];
  /**
  * The system_id of the Rack controller to use as primary for DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#primary_rack_controller VlanDhcp#primary_rack_controller}
  */
  readonly primaryRackController?: string;
  /**
  * Database ID of the VLAN to use as a relay for DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#relay_vlan VlanDhcp#relay_vlan}
  */
  readonly relayVlan?: number;
  /**
  * The system_id of the Rack controller to use as secondary for DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#secondary_rack_controller VlanDhcp#secondary_rack_controller}
  */
  readonly secondaryRackController?: string;
  /**
  * A set of subnet ids to serve DHCP on their dynamic IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#subnets VlanDhcp#subnets}
  */
  readonly subnets?: number[];
  /**
  * VID of the VLAN whose DHCP is managed. This parameter `vlan` and `fabric` are used to identify the VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#vlan VlanDhcp#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp maas_vlan_dhcp}
*/
export class VlanDhcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_vlan_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanDhcp to import
  * @param importFromId The id of the existing VlanDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_vlan_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan_dhcp maas_vlan_dhcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanDhcpConfig
  */
  public constructor(scope: Construct, id: string, config: VlanDhcpConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_vlan_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabric = config.fabric;
    this._id = config.id;
    this._ipRanges = config.ipRanges;
    this._primaryRackController = config.primaryRackController;
    this._relayVlan = config.relayVlan;
    this._secondaryRackController = config.secondaryRackController;
    this._subnets = config.subnets;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric - computed: false, optional: false, required: true
  private _fabric?: number; 
  public get fabric() {
    return this.getNumberAttribute('fabric');
  }
  public set fabric(value: number) {
    this._fabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: number[]; 
  public get ipRanges() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ip_ranges')));
  }
  public set ipRanges(value: number[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // primary_rack_controller - computed: false, optional: true, required: false
  private _primaryRackController?: string; 
  public get primaryRackController() {
    return this.getStringAttribute('primary_rack_controller');
  }
  public set primaryRackController(value: string) {
    this._primaryRackController = value;
  }
  public resetPrimaryRackController() {
    this._primaryRackController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRackControllerInput() {
    return this._primaryRackController;
  }

  // relay_vlan - computed: false, optional: true, required: false
  private _relayVlan?: number; 
  public get relayVlan() {
    return this.getNumberAttribute('relay_vlan');
  }
  public set relayVlan(value: number) {
    this._relayVlan = value;
  }
  public resetRelayVlan() {
    this._relayVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayVlanInput() {
    return this._relayVlan;
  }

  // secondary_rack_controller - computed: false, optional: true, required: false
  private _secondaryRackController?: string; 
  public get secondaryRackController() {
    return this.getStringAttribute('secondary_rack_controller');
  }
  public set secondaryRackController(value: string) {
    this._secondaryRackController = value;
  }
  public resetSecondaryRackController() {
    this._secondaryRackController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRackControllerInput() {
    return this._secondaryRackController;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: number[]; 
  public get subnets() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('subnets')));
  }
  public set subnets(value: number[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
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
      fabric: cdktf.numberToTerraform(this._fabric),
      id: cdktf.stringToTerraform(this._id),
      ip_ranges: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipRanges),
      primary_rack_controller: cdktf.stringToTerraform(this._primaryRackController),
      relay_vlan: cdktf.numberToTerraform(this._relayVlan),
      secondary_rack_controller: cdktf.stringToTerraform(this._secondaryRackController),
      subnets: cdktf.listMapper(cdktf.numberToTerraform, false)(this._subnets),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric: {
        value: cdktf.numberToHclTerraform(this._fabric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipRanges),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      primary_rack_controller: {
        value: cdktf.stringToHclTerraform(this._primaryRackController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay_vlan: {
        value: cdktf.numberToHclTerraform(this._relayVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_rack_controller: {
        value: cdktf.stringToHclTerraform(this._secondaryRackController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
