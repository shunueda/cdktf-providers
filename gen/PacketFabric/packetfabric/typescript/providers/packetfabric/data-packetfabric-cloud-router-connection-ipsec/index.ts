// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connection_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricCloudRouterConnectionIpsecConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPSec circuit ID or its associated VC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connection_ipsec#circuit_id DataPacketfabricCloudRouterConnectionIpsec#circuit_id}
  */
  readonly circuitId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connection_ipsec#id DataPacketfabricCloudRouterConnectionIpsec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connection_ipsec packetfabric_cloud_router_connection_ipsec}
*/
export class DataPacketfabricCloudRouterConnectionIpsec extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_connection_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricCloudRouterConnectionIpsec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricCloudRouterConnectionIpsec to import
  * @param importFromId The id of the existing DataPacketfabricCloudRouterConnectionIpsec that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connection_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricCloudRouterConnectionIpsec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_connection_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connection_ipsec packetfabric_cloud_router_connection_ipsec} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricCloudRouterConnectionIpsecConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricCloudRouterConnectionIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_connection_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._circuitId = config.circuitId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // customer_gateway_address - computed: true, optional: false, required: false
  public get customerGatewayAddress() {
    return this.getStringAttribute('customer_gateway_address');
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

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }

  // local_gateway_address - computed: true, optional: false, required: false
  public get localGatewayAddress() {
    return this.getStringAttribute('local_gateway_address');
  }

  // phase1_authentication_algo - computed: true, optional: false, required: false
  public get phase1AuthenticationAlgo() {
    return this.getStringAttribute('phase1_authentication_algo');
  }

  // phase1_authentication_method - computed: true, optional: false, required: false
  public get phase1AuthenticationMethod() {
    return this.getStringAttribute('phase1_authentication_method');
  }

  // phase1_encryption_algo - computed: true, optional: false, required: false
  public get phase1EncryptionAlgo() {
    return this.getStringAttribute('phase1_encryption_algo');
  }

  // phase1_group - computed: true, optional: false, required: false
  public get phase1Group() {
    return this.getStringAttribute('phase1_group');
  }

  // phase1_lifetime - computed: true, optional: false, required: false
  public get phase1Lifetime() {
    return this.getNumberAttribute('phase1_lifetime');
  }

  // phase2_authentication_algo - computed: true, optional: false, required: false
  public get phase2AuthenticationAlgo() {
    return this.getStringAttribute('phase2_authentication_algo');
  }

  // phase2_encryption_algo - computed: true, optional: false, required: false
  public get phase2EncryptionAlgo() {
    return this.getStringAttribute('phase2_encryption_algo');
  }

  // phase2_lifetime - computed: true, optional: false, required: false
  public get phase2Lifetime() {
    return this.getNumberAttribute('phase2_lifetime');
  }

  // phase2_pfs_group - computed: true, optional: false, required: false
  public get phase2PfsGroup() {
    return this.getStringAttribute('phase2_pfs_group');
  }

  // pre_shared_key - computed: true, optional: false, required: false
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
