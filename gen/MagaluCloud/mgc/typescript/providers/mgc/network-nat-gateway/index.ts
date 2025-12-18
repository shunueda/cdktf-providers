// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkNatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The availability zone of the NAT Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway#availability_zone NetworkNatGateway#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The description of the NAT Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway#description NetworkNatGateway#description}
  */
  readonly description?: string;
  /**
  * The name of the NAT Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway#name NetworkNatGateway#name}
  */
  readonly name: string;
  /**
  * The ID of the VPC where the NAT Gateway will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway#vpc_id NetworkNatGateway#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway mgc_network_nat_gateway}
*/
export class NetworkNatGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_network_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkNatGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkNatGateway to import
  * @param importFromId The id of the existing NetworkNatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkNatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_network_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_nat_gateway mgc_network_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkNatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_network_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._description = config.description;
    this._name = config.name;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
