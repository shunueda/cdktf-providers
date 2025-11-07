// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_regional_networking_vpc_qos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcfaOrgRegionalNetworkingVpcQosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_regional_networking_vpc_qos#id DataVcfaOrgRegionalNetworkingVpcQos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of Org Regional Networking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_regional_networking_vpc_qos#org_regional_networking_id DataVcfaOrgRegionalNetworkingVpcQos#org_regional_networking_id}
  */
  readonly orgRegionalNetworkingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_regional_networking_vpc_qos vcfa_org_regional_networking_vpc_qos}
*/
export class DataVcfaOrgRegionalNetworkingVpcQos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_org_regional_networking_vpc_qos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcfaOrgRegionalNetworkingVpcQos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcfaOrgRegionalNetworkingVpcQos to import
  * @param importFromId The id of the existing DataVcfaOrgRegionalNetworkingVpcQos that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_regional_networking_vpc_qos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcfaOrgRegionalNetworkingVpcQos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_org_regional_networking_vpc_qos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_regional_networking_vpc_qos vcfa_org_regional_networking_vpc_qos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcfaOrgRegionalNetworkingVpcQosConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcfaOrgRegionalNetworkingVpcQosConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_org_regional_networking_vpc_qos',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
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
    this._orgRegionalNetworkingId = config.orgRegionalNetworkingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_cluster_id - computed: true, optional: false, required: false
  public get edgeClusterId() {
    return this.getStringAttribute('edge_cluster_id');
  }

  // egress_burst_size_bytes - computed: true, optional: false, required: false
  public get egressBurstSizeBytes() {
    return this.getStringAttribute('egress_burst_size_bytes');
  }

  // egress_committed_bandwidth_mbps - computed: true, optional: false, required: false
  public get egressCommittedBandwidthMbps() {
    return this.getStringAttribute('egress_committed_bandwidth_mbps');
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

  // ingress_burst_size_bytes - computed: true, optional: false, required: false
  public get ingressBurstSizeBytes() {
    return this.getStringAttribute('ingress_burst_size_bytes');
  }

  // ingress_committed_bandwidth_mbps - computed: true, optional: false, required: false
  public get ingressCommittedBandwidthMbps() {
    return this.getStringAttribute('ingress_committed_bandwidth_mbps');
  }

  // org_regional_networking_id - computed: false, optional: false, required: true
  private _orgRegionalNetworkingId?: string; 
  public get orgRegionalNetworkingId() {
    return this.getStringAttribute('org_regional_networking_id');
  }
  public set orgRegionalNetworkingId(value: string) {
    this._orgRegionalNetworkingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgRegionalNetworkingIdInput() {
    return this._orgRegionalNetworkingId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_regional_networking_id: cdktf.stringToTerraform(this._orgRegionalNetworkingId),
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
      org_regional_networking_id: {
        value: cdktf.stringToHclTerraform(this._orgRegionalNetworkingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
