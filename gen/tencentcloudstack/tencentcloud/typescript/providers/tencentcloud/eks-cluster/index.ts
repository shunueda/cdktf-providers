// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#cluster_desc EksCluster#cluster_desc}
  */
  readonly clusterDesc?: string;
  /**
  * Name of EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#cluster_name EksCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Indicates whether to enable dns in user cluster, default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#enable_vpc_core_dns EksCluster#enable_vpc_core_dns}
  */
  readonly enableVpcCoreDns?: boolean | cdktf.IResolvable;
  /**
  * Extend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#extra_param EksCluster#extra_param}
  */
  readonly extraParam?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kubernetes version of EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#k8s_version EksCluster#k8s_version}
  */
  readonly k8SVersion: string;
  /**
  * Delete CBS after EKS cluster remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#need_delete_cbs EksCluster#need_delete_cbs}
  */
  readonly needDeleteCbs?: boolean | cdktf.IResolvable;
  /**
  * Subnet id of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#service_subnet_id EksCluster#service_subnet_id}
  */
  readonly serviceSubnetId?: string;
  /**
  * Subnet Ids for EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Tags of EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Vpc Id of EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#vpc_id EksCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * dns_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#dns_servers EksCluster#dns_servers}
  */
  readonly dnsServers?: EksClusterDnsServers[] | cdktf.IResolvable;
  /**
  * internal_lb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#internal_lb EksCluster#internal_lb}
  */
  readonly internalLb?: EksClusterInternalLb;
  /**
  * public_lb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#public_lb EksCluster#public_lb}
  */
  readonly publicLb?: EksClusterPublicLb;
}
export interface EksClusterDnsServers {
  /**
  * DNS Server domain. Empty indicates all domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#domain EksCluster#domain}
  */
  readonly domain?: string;
  /**
  * List of DNS Server IP address, pattern: "ip[:port]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#servers EksCluster#servers}
  */
  readonly servers?: string[];
}

export function eksClusterDnsServersToTerraform(struct?: EksClusterDnsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function eksClusterDnsServersToHclTerraform(struct?: EksClusterDnsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterDnsServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EksClusterDnsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterDnsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._servers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._servers = value.servers;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}

export class EksClusterDnsServersList extends cdktf.ComplexList {
  public internalValue? : EksClusterDnsServers[] | cdktf.IResolvable

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
  public get(index: number): EksClusterDnsServersOutputReference {
    return new EksClusterDnsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterInternalLb {
  /**
  * Indicates weather the internal access LB enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ID of subnet which related to Internal LB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#subnet_id EksCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function eksClusterInternalLbToTerraform(struct?: EksClusterInternalLbOutputReference | EksClusterInternalLb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function eksClusterInternalLbToHclTerraform(struct?: EksClusterInternalLbOutputReference | EksClusterInternalLb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterInternalLbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterInternalLb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterInternalLb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._subnetId = value.subnetId;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface EksClusterPublicLb {
  /**
  * List of CIDRs which allowed to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#allow_from_cidrs EksCluster#allow_from_cidrs}
  */
  readonly allowFromCidrs?: string[];
  /**
  * Indicates weather the public access LB enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Extra param text json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#extra_param EksCluster#extra_param}
  */
  readonly extraParam?: string;
  /**
  * List of security allow IP or CIDRs, default deny all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#security_policies EksCluster#security_policies}
  */
  readonly securityPolicies?: string[];
}

export function eksClusterPublicLbToTerraform(struct?: EksClusterPublicLbOutputReference | EksClusterPublicLb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_from_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowFromCidrs),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extra_param: cdktf.stringToTerraform(struct!.extraParam),
    security_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityPolicies),
  }
}


