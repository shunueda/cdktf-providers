// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/cluster_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateClusterStatusConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPingfederateClusterStatusNodesAdminConsoleInfo {
}

export function dataPingfederateClusterStatusNodesAdminConsoleInfoToTerraform(struct?: DataPingfederateClusterStatusNodesAdminConsoleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateClusterStatusNodesAdminConsoleInfoToHclTerraform(struct?: DataPingfederateClusterStatusNodesAdminConsoleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateClusterStatusNodesAdminConsoleInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateClusterStatusNodesAdminConsoleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateClusterStatusNodesAdminConsoleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_sync_status - computed: true, optional: false, required: false
  public get configSyncStatus() {
    return this.getStringAttribute('config_sync_status');
  }

  // config_sync_timestamp - computed: true, optional: false, required: false
  public get configSyncTimestamp() {
    return this.getStringAttribute('config_sync_timestamp');
  }

  // console_role - computed: true, optional: false, required: false
  public get consoleRole() {
    return this.getStringAttribute('console_role');
  }

  // console_role_last_update_date - computed: true, optional: false, required: false
  public get consoleRoleLastUpdateDate() {
    return this.getStringAttribute('console_role_last_update_date');
  }
}
export interface DataPingfederateClusterStatusNodes {
}

export function dataPingfederateClusterStatusNodesToTerraform(struct?: DataPingfederateClusterStatusNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateClusterStatusNodesToHclTerraform(struct?: DataPingfederateClusterStatusNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateClusterStatusNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateClusterStatusNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateClusterStatusNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // admin_console_info - computed: true, optional: false, required: false
  private _adminConsoleInfo = new DataPingfederateClusterStatusNodesAdminConsoleInfoOutputReference(this, "admin_console_info");
  public get adminConsoleInfo() {
    return this._adminConsoleInfo;
  }

  // configuration_timestamp - computed: true, optional: false, required: false
  public get configurationTimestamp() {
    return this.getStringAttribute('configuration_timestamp');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // node_group - computed: true, optional: false, required: false
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }

  // node_tags - computed: true, optional: false, required: false
  public get nodeTags() {
    return this.getStringAttribute('node_tags');
  }

  // replication_status - computed: true, optional: false, required: false
  public get replicationStatus() {
    return this.getStringAttribute('replication_status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataPingfederateClusterStatusNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateClusterStatusNodesOutputReference {
    return new DataPingfederateClusterStatusNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/cluster_status pingfederate_cluster_status}
*/
export class DataPingfederateClusterStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_cluster_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateClusterStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateClusterStatus to import
  * @param importFromId The id of the existing DataPingfederateClusterStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/cluster_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateClusterStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_cluster_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/cluster_status pingfederate_cluster_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateClusterStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateClusterStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_cluster_status',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
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

  // current_node_index - computed: true, optional: false, required: false
  public get currentNodeIndex() {
    return this.getNumberAttribute('current_node_index');
  }

  // last_config_update_time - computed: true, optional: false, required: false
  public get lastConfigUpdateTime() {
    return this.getStringAttribute('last_config_update_time');
  }

  // last_replication_time - computed: true, optional: false, required: false
  public get lastReplicationTime() {
    return this.getStringAttribute('last_replication_time');
  }

  // mixed_mode - computed: true, optional: false, required: false
  public get mixedMode() {
    return this.getBooleanAttribute('mixed_mode');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataPingfederateClusterStatusNodesList(this, "nodes", true);
  public get nodes() {
    return this._nodes;
  }

  // replication_required - computed: true, optional: false, required: false
  public get replicationRequired() {
    return this.getBooleanAttribute('replication_required');
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
