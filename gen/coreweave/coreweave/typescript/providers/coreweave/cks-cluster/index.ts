// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Audit policy for the cluster. Must be provided as a base64-encoded JSON/YAML string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#audit_policy CksCluster#audit_policy}
  */
  readonly auditPolicy?: string;
  /**
  * Authentication webhook configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#authn_webhook CksCluster#authn_webhook}
  */
  readonly authnWebhook?: CksClusterAuthnWebhook;
  /**
  * Authorization webhook configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#authz_webhook CksCluster#authz_webhook}
  */
  readonly authzWebhook?: CksClusterAuthzWebhook;
  /**
  * The names of the vpc prefixes to use as internal load balancer CIDR ranges. Internal load balancers are reachable within the VPC but not accessible from the internet.
  * The prefixes must exist in the cluster's VPC. This field is append-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#internal_lb_cidr_names CksCluster#internal_lb_cidr_names}
  */
  readonly internalLbCidrNames: string[];
  /**
  * The name of the cluster. Must not be longer than 30 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#name CksCluster#name}
  */
  readonly name: string;
  /**
  * Kubernetes Service NodePort range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#node_port_range CksCluster#node_port_range}
  */
  readonly nodePortRange?: CksClusterNodePortRange;
  /**
  * OpenID Connect (OIDC) configuration for authentication to the api-server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#oidc CksCluster#oidc}
  */
  readonly oidc?: CksClusterOidc;
  /**
  * The name of the vpc prefix to use as the pod CIDR range. The prefix must exist in the cluster's VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#pod_cidr_name CksCluster#pod_cidr_name}
  */
  readonly podCidrName: string;
  /**
  * Whether the cluster's api-server is publicly accessible from the internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#public CksCluster#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * The name of the vpc prefix to use as the service CIDR range. The prefix must exist in the cluster's VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#service_cidr_name CksCluster#service_cidr_name}
  */
  readonly serviceCidrName: string;
  /**
  * The `cluster_id` of the cluster to share storage with. Must be enabled by CoreWeave suppport. Contact CoreWeave support if you are interested in this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#shared_storage_cluster_id CksCluster#shared_storage_cluster_id}
  */
  readonly sharedStorageClusterId?: string;
  /**
  * The version of Kubernetes to run on the cluster, in minor version format (e.g. 'v1.32'). Patch versions are automatically applied by CKS as they are released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#version CksCluster#version}
  */
  readonly version: string;
  /**
  * The ID of the VPC in which the cluster is located. Must be a VPC in the same Availability Zone as the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#vpc_id CksCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * The Availability Zone in which the cluster is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#zone CksCluster#zone}
  */
  readonly zone: string;
}
export interface CksClusterAuthnWebhook {
  /**
  * The CA certificate for the webhook server. Must be a base64-encoded PEM-encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#ca CksCluster#ca}
  */
  readonly ca?: string;
  /**
  * The URL of the webhook server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#server CksCluster#server}
  */
  readonly server: string;
}

