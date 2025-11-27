// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecNatGatewaySnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of the public EIPs to be associated. This field is conflict with `is_all_eip`. This field is conflict with `is_all_eip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#eip_ids ZecNatGatewaySnat#eip_ids}
  */
  readonly eipIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#id ZecNatGatewaySnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether all the EIPs of region is assigned to SNAT entry. This field is conflict with `eip_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#is_all_eip ZecNatGatewaySnat#is_all_eip}
  */
  readonly isAllEip?: boolean | cdktf.IResolvable;
  /**
  * ID of the NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#nat_gateway_id ZecNatGatewaySnat#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Source CIDR blocks to be associated with the SNAT entry. Cannot be used with `subnet_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#source_cidr_blocks ZecNatGatewaySnat#source_cidr_blocks}
  */
  readonly sourceCidrBlocks?: string[];
  /**
  * IDs of the subnets to be associated with the SNAT entry. Cannot be used with `source_cidr_blocks`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#subnet_ids ZecNatGatewaySnat#subnet_ids}
  */
  readonly subnetIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat zenlayercloud_zec_nat_gateway_snat}
*/
export class ZecNatGatewaySnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_nat_gateway_snat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecNatGatewaySnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecNatGatewaySnat to import
  * @param importFromId The id of the existing ZecNatGatewaySnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecNatGatewaySnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_nat_gateway_snat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/zec_nat_gateway_snat zenlayercloud_zec_nat_gateway_snat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecNatGatewaySnatConfig
  */
  public constructor(scope: Construct, id: string, config: ZecNatGatewaySnatConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_nat_gateway_snat',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipIds = config.eipIds;
    this._id = config.id;
    this._isAllEip = config.isAllEip;
    this._natGatewayId = config.natGatewayId;
    this._sourceCidrBlocks = config.sourceCidrBlocks;
    this._subnetIds = config.subnetIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eip_ids - computed: false, optional: true, required: false
  private _eipIds?: string[]; 
  public get eipIds() {
    return cdktf.Fn.tolist(this.getListAttribute('eip_ids'));
  }
  public set eipIds(value: string[]) {
    this._eipIds = value;
  }
  public resetEipIds() {
    this._eipIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdsInput() {
    return this._eipIds;
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

  // is_all_eip - computed: false, optional: true, required: false
  private _isAllEip?: boolean | cdktf.IResolvable; 
  public get isAllEip() {
    return this.getBooleanAttribute('is_all_eip');
  }
  public set isAllEip(value: boolean | cdktf.IResolvable) {
    this._isAllEip = value;
  }
  public resetIsAllEip() {
    this._isAllEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllEipInput() {
    return this._isAllEip;
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

  // source_cidr_blocks - computed: false, optional: true, required: false
  private _sourceCidrBlocks?: string[]; 
  public get sourceCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('source_cidr_blocks'));
  }
  public set sourceCidrBlocks(value: string[]) {
    this._sourceCidrBlocks = value;
  }
  public resetSourceCidrBlocks() {
    this._sourceCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrBlocksInput() {
    return this._sourceCidrBlocks;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eipIds),
      id: cdktf.stringToTerraform(this._id),
      is_all_eip: cdktf.booleanToTerraform(this._isAllEip),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      source_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceCidrBlocks),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eipIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_all_eip: {
        value: cdktf.booleanToHclTerraform(this._isAllEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceCidrBlocks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
