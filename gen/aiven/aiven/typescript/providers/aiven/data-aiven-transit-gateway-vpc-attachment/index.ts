// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenTransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment#id DataAivenTransitGatewayVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AWS account ID or GCP project ID of the peered VPC. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment#peer_cloud_account DataAivenTransitGatewayVpcAttachment#peer_cloud_account}
  */
  readonly peerCloudAccount: string;
  /**
  * Transit gateway ID. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment#peer_vpc DataAivenTransitGatewayVpcAttachment#peer_vpc}
  */
  readonly peerVpc: string;
  /**
  * The VPC the peering connection belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment#vpc_id DataAivenTransitGatewayVpcAttachment#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment aiven_transit_gateway_vpc_attachment}
*/
export class DataAivenTransitGatewayVpcAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_transit_gateway_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenTransitGatewayVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenTransitGatewayVpcAttachment to import
  * @param importFromId The id of the existing DataAivenTransitGatewayVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenTransitGatewayVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_transit_gateway_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/transit_gateway_vpc_attachment aiven_transit_gateway_vpc_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenTransitGatewayVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenTransitGatewayVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_transit_gateway_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
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
    this._peerCloudAccount = config.peerCloudAccount;
    this._peerVpc = config.peerVpc;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peer_cloud_account - computed: false, optional: false, required: true
  private _peerCloudAccount?: string; 
  public get peerCloudAccount() {
    return this.getStringAttribute('peer_cloud_account');
  }
  public set peerCloudAccount(value: string) {
    this._peerCloudAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCloudAccountInput() {
    return this._peerCloudAccount;
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // peer_vpc - computed: false, optional: false, required: true
  private _peerVpc?: string; 
  public get peerVpc() {
    return this.getStringAttribute('peer_vpc');
  }
  public set peerVpc(value: string) {
    this._peerVpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcInput() {
    return this._peerVpc;
  }

  // peering_connection_id - computed: true, optional: false, required: false
  public get peeringConnectionId() {
    return this.getStringAttribute('peering_connection_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_info - computed: true, optional: false, required: false
  private _stateInfo = new cdktf.StringMap(this, "state_info");
  public get stateInfo() {
    return this._stateInfo;
  }

  // user_peer_network_cidrs - computed: true, optional: false, required: false
  public get userPeerNetworkCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('user_peer_network_cidrs'));
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
      id: cdktf.stringToTerraform(this._id),
      peer_cloud_account: cdktf.stringToTerraform(this._peerCloudAccount),
      peer_vpc: cdktf.stringToTerraform(this._peerVpc),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      peer_cloud_account: {
        value: cdktf.stringToHclTerraform(this._peerCloudAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_vpc: {
        value: cdktf.stringToHclTerraform(this._peerVpc),
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