export function cksClusterAuthnWebhookToTerraform(struct?: CksClusterAuthnWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function cksClusterAuthnWebhookToHclTerraform(struct?: CksClusterAuthnWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CksClusterAuthnWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CksClusterAuthnWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CksClusterAuthnWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._server = value.server;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface CksClusterAuthzWebhook {
  /**
  * The CA certificate for the webhook server. Must be a base64-encoded PEM-encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#ca CksCluster#ca}
  */
  readonly ca?: string;
  /**
  * The URL of the webhook server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#server CksCluster#server}
  */
  readonly server: string;
}

export function cksClusterAuthzWebhookToTerraform(struct?: CksClusterAuthzWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function cksClusterAuthzWebhookToHclTerraform(struct?: CksClusterAuthzWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CksClusterAuthzWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CksClusterAuthzWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CksClusterAuthzWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._server = value.server;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface CksClusterNodePortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#end CksCluster#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#start CksCluster#start}
  */
  readonly start?: number;
}

export function cksClusterNodePortRangeToTerraform(struct?: CksClusterNodePortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function cksClusterNodePortRangeToHclTerraform(struct?: CksClusterNodePortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CksClusterNodePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CksClusterNodePortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CksClusterNodePortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: true, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface CksClusterOidc {
  /**
  * The OIDC group that is bound to the cluster-admin role for bootstrap access to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#admin_group_binding CksCluster#admin_group_binding}
  */
  readonly adminGroupBinding?: string;
  /**
  * The CA certificate for the OIDC issuer. Must be a base64-encoded PEM-encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#ca CksCluster#ca}
  */
  readonly ca?: string;
  /**
  * The client ID for the OIDC client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#client_id CksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * The claim to use as the groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#groups_claim CksCluster#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * The prefix to use for the groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#groups_prefix CksCluster#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * The URL of the OIDC issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#issuer_url CksCluster#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * The claim to require for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#required_claim CksCluster#required_claim}
  */
  readonly requiredClaim?: string;
  /**
  * A list of signing algorithms that the OpenID Connect discovery endpoint uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#signing_algs CksCluster#signing_algs}
  */
  readonly signingAlgs?: string[];
  /**
  * The claim to use as the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#username_claim CksCluster#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * The prefix to use for the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#username_prefix CksCluster#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function cksClusterOidcToTerraform(struct?: CksClusterOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_group_binding: cdktf.stringToTerraform(struct!.adminGroupBinding),
    ca: cdktf.stringToTerraform(struct!.ca),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claim: cdktf.stringToTerraform(struct!.requiredClaim),
    signing_algs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingAlgs),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function cksClusterOidcToHclTerraform(struct?: CksClusterOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_group_binding: {
      value: cdktf.stringToHclTerraform(struct!.adminGroupBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.stringToHclTerraform(struct!.requiredClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_algs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signingAlgs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class CksClusterOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CksClusterOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroupBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroupBinding = this._adminGroupBinding;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
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
    if (this._signingAlgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgs = this._signingAlgs;
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

  public set internalValue(value: CksClusterOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminGroupBinding = undefined;
      this._ca = undefined;
      this._clientId = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._issuerUrl = undefined;
      this._requiredClaim = undefined;
      this._signingAlgs = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminGroupBinding = value.adminGroupBinding;
      this._ca = value.ca;
      this._clientId = value.clientId;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._issuerUrl = value.issuerUrl;
      this._requiredClaim = value.requiredClaim;
      this._signingAlgs = value.signingAlgs;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // admin_group_binding - computed: false, optional: true, required: false
  private _adminGroupBinding?: string; 
  public get adminGroupBinding() {
    return this.getStringAttribute('admin_group_binding');
  }
  public set adminGroupBinding(value: string) {
    this._adminGroupBinding = value;
  }
  public resetAdminGroupBinding() {
    this._adminGroupBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupBindingInput() {
    return this._adminGroupBinding;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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
  private _requiredClaim?: string; 
  public get requiredClaim() {
    return this.getStringAttribute('required_claim');
  }
  public set requiredClaim(value: string) {
    this._requiredClaim = value;
  }
  public resetRequiredClaim() {
    this._requiredClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimInput() {
    return this._requiredClaim;
  }

  // signing_algs - computed: false, optional: true, required: false
  private _signingAlgs?: string[]; 
  public get signingAlgs() {
    return cdktf.Fn.tolist(this.getListAttribute('signing_algs'));
  }
  public set signingAlgs(value: string[]) {
    this._signingAlgs = value;
  }
  public resetSigningAlgs() {
    this._signingAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgsInput() {
    return this._signingAlgs;
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
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster coreweave_cks_cluster}
*/
export class CksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_cks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CksCluster to import
  * @param importFromId The id of the existing CksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_cks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/cks_cluster coreweave_cks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: CksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_cks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditPolicy = config.auditPolicy;
    this._authnWebhook.internalValue = config.authnWebhook;
    this._authzWebhook.internalValue = config.authzWebhook;
    this._internalLbCidrNames = config.internalLbCidrNames;
    this._name = config.name;
    this._nodePortRange.internalValue = config.nodePortRange;
    this._oidc.internalValue = config.oidc;
    this._podCidrName = config.podCidrName;
    this._public = config.public;
    this._serviceCidrName = config.serviceCidrName;
    this._sharedStorageClusterId = config.sharedStorageClusterId;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_server_endpoint - computed: true, optional: false, required: false
  public get apiServerEndpoint() {
    return this.getStringAttribute('api_server_endpoint');
  }

  // audit_policy - computed: false, optional: true, required: false
  private _auditPolicy?: string; 
  public get auditPolicy() {
    return this.getStringAttribute('audit_policy');
  }
  public set auditPolicy(value: string) {
    this._auditPolicy = value;
  }
  public resetAuditPolicy() {
    this._auditPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPolicyInput() {
    return this._auditPolicy;
  }

  // authn_webhook - computed: false, optional: true, required: false
  private _authnWebhook = new CksClusterAuthnWebhookOutputReference(this, "authn_webhook");
  public get authnWebhook() {
    return this._authnWebhook;
  }
  public putAuthnWebhook(value: CksClusterAuthnWebhook) {
    this._authnWebhook.internalValue = value;
  }
  public resetAuthnWebhook() {
    this._authnWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnWebhookInput() {
    return this._authnWebhook.internalValue;
  }

  // authz_webhook - computed: false, optional: true, required: false
  private _authzWebhook = new CksClusterAuthzWebhookOutputReference(this, "authz_webhook");
  public get authzWebhook() {
    return this._authzWebhook;
  }
  public putAuthzWebhook(value: CksClusterAuthzWebhook) {
    this._authzWebhook.internalValue = value;
  }
  public resetAuthzWebhook() {
    this._authzWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzWebhookInput() {
    return this._authzWebhook.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_lb_cidr_names - computed: false, optional: false, required: true
  private _internalLbCidrNames?: string[]; 
  public get internalLbCidrNames() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_lb_cidr_names'));
  }
  public set internalLbCidrNames(value: string[]) {
    this._internalLbCidrNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLbCidrNamesInput() {
    return this._internalLbCidrNames;
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

  // node_port_range - computed: true, optional: true, required: false
  private _nodePortRange = new CksClusterNodePortRangeOutputReference(this, "node_port_range");
  public get nodePortRange() {
    return this._nodePortRange;
  }
  public putNodePortRange(value: CksClusterNodePortRange) {
    this._nodePortRange.internalValue = value;
  }
  public resetNodePortRange() {
    this._nodePortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortRangeInput() {
    return this._nodePortRange.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new CksClusterOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: CksClusterOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // pod_cidr_name - computed: false, optional: false, required: true
  private _podCidrName?: string; 
  public get podCidrName() {
    return this.getStringAttribute('pod_cidr_name');
  }
  public set podCidrName(value: string) {
    this._podCidrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrNameInput() {
    return this._podCidrName;
  }

  // public - computed: true, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // service_account_oidc_issuer_url - computed: true, optional: false, required: false
  public get serviceAccountOidcIssuerUrl() {
    return this.getStringAttribute('service_account_oidc_issuer_url');
  }

  // service_cidr_name - computed: false, optional: false, required: true
  private _serviceCidrName?: string; 
  public get serviceCidrName() {
    return this.getStringAttribute('service_cidr_name');
  }
  public set serviceCidrName(value: string) {
    this._serviceCidrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrNameInput() {
    return this._serviceCidrName;
  }

  // shared_storage_cluster_id - computed: false, optional: true, required: false
  private _sharedStorageClusterId?: string; 
  public get sharedStorageClusterId() {
    return this.getStringAttribute('shared_storage_cluster_id');
  }
  public set sharedStorageClusterId(value: string) {
    this._sharedStorageClusterId = value;
  }
  public resetSharedStorageClusterId() {
    this._sharedStorageClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedStorageClusterIdInput() {
    return this._sharedStorageClusterId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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
      audit_policy: cdktf.stringToTerraform(this._auditPolicy),
      authn_webhook: cksClusterAuthnWebhookToTerraform(this._authnWebhook.internalValue),
      authz_webhook: cksClusterAuthzWebhookToTerraform(this._authzWebhook.internalValue),
      internal_lb_cidr_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalLbCidrNames),
      name: cdktf.stringToTerraform(this._name),
      node_port_range: cksClusterNodePortRangeToTerraform(this._nodePortRange.internalValue),
      oidc: cksClusterOidcToTerraform(this._oidc.internalValue),
      pod_cidr_name: cdktf.stringToTerraform(this._podCidrName),
      public: cdktf.booleanToTerraform(this._public),
      service_cidr_name: cdktf.stringToTerraform(this._serviceCidrName),
      shared_storage_cluster_id: cdktf.stringToTerraform(this._sharedStorageClusterId),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_policy: {
        value: cdktf.stringToHclTerraform(this._auditPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authn_webhook: {
        value: cksClusterAuthnWebhookToHclTerraform(this._authnWebhook.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CksClusterAuthnWebhook",
      },
      authz_webhook: {
        value: cksClusterAuthzWebhookToHclTerraform(this._authzWebhook.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CksClusterAuthzWebhook",
      },
      internal_lb_cidr_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalLbCidrNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_port_range: {
        value: cksClusterNodePortRangeToHclTerraform(this._nodePortRange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CksClusterNodePortRange",
      },
      oidc: {
        value: cksClusterOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CksClusterOidc",
      },
      pod_cidr_name: {
        value: cdktf.stringToHclTerraform(this._podCidrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_cidr_name: {
        value: cdktf.stringToHclTerraform(this._serviceCidrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_storage_cluster_id: {
        value: cdktf.stringToHclTerraform(this._sharedStorageClusterId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
