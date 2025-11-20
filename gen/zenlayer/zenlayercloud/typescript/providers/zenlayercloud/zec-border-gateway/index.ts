// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecBorderGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom IPv4 CIDR block list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#advertised_cidrs ZecBorderGateway#advertised_cidrs}
  */
  readonly advertisedCidrs?: string[];
  /**
  * Subnet route advertisement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#advertised_subnet ZecBorderGateway#advertised_subnet}
  */
  readonly advertisedSubnet?: string;
  /**
  * Autonomous System Number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#asn ZecBorderGateway#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#id ZecBorderGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the border gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#name ZecBorderGateway#name}
  */
  readonly name: string;
  /**
  * Region ID of the border gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#region_id ZecBorderGateway#region_id}
  */
  readonly regionId: string;
  /**
  * VPC ID that the border gateway belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#vpc_id ZecBorderGateway#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway zenlayercloud_zec_border_gateway}
*/
export class ZecBorderGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_border_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecBorderGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecBorderGateway to import
  * @param importFromId The id of the existing ZecBorderGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecBorderGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_border_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_border_gateway zenlayercloud_zec_border_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecBorderGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ZecBorderGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_border_gateway',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertisedCidrs = config.advertisedCidrs;
    this._advertisedSubnet = config.advertisedSubnet;
    this._asn = config.asn;
    this._id = config.id;
    this._name = config.name;
    this._regionId = config.regionId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertised_cidrs - computed: false, optional: true, required: false
  private _advertisedCidrs?: string[]; 
  public get advertisedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('advertised_cidrs'));
  }
  public set advertisedCidrs(value: string[]) {
    this._advertisedCidrs = value;
  }
  public resetAdvertisedCidrs() {
    this._advertisedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedCidrsInput() {
    return this._advertisedCidrs;
  }

  // advertised_subnet - computed: false, optional: true, required: false
  private _advertisedSubnet?: string; 
  public get advertisedSubnet() {
    return this.getStringAttribute('advertised_subnet');
  }
  public set advertisedSubnet(value: string) {
    this._advertisedSubnet = value;
  }
  public resetAdvertisedSubnet() {
    this._advertisedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedSubnetInput() {
    return this._advertisedSubnet;
  }

  // asn - computed: true, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // cloud_router_ids - computed: true, optional: false, required: false
  public get cloudRouterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_router_ids'));
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // inter_connect_cidr - computed: true, optional: false, required: false
  public get interConnectCidr() {
    return this.getStringAttribute('inter_connect_cidr');
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

  // nat_id - computed: true, optional: false, required: false
  public get natId() {
    return this.getStringAttribute('nat_id');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
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
      advertised_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advertisedCidrs),
      advertised_subnet: cdktf.stringToTerraform(this._advertisedSubnet),
      asn: cdktf.numberToTerraform(this._asn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertised_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advertisedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      advertised_subnet: {
        value: cdktf.stringToHclTerraform(this._advertisedSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
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
