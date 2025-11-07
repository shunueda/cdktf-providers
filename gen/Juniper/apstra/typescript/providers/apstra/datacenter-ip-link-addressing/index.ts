// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterIpLinkAddressingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#blueprint_id DatacenterIpLinkAddressing#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * IPv4 address in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#generic_ipv4_address DatacenterIpLinkAddressing#generic_ipv4_address}
  */
  readonly genericIpv4Address?: string;
  /**
  * Allowed values: [`none`,`numbered`]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#generic_ipv4_address_type DatacenterIpLinkAddressing#generic_ipv4_address_type}
  */
  readonly genericIpv4AddressType?: string;
  /**
  * IPv6 address in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#generic_ipv6_address DatacenterIpLinkAddressing#generic_ipv6_address}
  */
  readonly genericIpv6Address?: string;
  /**
  * Allowed values: [`link_local`,`none`,`numbered`]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#generic_ipv6_address_type DatacenterIpLinkAddressing#generic_ipv6_address_type}
  */
  readonly genericIpv6AddressType?: string;
  /**
  * Apstra graph node ID of the logical Link created by assigning a Connectivity Template with an IP Link primitive to a switch port. Note that CT assignment will create a logical link for each IP Link primitive. This resource is concerned with a single logical link. CTs which include multiple IP Link primitives may require multiple instances of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#link_id DatacenterIpLinkAddressing#link_id}
  */
  readonly linkId: string;
  /**
  * IPv4 address in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#switch_ipv4_address DatacenterIpLinkAddressing#switch_ipv4_address}
  */
  readonly switchIpv4Address?: string;
  /**
  * Allowed values: [`none`,`numbered`]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#switch_ipv4_address_type DatacenterIpLinkAddressing#switch_ipv4_address_type}
  */
  readonly switchIpv4AddressType?: string;
  /**
  * IPv6 address in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#switch_ipv6_address DatacenterIpLinkAddressing#switch_ipv6_address}
  */
  readonly switchIpv6Address?: string;
  /**
  * Allowed values: [`link_local`,`none`,`numbered`]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#switch_ipv6_address_type DatacenterIpLinkAddressing#switch_ipv6_address_type}
  */
  readonly switchIpv6AddressType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing apstra_datacenter_ip_link_addressing}
