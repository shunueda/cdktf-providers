// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWizKubernetesClustersConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}
  */
  readonly cloudProvider?: string[];
  /**
  * The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}
  */
  readonly externalIds?: string[];
  /**
  * How many matches to return, maximum is `500` per page.
  *     - Defaults to `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}
  */
  readonly first?: number;
  /**
  * Query Kubernetes Cluster of specific kind(s) or cloud provider(s).
  *     - Allowed values: 
  *         - EKS
  *         - GKE
  *         - AKS
  *         - OKE
  *         - OPEN_SHIFT
  *         - SELF_HOSTED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}
  */
  readonly kind?: string[];
  /**
  * How many pages to return. 0 means all pages.
  *     - Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Free text search. Specify empty string to return all kubernetes clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}
  */
  readonly search?: string;
}
export interface DataWizKubernetesClustersKubernetesClustersCloudAccount {
}

export function dataWizKubernetesClustersKubernetesClustersCloudAccountToTerraform(struct?: DataWizKubernetesClustersKubernetesClustersCloudAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWizKubernetesClustersKubernetesClustersCloudAccountToHclTerraform(struct?: DataWizKubernetesClustersKubernetesClustersCloudAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizKubernetesClustersKubernetesClustersCloudAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizKubernetesClustersKubernetesClustersCloudAccount | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataWizKubernetesClustersKubernetesClustersCloudAccountList extends cdktf.ComplexList {

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
  public get(index: number): DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference {
    return new DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWizKubernetesClustersKubernetesClusters {
}

export function dataWizKubernetesClustersKubernetesClustersToTerraform(struct?: DataWizKubernetesClustersKubernetesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWizKubernetesClustersKubernetesClustersToHclTerraform(struct?: DataWizKubernetesClustersKubernetesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWizKubernetesClustersKubernetesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizKubernetesClustersKubernetesClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizKubernetesClustersKubernetesClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_account - computed: true, optional: false, required: false
  private _cloudAccount = new DataWizKubernetesClustersKubernetesClustersCloudAccountList(this, "cloud_account", true);
  public get cloudAccount() {
    return this._cloudAccount;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataWizKubernetesClustersKubernetesClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataWizKubernetesClustersKubernetesClustersOutputReference {
    return new DataWizKubernetesClustersKubernetesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters}
*/
export class DataWizKubernetesClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_kubernetes_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWizKubernetesClusters to import
  * @param importFromId The id of the existing DataWizKubernetesClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWizKubernetesClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_kubernetes_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWizKubernetesClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWizKubernetesClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wiz_kubernetes_clusters',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
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
    this._externalIds = config.externalIds;
    this._first = config.first;
    this._kind = config.kind;
    this._maxPages = config.maxPages;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_ids - computed: false, optional: true, required: false
  private _externalIds?: string[]; 
  public get externalIds() {
    return this.getListAttribute('external_ids');
  }
  public set externalIds(value: string[]) {
    this._externalIds = value;
  }
  public resetExternalIds() {
    this._externalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdsInput() {
    return this._externalIds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string[]; 
  public get kind() {
    return this.getListAttribute('kind');
  }
  public set kind(value: string[]) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // kubernetes_clusters - computed: true, optional: false, required: false
  private _kubernetesClusters = new DataWizKubernetesClustersKubernetesClustersList(this, "kubernetes_clusters", true);
  public get kubernetesClusters() {
    return this._kubernetesClusters;
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

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudProvider),
      external_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalIds),
      first: cdktf.numberToTerraform(this._first),
      kind: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kind),
      max_pages: cdktf.numberToTerraform(this._maxPages),
      search: cdktf.stringToTerraform(this._search),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudProvider),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalIds),
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
      kind: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kind),
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
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
