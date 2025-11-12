// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWizCloudAccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * QueryQuery cloud accounts by project assignment state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}
  */
  readonly assignedToProject?: boolean | cdktf.IResolvable;
  /**
  * Query cloud accounts of specific cloud provider.
  *     - Allowed values: 
  *         - GCP
  *         - AWS
  *         - Azure
  *         - OCI
  *         - Alibaba
  *         - vSphere
  *         - OpenShift
  *         - Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}
  */
  readonly cloudProvider?: string[];
  /**
  * Query cloud accounts by specific connector ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}
  */
  readonly connectorId?: string[];
  /**
  * Query cloud accounts by specific connector issue ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}
  */
  readonly connectorIssueId?: string[];
  /**
  * How many results to return, maximum is `500` is per page.
  *     - Defaults to `500`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}
  */
  readonly first?: number;
  /**
  * QueryQuery cloud accounts by project assignment state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}
  */
  readonly hasMultipleConnectorSources?: boolean | cdktf.IResolvable;
  /**
  * Get specific Cloud Accounts by their IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}
  */
  readonly ids?: string[];
  /**
  * How many pages to return. 0 means all pages.
  *     - Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Query cloud accounts of a specific linked project, given its id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}
  */
  readonly projectId?: string;
  /**
  * Free text search on cloud account name or tags or external-id. Specify list of empty string to return all cloud accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}
  */
  readonly search?: string[];
  /**
  * Query cloud accounts by status.
  *     - Allowed values: 
  *         - CONNECTED
  *         - ERROR
  *         - DISABLED
  *         - INITIAL_SCANNING
  *         - PARTIALLY_CONNECTED
  *         - DISCONNECTED
  *         - DISCOVERED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}
  */
  readonly status?: string[];
}
export interface DataWizCloudAccountsCloudAccounts {
}

export function dataWizCloudAccountsCloudAccountsToTerraform(struct?: DataWizCloudAccountsCloudAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWizCloudAccountsCloudAccountsToHclTerraform(struct?: DataWizCloudAccountsCloudAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWizCloudAccountsCloudAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizCloudAccountsCloudAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizCloudAccountsCloudAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_project_ids - computed: true, optional: false, required: false
  public get linkedProjectIds() {
    return this.getListAttribute('linked_project_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_connector_ids - computed: true, optional: false, required: false
  public get sourceConnectorIds() {
    return this.getListAttribute('source_connector_ids');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataWizCloudAccountsCloudAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataWizCloudAccountsCloudAccountsOutputReference {
    return new DataWizCloudAccountsCloudAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts wiz_cloud_accounts}
*/
export class DataWizCloudAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_cloud_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWizCloudAccounts to import
  * @param importFromId The id of the existing DataWizCloudAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWizCloudAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_cloud_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts wiz_cloud_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWizCloudAccountsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWizCloudAccountsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wiz_cloud_accounts',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedToProject = config.assignedToProject;
    this._cloudProvider = config.cloudProvider;
    this._connectorId = config.connectorId;
    this._connectorIssueId = config.connectorIssueId;
    this._first = config.first;
    this._hasMultipleConnectorSources = config.hasMultipleConnectorSources;
    this._ids = config.ids;
    this._maxPages = config.maxPages;
    this._projectId = config.projectId;
    this._search = config.search;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_to_project - computed: false, optional: true, required: false
  private _assignedToProject?: boolean | cdktf.IResolvable; 
  public get assignedToProject() {
    return this.getBooleanAttribute('assigned_to_project');
  }
  public set assignedToProject(value: boolean | cdktf.IResolvable) {
    this._assignedToProject = value;
  }
  public resetAssignedToProject() {
    this._assignedToProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToProjectInput() {
    return this._assignedToProject;
  }

  // cloud_accounts - computed: true, optional: false, required: false
  private _cloudAccounts = new DataWizCloudAccountsCloudAccountsList(this, "cloud_accounts", true);
  public get cloudAccounts() {
    return this._cloudAccounts;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string[]; 
  public get cloudProvider() {
    return this.getListAttribute('cloud_provider');
  }
  public set cloudProvider(value: string[]) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string[]; 
  public get connectorId() {
    return this.getListAttribute('connector_id');
  }
  public set connectorId(value: string[]) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // connector_issue_id - computed: false, optional: true, required: false
  private _connectorIssueId?: string[]; 
  public get connectorIssueId() {
    return this.getListAttribute('connector_issue_id');
  }
  public set connectorIssueId(value: string[]) {
    this._connectorIssueId = value;
  }
  public resetConnectorIssueId() {
    this._connectorIssueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIssueIdInput() {
    return this._connectorIssueId;
  }

  // first - computed: false, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // has_multiple_connector_sources - computed: false, optional: true, required: false
  private _hasMultipleConnectorSources?: boolean | cdktf.IResolvable; 
  public get hasMultipleConnectorSources() {
    return this.getBooleanAttribute('has_multiple_connector_sources');
  }
  public set hasMultipleConnectorSources(value: boolean | cdktf.IResolvable) {
    this._hasMultipleConnectorSources = value;
  }
  public resetHasMultipleConnectorSources() {
    this._hasMultipleConnectorSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMultipleConnectorSourcesInput() {
    return this._hasMultipleConnectorSources;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // max_pages - computed: false, optional: true, required: false
  private _maxPages?: number; 
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }
  public set maxPages(value: number) {
    this._maxPages = value;
  }
  public resetMaxPages() {
    this._maxPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesInput() {
    return this._maxPages;
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

  // search - computed: false, optional: true, required: false
  private _search?: string[]; 
  public get search() {
    return this.getListAttribute('search');
  }
  public set search(value: string[]) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_to_project: cdktf.booleanToTerraform(this._assignedToProject),
      cloud_provider: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudProvider),
      connector_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectorId),
      connector_issue_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectorIssueId),
      first: cdktf.numberToTerraform(this._first),
      has_multiple_connector_sources: cdktf.booleanToTerraform(this._hasMultipleConnectorSources),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      max_pages: cdktf.numberToTerraform(this._maxPages),
      project_id: cdktf.stringToTerraform(this._projectId),
      search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._search),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_to_project: {
        value: cdktf.booleanToHclTerraform(this._assignedToProject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_provider: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudProvider),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connector_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectorId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connector_issue_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectorIssueId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      first: {
        value: cdktf.numberToHclTerraform(this._first),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      has_multiple_connector_sources: {
        value: cdktf.booleanToHclTerraform(this._hasMultipleConnectorSources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_pages: {
        value: cdktf.numberToHclTerraform(this._maxPages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._search),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
