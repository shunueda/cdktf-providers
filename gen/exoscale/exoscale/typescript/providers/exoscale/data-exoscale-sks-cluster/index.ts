// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscaleSksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#addons DataExoscaleSksCluster#addons}
  */
  readonly addons?: string[];
  /**
  * The CA certificate (in PEM format) for TLS communications between the control plane and the aggregation layer (e.g. `metrics-server`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#aggregation_ca DataExoscaleSksCluster#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * Enable automatic upgrading of the control plane version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#auto_upgrade DataExoscaleSksCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The CNI plugin that is to be used. Available options are "calico" or "cilium". Defaults to "calico". Setting empty string will result in a cluster with no CNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#cni DataExoscaleSksCluster#cni}
  */
  readonly cni?: string;
  /**
  * The CA certificate (in PEM format) for TLS communications between control plane components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#control_plane_ca DataExoscaleSksCluster#control_plane_ca}
  */
  readonly controlPlaneCa?: string;
  /**
  * The cluster creation date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#created_at DataExoscaleSksCluster#created_at}
  */
  readonly createdAt?: string;
  /**
  * A free-form text describing the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#description DataExoscaleSksCluster#description}
  */
  readonly description?: string;
  /**
  * ❗ Indicates whether to deploy the Kubernetes network proxy. (may only be set at creation time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#enable_kube_proxy DataExoscaleSksCluster#enable_kube_proxy}
  */
  readonly enableKubeProxy?: boolean | cdktf.IResolvable;
  /**
  * The cluster API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#endpoint DataExoscaleSksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Deploy the Exoscale [Cloud Controller Manager](https://github.com/exoscale/exoscale-cloud-controller-manager/) in the control plane (boolean; default: `true`; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#exoscale_ccm DataExoscaleSksCluster#exoscale_ccm}
  */
  readonly exoscaleCcm?: boolean | cdktf.IResolvable;
  /**
  * Deploy the Exoscale [Container Storage Interface](https://github.com/exoscale/exoscale-csi-driver/) on worker nodes (boolean; default: `false`; requires the CCM to be enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#exoscale_csi DataExoscaleSksCluster#exoscale_csi}
  */
  readonly exoscaleCsi?: boolean | cdktf.IResolvable;
  /**
  * Feature gates options for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#feature_gates DataExoscaleSksCluster#feature_gates}
  */
  readonly featureGates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#id DataExoscaleSksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CA certificate (in PEM format) for TLS communications between kubelets and the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#kubelet_ca DataExoscaleSksCluster#kubelet_ca}
  */
  readonly kubeletCa?: string;
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#labels DataExoscaleSksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Deploy the [Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server/) in the control plane (boolean; default: `true`; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#metrics_server DataExoscaleSksCluster#metrics_server}
  */
  readonly metricsServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#name DataExoscaleSksCluster#name}
  */
  readonly name?: string;
  /**
  * The list of [exoscale_sks_nodepool](./sks_nodepool.md) (IDs) attached to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#nodepools DataExoscaleSksCluster#nodepools}
  */
  readonly nodepools?: string[];
  /**
  * The service level of the control plane (`pro` or `starter`; default: `pro`; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#service_level DataExoscaleSksCluster#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * The cluster state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#state DataExoscaleSksCluster#state}
  */
  readonly state?: string;
  /**
  * The version of the control plane (default: latest version available from the API; see `exo compute sks versions` for reference; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#version DataExoscaleSksCluster#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#zone DataExoscaleSksCluster#zone}
  */
  readonly zone: string;
  /**
  * audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#audit DataExoscaleSksCluster#audit}
  */
  readonly audit?: DataExoscaleSksClusterAudit;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#oidc DataExoscaleSksCluster#oidc}
  */
  readonly oidc?: DataExoscaleSksClusterOidc;
}
export interface DataExoscaleSksClusterAudit {
  /**
  * The optional bearer token to include in the request header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#bearer_token DataExoscaleSksCluster#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Whether to run the APIServer with the configured Kubernetes Audit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#enabled DataExoscaleSksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Endpoint URL for the Webserver responsible of processing Audit events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#endpoint DataExoscaleSksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The Initial Backoff to wait before sending data to the remote server (default '10s')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#initial_backoff DataExoscaleSksCluster#initial_backoff}
  */
  readonly initialBackoff?: string;
}

export function dataExoscaleSksClusterAuditToTerraform(struct?: DataExoscaleSksClusterAuditOutputReference | DataExoscaleSksClusterAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    initial_backoff: cdktf.stringToTerraform(struct!.initialBackoff),
  }
}


