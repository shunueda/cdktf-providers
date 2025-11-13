// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_vpc_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedVpcPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the VPC Peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_vpc_peering#vpc_peering_id DataTidbcloudDedicatedVpcPeering#vpc_peering_id}
  */
  readonly vpcPeeringId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_vpc_peering tidbcloud_dedicated_vpc_peering}
*/
export class DataTidbcloudDedicatedVpcPeering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_vpc_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedVpcPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedVpcPeering to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedVpcPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_vpc_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedVpcPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_vpc_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_vpc_peering tidbcloud_dedicated_vpc_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedVpcPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedVpcPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_vpc_peering',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._vpcPeeringId = config.vpcPeeringId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_vpc_peering_connection_id - computed: true, optional: false, required: false
  public get awsVpcPeeringConnectionId() {
    return this.getStringAttribute('aws_vpc_peering_connection_id');
  }

  // customer_account_id - computed: true, optional: false, required: false
  public get customerAccountId() {
    return this.getStringAttribute('customer_account_id');
  }

  // customer_region_id - computed: true, optional: false, required: false
  public get customerRegionId() {
    return this.getStringAttribute('customer_region_id');
  }

  // customer_vpc_cidr - computed: true, optional: false, required: false
  public get customerVpcCidr() {
    return this.getStringAttribute('customer_vpc_cidr');
  }

  // customer_vpc_id - computed: true, optional: false, required: false
  public get customerVpcId() {
    return this.getStringAttribute('customer_vpc_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tidb_cloud_account_id - computed: true, optional: false, required: false
  public get tidbCloudAccountId() {
    return this.getStringAttribute('tidb_cloud_account_id');
  }

  // tidb_cloud_cloud_provider - computed: true, optional: false, required: false
  public get tidbCloudCloudProvider() {
    return this.getStringAttribute('tidb_cloud_cloud_provider');
  }

  // tidb_cloud_region_id - computed: true, optional: false, required: false
  public get tidbCloudRegionId() {
    return this.getStringAttribute('tidb_cloud_region_id');
  }

  // tidb_cloud_vpc_cidr - computed: true, optional: false, required: false
  public get tidbCloudVpcCidr() {
    return this.getStringAttribute('tidb_cloud_vpc_cidr');
  }

  // tidb_cloud_vpc_id - computed: true, optional: false, required: false
  public get tidbCloudVpcId() {
    return this.getStringAttribute('tidb_cloud_vpc_id');
  }

  // vpc_peering_id - computed: false, optional: false, required: true
  private _vpcPeeringId?: string; 
  public get vpcPeeringId() {
    return this.getStringAttribute('vpc_peering_id');
  }
  public set vpcPeeringId(value: string) {
    this._vpcPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringIdInput() {
    return this._vpcPeeringId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vpc_peering_id: cdktf.stringToTerraform(this._vpcPeeringId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      vpc_peering_id: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
