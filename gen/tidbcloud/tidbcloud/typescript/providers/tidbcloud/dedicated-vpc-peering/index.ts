// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedVpcPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account ID of the AWS VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#customer_account_id DedicatedVpcPeering#customer_account_id}
  */
  readonly customerAccountId: string;
  /**
  * The region ID of the AWS VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#customer_region_id DedicatedVpcPeering#customer_region_id}
  */
  readonly customerRegionId: string;
  /**
  * The VPC CIDR of the AWS VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#customer_vpc_cidr DedicatedVpcPeering#customer_vpc_cidr}
  */
  readonly customerVpcCidr: string;
  /**
  * The ID of the AWS VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#customer_vpc_id DedicatedVpcPeering#customer_vpc_id}
  */
  readonly customerVpcId: string;
  /**
  * The project ID for the VPC Peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#project_id DedicatedVpcPeering#project_id}
  */
  readonly projectId?: string;
  /**
  * The region ID of the TiDB Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#tidb_cloud_region_id DedicatedVpcPeering#tidb_cloud_region_id}
  */
  readonly tidbCloudRegionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering tidbcloud_dedicated_vpc_peering}
*/
export class DedicatedVpcPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_vpc_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedVpcPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedVpcPeering to import
  * @param importFromId The id of the existing DedicatedVpcPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedVpcPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_vpc_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/dedicated_vpc_peering tidbcloud_dedicated_vpc_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedVpcPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedVpcPeeringConfig) {
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
    this._customerAccountId = config.customerAccountId;
    this._customerRegionId = config.customerRegionId;
    this._customerVpcCidr = config.customerVpcCidr;
    this._customerVpcId = config.customerVpcId;
    this._projectId = config.projectId;
    this._tidbCloudRegionId = config.tidbCloudRegionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_vpc_peering_connection_id - computed: true, optional: false, required: false
  public get awsVpcPeeringConnectionId() {
    return this.getStringAttribute('aws_vpc_peering_connection_id');
  }

  // customer_account_id - computed: false, optional: false, required: true
  private _customerAccountId?: string; 
  public get customerAccountId() {
    return this.getStringAttribute('customer_account_id');
  }
  public set customerAccountId(value: string) {
    this._customerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAccountIdInput() {
    return this._customerAccountId;
  }

  // customer_region_id - computed: false, optional: false, required: true
  private _customerRegionId?: string; 
  public get customerRegionId() {
    return this.getStringAttribute('customer_region_id');
  }
  public set customerRegionId(value: string) {
    this._customerRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerRegionIdInput() {
    return this._customerRegionId;
  }

  // customer_vpc_cidr - computed: false, optional: false, required: true
  private _customerVpcCidr?: string; 
  public get customerVpcCidr() {
    return this.getStringAttribute('customer_vpc_cidr');
  }
  public set customerVpcCidr(value: string) {
    this._customerVpcCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerVpcCidrInput() {
    return this._customerVpcCidr;
  }

  // customer_vpc_id - computed: false, optional: false, required: true
  private _customerVpcId?: string; 
  public get customerVpcId() {
    return this.getStringAttribute('customer_vpc_id');
  }
  public set customerVpcId(value: string) {
    this._customerVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerVpcIdInput() {
    return this._customerVpcId;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // tidb_cloud_region_id - computed: false, optional: false, required: true
  private _tidbCloudRegionId?: string; 
  public get tidbCloudRegionId() {
    return this.getStringAttribute('tidb_cloud_region_id');
  }
  public set tidbCloudRegionId(value: string) {
    this._tidbCloudRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tidbCloudRegionIdInput() {
    return this._tidbCloudRegionId;
  }

  // tidb_cloud_vpc_cidr - computed: true, optional: false, required: false
  public get tidbCloudVpcCidr() {
    return this.getStringAttribute('tidb_cloud_vpc_cidr');
  }

  // tidb_cloud_vpc_id - computed: true, optional: false, required: false
  public get tidbCloudVpcId() {
    return this.getStringAttribute('tidb_cloud_vpc_id');
  }

  // vpc_peering_id - computed: true, optional: false, required: false
  public get vpcPeeringId() {
    return this.getStringAttribute('vpc_peering_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_account_id: cdktf.stringToTerraform(this._customerAccountId),
      customer_region_id: cdktf.stringToTerraform(this._customerRegionId),
      customer_vpc_cidr: cdktf.stringToTerraform(this._customerVpcCidr),
      customer_vpc_id: cdktf.stringToTerraform(this._customerVpcId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tidb_cloud_region_id: cdktf.stringToTerraform(this._tidbCloudRegionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_account_id: {
        value: cdktf.stringToHclTerraform(this._customerAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_region_id: {
        value: cdktf.stringToHclTerraform(this._customerRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_vpc_cidr: {
        value: cdktf.stringToHclTerraform(this._customerVpcCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_vpc_id: {
        value: cdktf.stringToHclTerraform(this._customerVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tidb_cloud_region_id: {
        value: cdktf.stringToHclTerraform(this._tidbCloudRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