*/
export class DatacenterIpLinkAddressing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ip_link_addressing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterIpLinkAddressing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterIpLinkAddressing to import
  * @param importFromId The id of the existing DatacenterIpLinkAddressing that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterIpLinkAddressing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ip_link_addressing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_ip_link_addressing apstra_datacenter_ip_link_addressing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterIpLinkAddressingConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterIpLinkAddressingConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ip_link_addressing',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._genericIpv4Address = config.genericIpv4Address;
    this._genericIpv4AddressType = config.genericIpv4AddressType;
    this._genericIpv6Address = config.genericIpv6Address;
    this._genericIpv6AddressType = config.genericIpv6AddressType;
    this._linkId = config.linkId;
    this._switchIpv4Address = config.switchIpv4Address;
    this._switchIpv4AddressType = config.switchIpv4AddressType;
    this._switchIpv6Address = config.switchIpv6Address;
    this._switchIpv6AddressType = config.switchIpv6AddressType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // generic_ipv4_address - computed: false, optional: true, required: false
  private _genericIpv4Address?: string; 
  public get genericIpv4Address() {
    return this.getStringAttribute('generic_ipv4_address');
  }
  public set genericIpv4Address(value: string) {
    this._genericIpv4Address = value;
  }
  public resetGenericIpv4Address() {
    this._genericIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericIpv4AddressInput() {
    return this._genericIpv4Address;
  }

  // generic_ipv4_address_type - computed: true, optional: true, required: false
  private _genericIpv4AddressType?: string; 
  public get genericIpv4AddressType() {
    return this.getStringAttribute('generic_ipv4_address_type');
  }
  public set genericIpv4AddressType(value: string) {
    this._genericIpv4AddressType = value;
  }
  public resetGenericIpv4AddressType() {
    this._genericIpv4AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericIpv4AddressTypeInput() {
    return this._genericIpv4AddressType;
  }

  // generic_ipv6_address - computed: false, optional: true, required: false
  private _genericIpv6Address?: string; 
  public get genericIpv6Address() {
    return this.getStringAttribute('generic_ipv6_address');
  }
  public set genericIpv6Address(value: string) {
    this._genericIpv6Address = value;
  }
  public resetGenericIpv6Address() {
    this._genericIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericIpv6AddressInput() {
    return this._genericIpv6Address;
  }

  // generic_ipv6_address_type - computed: true, optional: true, required: false
  private _genericIpv6AddressType?: string; 
  public get genericIpv6AddressType() {
    return this.getStringAttribute('generic_ipv6_address_type');
  }
  public set genericIpv6AddressType(value: string) {
    this._genericIpv6AddressType = value;
  }
  public resetGenericIpv6AddressType() {
    this._genericIpv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericIpv6AddressTypeInput() {
    return this._genericIpv6AddressType;
  }

  // link_id - computed: false, optional: false, required: true
  private _linkId?: string; 
  public get linkId() {
    return this.getStringAttribute('link_id');
  }
  public set linkId(value: string) {
    this._linkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId;
  }

  // switch_ipv4_address - computed: false, optional: true, required: false
  private _switchIpv4Address?: string; 
  public get switchIpv4Address() {
    return this.getStringAttribute('switch_ipv4_address');
  }
  public set switchIpv4Address(value: string) {
    this._switchIpv4Address = value;
  }
  public resetSwitchIpv4Address() {
    this._switchIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIpv4AddressInput() {
    return this._switchIpv4Address;
  }

  // switch_ipv4_address_type - computed: true, optional: true, required: false
  private _switchIpv4AddressType?: string; 
  public get switchIpv4AddressType() {
    return this.getStringAttribute('switch_ipv4_address_type');
  }
  public set switchIpv4AddressType(value: string) {
    this._switchIpv4AddressType = value;
  }
  public resetSwitchIpv4AddressType() {
    this._switchIpv4AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIpv4AddressTypeInput() {
    return this._switchIpv4AddressType;
  }

  // switch_ipv6_address - computed: false, optional: true, required: false
  private _switchIpv6Address?: string; 
  public get switchIpv6Address() {
    return this.getStringAttribute('switch_ipv6_address');
  }
  public set switchIpv6Address(value: string) {
    this._switchIpv6Address = value;
  }
  public resetSwitchIpv6Address() {
    this._switchIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIpv6AddressInput() {
    return this._switchIpv6Address;
  }

  // switch_ipv6_address_type - computed: true, optional: true, required: false
  private _switchIpv6AddressType?: string; 
  public get switchIpv6AddressType() {
    return this.getStringAttribute('switch_ipv6_address_type');
  }
  public set switchIpv6AddressType(value: string) {
    this._switchIpv6AddressType = value;
  }
  public resetSwitchIpv6AddressType() {
    this._switchIpv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIpv6AddressTypeInput() {
    return this._switchIpv6AddressType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      generic_ipv4_address: cdktf.stringToTerraform(this._genericIpv4Address),
      generic_ipv4_address_type: cdktf.stringToTerraform(this._genericIpv4AddressType),
      generic_ipv6_address: cdktf.stringToTerraform(this._genericIpv6Address),
      generic_ipv6_address_type: cdktf.stringToTerraform(this._genericIpv6AddressType),
      link_id: cdktf.stringToTerraform(this._linkId),
      switch_ipv4_address: cdktf.stringToTerraform(this._switchIpv4Address),
      switch_ipv4_address_type: cdktf.stringToTerraform(this._switchIpv4AddressType),
      switch_ipv6_address: cdktf.stringToTerraform(this._switchIpv6Address),
      switch_ipv6_address_type: cdktf.stringToTerraform(this._switchIpv6AddressType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._genericIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_ipv4_address_type: {
        value: cdktf.stringToHclTerraform(this._genericIpv4AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._genericIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_ipv6_address_type: {
        value: cdktf.stringToHclTerraform(this._genericIpv6AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_id: {
        value: cdktf.stringToHclTerraform(this._linkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._switchIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_ipv4_address_type: {
        value: cdktf.stringToHclTerraform(this._switchIpv4AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._switchIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_ipv6_address_type: {
        value: cdktf.stringToHclTerraform(this._switchIpv6AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