export function dataExoscaleSksClusterAuditToHclTerraform(struct?: DataExoscaleSksClusterAuditOutputReference | DataExoscaleSksClusterAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_backoff: {
      value: cdktf.stringToHclTerraform(struct!.initialBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataExoscaleSksClusterAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataExoscaleSksClusterAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._initialBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialBackoff = this._initialBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksClusterAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
      this._enabled = undefined;
      this._endpoint = undefined;
      this._initialBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
      this._enabled = value.enabled;
      this._endpoint = value.endpoint;
      this._initialBackoff = value.initialBackoff;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // initial_backoff - computed: false, optional: true, required: false
  private _initialBackoff?: string; 
  public get initialBackoff() {
    return this.getStringAttribute('initial_backoff');
  }
  public set initialBackoff(value: string) {
    this._initialBackoff = value;
  }
  public resetInitialBackoff() {
    this._initialBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialBackoffInput() {
    return this._initialBackoff;
  }
}
export interface DataExoscaleSksClusterOidc {
  /**
  * The OpenID client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#client_id DataExoscaleSksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * An OpenID JWT claim to use as the user's group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#groups_claim DataExoscaleSksCluster#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * An OpenID prefix prepended to group claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#groups_prefix DataExoscaleSksCluster#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * The OpenID provider URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#issuer_url DataExoscaleSksCluster#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * A map of key/value pairs that describes a required claim in the OpenID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#required_claim DataExoscaleSksCluster#required_claim}
  */
  readonly requiredClaim?: { [key: string]: string };
  /**
  * An OpenID JWT claim to use as the user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#username_claim DataExoscaleSksCluster#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * An OpenID prefix prepended to username claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#username_prefix DataExoscaleSksCluster#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function dataExoscaleSksClusterOidcToTerraform(struct?: DataExoscaleSksClusterOidcOutputReference | DataExoscaleSksClusterOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claim: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requiredClaim),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function dataExoscaleSksClusterOidcToHclTerraform(struct?: DataExoscaleSksClusterOidcOutputReference | DataExoscaleSksClusterOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupsClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_prefix: {
      value: cdktf.stringToHclTerraform(struct!.groupsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_claim: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requiredClaim),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataExoscaleSksClusterOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataExoscaleSksClusterOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._requiredClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredClaim = this._requiredClaim;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksClusterOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._issuerUrl = undefined;
      this._requiredClaim = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._issuerUrl = value.issuerUrl;
      this._requiredClaim = value.requiredClaim;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // required_claim - computed: false, optional: true, required: false
  private _requiredClaim?: { [key: string]: string }; 
  public get requiredClaim() {
    return this.getStringMapAttribute('required_claim');
  }
  public set requiredClaim(value: { [key: string]: string }) {
    this._requiredClaim = value;
  }
  public resetRequiredClaim() {
    this._requiredClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimInput() {
    return this._requiredClaim;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster exoscale_sks_cluster}
*/
export class DataExoscaleSksCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_sks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscaleSksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscaleSksCluster to import
  * @param importFromId The id of the existing DataExoscaleSksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscaleSksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_sks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_cluster exoscale_sks_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscaleSksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscaleSksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_sks_cluster',
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
    this._addons = config.addons;
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
    this._featureGates = config.featureGates;
    this._id = config.id;
    this._kubeletCa = config.kubeletCa;
    this._labels = config.labels;
    this._metricsServer = config.metricsServer;
    this._name = config.name;
    this._nodepools = config.nodepools;
    this._serviceLevel = config.serviceLevel;
    this._state = config.state;
    this._version = config.version;
    this._zone = config.zone;
    this._audit.internalValue = config.audit;
    this._oidc.internalValue = config.oidc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return cdktf.Fn.tolist(this.getListAttribute('addons'));
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // aggregation_ca - computed: true, optional: true, required: false
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

  // control_plane_ca - computed: true, optional: true, required: false
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

  // created_at - computed: true, optional: true, required: false
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

  // enable_kube_proxy - computed: true, optional: true, required: false
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

  // endpoint - computed: true, optional: true, required: false
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

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: string[]; 
  public get featureGates() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_gates'));
  }
  public set featureGates(value: string[]) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
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

  // kubelet_ca - computed: true, optional: true, required: false
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

  // nodepools - computed: true, optional: true, required: false
  private _nodepools?: string[]; 
  public get nodepools() {
    return cdktf.Fn.tolist(this.getListAttribute('nodepools'));
  }
  public set nodepools(value: string[]) {
    this._nodepools = value;
  }
  public resetNodepools() {
    this._nodepools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolsInput() {
    return this._nodepools;
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

  // state - computed: true, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
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

  // audit - computed: false, optional: true, required: false
  private _audit = new DataExoscaleSksClusterAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }
  public putAudit(value: DataExoscaleSksClusterAudit) {
    this._audit.internalValue = value;
  }
  public resetAudit() {
    this._audit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataExoscaleSksClusterOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataExoscaleSksClusterOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addons),
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
      feature_gates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureGates),
      id: cdktf.stringToTerraform(this._id),
      kubelet_ca: cdktf.stringToTerraform(this._kubeletCa),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      metrics_server: cdktf.booleanToTerraform(this._metricsServer),
      name: cdktf.stringToTerraform(this._name),
      nodepools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodepools),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      state: cdktf.stringToTerraform(this._state),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      audit: dataExoscaleSksClusterAuditToTerraform(this._audit.internalValue),
      oidc: dataExoscaleSksClusterOidcToTerraform(this._oidc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      feature_gates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureGates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      nodepools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodepools),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      audit: {
        value: dataExoscaleSksClusterAuditToHclTerraform(this._audit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataExoscaleSksClusterAuditList",
      },
      oidc: {
        value: dataExoscaleSksClusterOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataExoscaleSksClusterOidcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
