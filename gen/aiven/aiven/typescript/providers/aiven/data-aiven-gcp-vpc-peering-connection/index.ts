// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenGcpVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Google Cloud project ID. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection#gcp_project_id DataAivenGcpVpcPeeringConnection#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection#id DataAivenGcpVpcPeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Google Cloud VPC network name. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection#peer_vpc DataAivenGcpVpcPeeringConnection#peer_vpc}
  */
  readonly peerVpc: string;
  /**
  * The VPC the peering connection belongs to. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection#vpc_id DataAivenGcpVpcPeeringConnection#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection aiven_gcp_vpc_peering_connection}
*/
export class DataAivenGcpVpcPeeringConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_gcp_vpc_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenGcpVpcPeeringConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenGcpVpcPeeringConnection to import
  * @param importFromId The id of the existing DataAivenGcpVpcPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenGcpVpcPeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_gcp_vpc_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/gcp_vpc_peering_connection aiven_gcp_vpc_peering_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenGcpVpcPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenGcpVpcPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_gcp_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._peerVpc = config.peerVpc;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      peer_vpc: cdktf.stringToTerraform(this._peerVpc),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
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
