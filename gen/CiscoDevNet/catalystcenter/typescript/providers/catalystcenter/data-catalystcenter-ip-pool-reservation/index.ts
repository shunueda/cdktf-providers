// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/ip_pool_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterIpPoolReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/ip_pool_reservation#id DataCatalystcenterIpPoolReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/ip_pool_reservation catalystcenter_ip_pool_reservation}
*/
export class DataCatalystcenterIpPoolReservation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_ip_pool_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterIpPoolReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterIpPoolReservation to import
  * @param importFromId The id of the existing DataCatalystcenterIpPoolReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/ip_pool_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterIpPoolReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_ip_pool_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/ip_pool_reservation catalystcenter_ip_pool_reservation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterIpPoolReservationConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterIpPoolReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_ip_pool_reservation',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv4_assigned_addresses - computed: true, optional: false, required: false
  public get ipv4AssignedAddresses() {
    return this.getStringAttribute('ipv4_assigned_addresses');
  }

  // ipv4_default_assigned_addresses - computed: true, optional: false, required: false
  public get ipv4DefaultAssignedAddresses() {
    return this.getStringAttribute('ipv4_default_assigned_addresses');
  }

  // ipv4_dhcp_servers - computed: true, optional: false, required: false
  public get ipv4DhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_servers'));
  }

  // ipv4_dns_servers - computed: true, optional: false, required: false
  public get ipv4DnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dns_servers'));
  }

  // ipv4_gateway - computed: true, optional: false, required: false
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }

  // ipv4_global_pool_id - computed: true, optional: false, required: false
  public get ipv4GlobalPoolId() {
    return this.getStringAttribute('ipv4_global_pool_id');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv4_subnet - computed: true, optional: false, required: false
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }

  // ipv4_total_addresses - computed: true, optional: false, required: false
  public get ipv4TotalAddresses() {
    return this.getStringAttribute('ipv4_total_addresses');
  }

  // ipv4_unassignable_addresses - computed: true, optional: false, required: false
  public get ipv4UnassignableAddresses() {
    return this.getStringAttribute('ipv4_unassignable_addresses');
  }

  // ipv6_assigned_addresses - computed: true, optional: false, required: false
  public get ipv6AssignedAddresses() {
    return this.getStringAttribute('ipv6_assigned_addresses');
  }

  // ipv6_default_assigned_addresses - computed: true, optional: false, required: false
  public get ipv6DefaultAssignedAddresses() {
    return this.getStringAttribute('ipv6_default_assigned_addresses');
  }

  // ipv6_dhcp_servers - computed: true, optional: false, required: false
  public get ipv6DhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_dhcp_servers'));
  }

  // ipv6_dns_servers - computed: true, optional: false, required: false
  public get ipv6DnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_dns_servers'));
  }

  // ipv6_gateway - computed: true, optional: false, required: false
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }

  // ipv6_global_pool_id - computed: true, optional: false, required: false
  public get ipv6GlobalPoolId() {
    return this.getStringAttribute('ipv6_global_pool_id');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // ipv6_slaac_support - computed: true, optional: false, required: false
  public get ipv6SlaacSupport() {
    return this.getBooleanAttribute('ipv6_slaac_support');
  }

  // ipv6_subnet - computed: true, optional: false, required: false
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }

  // ipv6_total_addresses - computed: true, optional: false, required: false
  public get ipv6TotalAddresses() {
    return this.getStringAttribute('ipv6_total_addresses');
  }

  // ipv6_unassignable_addresses - computed: true, optional: false, required: false
  public get ipv6UnassignableAddresses() {
    return this.getStringAttribute('ipv6_unassignable_addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pool_type - computed: true, optional: false, required: false
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
