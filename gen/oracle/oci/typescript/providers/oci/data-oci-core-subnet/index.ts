// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_subnet#subnet_id DataOciCoreSubnet#subnet_id}
  */
  readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_subnet oci_core_subnet}
*/
export class DataOciCoreSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreSubnet to import
  * @param importFromId The id of the existing DataOciCoreSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_subnet oci_core_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_subnet',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // dhcp_options_id - computed: true, optional: false, required: false
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_label - computed: true, optional: false, required: false
  public get dnsLabel() {
    return this.getStringAttribute('dns_label');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4cidr_blocks - computed: true, optional: false, required: false
  public get ipv4CidrBlocks() {
    return this.getListAttribute('ipv4cidr_blocks');
  }

  // ipv6cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6cidr_block');
  }

  // ipv6cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6cidr_blocks');
  }

  // ipv6virtual_router_ip - computed: true, optional: false, required: false
  public get ipv6VirtualRouterIp() {
    return this.getStringAttribute('ipv6virtual_router_ip');
  }

  // prohibit_internet_ingress - computed: true, optional: false, required: false
  public get prohibitInternetIngress() {
    return this.getBooleanAttribute('prohibit_internet_ingress');
  }

  // prohibit_public_ip_on_vnic - computed: true, optional: false, required: false
  public get prohibitPublicIpOnVnic() {
    return this.getBooleanAttribute('prohibit_public_ip_on_vnic');
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // security_list_ids - computed: true, optional: false, required: false
  public get securityListIds() {
    return this.getListAttribute('security_list_ids');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_domain_name - computed: true, optional: false, required: false
  public get subnetDomainName() {
    return this.getStringAttribute('subnet_domain_name');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // virtual_router_ip - computed: true, optional: false, required: false
  public get virtualRouterIp() {
    return this.getStringAttribute('virtual_router_ip');
  }

  // virtual_router_mac - computed: true, optional: false, required: false
  public get virtualRouterMac() {
    return this.getStringAttribute('virtual_router_mac');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
