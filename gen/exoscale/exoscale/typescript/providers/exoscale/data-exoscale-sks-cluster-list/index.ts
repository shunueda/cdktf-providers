// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscaleSksClusterListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#aggregation_ca DataExoscaleSksClusterList#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#auto_upgrade DataExoscaleSksClusterList#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#cni DataExoscaleSksClusterList#cni}
  */
  readonly cni?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#control_plane_ca DataExoscaleSksClusterList#control_plane_ca}
  */
  readonly controlPlaneCa?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#created_at DataExoscaleSksClusterList#created_at}
  */
  readonly createdAt?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#description DataExoscaleSksClusterList#description}
  */
  readonly description?: string;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#enable_kube_proxy DataExoscaleSksClusterList#enable_kube_proxy}
  */
  readonly enableKubeProxy?: boolean | cdktf.IResolvable;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#endpoint DataExoscaleSksClusterList#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#exoscale_ccm DataExoscaleSksClusterList#exoscale_ccm}
  */
  readonly exoscaleCcm?: boolean | cdktf.IResolvable;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#exoscale_csi DataExoscaleSksClusterList#exoscale_csi}
  */
  readonly exoscaleCsi?: boolean | cdktf.IResolvable;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#id DataExoscaleSksClusterList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#kubelet_ca DataExoscaleSksClusterList#kubelet_ca}
  */
  readonly kubeletCa?: string;
  /**
  * Match against key/values. Keys are matched exactly, while values may be matched as a regex if you supply a string that begins and ends with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#labels DataExoscaleSksClusterList#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#metrics_server DataExoscaleSksClusterList#metrics_server}
  */
  readonly metricsServer?: boolean | cdktf.IResolvable;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#name DataExoscaleSksClusterList#name}
  */
  readonly name?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#service_level DataExoscaleSksClusterList#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#state DataExoscaleSksClusterList#state}
  */
  readonly state?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#version DataExoscaleSksClusterList#version}
  */
  readonly version?: string;
  /**
  * The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#zone DataExoscaleSksClusterList#zone}
  */
  readonly zone: string;
}
export interface DataExoscaleSksClusterListClustersAudit {
}

