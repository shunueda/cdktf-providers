// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtIpLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of JSON strings describing Connectivity Template Primitives which are children of this Connectivity Template Primitive. Use the `primitive` attribute of other Connectivity Template Primitives data sources here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#child_primitives DataApstraDatacenterCtIpLink#child_primitives}
  */
  readonly childPrimitives?: string[];
  /**
  * One of `numbered`, `none` (or omit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#ipv4_addressing_type DataApstraDatacenterCtIpLink#ipv4_addressing_type}
  */
  readonly ipv4AddressingType?: string;
  /**
  * One of `link_local`, `numbered`, `none` (or omit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#ipv6_addressing_type DataApstraDatacenterCtIpLink#ipv6_addressing_type}
  */
  readonly ipv6AddressingType?: string;
  /**
  * L3 MTU for sub-interfaces on leaf (spine/superspine) side and generic side. Configuration is applicable only when Fabric MTU is enabled. Value must be even number rom 1280 to 9216, if not specified - Default IP Links to Generic Systems MTU from Virtual Network Policy s used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#l3_mtu DataApstraDatacenterCtIpLink#l3_mtu}
  */
  readonly l3Mtu?: number;
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#name DataApstraDatacenterCtIpLink#name}
  */
  readonly name?: string;
  /**
  * Apstra Object ID of the Routing Zone to which this IP Link belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#routing_zone_id DataApstraDatacenterCtIpLink#routing_zone_id}
  */
  readonly routingZoneId: string;
  /**
  * When set, selects the 802.1Q VLAN ID to use for the link's traffic. Omit for an untagged link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#vlan_id DataApstraDatacenterCtIpLink#vlan_id}
  */
  readonly vlanId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link apstra_datacenter_ct_ip_link}
*/
export class DataApstraDatacenterCtIpLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_ip_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtIpLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtIpLink to import
  * @param importFromId The id of the existing DataApstraDatacenterCtIpLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtIpLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_ip_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_ip_link apstra_datacenter_ct_ip_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtIpLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtIpLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_ip_link',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childPrimitives = config.childPrimitives;
    this._ipv4AddressingType = config.ipv4AddressingType;
    this._ipv6AddressingType = config.ipv6AddressingType;
    this._l3Mtu = config.l3Mtu;
    this._name = config.name;
    this._routingZoneId = config.routingZoneId;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_primitives - computed: false, optional: true, required: false
  private _childPrimitives?: string[]; 
  public get childPrimitives() {
    return cdktf.Fn.tolist(this.getListAttribute('child_primitives'));
  }
  public set childPrimitives(value: string[]) {
    this._childPrimitives = value;
  }
  public resetChildPrimitives() {
    this._childPrimitives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childPrimitivesInput() {
    return this._childPrimitives;
  }

  // ipv4_addressing_type - computed: false, optional: true, required: false
  private _ipv4AddressingType?: string; 
  public get ipv4AddressingType() {
    return this.getStringAttribute('ipv4_addressing_type');
  }
  public set ipv4AddressingType(value: string) {
    this._ipv4AddressingType = value;
  }
  public resetIpv4AddressingType() {
    this._ipv4AddressingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressingTypeInput() {
    return this._ipv4AddressingType;
  }

  // ipv6_addressing_type - computed: false, optional: true, required: false
  private _ipv6AddressingType?: string; 
  public get ipv6AddressingType() {
    return this.getStringAttribute('ipv6_addressing_type');
  }
  public set ipv6AddressingType(value: string) {
    this._ipv6AddressingType = value;
  }
  public resetIpv6AddressingType() {
    this._ipv6AddressingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressingTypeInput() {
    return this._ipv6AddressingType;
  }

  // l3_mtu - computed: false, optional: true, required: false
  private _l3Mtu?: number; 
  public get l3Mtu() {
    return this.getNumberAttribute('l3_mtu');
  }
  public set l3Mtu(value: number) {
    this._l3Mtu = value;
  }
  public resetL3Mtu() {
    this._l3Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MtuInput() {
    return this._l3Mtu;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // routing_zone_id - computed: false, optional: false, required: true
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_primitives: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childPrimitives),
      ipv4_addressing_type: cdktf.stringToTerraform(this._ipv4AddressingType),
      ipv6_addressing_type: cdktf.stringToTerraform(this._ipv6AddressingType),
      l3_mtu: cdktf.numberToTerraform(this._l3Mtu),
      name: cdktf.stringToTerraform(this._name),
      routing_zone_id: cdktf.stringToTerraform(this._routingZoneId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_primitives: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childPrimitives),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_addressing_type: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addressing_type: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_mtu: {
        value: cdktf.numberToHclTerraform(this._l3Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_zone_id: {
        value: cdktf.stringToHclTerraform(this._routingZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
