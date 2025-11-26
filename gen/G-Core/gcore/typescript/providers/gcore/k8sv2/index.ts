// https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8Sv2Config extends cdktf.TerraformMetaArguments {
  /**
  * Cluster autoscaler configuration params. Keys and values are expected to follow the cluster-autoscaler option format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#autoscaler_config K8Sv2#autoscaler_config}
  */
  readonly autoscalerConfig?: { [key: string]: string };
  /**
  * Fixed network used to allocate network addresses for cluster nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#fixed_network K8Sv2#fixed_network}
  */
  readonly fixedNetwork?: string;
  /**
  * Fixed subnet used to allocate network addresses for cluster nodes. Subnet should have a router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#fixed_subnet K8Sv2#fixed_subnet}
  */
  readonly fixedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#id K8Sv2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable public IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#is_ipv6 K8Sv2#is_ipv6}
  */
  readonly isIpv6?: boolean | cdktf.IResolvable;
  /**
  * Name of the keypair used for SSH access to nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#keypair K8Sv2#keypair}
  */
  readonly keypair: string;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#name K8Sv2#name}
  */
  readonly name: string;
  /**
  * Pods IPv4 IP pool in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#pods_ip_pool K8Sv2#pods_ip_pool}
  */
  readonly podsIpPool?: string;
  /**
  * Pods IPv6 IP pool in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#pods_ipv6_pool K8Sv2#pods_ipv6_pool}
  */
  readonly podsIpv6Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#project_id K8Sv2#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#project_name K8Sv2#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#region_id K8Sv2#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#region_name K8Sv2#region_name}
  */
  readonly regionName?: string;
  /**
  * Services IPv4 IP pool in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#services_ip_pool K8Sv2#services_ip_pool}
  */
  readonly servicesIpPool?: string;
  /**
  * Services IPv6 IP pool in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#services_ipv6_pool K8Sv2#services_ipv6_pool}
  */
  readonly servicesIpv6Pool?: string;
  /**
  * Kubernetes version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#version K8Sv2#version}
  */
  readonly version: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#authentication K8Sv2#authentication}
  */
  readonly authentication?: K8Sv2Authentication;
  /**
  * cni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#cni K8Sv2#cni}
  */
  readonly cni?: K8Sv2Cni;
  /**
  * csi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#csi K8Sv2#csi}
  */
  readonly csi?: K8Sv2Csi;
  /**
  * ddos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#ddos_profile K8Sv2#ddos_profile}
  */
  readonly ddosProfile?: K8Sv2DdosProfile;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#pool K8Sv2#pool}
  */
  readonly pool: K8Sv2Pool[] | cdktf.IResolvable;
  /**
  * security_group_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#security_group_rules K8Sv2#security_group_rules}
  */
  readonly securityGroupRules?: K8Sv2SecurityGroupRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#timeouts K8Sv2#timeouts}
  */
  readonly timeouts?: K8Sv2Timeouts;
}
export interface K8Sv2AuthenticationOidc {
  /**
  * A client id that all tokens must be issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#client_id K8Sv2#client_id}
  */
  readonly clientId?: string;
  /**
  * JWT claim to use as the user's group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#groups_claim K8Sv2#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Prefix prepended to group claims to prevent clashes with existing names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#groups_prefix K8Sv2#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * URL of the provider that allows the API server to discover public signing keys. Only URLs that use the https:// scheme are accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#issuer_url K8Sv2#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * A map describing required claims in the ID Token. Each claim is verified to be present in the ID Token with a matching value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#required_claims K8Sv2#required_claims}
  */
  readonly requiredClaims?: { [key: string]: string };
  /**
  * Accepted signing algorithms. Supported values are: RS256, RS384, RS512, ES256, ES384, ES512, PS256, PS384, PS512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#signing_algs K8Sv2#signing_algs}
  */
  readonly signingAlgs?: string[];
  /**
  * JWT claim to use as the user name. When not specified, the `sub` claim will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#username_claim K8Sv2#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * Prefix prepended to username claims to prevent clashes with existing names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#username_prefix K8Sv2#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function k8Sv2AuthenticationOidcToTerraform(struct?: K8Sv2AuthenticationOidcOutputReference | K8Sv2AuthenticationOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requiredClaims),
    signing_algs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingAlgs),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function k8Sv2AuthenticationOidcToHclTerraform(struct?: K8Sv2AuthenticationOidcOutputReference | K8Sv2AuthenticationOidc): any {
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
    required_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requiredClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class K8Sv2AuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2AuthenticationOidc | undefined {
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
    if (this._requiredClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredClaims = this._requiredClaims;
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

  public set internalValue(value: K8Sv2AuthenticationOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._issuerUrl = undefined;
      this._requiredClaims = undefined;
      this._signingAlgs = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._issuerUrl = value.issuerUrl;
      this._requiredClaims = value.requiredClaims;
      this._signingAlgs = value.signingAlgs;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // groups_claim - computed: true, optional: true, required: false
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

  // groups_prefix - computed: true, optional: true, required: false
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

  // issuer_url - computed: true, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // required_claims - computed: true, optional: true, required: false
  private _requiredClaims?: { [key: string]: string }; 
  public get requiredClaims() {
    return this.getStringMapAttribute('required_claims');
  }
  public set requiredClaims(value: { [key: string]: string }) {
    this._requiredClaims = value;
  }
  public resetRequiredClaims() {
    this._requiredClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimsInput() {
    return this._requiredClaims;
  }

  // signing_algs - computed: true, optional: true, required: false
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

  // username_claim - computed: true, optional: true, required: false
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

  // username_prefix - computed: true, optional: true, required: false
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
export interface K8Sv2Authentication {
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#oidc K8Sv2#oidc}
  */
  readonly oidc?: K8Sv2AuthenticationOidc;
}

