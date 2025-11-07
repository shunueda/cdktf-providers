// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing#destination_network_cidr VpcRouting#destination_network_cidr}
  */
  readonly destinationNetworkCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing#id VpcRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing Table id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing#routing_table_id VpcRouting#routing_table_id}
  */
  readonly routingTableId: string;
  /**
  * Source Interface Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing#source_service_interface_id VpcRouting#source_service_interface_id}
  */
  readonly sourceServiceInterfaceId: string;
  /**
  * Source Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing#source_service_interface_name VpcRouting#source_service_interface_name}
  */
  readonly sourceServiceInterfaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing samsungcloudplatform_vpc_routing}
*/
export class VpcRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_vpc_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcRouting to import
  * @param importFromId The id of the existing VpcRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_vpc_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_routing samsungcloudplatform_vpc_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: VpcRoutingConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_vpc_routing',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationNetworkCidr = config.destinationNetworkCidr;
    this._id = config.id;
    this._routingTableId = config.routingTableId;
    this._sourceServiceInterfaceId = config.sourceServiceInterfaceId;
    this._sourceServiceInterfaceName = config.sourceServiceInterfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_network_cidr - computed: false, optional: false, required: true
  private _destinationNetworkCidr?: string; 
  public get destinationNetworkCidr() {
    return this.getStringAttribute('destination_network_cidr');
  }
  public set destinationNetworkCidr(value: string) {
    this._destinationNetworkCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkCidrInput() {
    return this._destinationNetworkCidr;
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

  // routing_table_id - computed: false, optional: false, required: true
  private _routingTableId?: string; 
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }
  public set routingTableId(value: string) {
    this._routingTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableIdInput() {
    return this._routingTableId;
  }

  // source_service_interface_id - computed: false, optional: false, required: true
  private _sourceServiceInterfaceId?: string; 
  public get sourceServiceInterfaceId() {
    return this.getStringAttribute('source_service_interface_id');
  }
  public set sourceServiceInterfaceId(value: string) {
    this._sourceServiceInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInterfaceIdInput() {
    return this._sourceServiceInterfaceId;
  }

  // source_service_interface_name - computed: false, optional: false, required: true
  private _sourceServiceInterfaceName?: string; 
  public get sourceServiceInterfaceName() {
    return this.getStringAttribute('source_service_interface_name');
  }
  public set sourceServiceInterfaceName(value: string) {
    this._sourceServiceInterfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInterfaceNameInput() {
    return this._sourceServiceInterfaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_network_cidr: cdktf.stringToTerraform(this._destinationNetworkCidr),
      id: cdktf.stringToTerraform(this._id),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
      source_service_interface_id: cdktf.stringToTerraform(this._sourceServiceInterfaceId),
      source_service_interface_name: cdktf.stringToTerraform(this._sourceServiceInterfaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_network_cidr: {
        value: cdktf.stringToHclTerraform(this._destinationNetworkCidr),
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
      routing_table_id: {
        value: cdktf.stringToHclTerraform(this._routingTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_interface_id: {
        value: cdktf.stringToHclTerraform(this._sourceServiceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_interface_name: {
        value: cdktf.stringToHclTerraform(this._sourceServiceInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
