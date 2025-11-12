// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclNetworkStaticRouteV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#aws_gw_id DataEclNetworkStaticRouteV2#aws_gw_id}
  */
  readonly awsGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#azure_gw_id DataEclNetworkStaticRouteV2#azure_gw_id}
  */
  readonly azureGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#description DataEclNetworkStaticRouteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#destination DataEclNetworkStaticRouteV2#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#gcp_gw_id DataEclNetworkStaticRouteV2#gcp_gw_id}
  */
  readonly gcpGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#id DataEclNetworkStaticRouteV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#interdc_gw_id DataEclNetworkStaticRouteV2#interdc_gw_id}
  */
  readonly interdcGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#internet_gw_id DataEclNetworkStaticRouteV2#internet_gw_id}
  */
  readonly internetGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#name DataEclNetworkStaticRouteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#nexthop DataEclNetworkStaticRouteV2#nexthop}
  */
  readonly nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#region DataEclNetworkStaticRouteV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#service_type DataEclNetworkStaticRouteV2#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#static_route_id DataEclNetworkStaticRouteV2#static_route_id}
  */
  readonly staticRouteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#status DataEclNetworkStaticRouteV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#tenant_id DataEclNetworkStaticRouteV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#vpn_gw_id DataEclNetworkStaticRouteV2#vpn_gw_id}
  */
  readonly vpnGwId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2 ecl_network_static_route_v2}
*/
export class DataEclNetworkStaticRouteV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_network_static_route_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclNetworkStaticRouteV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclNetworkStaticRouteV2 to import
  * @param importFromId The id of the existing DataEclNetworkStaticRouteV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclNetworkStaticRouteV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_network_static_route_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_static_route_v2 ecl_network_static_route_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclNetworkStaticRouteV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclNetworkStaticRouteV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_network_static_route_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsGwId = config.awsGwId;
    this._azureGwId = config.azureGwId;
    this._description = config.description;
    this._destination = config.destination;
    this._gcpGwId = config.gcpGwId;
    this._id = config.id;
    this._interdcGwId = config.interdcGwId;
    this._internetGwId = config.internetGwId;
    this._name = config.name;
    this._nexthop = config.nexthop;
    this._region = config.region;
    this._serviceType = config.serviceType;
    this._staticRouteId = config.staticRouteId;
    this._status = config.status;
    this._tenantId = config.tenantId;
    this._vpnGwId = config.vpnGwId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_gw_id - computed: true, optional: true, required: false
  private _awsGwId?: string; 
  public get awsGwId() {
    return this.getStringAttribute('aws_gw_id');
  }
  public set awsGwId(value: string) {
    this._awsGwId = value;
  }
  public resetAwsGwId() {
    this._awsGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGwIdInput() {
    return this._awsGwId;
  }

  // azure_gw_id - computed: true, optional: true, required: false
  private _azureGwId?: string; 
  public get azureGwId() {
    return this.getStringAttribute('azure_gw_id');
  }
  public set azureGwId(value: string) {
    this._azureGwId = value;
  }
  public resetAzureGwId() {
    this._azureGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureGwIdInput() {
    return this._azureGwId;
  }

  // description - computed: true, optional: true, required: false
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

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // gcp_gw_id - computed: true, optional: true, required: false
  private _gcpGwId?: string; 
  public get gcpGwId() {
    return this.getStringAttribute('gcp_gw_id');
  }
  public set gcpGwId(value: string) {
    this._gcpGwId = value;
  }
  public resetGcpGwId() {
    this._gcpGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpGwIdInput() {
    return this._gcpGwId;
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

  // interdc_gw_id - computed: true, optional: true, required: false
  private _interdcGwId?: string; 
  public get interdcGwId() {
    return this.getStringAttribute('interdc_gw_id');
  }
  public set interdcGwId(value: string) {
    this._interdcGwId = value;
  }
  public resetInterdcGwId() {
    this._interdcGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interdcGwIdInput() {
    return this._interdcGwId;
  }

  // internet_gw_id - computed: true, optional: true, required: false
  private _internetGwId?: string; 
  public get internetGwId() {
    return this.getStringAttribute('internet_gw_id');
  }
  public set internetGwId(value: string) {
    this._internetGwId = value;
  }
  public resetInternetGwId() {
    this._internetGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGwIdInput() {
    return this._internetGwId;
  }

  // name - computed: true, optional: true, required: false
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

  // nexthop - computed: true, optional: true, required: false
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // static_route_id - computed: true, optional: true, required: false
  private _staticRouteId?: string; 
  public get staticRouteId() {
    return this.getStringAttribute('static_route_id');
  }
  public set staticRouteId(value: string) {
    this._staticRouteId = value;
  }
  public resetStaticRouteId() {
    this._staticRouteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteIdInput() {
    return this._staticRouteId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vpn_gw_id - computed: true, optional: true, required: false
  private _vpnGwId?: string; 
  public get vpnGwId() {
    return this.getStringAttribute('vpn_gw_id');
  }
  public set vpnGwId(value: string) {
    this._vpnGwId = value;
  }
  public resetVpnGwId() {
    this._vpnGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGwIdInput() {
    return this._vpnGwId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_gw_id: cdktf.stringToTerraform(this._awsGwId),
      azure_gw_id: cdktf.stringToTerraform(this._azureGwId),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      gcp_gw_id: cdktf.stringToTerraform(this._gcpGwId),
      id: cdktf.stringToTerraform(this._id),
      interdc_gw_id: cdktf.stringToTerraform(this._interdcGwId),
      internet_gw_id: cdktf.stringToTerraform(this._internetGwId),
      name: cdktf.stringToTerraform(this._name),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      region: cdktf.stringToTerraform(this._region),
      service_type: cdktf.stringToTerraform(this._serviceType),
      static_route_id: cdktf.stringToTerraform(this._staticRouteId),
      status: cdktf.stringToTerraform(this._status),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vpn_gw_id: cdktf.stringToTerraform(this._vpnGwId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_gw_id: {
        value: cdktf.stringToHclTerraform(this._awsGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_gw_id: {
        value: cdktf.stringToHclTerraform(this._azureGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_gw_id: {
        value: cdktf.stringToHclTerraform(this._gcpGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interdc_gw_id: {
        value: cdktf.stringToHclTerraform(this._interdcGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gw_id: {
        value: cdktf.stringToHclTerraform(this._internetGwId),
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
      nexthop: {
        value: cdktf.stringToHclTerraform(this._nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_route_id: {
        value: cdktf.stringToHclTerraform(this._staticRouteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gw_id: {
        value: cdktf.stringToHclTerraform(this._vpnGwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