export function k8Sv2AuthenticationToTerraform(struct?: K8Sv2AuthenticationOutputReference | K8Sv2Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc: k8Sv2AuthenticationOidcToTerraform(struct!.oidc),
  }
}


export function k8Sv2AuthenticationToHclTerraform(struct?: K8Sv2AuthenticationOutputReference | K8Sv2Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc: {
      value: k8Sv2AuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "list",
      storageClassType: "K8Sv2AuthenticationOidcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2AuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2Authentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2Authentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oidc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oidc.internalValue = value.oidc;
    }
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new K8Sv2AuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: K8Sv2AuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }
}
export interface K8Sv2CniCilium {
  /**
  * Enables transparent network encryption. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#encryption K8Sv2#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Enables Hubble Relay. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#hubble_relay K8Sv2#hubble_relay}
  */
  readonly hubbleRelay?: boolean | cdktf.IResolvable;
  /**
  * Enables Hubble UI. Requires `hubble_relay=true`. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#hubble_ui K8Sv2#hubble_ui}
  */
  readonly hubbleUi?: boolean | cdktf.IResolvable;
  /**
  * Enables load balancer acceleration via XDP. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#lb_acceleration K8Sv2#lb_acceleration}
  */
  readonly lbAcceleration?: boolean | cdktf.IResolvable;
  /**
  * The operation mode of load balancing for remote backends. Supported values are snat, dsr, hybrid. The default value is snat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#lb_mode K8Sv2#lb_mode}
  */
  readonly lbMode?: string;
  /**
  * Specifies the size allocated from pods_ip_pool CIDR to node.ipam.podCIDRs. The default value is 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#mask_size K8Sv2#mask_size}
  */
  readonly maskSize?: number;
  /**
  * Specifies the size allocated from pods_ipv6_pool CIDR to node.ipam.podCIDRs. The default value is 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#mask_size_v6 K8Sv2#mask_size_v6}
  */
  readonly maskSizeV6?: number;
  /**
  * Enables native-routing mode or tunneling mode. The default value is tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#routing_mode K8Sv2#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * Tunneling protocol to use in tunneling mode and for ad-hoc tunnels. The default value is geneve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#tunnel K8Sv2#tunnel}
  */
  readonly tunnel?: string;
}

export function k8Sv2CniCiliumToTerraform(struct?: K8Sv2CniCiliumOutputReference | K8Sv2CniCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    hubble_relay: cdktf.booleanToTerraform(struct!.hubbleRelay),
    hubble_ui: cdktf.booleanToTerraform(struct!.hubbleUi),
    lb_acceleration: cdktf.booleanToTerraform(struct!.lbAcceleration),
    lb_mode: cdktf.stringToTerraform(struct!.lbMode),
    mask_size: cdktf.numberToTerraform(struct!.maskSize),
    mask_size_v6: cdktf.numberToTerraform(struct!.maskSizeV6),
    routing_mode: cdktf.stringToTerraform(struct!.routingMode),
    tunnel: cdktf.stringToTerraform(struct!.tunnel),
  }
}