export function dataExoscaleSksClusterListClustersAuditToTerraform(struct?: DataExoscaleSksClusterListClustersAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleSksClusterListClustersAuditToHclTerraform(struct?: DataExoscaleSksClusterListClustersAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleSksClusterListClustersAuditOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataExoscaleSksClusterListClustersAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksClusterListClustersAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // initial_backoff - computed: true, optional: false, required: false
  public get initialBackoff() {
    return this.getStringAttribute('initial_backoff');
  }
}

export class DataExoscaleSksClusterListClustersAuditList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleSksClusterListClustersAuditOutputReference {
    return new DataExoscaleSksClusterListClustersAuditOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataExoscaleSksClusterListClustersOidc {
}

export function dataExoscaleSksClusterListClustersOidcToTerraform(struct?: DataExoscaleSksClusterListClustersOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleSksClusterListClustersOidcToHclTerraform(struct?: DataExoscaleSksClusterListClustersOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleSksClusterListClustersOidcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataExoscaleSksClusterListClustersOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksClusterListClustersOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // groups_claim - computed: true, optional: false, required: false
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }

  // groups_prefix - computed: true, optional: false, required: false
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // required_claim - computed: true, optional: false, required: false
  private _requiredClaim = new cdktf.StringMap(this, "required_claim");
  public get requiredClaim() {
    return this._requiredClaim;
  }

  // username_claim - computed: true, optional: false, required: false
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }

  // username_prefix - computed: true, optional: false, required: false
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
}

export class DataExoscaleSksClusterListClustersOidcList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleSksClusterListClustersOidcOutputReference {
    return new DataExoscaleSksClusterListClustersOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataExoscaleSksClusterListClusters {
}

export function dataExoscaleSksClusterListClustersToTerraform(struct?: DataExoscaleSksClusterListClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleSksClusterListClustersToHclTerraform(struct?: DataExoscaleSksClusterListClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleSksClusterListClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataExoscaleSksClusterListClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksClusterListClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return cdktf.Fn.tolist(this.getListAttribute('addons'));
  }

  // aggregation_ca - computed: true, optional: false, required: false
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataExoscaleSksClusterListClustersAuditList(this, "audit", false);
  public get audit() {
    return this._audit;
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }

  // cni - computed: true, optional: false, required: false
  public get cni() {
    return this.getStringAttribute('cni');
  }

  // control_plane_ca - computed: true, optional: false, required: false
  public get controlPlaneCa() {
    return this.getStringAttribute('control_plane_ca');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_kube_proxy - computed: true, optional: false, required: false
  public get enableKubeProxy() {
    return this.getBooleanAttribute('enable_kube_proxy');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // exoscale_ccm - computed: true, optional: false, required: false
  public get exoscaleCcm() {
    return this.getBooleanAttribute('exoscale_ccm');
  }

  // exoscale_csi - computed: true, optional: false, required: false
  public get exoscaleCsi() {
    return this.getBooleanAttribute('exoscale_csi');
  }

  // feature_gates - computed: true, optional: false, required: false
  public get featureGates() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_gates'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubelet_ca - computed: true, optional: false, required: false
  public get kubeletCa() {
    return this.getStringAttribute('kubelet_ca');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metrics_server - computed: true, optional: false, required: false
  public get metricsServer() {
    return this.getBooleanAttribute('metrics_server');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nodepools - computed: true, optional: false, required: false
  public get nodepools() {
    return cdktf.Fn.tolist(this.getListAttribute('nodepools'));
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new DataExoscaleSksClusterListClustersOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataExoscaleSksClusterListClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleSksClusterListClustersOutputReference {
    return new DataExoscaleSksClusterListClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list exoscale_sks_cluster_list}
*/
export class DataExoscaleSksClusterList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_sks_cluster_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscaleSksClusterList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscaleSksClusterList to import
  * @param importFromId The id of the existing DataExoscaleSksClusterList that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscaleSksClusterList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_sks_cluster_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster_list exoscale_sks_cluster_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscaleSksClusterListConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscaleSksClusterListConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_sks_cluster_list',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.66.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationCa = config.aggregationCa;
    this._autoUpgrade = config.autoUpgrade;
    this._cni = config.cni;
    this._controlPlaneCa = config.controlPlaneCa;
    this._createdAt = config.createdAt;
    this._description = config.description;
    this._enableKubeProxy = config.enableKubeProxy;
    this._endpoint = config.endpoint;
    this._exoscaleCcm = config.exoscaleCcm;
    this._exoscaleCsi = config.exoscaleCsi;
    this._id = config.id;
    this._kubeletCa = config.kubeletCa;
    this._labels = config.labels;
    this._metricsServer = config.metricsServer;
    this._name = config.name;
    this._serviceLevel = config.serviceLevel;
    this._state = config.state;
    this._version = config.version;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_ca - computed: false, optional: true, required: false
  private _aggregationCa?: string; 
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }
  public set aggregationCa(value: string) {
    this._aggregationCa = value;
  }
  public resetAggregationCa() {
    this._aggregationCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationCaInput() {
    return this._aggregationCa;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataExoscaleSksClusterListClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // cni - computed: false, optional: true, required: false
  private _cni?: string; 
  public get cni() {
    return this.getStringAttribute('cni');
  }
  public set cni(value: string) {
    this._cni = value;
  }
  public resetCni() {
    this._cni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni;
  }

  // control_plane_ca - computed: false, optional: true, required: false
  private _controlPlaneCa?: string; 
  public get controlPlaneCa() {
    return this.getStringAttribute('control_plane_ca');
  }
  public set controlPlaneCa(value: string) {
    this._controlPlaneCa = value;
  }
  public resetControlPlaneCa() {
    this._controlPlaneCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneCaInput() {
    return this._controlPlaneCa;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_kube_proxy - computed: false, optional: true, required: false
  private _enableKubeProxy?: boolean | cdktf.IResolvable; 
  public get enableKubeProxy() {
    return this.getBooleanAttribute('enable_kube_proxy');
  }
  public set enableKubeProxy(value: boolean | cdktf.IResolvable) {
    this._enableKubeProxy = value;
  }
  public resetEnableKubeProxy() {
    this._enableKubeProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubeProxyInput() {
    return this._enableKubeProxy;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // exoscale_ccm - computed: false, optional: true, required: false
  private _exoscaleCcm?: boolean | cdktf.IResolvable; 
  public get exoscaleCcm() {
    return this.getBooleanAttribute('exoscale_ccm');
  }
  public set exoscaleCcm(value: boolean | cdktf.IResolvable) {
    this._exoscaleCcm = value;
  }
  public resetExoscaleCcm() {
    this._exoscaleCcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exoscaleCcmInput() {
    return this._exoscaleCcm;
  }

  // exoscale_csi - computed: false, optional: true, required: false
  private _exoscaleCsi?: boolean | cdktf.IResolvable; 
  public get exoscaleCsi() {
    return this.getBooleanAttribute('exoscale_csi');
  }
  public set exoscaleCsi(value: boolean | cdktf.IResolvable) {
    this._exoscaleCsi = value;
  }
  public resetExoscaleCsi() {
    this._exoscaleCsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exoscaleCsiInput() {
    return this._exoscaleCsi;
  }

  // id - computed: false, optional: true, required: false
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

  // kubelet_ca - computed: false, optional: true, required: false
  private _kubeletCa?: string; 
  public get kubeletCa() {
    return this.getStringAttribute('kubelet_ca');
  }
  public set kubeletCa(value: string) {
    this._kubeletCa = value;
  }
  public resetKubeletCa() {
    this._kubeletCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletCaInput() {
    return this._kubeletCa;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // metrics_server - computed: false, optional: true, required: false
  private _metricsServer?: boolean | cdktf.IResolvable; 
  public get metricsServer() {
    return this.getBooleanAttribute('metrics_server');
  }
  public set metricsServer(value: boolean | cdktf.IResolvable) {
    this._metricsServer = value;
  }
  public resetMetricsServer() {
    this._metricsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServerInput() {
    return this._metricsServer;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // service_level - computed: false, optional: true, required: false
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  public resetServiceLevel() {
    this._serviceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_ca: cdktf.stringToTerraform(this._aggregationCa),
      auto_upgrade: cdktf.booleanToTerraform(this._autoUpgrade),
      cni: cdktf.stringToTerraform(this._cni),
      control_plane_ca: cdktf.stringToTerraform(this._controlPlaneCa),
      created_at: cdktf.stringToTerraform(this._createdAt),
      description: cdktf.stringToTerraform(this._description),
      enable_kube_proxy: cdktf.booleanToTerraform(this._enableKubeProxy),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      exoscale_ccm: cdktf.booleanToTerraform(this._exoscaleCcm),
      exoscale_csi: cdktf.booleanToTerraform(this._exoscaleCsi),
      id: cdktf.stringToTerraform(this._id),
      kubelet_ca: cdktf.stringToTerraform(this._kubeletCa),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      metrics_server: cdktf.booleanToTerraform(this._metricsServer),
      name: cdktf.stringToTerraform(this._name),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      state: cdktf.stringToTerraform(this._state),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_ca: {
        value: cdktf.stringToHclTerraform(this._aggregationCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_upgrade: {
        value: cdktf.booleanToHclTerraform(this._autoUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cni: {
        value: cdktf.stringToHclTerraform(this._cni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_ca: {
        value: cdktf.stringToHclTerraform(this._controlPlaneCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_kube_proxy: {
        value: cdktf.booleanToHclTerraform(this._enableKubeProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exoscale_ccm: {
        value: cdktf.booleanToHclTerraform(this._exoscaleCcm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exoscale_csi: {
        value: cdktf.booleanToHclTerraform(this._exoscaleCsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubelet_ca: {
        value: cdktf.stringToHclTerraform(this._kubeletCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metrics_server: {
        value: cdktf.booleanToHclTerraform(this._metricsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_level: {
        value: cdktf.stringToHclTerraform(this._serviceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