export function eksClusterPublicLbToHclTerraform(struct?: EksClusterPublicLbOutputReference | EksClusterPublicLb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_from_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowFromCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_param: {
      value: cdktf.stringToHclTerraform(struct!.extraParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterPublicLbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterPublicLb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFromCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFromCidrs = this._allowFromCidrs;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extraParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParam = this._extraParam;
    }
    if (this._securityPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicies = this._securityPolicies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterPublicLb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowFromCidrs = undefined;
      this._enabled = undefined;
      this._extraParam = undefined;
      this._securityPolicies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowFromCidrs = value.allowFromCidrs;
      this._enabled = value.enabled;
      this._extraParam = value.extraParam;
      this._securityPolicies = value.securityPolicies;
    }
  }

  // allow_from_cidrs - computed: false, optional: true, required: false
  private _allowFromCidrs?: string[]; 
  public get allowFromCidrs() {
    return this.getListAttribute('allow_from_cidrs');
  }
  public set allowFromCidrs(value: string[]) {
    this._allowFromCidrs = value;
  }
  public resetAllowFromCidrs() {
    this._allowFromCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFromCidrsInput() {
    return this._allowFromCidrs;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extra_param - computed: false, optional: true, required: false
  private _extraParam?: string; 
  public get extraParam() {
    return this.getStringAttribute('extra_param');
  }
  public set extraParam(value: string) {
    this._extraParam = value;
  }
  public resetExtraParam() {
    this._extraParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam;
  }

  // security_group - computed: true, optional: false, required: false
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }

  // security_policies - computed: false, optional: true, required: false
  private _securityPolicies?: string[]; 
  public get securityPolicies() {
    return this.getListAttribute('security_policies');
  }
  public set securityPolicies(value: string[]) {
    this._securityPolicies = value;
  }
  public resetSecurityPolicies() {
    this._securityPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPoliciesInput() {
    return this._securityPolicies;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster tencentcloud_eks_cluster}
*/
export class EksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksCluster to import
  * @param importFromId The id of the existing EksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/eks_cluster tencentcloud_eks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDesc = config.clusterDesc;
    this._clusterName = config.clusterName;
    this._enableVpcCoreDns = config.enableVpcCoreDns;
    this._extraParam = config.extraParam;
    this._id = config.id;
    this._k8SVersion = config.k8SVersion;
    this._needDeleteCbs = config.needDeleteCbs;
    this._serviceSubnetId = config.serviceSubnetId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._dnsServers.internalValue = config.dnsServers;
    this._internalLb.internalValue = config.internalLb;
    this._publicLb.internalValue = config.publicLb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_desc - computed: false, optional: true, required: false
  private _clusterDesc?: string; 
  public get clusterDesc() {
    return this.getStringAttribute('cluster_desc');
  }
  public set clusterDesc(value: string) {
    this._clusterDesc = value;
  }
  public resetClusterDesc() {
    this._clusterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDescInput() {
    return this._clusterDesc;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // enable_vpc_core_dns - computed: false, optional: true, required: false
  private _enableVpcCoreDns?: boolean | cdktf.IResolvable; 
  public get enableVpcCoreDns() {
    return this.getBooleanAttribute('enable_vpc_core_dns');
  }
  public set enableVpcCoreDns(value: boolean | cdktf.IResolvable) {
    this._enableVpcCoreDns = value;
  }
  public resetEnableVpcCoreDns() {
    this._enableVpcCoreDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcCoreDnsInput() {
    return this._enableVpcCoreDns;
  }

  // extra_param - computed: false, optional: true, required: false
  private _extraParam?: { [key: string]: string }; 
  public get extraParam() {
    return this.getStringMapAttribute('extra_param');
  }
  public set extraParam(value: { [key: string]: string }) {
    this._extraParam = value;
  }
  public resetExtraParam() {
    this._extraParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamInput() {
    return this._extraParam;
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

  // k8s_version - computed: false, optional: false, required: true
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // need_delete_cbs - computed: false, optional: true, required: false
  private _needDeleteCbs?: boolean | cdktf.IResolvable; 
  public get needDeleteCbs() {
    return this.getBooleanAttribute('need_delete_cbs');
  }
  public set needDeleteCbs(value: boolean | cdktf.IResolvable) {
    this._needDeleteCbs = value;
  }
  public resetNeedDeleteCbs() {
    this._needDeleteCbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needDeleteCbsInput() {
    return this._needDeleteCbs;
  }

  // service_subnet_id - computed: false, optional: true, required: false
  private _serviceSubnetId?: string; 
  public get serviceSubnetId() {
    return this.getStringAttribute('service_subnet_id');
  }
  public set serviceSubnetId(value: string) {
    this._serviceSubnetId = value;
  }
  public resetServiceSubnetId() {
    this._serviceSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubnetIdInput() {
    return this._serviceSubnetId;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers = new EksClusterDnsServersList(this, "dns_servers", false);
  public get dnsServers() {
    return this._dnsServers;
  }
  public putDnsServers(value: EksClusterDnsServers[] | cdktf.IResolvable) {
    this._dnsServers.internalValue = value;
  }
  public resetDnsServers() {
    this._dnsServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers.internalValue;
  }

  // internal_lb - computed: false, optional: true, required: false
  private _internalLb = new EksClusterInternalLbOutputReference(this, "internal_lb");
  public get internalLb() {
    return this._internalLb;
  }
  public putInternalLb(value: EksClusterInternalLb) {
    this._internalLb.internalValue = value;
  }
  public resetInternalLb() {
    this._internalLb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLbInput() {
    return this._internalLb.internalValue;
  }

  // public_lb - computed: false, optional: true, required: false
  private _publicLb = new EksClusterPublicLbOutputReference(this, "public_lb");
  public get publicLb() {
    return this._publicLb;
  }
  public putPublicLb(value: EksClusterPublicLb) {
    this._publicLb.internalValue = value;
  }
  public resetPublicLb() {
    this._publicLb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicLbInput() {
    return this._publicLb.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_desc: cdktf.stringToTerraform(this._clusterDesc),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      enable_vpc_core_dns: cdktf.booleanToTerraform(this._enableVpcCoreDns),
      extra_param: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraParam),
      id: cdktf.stringToTerraform(this._id),
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      need_delete_cbs: cdktf.booleanToTerraform(this._needDeleteCbs),
      service_subnet_id: cdktf.stringToTerraform(this._serviceSubnetId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      dns_servers: cdktf.listMapper(eksClusterDnsServersToTerraform, true)(this._dnsServers.internalValue),
      internal_lb: eksClusterInternalLbToTerraform(this._internalLb.internalValue),
      public_lb: eksClusterPublicLbToTerraform(this._publicLb.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_desc: {
        value: cdktf.stringToHclTerraform(this._clusterDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_vpc_core_dns: {
        value: cdktf.booleanToHclTerraform(this._enableVpcCoreDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_param: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraParam),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_version: {
        value: cdktf.stringToHclTerraform(this._k8SVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_delete_cbs: {
        value: cdktf.booleanToHclTerraform(this._needDeleteCbs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_subnet_id: {
        value: cdktf.stringToHclTerraform(this._serviceSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(eksClusterDnsServersToHclTerraform, true)(this._dnsServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterDnsServersList",
      },
      internal_lb: {
        value: eksClusterInternalLbToHclTerraform(this._internalLb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterInternalLbList",
      },
      public_lb: {
        value: eksClusterPublicLbToHclTerraform(this._publicLb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterPublicLbList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
