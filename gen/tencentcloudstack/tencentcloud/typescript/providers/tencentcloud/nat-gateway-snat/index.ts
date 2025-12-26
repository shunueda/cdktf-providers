// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatGatewaySnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#description NatGatewaySnat#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#id NatGatewaySnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, required when `resource_type` is NETWORKINTERFACE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#instance_id NatGatewaySnat#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Private IPs of the instance's primary ENI, required when `resource_type` is NETWORKINTERFACE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#instance_private_ip_addr NatGatewaySnat#instance_private_ip_addr}
  */
  readonly instancePrivateIpAddr?: string;
  /**
  * NAT gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#nat_gateway_id NatGatewaySnat#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Elastic IP address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#public_ip_addr NatGatewaySnat#public_ip_addr}
  */
  readonly publicIpAddr: string[];
  /**
  * Resource type. Valid values: SUBNET, NETWORKINTERFACE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#resource_type NatGatewaySnat#resource_type}
  */
  readonly resourceType: string;
  /**
  * The IPv4 CIDR of the subnet, required when `resource_type` is SUBNET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#subnet_cidr_block NatGatewaySnat#subnet_cidr_block}
  */
  readonly subnetCidrBlock?: string;
  /**
  * Subnet instance ID, required when `resource_type` is SUBNET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#subnet_id NatGatewaySnat#subnet_id}
  */
  readonly subnetId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat tencentcloud_nat_gateway_snat}
*/
export class NatGatewaySnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_nat_gateway_snat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatGatewaySnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatGatewaySnat to import
  * @param importFromId The id of the existing NatGatewaySnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatGatewaySnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_nat_gateway_snat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/nat_gateway_snat tencentcloud_nat_gateway_snat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatGatewaySnatConfig
  */
  public constructor(scope: Construct, id: string, config: NatGatewaySnatConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_nat_gateway_snat',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instancePrivateIpAddr = config.instancePrivateIpAddr;
    this._natGatewayId = config.natGatewayId;
    this._publicIpAddr = config.publicIpAddr;
    this._resourceType = config.resourceType;
    this._subnetCidrBlock = config.subnetCidrBlock;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_private_ip_addr - computed: false, optional: true, required: false
  private _instancePrivateIpAddr?: string; 
  public get instancePrivateIpAddr() {
    return this.getStringAttribute('instance_private_ip_addr');
  }
  public set instancePrivateIpAddr(value: string) {
    this._instancePrivateIpAddr = value;
  }
  public resetInstancePrivateIpAddr() {
    this._instancePrivateIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePrivateIpAddrInput() {
    return this._instancePrivateIpAddr;
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // public_ip_addr - computed: false, optional: false, required: true
  private _publicIpAddr?: string[]; 
  public get publicIpAddr() {
    return this.getListAttribute('public_ip_addr');
  }
  public set publicIpAddr(value: string[]) {
    this._publicIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddrInput() {
    return this._publicIpAddr;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // snat_id - computed: true, optional: false, required: false
  public get snatId() {
    return this.getStringAttribute('snat_id');
  }

  // subnet_cidr_block - computed: false, optional: true, required: false
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  public resetSubnetCidrBlock() {
    this._subnetCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_private_ip_addr: cdktf.stringToTerraform(this._instancePrivateIpAddr),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      public_ip_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIpAddr),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      subnet_cidr_block: cdktf.stringToTerraform(this._subnetCidrBlock),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_private_ip_addr: {
        value: cdktf.stringToHclTerraform(this._instancePrivateIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicIpAddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_cidr_block: {
        value: cdktf.stringToHclTerraform(this._subnetCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
