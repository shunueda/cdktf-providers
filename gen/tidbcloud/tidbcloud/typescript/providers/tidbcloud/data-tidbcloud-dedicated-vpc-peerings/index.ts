// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_vpc_peerings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedVpcPeeringsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud provider for the vpc peerings. If specified, only VPC peerings of the specified cloud provider will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_vpc_peerings#cloud_provider DataTidbcloudDedicatedVpcPeerings#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * The project ID for the vpc peerings. If unspecified, the project ID of default project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_vpc_peerings#project_id DataTidbcloudDedicatedVpcPeerings#project_id}
  */
  readonly projectId?: string;
}
export interface DataTidbcloudDedicatedVpcPeeringsVpcPeerings {
}

export function dataTidbcloudDedicatedVpcPeeringsVpcPeeringsToTerraform(struct?: DataTidbcloudDedicatedVpcPeeringsVpcPeerings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedVpcPeeringsVpcPeeringsToHclTerraform(struct?: DataTidbcloudDedicatedVpcPeeringsVpcPeerings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedVpcPeeringsVpcPeeringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTidbcloudDedicatedVpcPeeringsVpcPeerings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedVpcPeeringsVpcPeerings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // vpc_peering_id - computed: true, optional: false, required: false
  public get vpcPeeringId() {
    return this.getStringAttribute('vpc_peering_id');
  }
}

export class DataTidbcloudDedicatedVpcPeeringsVpcPeeringsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTidbcloudDedicatedVpcPeeringsVpcPeeringsOutputReference {
    return new DataTidbcloudDedicatedVpcPeeringsVpcPeeringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_vpc_peerings tidbcloud_dedicated_vpc_peerings}
*/
export class DataTidbcloudDedicatedVpcPeerings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_vpc_peerings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedVpcPeerings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedVpcPeerings to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedVpcPeerings that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_vpc_peerings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedVpcPeerings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_vpc_peerings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_vpc_peerings tidbcloud_dedicated_vpc_peerings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedVpcPeeringsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedVpcPeeringsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_vpc_peerings',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // project_id - computed: false, optional: true, required: false
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

  // vpc_peerings - computed: true, optional: false, required: false
  private _vpcPeerings = new DataTidbcloudDedicatedVpcPeeringsVpcPeeringsList(this, "vpc_peerings", false);
  public get vpcPeerings() {
    return this._vpcPeerings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
