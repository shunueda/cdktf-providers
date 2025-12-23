// https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account ID where the VPC or Transit Gateway to be paired is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#peer_account_id PeeringConnection#peer_account_id}
  */
  readonly peerAccountId: string;
  /**
  * List of CIDR blocks for the peering connection. Required for Transit Gateway peering, optional for VPC peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#peer_cidr_blocks PeeringConnection#peer_cidr_blocks}
  */
  readonly peerCidrBlocks?: string[];
  /**
  * Region code for the VPC or Transit Gateway to be paired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#peer_region_code PeeringConnection#peer_region_code}
  */
  readonly peerRegionCode: string;
  /**
  * AWS ID for the Transit Gateway to be paired. Mutually exclusive with peer_vpc_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#peer_tgw_id PeeringConnection#peer_tgw_id}
  */
  readonly peerTgwId?: string;
  /**
  * AWS ID for the VPC to be paired. Mutually exclusive with peer_tgw_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#peer_vpc_id PeeringConnection#peer_vpc_id}
  */
  readonly peerVpcId?: string;
  /**
  * Timescale internal ID for a vpc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#timescale_vpc_id PeeringConnection#timescale_vpc_id}
  */
  readonly timescaleVpcId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection timescale_peering_connection}
*/
export class PeeringConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timescale_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PeeringConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PeeringConnection to import
  * @param importFromId The id of the existing PeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timescale_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/peering_connection timescale_peering_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: PeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'timescale_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'timescale',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._peerAccountId = config.peerAccountId;
    this._peerCidrBlocks = config.peerCidrBlocks;
    this._peerRegionCode = config.peerRegionCode;
    this._peerTgwId = config.peerTgwId;
    this._peerVpcId = config.peerVpcId;
    this._timescaleVpcId = config.timescaleVpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepter_provisioned_id - computed: true, optional: false, required: false
  public get accepterProvisionedId() {
    return this.getStringAttribute('accepter_provisioned_id');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // peer_account_id - computed: false, optional: false, required: true
  private _peerAccountId?: string; 
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }
  public set peerAccountId(value: string) {
    this._peerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAccountIdInput() {
    return this._peerAccountId;
  }

  // peer_cidr - computed: true, optional: false, required: false
  public get peerCidr() {
    return this.getStringAttribute('peer_cidr');
  }

  // peer_cidr_blocks - computed: true, optional: true, required: false
  private _peerCidrBlocks?: string[]; 
  public get peerCidrBlocks() {
    return this.getListAttribute('peer_cidr_blocks');
  }
  public set peerCidrBlocks(value: string[]) {
    this._peerCidrBlocks = value;
  }
  public resetPeerCidrBlocks() {
    this._peerCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCidrBlocksInput() {
    return this._peerCidrBlocks;
  }

  // peer_region_code - computed: false, optional: false, required: true
  private _peerRegionCode?: string; 
  public get peerRegionCode() {
    return this.getStringAttribute('peer_region_code');
  }
  public set peerRegionCode(value: string) {
    this._peerRegionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionCodeInput() {
    return this._peerRegionCode;
  }

  // peer_tgw_id - computed: false, optional: true, required: false
  private _peerTgwId?: string; 
  public get peerTgwId() {
    return this.getStringAttribute('peer_tgw_id');
  }
  public set peerTgwId(value: string) {
    this._peerTgwId = value;
  }
  public resetPeerTgwId() {
    this._peerTgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTgwIdInput() {
    return this._peerTgwId;
  }

  // peer_vpc_id - computed: false, optional: true, required: false
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  public resetPeerVpcId() {
    this._peerVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // provisioned_id - computed: true, optional: false, required: false
  public get provisionedId() {
    return this.getStringAttribute('provisioned_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timescale_vpc_id - computed: false, optional: false, required: true
  private _timescaleVpcId?: number; 
  public get timescaleVpcId() {
    return this.getNumberAttribute('timescale_vpc_id');
  }
  public set timescaleVpcId(value: number) {
    this._timescaleVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaleVpcIdInput() {
    return this._timescaleVpcId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      peer_account_id: cdktf.stringToTerraform(this._peerAccountId),
      peer_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerCidrBlocks),
      peer_region_code: cdktf.stringToTerraform(this._peerRegionCode),
      peer_tgw_id: cdktf.stringToTerraform(this._peerTgwId),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      timescale_vpc_id: cdktf.numberToTerraform(this._timescaleVpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      peer_account_id: {
        value: cdktf.stringToHclTerraform(this._peerAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerCidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_region_code: {
        value: cdktf.stringToHclTerraform(this._peerRegionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_tgw_id: {
        value: cdktf.stringToHclTerraform(this._peerTgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_vpc_id: {
        value: cdktf.stringToHclTerraform(this._peerVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timescale_vpc_id: {
        value: cdktf.numberToHclTerraform(this._timescaleVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
