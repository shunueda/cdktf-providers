// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSinglestoredbWorkspaceGroupsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindow {
}

export function dataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindowToTerraform(struct?: DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindowToHclTerraform(struct?: DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }
}
export interface DataSinglestoredbWorkspaceGroupsWorkspaceGroups {
}

export function dataSinglestoredbWorkspaceGroupsWorkspaceGroupsToTerraform(struct?: DataSinglestoredbWorkspaceGroupsWorkspaceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspaceGroupsWorkspaceGroupsToHclTerraform(struct?: DataSinglestoredbWorkspaceGroupsWorkspaceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspaceGroupsWorkspaceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSinglestoredbWorkspaceGroupsWorkspaceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspaceGroupsWorkspaceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_all_traffic - computed: true, optional: false, required: false
  public get allowAllTraffic() {
    return this.getBooleanAttribute('allow_all_traffic');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // firewall_ranges - computed: true, optional: false, required: false
  public get firewallRanges() {
    return this.getListAttribute('firewall_ranges');
  }

  // high_availability_two_zones - computed: true, optional: false, required: false
  public get highAvailabilityTwoZones() {
    return this.getBooleanAttribute('high_availability_two_zones');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opt_in_preview_feature - computed: true, optional: false, required: false
  public get optInPreviewFeature() {
    return this.getBooleanAttribute('opt_in_preview_feature');
  }

  // outbound_allow_list - computed: true, optional: false, required: false
  public get outboundAllowList() {
    return this.getStringAttribute('outbound_allow_list');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_window - computed: true, optional: false, required: false
  private _updateWindow = new DataSinglestoredbWorkspaceGroupsWorkspaceGroupsUpdateWindowOutputReference(this, "update_window");
  public get updateWindow() {
    return this._updateWindow;
  }
}

export class DataSinglestoredbWorkspaceGroupsWorkspaceGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSinglestoredbWorkspaceGroupsWorkspaceGroupsOutputReference {
    return new DataSinglestoredbWorkspaceGroupsWorkspaceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace_groups singlestoredb_workspace_groups}
*/
export class DataSinglestoredbWorkspaceGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_workspace_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSinglestoredbWorkspaceGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSinglestoredbWorkspaceGroups to import
  * @param importFromId The id of the existing DataSinglestoredbWorkspaceGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSinglestoredbWorkspaceGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_workspace_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace_groups singlestoredb_workspace_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSinglestoredbWorkspaceGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSinglestoredbWorkspaceGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_workspace_groups',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // workspace_groups - computed: true, optional: false, required: false
  private _workspaceGroups = new DataSinglestoredbWorkspaceGroupsWorkspaceGroupsList(this, "workspace_groups", false);
  public get workspaceGroups() {
    return this._workspaceGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
