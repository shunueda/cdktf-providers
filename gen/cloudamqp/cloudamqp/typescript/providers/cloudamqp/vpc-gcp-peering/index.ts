// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcGcpPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#id VpcGcpPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#instance_id VpcGcpPeering#instance_id}
  */
  readonly instanceId?: number;
  /**
  * VPC network uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#peer_network_uri VpcGcpPeering#peer_network_uri}
  */
  readonly peerNetworkUri: string;
  /**
  * Configurable sleep in seconds between retries when requesting or reading peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#sleep VpcGcpPeering#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout time (seconds) before retries times out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#timeout VpcGcpPeering#timeout}
  */
  readonly timeout?: number;
  /**
  * VPC instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#vpc_id VpcGcpPeering#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Wait until peering status change to 'connected'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#wait_on_peering_status VpcGcpPeering#wait_on_peering_status}
  */
  readonly waitOnPeeringStatus?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering cloudamqp_vpc_gcp_peering}
*/
export class VpcGcpPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_vpc_gcp_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcGcpPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcGcpPeering to import
  * @param importFromId The id of the existing VpcGcpPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcGcpPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_vpc_gcp_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/vpc_gcp_peering cloudamqp_vpc_gcp_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcGcpPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: VpcGcpPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_vpc_gcp_peering',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
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
    this._instanceId = config.instanceId;
    this._peerNetworkUri = config.peerNetworkUri;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
    this._vpcId = config.vpcId;
    this._waitOnPeeringStatus = config.waitOnPeeringStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_routes - computed: true, optional: false, required: false
  public get autoCreateRoutes() {
    return this.getBooleanAttribute('auto_create_routes');
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
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // peer_network_uri - computed: false, optional: false, required: true
  private _peerNetworkUri?: string; 
  public get peerNetworkUri() {
    return this.getStringAttribute('peer_network_uri');
  }
  public set peerNetworkUri(value: string) {
    this._peerNetworkUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkUriInput() {
    return this._peerNetworkUri;
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // wait_on_peering_status - computed: false, optional: true, required: false
  private _waitOnPeeringStatus?: boolean | cdktf.IResolvable; 
  public get waitOnPeeringStatus() {
    return this.getBooleanAttribute('wait_on_peering_status');
  }
  public set waitOnPeeringStatus(value: boolean | cdktf.IResolvable) {
    this._waitOnPeeringStatus = value;
  }
  public resetWaitOnPeeringStatus() {
    this._waitOnPeeringStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitOnPeeringStatusInput() {
    return this._waitOnPeeringStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      peer_network_uri: cdktf.stringToTerraform(this._peerNetworkUri),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_on_peering_status: cdktf.booleanToTerraform(this._waitOnPeeringStatus),
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
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_network_uri: {
        value: cdktf.stringToHclTerraform(this._peerNetworkUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_on_peering_status: {
        value: cdktf.booleanToHclTerraform(this._waitOnPeeringStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