export function k8Sv2CniCiliumToHclTerraform(struct?: K8Sv2CniCiliumOutputReference | K8Sv2CniCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hubble_relay: {
      value: cdktf.booleanToHclTerraform(struct!.hubbleRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hubble_ui: {
      value: cdktf.booleanToHclTerraform(struct!.hubbleUi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lb_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.lbAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lb_mode: {
      value: cdktf.stringToHclTerraform(struct!.lbMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask_size: {
      value: cdktf.numberToHclTerraform(struct!.maskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_size_v6: {
      value: cdktf.numberToHclTerraform(struct!.maskSizeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_mode: {
      value: cdktf.stringToHclTerraform(struct!.routingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.stringToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2CniCiliumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2CniCilium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hubbleRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubbleRelay = this._hubbleRelay;
    }
    if (this._hubbleUi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubbleUi = this._hubbleUi;
    }
    if (this._lbAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbAcceleration = this._lbAcceleration;
    }
    if (this._lbMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMode = this._lbMode;
    }
    if (this._maskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskSize = this._maskSize;
    }
    if (this._maskSizeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskSizeV6 = this._maskSizeV6;
    }
    if (this._routingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingMode = this._routingMode;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2CniCilium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryption = undefined;
      this._hubbleRelay = undefined;
      this._hubbleUi = undefined;
      this._lbAcceleration = undefined;
      this._lbMode = undefined;
      this._maskSize = undefined;
      this._maskSizeV6 = undefined;
      this._routingMode = undefined;
      this._tunnel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryption = value.encryption;
      this._hubbleRelay = value.hubbleRelay;
      this._hubbleUi = value.hubbleUi;
      this._lbAcceleration = value.lbAcceleration;
      this._lbMode = value.lbMode;
      this._maskSize = value.maskSize;
      this._maskSizeV6 = value.maskSizeV6;
      this._routingMode = value.routingMode;
      this._tunnel = value.tunnel;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hubble_relay - computed: false, optional: true, required: false
  private _hubbleRelay?: boolean | cdktf.IResolvable; 
  public get hubbleRelay() {
    return this.getBooleanAttribute('hubble_relay');
  }
  public set hubbleRelay(value: boolean | cdktf.IResolvable) {
    this._hubbleRelay = value;
  }
  public resetHubbleRelay() {
    this._hubbleRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubbleRelayInput() {
    return this._hubbleRelay;
  }

  // hubble_ui - computed: false, optional: true, required: false
  private _hubbleUi?: boolean | cdktf.IResolvable; 
  public get hubbleUi() {
    return this.getBooleanAttribute('hubble_ui');
  }
  public set hubbleUi(value: boolean | cdktf.IResolvable) {
    this._hubbleUi = value;
  }
  public resetHubbleUi() {
    this._hubbleUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubbleUiInput() {
    return this._hubbleUi;
  }

  // lb_acceleration - computed: false, optional: true, required: false
  private _lbAcceleration?: boolean | cdktf.IResolvable; 
  public get lbAcceleration() {
    return this.getBooleanAttribute('lb_acceleration');
  }
  public set lbAcceleration(value: boolean | cdktf.IResolvable) {
    this._lbAcceleration = value;
  }
  public resetLbAcceleration() {
    this._lbAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAccelerationInput() {
    return this._lbAcceleration;
  }

  // lb_mode - computed: false, optional: true, required: false
  private _lbMode?: string; 
  public get lbMode() {
    return this.getStringAttribute('lb_mode');
  }
  public set lbMode(value: string) {
    this._lbMode = value;
  }
  public resetLbMode() {
    this._lbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbModeInput() {
    return this._lbMode;
  }

  // mask_size - computed: true, optional: true, required: false
  private _maskSize?: number; 
  public get maskSize() {
    return this.getNumberAttribute('mask_size');
  }
  public set maskSize(value: number) {
    this._maskSize = value;
  }
  public resetMaskSize() {
    this._maskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskSizeInput() {
    return this._maskSize;
  }

  // mask_size_v6 - computed: true, optional: true, required: false
  private _maskSizeV6?: number; 
  public get maskSizeV6() {
    return this.getNumberAttribute('mask_size_v6');
  }
  public set maskSizeV6(value: number) {
    this._maskSizeV6 = value;
  }
  public resetMaskSizeV6() {
    this._maskSizeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskSizeV6Input() {
    return this._maskSizeV6;
  }

  // routing_mode - computed: false, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: string; 
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
  public set tunnel(value: string) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }
}
export interface K8Sv2Cni {
  /**
  * CNI provider to use when creating the cluster. Supported values are: calico, cilium. The default value is calico.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#provider K8Sv2#provider}
  */
  readonly provider?: string;
  /**
  * cilium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#cilium K8Sv2#cilium}
  */
  readonly cilium?: K8Sv2CniCilium;
}

export function k8Sv2CniToTerraform(struct?: K8Sv2CniOutputReference | K8Sv2Cni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    cilium: k8Sv2CniCiliumToTerraform(struct!.cilium),
  }
}


export function k8Sv2CniToHclTerraform(struct?: K8Sv2CniOutputReference | K8Sv2Cni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cilium: {
      value: k8Sv2CniCiliumToHclTerraform(struct!.cilium),
      isBlock: true,
      type: "list",
      storageClassType: "K8Sv2CniCiliumList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2CniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2Cni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._cilium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cilium = this._cilium?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2Cni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._cilium.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._cilium.internalValue = value.cilium;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // cilium - computed: false, optional: true, required: false
  private _cilium = new K8Sv2CniCiliumOutputReference(this, "cilium");
  public get cilium() {
    return this._cilium;
  }
  public putCilium(value: K8Sv2CniCilium) {
    this._cilium.internalValue = value;
  }
  public resetCilium() {
    this._cilium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciliumInput() {
    return this._cilium.internalValue;
  }
}
export interface K8Sv2CsiNfs {
  /**
  * Enable or disable VAST NFS integration. The default value is false. When set to true, a dedicated StorageClass will be created in the cluster for each VAST NFS file share defined in the cloud. All file shares created prior to cluster creation will be available immediately, while those created afterward may take a few minutes for to appear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#vast_enabled K8Sv2#vast_enabled}
  */
  readonly vastEnabled?: boolean | cdktf.IResolvable;
}

export function k8Sv2CsiNfsToTerraform(struct?: K8Sv2CsiNfsOutputReference | K8Sv2CsiNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vast_enabled: cdktf.booleanToTerraform(struct!.vastEnabled),
  }
}


export function k8Sv2CsiNfsToHclTerraform(struct?: K8Sv2CsiNfsOutputReference | K8Sv2CsiNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vast_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vastEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2CsiNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2CsiNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vastEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vastEnabled = this._vastEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2CsiNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vastEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vastEnabled = value.vastEnabled;
    }
  }

  // vast_enabled - computed: true, optional: true, required: false
  private _vastEnabled?: boolean | cdktf.IResolvable; 
  public get vastEnabled() {
    return this.getBooleanAttribute('vast_enabled');
  }
  public set vastEnabled(value: boolean | cdktf.IResolvable) {
    this._vastEnabled = value;
  }
  public resetVastEnabled() {
    this._vastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vastEnabledInput() {
    return this._vastEnabled;
  }
}
export interface K8Sv2Csi {
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#nfs K8Sv2#nfs}
  */
  readonly nfs?: K8Sv2CsiNfs;
}

export function k8Sv2CsiToTerraform(struct?: K8Sv2CsiOutputReference | K8Sv2Csi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nfs: k8Sv2CsiNfsToTerraform(struct!.nfs),
  }
}


export function k8Sv2CsiToHclTerraform(struct?: K8Sv2CsiOutputReference | K8Sv2Csi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nfs: {
      value: k8Sv2CsiNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "K8Sv2CsiNfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2CsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2Csi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2Csi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfs.internalValue = value.nfs;
    }
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new K8Sv2CsiNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: K8Sv2CsiNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }
}
export interface K8Sv2DdosProfileFields {
  /**
  * Base field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#base_field K8Sv2#base_field}
  */
  readonly baseField: number;
  /**
  * Complex value. Only one of 'value' or 'field_value' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#field_value K8Sv2#field_value}
  */
  readonly fieldValue?: string;
  /**
  * Basic type value. Only one of 'value' or 'field_value' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#value K8Sv2#value}
  */
  readonly value?: string;
}

export function k8Sv2DdosProfileFieldsToTerraform(struct?: K8Sv2DdosProfileFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_field: cdktf.numberToTerraform(struct!.baseField),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function k8Sv2DdosProfileFieldsToHclTerraform(struct?: K8Sv2DdosProfileFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_field: {
      value: cdktf.numberToHclTerraform(struct!.baseField),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_value: {
      value: cdktf.stringToHclTerraform(struct!.fieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2DdosProfileFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8Sv2DdosProfileFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseField !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseField = this._baseField;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2DdosProfileFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseField = undefined;
      this._fieldValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseField = value.baseField;
      this._fieldValue = value.fieldValue;
      this._value = value.value;
    }
  }

  // base_field - computed: false, optional: false, required: true
  private _baseField?: number; 
  public get baseField() {
    return this.getNumberAttribute('base_field');
  }
  public set baseField(value: number) {
    this._baseField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseFieldInput() {
    return this._baseField;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class K8Sv2DdosProfileFieldsList extends cdktf.ComplexList {
  public internalValue? : K8Sv2DdosProfileFields[] | cdktf.IResolvable

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
  public get(index: number): K8Sv2DdosProfileFieldsOutputReference {
    return new K8Sv2DdosProfileFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8Sv2DdosProfile {
  /**
  * Indicates if the DDoS profile is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#enabled K8Sv2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Profile template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#profile_template K8Sv2#profile_template}
  */
  readonly profileTemplate?: number;
  /**
  * Profile template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#profile_template_name K8Sv2#profile_template_name}
  */
  readonly profileTemplateName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#fields K8Sv2#fields}
  */
  readonly fields?: K8Sv2DdosProfileFields[] | cdktf.IResolvable;
}

export function k8Sv2DdosProfileToTerraform(struct?: K8Sv2DdosProfileOutputReference | K8Sv2DdosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile_template: cdktf.numberToTerraform(struct!.profileTemplate),
    profile_template_name: cdktf.stringToTerraform(struct!.profileTemplateName),
    fields: cdktf.listMapper(k8Sv2DdosProfileFieldsToTerraform, true)(struct!.fields),
  }
}


export function k8Sv2DdosProfileToHclTerraform(struct?: K8Sv2DdosProfileOutputReference | K8Sv2DdosProfile): any {
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
    profile_template: {
      value: cdktf.numberToHclTerraform(struct!.profileTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_template_name: {
      value: cdktf.stringToHclTerraform(struct!.profileTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(k8Sv2DdosProfileFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "K8Sv2DdosProfileFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2DdosProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8Sv2DdosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profileTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileTemplate = this._profileTemplate;
    }
    if (this._profileTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileTemplateName = this._profileTemplateName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2DdosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._profileTemplate = undefined;
      this._profileTemplateName = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._profileTemplate = value.profileTemplate;
      this._profileTemplateName = value.profileTemplateName;
      this._fields.internalValue = value.fields;
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

  // profile_template - computed: false, optional: true, required: false
  private _profileTemplate?: number; 
  public get profileTemplate() {
    return this.getNumberAttribute('profile_template');
  }
  public set profileTemplate(value: number) {
    this._profileTemplate = value;
  }
  public resetProfileTemplate() {
    this._profileTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTemplateInput() {
    return this._profileTemplate;
  }

  // profile_template_name - computed: false, optional: true, required: false
  private _profileTemplateName?: string; 
  public get profileTemplateName() {
    return this.getStringAttribute('profile_template_name');
  }
  public set profileTemplateName(value: string) {
    this._profileTemplateName = value;
  }
  public resetProfileTemplateName() {
    this._profileTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTemplateNameInput() {
    return this._profileTemplateName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new K8Sv2DdosProfileFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: K8Sv2DdosProfileFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface K8Sv2Pool {
  /**
  * Enable/disable auto healing of cluster pool nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#auto_healing_enabled K8Sv2#auto_healing_enabled}
  */
  readonly autoHealingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Cluster pool boot volume size. Must be set only for VM pools. Changing the value of this attribute will trigger recreation of the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#boot_volume_size K8Sv2#boot_volume_size}
  */
  readonly bootVolumeSize?: number;
  /**
  * Cluster pool boot volume type. Must be set only for VM pools. Available values are 'standard', 'ssd_hiiops', 'cold', 'ultra'. Changing the value of this attribute will trigger recreation of the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#boot_volume_type K8Sv2#boot_volume_type}
  */
  readonly bootVolumeType?: string;
  /**
  * Crio configuration for pool nodes. Keys and values are expected to follow the crio option format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#crio_config K8Sv2#crio_config}
  */
  readonly crioConfig?: { [key: string]: string };
  /**
  * Cluster pool node flavor ID. Changing the value of this attribute will trigger recreation of the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#flavor_id K8Sv2#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Assign public IPv4 address to nodes in this pool. Changing the value of this attribute will trigger recreation of the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#is_public_ipv4 K8Sv2#is_public_ipv4}
  */
  readonly isPublicIpv4?: boolean | cdktf.IResolvable;
  /**
  * Kubelet configuration for pool nodes. Keys and values are expected to follow the kubelet configuration file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#kubelet_config K8Sv2#kubelet_config}
  */
  readonly kubeletConfig?: { [key: string]: string };
  /**
  * Labels applied to the cluster pool nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#labels K8Sv2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maximum number of nodes in the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#max_node_count K8Sv2#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes in the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#min_node_count K8Sv2#min_node_count}
  */
  readonly minNodeCount: number;
  /**
  * Cluster pool name. Changing the value of this attribute will trigger recreation of the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#name K8Sv2#name}
  */
  readonly name: string;
  /**
  * Server group policy: anti-affinity, soft-anti-affinity or affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#servergroup_policy K8Sv2#servergroup_policy}
  */
  readonly servergroupPolicy?: string;
  /**
  * Taints applied to the cluster pool nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#taints K8Sv2#taints}
  */
  readonly taints?: { [key: string]: string };
}

export function k8Sv2PoolToTerraform(struct?: K8Sv2Pool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_healing_enabled: cdktf.booleanToTerraform(struct!.autoHealingEnabled),
    boot_volume_size: cdktf.numberToTerraform(struct!.bootVolumeSize),
    boot_volume_type: cdktf.stringToTerraform(struct!.bootVolumeType),
    crio_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.crioConfig),
    flavor_id: cdktf.stringToTerraform(struct!.flavorId),
    is_public_ipv4: cdktf.booleanToTerraform(struct!.isPublicIpv4),
    kubelet_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeletConfig),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    name: cdktf.stringToTerraform(struct!.name),
    servergroup_policy: cdktf.stringToTerraform(struct!.servergroupPolicy),
    taints: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.taints),
  }
}


export function k8Sv2PoolToHclTerraform(struct?: K8Sv2Pool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_healing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoHealingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.bootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crio_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.crioConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    flavor_id: {
      value: cdktf.stringToHclTerraform(struct!.flavorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.isPublicIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubelet_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeletConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servergroup_policy: {
      value: cdktf.stringToHclTerraform(struct!.servergroupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taints: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.taints),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2PoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8Sv2Pool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHealingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealingEnabled = this._autoHealingEnabled;
    }
    if (this._bootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSize = this._bootVolumeSize;
    }
    if (this._bootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeType = this._bootVolumeType;
    }
    if (this._crioConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.crioConfig = this._crioConfig;
    }
    if (this._flavorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorId = this._flavorId;
    }
    if (this._isPublicIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublicIpv4 = this._isPublicIpv4;
    }
    if (this._kubeletConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._servergroupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.servergroupPolicy = this._servergroupPolicy;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2Pool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoHealingEnabled = undefined;
      this._bootVolumeSize = undefined;
      this._bootVolumeType = undefined;
      this._crioConfig = undefined;
      this._flavorId = undefined;
      this._isPublicIpv4 = undefined;
      this._kubeletConfig = undefined;
      this._labels = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._name = undefined;
      this._servergroupPolicy = undefined;
      this._taints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoHealingEnabled = value.autoHealingEnabled;
      this._bootVolumeSize = value.bootVolumeSize;
      this._bootVolumeType = value.bootVolumeType;
      this._crioConfig = value.crioConfig;
      this._flavorId = value.flavorId;
      this._isPublicIpv4 = value.isPublicIpv4;
      this._kubeletConfig = value.kubeletConfig;
      this._labels = value.labels;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._name = value.name;
      this._servergroupPolicy = value.servergroupPolicy;
      this._taints = value.taints;
    }
  }

  // auto_healing_enabled - computed: true, optional: true, required: false
  private _autoHealingEnabled?: boolean | cdktf.IResolvable; 
  public get autoHealingEnabled() {
    return this.getBooleanAttribute('auto_healing_enabled');
  }
  public set autoHealingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoHealingEnabled = value;
  }
  public resetAutoHealingEnabled() {
    this._autoHealingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingEnabledInput() {
    return this._autoHealingEnabled;
  }

  // boot_volume_size - computed: true, optional: true, required: false
  private _bootVolumeSize?: number; 
  public get bootVolumeSize() {
    return this.getNumberAttribute('boot_volume_size');
  }
  public set bootVolumeSize(value: number) {
    this._bootVolumeSize = value;
  }
  public resetBootVolumeSize() {
    this._bootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInput() {
    return this._bootVolumeSize;
  }

  // boot_volume_type - computed: true, optional: true, required: false
  private _bootVolumeType?: string; 
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }
  public set bootVolumeType(value: string) {
    this._bootVolumeType = value;
  }
  public resetBootVolumeType() {
    this._bootVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeTypeInput() {
    return this._bootVolumeType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // crio_config - computed: true, optional: true, required: false
  private _crioConfig?: { [key: string]: string }; 
  public get crioConfig() {
    return this.getStringMapAttribute('crio_config');
  }
  public set crioConfig(value: { [key: string]: string }) {
    this._crioConfig = value;
  }
  public resetCrioConfig() {
    this._crioConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crioConfigInput() {
    return this._crioConfig;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // is_public_ipv4 - computed: true, optional: true, required: false
  private _isPublicIpv4?: boolean | cdktf.IResolvable; 
  public get isPublicIpv4() {
    return this.getBooleanAttribute('is_public_ipv4');
  }
  public set isPublicIpv4(value: boolean | cdktf.IResolvable) {
    this._isPublicIpv4 = value;
  }
  public resetIsPublicIpv4() {
    this._isPublicIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicIpv4Input() {
    return this._isPublicIpv4;
  }

  // kubelet_config - computed: true, optional: true, required: false
  private _kubeletConfig?: { [key: string]: string }; 
  public get kubeletConfig() {
    return this.getStringMapAttribute('kubelet_config');
  }
  public set kubeletConfig(value: { [key: string]: string }) {
    this._kubeletConfig = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig;
  }

  // labels - computed: true, optional: true, required: false
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

  // max_node_count - computed: true, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // servergroup_id - computed: true, optional: false, required: false
  public get servergroupId() {
    return this.getStringAttribute('servergroup_id');
  }

  // servergroup_name - computed: true, optional: false, required: false
  public get servergroupName() {
    return this.getStringAttribute('servergroup_name');
  }

  // servergroup_policy - computed: false, optional: true, required: false
  private _servergroupPolicy?: string; 
  public get servergroupPolicy() {
    return this.getStringAttribute('servergroup_policy');
  }
  public set servergroupPolicy(value: string) {
    this._servergroupPolicy = value;
  }
  public resetServergroupPolicy() {
    this._servergroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servergroupPolicyInput() {
    return this._servergroupPolicy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // taints - computed: true, optional: true, required: false
  private _taints?: { [key: string]: string }; 
  public get taints() {
    return this.getStringMapAttribute('taints');
  }
  public set taints(value: { [key: string]: string }) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }
}

export class K8Sv2PoolList extends cdktf.ComplexList {
  public internalValue? : K8Sv2Pool[] | cdktf.IResolvable

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
  public get(index: number): K8Sv2PoolOutputReference {
    return new K8Sv2PoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8Sv2SecurityGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#description K8Sv2#description}
  */
  readonly description?: string;
  /**
  * Available value is 'ingress', 'egress'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#direction K8Sv2#direction}
  */
  readonly direction: string;
  /**
  * Available value is 'IPv4', 'IPv6'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#ethertype K8Sv2#ethertype}
  */
  readonly ethertype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#port_range_max K8Sv2#port_range_max}
  */
  readonly portRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#port_range_min K8Sv2#port_range_min}
  */
  readonly portRangeMin?: number;
  /**
  * Available value is udp,tcp,any,ipv6-icmp,ipv6-route,ipv6-opts,ipv6-nonxt,ipv6-frag,ipv6-encap,icmp,ah,dccp,egp,esp,gre,igmp,ospf,pgm,rsvp,sctp,udplite,vrrp,51,50,112,0,4,ipip,ipencap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#protocol K8Sv2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#remote_group_id K8Sv2#remote_group_id}
  */
  readonly remoteGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#remote_ip_prefix K8Sv2#remote_ip_prefix}
  */
  readonly remoteIpPrefix?: string;
}

export function k8Sv2SecurityGroupRulesToTerraform(struct?: K8Sv2SecurityGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    direction: cdktf.stringToTerraform(struct!.direction),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    port_range_max: cdktf.numberToTerraform(struct!.portRangeMax),
    port_range_min: cdktf.numberToTerraform(struct!.portRangeMin),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_group_id: cdktf.stringToTerraform(struct!.remoteGroupId),
    remote_ip_prefix: cdktf.stringToTerraform(struct!.remoteIpPrefix),
  }
}


export function k8Sv2SecurityGroupRulesToHclTerraform(struct?: K8Sv2SecurityGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_max: {
      value: cdktf.numberToHclTerraform(struct!.portRangeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_min: {
      value: cdktf.numberToHclTerraform(struct!.portRangeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_group_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8Sv2SecurityGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8Sv2SecurityGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._portRangeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeMax = this._portRangeMax;
    }
    if (this._portRangeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeMin = this._portRangeMin;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGroupId = this._remoteGroupId;
    }
    if (this._remoteIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpPrefix = this._remoteIpPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2SecurityGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._direction = undefined;
      this._ethertype = undefined;
      this._portRangeMax = undefined;
      this._portRangeMin = undefined;
      this._protocol = undefined;
      this._remoteGroupId = undefined;
      this._remoteIpPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._direction = value.direction;
      this._ethertype = value.ethertype;
      this._portRangeMax = value.portRangeMax;
      this._portRangeMin = value.portRangeMin;
      this._protocol = value.protocol;
      this._remoteGroupId = value.remoteGroupId;
      this._remoteIpPrefix = value.remoteIpPrefix;
    }
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ethertype - computed: false, optional: false, required: true
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_range_max - computed: false, optional: true, required: false
  private _portRangeMax?: number; 
  public get portRangeMax() {
    return this.getNumberAttribute('port_range_max');
  }
  public set portRangeMax(value: number) {
    this._portRangeMax = value;
  }
  public resetPortRangeMax() {
    this._portRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMaxInput() {
    return this._portRangeMax;
  }

  // port_range_min - computed: false, optional: true, required: false
  private _portRangeMin?: number; 
  public get portRangeMin() {
    return this.getNumberAttribute('port_range_min');
  }
  public set portRangeMin(value: number) {
    this._portRangeMin = value;
  }
  public resetPortRangeMin() {
    this._portRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMinInput() {
    return this._portRangeMin;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_group_id - computed: false, optional: true, required: false
  private _remoteGroupId?: string; 
  public get remoteGroupId() {
    return this.getStringAttribute('remote_group_id');
  }
  public set remoteGroupId(value: string) {
    this._remoteGroupId = value;
  }
  public resetRemoteGroupId() {
    this._remoteGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupIdInput() {
    return this._remoteGroupId;
  }

  // remote_ip_prefix - computed: false, optional: true, required: false
  private _remoteIpPrefix?: string; 
  public get remoteIpPrefix() {
    return this.getStringAttribute('remote_ip_prefix');
  }
  public set remoteIpPrefix(value: string) {
    this._remoteIpPrefix = value;
  }
  public resetRemoteIpPrefix() {
    this._remoteIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpPrefixInput() {
    return this._remoteIpPrefix;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class K8Sv2SecurityGroupRulesList extends cdktf.ComplexList {
  public internalValue? : K8Sv2SecurityGroupRules[] | cdktf.IResolvable

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
  public get(index: number): K8Sv2SecurityGroupRulesOutputReference {
    return new K8Sv2SecurityGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8Sv2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#create K8Sv2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#update K8Sv2#update}
  */
  readonly update?: string;
}

export function k8Sv2TimeoutsToTerraform(struct?: K8Sv2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function k8Sv2TimeoutsToHclTerraform(struct?: K8Sv2Timeouts | cdktf.IResolvable): any {
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

export class K8Sv2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): K8Sv2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8Sv2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2 gcore_k8sv2}
*/
export class K8Sv2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_k8sv2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8Sv2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8Sv2 to import
  * @param importFromId The id of the existing K8Sv2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8Sv2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_k8sv2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/k8sv2 gcore_k8sv2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8Sv2Config
  */
  public constructor(scope: Construct, id: string, config: K8Sv2Config) {
    super(scope, id, {
      terraformResourceType: 'gcore_k8sv2',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.1',
        providerVersionConstraint: '0.32.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalerConfig = config.autoscalerConfig;
    this._fixedNetwork = config.fixedNetwork;
    this._fixedSubnet = config.fixedSubnet;
    this._id = config.id;
    this._isIpv6 = config.isIpv6;
    this._keypair = config.keypair;
    this._name = config.name;
    this._podsIpPool = config.podsIpPool;
    this._podsIpv6Pool = config.podsIpv6Pool;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._servicesIpPool = config.servicesIpPool;
    this._servicesIpv6Pool = config.servicesIpv6Pool;
    this._version = config.version;
    this._authentication.internalValue = config.authentication;
    this._cni.internalValue = config.cni;
    this._csi.internalValue = config.csi;
    this._ddosProfile.internalValue = config.ddosProfile;
    this._pool.internalValue = config.pool;
    this._securityGroupRules.internalValue = config.securityGroupRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaler_config - computed: true, optional: true, required: false
  private _autoscalerConfig?: { [key: string]: string }; 
  public get autoscalerConfig() {
    return this.getStringMapAttribute('autoscaler_config');
  }
  public set autoscalerConfig(value: { [key: string]: string }) {
    this._autoscalerConfig = value;
  }
  public resetAutoscalerConfig() {
    this._autoscalerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerConfigInput() {
    return this._autoscalerConfig;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_task_id - computed: true, optional: false, required: false
  public get creatorTaskId() {
    return this.getStringAttribute('creator_task_id');
  }

  // fixed_network - computed: false, optional: true, required: false
  private _fixedNetwork?: string; 
  public get fixedNetwork() {
    return this.getStringAttribute('fixed_network');
  }
  public set fixedNetwork(value: string) {
    this._fixedNetwork = value;
  }
  public resetFixedNetwork() {
    this._fixedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNetworkInput() {
    return this._fixedNetwork;
  }

  // fixed_subnet - computed: false, optional: true, required: false
  private _fixedSubnet?: string; 
  public get fixedSubnet() {
    return this.getStringAttribute('fixed_subnet');
  }
  public set fixedSubnet(value: string) {
    this._fixedSubnet = value;
  }
  public resetFixedSubnet() {
    this._fixedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSubnetInput() {
    return this._fixedSubnet;
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

  // is_ipv6 - computed: false, optional: true, required: false
  private _isIpv6?: boolean | cdktf.IResolvable; 
  public get isIpv6() {
    return this.getBooleanAttribute('is_ipv6');
  }
  public set isIpv6(value: boolean | cdktf.IResolvable) {
    this._isIpv6 = value;
  }
  public resetIsIpv6() {
    this._isIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6Input() {
    return this._isIpv6;
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // keypair - computed: false, optional: false, required: true
  private _keypair?: string; 
  public get keypair() {
    return this.getStringAttribute('keypair');
  }
  public set keypair(value: string) {
    this._keypair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair;
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

  // pods_ip_pool - computed: true, optional: true, required: false
  private _podsIpPool?: string; 
  public get podsIpPool() {
    return this.getStringAttribute('pods_ip_pool');
  }
  public set podsIpPool(value: string) {
    this._podsIpPool = value;
  }
  public resetPodsIpPool() {
    this._podsIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsIpPoolInput() {
    return this._podsIpPool;
  }

  // pods_ipv6_pool - computed: true, optional: true, required: false
  private _podsIpv6Pool?: string; 
  public get podsIpv6Pool() {
    return this.getStringAttribute('pods_ipv6_pool');
  }
  public set podsIpv6Pool(value: string) {
    this._podsIpv6Pool = value;
  }
  public resetPodsIpv6Pool() {
    this._podsIpv6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsIpv6PoolInput() {
    return this._podsIpv6Pool;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // services_ip_pool - computed: true, optional: true, required: false
  private _servicesIpPool?: string; 
  public get servicesIpPool() {
    return this.getStringAttribute('services_ip_pool');
  }
  public set servicesIpPool(value: string) {
    this._servicesIpPool = value;
  }
  public resetServicesIpPool() {
    this._servicesIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpPoolInput() {
    return this._servicesIpPool;
  }

  // services_ipv6_pool - computed: true, optional: true, required: false
  private _servicesIpv6Pool?: string; 
  public get servicesIpv6Pool() {
    return this.getStringAttribute('services_ipv6_pool');
  }
  public set servicesIpv6Pool(value: string) {
    this._servicesIpv6Pool = value;
  }
  public resetServicesIpv6Pool() {
    this._servicesIpv6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv6PoolInput() {
    return this._servicesIpv6Pool;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new K8Sv2AuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: K8Sv2Authentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // cni - computed: false, optional: true, required: false
  private _cni = new K8Sv2CniOutputReference(this, "cni");
  public get cni() {
    return this._cni;
  }
  public putCni(value: K8Sv2Cni) {
    this._cni.internalValue = value;
  }
  public resetCni() {
    this._cni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new K8Sv2CsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: K8Sv2Csi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // ddos_profile - computed: false, optional: true, required: false
  private _ddosProfile = new K8Sv2DdosProfileOutputReference(this, "ddos_profile");
  public get ddosProfile() {
    return this._ddosProfile;
  }
  public putDdosProfile(value: K8Sv2DdosProfile) {
    this._ddosProfile.internalValue = value;
  }
  public resetDdosProfile() {
    this._ddosProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProfileInput() {
    return this._ddosProfile.internalValue;
  }

  // pool - computed: false, optional: false, required: true
  private _pool = new K8Sv2PoolList(this, "pool", false);
  public get pool() {
    return this._pool;
  }
  public putPool(value: K8Sv2Pool[] | cdktf.IResolvable) {
    this._pool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // security_group_rules - computed: false, optional: true, required: false
  private _securityGroupRules = new K8Sv2SecurityGroupRulesList(this, "security_group_rules", true);
  public get securityGroupRules() {
    return this._securityGroupRules;
  }
  public putSecurityGroupRules(value: K8Sv2SecurityGroupRules[] | cdktf.IResolvable) {
    this._securityGroupRules.internalValue = value;
  }
  public resetSecurityGroupRules() {
    this._securityGroupRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRulesInput() {
    return this._securityGroupRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8Sv2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8Sv2Timeouts) {
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
      autoscaler_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._autoscalerConfig),
      fixed_network: cdktf.stringToTerraform(this._fixedNetwork),
      fixed_subnet: cdktf.stringToTerraform(this._fixedSubnet),
      id: cdktf.stringToTerraform(this._id),
      is_ipv6: cdktf.booleanToTerraform(this._isIpv6),
      keypair: cdktf.stringToTerraform(this._keypair),
      name: cdktf.stringToTerraform(this._name),
      pods_ip_pool: cdktf.stringToTerraform(this._podsIpPool),
      pods_ipv6_pool: cdktf.stringToTerraform(this._podsIpv6Pool),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      services_ip_pool: cdktf.stringToTerraform(this._servicesIpPool),
      services_ipv6_pool: cdktf.stringToTerraform(this._servicesIpv6Pool),
      version: cdktf.stringToTerraform(this._version),
      authentication: k8Sv2AuthenticationToTerraform(this._authentication.internalValue),
      cni: k8Sv2CniToTerraform(this._cni.internalValue),
      csi: k8Sv2CsiToTerraform(this._csi.internalValue),
      ddos_profile: k8Sv2DdosProfileToTerraform(this._ddosProfile.internalValue),
      pool: cdktf.listMapper(k8Sv2PoolToTerraform, true)(this._pool.internalValue),
      security_group_rules: cdktf.listMapper(k8Sv2SecurityGroupRulesToTerraform, true)(this._securityGroupRules.internalValue),
      timeouts: k8Sv2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaler_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._autoscalerConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fixed_network: {
        value: cdktf.stringToHclTerraform(this._fixedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_subnet: {
        value: cdktf.stringToHclTerraform(this._fixedSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ipv6: {
        value: cdktf.booleanToHclTerraform(this._isIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keypair: {
        value: cdktf.stringToHclTerraform(this._keypair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pods_ip_pool: {
        value: cdktf.stringToHclTerraform(this._podsIpPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pods_ipv6_pool: {
        value: cdktf.stringToHclTerraform(this._podsIpv6Pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services_ip_pool: {
        value: cdktf.stringToHclTerraform(this._servicesIpPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services_ipv6_pool: {
        value: cdktf.stringToHclTerraform(this._servicesIpv6Pool),
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
      authentication: {
        value: k8Sv2AuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8Sv2AuthenticationList",
      },
      cni: {
        value: k8Sv2CniToHclTerraform(this._cni.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8Sv2CniList",
      },
      csi: {
        value: k8Sv2CsiToHclTerraform(this._csi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8Sv2CsiList",
      },
      ddos_profile: {
        value: k8Sv2DdosProfileToHclTerraform(this._ddosProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8Sv2DdosProfileList",
      },
      pool: {
        value: cdktf.listMapperHcl(k8Sv2PoolToHclTerraform, true)(this._pool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8Sv2PoolList",
      },
      security_group_rules: {
        value: cdktf.listMapperHcl(k8Sv2SecurityGroupRulesToHclTerraform, true)(this._securityGroupRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "K8Sv2SecurityGroupRulesList",
      },
      timeouts: {
        value: k8Sv2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K8Sv2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
