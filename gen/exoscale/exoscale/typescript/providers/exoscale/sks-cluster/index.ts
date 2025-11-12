// https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#addons SksCluster#addons}
  */
  readonly addons?: string[];
  /**
  * Enable automatic upgrading of the control plane version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#auto_upgrade SksCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The CNI plugin that is to be used. Available options are "calico" or "cilium". Defaults to "calico". Setting empty string will result in a cluster with no CNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#cni SksCluster#cni}
  */
  readonly cni?: string;
  /**
  * A free-form text describing the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#description SksCluster#description}
  */
  readonly description?: string;
  /**
  * Indicates whether to deploy Karpenter for cluster autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#enable_karpenter SksCluster#enable_karpenter}
  */
  readonly enableKarpenter?: boolean | cdktf.IResolvable;
  /**
  * ❗ Indicates whether to deploy the Kubernetes network proxy. (may only be set at creation time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#enable_kube_proxy SksCluster#enable_kube_proxy}
  */
  readonly enableKubeProxy?: boolean | cdktf.IResolvable;
  /**
  * Deploy the Exoscale [Cloud Controller Manager](https://github.com/exoscale/exoscale-cloud-controller-manager/) in the control plane (boolean; default: `true`; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#exoscale_ccm SksCluster#exoscale_ccm}
  */
  readonly exoscaleCcm?: boolean | cdktf.IResolvable;
  /**
  * Deploy the Exoscale [Container Storage Interface](https://github.com/exoscale/exoscale-csi-driver/) on worker nodes (boolean; default: `false`; requires the CCM to be enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#exoscale_csi SksCluster#exoscale_csi}
  */
  readonly exoscaleCsi?: boolean | cdktf.IResolvable;
  /**
  * Feature gates options for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#feature_gates SksCluster#feature_gates}
  */
  readonly featureGates?: string[];
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#labels SksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Deploy the [Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server/) in the control plane (boolean; default: `true`; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#metrics_server SksCluster#metrics_server}
  */
  readonly metricsServer?: boolean | cdktf.IResolvable;
  /**
  * The SKS cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#name SksCluster#name}
  */
  readonly name: string;
  /**
  * The service level of the control plane (`pro` or `starter`; default: `pro`; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#service_level SksCluster#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * The version of the control plane (default: latest version available from the API; see `exo compute sks versions` for reference; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#version SksCluster#version}
  */
  readonly version?: string;
  /**
  * ❗ The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#zone SksCluster#zone}
  */
  readonly zone: string;
  /**
  * audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#audit SksCluster#audit}
  */
  readonly audit?: SksClusterAudit;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#oidc SksCluster#oidc}
  */
  readonly oidc?: SksClusterOidc;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#timeouts SksCluster#timeouts}
  */
  readonly timeouts?: SksClusterTimeouts;
}
export interface SksClusterAudit {
  /**
  * The optional bearer token to include in the request header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#bearer_token SksCluster#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Whether to run the APIServer with the configured Kubernetes Audit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#enabled SksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Endpoint URL for the Webserver responsible of processing Audit events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#endpoint SksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The Initial Backoff to wait before sending data to the remote server (default '10s')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#initial_backoff SksCluster#initial_backoff}
  */
  readonly initialBackoff?: string;
}

