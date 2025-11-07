// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclMlbRouteV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#configuration_status DataEclMlbRouteV1#configuration_status}
  */
  readonly configurationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#description DataEclMlbRouteV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#destination_cidr DataEclMlbRouteV1#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#id DataEclMlbRouteV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#load_balancer_id DataEclMlbRouteV1#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#name DataEclMlbRouteV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#next_hop_ip_address DataEclMlbRouteV1#next_hop_ip_address}
  */
  readonly nextHopIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#operation_status DataEclMlbRouteV1#operation_status}
  */
  readonly operationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#tags DataEclMlbRouteV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#tenant_id DataEclMlbRouteV1#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1 ecl_mlb_route_v1}
*/
export class DataEclMlbRouteV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_route_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclMlbRouteV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclMlbRouteV1 to import
  * @param importFromId The id of the existing DataEclMlbRouteV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclMlbRouteV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_route_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_route_v1 ecl_mlb_route_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclMlbRouteV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclMlbRouteV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_route_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationStatus = config.configurationStatus;
    this._description = config.description;
    this._destinationCidr = config.destinationCidr;
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._nextHopIpAddress = config.nextHopIpAddress;
    this._operationStatus = config.operationStatus;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_status - computed: true, optional: true, required: false
  private _configurationStatus?: string; 
  public get configurationStatus() {
    return this.getStringAttribute('configuration_status');
  }
  public set configurationStatus(value: string) {
    this._configurationStatus = value;
  }
  public resetConfigurationStatus() {
    this._configurationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationStatusInput() {
    return this._configurationStatus;
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

  // destination_cidr - computed: true, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
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

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // next_hop_ip_address - computed: true, optional: true, required: false
  private _nextHopIpAddress?: string; 
  public get nextHopIpAddress() {
    return this.getStringAttribute('next_hop_ip_address');
  }
  public set nextHopIpAddress(value: string) {
    this._nextHopIpAddress = value;
  }
  public resetNextHopIpAddress() {
    this._nextHopIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpAddressInput() {
    return this._nextHopIpAddress;
  }

  // operation_status - computed: true, optional: true, required: false
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_status: cdktf.stringToTerraform(this._configurationStatus),
      description: cdktf.stringToTerraform(this._description),
      destination_cidr: cdktf.stringToTerraform(this._destinationCidr),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      next_hop_ip_address: cdktf.stringToTerraform(this._nextHopIpAddress),
      operation_status: cdktf.stringToTerraform(this._operationStatus),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_status: {
        value: cdktf.stringToHclTerraform(this._configurationStatus),
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
      destination_cidr: {
        value: cdktf.stringToHclTerraform(this._destinationCidr),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      next_hop_ip_address: {
        value: cdktf.stringToHclTerraform(this._nextHopIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_status: {
        value: cdktf.stringToHclTerraform(this._operationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
