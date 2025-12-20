// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitSfsResourcePoolSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT project ID to which the resource pool snapshot is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot#project_id DataStackitSfsResourcePoolSnapshot#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. Read-only attribute that reflects the provider region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot#region DataStackitSfsResourcePoolSnapshot#region}
  */
  readonly region?: string;
  /**
  * Resource pool ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot#resource_pool_id DataStackitSfsResourcePoolSnapshot#resource_pool_id}
  */
  readonly resourcePoolId: string;
}
export interface DataStackitSfsResourcePoolSnapshotSnapshots {
}

export function dataStackitSfsResourcePoolSnapshotSnapshotsToTerraform(struct?: DataStackitSfsResourcePoolSnapshotSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitSfsResourcePoolSnapshotSnapshotsToHclTerraform(struct?: DataStackitSfsResourcePoolSnapshotSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitSfsResourcePoolSnapshotSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitSfsResourcePoolSnapshotSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitSfsResourcePoolSnapshotSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // logical_size_gigabytes - computed: true, optional: false, required: false
  public get logicalSizeGigabytes() {
    return this.getNumberAttribute('logical_size_gigabytes');
  }

  // resource_pool_id - computed: true, optional: false, required: false
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }

  // size_gigabytes - computed: true, optional: false, required: false
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
}

export class DataStackitSfsResourcePoolSnapshotSnapshotsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitSfsResourcePoolSnapshotSnapshotsOutputReference {
    return new DataStackitSfsResourcePoolSnapshotSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot stackit_sfs_resource_pool_snapshot}
*/
export class DataStackitSfsResourcePoolSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sfs_resource_pool_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitSfsResourcePoolSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitSfsResourcePoolSnapshot to import
  * @param importFromId The id of the existing DataStackitSfsResourcePoolSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitSfsResourcePoolSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sfs_resource_pool_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/sfs_resource_pool_snapshot stackit_sfs_resource_pool_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitSfsResourcePoolSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitSfsResourcePoolSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_sfs_resource_pool_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._region = config.region;
    this._resourcePoolId = config.resourcePoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_pool_id - computed: false, optional: false, required: true
  private _resourcePoolId?: string; 
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }
  public set resourcePoolId(value: string) {
    this._resourcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolIdInput() {
    return this._resourcePoolId;
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataStackitSfsResourcePoolSnapshotSnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