export function sksClusterAuditToTerraform(struct?: SksClusterAuditOutputReference | SksClusterAudit): any {
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


export function sksClusterAuditToHclTerraform(struct?: SksClusterAuditOutputReference | SksClusterAudit): any {
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

export class SksClusterAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SksClusterAudit | undefined {
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

  public set internalValue(value: SksClusterAudit | undefined) {
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
export interface SksClusterOidc {
  /**
  * The OpenID client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#client_id SksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * An OpenID JWT claim to use as the user's group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#groups_claim SksCluster#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * An OpenID prefix prepended to group claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#groups_prefix SksCluster#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * The OpenID provider URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#issuer_url SksCluster#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * A map of key/value pairs that describes a required claim in the OpenID Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#required_claim SksCluster#required_claim}
  */
  readonly requiredClaim?: { [key: string]: string };
  /**
  * An OpenID JWT claim to use as the user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#username_claim SksCluster#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * An OpenID prefix prepended to username claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#username_prefix SksCluster#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function sksClusterOidcToTerraform(struct?: SksClusterOidcOutputReference | SksClusterOidc): any {
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


export function sksClusterOidcToHclTerraform(struct?: SksClusterOidcOutputReference | SksClusterOidc): any {
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

export class SksClusterOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SksClusterOidc | undefined {
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

  public set internalValue(value: SksClusterOidc | undefined) {
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
export interface SksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#create SksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#delete SksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#read SksCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#update SksCluster#update}
  */
  readonly update?: string;
}

export function sksClusterTimeoutsToTerraform(struct?: SksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sksClusterTimeoutsToHclTerraform(struct?: SksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SksClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SksClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster exoscale_sks_cluster}
*/
export class SksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_sks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SksCluster to import
  * @param importFromId The id of the existing SksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_sks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.0/docs/resources/sks_cluster exoscale_sks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: SksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_sks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.67.0',
        providerVersionConstraint: '0.67.0'
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
    this._autoUpgrade = config.autoUpgrade;
    this._cni = config.cni;
    this._description = config.description;
    this._enableKarpenter = config.enableKarpenter;
    this._enableKubeProxy = config.enableKubeProxy;
    this._exoscaleCcm = config.exoscaleCcm;
    this._exoscaleCsi = config.exoscaleCsi;
    this._featureGates = config.featureGates;
    this._labels = config.labels;
    this._metricsServer = config.metricsServer;
    this._name = config.name;
    this._serviceLevel = config.serviceLevel;
    this._version = config.version;
    this._zone = config.zone;
    this._audit.internalValue = config.audit;
    this._oidc.internalValue = config.oidc;
    this._timeouts.internalValue = config.timeouts;
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

  // aggregation_ca - computed: true, optional: false, required: false
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
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

  // control_plane_ca - computed: true, optional: false, required: false
  public get controlPlaneCa() {
    return this.getStringAttribute('control_plane_ca');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // enable_karpenter - computed: true, optional: true, required: false
  private _enableKarpenter?: boolean | cdktf.IResolvable; 
  public get enableKarpenter() {
    return this.getBooleanAttribute('enable_karpenter');
  }
  public set enableKarpenter(value: boolean | cdktf.IResolvable) {
    this._enableKarpenter = value;
  }
  public resetEnableKarpenter() {
    this._enableKarpenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKarpenterInput() {
    return this._enableKarpenter;
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

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubelet_ca - computed: true, optional: false, required: false
  public get kubeletCa() {
    return this.getStringAttribute('kubelet_ca');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nodepools - computed: true, optional: false, required: false
  public get nodepools() {
    return cdktf.Fn.tolist(this.getListAttribute('nodepools'));
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
  private _audit = new SksClusterAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }
  public putAudit(value: SksClusterAudit) {
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
  private _oidc = new SksClusterOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: SksClusterOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SksClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addons),
      auto_upgrade: cdktf.booleanToTerraform(this._autoUpgrade),
      cni: cdktf.stringToTerraform(this._cni),
      description: cdktf.stringToTerraform(this._description),
      enable_karpenter: cdktf.booleanToTerraform(this._enableKarpenter),
      enable_kube_proxy: cdktf.booleanToTerraform(this._enableKubeProxy),
      exoscale_ccm: cdktf.booleanToTerraform(this._exoscaleCcm),
      exoscale_csi: cdktf.booleanToTerraform(this._exoscaleCsi),
      feature_gates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureGates),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      metrics_server: cdktf.booleanToTerraform(this._metricsServer),
      name: cdktf.stringToTerraform(this._name),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      audit: sksClusterAuditToTerraform(this._audit.internalValue),
      oidc: sksClusterOidcToTerraform(this._oidc.internalValue),
      timeouts: sksClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_karpenter: {
        value: cdktf.booleanToHclTerraform(this._enableKarpenter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_kube_proxy: {
        value: cdktf.booleanToHclTerraform(this._enableKubeProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: sksClusterAuditToHclTerraform(this._audit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SksClusterAuditList",
      },
      oidc: {
        value: sksClusterOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SksClusterOidcList",
      },
      timeouts: {
        value: sksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
