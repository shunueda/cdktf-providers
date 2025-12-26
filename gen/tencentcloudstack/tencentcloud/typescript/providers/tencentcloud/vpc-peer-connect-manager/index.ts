// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeerConnectManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bandwidth upper limit, unit Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#bandwidth VpcPeerConnectManager#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Billing mode, daily peak value POSTPAID_BY_DAY_MAX, monthly value 95 POSTPAID_BY_MONTH_95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#charge_type VpcPeerConnectManager#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Peer region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#destination_region VpcPeerConnectManager#destination_region}
  */
  readonly destinationRegion: string;
  /**
  * Peer user UIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#destination_uin VpcPeerConnectManager#destination_uin}
  */
  readonly destinationUin: string;
  /**
  * The unique ID of the peer VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#destination_vpc_id VpcPeerConnectManager#destination_vpc_id}
  */
  readonly destinationVpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#id VpcPeerConnectManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Peer connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#peering_connection_name VpcPeerConnectManager#peering_connection_name}
  */
  readonly peeringConnectionName: string;
  /**
  * Service classification PT, AU, AG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#qos_level VpcPeerConnectManager#qos_level}
  */
  readonly qosLevel?: string;
  /**
  * The unique ID of the local VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#source_vpc_id VpcPeerConnectManager#source_vpc_id}
  */
  readonly sourceVpcId: string;
  /**
  * Interworking type, VPC_PEER interworking between VPCs; VPC_BM_PEER interworking between VPC and BM Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#type VpcPeerConnectManager#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager tencentcloud_vpc_peer_connect_manager}
*/
export class VpcPeerConnectManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_peer_connect_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeerConnectManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeerConnectManager to import
  * @param importFromId The id of the existing VpcPeerConnectManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeerConnectManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_peer_connect_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_peer_connect_manager tencentcloud_vpc_peer_connect_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeerConnectManagerConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeerConnectManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_peer_connect_manager',
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
    this._bandwidth = config.bandwidth;
    this._chargeType = config.chargeType;
    this._destinationRegion = config.destinationRegion;
    this._destinationUin = config.destinationUin;
    this._destinationVpcId = config.destinationVpcId;
    this._id = config.id;
    this._peeringConnectionName = config.peeringConnectionName;
    this._qosLevel = config.qosLevel;
    this._sourceVpcId = config.sourceVpcId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // charge_type - computed: true, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // destination_region - computed: false, optional: false, required: true
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // destination_uin - computed: false, optional: false, required: true
  private _destinationUin?: string; 
  public get destinationUin() {
    return this.getStringAttribute('destination_uin');
  }
  public set destinationUin(value: string) {
    this._destinationUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUinInput() {
    return this._destinationUin;
  }

  // destination_vpc_id - computed: false, optional: false, required: true
  private _destinationVpcId?: string; 
  public get destinationVpcId() {
    return this.getStringAttribute('destination_vpc_id');
  }
  public set destinationVpcId(value: string) {
    this._destinationVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVpcIdInput() {
    return this._destinationVpcId;
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

  // peering_connection_name - computed: false, optional: false, required: true
  private _peeringConnectionName?: string; 
  public get peeringConnectionName() {
    return this.getStringAttribute('peering_connection_name');
  }
  public set peeringConnectionName(value: string) {
    this._peeringConnectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringConnectionNameInput() {
    return this._peeringConnectionName;
  }

  // qos_level - computed: true, optional: true, required: false
  private _qosLevel?: string; 
  public get qosLevel() {
    return this.getStringAttribute('qos_level');
  }
  public set qosLevel(value: string) {
    this._qosLevel = value;
  }
  public resetQosLevel() {
    this._qosLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosLevelInput() {
    return this._qosLevel;
  }

  // source_vpc_id - computed: false, optional: false, required: true
  private _sourceVpcId?: string; 
  public get sourceVpcId() {
    return this.getStringAttribute('source_vpc_id');
  }
  public set sourceVpcId(value: string) {
    this._sourceVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcIdInput() {
    return this._sourceVpcId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      destination_region: cdktf.stringToTerraform(this._destinationRegion),
      destination_uin: cdktf.stringToTerraform(this._destinationUin),
      destination_vpc_id: cdktf.stringToTerraform(this._destinationVpcId),
      id: cdktf.stringToTerraform(this._id),
      peering_connection_name: cdktf.stringToTerraform(this._peeringConnectionName),
      qos_level: cdktf.stringToTerraform(this._qosLevel),
      source_vpc_id: cdktf.stringToTerraform(this._sourceVpcId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_region: {
        value: cdktf.stringToHclTerraform(this._destinationRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_uin: {
        value: cdktf.stringToHclTerraform(this._destinationUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_vpc_id: {
        value: cdktf.stringToHclTerraform(this._destinationVpcId),
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
      peering_connection_name: {
        value: cdktf.stringToHclTerraform(this._peeringConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_level: {
        value: cdktf.stringToHclTerraform(this._qosLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vpc_id: {
        value: cdktf.stringToHclTerraform(this._sourceVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
